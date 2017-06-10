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

};

var ForgetPasswordForm = React.createClass({
			
			getLoginPage(e) {
				this.props.getToLogin()
			},
	render: function() {
		let { onChange, onClick, getToLogin} = this.props
		return (
<MuiThemeProvider>
		<div>
		<div className="container">
    	<label className="textPasswordForm">
    	
    	Password Form
    	</label>
    	</div>
    	<Paper style={styles} zDepth={5} ><br />
    	
      <label className="textPassword"> OLD PASSWORD</label>
       <TextField
      name="password"
      style={{width: 800}}
      floatingLabelText=" OLD Password HERE"
      type="password"
      
      onChange={onChange}
    />
                  <br />
      <label className="textPassword">NEW PASSWORD</label>
       <TextField
      name="password"
      style={{width: 800}}
      floatingLabelText=" NEW Password HERE"
      type="password"
      
    
    />
      
          


         <br />
         <br />
        <RaisedButton
      label="SAVE"
       labelColor="#fff"
        backgroundColor="#00bfa5"
        
         onClick={onClick} />
         <br />
         <br />
        <RaisedButton
      label="BACK"
       labelColor="#fff"
        backgroundColor="#00bfa5"
        
         onClick={this.getLoginPage} />
      </Paper>
			</div>
			</MuiThemeProvider>
			);
	}
});

module.exports = ForgetPasswordForm;