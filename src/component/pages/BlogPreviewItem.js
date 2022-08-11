import React from 'react'
import { Link, useRouteMatch } from 'react-router-dom';
import * as Markdown from 'react-markdown'
import moment from 'moment'
import '../style/blogPreview.scss';

const BlogPreviewItem = (props) => {
  let match = useRouteMatch();
  let maxCharInPreview = 150;
  return (
    <div className='everyOther'>
    <div className='blogPreview'>
      <div id="content">
        <img src={props.after.fields.file.url} alt="After" />
        <h1>{props.title}</h1>
        
        <Markdown
          source={
            props.content.split(" ").splice(0,maxCharInPreview).join(" ").concat('...')
          }
        />

      <div className="">
          <div className="">
            <Link
                to={{ pathname: `${match.url}/${props.path}`, ...props }}>
              Read More
            </Link>
          </div>

          </div>
        <div className="level-right">
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
    </div>
    </div>
  );
}

export default BlogPreviewItem
