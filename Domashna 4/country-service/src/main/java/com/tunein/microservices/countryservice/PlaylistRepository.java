package com.tunein.microservices.countryservice;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PlaylistRepository extends JpaRepository<Playlist,Integer> {

    List<Playlist> findAllByName(String name);
}
