/**
 GOAL: Scape the number from the bottom apple site
 1. function (url, searchItem) => str
 2. in some respect download the html from the site
 3. based on our params, we'll narrow down the site details
    * regex for searching str
    * maybe filter by tag or content, and either regex or two pointer to check if exists
 4. return found string
 */

const axios = require('axios');
const cheerio = require('cheerio');

// axios('https://www.apple.com/').then(data => console.log(data));

const getData = html => {
  const data = [];
  const $ = cheerio.load(html);
  const footer = $('.ac-gf-footer-shop .nowrap');
  console.log(
    footer
      .text()
      .split(' ')[2]
      .slice(0, -1)
  );
  // footer.each((idx, elem) => {
  //   if (idx === 0) console.log(elem);
  // });
  // console.log($('.ac-gf-footer-shop').val());
  // $('.ac-gf-footer-shop').each((idx, elem) => {
  //   console.log(elem.text());
  // });
};

const scrapy = async (url, searchItem) => {
  // const regex = /1-800-MY-APPLE/gi;
  const { data } = await axios(url);
  // console.log(data.indexOf('1-800'));
  console.log(/1-800-MY-APPLE/gi.test(data)); // true
  console.log(data.match(/1-800-MY-APPLE/gi)); // [ '1-800-MY-APPLE' ]
  // console.log(data);
  // getData(data);
  // console.log(typeof data);
  // console.log(regex.test(data));
};

scrapy('https://www.apple.com/');
