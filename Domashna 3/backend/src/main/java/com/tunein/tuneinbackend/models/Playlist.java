package com.tunein.tuneinbackend.models;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Playlist {
    @Id
    private Integer id;

    private String name;
    private String link;

}
