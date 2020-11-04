import React from 'react';
class App18 extends React.Component
{
    constructor(props){
        super(props);
        this.state={
            
            errors:[]
    
        }

        this.username=React.createRef()
            this.password=React.createRef()
            this.Age=React.createRef()
            this.phonenumber=React.createRef()
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleValidation=this.handleValidation.bind(this);

    }
    handleSubmit(e){
        e.preventDefault();
        var username = this.username.current.value; 
        var password = this.password.current.value;
        var age = this.Age.current.value;
        var phone = this.phonenumber.current.value;
        var errors=[];
        errors=this.handleValidation(username,password,age,phone)
        this.setState({errors})

        
    }
    handleValidation(user,pwd,age,ph){
        var errors=[]
        if(user.length===0)
            errors.push("usernamre cannot be empty")
        if(pwd.length<6)
        errors.push("password length must be more than 6 characters")
        if(isNaN(age) || age.length===0)
        errors.push("age should be digits")
        if(isNaN(ph)  ph.length!=10)
        errors.push("phone must be in valid format");
        return errors
    }
    render(){
        return (
            <div>
                
                {this.state.errors.map(error => <p key={error}>{error}</p>)}
                <form onSubmit={this.handleSubmit}>
                   Username: <input type="text" ref={this.username}></input><br></br>
                   password: <input type="text" ref={this.password}></input><br></br>
                   age: <input type="text" ref={this.Age}></input><br></br>
                   Contact: <input type="text" ref={this.phonenumber}></input><br></br>
                   <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default App18;