import axios from "axios";
import { Component } from "react";
import colors from "../hoc/colors";

class Home extends Component {
  state = {
    posts: [],
  };
  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      this.setState({
        posts: res.data.slice(0, 10),
      });
    });
  }
  render() {
    let { posts } = this.state;
    let postlist = posts.length ? (
      posts.map(post =>{
        return <div className="center post card" key={post.id}>
          <div className=" card-content">
            <div className="card-title">
              <h5>{post.title}</h5>
              <p>{post.body}</p>
            </div>
          </div>
        </div>
      })
    ) : (
      <div className='center'>
        <p>No Post found!</p>
      </div>
    )
    return (
      <div className="center">
        <h1>Home Page</h1>
        <p className = 'container'>
          {postlist}
        </p>
        {/* <p>{posts}</p> */}
      </div>
    );
  }
}
export default colors(Home);
