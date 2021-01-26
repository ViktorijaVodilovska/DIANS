package com.tunein.microservices.countryservice;

import net.minidev.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * A controller for getting a playlist request
 */
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
public class CountryController {

    @Autowired
    CountryService countryService;

    @RequestMapping(value = "/country",
            produces = { "application/json; charset=utf-8" },
            consumes = { "application/json" },
            method = RequestMethod.POST)
    @ResponseBody
    public List<Playlist> getCountryPlaylist(@RequestBody JSONObject body) {
        return countryService.getPlaylist(body);
    }

}
