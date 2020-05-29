import React, { Component } from "react";
import { Button } from "react-bootstrap";
import fire from "../fire";
import classes from "../login.module.css";

class Login extends Component{
    constructor(props){
        super(props);
        this.state={
            email:'',
            password:''
        }
    }
    login=(e)=>{
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{}).catch((error)=> {
           alert(error);
          });

    }
    signup=(e)=>{
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{}).catch((error)=> {
           alert(error);
          });
    }

    handleChange = (e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
    render(){
        return(
            <>
                <div className="container" className={classes.boxShadow}>
                    <h1 className={classes.MarginBottom20}>Login</h1>
                    <div>
                        {/* <p className={classes.marginBottom}>Email </p> */}
                        <p><input className={classes.inputField} type="email" value={this.state.email} onChange={this.handleChange} placeholder="Enter your email" name="email"></input></p>
                        {/* <p className={classes.marginBottom}>Password</p> */}
                        <p><input className={classes.inputField} type="password" value={this.state.password} onChange={this.handleChange} placeholder="Password" name="password"></input></p>
                    </div>
                    <div style={{ flex: "inline-block"}}>
                        <Button style={{marginRight:"10px"}}  variant="primary" onClick={this.login}>Login</Button>
                        <Button  variant="primary" onClick={this.signup}>Sign-up</Button>
                    </div>
                </div>
            </>
        )
    }
}
export default Login