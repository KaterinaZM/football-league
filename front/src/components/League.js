import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addTodoAC, clearAllAC, deleteTodoAC } from "../redux/actions";

export default class League extends Component {

  render() {
    return <h1>Upcoming League/SuperEvent</h1>;

  }
}
