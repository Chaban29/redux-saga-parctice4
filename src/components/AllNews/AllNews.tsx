import { FC, Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../hooks/useAppSelector';
import { getPopularPosts } from '../../api/getPosts';
import { getComments } from '../../api/getComments';
import { allNewsCreator } from '../../redux/actionCreators/allNewsCreator';

let postsNextId = 0;
let commentsNextId = 0;

export const AllNews: FC = () => {
  const dispatch = useDispatch();
  const allNewsPosts = useAppSelector((state) => state.allNews.posts);
  const allNewsComments = useAppSelector((state) => state.allNews.comments);

  const handleSetAllNews = async () => {
    try {
      const posts = await getPopularPosts();
      const comments = await getComments('comments');
      dispatch(allNewsCreator({ posts, comments }));
    } catch (error) {
      console.error('Error fetching posts and comments:', error);
    }
  };

  return (
    <div>
      <ul>
        {allNewsPosts.map((post) => (
          <Fragment key={postsNextId++}>
            <li>{post.title}</li>
          </Fragment>
        ))}
      </ul>
      <ul>
        {allNewsComments.map((comment) => (
          <Fragment key={commentsNextId++}>
            <li>{comment.name}</li>
          </Fragment>
        ))}
      </ul>
      <button onClick={handleSetAllNews}>Show All news!</button>
    </div>
  );
};
