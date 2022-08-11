import React from 'react'
import { Link, useRouteMatch } from 'react-router-dom';
import * as Markdown from 'react-markdown'
import moment from 'moment'
import '../style/blogPreview.scss';

const BlogPreviewItem2 = (props) => {
  let match = useRouteMatch();
  let maxCharInPreview = 150;
  return (
    <div className='everyOther'>
    <Link to={{ pathname: `projects/${props.path}`, ...props }} style={{textDecoration: "none"}}>
    <div className='blogPreview'>
      <div id="content">


        <div id="projecttest">
        <div className="row">
        <h2>{props.title}</h2>
        <p>
            <Markdown
                source={
                props.content.split(" ").splice(0,maxCharInPreview).join(" ").concat('...')
                }
            />
        </p>
            <div className="col-6">
            <img src={props.before.fields.file.url} alt="Before" />
            <p>Before</p>
            </div>

            <div className="col-6">
            <img src={props.after.fields.file.url} alt="After" />
            <p>After</p>
            </div>

        </div>
        <Link to={{ pathname: `projects/${props.path}`, ...props }} tabIndex="-1"><button id="primarybutton">Read More ...</button></Link>

        </div>

        

          {/* <p className="level-item has-text-link is-size-7">
          {moment(props.date).calendar(null, {
              sameDay: '[Today]',
              lastDay: '[Yesterday]',
              lastWeek: '[Last] dddd',
              sameElse: 'MMM Do YYYY'
            })}
          </p> */}
        </div>
      </div>
      </Link>
    </div>
  );
}

export default BlogPreviewItem2
