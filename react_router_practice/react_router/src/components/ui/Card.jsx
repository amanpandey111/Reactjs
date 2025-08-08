import { NavLink } from "react-router-dom";
import './Card.css'

const Card = ({curEle}) => {
    const { Poster, Title, Type, Year, imdbID } = curEle;

    return(
        <li className="list-unstyled">
      <div className="card h-100 shadow-sm custom-card">
        <img src={Poster} className="card-img-top fixed-img" alt={Title} />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{Title}</h5>
          <p className="card-text text-muted mb-1">Type: {Type}</p>
          <p className="card-text text-muted">Year: {Year}</p>
          <div className="mt-auto">
            <NavLink to={`/movie/${imdbID}`}>
              <button className="btn btn-primary w-100">Watch Now</button>
            </NavLink>
          </div>
        </div>
      </div>
    </li>
    )
}
export default Card