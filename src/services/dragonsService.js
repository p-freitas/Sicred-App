import api from '../config/http/api';
import { getDragonAction } from '../store/dragons/dragonsAction';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

export const postDragon = (
  data
) => {
  return async () => {
    console.log(data);
    api
      .post('/dragon', {
        name: data.name,
        type: data.type,
        createdAt: data.createdAt,
      })
      .then(async ({ data: payload }) => {
        console.log(payload);
        toast.success('Dragão adicionado com sucesso!', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
        // dispatch(endLoadingProfiles());
      })

      .catch(() => {
        toast.error('Erro ao adicionar o novo dragão', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
      });
  };
};
