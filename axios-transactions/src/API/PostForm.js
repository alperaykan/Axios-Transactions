import React, {Component, useState} from 'react'
import axios from "axios";

class PostForm extends Component {

    // PostFormu function olarak yazarsak aşağıdakileri useState'leri kullanabiliriz
    // const [userId, setUserId] = useState('')
    // const [title, setTitle] = useState('')
    // const [body, setBody] = useState('')

    constructor(props) {
        super(props)
    
        this.state = {
             userId: '',
             title: '', 
             body: ''
        }
    }
    
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    } 


    handleSubmit = (e) => {
        e.preventDefault()
        axios.post('https://jsonplaceholder.typicode.com/posts', this.state)
        .then((response) => {
            //consolda kayıt olduğu görülüyor
           console.log(response);
        })
    }





    render(){
        const {userId, title, body} = this.state
        return (

            <div> 
            
                <form onSubmit={this.handleSubmit}>

            <div>
                <label>User ID</label> <br />
                <input type='text' name='userId' value={userId} onChange={this.handleChange}></input> 
            </ div>
            <div>    
                <label>Title</label> <br />
                <input type='text' name='title' value={title} onChange={this.handleChange}></input> 
            </ div>
            <div>    
                <label>Body</label> <br />
                <input type='text' name='body' value={body} onChange={this.handleChange}></input>
            </ div>
            <button type='submit' >Submit</button>

                </form>
            </div>
           

        )
    }
    
    
}

export default PostForm