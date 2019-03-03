import React, {Component} from "react"
import JobForm from "../Components/JobForm"


export default class TwoJobs extends Component {
  render() {
    return (
      <div>
        <JobForm number={1} />
        <JobForm number={2} />
      </div>
    )
  }
}
