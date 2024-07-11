package com.monsteral.Monsteral.model;

import jakarta.persistence.*;

import java.util.Date;
//Creacion de entidades
@Entity
@Table(name = "news")
public class News {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID_news", nullable = false)
    private Long ID_news;

    @Column(name = "newsName", nullable = false)
    private String newsName;

    @Temporal(TemporalType.DATE)
    @Column(name = "newsDate", nullable = false)
    private Date newsDate;

    //Creamos construcctores
    public News(){}
    public News(Long ID_news, String newsName, Date newsDate) {
        this.ID_news = ID_news;
        this.newsName = newsName;
        this.newsDate = newsDate;
    }
    //Creamos get y set


    public Long getID_news() {
        return ID_news;
    }

    public void setID_news(Long ID_news) {
        this.ID_news = ID_news;
    }

    public String getNewsName() {
        return newsName;
    }

    public void setNewsName(String newsName) {
        this.newsName = newsName;
    }

    public Date getNewsDate() {
        return newsDate;
    }

    public void setNewsDate(Date newsDate) {
        this.newsDate = newsDate;
    }
}
