import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Card, Image, Icon, Label } from "semantic-ui-react";
import axios from "axios";
import Like from "./Like";

class LikeInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
  increment = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  handleOnClick = event => {
    event.preventDefault();
    this.props.addLike({ game_id: this.props.gameId, count: this.state.count });

    this.increment();

    axios
      .post("/api/likes", {
        like: {
          game_id: this.props.gameId,
          like_count: this.state.count + 1
        }
      })
      .then(response => {
        console.log(response);
      })
      .catch(error => console.log(error));
  };

  getLikes() {
    axios
      .get("/api/likes/")
      .then(response => {
        console.log(response);
        this.setState({ likes: response.data });
        this.getLike(response[0].id);
      })
      .catch(error => console.log(error));
  }

  getLike(id) {
    axios
      .get(`/api/likes/${id}`)
      .then(response => {
        this.setState({ like: response.data });
      })
      .catch(error => console.log(error));
  }

  componentDidMount() {
    this.getLikes();
  }

  render() {
    console.log("this is state");
    console.log(this.state);
    console.log("this is props");
    console.log(this.props);
    return (
      <div className="ui buttons">
        <Button inverted color="red" onClick={this.handleOnClick}>
          <Icon name="heart" />
          Like
        </Button>
        <Button basic color="red">
          <div>
            <Like
              likes={this.state.likes || []}
              gameId={this.props.gameId || []}
            />
          </div>
        </Button>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return { game: state.game, likes: state.likes, count: state.count };
};

export default connect(mapStateToProps)(LikeInput);
