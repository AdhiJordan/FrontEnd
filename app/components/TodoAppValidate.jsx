import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import RaisedButton from 'material-ui/RaisedButton';
var React = require('react');

var TodoAppForm = require('TodoAppForm');
const iChars = "!@#$%^&*()+=-[]\\\';,./{}|\":<>?~`";
const numbers = "0123456789";
const styles = {
	  marginTop: 10,
marginBottom: 10,
marginRight: 600,
marginLeft: 500,
width: 400,
};
var TodoAppValidate = React.createClass({
		 getInitialState: function () {
    return {
     
        	
        	person: {name: '', email: '', phone: '', password: ''},
        	
        	errors: {name: '', email: '', phone: '', password: ''},
          

        
    };
  this.addPerson = this.addPerson.bind(this)
  },
	updatePerson(e) {
 let person = this.state.person
            
        	if(e.target === undefined && e.length > 0) {
        		let person = this.state.person
        		let errors = this.state.errors
        		if(person['name'] === "") {
                   errors['name'] = 'fill this field'
        		}
        		if(person['email'] === "") {
                   errors['email'] = 'fill this field'
        		}
        		if(!this.checkEmail(person['email']) && errors['email'].length === 0) {
        			errors['email'] = 'Not a valid e-mail address'
        		}
        		if(person['phone'] === "") {
        			errors['phone'] = 'fill this field'
        		}
        		if(person['password'] === "") {
        			errors['password'] = 'fill this field'
        		}
        		this.setState({ errors: errors})
        	}
        	else {
        		let field = e.target.name
        		let value = e.target.value
        		if(field === 'name') {
                   this.checkPersonName(person, value)
        		}
        		else if(field === 'email') {
        			this.checkPersonEmail(person, value)
        		}
        		else if(field === 'phone'){
        			this.checkPersonNumber(person, value)
        		}
        		else {
        			this.checkPersonPassword(person, value)
        		}
        	}
			return ''
	},
	  checkPersonName(person, value) {
            let errors = this.state.errors
        	if(value[0] === '_') {
        		person['name'] = this.getPersonName(value)
        		errors['name'] = '_ not allowed here'
          this.setState({errors: errors, person: person });
          return ''
        }
        if(numbers.indexOf(value[0]) != -1) {
        	person['name'] = this.getPersonName(value)
        	errors['name'] = 'not allowed here'
          this.setState({errors: errors, person: person });
          return ''
        }
        for(let i = 0; i<value.length; i++) {
        	person['name'] = this.getPersonName(value)
        	errors['name'] = 'not allowed'
           if(value[i] === '_' && value[i - 1] === value[i]) {
            this.setState({errors: errors, person: person });
            return ''
           }
           if(iChars.indexOf(value[i]) != -1) {
           	person['name'] = this.getPersonName(value)
           	errors['name'] = 'special character not allowed'
            this.setState({errors: errors, person: person });
            return ''
           }

        }   
            person['name'] = this.getPersonName(value)
            errors['name'] = ''
            return this.setState({person: person, errors: errors})
        },
        checkPersonEmail(person, value) {
        	let errors = this.state.errors
        	person['email'] = value
        	errors['email'] = ''
        	if(errors['email'].length > 0 && this.checkEmail(value)) {
        		   errors['email'] = ''	
        	}
        	if(person.name === '') {
        		errors['name'] = 'fill this field'
        		return this.setState({person: person, errors: errors})
        	}
        	else {
        		errors['name'] = ''

        		return this.setState({person: person, errors: errors})
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
        checkPersonNumber(person, value) {
        	let errors = this.state.errors
        	person['phone'] = value 
        	errors['phone'] = ''
        	if (person.name === '') {
		      errors['name'] = "fill this field"
		      return this.setState({person: person, errors: errors})
		       
		    }
		    if (!this.checkEmail(person.email)) {
		      errors['email'] = "Not a valid e-mail address"
		      return this.setState({person: person, errors: errors})
		       
		    }
		    else {
        	  errors['email'] = ''
        	  
        	  return this.setState({person: person, errors: errors})
        	}
        },
        checkPersonPassword(person, value) {
        	let errors = this.state.errors
        	person['password'] = value 
        	errors['password'] = ''
        	if (person.password === '') {
		      errors['password'] = "fill this field"
		      return this.setState({person: person, errors: errors})
		       
		    }
        	for(let i = 0; i<value.length; i++) {
        	
           if(value.length < 6) {
           	person['password'] = this.getPersonPassword(value)
           	errors['password'] = 'Atleast 6 charcaters to make password strong'
            this.setState({errors: errors, person: person });
            return ''
           }

        }   
            person['password'] = this.getPersonPassword(value)
            errors['name'] = ''
            return this.setState({person: person, errors: errors})
        },
        getPersonPassword(value) {
        	return value
        },
        	  getPersonName(value) {
        	return value && value[0].toUpperCase().trim() + value.slice(1).toLowerCase().trim()
        },
        checkPerson() {
        	let validPerson = true
        	let person  = this.state.person
        	let errors = this.state.errors
        	let message = "fill this field"

        	if(person.name === '') {
        		errors['name'] = message
        		validPerson = false
        	}
        	if(person.email === '') {
        		errors['email'] = message
        		validPerson = false
        	}
        	if(person.phone === '') {
        		errors['phone'] = message
        		validPerson = false
        	}
        	if(errors.name.length > 0 || errors.email.length > 0 || errors.phone.length > 0 ) {
        		validPerson = false
        	}
        	if(!this.checkEmail(person.email)) {
        		errors['email'] = "Not a valid e-mail address"
        		validPerson = false
        	}
        	if(person.phone === '') {
        		errors['password'] = message
        		validPerson = false
        	}
        	this.setState({errors: errors})
        	return validPerson
        },
          addPerson: function(e) {
          	
        	if(!this.checkPerson()) {
        		return ''
        	}
        	this.props.addPerson(this.state.person)
        	
        	
        	return this.setState({person: {name: '', email: '', phone: ''},  errors: {name: '', email: '', phone: ''}})
        },
        addLogin: function(e) {
        	this.props.addLogin()
        },
render: function() {
	let {persons, addPerson,onClick} = this.props

	

	return(
<MuiThemeProvider>
		<div>
		<TodoAppForm 
		    person={this.state.person} 
		    errors={this.state.errors} 
		    onChange={this.updatePerson} 
		    onClick={this.addPerson} 
		   
		    
		    />
		    <RaisedButton
      label="CONTINUE TO LOGIN"
       labelColor="#fff"
        backgroundColor="#00bfa5"
         onClick={onClick}
         style={styles} />
		</div>
		</MuiThemeProvider>
		);
}
});


module.exports = TodoAppValidate;