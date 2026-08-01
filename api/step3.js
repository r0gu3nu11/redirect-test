module.exports = (req, res) => {
  res.statusCode = 301;
  res.setHeader(
    "Location",
    "http://[::]:008080/config.php?test=testxsdffs.png"
  );
  res.end();
};
