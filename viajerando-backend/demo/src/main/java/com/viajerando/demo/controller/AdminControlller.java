package com.viajerando.demo.controller;

import com.viajerando.demo.entity.Admin;
import com.viajerando.demo.repository.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.persistence.EntityNotFoundException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;


@RestController
@RequestMapping("/admins")
public class AdminControlller {

    @Autowired
    AdminRepository adminRepository;


    @GetMapping
    List<Admin> getAdmins() {return adminRepository.findAll();}

    @GetMapping("/{id}")
     ResponseEntity<Admin> getAdminById(@PathVariable(value = "id") Long adminId)
            throws EntityNotFoundException {
        Admin admin =
                adminRepository
                        .findById(adminId)
                        .orElseThrow(() -> new EntityNotFoundException("Admin not found on :: " + adminId));
        return ResponseEntity.ok().body(admin);
    }

    @PostMapping
    Admin createAdmin(@RequestBody Admin admin) {
        return adminRepository.save(admin);
    }


    @PutMapping("/{id}")
     ResponseEntity<Admin> updateAdmin(
            @PathVariable(value = "id") Long adminId, @RequestBody Admin adminDetails)
            throws EntityNotFoundException {

        Admin admin =
                adminRepository
                        .findById(adminId)
                        .orElseThrow(() -> new EntityNotFoundException("Admin not found on :: " + adminId));

        admin.setCpf(adminDetails.getCpf());
        admin.setCodigoGerencia(adminDetails.getCodigoGerencia());
        admin.setDestinies(adminDetails.getDestinies());
        admin.setEmail(adminDetails.getEmail());
        admin.setPassword(adminDetails.getPassword());
        admin.setUsername(adminDetails.getUsername());
        admin.setId(adminDetails.getId());
        final Admin updatedAdmin = adminRepository.save(admin);
        return ResponseEntity.ok(updatedAdmin);
    }

    @DeleteMapping("/{id}")
     Map<String, Boolean> deleteAdmin(@PathVariable(value = "id") Long adminId) throws Exception {
        Admin admin =
                adminRepository
                        .findById(adminId)
                        .orElseThrow(() -> new EntityNotFoundException("Admin not found on :: " + adminId));

        adminRepository.delete(admin);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }
}
