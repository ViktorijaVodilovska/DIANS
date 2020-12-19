package com.tunein.tuneinbackend.services;

import com.tunein.tuneinbackend.repository.PlaylistRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CountryService {
    @Autowired
    PlaylistRepository repository;

    public Playlists getPlaylist(CountryRequest body) {
        Playlists playlists = new Playlists();

        List<Playlist> playlistList = repository.findAllByName(body.getCountryName());
        playlists.addAll(playlistList.stream().map(playlist -> {
            PlaylistItem item = new PlaylistItem();
            item.setLink(playlist.getLink());
            item.setName(playlist.getName());
            return item;
        }).collect(Collectors.toList()));

        return playlists;
    }
}
