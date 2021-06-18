import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    const restaurantReviews = this.props.reviews.filter(review => review.restaurantId === this.props.restaurant.id)
    return (
      
      <ul>
        {restaurantReviews.map(review => <Review key={review.id} delete={this.props.delete} review={review}/>)}
      </ul>
    );
  }
};

export default Reviews;