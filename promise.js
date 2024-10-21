function helloWorld() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello World!");
    }, 2000);
  });
}
async function messages() {
  const msg = await helloWorld();
  console.log(msg);
}

export default messages;
