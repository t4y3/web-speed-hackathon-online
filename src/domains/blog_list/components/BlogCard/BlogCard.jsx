import React from 'react';
import { Link } from 'react-router-dom';
import { ASSETS_PATH, CDN_ASSETS_PATH } from '../../../../constant';

import { ProportionalImage } from '../../../../foundation/components/ProportionalImage';

export function BlogCard({ blog }) {
  return (
    <Link className="blog-list-BlogCard" to={`/${blog.blog_id}`}>
      <div className="blog-list-BlogCard__thumbnail">
        <ProportionalImage
          src={blog.image.replace(ASSETS_PATH, CDN_ASSETS_PATH) + '?fm=webp&q=65&w=376&h=212'}
          alt=""
          boxAspectRatio={9 / 16}
          roundedAsCardThumbnail
        />
      </div>
      <p className="blog-list-BlogCard__title">{blog.nickname}</p>
    </Link>
  );
}
