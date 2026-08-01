module.exports = (req, res) => {
  res.statusCode = 308;
  res.setHeader(
    "Location",
    "/api/step7"
  );
  res.end();
};
