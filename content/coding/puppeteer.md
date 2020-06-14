---
title: "Web Scraping using Puppeteer"
metaTitle: "Web Scraping using Puppeteer"
metaDescription: "Web Scraping using Puppeteer"
---

## Notes

- Jangan pakai image alpine untuk dockerize puppeteer karena alpine tidak support glibc yg diperlukan oleh chrome
- Set `shm_size` di `docker-compose.yml` agar puppeteer dapat berjalan di [docker](docker.md) tanpa masalah
  - di repo [awesome-puppeteer](https://github.com/transitive-bullshit/awesome-puppeteer) disebutkan sebuah project [docker-puppeteer](https://github.com/alekzonder/docker-puppeteer)
  - di project itu disebutkan utk running [docker](docker.md) itu perlu set `shm_size = 1gb`, shm adalah **shared memory**
  - jadi searching ke [stack overflow](https://stackoverflow.com/questions/30210362/how-to-increase-the-size-of-the-dev-shm-in-docker-container) gimana untuk set shm_size di dockerfile

## Links

- [https://pptr.dev](https://pptr.dev)
- [https://github.com/puppeteer/examples](https://github.com/puppeteer/examples)
- [https://github.com/checkly/puppeteer-examples](https://github.com/checkly/puppeteer-examples)
- [https://github.com/alekzonder/docker-puppeteer](https://github.com/alekzonder/docker-puppeteer)
- [https://github.com/thomasdondorf/puppeteer-cluster](https://github.com/thomasdondorf/puppeteer-cluster)
- [https://github.com/xfumihiro/jest-puppeteer-example](https://github.com/xfumihiro/jest-puppeteer-example)
- [https://github.com/transitive-bullshit/awesome-puppeteer](https://github.com/transitive-bullshit/awesome-puppeteer)
- **SHOULD READ** [https://blog.lovemily.me/a-deep-dive-guide-for-crawling-spa-with-puppeteer-and-troubleshooting/#get-async-ajax-data](https://blog.lovemily.me/a-deep-dive-guide-for-crawling-spa-with-puppeteer-and-troubleshooting/#get-async-ajax-data)
- GREAT TOOLS [https://github.com/checkly/puppeteer-recorder](https://github.com/checkly/puppeteer-recorder)
- [https://www.freecodecamp.org/news/the-ultimate-guide-to-web-scraping-with-node-js-daa2027dcd3](https://www.freecodecamp.org/news/the-ultimate-guide-to-web-scraping-with-node-js-daa2027dcd3)

#javascript #web-scraping #nodejs

