// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
// import RaisedButton from 'material-ui/RaisedButton';
// var React = require('react');

// var LoginPage = require('LoginPage');
// const iChars = "!@#$%^&*()+=-[]\\\';,./{}|\":<>?~`";
// const numbers = "0123456789";

// var LoginPageValidate = React.createClass({
// 		 getInitialState: function () {
//     return {
     
        
          


        
//     };
//   this.addPerson = this.addPerson.bind(this)
//   },
// 	updatePerson(e) {
//  let person = this.state.person
            
//         	if(e.target === undefined && e.length > 0) {
//         		let person = this.state.person
//         		let errors = this.state.errors
        		
//         		if(person['email'] === "") {
//                    errors['email'] = 'fill this field'
//         		}
//         		if(!this.checkEmail(person['email']) && errors['email'].length === 0) {
//         			errors['email'] = 'Not a valid e-mail address'
//         		}
        		
//         		if(person['password'] === "") {
//         			errors['password'] = 'fill this field'
//         		}
//         		this.setState({ errors: errors})
//         	}
//         	else {
//         		let field = e.target.name
//         		let value = e.target.value
        		
//         	    if(field === 'email') {
//         			this.checkPersonEmail(person, value)
//         		}
        		
//         		else {
//         			this.checkPersonPassword(person, value)
//         		}
//         	}
// 			return ''
// 	},
	  
//         checkPersonEmail(person, value) {
//         	let errors = this.state.errors
//         	person['email'] = value
//         	errors['email'] = ''
//         	if(errors['email'].length > 0 && this.checkEmail(value)) {
//         		   errors['email'] = ''	
//         	}
//         	if(person.name === '') {
//         		errors['name'] = 'fill this field'
//         		return this.setState({person: person, errors: errors})
//         	}
//         	else {
//         		errors['name'] = ''

//         		return this.setState({person: person, errors: errors})
//         	}
//         },
//         checkEmail(email) {
//         	let validEmail = true
//         	let atpos = email.indexOf("@");
// 		    let dotpos = email.lastIndexOf(".");
// 		    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=email.length) {
// 		    	validEmail = false
// 		    }
// 		    return validEmail
//         },
       
//         checkPersonPassword(person, value) {
//         	let errors = this.state.errors
//         	person['password'] = value 
//         	errors['password'] = ''
//         	if (person.password === '') {
// 		      errors['password'] = "fill this field"
// 		      return this.setState({person: person, errors: errors})
		       
// 		    }
//         	for(let i = 0; i<value.length; i++) {
        	
//            if(value.length < 6) {
//            	person['password'] = this.getPersonPassword(value)
//            	errors['password'] = 'Atleast 6 charcaters to make password strong'
//             this.setState({errors: errors, person: person });
//             return ''
//            }

//         }   
//             person['password'] = this.getPersonPassword(value)
//             errors['name'] = ''
//             return this.setState({person: person, errors: errors})
//         },
//         getPersonPassword(value) {
//         	return value
//         },
     
//         checkPerson() {
//         	let validPerson = true
//         	let person  = this.state.person
//         	let errors = this.state.errors
//         	let message = "fill this field"

        	
//         	if(person.email === '') {
//         		errors['email'] = message
//         		validPerson = false
//         	}
        	
//         	if(errors.name.length > 0 || errors.email.length > 0 || errors.phone.length > 0 ) {
//         		validPerson = false
//         	}
//         	if(!this.checkEmail(person.email)) {
//         		errors['email'] = "Not a valid e-mail address"
//         		validPerson = false
//         	}
//         	if(person.password === '') {
//         		errors['password'] = message
//         		validPerson = false
//         	}
//         	this.setState({errors: errors})
//         	return validPerson
//         },
//           addLogin: function(e) {
          	
//         	if(!this.checkPerson()) {
//         		return ''
//         	}
//         	//this.props.addPerson(this.state.person)
        	
        	
//         	return this.setState({person: { email: '', password: ''},  errors: {email: '', password: ''}})
//         },
       
// render: function() {
// 	let {persons, addPerson,onClick} = this.props

	

// 	return(
// <MuiThemeProvider>
// 		<div>
// 		<LoginPage
// 		    person={this.state.person} 
// 		    errors={this.state.errors} 
// 		    onChange={this.updatePerson} 
// 		    onClick={this.addLogin} 
		   
		    
// 		    />
		
// 		</div>
// 		</MuiThemeProvider>
// 		);
// }
// });


// module.exports = LoginPageValidate;