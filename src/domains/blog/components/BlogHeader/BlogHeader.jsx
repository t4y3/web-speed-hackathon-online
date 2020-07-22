import React from 'react';
import { Link } from 'react-router-dom';
import { ASSETS_PATH, CDN_ASSETS_PATH } from '../../../../constant';

import { ProportionalImage } from '../../../../foundation/components/ProportionalImage';

export function BlogHeader({ blog }) {
  return (
    <header className="blog-BlogHeader">
      <div className="blog-BlogHeader__bg-image">
        <ProportionalImage src={blog.image.replace(ASSETS_PATH, CDN_ASSETS_PATH) + '?fm=webp&q=65&w=800&h=450'} alt="" boxAspectRatio={9 / 16} />
      </div>
      <div className="blog-BlogHeader__contents">
        <h1 className="blog-BlogHeader__title">
          <Link to={`/${blog.blog_id}`} className="blog-BlogHeader__title-link">
            {blog.nickname}
          </Link>
        </h1>
        <p className="blog-BlogHeader__intro">{blog.self_introduction}</p>
      </div>
    </header>
  );
}
