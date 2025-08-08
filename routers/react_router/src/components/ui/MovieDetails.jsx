import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const MovieDetails = () => {
  const data = useLoaderData();

  return (
    <div className="container my-4">
      <div className="card mb-3 shadow-lg">
        <div className="row g-0 p-3">
          <div className="col-md-4">
            <img src={data.Poster} className="img-fluid rounded-start" alt={data.Title} />
            <NavLink to="/movie"><button className='btn btn-primary mt-4'>Back To movies List</button></NavLink>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h3 className="card-title">{data.Title}</h3>
              <p className="card-text"><strong>Year:</strong> {data.Year}</p>
              <p className="card-text"><strong>Genre:</strong> {data.Genre}</p>
              <p className="card-text"><strong>Runtime:</strong> {data.Runtime}</p>
              <p className="card-text"><strong>Rated:</strong> {data.Rated}</p>
              <p className="card-text"><strong>Released:</strong> {data.Released}</p>
              <p className="card-text"><strong>Plot:</strong> {data.Plot}</p>
              <p className="card-text"><strong>Actors:</strong> {data.Actors}</p>
              <p className="card-text"><strong>Language:</strong> {data.Language}</p>
              <p className="card-text"><strong>Country:</strong> {data.Country}</p>
              <p className="card-text"><strong>IMDb Rating:</strong> ⭐ {data.imdbRating}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
