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

var LoginPage = React.createClass({

	render: function() {
		let {login, onChange, errorlog, onClick} = this.props
		return(
			<MuiThemeProvider>
			<div>
			<div className="container">
    	<label className="textLogin">
    	
    	Login Form
    	</label>
    	</div>
    	    	<Paper style={styles} zDepth={5} ><br />
    	
      <label className="textEmail">EMAIL</label>
      <TextField
               name="email"
               type="email"
               style={{width: 800}}
               floatingLabelText="Email"
               errorText = {errorlog.password}
                errorStyle={styles.errors}
          		value={login.email}
               onChange={onChange}
               
                  />
                  <br />
      <label className="textPassword">PASSWORD</label>
       <TextField
      name="password"
       style={{width: 800}}
      floatingLabelText="Password"
      type="password"
      errorText = {errorlog.password}
      errorStyle={styles.errors}
      value={login.password}
      onChange={onChange}
    />
      
      <br />
      <br />
      
      <RaisedButton
      label="LOGIN"
       labelColor="#fff"
        backgroundColor="#00bfa5"
        
         onClick={onClick} />
         


         <br />
         <br />
        <RaisedButton
      label="FORGET PASSWORD"
       labelColor="#fff"
        backgroundColor="#00bfa5"
        
         onClick={onClick} />
     
      </Paper>
			</div>
			</MuiThemeProvider>
			);
	}
	});

module.exports = LoginPage;