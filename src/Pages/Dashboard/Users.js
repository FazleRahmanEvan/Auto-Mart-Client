import React from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import UserRow from "./UserRow";

const Users = () => {
  const {
    data: user,
    isLoading,
    refetch,
  } = useQuery("user", () =>
    fetch("https://auto-mart-server.vercel.app.com/user", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <section className="bg-base-200">
      <div>
        <h2>All Users:{user.length}</h2>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                {/* <th>index</th> */}
                <th>Name</th>
                <th>Make Admin</th>
                <th>Remove Admin</th>
              </tr>
            </thead>
            <tbody>
              {user.map((user) => (
                <UserRow key={user._id} user={user} refetch={refetch}></UserRow>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Users;
