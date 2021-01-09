package com.tunein.microservices.moodservice;

import net.minidev.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class MoodService {
    @Autowired
    PlaylistRepository repository;

    public List<Playlist> getPlaylist(JSONObject body){
        return repository.findAllByName(body.get("mood_name").toString().toLowerCase());
    }
}
