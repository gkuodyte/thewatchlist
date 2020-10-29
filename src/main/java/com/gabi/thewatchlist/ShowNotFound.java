package com.gabi.thewatchlist;

public class ShowNotFound extends RuntimeException {
    ShowNotFound(int id) {
        super("Could not find show " + id);
    }
}
