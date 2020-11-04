import React from 'react';
class App3 extends React.Component{
    render(){
    return <h1>{this.props.name}{this.props.age}</h1>;
    }
}

App3.defaultProps = {
    name:"manid",
    age:26,
};
export default App3;