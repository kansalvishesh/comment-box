import React, { Component } from "react";
import {Form, Button} from "react-bootstrap";
import fire from "../fire";
import Login from "./login";
import classes from "../login.module.css";
import Spinner from "./spinner";

class Home extends Component{
    constructor(props){
        super(props)
        this.state={
            message : "",
            messages:[],
            user:""
        }
    }
    logout = ()=>{
        fire.auth().signOut().then(function() {
            console.log("Sign-out successful.")
          }).catch(function(error) {
            console.log("An error happened.")
          });
    }

        componentDidMount(){

            fire.database().ref('/messages').on('value', (snapshot)=> {         
                let messages = []
                for(let key in snapshot.val()){
                 let messageObject = snapshot.val()[key]
                 messages.push(messageObject)
             }
             console.log(messages)
             this.setState({messages:messages})
            });
        }
        handleChange = (event) => {
            this.setState({message: event.target.value})
        }
        handleClick =()=>{
            fire.database().ref("messages").push({
                message: this.state.message,
                user:this.props.currentUser
                
            })
            this.setState({
                message:""
            })
            this.setState({

            })
        }
    render(){
        return(
            <> 
                <div className="container-fluid" style={{marginTop:"4%", display:"flex",
                // alignItems:"center",
                justifyContent:"center",
                flexDirection:"column",
                padding:"2%",
                maxWidth:"50%",
                border:"1px solid black",
                margin:"auto"}}
                className={classes.outershadow}>
                    <div><p><span style={{color:"#696974",fontWeight:"bolder"}}>Welcome</span> <span style={{color:"#9B9692"}}>{this.props.currentUser}</span></p></div>
                    <div style={{marginBottom:"2%"}} className="container"><Button  style={{float:"right",margin:"10px"}}S variant="danger" onClick={this.logout}>Log out</Button></div>
                    <div className="container">
                    <Form style={{width:"100%",height:"100%"}}>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Control value={this.state.message} onChange={this.handleChange} placeholder="Type a comment..." as="textarea" rows="3" />
                    </Form.Group>
                    </Form>
                    
                    </div>
                    <div className={classes.MarginBottom20}>
                    <Button style={{float:"right",marginRight:"3.5%"}}  variant="success" onClick={this.handleClick}>Post Comment</Button>
                    </div>
                    <Display messages={this.state.messages}/>
                </div>
            </>
        )
    }
}
export default Home;
const Display = (props) =>{
    return(
        <>
            <div className="container" style={{color:"black",height: 300,backgroundColor:"white",overflow:"auto"}}>
            {
                props.messages.length>0?
                <div>
                    {
                        props.messages.map((data,key)=>{
                            return(
                            <>
                            <div  className={classes.box} style={{overflow:"hidden"}}>
                            <p style={{margin:10}} key={key}> <span style={{color:"#696974",fontWeight:"bolder"}}>{data.user}</span><br/> <span style={{backgroundColor:"white",color:"#9B9692"}}> {data.message}</span></p>
                            </div>
                            </>
                            )
                        })
                    }
                </div> : <Spinner/>
            }

            </div>
        </>
    )
}