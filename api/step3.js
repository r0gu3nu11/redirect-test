module.exports = (req, res) => {
  res.statusCode = 303;
  res.setHeader(
    "Location",
    "/api/step4"
  );
  res.end();
};
