
exports.reverse = (req, res) => {
    const { text } = req.query;
    if (!text) return res.status(400).send('No text provided');
    res.send(text.split('').reverse().join(''));
};

exports.uppercase = (req, res) => {
    const { text } = req.query;
    if (!text) return res.status(400).send('No text provided');
    res.send(text.toUpperCase());
};

exports.countVowels = (req, res) => {
    const { text } = req.query;
    if (!text) return res.status(400).send('No text provided');
    const count = text.match(/[aeiou]/gi)?.length || 0;
    res.send(count.toString());
};
