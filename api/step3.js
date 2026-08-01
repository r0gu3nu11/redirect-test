module.exports = (req, res) => {
  res.statusCode = 302;
  res.setHeader(
    "Location",
    "/api/step4"
  );
  res.end();
};
