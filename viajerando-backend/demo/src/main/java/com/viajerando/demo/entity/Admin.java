package com.viajerando.demo.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "admin")
@EntityListeners(AuditingEntityListener.class)
public class Admin {

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

    @Column(name = "codigo_gerencia", nullable = false)
    private String codigoGerencia;

    @JsonIgnore
    @OneToMany(mappedBy = "admin")
    private Set<Destiny> destinies;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPasswoard() {
        return email;
    }

    public void setPasswoard(String passwoard) {
        this.passwoard = passwoard;
    }

    public String getCpf() {
        return cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    public Set<Destiny> getDestinies() {
        return destinies;
    }

    public void setDestinies(Set<Destiny> destinies) {
        this.destinies = destinies;
    }

    public String getCodigoGerencia() {
        return codigoGerencia;
    }

    public void setCodigoGerencia(String codigoGerencia) {
        this.codigoGerencia = codigoGerencia;
    }


}
