import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { getUsers } from '../redux/users/usersSlice';
import { useEffect } from 'react';

const Users = () => {
  const { users, isLoading, error } = useSelector((store) => store.users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, [getUsers]);

  if (isLoading) {
    return (
      <div>
        <h3>Loading...</h3>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <h3>{error}</h3>
      </div>
    );
  }

  return (
    <div>
      <ul>
        {users.map((user) => {
          return (
            <li key={uuidv4()}>{`${user.name.first} ${user.name.last}`}</li>
          );
        })}
      </ul>
    </div>
  );
};

export default Users;
