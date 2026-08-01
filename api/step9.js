module.exports = (req, res) => {
  res.statusCode = 308;
  res.setHeader(
    "Location",
    "/api/step10"
  );
  res.end();
};
