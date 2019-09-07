'use strict'

const cheerio = require('cheerio');
const fetch = require('node-fetch');
const fs = require('fs');

const url = 'https://news.ycombinator.com';

(async () => {
  const res = await fetch(url);
  const text = await res.text();
  const $ = cheerio.load(text);
  let links = [];
  let titles = [];

  $('.title > a').each((i, item) => {
    links[i] = $(item).attr('href');
    titles[i] = $(item).text();
  });

  links.pop();
  titles.pop();

  const results = links.map((item, i) => ({
    link: links[i],
    title: titles[i]
  }));

  console.log(results);

  fs.writeFile('data.js', `const data = ${JSON.stringify(results)}`, (e) => console.error(e));
})()