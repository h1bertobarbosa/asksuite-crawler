const getListOfBooking = require('../job/crawler');
const { saveJson, readJson } = require('../job/cache');

class CrawlerController {
  async store(req, res) {
    const { CheckIn, CheckOut } = req.params;
    const jsonContent = await readJson(CheckIn, CheckOut);
    if (jsonContent.length > 0) return res.json(jsonContent);

    const list = await getListOfBooking({ CheckIn, CheckOut });
    saveJson({ list, CheckIn, CheckOut });
    return res.json(list);
  }
}

module.exports = new CrawlerController();
