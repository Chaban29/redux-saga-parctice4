export const getPopularPosts = async () => {
  try {
    const postsRequest = await fetch(
      'https://jsonplaceholder.typicode.com/posts?_limit=30'
    );
    return await postsRequest.json();
  } catch (error) {
    console.log(`Unknown posts ${error}`);
  }
};
