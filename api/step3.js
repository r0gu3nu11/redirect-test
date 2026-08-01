module.exports = (req, res) => {
  res.statusCode = 305;
  res.setHeader(
    "Location",
    "/api/step4"
  );
  res.end();
};
