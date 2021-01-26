package com.tunein.microservices.moodservice;

import net.minidev.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * A controller for getting a playlist request
 */
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
public class PlaylistController{

    @GetMapping(value = "/welcome")
    public String welcome(){
        return "welcome";
    }

    @Autowired
    MoodService moodService;

    @RequestMapping(value = "/mood",
            produces = { "application/json; charset=utf-8" },
            consumes = { "application/json" },
            method = RequestMethod.POST)
    @ResponseBody
    public List<Playlist> getMoodPlaylist(@RequestBody JSONObject body) {
    	return moodService.getPlaylist(body);
    }
}
