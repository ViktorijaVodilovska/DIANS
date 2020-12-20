package com.tunein.tuneinbackend.services;

import com.tunein.tuneinbackend.models.CountryRequest;
import com.tunein.tuneinbackend.models.Playlist;
import com.tunein.tuneinbackend.models.PlaylistItem;
import com.tunein.tuneinbackend.models.Playlists;
import com.tunein.tuneinbackend.repository.PlaylistRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class CountryService {
    @Autowired
    PlaylistRepository repository;

    public Playlists getPlaylist(CountryRequest body) {
        Playlists playlists = new Playlists();

        List<Playlist> playlistList = repository.findAllByName(body.getCountryName().toLowerCase());
        playlists.addAll(playlistList.stream().map(playlist -> {
            PlaylistItem item = new PlaylistItem();
            item.setLink(playlist.getLink());
            item.setName(playlist.getName());
            return item;
        }).collect(Collectors.toList()));

        return playlists;
    }
}
