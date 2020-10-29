package com.gabi.thewatchlist;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

@ControllerAdvice
public class ShowNotFoundAdvice {
    @ResponseBody
    @ExceptionHandler(ShowNotFound.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    String showNotFoundHandler(ShowNotFound exception) {
        return exception.getMessage();
    }
}
