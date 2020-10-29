export async function searchFavorites() {
    try {
        const result = await fetch('/shows', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                }
        });

        let movies = [];
        const data = await result.json();
        for(const {id, status} of data) {
            const movie = await tmdbSeachMovieByID(id);
            movie.status = status;
            movies.push(movie);
        }
        return movies;

    } catch(err) {
        console.error(err);
    }
}

export async function tmdbSeachMovieByID(id) {
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=83e58bca21b6557018cfaddbe967908c&language=en-US`

    try {
        const res = await fetch(url);
        const data = await res.json();
        return data;

    } catch(err) {
        console.error(err);
    }
}

export async function tmdbSearchMovies(query) {

    const url = `https://api.themoviedb.org/3/search/movie?api_key=83e58bca21b6557018cfaddbe967908c&query=${query}`;

    try {
        const res = await fetch(url);
        const data = await res.json();

        return data.results;
    } catch(err) {
        console.error(err);
    }
}

export async function addToFavorites(movie_id, isFavorite) {
    await fetch('/shows', {
        method: isFavorite ? 'PUT' : 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        body: JSON.stringify({id: movie_id})
    });
}
