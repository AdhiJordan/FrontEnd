import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
var React = require('react');

const styles = {
  height: 600,
  width: 1100,
  marginTop: 10,
  marginBottom: 10,
  marginRight: 130,
  marginLeft: 130,
  textAlign: 'center',
  display: 'inline-block',

  errors: {
    position: 'absolute',
    top: 72,
    fontSize: 15,
  },

};
var TodoApp = React.createClass({

      onChange(e) {
    if(e.trim() === "") {
        return ''
       }
  },


    render() {
      let {person, onChange, errors, onClick, loginPage} = this.props
           

    return (
    	<MuiThemeProvider>
    	<div>
    	<div className="container">
    	<label className="textRegistration">
    	
    	Registration Form
    	</label>
    	</div>
    	<Paper style={styles} zDepth={5} ><br />
    	<label className="textName">NAME</label>
    <TextField
          name="name"
          floatingLabelText="Name"
          errorText = {errors.name}
          style={{width: 800}}
          errorStyle={styles.errors}
          value={person.name}
          onChange={onChange}
          />
    	<br />
    	<label className="textPhone">PHONE</label>
      <TextField
               name="phone"
               type="number"
               style={{width: 800}}
               floatingLabelText="Phone Number"
               errorText = {errors.phone}
               errorStyle={styles.errors}
               value={person.phone}
               onChange={onChange}
               
                  />
      <br />
      <label className="textEmail">EMAIL</label>
      <TextField
               name="email"
               type="email"
               style={{width: 800}}
               floatingLabelText="Email"
               errorText = {errors.email}
               errorStyle={styles.errors}
               value={person.email}
               onChange={onChange}
               
                  />
                  <br />
      <label className="textPassword">PASSWORD</label>
       <TextField
      name="password"
       style={{width: 800}}
      floatingLabelText="Password"
      type="password"
      errorText = {errors.password}
      errorStyle={styles.errors}
      value={person.password}
      onChange={onChange}
    />
      
      <br />
      <br />
      <RaisedButton
      label="Submit"
      labelColor="#fff"
      backgroundColor="#00bfa5"
      onClick={onClick} />
      <br />
      <br />
     
     
      </Paper>
      
      </div>
      </MuiThemeProvider>
    );
  }
});


module.exports = TodoApp;
