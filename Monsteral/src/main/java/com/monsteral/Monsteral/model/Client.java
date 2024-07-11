package com.monsteral.Monsteral.model;
import jakarta.persistence.*;

import java.util.List;

//Creacion de entidades
@Entity
@Table(name = "client")
public class Client {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID_client", nullable = false)
    private Long ID_client;

    @Column(name = "clientName", nullable = false)
    private String clientName;

    @Column(name = "CC", nullable = false)
    private String CC;

    @Column(name = "phone", nullable = false)
    private String phone;

    @Column(name = "address", nullable = false)
    private String address;

    //Creacion del Constructor
    public Client(){}

    public Client(Long ID_client, String clientName, String CC, String phone, String address) {
        this.ID_client = ID_client;
        this.clientName = clientName;
        this.CC = CC;
        this.phone = phone;
        this.address = address;
    }

     @OneToMany(mappedBy = "client")
     private List<Learn> learn;

     @OneToMany(mappedBy = "client")
     private List<Order_shop> orders;

    //Creacion de get y set


    public Long getID_client() {
        return ID_client;
    }

    public void setID_client(Long ID_client) {
        this.ID_client = ID_client;
    }

    public String getClientName() {
        return clientName;
    }

    public void setClientName(String clientName) {
        this.clientName = clientName;
    }

    public String getCC() {
        return CC;
    }

    public void setCC(String CC) {
        this.CC = CC;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public List<Order_shop> getOrders() {
        return orders;
    }

    public void setOrders(List<Order_shop> orders) {
        this.orders = orders;
    }

    public List<Learn> getLearn() {
        return learn;
    }

    public void setLearn(List<Learn> learn) {
        this.learn = learn;
    }
}
