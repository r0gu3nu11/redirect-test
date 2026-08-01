module.exports = (req, res) => {
  res.statusCode = 304;
  res.setHeader(
    "Location",
    "/api/step4"
  );
  res.end();
};
