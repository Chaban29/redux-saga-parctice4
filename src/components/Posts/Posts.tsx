import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../hooks/useAppSelector';
import { setPopularPostsCreator } from '../../redux/actionCreators/postsCreator';
import { getPopularPosts } from '../../api/getPosts';

let nextId: number = 0;

export const Posts: FC = () => {
  const dispatch = useDispatch();
  const posts = useAppSelector((state) => state.posts);

  const handleSetPopularPosts = async () => {
    try {
      const posts = await getPopularPosts();
      return dispatch(setPopularPostsCreator(posts));
    } catch (error) {
      console.log(`Posts is not defined ${error}`);
    }
  };

  return (
    <div>
      <ul>
        {posts.map((post) => (
          <li key={nextId++}>
            {post.title} <br /> <b>{post.body}</b>
          </li>
        ))}
      </ul>
      <button onClick={handleSetPopularPosts}>Show Posts</button>
    </div>
  );
};
