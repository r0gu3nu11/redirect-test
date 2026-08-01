export default function handler(req, res) {
  res.status(301);
  res.setHeader(
    "Location",
    "https://example.com"
  );
  res.end();
}
