package com.tunein.microservices.countryservice;


import net.minidev.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class CountryService {
    @Autowired
    PlaylistRepository repository;

    public List<Playlist> getPlaylist(JSONObject body) {

        return repository.findAllByName(body.get("country_name").toString().toLowerCase());
    }
}
