module.exports = (req, res) => {
  res.statusCode = 301;
  res.setHeader(
    "Location",
    "/api/step4"
  );
  res.end();
};
