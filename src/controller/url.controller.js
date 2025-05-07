const { nanoid } = require("nanoid")
const Url = require("./../model/url.model")

exports.shortUrl = async (req, res) => {
    const { originalUrl } = req.body;
    const shortId = nanoid(8)

    const newUrl = new Url({ shorId, originalUrl });
    await newUrl.save();

    res.json({ shortUrl: `${BASE_URL}/${shortId}` });
}

exports.redirect = async (req, res) => {

    const { shortId } = req.params;


    const url = await Url.findOne({ shortId: shortId });

    console.log("Intentando redirigir:", shortId);
    console.log("url: ", url);

    if (url) return res.redirect(url.originalUrl);
    res.status(404).send('URL not found');
}