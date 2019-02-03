import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'D7a0MczAE8cZr7dAEsIJdRRjLxAGWi8a';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
export default class LatestMovieReviewsContainer extends Component {
  state = {
    reviews: []
  }
  componentDidMount() {
    fetch(URL)
    .then(r => r.json())
    .then(myJson => this.setState({reviews: myJson.results}))
  }
  render() {
    return (
      <div className="latest-movie-reviews">
      <MovieReviews reviews={this.state.reviews} />
      </div>

    )
  }
}
