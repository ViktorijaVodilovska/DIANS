package com.tunein.tuneinbackend.controllers;

import com.tunein.tuneinbackend.api.CountryApi;
import com.tunein.tuneinbackend.api.MoodApi;
import com.tunein.tuneinbackend.api.WeatherApi;
import com.tunein.tuneinbackend.models.CountryRequest;
import com.tunein.tuneinbackend.models.MoodRequest;
import com.tunein.tuneinbackend.models.Playlists;
import com.tunein.tuneinbackend.models.WeatherRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@RestController
public class PlaylistController implements CountryApi, MoodApi, WeatherApi {
    @Override
    public ResponseEntity<Playlists> getCountryPlaylist(@Valid CountryRequest body) {
        return null;
    }

    @Override
    public ResponseEntity<Playlists> getMoodPlaylist(@Valid MoodRequest body) {
        return null;
    }

    @Override
    public ResponseEntity<Playlists> getWeatherPlaylist(@Valid WeatherRequest body) {
        return null;
    }
}
