import api from '../config/http/api';
import { getDragonAction } from '../store/dragons/dragonsAction';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const postDragon = async (
  data,
  resetForm,
) => {
  return async () => {
    api
      .post('/dragon', {
        name: data.name,
        type: data.type,
        createdAt: data.createdAt,
      })
      .then(() => {
        toast.success('Dragão adicionado com sucesso!', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
        resetForm();
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

export const getDragon = (
  id = '',
) => {
  return async (dispatch) => {
    api
      .get(`/dragon/${id}`, {})
      .then(async ({ data: payload }) => {
        dispatch(getDragonAction(payload));
      })
      .catch(() => { });
  };
};

export const putDragon = (
  data,
) => {
  return async () => {
    api
      .put(`/dragon/${data.id}`, {
        name: data.values.name,
        type: data.values.type,
      })
      .then(async () => {
        toast.success('Dragão alterado com sucesso!', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
      })
      .catch(() => {
        toast.error('Erro ao alterar o dragão', {
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

export const deleteDragon = async (
  id = '',
  navigate,
) => {
  return async () => {
    api
      .delete(`/dragon/${id}`, {})
      .then(async () => {
        navigate('/');
        toast.success('Dragão removido com sucesso!', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
      })
      .catch(() => {
        toast.error('Erro ao remover o dragão', {
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
