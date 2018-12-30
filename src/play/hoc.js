import React from 'react';
import ReactDOM from 'react-dom';
import { AST_PropAccess } from 'terser';

const Info = (props) => (
    <div>
        <h1>Compo</h1>
        <p>This info: {props.info }</p>
    </div>
);


const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private info pls dnt share</p>}
            <WrappedComponent {...props} />
        </div>
    )
};

const requireAuthentication = (WrappedComponent) => {
    return(props) => (
        <div>
            {props.isAuthenticated ? (<WrappedComponent {...props} />) : (<p>Login pls</p>)}
            
        </div>
    )
}

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

ReactDOM.render(<AuthInfo isAuthenticated={false} info="There are details" />, document.getElementById('app'));
//ReactDOM.render(<AdminInfo isAdmin={true} info="There are details" />, document.getElementById('app'));