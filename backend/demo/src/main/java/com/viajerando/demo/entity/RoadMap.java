package com.viajerando.demo.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "roadmap")
@EntityListeners(AuditingEntityListener.class)
public class RoadMap {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @JsonIgnore
    @ManyToOne()
    @JoinColumn(name="user_id", referencedColumnName = "id")
    private User user;

    @Column(name = "name", nullable = false)
    private String name;

    @ManyToMany
    @JoinTable(
            name = "destiny_enrolled",
            joinColumns = @JoinColumn(name = "roadmap_id"),
            inverseJoinColumns = @JoinColumn(name = "destiny_id")
    )
    public
    Set<Destiny> enrolledDestiny = new HashSet<>();

    @Column(name = "total_price", nullable = false)
    private Double totalPrice;

    @DateTimeFormat(pattern="yyyy.MM.dd")
    @Column(name="initial_date", nullable = false)
    private LocalDate initialDate;

    @DateTimeFormat(pattern="yyyy.MM.dd")
    @Column(name = "final_date",  nullable = false)
    private LocalDate finalDate;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public LocalDate getInitialDate() {
        return initialDate;
    }

    public void setInitialDate(LocalDate initialDate) {
        this.initialDate = initialDate;
    }

    public LocalDate getFinalDate() {
        return finalDate;
    }

    public void setFinalDate(LocalDate finalDate) {
        this.finalDate = finalDate;
    }

    public Double getTotalPrice() {
        double totalPrice = (double) 0;
        for (Destiny destiny : enrolledDestiny) {
            totalPrice = totalPrice + destiny.getPreco();
        }
        return totalPrice;
    }

    public void setTotalPrice(Double totalPrice) {
        this.totalPrice = totalPrice;
    }


    public User getUser() {return user;}

    public void setUser(User user) {this.user = user;}

    public Set<Destiny> getEnrolledDestiny() {
        return enrolledDestiny;
    }

    public void setEnrolledDestiny(Set<Destiny> enrolledDestiny) {
        this.enrolledDestiny = enrolledDestiny;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}