package com.monsteral.Monsteral.model;

import jakarta.persistence.*;

import java.util.Date;
import java.util.List;

//Creamos entidades
@Entity
@Table(name = "plant")
public class Plant {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID_plants", nullable = false)
    private Long ID_plants;

    @Column(name = "plantName", nullable = false)
    private String plantName;

    @Column(name = "description", nullable = false)
    private String description;

    @Column(name = "price", nullable = false)
    private Double price;


    //Nuestra clave foranea que se conecta con la tabla cliente
    @ManyToOne
    @JoinColumn(name = "id_category", nullable = false)

    private PlantsCategory plantsCategory;

    @OneToMany(mappedBy = "plant")
    private List<Order_shop> orders;

    //Creamos constructores
    public Plant() {
    }

    public Plant(Long ID_plants, String plantName, String description, Double price, PlantsCategory plantsCategory) {
        this.ID_plants = ID_plants;
        this.plantName = plantName;
        this.description = description;
        this.price = price;
        this.plantsCategory = plantsCategory;
    }
//Creamos get y set


    public Long getID_plants() {
        return ID_plants;
    }

    public void setID_plants(Long ID_plants) {
        this.ID_plants = ID_plants;
    }

    public String getPlantName() {
        return plantName;
    }

    public void setPlantName(String plantName) {
        this.plantName = plantName;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public PlantsCategory getPlantsCategory() {
        return plantsCategory;
    }

    public void setPlantsCategory(PlantsCategory plantsCategory) {
        this.plantsCategory = plantsCategory;
    }

    public List<Order_shop> getOrders() {
        return orders;
    }

    public void setOrders(List<Order_shop> orders) {
        this.orders = orders;
    }
}
