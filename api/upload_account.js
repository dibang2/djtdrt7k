const Storage = require('../lib/storage');

const storage = new Storage();

module.exports = async (req, res) => {
  try {
    const body = req.method === 'POST' ? req.body : {};
    // If account not provided, auto-generate a placeholder account id
    let account = body.account;
    if (!account) {
      account = 'account_' + Math.random().toString(36).slice(2, 10);
    }
    const key = storage.saveAccount(account);
    res.status(200).json({ key, account });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'internal' });
  }
};


