import { useSelector } from "react-redux";
import { v4 as uuidv4 } from 'uuid';

const Users = () => {
  const { users, isLoading, error } = useSelector((store) => store.users);

  if (isLoading) {
    return <div><h3>Loading...</h3></div>
  }

  if (error) {
    return <div><h3>Error!</h3></div>
  }

  return (
    <div>
      <ul>
        {users.map((user) => {
          return <li key={uuidv4()}>{`${user}`}</li>;
        })}
      </ul>
    </div>
  )
}