import React, {Component} from 'react';
import './Registration.css';

class Log extends Component{



  constructor(props) {
     super(props);
     this.state={username: ''}
     this.state={password: ''}


     this.handleChange = this.handleChange.bind(this);
     this.handleSubmit = this.handleSubmit.bind(this);
   }

   handleChange(event) {
     var name=event.target.name;
     this.setState({[name]: event.target.value});

   }

   handleSubmit(event) {
     var sendObject=JSON.stringify({
       "username": this.state.username,
       "password": this.state.password,


     });
     console.log(sendObject);
     event.preventDefault();
   }



  render(){

    return(
      <div class="container">
        <div class="header">
        <h1> Log In</h1>
          </div>
      <div class="RegistrationForm">
      <form onSubmit={this.handleSubmit}>
  <label>
    <input type="text" name="username" value={this.state.username} onChange={this.handleChange} placeHolder="Username" />
  </label>
  <label>
    <input type="text" name="password" value={this.state.password}  onChange={this.handleChange}placeholder="Password" />
  </label>

  <input type="submit" value="Submit" />
</form>
  </div>

  </div>
    );
  }

}
export default Log;
