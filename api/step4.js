module.exports = (req, res) => {
  res.statusCode = 307;
  res.setHeader(
    "Location",
    "/api/step5"
  );
  res.end();
};
