import api from '../config/http/api';
import { getDragonAction } from '../store/dragons/dragonsAction';

export const searchDragons = (
  id = '',
) => {
  return async (dispatch) => {
    api
      .get('/dragon', {
        params: {
          Id: id,
        },
      })
      .then(async ({ data: payload }) => {
          console.log(payload);
        dispatch(getDragonAction(payload));
        // dispatch(endLoadingProfiles());
      })

      .catch(() => {
        // dispatch(endLoadingProfiles());
      });
  };
};
