const axios = require("axios");
const cheerio = require("cheerio");

let express = require("express");
let router = express.Router();

router.get(
  [
    "/api/search-:query/s-:season/e-:episode",
    "/api/search-:query/s-:season",
    "/api/search-:query/e-:episode",
    "/api/lan-:lan/search-:query/s-:season/e-:episode",
    "/api/lan-:lan/search-:query/s-:season",
    "/api/lan-:lan/search-:query/e-:episode",
  ],
  async (req, res, next) => {
    try {
      let query = req.params.query.replace(/\s/g, "%20");
      let url;

      if (req.params.season && req.params.episode) {
        let season = req.params.season.replace(/\s/g, "%20");
        let episode = req.params.episode.replace(/\s/g, "%20");
        url =
          "https://www.opensubtitles.org/en/search/sublanguageid-all/moviename-" +
          query +
          "/season-" +
          season +
          "/episode-" +
          episode;
      }
      if (req.params.season && !req.params.episode) {
        let season = req.params.season.replace(/\s/g, "%20");
        url =
          "https://www.opensubtitles.org/en/search/sublanguageid-all/moviename-" +
          query +
          "/season-" +
          season;
      }
      if (!req.params.season && req.params.episode) {
        let episode = req.params.episode.replace(/\s/g, "%20");
        url =
          "https://www.opensubtitles.org/en/search/sublanguageid-all/moviename-" +
          query +
          "/episode-" +
          episode;
      }
      if (req.params.lan && req.params.season && req.params.episode) {
        let lan = req.params.lan;
        if (lan.length != 3) {
          res.json({
            error: "Language(lan) must be 3 characters long. For more info, check API docs",
          });
          return;
        }
        let season = req.params.season.replace(/\s/g, "%20");
        let episode = req.params.episode.replace(/\s/g, "%20");
        url =
          "https://www.opensubtitles.org/en/search/sublanguageid-"+ lan +"/moviename-" +
          query +
          "/season-" +
          season +
          "/episode-" +
          episode;
      }
      if (req.params.lan && req.params.season && !req.params.episode) {
        let lan = req.params.lan;
        if (lan.length != 3) {
          res.json({
            error: "Language(lan) must be 3 characters long. For more info, check API docs",
          });
          return;
        }
        let season = req.params.season.replace(/\s/g, "%20");
        url =
          "https://www.opensubtitles.org/en/search/sublanguageid-"+ lan +"/moviename-" +
          query +
          "/season-" +
          season;
      }
      if (req.params.lan && !req.params.season && req.params.episode) {
        let lan = req.params.lan;
        if (lan.length != 3) {
          res.json({
            error: "Language(lan) must be 3 characters long. For more info, check API docs",
          });
          return;
        }
        let episode = req.params.episode.replace(/\s/g, "%20");
        url =
          "https://www.opensubtitles.org/en/search/sublanguageid-"+ lan +"/moviename-" +
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
        res.json({ error: "No search results found for " + query });
        return;
      }
      res.json(response);
    } catch (err) {
      next(err);
    }
  }
);

// Type search & series search by season or episode

router.get(
  [
    "/api/:type/search-:query",
    "/api/:type/search-:query/s-:season",
    "/api/:type/search-:query/e-:episode",
    "/api/:type/search-:query/s-:season/e-:episode",
  ],
  async (req, res, next) => {
    try {
      const query = req.params.query.replace(/\s/g, "%20");
      let url, remove;

      if (req.params.type === "movies") {
        url =
          "https://www.opensubtitles.org/en/search2/sublanguageid-all/searchonlymovies-on/moviename-" +
          query;
        remove = "/en/search/sublanguageid-all/searchonlymovies-on/idmovie-";
      }
      if (req.params.type === "series") {
        url =
          "https://www.opensubtitles.org/en/search2/sublanguageid-all/searchonlytvseries-on/moviename-" +
          query;
        remove = "/en/search/sublanguageid-all/searchonlytvseries-on/idmovie-";
      }
      if (
        req.params.type === "series" &&
        (req.params.season || req.params.episode)
      ) {
        if (req.params.season && req.params.episode) {
          const season = req.params.season.replace(/\s/g, "%20");
          const episode = req.params.episode.replace(/\s/g, "%20");
          url =
            "https://www.opensubtitles.org/en/search2/sublanguageid-all/searchonlytvseries-on/moviename-" +
            query +
            "/season-" +
            season +
            "/episode-" +
            episode;
        }
        if (req.params.season && !req.params.episode) {
          const season = req.params.season.replace(/\s/g, "%20");
          url =
            "https://www.opensubtitles.org/en/search2/sublanguageid-all/searchonlytvseries-on/moviename-" +
            query +
            "/season-" +
            season;
        }
        if (req.params.episode && !req.params.season) {
          const episode = req.params.episode.replace(/\s/g, "%20");
          url =
            "https://www.opensubtitles.org/en/search2/sublanguageid-all/searchonlytvseries-on/moviename-" +
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
                .replace(/\s|Watch onlineDownload Subtitles Searcher/g, " ");
              let language = $(this).find("td:nth-child(2) a").attr("title");
              let download = $(this).find("td:nth-child(5) a").attr("href");
              let uploadedAt = $(this)
                .find("td:nth-child(4) time")
                .attr("title");
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
          res.json({ error: "No search results found for " + query });
          return;
        }
        res.json(response);
        return;
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
              .replace(/\s|Watch onlineDownload Subtitles Player/g, "");
            let image = $(this).find("td:nth-child(1) img").attr("src");
            let url = $(this).find("a").attr("href");
            let rating = $(this).find("td:nth-child(3)").text();
            let downloads = $(this).find("td:nth-child(4)").text();
            let lastUpdated = $(this).find("td:nth-child(5)").text();
            let id = url.replace(remove, "");

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
