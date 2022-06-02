package com.viajerando.demo.entity;

import com.viajerando.demo.utils.StatusEnum;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "roadmap")
@EntityListeners(AuditingEntityListener.class)
public class RoadMap {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name="user_id", referencedColumnName = "id")
    private User user;

    @Column(name = "total_price", nullable = false)
    private Double totalPrice;

    @DateTimeFormat(pattern="yyyy.MM.dd")
    @Column(name="initial_date", nullable = false)
    private LocalDate initialDate;

    @DateTimeFormat(pattern="yyyy.MM.dd")
    @Column(name = "final_date",  nullable = false)
    private LocalDate finalDate;

    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private StatusEnum status;

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
        return totalPrice;
    }

    public void setTotalPrice(Double totalPrice) {
        this.totalPrice = totalPrice;
    }

    public StatusEnum getStatus() {return status;}

    public void setStatus(StatusEnum status) {this.status = status;}

    public User getUser() {return user;}

    public void setUser(User user) {this.user = user;}

}
