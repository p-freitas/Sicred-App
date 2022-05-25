import './index.css';

const BaseLayout = ({ children }) => {
    return (
    <div className="base-layout">
        <div>Hello world</div>
        <div>{children}</div>
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

export default { BaseLayout, AnonymousLayout };
