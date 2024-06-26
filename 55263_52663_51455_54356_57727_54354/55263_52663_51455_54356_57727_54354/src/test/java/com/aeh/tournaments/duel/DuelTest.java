package com.aeh.tournaments.duel;


import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@ActiveProfiles("test")
class DuelTest {

    @Test
    void entityTest() {

        Duel duel = new Duel();
        duel.setId(1L);
        duel.setParticipant1(1L);
        duel.setParticipant2(2L);
        duel.setWinner(1L);

        assertThat(duel).isInstanceOf(Duel.class);
        assertThat(duel.getId()).isEqualTo(1L);
        assertThat(duel.getParticipant1()).isEqualTo(1L);
        assertThat(duel.getParticipant2()).isEqualTo(2L);
        assertThat(duel.getWinner()).isEqualTo(1L);

    }
}