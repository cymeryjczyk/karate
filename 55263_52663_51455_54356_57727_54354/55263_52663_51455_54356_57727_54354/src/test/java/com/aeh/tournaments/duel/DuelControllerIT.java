package com.aeh.tournaments.duel;

import com.aeh.tournaments.competitors.CompetitorDTO;
import com.aeh.tournaments.competitors.CompetitorService;
import com.fasterxml.jackson.databind.ObjectMapper;
import io.restassured.RestAssured;
import io.restassured.http.ContentType;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.server.LocalServerPort;
import org.springframework.http.HttpStatus;
import org.springframework.test.context.ActiveProfiles;

import java.util.Collections;

import static io.restassured.RestAssured.*;
import static org.hamcrest.Matchers.*;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;


@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@ActiveProfiles("test")
class DuelControllerIT {

    @LocalServerPort
    private int port;

    @BeforeEach
    public void setUp() {
        RestAssured.port = port;
    }

    @Autowired
    private DuelService duelService;
    @Autowired
    private CompetitorService competitorService;

    @Autowired
    private ObjectMapper objectMapper;

    @Test
    void getAllDuelsShouldDownloadAllDuels() {
        DuelService duelService = mock(DuelService.class);
        when(duelService.getAllDuels()).thenReturn(Collections.emptyList());

        given()
                .contentType(io.restassured.http.ContentType.JSON)
                .when()
                .get("/duels")
                .then()
                .statusCode(200)
                .contentType(io.restassured.http.ContentType.JSON)
                .body("", hasSize(0));
    }

    @Test
    void getDuelByIdIfDuelExists() {
        DuelDTO duelDTO = new DuelDTO();
        duelDTO.setId(1L);
        duelDTO.setParticipant1(1L);
        duelDTO.setParticipant2(2L);
        duelDTO.setWinner(1L);

        duelService.save(duelDTO);

        given()
                .contentType(ContentType.JSON)
                .when()
                .get("/duels/1")
                .then()
                .statusCode(200)
                .contentType(ContentType.JSON)
                .body("id", equalTo(1))
                .body("participant1", equalTo(1))
                .body("participant2", equalTo(2))
                .body("winner", equalTo(1));
    }

    @Test
    void getDuelByIdIfNotExists() {
        DuelService duelService = mock(DuelService.class);
        when(duelService.getDuelById(100L)).thenReturn(null);

        given()
                .contentType(ContentType.JSON)
                .when()
                .get("/duels/100")
                .then()
                .statusCode(HttpStatus.NOT_FOUND.value());
    }

    @Test
    void addDuelIfNotExists() throws Exception {
        DuelDTO duelDTO = new DuelDTO();
        duelDTO.setId(1L);
        duelDTO.setParticipant1(1L);
        duelDTO.setParticipant2(2L);
        duelDTO.setWinner(1L);

        DuelService duelService = mock(DuelService.class);
        when(duelService.save(duelDTO)).thenReturn(duelDTO);

        given()
                .contentType(ContentType.JSON)
                .body(objectMapper.writeValueAsString(duelDTO))
                .when()
                .post("/duels")
                .then()
                .statusCode(HttpStatus.CREATED.value())
                .body("id", equalTo(1))
                .body("participant1", equalTo(1))
                .body("participant2", equalTo(2))
                .body("winner", equalTo(1));
    }

    @Test
    void updateDuelShouldAllowedToChangeData() throws Exception {
        CompetitorDTO competitor1DTO = new CompetitorDTO();
        competitor1DTO.setId(1L);
        competitor1DTO.setAge(18);
        competitor1DTO.setCategory("Kumite");
        competitor1DTO.setName("John");
        competitor1DTO.setSurname("Smith");
        competitor1DTO.setClub("Dragon");
        competitor1DTO = competitorService.save(competitor1DTO);
        CompetitorDTO competitor2DTO = new CompetitorDTO();
        competitor2DTO.setId(2L);
        competitor2DTO.setAge(18);
        competitor2DTO.setCategory("Kumite");
        competitor2DTO.setName("John");
        competitor2DTO.setSurname("Smith");
        competitor2DTO.setClub("Dragon");
        competitor2DTO = competitorService.save(competitor2DTO);

        DuelDTO duelDTO = new DuelDTO();
        duelDTO.setId(1L);
        duelDTO.setParticipant1(competitor1DTO.getId());
        duelDTO.setParticipant2(competitor2DTO.getId());
        duelDTO.setWinner(null);
        duelDTO = duelService.save(duelDTO);

        given()
                .contentType(ContentType.JSON)
                .when()
                .patch("/duels/{duelId}/winner/{competitorId}",duelDTO.getId() ,duelDTO.getParticipant1())
                .then()
                .statusCode(200)
                .body("id", equalTo((int) duelDTO.getId()))
                .body("participant1", equalTo(duelDTO.getParticipant1().intValue()))
                .body("participant2", equalTo(duelDTO.getParticipant2().intValue()))
                .body("winner", equalTo(duelDTO.getParticipant1().intValue()));
    }

    @Test
    void deleteDuelIfNotNeeded() {
        given()
                .contentType(ContentType.JSON)
                .when()
                .delete("/duels/1")
                .then()
                .statusCode(HttpStatus.NO_CONTENT.value());
    }
}
