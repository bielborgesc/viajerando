package com.viajerando.demo.controller;

import com.viajerando.demo.entity.Destiny;
import com.viajerando.demo.repository.DestinyRepository;
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
public class DestinyController {

    @Autowired
    private DestinyRepository destinyRepository;

    @GetMapping("/destinys")
    public List<Destiny> getAllDestinys() {
        return destinyRepository.findAll();
    }

    @GetMapping("/destiny/{id}")
    public ResponseEntity<Destiny> getDestinysById(@PathVariable(value = "id") Long id)
            throws EntityNotFoundException {
        Destiny destiny =
                destinyRepository
                        .findById(id)
                        .orElseThrow(() -> new EntityNotFoundException("Destiny not found on :: " + id));
        return ResponseEntity.ok().body(destiny);
    }

    @PostMapping("/destiny")
    public Destiny createDestiny(@Valid @RequestBody Destiny destiny) {
        return destinyRepository.save(destiny);
    }


    @PutMapping("/destiny/{id}")
    public ResponseEntity<Destiny> updateDestiny(
            @PathVariable(value = "id") Long id, @Valid @RequestBody Destiny destinyDetails)
            throws EntityNotFoundException {

        Destiny destiny =
                destinyRepository
                        .findById(id)
                        .orElseThrow(() -> new EntityNotFoundException("Destiny not found on :: " + id));

        destiny.setCidade(destinyDetails.getCidade());
        destiny.setEstado(destinyDetails.getEstado());
        destiny.setPreco(destinyDetails.getPreco());
        destiny.setEmbarque(destinyDetails.getEmbarque());
        destiny.setDescricao(destinyDetails.getDescricao());
        final Destiny updateDestiny = destinyRepository.save(destiny);
        return ResponseEntity.ok(updateDestiny);
    }

    @DeleteMapping("/destiny/{id}")
    public Map<String, Boolean> deleteUser(@PathVariable(value = "id") Long id) throws Exception {
        Destiny destiny =
                destinyRepository
                        .findById(id)
                        .orElseThrow(() -> new EntityNotFoundException("Destiny not found on :: " + id));

        destinyRepository.delete(destiny);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }


}
