package com.tunein.tuneinbackend.repository;

import com.tunein.tuneinbackend.models.Playlist;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PlaylistRepository extends JpaRepository<Playlist,Integer> {
    
}
