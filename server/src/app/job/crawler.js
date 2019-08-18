const cheerio = require('cheerio');
const puppeteer = require('puppeteer');

const BASE_URL =
  'https://myreservations.omnibees.com/default.aspx?q=5462&version=MyReservation&sid=91e732ed-e78f-4aa0-a738-8080a3d7517a#/';

const setListOfBooking = async body => {
  const $ = await cheerio.load(body);
  const list = [];

  $('div.roomExcerpt').each((i, el) => {
    const price = $(el)
      .find('h6.bestPriceTextColor')
      .text();
    const title = $(el)
      .find('.excerpt h5 a')
      .text();
    const description = $(el)
      .find('.excerpt p')
      .text();
    const img = $(el)
      .find('.slide a img')
      .attr('src');

    list.push({
      title,
      description,
      price,
      img,
    });
  });

  return list;
};

const getSiteContent = async (CheckIn, CheckOut) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(
    `${BASE_URL}/&diff=false&CheckIn=${CheckIn}&CheckOut=${CheckOut}&Code=&group_code=&loyality_card=&NRooms=1&ad=1&ch=0&ag=-`,
    { waitUntil: 'networkidle0' }
  );

  const body = await page.content();
  await browser.close();
  return body;
};

const getListOfBooking = async ({ CheckIn, CheckOut }) => {
  const body = await getSiteContent(CheckIn, CheckOut);
  return setListOfBooking(body);
};

module.exports = getListOfBooking;
