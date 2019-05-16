import React, { Component } from "react";
import { Button, Card, Image, Icon, Label } from "semantic-ui-react";
import axios from 'axios';

class LikeInput extends Component {
  constructor(props) {
  super(props);
    this.state = {
     
      count: 0
    }
  }

  handleOnClick = event => {
    event.preventDefault();
    this.props.addLike({game_id: this.props.gameId, count: this.state.count + 1})
    this.setState({
      count: this.state.count + 1
    })
    axios.post(
      '/api/likes/create',
      {like:
        {
          game_id: this.props.gameId,
          like_count: this.state.count + 1
        }
      }
    )
      .then(response => {
    console.log(response)
  })
  .catch(error => console.log(error))
  }

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.addLike({game_id: this.props.game.id, count: this.state.count + 1})
    this.setState({
      count: this.state.count + 1
    })
  }
  
  render() {console.log(this.state)
  console.log(this.props)
    return (
    <div className="ui buttons">
      <Button color="red" onClick={this.handleOnClick}>
        <Icon name="heart" />
        Like
      </Button>
      <Button basic color="red">
        {this.state.count}
      </Button>
    </div>
  );
  }
}

export default LikeInput;
