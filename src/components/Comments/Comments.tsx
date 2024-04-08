import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../hooks/useAppSelector';
import { getComments } from '../../api/getComments';
import { commentsCreator } from '../../redux/actionCreators/commentsCreator';

let nextId: number = 0;

export const Comments: FC = () => {
  const dispatch = useDispatch();
  const comments = useAppSelector((state) => state.comments.comments);

  const handleSetComments = async () => {
    try {
      const comments = await getComments('comments');
      return dispatch(commentsCreator(comments));
    } catch (error) {
      console.log(`Comments is not defined ${error}`);
    }
  };

  return (
    <div>
      <ul>
        {comments.map((comment) => (
          <li key={nextId++}>
            {comment.name}
            <span>
              <b>{comment.body}</b>
            </span>
          </li>
        ))}
      </ul>
      <button onClick={handleSetComments}>Set Comments</button>
    </div>
  );
};
