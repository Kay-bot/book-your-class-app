import React, { Component } from "react";
import Axios from "axios";
import {
  SingleLessonWrapper,
  SingleLessonContainer,
  SingleLessonImage,
  SLDetailsContainer
} from "../styles/SingLessonStyled";

import BookingForm from "../bookings/BookingForm";

class SingleLesson extends Component {
  state = {
    lesson: {}
  };

  componentDidMount() {
    Axios.get(`/lessons/${this.props.match.params.id}`).then((result) => {
      console.log("result:", result);
      this.setState({ lesson: result.data.lesson });
    });
  }
  render() {
    return (
      <SingleLessonWrapper>
        <SingleLessonContainer>
          {this.state.lesson ? (
            <div>
              <SingleLessonImage src={this.state.lesson.url} />
              <SLDetailsContainer>
                <b>{this.state.lesson.title}</b>
                <p>
                  <b>Cost: </b>${this.state.lesson.cost} AUD <b>Duration:</b>
                  &nbsp; Approx. {this.state.lesson.duration} hours
                </p>
                <p>
                  <b>Level:</b> {this.state.lesson.level} &nbsp;
                  <b>Language: </b>
                  {this.state.lesson.language}
                </p>
                <p>
                  <b>Class description: </b>
                  {this.state.lesson.description}
                </p>
              </SLDetailsContainer>
            </div>
          ) : (
            <p>No lesson details</p>
          )}
        </SingleLessonContainer>
        <BookingForm user={this.props.user} lesson={this.state.lesson} />
      </SingleLessonWrapper>
    );
  }
}

export default SingleLesson;
