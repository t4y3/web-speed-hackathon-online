import { fetch } from '../../foundation/gateway';
import { API_PATH } from '../../constant';

export const ACTION_BLOG_LIST_FETCHED = 'BLOG_LIST_FETCHED';

export async function fetchBlogList({ dispatch }) {
  const blogs = await fetch(`${API_PATH}/.netlify/functions/api/blogs`);

  dispatch({
    type: ACTION_BLOG_LIST_FETCHED,
    data: {
      blogs,
    },
  });
}
