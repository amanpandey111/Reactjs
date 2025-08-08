const Card = ({ movieData }) => {
    const { Title, Year, Poster } = movieData;
  
    return (
      <li className="card">
        <img src={Poster} alt={Title} />
        <div className="card-content">
          <h3 className="card-title">{Title}</h3>
          <p className="card-year">{Year}</p>
        </div>
      </li>
    );
  };
  
  export default Card;
  