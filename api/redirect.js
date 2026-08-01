module.exports = (req, res) => {
  res.statusCode = 301;
  res.setHeader("Location", "https://example.com");
  res.end();
};
