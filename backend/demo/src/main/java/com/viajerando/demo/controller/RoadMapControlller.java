package com.viajerando.demo.controller;

import com.viajerando.demo.entity.Destiny;
import com.viajerando.demo.entity.RoadMap;
import com.viajerando.demo.entity.User;
import com.viajerando.demo.repository.DestinyRepository;
import com.viajerando.demo.repository.RoadMapRepository;
import com.viajerando.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.persistence.EntityNotFoundException;
import java.util.*;

@RestController
@RequestMapping("/roadmaps")
public class RoadMapControlller {

    @Autowired
    RoadMapRepository roadMapRepository;

    @Autowired
    UserRepository userRepository;

    @Autowired
    DestinyRepository destinyRepository;

    @GetMapping
    List<RoadMap> getRoadMaps() {return roadMapRepository.findAll();}

    @GetMapping("/{id}")
     ResponseEntity<RoadMap> getRoadMapById(@PathVariable(value = "id") Long roadMapId)
            throws EntityNotFoundException {
        RoadMap roadMap =
                roadMapRepository
                        .findById(roadMapId)
                        .orElseThrow(() -> new EntityNotFoundException("RoadMap not found on :: " + roadMapId));
        return ResponseEntity.ok().body(roadMap);
    }

    @PostMapping
    RoadMap createRoadMap(@RequestBody RoadMap roadMap) {return roadMapRepository.save(roadMap);}

    @PostMapping("/{idsDestinies}")
    RoadMap createRoadMapWithDestinies(@RequestBody RoadMap roadMap, @PathVariable String idsDestinies) {
        String[] ids = idsDestinies.split("-");
        for (String id : ids) {
            Destiny destiny = destinyRepository.findById(Long.parseLong(id)).orElseThrow();
            roadMap.enrolledDestiny.add(destiny);
        }
        return roadMapRepository.save(roadMap);
    }

    @PutMapping("/{roadmapId}/user/{userId}")
    RoadMap addRoadMapToUser(@PathVariable Long roadmapId, @PathVariable Long userId) throws IllegalAccessException {
        RoadMap roadMap = roadMapRepository.findById(roadmapId).orElseThrow(() -> new EntityNotFoundException("RoadMap not found on :: " + roadmapId));
        User user = userRepository.findById(userId).orElseThrow(() -> new EntityNotFoundException("RoadMap not found on :: " + userId));
        if(roadMap.getUser() != null) throw new IllegalAccessException("This Entity has user");
        roadMap.setUser(user);
        return roadMapRepository.save(roadMap);
    }

    @PutMapping("/{roadmapId}/destiny/{destinyId}")
    RoadMap addDestinyToRoadMap(@PathVariable Long roadmapId, @PathVariable Long destinyId) throws IllegalAccessException {
        RoadMap roadMap = roadMapRepository.findById(roadmapId).orElseThrow(() -> new EntityNotFoundException("RoadMap not found on :: " + roadmapId));
        Destiny destiny = destinyRepository.findById(destinyId).orElseThrow(() -> new EntityNotFoundException("RoadMap not found on :: " + destinyId));
        roadMap.enrolledDestiny.add(destiny);
        roadMap.setTotalPrice(roadMap.getTotalPrice());
        return roadMapRepository.save(roadMap);
    }

    @PutMapping("/{id}")
     ResponseEntity<RoadMap> updateRoadMap(
            @PathVariable(value = "id") Long roadMapId, @RequestBody RoadMap roadMapDetails)
            throws EntityNotFoundException {

        RoadMap roadMap =
                roadMapRepository
                        .findById(roadMapId)
                        .orElseThrow(() -> new EntityNotFoundException("RoadMap not found on :: " + roadMapId));

        roadMap.setInitialDate(roadMapDetails.getInitialDate());
        roadMap.setFinalDate(roadMapDetails.getFinalDate());
        roadMap.setTotalPrice(roadMapDetails.getTotalPrice());
        roadMap.setUser(roadMapDetails.getUser());
        roadMap.setId(roadMapDetails.getId());
        final RoadMap updatedRoadMap = roadMapRepository.save(roadMap);
        return ResponseEntity.ok(updatedRoadMap);
    }

    @DeleteMapping("/{id}")
     Map<String, Boolean> deleteRoadMap(@PathVariable(value = "id") Long roadMapId) throws Exception {
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
