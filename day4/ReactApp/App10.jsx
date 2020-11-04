import React from 'react';
import axios from 'Axios'
class App10 extends React.Component{
    constructor(props){
        super(props);
        this.state={
            users:[],
            filteredUsers:[]
        };
    }
    componentDidMount(){
        const apiurl='https://api.github.com/users/hacktivist123/repos';
        // fetch(apiurl)
        // .then(response=>response.json())
        // .then(data=>console.log(data));
        // axios.get(apiurl)
        // .then(response=>console.log(response.data))  
        const urlone=axios.get('http://jsonplaceholder.typicode.com/users/');
        const urltwo=axios.get(apiurl);
        const myurl = axios.get('http://localhost:4000/users');
        axios.all([urlone,urltwo,myurl]).then(axios.spread((...responses)=>{
            console.log("first",responses[0]);
            console.log("second",responses[1]);
            console.log("third",responses[2]);
            const users=responses[2].data;
            this.setState({
                users
            });
        }))
       

        }
    
    findUsers(e){
        var key = e.target.value;
        
        if(key)
        {
            const filteredUsers=this.state.users.filter((user)=> user.first_name.startsWith(key));
            this.setState({
                filteredUsers
            });
        }
        else{
            this.setState({
                filteredUsers:this.state.users
            });
        }


    }

    render(){
        const users = this.state.filteredUsers; 
        
        return(
            <div>
            <input type="text" id="key" placeholder="enter item to search" onChange={(e)=>{this.findUsers(e)}} ></input>

            <ul>
            {
                    users.map((user)=>{
                        return  <li key={user.email}>{user.first_name}</li>
                    })
            }
            </ul>
        </div>);
        
    }
}

export default App10;