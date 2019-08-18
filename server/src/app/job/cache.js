const fs = require('fs');
const { resolve } = require('path');
const { promisify } = require('util');

const path = resolve(__dirname, '..', '..', '..', 'tmp');
const saveJson = async ({ list, CheckIn, CheckOut }) => {
  const writeFile = promisify(fs.writeFile);
  try {
    if (list.length > 0) {
      await writeFile(
        `${path}/${CheckIn}-${CheckOut}.json`,
        JSON.stringify(list)
      );
      return true;
    }
  } catch (err) {
    return false;
  }
};

const readJson = async (CheckIn, CheckOut) => {
  const readFile = promisify(fs.readFile);
  try {
    const content = await readFile(
      `${path}/${CheckIn}-${CheckOut}.json`,
      'utf-8'
    );
    if (content) return JSON.parse(content);
    return [];
  } catch (err) {
    return [];
  }
};

module.exports = { saveJson, readJson };
