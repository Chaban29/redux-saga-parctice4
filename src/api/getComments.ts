export const getComments = async (searchQuery: string) => {
  console.log(searchQuery);
  try {
    const request = await fetch(
      `https://jsonplaceholder.typicode.com/${searchQuery}?_limit=20`
    );
    const commentsData = await request.json();
    return commentsData;
  } catch (error) {
    console.log(`Comments error ${error}`);
  }
};
