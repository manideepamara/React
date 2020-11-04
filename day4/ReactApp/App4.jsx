import React from 'react';
class App4 extends React.Component{
    constructor(props){
        super(props);
        this.state={
             count:0
        }
    }
    increment(){
        this.setState({
            count:this.state.count+1
        });
    }

    decrement(){
        this.setState({
            count:this.state.count-1
        });
    }
    reset(){
        this.setState({
            count:0
        });
    }
    render(){
        return (
            <div>
                <button className="button" onClick={(e)=>this.increment()}>Increment</button>
                <button className="button" onClick={(e)=>this.decrement()}>Deccrement</button>
                <button className="button" onClick={(e)=>this.reset()}>reset</button>
                {this.state.count}
            </div>
        );
    }
}


export default App4;