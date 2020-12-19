package com.tunein.tuneinbackend.services;

import com.tunein.tuneinbackend.models.Playlist;
import com.tunein.tuneinbackend.models.PlaylistItem;
import com.tunein.tuneinbackend.repository.PlaylistRepository;
import org.json.*;

import com.tunein.tuneinbackend.models.Playlists;
import com.tunein.tuneinbackend.models.WeatherRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;

import java.net.URL;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class WeatherService {

    @Autowired
    PlaylistRepository repository;

    public Playlists getPlaylist(WeatherRequest body) throws IOException {

        Playlists playlists = new Playlists();

        URL url = new URL(String.format("https://api.openweathermap.org/data/2.5/weather?lat=%s&lon=%s&appid=0650b368a01667cfe34732c5249d15dd",
                body.getLatitude().toString(),
                body.getLongitude().toString()));
        HttpURLConnection con = (HttpURLConnection) url.openConnection();
        con.setRequestMethod("GET");

        int status = con.getResponseCode();
        if (status == 200) {
            BufferedReader in = new BufferedReader(
                    new InputStreamReader(con.getInputStream()));
            String inputLine;
            StringBuffer content = new StringBuffer();
            while ((inputLine = in.readLine()) != null) {
                content.append(inputLine);
            }

            JSONObject object = new JSONObject(content.toString());
            JSONArray s = object.getJSONArray("weather");
            String weatherStyle = s.getJSONObject(0).getString("description").toLowerCase();

            in.close();

            List<Playlist> playlistList = repository.findAllByName(weatherStyle);
            playlists.addAll(playlistList.stream().map(playlist -> {
                PlaylistItem playlistItem = new PlaylistItem();
                playlistItem.setName(playlist.getName());
                playlistItem.setLink(playlist.getLink());

                return playlistItem;
            }).collect(Collectors.toList()));

        }

        con.disconnect();

        return playlists;
    }
}
