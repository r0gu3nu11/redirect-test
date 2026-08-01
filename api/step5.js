module.exports = (req, res) => {
  res.statusCode = 307;
  res.setHeader(
    "Location",
    "https://academy.infomaniak.com/robots.txt"
  );
  res.end();
};
