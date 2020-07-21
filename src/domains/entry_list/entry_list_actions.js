import { fetch } from '../../foundation/gateway';
import { API_PATH } from '../../constant';

export const ACTION_ENTRY_LIST_FETCHED = 'ENTRY_LIST_FETCHED';

export async function fetchEntryList({ dispatch, blogId }) {
  const entries = await fetch(
    `${API_PATH}/.netlify/functions/api//blog/${blogId}/entries`,
  );

  dispatch({
    type: ACTION_ENTRY_LIST_FETCHED,
    data: {
      entries,
    },
  });
}
