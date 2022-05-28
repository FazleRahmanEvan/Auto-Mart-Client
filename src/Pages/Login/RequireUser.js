// import React from 'react';
// import { useAuthState } from 'react-firebase-hooks/auth';
// import { Navigate, useLocation } from 'react-router-dom';
// import auth from '../../firebase.init';
// import Loading from '../Shared/Loading';
// import { signOut } from 'firebase/auth';
// import useUsers from '../../hooks/useUsers';

// const RequireUser = ({children}) => {
//     const [admin, loading] = useAuthState(auth);
//     const [users,usersLoading] = useUsers(admin);
//     const location = useLocation();

//     if(loading || usersLoading){
//         return <Loading></Loading>
//     }

//     if(!admin || !users){
//         signOut(auth);
//         return <Navigate to="/login" state={{ from: location }} replace></Navigate>
//     }
//     return children;
// };

// export default RequireUser;