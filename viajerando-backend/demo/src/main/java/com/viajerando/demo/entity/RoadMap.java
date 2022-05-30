package com.viajerando.demo.entity;

import org.springframework.data.jpa.domain.support.AuditingEntityListener;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.format.annotation.DateTimeFormat.ISO;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "roadmap")
@EntityListeners(AuditingEntityListener.class)
public class RoadMap {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @DateTimeFormat(iso = ISO.DATE)
    @Column(name="data_inicial",nullable = false, columnDefinition = "DATE")
    private LocalDate dataInicial;

    @DateTimeFormat(iso = ISO.DATE)
    @Column(name = "data_final",columnDefinition = "DATE")
    private LocalDate datafinal;

    /*@Column(nullable = false, length = 3)
    @Enumerated(EnumType.STRING)
    private STATUS status;*/


    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public LocalDate getDataInicial() {
        return dataInicial;
    }

    public void setDataInicial(LocalDate dataInicial) {
        this.dataInicial = dataInicial;
    }

    public LocalDate getDatafinal() {
        return datafinal;
    }

    public void setDatafinal(LocalDate datafinal) {
        this.datafinal = datafinal;
    }
    /*
    public STATUS getStatus() {
        return status;
    }

    public void setStatus(STATUS status) {
        this.status = status;
    }*/
}
