import { fetch } from '../../foundation/gateway';
import { API_PATH } from '../../constant';

export const ACTION_COMMENT_LIST_FETCHED = 'COMMENT_LIST_FETCHED';

export async function fetchCommentList({ dispatch, blogId, entryId }) {
  const comments = await fetch(
    `${API_PATH}/.netlify/functions/api//blog/${blogId}/entry/${entryId}/comments`,
  );

  dispatch({
    type: ACTION_COMMENT_LIST_FETCHED,
    data: {
      comments,
    },
  });
}
