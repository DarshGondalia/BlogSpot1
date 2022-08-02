import { Route, Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from './context/AuthProvider.js';

// function PrivateRoute({ children} : { children: JSX.Element }) {
//     const {auth} = useContext(AuthContext);
//     return (
//         <Route {...rest} render={props => {
//             if (!auth) {
//                 // not logged in so redirect to login page with the return url
//                 return <Navigate to={{ pathname: '/login', state: { from: props.location } }} />
//             }

//             // authorized so return component
//             return <Component {...props} />
//         }} />
//     );
// }
const PrivateRoute = ({children}) => {
    const {auth} = useContext(AuthContext);

    return !auth ? <Navigate to="/login" /> : children;
}


export { PrivateRoute };