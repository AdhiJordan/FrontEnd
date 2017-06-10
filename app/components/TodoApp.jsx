import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import {Tabs,Tab} from 'material-ui/Tabs';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'


var React = require('react');
var LoginPage = require('LoginPage');
var TodoAppForm = require('TodoAppForm');

var TodoAppValidate = require('TodoAppValidate');
const styles = {
   dialog: {
     	width: 500,
  },
   cancelLabel: {
    	color: '#464646',
  },
   cancelLabel: {
    	color: '#464646',
  },
    errors: {
    	position: 'absolute',
    	top: 72,
    	fontSize: 15,
  },
  };

var TodoApp = React.createClass({
	 getInitialState: function () {
	
    return {
      persons: [],
      filterCondition: false,
      open: true,
      toggleLogin: false,
      login: {email: '', password: ''},
      errorlog: {email: '', password: ''},
        };
  },
    handleClose : function() {
    	this.setState({open: false});
  },
	addPerson(person) {
	
       
     	var newArr = this.state.persons;
    
    	newArr.push(person);
   
    	this.setState({persons: newArr});
    	

    	myModal.style.display = "block";

    },
	updatePerson(e) {
 		let login = this.state.login
            
        	if(e.target === undefined && e.length > 0) {
        		let login = this.state.login
        		let errorlog = this.state.errorlog
        		
        		if(login['email'] === "") {
                   errorlog['email'] = 'fill this field'
        		}
        		if(!this.checkEmail(login['email']) && errorlog['email'].length === 0) {
        			errorlog['email'] = 'Not a valid e-mail address'
        		}
        		
        		if(login['password'] === "") {
        			errorlog['password'] = 'fill this field'
        		}
        		this.setState({ errorlog: errorlog})
        	}
        	else {
        		let field = e.target.name
        		let value = e.target.value
        		
        	    if(field === 'email') {
        			this.checkPersonEmail(login, value)
        		}
        		
        		else if(field === 'password') {
        			this.checkPersonPassword(login, value)
        		}
        	}
			return ''
	},
	  
        checkPersonEmail(login, value) {
        	let errorlog = this.state.errorlog
        	login['email'] = value
        	errorlog['email'] = ''
        	if(errorlog['email'].length > 0 && this.checkEmail(value)) {
        		   errorlog['email'] = ''	
        	}
        	if(login.name === '') {
        		errorlog['name'] = 'fill this field'
        		return this.setState({login: login, errorlog: errorlog})
        	}
        	else {
        		errorlog['name'] = ''

        		return this.setState({login: login, errorlog: errorlog})
        	}
        },
        checkEmail(email) {
        	let validEmail = true
        	let atpos = email.indexOf("@");
		    let dotpos = email.lastIndexOf(".");
		    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=email.length) {
		    	validEmail = false
		    }
		    return validEmail
        },
       
        checkPersonPassword(login, value) {
        	let errorlog = this.state.errorlog
        	login['password'] = value 
        	errorlog['password'] = ''
        	if (login.password === '') {
		      errorlog['password'] = "fill this field"
		      return this.setState({login: login, errorlog: errorlog})
		       
		    }
        	for(let i = 0; i<value.length; i++) {
        	
           if(value.length < 6) {
           	login['password'] = this.getPersonPassword(value)
           	errorlog['password'] = 'Atleast 6 charcaters to make password strong'
            this.setState({errorlog: errorlog, login: login });
            return ''
           }

        }   
            login['password'] = this.getPersonPassword(value)
            errorlog['name'] = ''
            return this.setState({login: login, errorlog: errorlog})
        },
        getPersonPassword(value) {
        	return value
        },
     
        checkPerson() {
        	let validPerson = true
        	let login  = this.state.login
        	let errorlog = this.state.errorlog
        	let message = "fill this field"

        	
        	if(login.email === '') {
        		errorlog['email'] = message
        		validPerson = false
        	}
        	
        	if( errorlog.email.length > 0 || errorlog.password.length > 0 ) {
        		validPerson = false
        	}
        	if(!this.checkEmail(login.email)) {
        		errorlog['email'] = "Not a valid e-mail address"
        		validPerson = false
        	}
        	if(login.password === '') {
        		errorlog['password'] = message
        		validPerson = false
        	}
        	this.setState({errorlog: errorlog})
        	return validPerson
        },
onSpan: function() {
    myModal.style.display = "none";
},
addLogin(e) {
	this.setState({
		toggleLogin: true
	});
},
addLoginForm(e) {
   
          	alert('login');
          	console.log(this.state.login);

        	if(!this.checkPerson()) {
        		return ''
        	}

        	   	
        	
 return this.setState({login: {email: '', password: ''},   errorlog: {email: '', password: ''}})
     
     
},
changeRegisterToggle(e) {
	this.setState({

		toggleLogin: false
	});
},
    render() {
    
    	let {persons, person, addPerson, addLoginForm} = this.props
    	 let {filterCondition} = this.state
   
    	
    return (
    	<MuiThemeProvider>
    	<div>
    	{this.state.toggleLogin ?
    		<LoginPage 
            login={this.state.login} 
		    errorlog={this.state.errorlog} 
		    onChange={this.updatePerson} 
		    onClick={this.addLoginForm}
		    changeRegisterToggle={this.changeRegisterToggle}

    		/> :
    		<div>
    		  <TodoAppValidate
    	  	persons={(!filterCondition) ? persons : this.state.persons} 
    	    onClick={this.addLogin}
    	    addPerson={this.addPerson} 
    	  />
    	  <div id="myModal" className="modal">

 
		  <div className="modal-content">
		    <span className="close" onClick={this.onSpan}>&times;</span>
		    <p className="textDialog">SUCEESSFULLY REGISTERED! PLEASE LOGIN!</p>
		  </div>
		  </div>
		  
		  </div>
    	}
    	
		  </div>

    	</MuiThemeProvider>
    );
  }
});


module.exports = TodoApp;
