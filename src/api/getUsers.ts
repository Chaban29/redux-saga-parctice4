export const getUsers = async () => {
  try {
    const request = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await request.json();
    return data;
  } catch (error) {
    console.log(`Users error ${error}`);
  }
};
