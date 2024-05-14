import React from 'react';
import '../App.css';

const MovieSeriesTab = ({ data, goPreviousPage }) => {
  return <>
    <div className="">
      <div className="movie-series-tab">
        <div className="movie-series-tab__title">
          <button onClick={()=> goPreviousPage()} className='previous-button'>Go Back</button>
          <h1>{data.Title}</h1>
        </div>
        <div className="movie-series-tab__details">
          <div className="movie-series-tab__details__poster">
            <img src={data.Poster} alt={data.Title} />
          </div>
          <div className="movie-series-tab__details__info">
            <p><strong>Year:</strong> {data.Year}</p>
            <p><strong>Rated:</strong> {data.Rated}</p>
            <p><strong>Released:</strong> {data.Released}</p>
            <p><strong>Runtime:</strong> {data.Runtime}</p>
            <p><strong>Genre:</strong> {data.Genre}</p>
            <p><strong>Director:</strong> {data.Director}</p>
            <p><strong>Writer:</strong> {data.Writer}</p>
            <p><strong>Actors:</strong> {data.Actors}</p>
            <p><strong>Plot:</strong> {data.Plot}</p>
            <p><strong>Language:</strong> {data.Language}</p>
            <p><strong>Country:</strong> {data.Country}</p>
            <p><strong>Awards:</strong> {data.Awards}</p>
            <p><strong>Metascore:</strong> {data.Metascore}</p>
            <p><strong>imdbRating:</strong> {data.imdbRating}</p>
            <p><strong>imdbVotes:</strong> {data.imdbVotes}</p>
            <p><strong>imdbID:</strong> {data.imdbID}</p>
            <p><strong>Type:</strong> {data.Type}</p>
            <p><strong>DVD:</strong> {data.DVD}</p>
            <p><strong>BoxOffice:</strong> {data.BoxOffice}</p>
            <p><strong>Production:</strong> {data.Production}</p>
            <p><strong>Website:</strong> {data.Website}</p>
          </div>
        </div>
      </div>
    </div>
  </>;
};

export default MovieSeriesTab;