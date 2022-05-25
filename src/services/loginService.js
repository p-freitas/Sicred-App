import axios from 'axios';
import { getLoginAction } from '../store/login/loginAction';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const searchLogin = (
    values
) => {
    return async (dispatch) => {
        console.log(values);
        axios
            .get('https://628d61e3a339dfef8799fba0.mockapi.io/login', {
                params: {
                    user: values.user,
                    password: values.password,
                },
            })
            .then(async ({ data: payload }) => {
                console.log(payload);


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
                // dispatch(endLoadingProfiles());
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
