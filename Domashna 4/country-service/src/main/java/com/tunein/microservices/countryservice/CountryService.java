package com.tunein.microservices.countryservice;


import net.minidev.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

/**
 * Represents a service for playlists based on country
 */
@Service
public class CountryService {
    @Autowired
    PlaylistRepository repository;

    /**
     * This method returns a list of playlists
     * @param body a JSON object containing the country name
     * @return a list of playlists
     */
    public List<Playlist> getPlaylist(JSONObject body) {

        return repository.findAllByName(body.get("country_name").toString().toLowerCase());
    }
}
