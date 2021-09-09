import React, { Component } from "react";
import $ from 'jquery';
import UserService from '../services/UserService';
import randomColor from "randomcolor";
import './GetAllUser.css';

class GetAllUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
    };    
    this.addUser = this.addUser.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
  }

    deleteUser(id){
        UserService.deleteUser(id).then( res => {
            this.setState({users: this.state.users.filter(user => user.id !== id)});
        });
    }

    addUser(){
        this.props.history.push('/add-user/_add');
    }
    color(){
            const colors = ['red', 'blue', 'green', 'teal', 'rosybrown', 'tan', 'plum', 'saddlebrown'];
            var boxes = document.querySelectorAll(".circle");  
            for (var i = 0; i < boxes.length; i++) {
                boxes[i].style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            }
    }

    

  render() {
     { $(document).ready(function () {          
        var letter=document.getElementById("FullName").innerText;
        if(typeof letter !== 'undefined' && letter !== null) {
            document.getElementById("FirstLetter").setAttribute("data-FL", letter[0]);
          }
      });}
     
    return (
    <div>
        <h2 className="text-center">All Users</h2>
        <div className="row">
          <button className="btn btn-primary btn-addUser" onClick={this.addUser}>{" "}Add User</button>
        </div>
    {/*<div className="bg-gray col-sm-12">
        <div className="row">
        {
            this.state.users.map(
            user => 
            <div className="col-sm-3">
                <div className="card">
                    <div className="card-body">
                        <i className="fa fa-pencil pos-pencil" />
                        <i className="fa fa-trash-o pos-trash" />
                        <div className="row mt-2">
                            <div class="circle col-sm-3" data-FL="" id="FirstLetter" data-color="red"></div>
                            <h4 className="card-title col-sm-9" id="FullName">{ user.firstName} {user.lastName}</h4>
                        </div>
                        <p className="card-text"></p>
                    </div>
                    <h4 className=""></h4>
                </div>
            </div>
            )
        }
        </div>
         
    </div>*/}
    

<div className="bg-gray col-sm-12">
  <div className="row">
    <div className="col-sm-3">
      <div className="card">
        <div className="card-body">
          <i className="fa fa-pencil pos-pencil" />
          <i className="fa fa-trash-o pos-trash" />
          <div className="row mt-2">
            <div class="circle col-sm-3" data-FL="" id="FirstLetter" onLoad="color()"></div>
            <h4 className="card-title col-sm-9" id="FullName">Jane Doe</h4>
          </div>
          <p className="card-text"></p>
        </div>
        <h4 className=""></h4>
      </div>
    </div>
    <div className="col-sm-3">
      <div className="card">
        <div className="card-body">
          <i className="fa fa-pencil pos-pencil" />
          <i className="fa fa-trash-o pos-trash" />
          <div className="row mt-2">
            <div class="circle col-sm-3" data-FL="H" data-color="red"></div>
            <h4 className="card-title col-sm-9">Jane Doe</h4>
          </div>
          <p className="card-text"></p>
        </div>
        <h4 className=""></h4>
      </div>
    </div>
    <div className="col-sm-3">
      <div className="card">
        <div className="card-body">
          <i className="fa fa-pencil pos-pencil" />
          <i className="fa fa-trash-o pos-trash" />
          <div className="row mt-2">
            <div class="circle col-sm-3" data-FL="H" data-color="red"></div>
            <h4 className="card-title col-sm-9">Jane Doe</h4>
          </div>
          <p className="card-text"></p>
        </div>
        <h4 className=""></h4>
      </div>
    </div>
    <div className="col-sm-3">
      <div className="card">
        <div className="card-body">
          <i className="fa fa-pencil pos-pencil" />
          <i className="fa fa-trash-o pos-trash" />
          <div className="row mt-2">
            <div class="circle col-sm-3" data-FL="H" data-color="red"></div>
            <h4 className="card-title col-sm-9">Jane Doe</h4>
          </div>
          <p className="card-text"></p>
        </div>
        <h4 className=""></h4>
      </div>
    </div>
  </div>  
  <div className="gap"></div>
  <div className="row">
    <div className="col-sm-3">
      <div className="card">
        <div className="card-body">
          <i className="fa fa-pencil pos-pencil" />
          <i className="fa fa-trash-o pos-trash" />
          <div className="row mt-2">
            <div class="circle col-sm-3" data-FL="H" data-color="red"></div>
            <h4 className="card-title col-sm-9">Jane Doe</h4>
          </div>
          <p className="card-text"></p>
        </div>
        <h4 className=""></h4>
      </div>
    </div>
    <div className="col-sm-3">
      <div className="card">
        <div className="card-body">
          <i className="fa fa-pencil pos-pencil" />
          <i className="fa fa-trash-o pos-trash" />
          <div className="row mt-2">
            <div class="circle col-sm-3" data-FL="H" data-color="red"></div>
            <h4 className="card-title col-sm-9">Jane Doe</h4>
          </div>
          <p className="card-text"></p>
        </div>
        <h4 className=""></h4>
      </div>
    </div>
    <div className="col-sm-3">
      <div className="card">
        <div className="card-body">
          <i className="fa fa-pencil pos-pencil" />
          <i className="fa fa-trash-o pos-trash" />
          <div className="row mt-2">
            <div class="circle col-sm-3" data-FL="H" data-color="red"></div>
            <h4 className="card-title col-sm-9">Jane Doe</h4>
          </div>
          <p className="card-text"></p>
        </div>
        <h4 className=""></h4>
      </div>
    </div>
    <div className="col-sm-3">
      <div className="card">
        <div className="card-body">
          <i className="fa fa-pencil pos-pencil" />
          <i className="fa fa-trash-o pos-trash" />
          <div className="row mt-2">
            <div class="circle col-sm-3" data-FL="H" data-color="red"></div>
            <h4 className="card-title col-sm-9">Jane Doe</h4>
          </div>
          <p className="card-text"></p>
        </div>
        <h4 className=""></h4>
      </div>
    </div>
  </div>  
  <div className="gap"></div>
  <div className="row">
    <div className="col-sm-3">
      <div className="card">
        <div className="card-body">
          <i className="fa fa-pencil pos-pencil" />
          <i className="fa fa-trash-o pos-trash" />
          <div className="row mt-2">
            <div class="circle col-sm-3" data-FL="H" data-color="red"></div>
            <h4 className="card-title col-sm-9">Jane Doe</h4>
          </div>
          <p className="card-text"></p>
        </div>
        <h4 className=""></h4>
      </div>
    </div>
    <div className="col-sm-3">
      <div className="card">
        <div className="card-body">
          <i className="fa fa-pencil pos-pencil" />
          <i className="fa fa-trash-o pos-trash" />
          <div className="row mt-2">
            <div class="circle col-sm-3" data-FL="H" data-color="red"></div>
            <h4 className="card-title col-sm-9">Jane Doe</h4>
          </div>
          <p className="card-text"></p>
        </div>
        <h4 className=""></h4>
      </div>
    </div>
    <div className="col-sm-3">
      <div className="card">
        <div className="card-body">
          <i className="fa fa-pencil pos-pencil" />
          <i className="fa fa-trash-o pos-trash" />
          <div className="row mt-2">
            <div class="circle col-sm-3" data-FL="H" data-color="red"></div>
            <h4 className="card-title col-sm-9">Jane Doe</h4>
          </div>
          <p className="card-text"></p>
        </div>
        <h4 className=""></h4>
      </div>
    </div>
    <div className="col-sm-3">
      <div className="card">
        <div className="card-body">
          <i className="fa fa-pencil pos-pencil" />
          <i className="fa fa-trash-o pos-trash" />
          <div className="row mt-2">
            <div class="circle col-sm-3" data-FL="H" data-color="red"></div>
            <h4 className="card-title col-sm-9">Jane Doe</h4>
          </div>
          <p className="card-text"></p>
        </div>
        <h4 className=""></h4>
      </div>
    </div>
  </div>
  <div className="gap"></div>
  <div className="row">
    <div className="col-sm-3">
      <div className="card">
        <div className="card-body">
          <i className="fa fa-pencil pos-pencil" />
          <i className="fa fa-trash-o pos-trash" />
          <div className="row mt-2">
            <div class="circle col-sm-3" data-FL="H" data-color="red"></div>
            <h4 className="card-title col-sm-9">Jane Doe</h4>
          </div>
          <p className="card-text"></p>
        </div>
        <h4 className=""></h4>
      </div>
    </div>
    <div className="col-sm-3">
      <div className="card">
        <div className="card-body">
          <i className="fa fa-pencil pos-pencil" />
          <i className="fa fa-trash-o pos-trash" />
          <div className="row mt-2">
            <div class="circle col-sm-3" data-FL="H" data-color="red"></div>
            <h4 className="card-title col-sm-9">Jane Doe</h4>
          </div>
          <p className="card-text"></p>
        </div>
        <h4 className=""></h4>
      </div>
    </div>
    <div className="col-sm-3">
      <div className="card">
        <div className="card-body">
          <i className="fa fa-pencil pos-pencil" />
          <i className="fa fa-trash-o pos-trash" />
          <div className="row mt-2">
            <div class="circle col-sm-3" data-FL="H" data-color="red"></div>
            <h4 className="card-title col-sm-9">Jane Doe</h4>
          </div>
          <p className="card-text"></p>
        </div>
        <h4 className=""></h4>
      </div>
    </div>
    <div className="col-sm-3">
      <div className="card">
        <div className="card-body">
          <i className="fa fa-pencil pos-pencil" />
          <i className="fa fa-trash-o pos-trash" />
          <div className="row mt-2">
            <div class="circle col-sm-3" data-FL="H" data-color="red"></div>
            <h4 className="card-title col-sm-9">Jane Doe</h4>
          </div>
          <p className="card-text"></p>
        </div>
        <h4 className=""></h4>
      </div>
    </div>
  </div>
</div>


    </div>
    );
  }
}

export default GetAllUser;
