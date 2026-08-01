module.exports = (req, res) => {
  res.statusCode = 308;
  res.setHeader(
    "Location",
    "http://localhost:8080/robots.txt"
  );
  res.end();
};
