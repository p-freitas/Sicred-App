import axios from 'axios';
import { getLoginAction } from '../store/login/loginAction';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const searchLogin = (
    values
) => {
    return async (dispatch) => {
        axios
            .get('https://628d61e3a339dfef8799fba0.mockapi.io/login', {
                params: {
                    user: values.user,
                    password: values.password,
                },
            })
            .then(async ({ data: payload }) => {
                payload.length === 0 ? (toast.error('Erro ao realizar o login', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                })
                ) : (toast.success('Login realizado com sucesso!', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                }))
                dispatch(getLoginAction(payload));
            })

            .catch(() => {
                toast.error('Erro ao realizar o login', {
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

export const postLogin = async (
    values,
    navigate,
) => {
    return async () => {
        axios
            .post('https://628d61e3a339dfef8799fba0.mockapi.io/login', {
                user: values.user,
                password: values.password,
            })
            .then(() => {
                localStorage.setItem('authenticated', true);
                navigate('/');
                toast.success('Usuário criado com sucesso!', {
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
                toast.error('Erro ao criar um novo usuário', {
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
