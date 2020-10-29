package com.gabi.thewatchlist;

import javax.ws.rs.*;
import javax.ws.rs.core.Response;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
@Path("/shows")
public class Endpoint {
    private Object mediaType;
    private final ShowRepository showRepository;

    Endpoint(ShowRepository showRepository) {
        this.showRepository = showRepository;
    }

    @POST
    @Produces("application/json")
    public Response createShow(FavouriteShowData showData) {
        System.out.println("POST got this object" + showData);

        Show newShow = new Show(showData.getId(), Status.QUEUED);
        System.out.println(newShow);
        showRepository.save(newShow);

        return Response.status(200).build();
    }

    @PUT
    @Produces("application/json")
    public Response unfavoriteShow(FavouriteShowData showData) {
        System.out.println("PUT got this object" + showData);
        Show show = showRepository.findById(showData.getId())
                .orElseThrow(() -> new ShowNotFound(showData.getId()));

        show.setStatus(Status.REMOVED);
        System.out.println(show);
        showRepository.save(show);

        return Response.status(200).build();
    }

    @GET
    @Produces("application/json")
    public Response all() {
        List<Show> shows = showRepository.findAll();

        return Response.status(200).entity(shows).build();
    }

}
