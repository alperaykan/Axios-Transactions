import axios from "axios";
import React, {Component} from "react";

class PostList extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
             posts: []
        }
    }
    
    // get request yapıldı
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts').then((response) => {
            //response boş dönerse exception'a düşecektir şöyle yapılabilir
            if(!!response?.data) {
                this.setState({
                posts: response.data
            })
            console.log(response.data)
            }
         //*-******************************
        })
    }

    render(){
        const {posts} = this.state
        return (
            <div>
                List Of Posts
                <hr />
                <div>{posts.map(post => <div key={post.id}>{post.title} <hr /></div> )}</div>
            </div>
            
        )
    }
}

export default PostList
