import { fetch, post } from '../../foundation/gateway';
import { API_PATH } from '../../constant';

export const ACTION_ENTRY_FETCHED = 'ENTRY_FETCHED';
export const ACTION_LIKE_UPDATED = 'LIKE_UPDATED';

export async function fetchEntry({ dispatch, blogId, entryId }) {
  const entry = await fetch(
    `${API_PATH}/.netlify/functions/api/blog/${blogId}/entry/${entryId}`,
  );

  dispatch({
    type: ACTION_ENTRY_FETCHED,
    data: {
      entry,
    },
  });
}

export async function likeEntry({ dispatch, blogId, entryId }) {
  await post(
    `${API_PATH}/.netlify/functions/api/blog/${blogId}/entry/${entryId}/like`,
  );

  const entry = await fetch(
    `${API_PATH}/.netlify/functions/api/blog/${blogId}/entry/${entryId}`,
  );
  const latestLikeCount = entry.like_count;

  dispatch({
    type: ACTION_LIKE_UPDATED,
    data: {
      likeCount: latestLikeCount,
    },
  });
}
