import React from "react";
import { Button, createStyles, makeStyles, MenuItem, Popover, Theme, Toolbar, Typography, useMediaQuery, useTheme } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton/IconButton';

const likes = 10;
const dislikes = 5;
const btnStyleLiked = {
    color: "#fff",
    backgroundColor: "#1976d2",
    margin : "20px"
};
const btnStyleDisLiked = {

    color: "#fff",
    backgroundColor: "rgb(220, 0, 78)",
    margin : "20px"

};
const btnDefault = {
    margin : "20px"
};
class Likes extends React.Component {
  constructor(props) {
    super(props);

    this.likeHandler = this.likeHandler.bind(this);

    this.dislikeHandler = this.dislikeHandler.bind(this);

    this.state = {
      likeCount: likes,
      dislikeCount: dislikes
    };
  }

  render() {
    return (
      <div>


        <div>
          <Typography>
          <Button variant="contained" 
              style={this.state.likeCount !== likes ? btnStyleLiked : btnDefault}
              onClick={this.likeHandler}
            >
              Like
            </Button>{" "}
            | {this.state.likeCount}
          </Typography>

          <Typography>
          <Button variant="contained" 
              style={
                this.state.dislikeCount !== dislikes ? btnStyleDisLiked : btnDefault
              }
              onClick={this.dislikeHandler}
            >
              Dislike
            </Button>{" "}
            | {this.state.dislikeCount}
          </Typography>
        </div>
      </div>
    );
  }

  likeHandler() {
    if (this.state.likeCount === likes) {
      this.setState(state => ({
        likeCount: state.likeCount + 1,
        dislikeCount: dislikes
      }));
    }
  }

  dislikeHandler() {
    if (this.state.dislikeCount === dislikes) {
      this.setState(state => ({
        dislikeCount: state.dislikeCount + 1,
        likeCount: likes
      }));
    }
  }
}

Likes.defaultProps = {
  headerProp: "Header Section",

  contentProp: "Content area"
};

export default Likes;
