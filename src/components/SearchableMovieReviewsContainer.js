import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'D7a0MczAE8cZr7dAEsIJdRRjLxAGWi8a';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;
const SEARCHURL = `https://api.nytimes.com/svc/movies/v2/reviews/search.json` +
  `api-key=${NYT_API_KEY}&query=`

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends Component {
  state = {
    reviews: [],
    searchTerm: ""
  }

  handleSearch = (event) => {
    this.setState({
      searchTerm: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    fetch(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${this.state.searchTerm}&api-key=${NYT_API_KEY}`)
    .then(r => r.json())
    .then(myJson => this.setState({reviews: myJson.results}))
  }


  render() {
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSubmit}>
          <input
          onChange={this.handleSearch}
          type="text"
          value={this.state.searchTerm}
          >
          </input>
          <button>Search</button>
        </form>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}
