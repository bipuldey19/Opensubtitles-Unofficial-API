const axios = require("axios");
const cheerio = require("cheerio");

let express = require("express");
let router = express.Router();

router.get("/api/view", async (req, res, next) => {
  try {
    const id = req.query.id;
    let url =
      "https://www.opensubtitles.org/en/search/sublanguageid-all/idmovie-" + id;

    let response = await axios
      .get(url)
      .then((res) => {
        let html = res.data;
        const $ = cheerio.load(html);
        const info = [];
        const data = [];
        const results = [];
        let name = $("h1:first").text();
        let image = $('img[alt="film"]').attr("src");
        let desc = $("fieldset p:first").text();
        let imdb = $("fieldset p:first a").attr("href");
        info.push({
          name: name,
          image: "https:" + image,
          desc: desc,
          imdb: imdb,
        });

        $(".change").each(function () {
          let title = $(this)
            .find("td:nth-child(1)")
            .text()
            .replace(/\s|Watch onlineDownload Subtitles Searcher/g, " ");
          let language = $(this).find("td:nth-child(2) a").attr("title");
          let download = $(this).find("td:nth-child(5) a").attr("href");
          let uploadedAt = $(this).find("td:nth-child(4) time").attr("title");
          data.push({
            title: title,
            language: language,
            download: "https://www.opensubtitles.org" + download,
            uploadedAt: uploadedAt,
          });
        });
        results.push({
          info: info,
          data: data,
        });
        return results;
      })
      .catch((err) => {
        return err;
      });
    if (response[0].data.length === 0) {
      res.status(401).json({ error: "No search results found for " + id });
      return;
    }
    res.json(response);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
