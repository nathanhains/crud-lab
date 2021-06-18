import React, { Component } from 'react';


class ReviewInput extends Component {
  constructor(){
    super()
    this.state = {
      text: ""
    }
  }
  handleChange = (e) => {
    this.setState({
      text: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addReview({text: this.state.text, restaurantId: this.props.restaurantId})
    this.setState({
      text: ""
    })
  }


  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={(e)=> this.handleChange(e)} value={this.state.text}/>
          <input type="submit"/>
        </form>
      </div>
    );
  }
};



export default ReviewInput;
