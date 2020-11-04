import React from 'react';
class App6 extends React.Component{
    constructor(props){
        super(props);
        this.hdClk=this.handleClick.bind(this);
    }
    handleClick(){
        console.log("I,m executed!");
    }
    render(){
        return (
            <div>
                <button onClick={(e)=>{this.handleClick()}}>ClickMe!</button>
            </div>
        );
    }
}


export default App6;