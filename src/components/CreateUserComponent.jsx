import React, { Component } from 'react'
import UserService from '../services/UserService';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/esm/Dropdown';
import './CreateUserComponent.css';

class CreateUserComponent extends Component {
    constructor(props){
        super(props)
        
        this.state = {
            // step 2
            id: this.props.match.params.id,
            firstName: '',
            lastName: '',
            userName:'',
            emailId: '',
            password:''

        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);        
        this.changepasswordHandler = this.changepasswordHandler.bind(this);
        this.saveUser = this.saveUser.bind(this);
    }

    saveUser = (e) => {
        e.preventDefault();
        let user = {firstName: this.state.firstName, lastName: this.state.lastName, userName: this.state.userName, emailId: this.state.emailId, password: this.state.password};
        console.log('user => ' + JSON.stringify(user));

        // step 5
        if(this.state.id === '_add'){
            UserService.createUser(user).then(res =>{
                this.props.history.push('/users');
            });
        }
    }
    
    changeFirstNameHandler= (event) => {
        this.setState({firstName: event.target.value});
    }

    changeLastNameHandler= (event) => {
        this.setState({lastName: event.target.value});
    }

    changeUserNameHandler= (event) => {
        this.setState({lastName: event.target.value});
    }

    changeEmailHandler= (event) => {
        this.setState({emailId: event.target.value});
    }

    changepasswordHandler= (event) => {
        this.setState({lastName: event.target.value});
    }

    cancel(){
        this.props.history.push('/users');
    }
    

    render() {
        return (
            <div>
                 <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card cardUser col-md-6 offset-md-3 offset-md-3">
                                <h3 className="">Add User</h3>
                                <button className="btn btn-danger close" onClick={this.cancel.bind(this)}>x</button>
                                <hr className="top-line"></hr>
                                <div className = "">
                                    <form>
                                        <div className = "form-group form-padding">
                                            <label> First Name: </label>
                                            <input placeholder="Enter your first name" name="firstName" className="form-control" 
                                                value={this.state.firstName} onChange={this.changeFirstNameHandler}/>
                                        </div>
                                        <div className = "form-group form-padding">
                                            <label> Last Name: </label>
                                            <input placeholder="Enter your last name" name="lastName" className="form-control" 
                                                value={this.state.lastName} onChange={this.changeLastNameHandler}/>
                                        </div>
                                        <div className = "form-group form-padding ">
                                        <DropdownButton id="dropdown-basic-button" onSelect={function(evt){console.log(evt)}} className="dropdown-align" title="Select.." >
                                            <Dropdown.Item eventKey="Male">Male</Dropdown.Item>
                                            <Dropdown.Item eventKey={['M', 'a']}>Female</Dropdown.Item>
                                        </DropdownButton>
                                        </div>
                                        <div className = "form-group form-padding">
                                            <label> Username: </label>
                                            <input placeholder="Enter username" name="userName" className="form-control" 
                                                value={this.state.userName} onChange={this.changeUserNameHandler}/>
                                        </div>
                                        <div className = "form-group form-padding">
                                            <label> Email Id: </label>
                                            <input placeholder="Enter your email id" name="emailId" className="form-control" 
                                                value={this.state.emailId} onChange={this.changeEmailHandler}/>
                                        </div>
                                        <div className = "form-group form-padding">
                                            <label> Password: </label>
                                            <input placeholder="Enter password" name="password" className="form-control" 
                                                value={this.state.password} onChange={this.changepasswordHandler}/>
                                        </div>
                                        <hr className="bottom"></hr>
                                        <button className="btn btn-success btn-add" onClick={this.saveUser}>Add</button>
                                        <button className="btn btn-danger btn-cancel" onClick={this.cancel.bind(this)}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
            </div>
        )
    }
}

export default CreateUserComponent;