package com.monsteral.Monsteral.model;

import jakarta.persistence.*;

import java.util.Date;
import java.util.List;

//Creamos entidades
@Entity
@Table(name = "payment")
public class Payment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID_payment", nullable = false)
    private Long ID_payment;

    @Temporal(TemporalType.DATE)
    @Column(name = "date_pay", nullable = false)
    private Date date_pay;

    @Column(name = "statusPay", nullable = false)
    private String statusPay;

    //claves foraneas
    @OneToOne
    @JoinColumn(name = "ID_order", nullable = false)
    private Order_shop order_shop ;


    //Creamos constructor
    public Payment(){}
    public Payment(Long ID_payment, Date date_pay, String statusPay, Order_shop order_shop) {
        this.ID_payment = ID_payment;
        this.date_pay = date_pay;
        this.statusPay = statusPay;
        this.order_shop = order_shop;
    }

    public Long getID_payment() {
        return ID_payment;
    }

    public void setID_payment(Long ID_payment) {
        this.ID_payment = ID_payment;
    }

    public Date getDate_pay() {
        return date_pay;
    }

    public void setDate_pay(Date date_pay) {
        this.date_pay = date_pay;
    }

    public Order_shop getOrder_shop() {
        return order_shop;
    }

    public void setOrder_shop(Order_shop order_shop) {
        this.order_shop = order_shop;
    }

    public String getStatusPay() {
        return statusPay;
    }

    public void setStatusPay(String statusPay) {
        this.statusPay = statusPay;
    }
}
