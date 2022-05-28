package com.viajerando.demo.entity;

import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;

@Entity
@Table(name = "user")
@EntityListeners(AuditingEntityListener.class)
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "username", nullable = false)
    private String username;

    @Column(name = "passwoard", nullable = false)
    private String passwoard;

    @Column(name = "email", nullable = false)
    private String email;

    @Column(name = "cpf", nullable = false)
    private String cpf;

    @Column(name = "publicPlace", nullable = false)
    private String publicPlace;

    @Column(name = "city", nullable = false)
    private String city;

    @Column(name = "number", nullable = false)
    private Long number;

    @Column(name = "cep", nullable = false)
    private String cep;

    @Column(name = "telefone", nullable = false)
    private String telefone;

    /**
     * Gets id.
     *
     * @return the id
     */
    public long getId() {
        return id;
    }

    /**
     * Sets id.
     *
     * @param id the id
     */
    public void setId(long id) {
        this.id = id;
    }

    /**
     * Gets username.
     *
     * @return the username
     */
    public String getUsername() {
        return username;
    }

    /**
     * Sets username.
     *
     * @param username the username
     */
    public void setUsername(String username) {
        this.username = username;
    }

    /**
     * Gets email.
     *
     * @return the email
     */
    public String getEmail() {
        return email;
    }

    /**
     * Sets email.
     *
     * @param email the username
     */
    public void setEmail(String email) {
        this.email = email;
    }

    /**
     * Gets passwoard.
     *
     * @return the passwoard
     */
    public String getPasswoard() {
        return email;
    }

    /**
     * Sets passwoard.
     *
     * @param passwoard the passwoard
     */
    public void setPasswoard(String passwoard) {
        this.passwoard = passwoard;
    }

    /**
     * Gets cpf.
     *
     * @return the cpf
     */
    public String getcpf() {
        return cpf;
    }

    /**
     * Sets cpf.
     *
     * @param cpf the cpf
     */
    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    /**
     * Gets publicPlace.
     *
     * @return the publicPlace
     */
    public String getPublicPlace() {
        return publicPlace;
    }

    /**
     * Sets cpf.
     *
     * @param publicPlace the publicPlace
     */
    public void setPublicPlace(String publicPlace) {
        this.publicPlace = publicPlace;
    }

    /**
     * Gets city.
     *
     * @return the city
     */
    public String getCity() {
        return city;
    }

    /**
     * Sets city.
     *
     * @param city the city
     */
    public void setCity(String city) {
        this.city = city;
    }

    /**
     * Gets number.
     *
     * @return the number
     */
    public Long getNumber() {
        return number;
    }

    /**
     * Sets number.
     *
     * @param number the number
     */
    public void setNumber(Long number) {
        this.number = number;
    }

    /**
     * Gets cep.
     *
     * @return the cep
     */
    public String getCep() {
        return cep;
    }

    /**
     * Sets cep.
     *
     * @param cep the cep
     */
    public void setCep(String cep) {
        this.cep = cep;
    }

    /**
     * Gets telefone.
     *
     * @return the telefone
     */
    public String getTelefone() {
        return telefone;
    }

    /**
     * Sets telefone.
     *
     * @param telefone the telefone
     */
    public void setTelefone(String telefone) {
        this.telefone = telefone;
    }

}
