import React, { Component } from 'react';
import fire from './fire';
import Login from './component/login';
import Home from './component/home';

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      user:{}
    }
  }
  authListner(){
    fire.auth().onAuthStateChanged((user)=>{
      console.log(user)
        if(user){
            this.setState({user});
        }else{
            this.setState({user:null});
        }
    })
}
componentDidMount(){
  this.authListner();
}

  render(){
    return(
      <>
        <div>
          {this.state.user?(<Home currentUser={this.state.user.email} />):(<Login/>)}
        </div>
      </>
    )
  }
}

export default App;
