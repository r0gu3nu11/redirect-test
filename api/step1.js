module.exports = (req, res) => {
  res.statusCode = 302;
  res.setHeader(
    "Location",
    "/api/step2"
  );
  res.end();
};
