package com.viajerando.demo.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "destiny")
@EntityListeners(AuditingEntityListener.class)
public class Destiny {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "cidade", nullable = false)
    private String cidade;

    @Column(name = "estado", nullable = false)
    private String estado;

    @Column(name = "preco", nullable = false)
    private Double preco;

    @Column(name = "embarque", nullable = false)
    private String embarque;

    @Column(name = "descricao", nullable = false)
    private String descricao;

    @JsonIgnore
    @ManyToMany(mappedBy = "enrolledDestiny")
    private Set<RoadMap> roadMaps = new HashSet<>();

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getCidade() {
        return cidade;
    }

    public void setCidade(String cidade) {
        this.cidade = cidade;
    }

    public String getEstado() {
        return estado;
    }

    public void setEstado(String estado) {
        this.estado = estado;
    }

    public Double getPreco() {
        return preco;
    }

    public void setPreco(Double preco) {
        this.preco = preco;
    }

    public String getEmbarque() {
        return embarque;
    }

    public void setEmbarque(String embarque) {
        this.embarque = embarque;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public Set<RoadMap> getRoadMaps() {
        return roadMaps;
    }

    public void setRoadMaps(Set<RoadMap> roadMaps) {
        this.roadMaps = roadMaps;
    }

}