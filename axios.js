// Function to fetch and log user data
const ambilDataUser2 = () => {
  axios.get("https://reqres.in/api/users").then((result) => {
    result.data.data.forEach(({ first_name, last_name }) => {
      console.log(`${first_name}, ${last_name}`);
    });
  });
};

export default ambilDataUser2;
