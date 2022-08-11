import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'
import * as Markdown from 'react-markdown'
import Navbar from '../section/Navbar'
import ContentfulUtil from '../../utils/ContentfulUtil'

class ProjectPost extends React.Component {
  state = {
    // date: "",
    title: "",
    before: "",
    after: "",
    content: ""
  };

  setPost = post => {
    if (post && post.items.length) {
      this.setState({
        // date: post.items[0].fields.date,
        title: post.items[0].fields.title,
        before: post.items[0].fields.before,
        after: post.items[0].fields.after,
        content: post.items[0].fields.content
      });
    }
  };

  componentDidMount() {
    if (this.isBlogPostInProps()) {
      this.setState({
        // date: this.props.location.date,
        title: this.props.location.title,
        before: this.props.location.before,
        after: this.props.location.after,
        content: this.props.location.content
      });
    } else {
      ContentfulUtil.fetchPostByPathName(this.props.match.params.blogPost)
          .then((response) => this.setPost(response));
    }
  };

  isBlogPostInProps = () => 
      this.props &&
      this.props.location &&
      // this.props.location.date &&
      this.props.location.title &&
      this.props.location.before &&
      this.props.location.after &&
      this.props.location.content;    

  isBlogPostLoaded = () => 
      this.state &&
      // this.state.date &&
      this.state.title &&
      this.state.before &&
      this.state.after &&
      this.state.content;
  renderBlogPost = () => (
    <>
      <Link to="../projects">Back to Blog</Link><br></br><br></br>
      <h1>{this.state.title}</h1>
      {/* <p>
        {moment(this.state.date).calendar(null, {
          sameDay: '[Today]',
          lastDay: '[Yesterday]',
          lastWeek: '[Last] dddd',
          sameElse: 'MMM Do YYYY'
        })}
      </p> */}
      
      <img src={this.state.before.fields.file.url} alt="Before" />
      <p>Before</p>

      <img src={this.state.after.fields.file.url} alt="After" />
      <p>After</p>

      <Markdown source={this.state.content} />
    </>
  );

  render = () => {
    return this.isBlogPostLoaded() ? this.renderBlogPost() : (
      <div className='loading'>
      <p>Page is loading..</p>
      </div>
    );
  }
}

export default ProjectPost
