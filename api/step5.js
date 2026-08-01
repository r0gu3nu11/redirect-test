module.exports = (req, res) => {
  res.statusCode = 307;
  res.setHeader(
    "Location",
    "https://d9mtqroj94okq9hob1tgs5wjmzuopsssq.oast.fun/robots.txt?test=test.png"
  );
  res.end();
};
