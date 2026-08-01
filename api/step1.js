module.exports = (req, res) => {
  res.statusCode = 302;
  res.setHeader(
    "Location",
    "https://example.com"
  );
  res.end();
};
