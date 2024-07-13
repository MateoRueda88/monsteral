package com.monsteral.Monsteral.model;

import jakarta.persistence.*;

import java.util.Date;
import java.util.List;

@Entity
@Table(name = "order_shop")
public class Order_shop {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID_order", nullable = false)
    private Long ID_order;

    @Temporal(TemporalType.DATE)
    @Column(name = "date_order", nullable = false)
    private Date date_order;

    //Nuestra clave foranea que se conecta con la tabla cliente
    @ManyToOne
    @JoinColumn(name = "ID_client", nullable = false)
    private Client client;

    @ManyToOne
    @JoinColumn(name = "ID_plants", nullable = false)
    private Plant plant;

    @OneToOne(mappedBy = "order_shop")
    private Payment payments;


   // NO OLVIDAR INGRESAR PLANTS AL CONTRUCTOR Y LOS GET Y SETT////////////////////////////////////////////////

    public Order_shop(){}
    public Order_shop(Long ID_order, Date date_order, Client client, Plant plant) {
        this.ID_order = ID_order;
        this.date_order = date_order;
        this.client = client;
        this.plant = plant;
    }

    public Long getID_order() {
        return ID_order;
    }

    public void setID_order(Long ID_order) {
        this.ID_order = ID_order;
    }

    public Date getDate_order() {
        return date_order;
    }

    public void setDate_order(Date date_order) {
        this.date_order = date_order;
    }

    public Client getClient() {
        return client;
    }

    public void setClient(Client client) {
        this.client = client;
    }

    public Plant getPlant() {
        return plant;
    }

    public void setPlant(Plant plant) {
        this.plant = plant;
    }

    public Payment getPayments() {
        return payments;
    }

    public void setPayments(Payment payments) {
        this.payments = payments;
    }
}
