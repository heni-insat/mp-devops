exports.reverse = (req, res) => {
  const { text } = req.query;
  if (!text) return res.status(400).send("No text provided");
  if (typeof text !== "string") return res.status(400).send("Invalid text");
  res.set("Content-Type", "text/plain");
  res.send(text.split("").reverse().join(""));
};

exports.uppercase = (req, res) => {
  const { text } = req.query;
  if (!text) return res.status(400).send("No text provided");
  if (typeof text !== "string") return res.status(400).send("Invalid text");
  res.set("Content-Type", "text/plain");
  res.send(text.toUpperCase());
};

exports.countVowels = (req, res) => {
  const { text } = req.query;
  if (!text) return res.status(400).send("No text provided");
  if (typeof text !== "string") return res.status(400).send("Invalid text");
  const count = text.match(/[aeiou]/gi)?.length || 0;
  res.set("Content-Type", "text/plain");
  res.send(count.toString());
};
