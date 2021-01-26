package com.tunein.microservices.weatherservice;

import net.minidev.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.json.*;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.List;

/**
 * Represents a service for playlists based on the current weather
 */
@Service
public class WeatherService {

    @Autowired
    PlaylistRepository repository;

    /**
     * This method returns a list of playlists
     * @param body a JSON object containing the current weather
     * @return a list of playlists
     * @throws IOException
     */
    public List<Playlist>  getPlaylist(JSONObject body) throws IOException {

        URL url = new URL(String.format("https://api.openweathermap.org/data/2.5/weather?lat=%s&lon=%s&appid=0650b368a01667cfe34732c5249d15dd",
                body.get("latitude").toString(),
                body.get("longitude").toString()));
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

            org.json.JSONObject object = new org.json.JSONObject(content.toString());
            JSONArray s = object.getJSONArray("weather");
            String weatherStyle = s.getJSONObject(0).getString("description").toLowerCase();

            in.close();
            return repository.findAllByName(weatherStyle);
        }

        con.disconnect();

        return null;
    }
}
