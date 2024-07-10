package com.monsteral.Monsteral.model;

import jakarta.persistence.*;

import java.util.Date;
//Creacion de entidades
@Entity
@Table(name = "learn")
public class Learn {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID_course", nullable = false)
    private Long ID_course;

    @Column(name = "courseName", nullable = false)
    private String courseName;

    @Temporal(TemporalType.DATE)
    @Column(name = "courseDate", nullable = false)
    private Date courseDate;

    @Column(name = "place", nullable = false)
    private String place;

    //Nuestra clave foranea que se conecta con la tabla cliente
    @ManyToOne
    @JoinColumn(name = "ID_client", nullable = false)
    private Client client;

    //Creamos Constructor
    public Learn() {
    }

    public Learn(Long ID_course, String courseName, Date courseDate, String place, Client client) {
        this.ID_course = ID_course;
        this.courseName = courseName;
        this.courseDate = courseDate;
        this.place = place;
        this.client = client;
    }
    //creamos get y set


    public Long getID_course() {
        return ID_course;
    }

    public void setID_course(Long ID_course) {
        this.ID_course = ID_course;
    }

    public String getCourseName() {
        return courseName;
    }

    public void setCourseName(String courseName) {
        this.courseName = courseName;
    }

    public Date getCourseDate() {
        return courseDate;
    }

    public void setCourseDate(Date courseDate) {
        this.courseDate = courseDate;
    }

    public String getPlace() {
        return place;
    }

    public void setPlace(String place) {
        this.place = place;
    }

    public Client getClient() {
        return client;
    }

    public void setClient(Client client) {
        this.client = client;
    }
}


