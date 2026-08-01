module.exports = (req, res) => {
  res.statusCode = 308;
  res.setHeader(
    "Location",
    "https://academy.infomaniak.com/robots.txt"
  );
  res.end();
};
