import { useGetUsersQuery } from "../features/api/apiSlice";

export const UserList =()=> {
     const { data: users, isLoading, error} = useGetUsersQuery();
     if(isLoading) return <div>Loading....</div>;
     if(error) return <div>Error:{error.message}</div>;
  return (
    <ul>
      <br />
      <br/>
     {users.map(user => (
          <li key={user.id}>{user.name}-{user.email}</li>
     ))}
    </ul>
  )
}