package com.viajerando.demo.controller;

import com.viajerando.demo.entity.User;
import com.viajerando.demo.repository.UserRepository;
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
public class UserController {

    @Autowired
    private UserRepository userRepository;

    /**
     * Get all users list.
     *
     * @return the list
     */
    @GetMapping("/users")
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    /**
     * Gets users by id.
     *
     * @param userId the user id
     * @return the users by id
     * @throws EntityNotFoundException the resource not found exception
     */
    @GetMapping("/user/{id}")
    public ResponseEntity<User> getUsersById(@PathVariable(value = "id") Long userId)
            throws EntityNotFoundException {
        User user =
                userRepository
                        .findById(userId)
                        .orElseThrow(() -> new EntityNotFoundException("User not found on :: " + userId));
        return ResponseEntity.ok().body(user);
    }

    /**
     * Create user user.
     *
     * @param user the user
     * @return the user
     */
    @PostMapping("/user")
    public User createUser(@Valid @RequestBody User user) {
        return userRepository.save(user);
    }

    /**
     * Update user response entity.
     *
     * @param userId the user id
     * @param userDetails the user details
     * @return the response entity
     * @throws EntityNotFoundException the resource not found exception
     */
    @PutMapping("/user/{id}")
    public ResponseEntity<User> updateUser(
            @PathVariable(value = "id") Long userId, @Valid @RequestBody User userDetails)
            throws EntityNotFoundException {

        User user =
                userRepository
                        .findById(userId)
                        .orElseThrow(() -> new EntityNotFoundException("User not found on :: " + userId));

        user.setUsername(userDetails.getUsername());
        user.setEmail(userDetails.getEmail());
        user.setPasswoard(userDetails.getPasswoard());
        user.setCpf(userDetails.getcpf());
        user.setPublicPlace(userDetails.getPublicPlace());
        user.setCity(userDetails.getCity());
        user.setNumber(userDetails.getNumber());
        user.setCep(userDetails.getCep());
        user.setTelefone(userDetails.getTelefone());
        final User updatedUser = userRepository.save(user);
        return ResponseEntity.ok(updatedUser);
    }

    /**
     * Delete user map.
     *
     * @param userId the user id
     * @return the map
     * @throws Exception the exception
     */
    @DeleteMapping("/user/{id}")
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


}
