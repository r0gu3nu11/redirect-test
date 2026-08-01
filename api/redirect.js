export default function handler(req, res) {

  const path = req.url;

  if (path.includes("/step1")) {

    res.status(301);
    res.setHeader(
      "Location",
      "/step1"
    );
    res.end();

  } else if (path.includes("/step2")) {

    res.status(302);
    res.setHeader(
      "Location",
      "/step3"
    );
    res.end();

  } else if (path.includes("/step3")) {

     res.status(303);
    res.setHeader(
      "Location",
      "/step4"
    );
    res.end();

  }  else if (path.includes("/step4")) {

    res.status(304);
    res.setHeader(
      "Location",
      "/step5"
    );
    res.end();

  }  else if (path.includes("/step5")) {

    res.status(304);
    res.setHeader(
      "Location",
      "/step6"
    );
    res.end();

  } else if (path.includes("/step6")) {

    res.status(304);
    res.setHeader(
      "Location",
      "http://localhost:8080/"
    );
    res.end();

  }
  else {

    res.status(404);
    res.send("Not found");

  }
}
