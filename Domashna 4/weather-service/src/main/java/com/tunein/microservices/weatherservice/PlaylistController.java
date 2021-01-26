package com.tunein.microservices.weatherservice;

import net.minidev.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.io.IOException;
import java.util.List;

/**
 * A controller for getting a playlist request
 */
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
public class PlaylistController {
    @Autowired
    WeatherService weatherService;

    @RequestMapping(value = "/weather",
            produces = { "application/json; charset=utf-8" },
            consumes = { "application/json" },
            method = RequestMethod.POST)
    @ResponseBody
    public List<Playlist> getWeatherPlaylist(@RequestBody JSONObject body) {

        try {
            return weatherService.getPlaylist(body);
        } catch (IOException e) {
            e.printStackTrace();
            return null;
        }
    }
}
