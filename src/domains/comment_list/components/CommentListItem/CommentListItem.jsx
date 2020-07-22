import React from 'react';
import moment from 'moment-timezone';
import { Link } from 'react-router-dom';

import { ProportionalImage } from '../../../../foundation/components/ProportionalImage';
import { ASSETS_PATH, CDN_ASSETS_PATH } from '../../../../constant';

export function CommentListItem({ comment }) {
  return (
    <article
      id={`comment-${comment.comment_id}`}
      className="comment-CommentListItem"
    >
      <div className="comment-CommentListItem__avatar">
        <ProportionalImage src={comment.commenter.image.replace(ASSETS_PATH, CDN_ASSETS_PATH) + '?fm=webp&q=70&w=100&h=100'} boxAspectRatio={1} />
      </div>
      <div className="comment-CommentListItem__body">
        <h3 className="comment-CommentListItem__commenter">
          {comment.commenter.user_name}
        </h3>
        <p className="comment-CommentListItem__comment">{comment.comment}</p>
        <footer className="comment-CommentListItem__footer">
          <Link to={`#comment-${comment.comment_id}`}>
            <time
              dateTime={moment(comment.posted_at).toISOString(true)}
              title={moment(comment.posted_at).toISOString(true)}
            >
              {moment(comment.posted_at).fromNow()}
            </time>
          </Link>
        </footer>
      </div>
    </article>
  );
}
