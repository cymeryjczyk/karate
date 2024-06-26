package com.aeh.tournaments.competitors;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CompetitorService {

    private final CompetitorRepository competitorRepository;

    CompetitorService(CompetitorRepository competitorRepository) {
        this.competitorRepository = competitorRepository;
    }

    public CompetitorDTO save(CompetitorDTO competitor) {
        return CompetitorDTO.toDto(competitorRepository.save(competitor.toEntity()));
    }

    public CompetitorDTO getCompetitorById(long competitorId) {
        return CompetitorDTO.toDto(competitorRepository.findById(competitorId).orElseThrow());
    }

    List<CompetitorDTO> getAllCompetitors() {
        return competitorRepository.findAll().stream().map(CompetitorDTO::toDto).toList();
    }

    public CompetitorDTO update(CompetitorDTO competitor) {
        return CompetitorDTO.toDto(competitorRepository.save(competitor.toEntity()));
    }

    void delete(long competitorId) {
        competitorRepository.deleteById(competitorId);
    }

    public void setSkippedLast(long competitorId) {
        Competitor competitor = competitorRepository.findById(competitorId).orElseThrow();
        competitor.setSkippedLast(!competitor.isSkippedLast());
        competitorRepository.save(competitor);
    }
}
