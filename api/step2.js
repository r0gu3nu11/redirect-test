module.exports = (req, res) => {
  res.statusCode = 302;
  res.setHeader(
    "Location",
    "http://localhost:8080"
  );
  res.end();
};
