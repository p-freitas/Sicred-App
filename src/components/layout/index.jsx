import './styles.css';

const BaseLayout = ({ children }) => {
    return (
    <div className="base-layout">
        <div>Hello world</div>
        {children}
    </div>
    );
}

const AnonymousLayout = ({ children }) => {
    return (
    <div className="base-layout anonymous-layout">
        <div>Hello world authenticated</div>
        {children}
    </div>
    );
}

const layout = {
    BaseLayout, 
    AnonymousLayout,
}

export default layout;
