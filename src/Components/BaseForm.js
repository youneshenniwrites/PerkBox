import React, {Component} from "react"
import Typography from '@material-ui/core/Typography';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';


export default class OneJob extends Component {
  render() {
    return (
      <div>
        <Typography style={{padding: 10, fontWeight: "bold"}} variant="h5" component="h3">
          {this.props.fieldTitle}
        </Typography>
        <Typography style={{padding: 10, fontWeight: "bold"}} variant="outlined" component="h3">
          <FormControl style={
            {
              display: "flex",
              alignItems: "stretch",
              justifyContent: "stretch",
              borderWidth: 2,
              borderColor: "#000"
            }
          }>
            <InputLabel style={{fontSize: 14}}>
              {this.props.fieldPlaceholder}
            </InputLabel>
            <Select />
          </FormControl>
        </Typography>
      </div>
    )
  }
}
