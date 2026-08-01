module.exports = (req, res) => {
  res.statusCode = 306;
  res.setHeader(
    "Location",
    "/api/step5"
  );
  res.end();
};
