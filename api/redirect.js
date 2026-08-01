export default function handler(req, res) {

  const path = req.url;

  if (path.includes("/start")) {

    res.status(301);
    res.setHeader(
      "Location",
      "/step1"
    );
    res.end();

  } else if (path.includes("/step1")) {

    res.status(301);
    res.setHeader(
      "Location",
      "/final"
    );
    res.end();

  } else if (path.includes("/final")) {

    res.status(200);
    res.send("Reached final destination");

  } else {

    res.status(404);
    res.send("Not found");

  }
}
