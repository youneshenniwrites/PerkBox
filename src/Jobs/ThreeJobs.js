import React, {Component} from "react"
import JobForm from "../Components/JobForm"


export default class ThreeJobs extends Component {
  render() {
    return (
      <div>
        <JobForm number={1} />
        <JobForm number={2} />
        <JobForm number={3} />
      </div>
    )
  }
}
