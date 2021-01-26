package com.tunein.microservices.moodservice;

import net.minidev.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

/**
 * Represents a service for playlists based on mood
 */
@Service
public class MoodService {
    @Autowired
    PlaylistRepository repository;

    /**
     * This method returns a list of playlists
     * @param body a JSON object containing the mood name
     * @return a list of playlists
     */
    public List<Playlist> getPlaylist(JSONObject body){
        return repository.findAllByName(body.get("mood_name").toString().toLowerCase());
    }
}
