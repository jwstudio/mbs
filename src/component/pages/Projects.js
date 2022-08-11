import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import Navbar from '../section/Navbar';
import BlogPreviewItem from './BlogPreviewItem';
import BlogPreviewItem2 from './blogPreviewItem2';
import ContentfulUtil from '../../utils/ContentfulUtil';

class Blog extends React.Component {
  state = {
    posts: []
  }

  componentDidMount() {
    ContentfulUtil.fetchAllProjectPosts().then(this.setPosts);
  }

  setPosts = response => {
    this.setState({
      posts: response.items
    })
  }

  render() {
    return (
      <div>
        <Navbar></Navbar>
        <div id="header" style={{textAlign: "center"}}>
        <div className="row">

          <div className="col-12">
            <h1>My Projects</h1>
            <p>View some of my projects bellow, if you like what you see, contact me bellow!</p>
            <Link to="projects" tabindex="-1"><button id="primarybutton">Contact Me</button></Link>
            <br></br><br></br>
          </div>

        </div>

      </div>
        <div className='' id="projectsSection">
        {
          this.state.posts.map(({fields}, i) =>
              <BlogPreviewItem2 key={i} {...fields} />
        )}
        </div>
      </div>
    )
  }
}

export default Blog
