import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Card from '../components/ui/Card';

const Movie = () => {
    const moviesData = useLoaderData();
    const data = moviesData.Search;
  
    return (
      <div className="container mt-4">
        <div className="row">
          {
            data.map((curEle) => (
              <div className="col-md-4 mb-4" key={curEle.imdbID}>
                <Card curEle={curEle} />
              </div>
            ))
          }
        </div>
      </div>
    );
}

export default Movie