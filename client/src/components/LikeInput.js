import React, { Component } from "react";
import { Button, Card, Image, Icon, Label } from "semantic-ui-react";

class LikeInput extends Component {
  render() {
    return (
      <div>
        <input name="like" type="hidden" />
        <input type="submit" value="Like" />
      </div>
    );
  }
}
export default LikeInput;
