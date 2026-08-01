module.exports = (req, res) => {
  res.statusCode = 308;
  res.setHeader(
    "Location",
    "/api/step11"
  );
  res.end();
};
