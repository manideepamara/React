import axios from 'axios';
import React,{ Component } from 'react';
class App15 extends Component {
    constructor(props){
        super(props);
        this.state={
            id:"",
            first_name:"",
            last_name:"",
            email:""
        }
    }
    onSubmit(e){
        e.preventDefault();
        console.log(this.state);
        axios
            .post(`http://localhost:4000/users/`,this.state)
            .then((response)=>console.log("my responses",response))
            .then((err)=>console.log("",err));
    }
    onInputChange(e){
        //console.log(e);
        this.setState({
            [e.target.name]: e.target.value,
        });
    }
    render(){
        return (
            <div>
                <input 
                type="text"
                name="id"     
                value={this.state.id} 
                onChange={(e)=>this.onInputChange(e)}
                placeholder="email"
                >
                </input>

                <input 
                    type="text
                    "
                    name="first_name"     
                    value={this.state.first_name} 
                    onChange={(e)=>this.onInputChange(e)}
                    placeholder="firsyt"
                >
                </input><br></br>
                <input 
                    type="text"
                    name="last_name"     
                    value={this.state.last_name} 
                    onChange={(e)=>this.onInputChange(e)}
                    placeholder="name"
                >
                </input><br></br>
                <input 
                    type="text"
                    name="email"     
                    value={this.state.email} 
                    onChange={(e)=>this.onInputChange(e)}
                    placeholder="email"
                >
                </input><br></br>
                <button  onClick={(e)=>this.onSubmit(e)}>Submit</button>
            </div>
        )
    }
}




export default App15;