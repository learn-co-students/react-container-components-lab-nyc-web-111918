import React, {Component} from 'react'


const Review = ({
  byline,
  headline,
  display_title,
  link,
  summary_short
}) => {
  return (
    <div className="review">
    <h1>{headline}</h1>
    <h2>Byline: {byline}</h2>
    <p>Title: {display_title}</p>
    <p>Summary: {summary_short}</p>
    <p>{link.url}</p>
    </div>
  )
}

const MovieReviews = ({ reviews }) => (
    <div className="review-list">
      {reviews.map(Review)}
    </div>
  )

export default MovieReviews
