module.exports = (req, res) => {
  res.statusCode = 303;
  res.setHeader(
    "Location",
    "/api/step3"
  );
  res.end();
};
