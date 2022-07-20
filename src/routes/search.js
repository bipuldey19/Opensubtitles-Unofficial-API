const axios = require("axios");
const cheerio = require("cheerio");

let express = require("express");
let router = express.Router();

router.get(["/api/search", "/api/:lan/search"], async (req, res, next) => {
  try {
    const query = req.query.q.replace(/\s/g, "%20");
    let lan = "all";
    let type = "";

    // Type filter
    if (req.query.type) {
      if (req.query.type === "movies") {
        type = "/searchonlymovies-on";
      } else if (req.query.type === "series") {
        type = "/searchonlytvseries-on";
      } else {
        res.status(400).json({
          error: "Type must be 'movies' or 'series'. Or check API docs",
        });
        return;
      }
    }

    // Language filter
    if (req.params.lan) {
      if (req.params.lan.length === 3) {
        lan = req.params.lan;
      } else {
        res.status(400).json({
          error: "Language must be 3 letters. Or check API docs",
        });
        return;
      }
    }

    // Normal Search
    if (!req.query.s && !req.query.e) {
      let url =
        "https://www.opensubtitles.org/en/search2/sublanguageid-" +
        lan +
        type +
        "/moviename-" +
        query;

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
            let id = url.replace(
              "/en/search/sublanguageid-" + lan + type + "/idmovie-",
              ""
            );

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
        res.status(404).json({ error: "No search results found for " + query });
        return;
      }
      res.json(response);
      return;
    }

    // Advanced search
    let url;
    if (req.query.s && req.query.e) {
      let season = req.query.s.replace(/\s/g, "%20");
      let episode = req.query.e.replace(/\s/g, "%20");
      url =
        "https://www.opensubtitles.org/en/search/sublanguageid-" +
        lan +
        type +
        "/moviename-" +
        query +
        "/season-" +
        season +
        "/episode-" +
        episode;
    }

    if (req.query.s && !req.query.e) {
      let season = req.query.s.replace(/\s/g, "%20");
      url =
        "https://www.opensubtitles.org/en/search/sublanguageid-" +
        lan +
        type +
        "/moviename-" +
        query +
        "/season-" +
        season;
    }

    if (!req.query.s && req.query.e) {
      let episode = req.query.e.replace(/\s/g, "%20");
      url =
        "https://www.opensubtitles.org/en/search/sublanguageid-" +
        lan +
        type +
        "/moviename-" +
        query +
        "/episode-" +
        episode;
    }

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
            .replace(/\s|Watch onlineDownload Subtitles Searcher/g, "");
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
      res.status(404).json({ error: "No search results found for " + query });
      return;
    }
    res.json(response);
    return;
  } catch (err) {
    next(err);
  }
});

module.exports = router;
