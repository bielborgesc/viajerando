package com.viajerando.demo.controller;

import com.viajerando.demo.entity.RoadMap;
import com.viajerando.demo.repository.RoadMapRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.persistence.EntityNotFoundException;
import javax.validation.Valid;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/viajerando")
public class RoadMapControlller {

    @Autowired
    private RoadMapRepository roadMapRepository;

    @GetMapping("/roadmaps")
    public List<RoadMap> getAllRoadMaps() {
        return roadMapRepository.findAll();
    }

    @GetMapping("/roadmap/{id}")
    public ResponseEntity<RoadMap> getRoadMapById(@PathVariable(value = "id") Long roadMapId)
            throws EntityNotFoundException {
        RoadMap roadMap =
                roadMapRepository
                        .findById(roadMapId)
                        .orElseThrow(() -> new EntityNotFoundException("RoadMap not found on :: " + roadMapId));
        return ResponseEntity.ok().body(roadMap);
    }

    @PostMapping("/roadmap")
    public RoadMap createRoadMap(@Valid @RequestBody RoadMap roadMap) {
        return roadMapRepository.save(roadMap);
    }

    @PutMapping("/roadmap/{id}")
    public ResponseEntity<RoadMap> updateRoadMap(
            @PathVariable(value = "id") Long roadMapId, @Valid @RequestBody RoadMap roadMapDetails)
            throws EntityNotFoundException {

        RoadMap roadMap =
                roadMapRepository
                        .findById(roadMapId)
                        .orElseThrow(() -> new EntityNotFoundException("RoadMap not found on :: " + roadMapId));

        roadMap.setStatus(roadMapDetails.getStatus());
        roadMap.setInitialDate(roadMapDetails.getInitialDate());
        roadMap.setFinalDate(roadMapDetails.getFinalDate());
        roadMap.setTotalPrice(roadMapDetails.getTotalPrice());
        roadMap.setUser(roadMapDetails.getUser());
        roadMap.setId(roadMapDetails.getId());
        final RoadMap updatedRoadMap = roadMapRepository.save(roadMap);
        return ResponseEntity.ok(updatedRoadMap);
    }

    @DeleteMapping("/roadmap/{id}")
    public Map<String, Boolean> deleteRoadMap(@PathVariable(value = "id") Long roadMapId) throws Exception {
        RoadMap roadMap =
                roadMapRepository
                        .findById(roadMapId)
                        .orElseThrow(() -> new EntityNotFoundException("RoadMap not found on :: " + roadMapId));

        roadMapRepository.delete(roadMap);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }
}
