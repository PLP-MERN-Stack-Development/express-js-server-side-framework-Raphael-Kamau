module.exports = (req, res, next) => {
    const apiKey = req.header['x-api-key'];
    if (apiKey === process.env.API_KEY) {
        next();
    } else {
        res.status(401).json({ error: 'Unauthorized' });
    }
};
