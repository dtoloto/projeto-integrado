module.exports = {
  async store(req, res) {
    const { filename } = req.file;
    return res.json({ file: filename });
  }
};
