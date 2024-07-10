package com.monsteral.Monsteral.model;
import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name = "plantscategory")
public class PlantsCategory {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_category", nullable = false)
    private Long ID_category;

    @Column(name = "nameCategory", nullable = false)
    private String nameCategory;

    @OneToMany(mappedBy = "plantsCategory")
    private List<Plant> plants;

//Creamos constructores
    public PlantsCategory(){}
    public PlantsCategory(Long ID_category, String nameCategory) {
        this.ID_category = ID_category;
        this.nameCategory = nameCategory;
    }

    public Long getID_category() {
        return ID_category;
    }

    public void setID_category(Long ID_category) {
        this.ID_category = ID_category;
    }

    public String getNameCategory() {
        return nameCategory;
    }

    public void setNameCategory(String nameCategory) {
        this.nameCategory = nameCategory;
    }

    public List<Plant> getPlants() {
        return plants;
    }

    public void setPlants(List<Plant> plants) {
        this.plants = plants;
    }
}
