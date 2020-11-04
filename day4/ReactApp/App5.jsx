import React from 'react';
class App5 extends React.Component{
    constructor(props){
        super(props);
        this.state={
            title:'react Exmaple'
        }
    }
    onToggle(){
        if(this.state.title === ''){
            this.setState({
                title:'react Exmaple'
            });
        }
        else{
            this.setState({
                title:''
            });
        }
    }
    render(){
        return (<div>
            <input type="checkbox" id="showTitle" onClick={()=>this.onToggle()} defaultChecked />
              <label htmlFor="showTitle">Show title</label>
              <h2>{this.state.title}</h2>

            </div>
    
            
    
        )
    }
}

export default App5;