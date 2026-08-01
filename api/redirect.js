module.exports = (req, res) => {

  if (req.url === "/api/redirect") {

    res.statusCode = 301;
    res.setHeader(
      "Location",
      "/api/step1"
    );
    res.end();

  } else if (req.url === "/api/step1") {

    res.statusCode = 301;
    res.setHeader(
      "Location",
      "https://example.com"
    );
    res.end();

  } else {

    res.statusCode = 404;
    res.end("Not Found");

  }

};
