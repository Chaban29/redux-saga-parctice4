import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../hooks/useAppSelector';
import { getUsers } from '../../api/getUsers';
import { usersCreator } from '../../redux/actionCreators/usersCreator';

let nextId = 0;

export const Users: FC = () => {
  const dispatch = useDispatch();
  const users = useAppSelector((state) => state.users);

  const handleGetUsers = async () => {
    try {
      const users = await getUsers();
      return dispatch(usersCreator(users));
    } catch (error) {
      console.log(`Users is not defined ${error}`);
    }
  };

  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={nextId++}>{user.name}</li>
        ))}
      </ul>
      <button onClick={handleGetUsers}>Show users</button>
    </div>
  );
};
