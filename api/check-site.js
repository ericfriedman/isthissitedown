const fetch = require('node-fetch');

module.exports = async (req, res) => {
    const { url } = req.body;
    try {
        const response = await fetch(url, { method: 'HEAD' });
        if (response.ok) {
            res.json({ status: 'up', isUp: true });
        } else {
            res.json({ status: 'down', isUp: false });
        }
    } catch (error) {
        res.json({ status: 'down', isUp: false });
    }
};
