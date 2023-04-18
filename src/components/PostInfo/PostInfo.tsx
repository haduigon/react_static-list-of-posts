import React from 'react';
import { Post } from '../../types/Post';
import { CommentList } from '../CommentList/CommentList';
import './PostInfo.scss';

type Props = {
  post: Post
};

export const PostInfo: React.FC<Props> = ({ post }) => (
  <div className="PostInfo">
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">{post.title}</h3>

      <p>
        {' Posted by  '}

        <a className="UserInfo" href="mailto:Sincere@april.biz">
          {post.user?.name}
        </a>
      </p>
    </div>

    <p className="PostInfo__body">
      {post.body}
    </p>

    <hr />

    <CommentList postId={post.id} />
  </div>
);