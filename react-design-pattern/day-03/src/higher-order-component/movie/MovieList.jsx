const MovieList = ({ data, name }) => {
    console.log(name);
    return (
        <div>
            <h2>movie List</h2>
            <ul>
                {
                    data.map((movie) => (
                        <li key={movie.id} >{movie.title} ({movie.year})</li>
                    ))
                }
            </ul>
        </div>
    )
}
export default MovieList;
