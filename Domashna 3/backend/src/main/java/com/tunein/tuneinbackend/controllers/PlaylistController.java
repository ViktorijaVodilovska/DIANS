package com.tunein.tuneinbackend.controllers;

import com.tunein.tuneinbackend.api.CountryApi;
import com.tunein.tuneinbackend.api.MoodApi;
import com.tunein.tuneinbackend.services.MoodService;
import com.tunein.tuneinbackend.api.WeatherApi;
import com.tunein.tuneinbackend.models.*;
import com.tunein.tuneinbackend.services.CountryService;
import com.tunein.tuneinbackend.services.WeatherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;
import java.io.IOException;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
public class PlaylistController implements CountryApi, MoodApi, WeatherApi {

    @Autowired
    WeatherService weatherService;

    @Autowired
    CountryService countryService;

    @Autowired
    MoodService moodService;

    @GetMapping("/")
    @Override
    public ResponseEntity<Playlists> getCountryPlaylist(@Valid CountryRequest body) {
        return new ResponseEntity<Playlists>(countryService.getPlaylist(body),HttpStatus.OK);
    }

    @GetMapping("/")
    @Override
    public ResponseEntity<Playlists> getMoodPlaylist(@Valid MoodRequest body) {
    	return new ResponseEntity<Playlists>(moodService.getPlaylist(body), HttpStatus.OK);
    }

    @GetMapping("/")
    @Override
    public ResponseEntity<Playlists> getWeatherPlaylist(@Valid WeatherRequest body) {

        try {
            return new ResponseEntity<Playlists>(weatherService.getPlaylist(body),HttpStatus.OK);
        } catch (IOException e) {
            e.printStackTrace();
            return new ResponseEntity<Playlists>(HttpStatus.NOT_FOUND);
        }
    }
}
