export default defineEventHandler(async event => {
    const query = getQuery(event);

    const movies = MovieSchema.find({
        title: {$regex: query.searchText ?? ''},
    });

    console.log("movies", movies)
    return movies;
})