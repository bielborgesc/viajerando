package com.viajerando.demo.controller;

import com.viajerando.demo.entity.User;
import com.viajerando.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import javax.persistence.EntityNotFoundException;
import javax.validation.Valid;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
     UserRepository userRepository;
    private final PasswordEncoder encoder;

    public UserController(UserRepository userRepository, PasswordEncoder encoder) {
        this.userRepository = userRepository;
        this.encoder = encoder;
    }

    @GetMapping
    List<User> getUsers() {return userRepository.findAll();}

    @GetMapping("/{id}")
    public ResponseEntity<User> getUsersById(@PathVariable(value = "id") Long userId)
            throws EntityNotFoundException {
        User user =
                userRepository
                        .findById(userId)
                        .orElseThrow(() -> new EntityNotFoundException("User not found on :: " + userId));
        return ResponseEntity.ok().body(user);
    }

    @PostMapping
    public User createUser( @RequestBody User user) {
        if(userRepository.findByEmail(user.getEmail()).isEmpty()){
            user.setPassword(encoder.encode(user.getPassword()));
            return userRepository.save(user);
        }
        return (User) ResponseEntity.status(400);
    }

    @PutMapping("/{id}")
    public ResponseEntity<User> updateUser(
            @PathVariable(value = "id") Long userId, @Valid @RequestBody User userDetails)
            throws EntityNotFoundException {

        User user =
                userRepository
                        .findById(userId)
                        .orElseThrow(() -> new EntityNotFoundException("User not found on :: " + userId));

        user.setUsername(userDetails.getUsername());
        user.setEmail(userDetails.getEmail());
        user.setPassword(encoder.encode(userDetails.getPassword()));
        user.setCpf(userDetails.getcpf());;
        user.setTelefone(userDetails.getTelefone());
        user.setRoadMaps(userDetails.getRoadMaps());
        user.setId(userDetails.getId());
        final User updatedUser = userRepository.save(user);
        return ResponseEntity.ok(updatedUser);
    }

    @DeleteMapping("/{id}")
    public Map<String, Boolean> deleteUser(@PathVariable(value = "id") Long userId) throws Exception {
        User user =
                userRepository
                        .findById(userId)
                        .orElseThrow(() -> new EntityNotFoundException("User not found on :: " + userId));

        userRepository.delete(user);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }

    @GetMapping("/login")
    public ResponseEntity<Boolean> login(@RequestParam String email, @RequestParam String password) {

        Optional<User> optUsuario = userRepository.findByEmail(email);
        if (optUsuario.isEmpty()) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(false);
        }

        User user = optUsuario.get();
        boolean valid = encoder.matches(password, user.getPassword());

        HttpStatus status = (valid) ? HttpStatus.OK : HttpStatus.UNAUTHORIZED;
        return ResponseEntity.status(status).body(valid);
    }

    @RequestMapping(method = RequestMethod.OPTIONS, value = "/login")
    public ResponseEntity<Void> optionsLogin() {
        return ResponseEntity.ok().build();
    }

}
