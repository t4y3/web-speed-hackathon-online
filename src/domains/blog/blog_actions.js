import { fetch } from '../../foundation/gateway';
import { API_PATH } from '../../constant';

export const ACTION_BLOG_FETCHED = 'BLOG_FETCHED';

export async function fetchBlog({ dispatch, blogId }) {
  const blog = await fetch(
    `${API_PATH}/.netlify/functions/api//blog/${blogId}`,
  );

  dispatch({
    type: ACTION_BLOG_FETCHED,
    data: {
      blog,
    },
  });
}
