import React, { Component } from 'react'

class Login extends Component{
    constructor(){
        super()
        this.state = {
            username: '',
            password: ''
        }
        this.handleChange = this.handleChange.bind(this)
    }
    userName(name){
        this.setState({ username: name })
    }
    password(pass){
        this.setState({ password: pass})
    }
    handleChange(){
        alert(`Username: ${this.state.username} Password: ${this.state.password}`)
    }
    render(){
        return(
            <div>
                <input onChange={ (e) => this.userName(e.target.value) } />
                <input onChange={ (e) => this.password(e.target.value) } />
                <button onClick={this.handleChange} > Login </button>
            </div>
        )
    }
}


export default Login;