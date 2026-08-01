module.exports = (req, res) => {
  res.statusCode = 308;
  res.setHeader(
    "Location",
    "http://[::]:8080"
  );
  res.end();
};
