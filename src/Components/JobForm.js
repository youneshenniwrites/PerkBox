import React, {Component} from "react"
import Paper from '@material-ui/core/Paper';
import BaseForm from "./BaseForm"


export default class OneJob extends Component {
  render() {
    return (
      <div>
        <Paper elevation={1} style={{marginTop: 30}}>
          <h3 style={{padding: 10}}>Job {this.props.number}</h3>
          <BaseForm fieldTitle="What is your occupation" fieldPlaceholder="Select" />
          <BaseForm fieldTitle="Company name" fieldPlaceholder="Enter company name" />
          <BaseForm fieldTitle="Income" fieldPlaceholder="Amount" />
        </Paper>
      </div>
    )
  }
}