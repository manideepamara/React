import React from 'react'
class  App17 extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data:''}

           this.handleClear = this.handleClear.bind(this);
        this.handleUpdate=this.handleUpdate.bind(this);
    }
    handleClear(){
        this.setState({data:''});
    }
    handleUpdate(e){
        console.log(e.target.value)
        this.setState({
            data:e.target.value
        });
    }
    render(){
        return (
            <div>
                <input type="text" value={this.state.data} onInput={this.handleUpdate}></input>
                <button onClick={this.handleClear}>Clear</button>
                <h1>{this.state.data}</h1>
            </div>
        );
    }
}

export default App17;