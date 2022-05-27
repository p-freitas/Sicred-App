import { useNavigate } from 'react-router-dom';
import './styles.css';

const BaseLayout = ({ children }) => {
    const navigate = useNavigate();
    const logout = () => {
        localStorage.removeItem('authenticated');
        navigate('/');
        setTimeout(() => {
            window.location.reload();
        }, 200);
    }
    return (
        <div className="base-layout">
            <div className='menu'>
                <ul>
                    <li><button onClick={() => navigate('/')}>Home</button></li>
                    <li><button onClick={logout}>Deslogar</button></li>
                </ul>
            </div>

            {children}
        </div>
    );
}

const AnonymousLayout = ({ children }) => {
    return (
        <div className="base-layout anonymous-layout">
            {children}
        </div>
    );
}

const layout = {
    BaseLayout,
    AnonymousLayout,
}

export default layout;
