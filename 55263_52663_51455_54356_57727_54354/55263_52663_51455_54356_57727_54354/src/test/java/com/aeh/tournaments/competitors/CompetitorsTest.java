package com.aeh.tournaments.competitors;

import org.junit.jupiter.api.Test;
import org.springframework.test.context.ActiveProfiles;

import static org.assertj.core.api.Assertions.assertThat;

@ActiveProfiles("test")
class CompetitorsTest {

    @Test
    void entityTest() {
        Competitor competitor = new Competitor();
        competitor.setId(1L);
        competitor.setName("John");
        competitor.setSurname("Smith");
        competitor.setAge(10);
        competitor.setCategory("Kumite");
        competitor.setClub("Dragons");

        assertThat(competitor).isInstanceOf(Competitor.class);
        assertThat(competitor.getId()).isEqualTo(1);
        assertThat(competitor.getName()).isEqualTo("John");
        assertThat(competitor.getSurname()).isEqualTo("Smith");
        assertThat(competitor.getAge()).isEqualTo(10);
        assertThat(competitor.getCategory()).isEqualTo("Kumite");
        assertThat(competitor.getClub()).isEqualTo("Dragons");
    }
}
