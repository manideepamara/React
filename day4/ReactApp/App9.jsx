import React from 'react';
class App9 extends React.Component{
    constructor(props){
        super(props);
        this.state={
            
            name:"Tanish"
        }
        this.change=this.onclick.bind(this);
    }
    componentDidMount(){
        console.log("values from ...."+this.state.name);
    }
    componentDidUpdate(prevProps,prevStates){
        console.log("valued from "+this.state.name+"to"+prevStates.name);
    }
    onclick(){
        var name=document.getElementById("name").value;
        document.getElementById("name").value='';
        this.setState({
            name
        });
    }
    render(){
        return (
            <div>
                <input type="text" id="name"></input><br>
                </br>
                <button onClick={this.change}>Click</button>
                <p>valued from ...... to </p>
            </div>
        );
    }
}




export default App9;