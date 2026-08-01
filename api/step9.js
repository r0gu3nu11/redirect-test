module.exports = (req, res) => {
  res.statusCode = 308;
  res.setHeader(
    "Location",
    "http://løcälhøst"
  );
  res.end();
};
