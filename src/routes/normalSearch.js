const axios = require("axios");
const cheerio = require("cheerio");

let express = require("express");
let router = express.Router();

router.get(
  ["/api/search-:query", "/api/lan-:lan/search-:query"],
  async (req, res, next) => {
    try {
      const query = req.params.query.replace(/\s/g, "%20");
      let lan = "all";
      let url =
        "https://www.opensubtitles.org/en/search2/sublanguageid-all/moviename-" +
        query;
      if (req.params.lan) {
        lan = req.params.lan;
        if (lan.length != 3) {
          res.json({
            error: "Language(lan) must be 3 characters long. Or check API docs",
          });
          return
        } else {
          url =
            "https://www.opensubtitles.org/en/search2/sublanguageid-" +
            lan +
            "/moviename-" +
            query;
        }
      }
      const response = await axios
        .get(url)
        .then((res) => {
          let html = res.data;
          const $ = cheerio.load(html);
          const results = [];
          $(".change").each(function () {
            let title = $(this)
              .find("td:nth-child(2)")
              .text()
              .replace(/\s|Watch onlineDownload Subtitles Player/g, " ");
            let image = $(this).find("td:nth-child(1) img").attr("src");
            let url = $(this).find("a").attr("href");
            let rating = $(this).find("td:nth-child(3)").text();
            let downloads = $(this).find("td:nth-child(4)").text();
            let lastUpdated = $(this).find("td:nth-child(5)").text();
            let id = url.replace("/en/search/sublanguageid-"+ lan +"/idmovie-", "");

            results.push({
              id: id,
              title: title,
              image: "https:" + image,
              url: "https://www.opensubtitles.org" + url,
              rating: rating,
              downloads: downloads,
              lastUpdated: lastUpdated,
            });
          });
          return results;
        })
        .catch((err) => {
          return err;
        });
      if (response.length === 0) {
        res.json({ error: "No search results found for " + query });
        return;
      }
      res.json(response);
    } catch (err) {
      next(err);
    }
  }
);

module.exports = router;
