// import { useEffect, useState } from "react"

// const useUsers = user => {
//     const [users, setUsers] = useState(false);
//     const [usersLoading, setUsersLoading] = useState(true);
//     useEffect( () =>{
//         const email = user?.email;
//         if(email){
//             fetch(`http://localhost:5000/user/${email}`, {
//                 method:'GET',
//                 headers: {
//                     'content-type': 'application/json',
//                     authorization: `Bearer ${localStorage.getItem('accessToken')}`
//                 }
//             })
//             .then(res=>res.json())
//             .then(data => {
//                 setUsers(data.admin);
//                 setUsersLoading(false);
//             })
//         }
//     }, [user])

//     return [users, usersLoading]
// }

// export default useUsers;