exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Go Jyoti ! Your function executed successfully!",
    }),
  };
};
