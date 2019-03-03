import React, {Component} from "react"
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';


export default class NoJob extends Component {
  render() {
    return (
      <div>
        <Paper elevation={1} style={{marginTop: 30}}>
          <Typography style={{padding: 10, fontWeight: "bold"}} variant="h5" component="h3">
            What is your current status
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
              <InputLabel htmlFor="age-simple" style={{fontSize: 14}}>Select</InputLabel>
              <Select />
            </FormControl>
          </Typography>
        </Paper>
      </div>
    )
  }
}
