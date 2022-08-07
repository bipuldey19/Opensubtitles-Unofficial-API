
<h1 align='center'>Opensubtitles Unofficial API 🚀</h1>

<p align="center">
<span style='font-size: 19px'>
An Unofficial API for <a href="https://www.opensubtitles.org/"> Opensubtitles</a>. There is no limitation as the official API. Easy to search and download any subtitles.
</span>
</p>

---

## 🛠️ Installation

```sh

# Clone the repo
$ git clone https://github.com/bipuldey19/Opensubtitles-Unofficial-API

# Install Depedencies
$ npm install

# Start
$ npm start

# Done 

```

---

## 📜 Supported Features

|    Feature     |    Query    |         Orginal            | Direct Download |
| :------------: | :---------: | :------------------------: | :-------: |
|  Normal Search |   `q=`   |     https://www.opensubtitles.org/en/search2/sublanguageid-all/moviename-halo      |    ❌     |
| Search based on language |    `eng`    |  https://www.opensubtitles.org/en/search2/sublanguageid-eng/moviename-halo  |    ❌     |
|    Search by Type (Movies / Series)     |  `type=`  |  https://www.opensubtitles.org/en/search2/sublanguageid-eng/searchonlytvseries-on/moviename-halo   |    ❌     |
| View result by Id |    `id=`    |  https://www.opensubtitles.org/en/search/sublanguageid-all/idmovie-138044  |    ✅     |
|   Search by Season    | `s=` | https://www.opensubtitles.org/en/search/sublanguageid-eng/moviename-halo/season-1 |    ✅     |
|     Search by Episode     |  `e=`   |      https://www.opensubtitles.org/en/search/sublanguageid-eng/moviename-halo/episode-1       |    ✅     |

---

## 🚀 Query Parameters

### Search

> `api/search?q=QUERY`

| Parameter | Required |  Type   | Default |                     Example                      |
| :-------: | :------: | :-----: | :-----: | :----------------------------------------------: |
|   Query (q)   |    ✅    | string  |  None   |    `api/search?q=halo`     |

<details>
<summary style='font-size: 15px'><span style='font-size: 20px;font-weight:bold;'>🔍 Example Output</span></summary>
<p>

```json
[
  {
    "id": "138044",
    "title": "Halo 4: Forward Unto Dawn (2012) ",
    "image": "https://static6.opensubtitles.org/gfx/thumbs/8/0/3/2/2262308.jpg",
    "url": "https://www.opensubtitles.org/en/search/sublanguageid-all/idmovie-138044",
    "rating": "6.7",
    "downloads": "169",
    "lastUpdated": "01/04/2022"
  },
  {
    "id": "185993",
    "title": "Halo: Nightfall (2014) ",
    "image": "https://static4.opensubtitles.org/gfx/thumbs/4/1/1/4/3804114.jpg",
    "url": "https://www.opensubtitles.org/en/search/sublanguageid-all/idmovie-185993",
    "rating": "5.5",
    "downloads": "170",
    "lastUpdated": "21/04/2022"
  },
  {
    "id": "399574",
    "title": "Halo: The Fall of Reach (2015) ",
    "image": "https://static4.opensubtitles.org/gfx/thumbs/2/2/3/6/4856322.jpg",
    "url": "https://www.opensubtitles.org/en/search/sublanguageid-all/idmovie-399574",
    "rating": "5.7",
    "downloads": "34",
    "lastUpdated": "14/03/2020"
  },
  {
    "id": "1126396",
    "title": "\"Halo\" Allegiance (2022) [S01E08]  ",
    "image": "https://static3.opensubtitles.org/gfx/thumbs/8/3/9/1/8631938.jpg",
    "url": "https://www.opensubtitles.org/en/search/sublanguageid-all/idmovie-1126396",
    "rating": "7.3",
    "downloads": "33",
    "lastUpdated": "11/06/2022"
  },
  {
    "id": "1126393",
    "title": "\"Halo\" Reckoning (2022) [S01E05]  ",
    "image": "https://static8.opensubtitles.org/gfx/thumbs/6/1/9/1/8631916.jpg",
    "url": "https://www.opensubtitles.org/en/search/sublanguageid-all/idmovie-1126393",
    "rating": "8.4",
    "downloads": "42",
    "lastUpdated": "05/06/2022"
  },
  {
    "id": "1126392",
    "title": "\"Halo\" Homecoming (2022) [S01E04]  ",
    "image": "https://static6.opensubtitles.org/gfx/thumbs/4/1/9/1/8631914.jpg",
    "url": "https://www.opensubtitles.org/en/search/sublanguageid-all/idmovie-1126392",
    "rating": "6.7",
    "downloads": "40",
    "lastUpdated": "05/06/2022"
  },
  {
    "id": "52978",
    "title": "Halo Legends (2010) ",
    "image": "https://static8.opensubtitles.org/gfx/thumbs/0/6/6/0/1480660.jpg",
    "url": "https://www.opensubtitles.org/en/search/sublanguageid-all/idmovie-52978",
    "rating": "6.5",
    "downloads": "137",
    "lastUpdated": "05/01/2021"
  },
  {
    "id": "297455",
    "title": "Phantom Halo (2014) ",
    "image": "https://static4.opensubtitles.org/gfx/thumbs/4/3/7/0/3130734.jpg",
    "url": "https://www.opensubtitles.org/en/search/sublanguageid-all/idmovie-297455",
    "rating": "5.2",
    "downloads": "19",
    "lastUpdated": "03/12/2017"
  },
  {
    "id": "50298",
    "title": "Halo Wars (2009) ",
    "image": "https://static6.opensubtitles.org/gfx/thumbs/4/0/4/9/0879404.jpg",
    "url": "https://www.opensubtitles.org/en/search/sublanguageid-all/idmovie-50298",
    "rating": "6.9",
    "downloads": "35",
    "lastUpdated": "06/03/2018"
  },
  {
    "id": "412509",
    "title": "\"Halo: The Fall of Reach\" Act 1 (2015) [S01E01]  ",
    "image": "https://static9.opensubtitles.org/gfx/thumbs/2/4/0/0/5240042.jpg",
    "url": "https://www.opensubtitles.org/en/search/sublanguageid-all/idmovie-412509",
    "rating": "6.0",
    "downloads": "3",
    "lastUpdated": "16/08/2017"
  },
  {
    "id": "1126397",
    "title": "\"Halo\" Transcendence (2022) [S01E09]  ",
    "image": "https://static9.opensubtitles.org/gfx/thumbs/4/4/9/1/8631944.jpg",
    "url": "https://www.opensubtitles.org/en/search/sublanguageid-all/idmovie-1126397",
    "rating": "8.1",
    "downloads": "37",
    "lastUpdated": "11/06/2022"
  },
  {
    "id": "1126395",
    "title": "\"Halo\" Inheritance (2022) [S01E07]  ",
    "image": "https://static8.opensubtitles.org/gfx/thumbs/4/3/9/1/8631934.jpg",
    "url": "https://www.opensubtitles.org/en/search/sublanguageid-all/idmovie-1126395",
    "rating": "4.1",
    "downloads": "43",
    "lastUpdated": "05/06/2022"
  },
  {
    "id": "1126394",
    "title": "\"Halo\" Solace (2022) [S01E06]  ",
    "image": "https://static9.opensubtitles.org/gfx/thumbs/6/2/9/1/8631926.jpg",
    "url": "https://www.opensubtitles.org/en/search/sublanguageid-all/idmovie-1126394",
    "rating": "8.2",
    "downloads": "36",
    "lastUpdated": "05/06/2022"
  },
  {
    "id": "1126390",
    "title": "\"Halo\" Unbound (2022) [S01E02]  ",
    "image": "https://static9.opensubtitles.org/gfx/thumbs/8/0/9/1/8631908.jpg",
    "url": "https://www.opensubtitles.org/en/search/sublanguageid-all/idmovie-1126390",
    "rating": "6.9",
    "downloads": "42",
    "lastUpdated": "05/06/2022"
  },
  {
    "id": "1126391",
    "title": "\"Halo\" Emergence (2022) [S01E03]  ",
    "image": "https://static4.opensubtitles.org/gfx/thumbs/2/1/9/1/8631912.jpg",
    "url": "https://www.opensubtitles.org/en/search/sublanguageid-all/idmovie-1126391",
    "rating": "7.3",
    "downloads": "42",
    "lastUpdated": "05/06/2022"
  },
  {
    "id": "1126389",
    "title": "\"Halo\" Contact (2022) [S01E01]  ",
    "image": "https://static5.opensubtitles.org/gfx/thumbs/4/0/9/1/8631904.jpg",
    "url": "https://www.opensubtitles.org/en/search/sublanguageid-all/idmovie-1126389",
    "rating": "7.6",
    "downloads": "48",
    "lastUpdated": "27/05/2022"
  },
  {
    "id": "185994",
    "title": "\"Halo: Nightfall\" It's Only Just Beginning (2014) [S01E01]  ",
    "image": "https://static3.opensubtitles.org/gfx/thumbs/6/5/4/4/3884456.jpg",
    "url": "https://www.opensubtitles.org/en/search/sublanguageid-all/idmovie-185994",
    "rating": "7.1",
    "downloads": "44",
    "lastUpdated": "05/02/2019"
  },
  {
    "id": "166115",
    "title": "Halo taxi (1983) ",
    "image": "https://static.opensubtitles.org/gfx/empty_cover.jpg",
    "url": "https://www.opensubtitles.org/en/search/sublanguageid-all/idmovie-166115",
    "rating": "6.5",
    "downloads": "1",
    "lastUpdated": "07/12/2013"
  },
  {
    "id": "1126388",
    "title": "Halo (2022) ",
    "image": "https://static8.opensubtitles.org/gfx/thumbs/6/8/2/4/2934286.jpg",
    "url": "https://www.opensubtitles.org/en/search/sublanguageid-all/idmovie-1126388",
    "rating": "7.0",
    "downloads": "363",
    "lastUpdated": "11/06/2022"
  },
  {
    "id": "199936",
    "title": "\"Halo 4: Forward Unto Dawn\" Part 3 (2012) [S01E03]  ",
    "image": "https://static4.opensubtitles.org/gfx/thumbs/8/5/5/5/3405558.jpg",
    "url": "https://www.opensubtitles.org/en/search/sublanguageid-all/idmovie-199936",
    "rating": "6.9",
    "downloads": "1",
    "lastUpdated": "22/07/2015"
  },
  {
    "id": "187061",
    "title": "\"Halo: Nightfall\" Devil Take the Hindmost (2014) [S01E05] Devil Take the Hindmost ",
    "image": "https://static4.opensubtitles.org/gfx/thumbs/0/7/5/5/4095570.jpg",
    "url": "https://www.opensubtitles.org/en/search/sublanguageid-all/idmovie-187061",
    "rating": "7.0",
    "downloads": "18",
    "lastUpdated": "21/04/2022"
  },
  {
    "id": "163574",
    "title": "\"Halo 4: Forward Unto Dawn\" Part 2 (2012) [S01E02]  ",
    "image": "https://static7.opensubtitles.org/gfx/thumbs/2/4/8/0/3250842.jpg",
    "url": "https://www.opensubtitles.org/en/search/sublanguageid-all/idmovie-163574",
    "rating": "6.5",
    "downloads": "15",
    "lastUpdated": "01/04/2022"
  },
  {
    "id": "1008823",
    "title": "\"Grown-ish\" No Halo (2018) [S03E13]  ",
    "image": "https://static.opensubtitles.org/gfx/empty_cover.jpg",
    "url": "https://www.opensubtitles.org/en/search/sublanguageid-all/idmovie-1008823",
    "rating": "0",
    "downloads": "5",
    "lastUpdated": "17/01/2022"
  },
  {
    "id": "186933",
    "title": "\"Halo: Nightfall\" Gods of the Damned (2014) [S01E04] Gods of the Damned ",
    "image": "https://static7.opensubtitles.org/gfx/thumbs/4/6/5/5/4095564.jpg",
    "url": "https://www.opensubtitles.org/en/search/sublanguageid-all/idmovie-186933",
    "rating": "6.9",
    "downloads": "15",
    "lastUpdated": "05/02/2019"
  },
  {
    "id": "186932",
    "title": "\"Halo: Nightfall\" Lifeboat Rules (2014) [S01E03] Lifeboat Rules ",
    "image": "https://static.opensubtitles.org/gfx/empty_cover.jpg",
    "url": "https://www.opensubtitles.org/en/search/sublanguageid-all/idmovie-186932",
    "rating": "6.8",
    "downloads": "28",
    "lastUpdated": "05/02/2019"
  },
  {
    "id": "186302",
    "title": "\"Halo: Nightfall\" Sourced from Hell (2014) [S01E02]  ",
    "image": "https://static6.opensubtitles.org/gfx/thumbs/4/5/5/5/4095554.jpg",
    "url": "https://www.opensubtitles.org/en/search/sublanguageid-all/idmovie-186302",
    "rating": "6.9",
    "downloads": "30",
    "lastUpdated": "05/02/2019"
  },
  {
    "id": "494025",
    "title": "\"Haikyuu!!\" The Halo Around the Moon (2016) [S03E04]  ",
    "image": "https://static4.opensubtitles.org/gfx/thumbs/2/1/1/8/6218112.jpg",
    "url": "https://www.opensubtitles.org/en/search/sublanguageid-all/idmovie-494025",
    "rating": "0",
    "downloads": "9",
    "lastUpdated": "03/07/2022"
  },
  {
    "id": "303621",
    "title": "\"Mannix\" The Crimson Halo (1972) [S06E03]  ",
    "image": "https://static8.opensubtitles.org/gfx/thumbs/3/5/6/1/0641653.jpg",
    "url": "https://www.opensubtitles.org/en/search/sublanguageid-all/idmovie-303621",
    "rating": "7.6",
    "downloads": "2",
    "lastUpdated": "26/09/2021"
  },
  {
    "id": "107776",
    "title": "\"Top Gear USA\" Halo vs. Velociraptor (2010) [S01E04]  ",
    "image": "https://static8.opensubtitles.org/gfx/thumbs/3/4/6/4/1794643.jpg",
    "url": "https://www.opensubtitles.org/en/search/sublanguageid-all/idmovie-107776",
    "rating": "6.4",
    "downloads": "8",
    "lastUpdated": "31/05/2015"
  },
  {
    "id": "163575",
    "title": "\"Halo 4: Forward Unto Dawn\" Part 1 (2012) [S01E01]  ",
    "image": "https://static7.opensubtitles.org/gfx/thumbs/0/6/8/3/3223860.jpg",
    "url": "https://www.opensubtitles.org/en/search/sublanguageid-all/idmovie-163575",
    "rating": "6.3",
    "downloads": "2",
    "lastUpdated": "21/11/2013"
  },
  {
    "id": "56735",
    "title": "Halo 2 (2004) ",
    "image": "https://static5.opensubtitles.org/gfx/thumbs/8/1/7/7/0357718.jpg",
    "url": "https://www.opensubtitles.org/en/search/sublanguageid-all/idmovie-56735",
    "rating": "8.4",
    "downloads": "2",
    "lastUpdated": "01/11/2010"
  },
  {
    "id": "1090147",
    "title": "\"Gatchaman Crowds Insight\" Halo Effect (TV Episode) () [S01E05]  ",
    "image": "https://static.opensubtitles.org/gfx/empty_cover.jpg",
    "url": "https://www.opensubtitles.org/en/search/sublanguageid-all/idmovie-1090147",
    "rating": "0.0",
    "downloads": "1",
    "lastUpdated": "12/11/2021"
  },
  {
    "id": "125635",
    "title": "\"Doctor Who\" The Web Planet (1965) [S02E16]  ",
    "image": "https://static8.opensubtitles.org/gfx/thumbs/5/7/9/2/0562975.jpg",
    "url": "https://www.opensubtitles.org/en/search/sublanguageid-all/idmovie-125635",
    "rating": "6.5",
    "downloads": "16",
    "lastUpdated": "22/07/2021"
  },
  {
    "id": "7493",
    "title": "'Allo 'Allo! (1982)'Allo 'Allo, Allo 'Allo!, bonus material ",
    "image": "https://static8.opensubtitles.org/gfx/thumbs/9/5/6/6/0086659.jpg",
    "url": "https://www.opensubtitles.org/en/search/sublanguageid-all/idmovie-7493",
    "rating": "8.4",
    "downloads": "56",
    "lastUpdated": "30/05/2021"
  },
  {
    "id": "85173",
    "title": "\"'Allo 'Allo!\" The Dance of Hitler Youth (1984) [S01E07]  ",
    "image": "https://static5.opensubtitles.org/gfx/thumbs/9/5/3/0/0500359.jpg",
    "url": "https://www.opensubtitles.org/en/search/sublanguageid-all/idmovie-85173",
    "rating": "8.2",
    "downloads": "1",
    "lastUpdated": "09/05/2014"
  },
  {
    "id": "141662",
    "title": "\"Supernatural\" Citizen Fang (2012) [S08E09]  ",
    "image": "https://static9.opensubtitles.org/gfx/thumbs/8/3/1/6/2426138.jpg",
    "url": "https://www.opensubtitles.org/en/search/sublanguageid-all/idmovie-141662",
    "rating": "8.3",
    "downloads": "1",
    "lastUpdated": "07/12/2012"
  },
  {
    "id": "148261",
    "title": "\"American Dad!\" The Missing Kink (2013) [S08E15]  ",
    "image": "https://static3.opensubtitles.org/gfx/thumbs/0/2/1/8/2708120.jpg",
    "url": "https://www.opensubtitles.org/en/search/sublanguageid-all/idmovie-148261",
    "rating": "7.2",
    "downloads": "2",
    "lastUpdated": "10/05/2013"
  },
  {
    "id": "152401",
    "title": "\"Shark Tank\" Episode #3.3 (2012) [S03E03]  ",
    "image": "https://static4.opensubtitles.org/gfx/thumbs/5/5/9/8/2198955.jpg",
    "url": "https://www.opensubtitles.org/en/search/sublanguageid-all/idmovie-152401",
    "rating": "7.8",
    "downloads": "1",
    "lastUpdated": "29/05/2013"
  },
  {
    "id": "1806",
    "title": "Charlie's Angels: Full Throttle (2003)Charlie's Angels 2, Charlie's Angels: Halo ",
    "image": "https://static6.opensubtitles.org/gfx/thumbs/7/5/3/5/0305357.jpg",
    "url": "https://www.opensubtitles.org/en/search/sublanguageid-all/idmovie-1806",
    "rating": "4.9",
    "downloads": "239",
    "lastUpdated": "31/12/2021"
  },
  {
    "id": "140553",
    "title": "\"Elementary\" One Way to Get Off (2012) [S01E07]  ",
    "image": "https://static2.opensubtitles.org/gfx/thumbs/8/9/5/1/2481598.jpg",
    "url": "https://www.opensubtitles.org/en/search/sublanguageid-all/idmovie-140553",
    "rating": "8.0",
    "downloads": "1",
    "lastUpdated": "18/11/2012"
  }
]
```
</p>
</details>
<br>

### Search based on language

> `api/all/search?q=QUERY`

<details>
<summary style='font-size: 15px'><span style='font-size: 20px;font-weight:bold;'>Available Languages</span></summary>
<p>

```
all - ALL
abk - Abkhazian
afr - Afrikaans
alb - Albanian
ara - Arabic
arg - Aragonese
arm - Armenian
asm - Assamese
ast - Asturian
aze - Azerbaijani
baq - Basque
bel - Belarusian
ben - Bengali
bos - Bosnian
bre - Breton
bul - Bulgarian
bur - Burmese
cat - Catalan
chi -  Chinese (simplified)
zht -  Chinese (traditional)
zhe - Chinese bilingual
hrv - Croatian
cze - Czech
dan - Danish
prs - Dari
dut - Dutch
eng - English
epo - Esperanto
est - Estonian
ext - Extremaduran
fin - Finnish
fre - French
gla - Gaelic
glg - Galician
geo - Georgian
ger - German
ell - Greek
heb - Hebrew
hin - Hindi
hun - Hungarian
ice - Icelandic
ibo - Igbo
ind - Indonesian
ina - Interlingua
gle - Irish
ita - Italian
jpn - Japanese
kan - Kannada
kaz - Kazakh
khm - Khmer
kor - Korean
kur - Kurdish
lav - Latvian
lit - Lithuanian
ltz - Luxembourgish
mac - Macedonian
may - Malay
mal - Malayalam
mni - Manipuri
mar - Marathi
mon - Mongolian
mne - Montenegrin
nav - Navajo
nep - Nepali
sme - Northern Sami
nor - Norwegian
oci - Occitan
ori - Odia
per - Persian
pol - Polish
por - Portuguese
pob -  Portuguese (BR)
pom -  Portuguese (MZ)
pus - Pushto
rum - Romanian
rus - Russian
sat - Santali
scc - Serbian
snd - Sindhi
sin - Sinhalese
slo - Slovak
slv - Slovenian
som - Somali
spa - Spanish
spn -  Spanish (EU)
spl -  Spanish (LA)
swa - Swahili
swe - Swedish
syr - Syriac
tgl - Tagalog
tam - Tamil
tat - Tatar
tel - Telugu
tha - Thai
tok - Toki Pona
tur - Turkish
tuk - Turkmen
ukr - Ukrainian
urd - Urdu
vie - Vietnamese
wel - Welsh
```

</p>
</details>
<br>

| Parameter | Required |  Type   | Default |                     Example                     |
| :-------: | :------: | :-----: | :-----: | :---------------------------------------------: |
|   Query (q)    |    ✅    | string  |  None   |          `api/search?q=halo`           |
| Language  |    ❌    | string  |  all   |    `api/eng/search?q=halo`     |

<details>
<summary style='font-size: 15px'><span style='font-size: 20px;font-weight:bold;'>🔍 Example Output</span></summary>
<p>

```json
[
  {
    "id": "138044",
    "title": "Halo 4: Forward Unto Dawn (2012) ",
    "image": "https://static6.opensubtitles.org/gfx/thumbs/8/0/3/2/2262308.jpg",
    "url": "https://www.opensubtitles.org/en/search/sublanguageid-eng/idmovie-138044",
    "rating": "6.7",
    "downloads": "12",
    "lastUpdated": "14/09/2014"
  },
  {
    "id": "185993",
    "title": "Halo: Nightfall (2014) ",
    "image": "https://static4.opensubtitles.org/gfx/thumbs/4/1/1/4/3804114.jpg",
    "url": "https://www.opensubtitles.org/en/search/sublanguageid-eng/idmovie-185993",
    "rating": "5.5",
    "downloads": "19",
    "lastUpdated": "07/04/2016"
  },
  {
    "id": "399574",
    "title": "Halo: The Fall of Reach (2015) ",
    "image": "https://static4.opensubtitles.org/gfx/thumbs/2/2/3/6/4856322.jpg",
    "url": "https://www.opensubtitles.org/en/search/sublanguageid-eng/idmovie-399574",
    "rating": "5.7",
    "downloads": "5",
    "lastUpdated": "14/03/2020"
  },
  {
    "id": "52978",
    "title": "Halo Legends (2010) ",
    "image": "https://static8.opensubtitles.org/gfx/thumbs/0/6/6/0/1480660.jpg",
    "url": "https://www.opensubtitles.org/en/search/sublanguageid-eng/idmovie-52978",
    "rating": "6.5",
    "downloads": "9",
    "lastUpdated": "08/09/2019"
  },
  {
    "id": "297455",
    "title": "Phantom Halo (2014) ",
    "image": "https://static4.opensubtitles.org/gfx/thumbs/4/3/7/0/3130734.jpg",
    "url": "https://www.opensubtitles.org/en/search/sublanguageid-eng/idmovie-297455",
    "rating": "5.2",
    "downloads": "5",
    "lastUpdated": "01/12/2017"
  },
  {
    "id": "1126396",
    "title": "\"Halo\" Allegiance (2022) [S01E08]  ",
    "image": "https://static3.opensubtitles.org/gfx/thumbs/8/3/9/1/8631938.jpg",
    "url": "https://www.opensubtitles.org/en/search/sublanguageid-eng/idmovie-1126396",
    "rating": "7.3",
    "downloads": "2",
    "lastUpdated": "12/05/2022"
  },
  {
    "id": "1126393",
    "title": "\"Halo\" Reckoning (2022) [S01E05]  ",
    "image": "https://static8.opensubtitles.org/gfx/thumbs/6/1/9/1/8631916.jpg",
    "url": "https://www.opensubtitles.org/en/search/sublanguageid-eng/idmovie-1126393",
    "rating": "8.4",
    "downloads": "2",
    "lastUpdated": "21/04/2022"
  },
  {
    "id": "1126392",
    "title": "\"Halo\" Homecoming (2022) [S01E04]  ",
    "image": "https://static6.opensubtitles.org/gfx/thumbs/4/1/9/1/8631914.jpg",
    "url": "https://www.opensubtitles.org/en/search/sublanguageid-eng/idmovie-1126392",
    "rating": "6.7",
    "downloads": "4",
    "lastUpdated": "14/04/2022"
  },
  {
    "id": "50298",
    "title": "Halo Wars (2009) ",
    "image": "https://static6.opensubtitles.org/gfx/thumbs/4/0/4/9/0879404.jpg",
    "url": "https://www.opensubtitles.org/en/search/sublanguageid-eng/idmovie-50298",
    "rating": "6.9",
    "downloads": "1",
    "lastUpdated": "02/01/2014"
  },
  {
    "id": "1126388",
    "title": "Halo (2022) ",
    "image": "https://static8.opensubtitles.org/gfx/thumbs/6/8/2/4/2934286.jpg",
    "url": "https://www.opensubtitles.org/en/search/sublanguageid-eng/idmovie-1126388",
    "rating": "7.0",
    "downloads": "22",
    "lastUpdated": "19/05/2022"
  },
  {
    "id": "1126389",
    "title": "\"Halo\" Contact (2022) [S01E01]  ",
    "image": "https://static5.opensubtitles.org/gfx/thumbs/4/0/9/1/8631904.jpg",
    "url": "https://www.opensubtitles.org/en/search/sublanguageid-eng/idmovie-1126389",
    "rating": "7.6",
    "downloads": "4",
    "lastUpdated": "02/04/2022"
  },
  {
    "id": "1126397",
    "title": "\"Halo\" Transcendence (2022) [S01E09]  ",
    "image": "https://static9.opensubtitles.org/gfx/thumbs/4/4/9/1/8631944.jpg",
    "url": "https://www.opensubtitles.org/en/search/sublanguageid-eng/idmovie-1126397",
    "rating": "8.1",
    "downloads": "2",
    "lastUpdated": "19/05/2022"
  },
  {
    "id": "1126390",
    "title": "\"Halo\" Unbound (2022) [S01E02]  ",
    "image": "https://static9.opensubtitles.org/gfx/thumbs/8/0/9/1/8631908.jpg",
    "url": "https://www.opensubtitles.org/en/search/sublanguageid-eng/idmovie-1126390",
    "rating": "6.9",
    "downloads": "2",
    "lastUpdated": "31/03/2022"
  },
  {
    "id": "1126395",
    "title": "\"Halo\" Inheritance (2022) [S01E07]  ",
    "image": "https://static8.opensubtitles.org/gfx/thumbs/4/3/9/1/8631934.jpg",
    "url": "https://www.opensubtitles.org/en/search/sublanguageid-eng/idmovie-1126395",
    "rating": "4.1",
    "downloads": "2",
    "lastUpdated": "05/05/2022"
  },
  {
    "id": "1126394",
    "title": "\"Halo\" Solace (2022) [S01E06]  ",
    "image": "https://static9.opensubtitles.org/gfx/thumbs/6/2/9/1/8631926.jpg",
    "url": "https://www.opensubtitles.org/en/search/sublanguageid-eng/idmovie-1126394",
    "rating": "8.2",
    "downloads": "2",
    "lastUpdated": "28/04/2022"
  },
  {
    "id": "1126391",
    "title": "\"Halo\" Emergence (2022) [S01E03]  ",
    "image": "https://static4.opensubtitles.org/gfx/thumbs/2/1/9/1/8631912.jpg",
    "url": "https://www.opensubtitles.org/en/search/sublanguageid-eng/idmovie-1126391",
    "rating": "7.3",
    "downloads": "2",
    "lastUpdated": "07/04/2022"
  },
  {
    "id": "185994",
    "title": "\"Halo: Nightfall\" It's Only Just Beginning (2014) [S01E01]  ",
    "image": "https://static3.opensubtitles.org/gfx/thumbs/6/5/4/4/3884456.jpg",
    "url": "https://www.opensubtitles.org/en/search/sublanguageid-eng/idmovie-185994",
    "rating": "7.1",
    "downloads": "6",
    "lastUpdated": "21/03/2015"
  },
  {
    "id": "186932",
    "title": "\"Halo: Nightfall\" Lifeboat Rules (2014) [S01E03] Lifeboat Rules ",
    "image": "https://static.opensubtitles.org/gfx/empty_cover.jpg",
    "url": "https://www.opensubtitles.org/en/search/sublanguageid-eng/idmovie-186932",
    "rating": "6.8",
    "downloads": "2",
    "lastUpdated": "17/12/2014"
  },
  {
    "id": "186933",
    "title": "\"Halo: Nightfall\" Gods of the Damned (2014) [S01E04] Gods of the Damned ",
    "image": "https://static7.opensubtitles.org/gfx/thumbs/4/6/5/5/4095564.jpg",
    "url": "https://www.opensubtitles.org/en/search/sublanguageid-eng/idmovie-186933",
    "rating": "6.9",
    "downloads": "2",
    "lastUpdated": "15/12/2014"
  },
  {
    "id": "187061",
    "title": "\"Halo: Nightfall\" Devil Take the Hindmost (2014) [S01E05] Devil Take the Hindmost ",
    "image": "https://static4.opensubtitles.org/gfx/thumbs/0/7/5/5/4095570.jpg",
    "url": "https://www.opensubtitles.org/en/search/sublanguageid-eng/idmovie-187061",
    "rating": "7.0",
    "downloads": "1",
    "lastUpdated": "11/12/2014"
  },
  {
    "id": "186302",
    "title": "\"Halo: Nightfall\" Sourced from Hell (2014) [S01E02]  ",
    "image": "https://static6.opensubtitles.org/gfx/thumbs/4/5/5/5/4095554.jpg",
    "url": "https://www.opensubtitles.org/en/search/sublanguageid-eng/idmovie-186302",
    "rating": "6.9",
    "downloads": "3",
    "lastUpdated": "05/12/2014"
  },
  {
    "id": "163574",
    "title": "\"Halo 4: Forward Unto Dawn\" Part 2 (2012) [S01E02]  ",
    "image": "https://static7.opensubtitles.org/gfx/thumbs/2/4/8/0/3250842.jpg",
    "url": "https://www.opensubtitles.org/en/search/sublanguageid-eng/idmovie-163574",
    "rating": "6.5",
    "downloads": "1",
    "lastUpdated": "10/03/2014"
  },
  {
    "id": "303621",
    "title": "\"Mannix\" The Crimson Halo (1972) [S06E03]  ",
    "image": "https://static8.opensubtitles.org/gfx/thumbs/3/5/6/1/0641653.jpg",
    "url": "https://www.opensubtitles.org/en/search/sublanguageid-eng/idmovie-303621",
    "rating": "7.6",
    "downloads": "2",
    "lastUpdated": "26/09/2021"
  },
  {
    "id": "107776",
    "title": "\"Top Gear USA\" Halo vs. Velociraptor (2010) [S01E04]  ",
    "image": "https://static8.opensubtitles.org/gfx/thumbs/3/4/6/4/1794643.jpg",
    "url": "https://www.opensubtitles.org/en/search/sublanguageid-eng/idmovie-107776",
    "rating": "6.4",
    "downloads": "2",
    "lastUpdated": "31/05/2015"
  },
  {
    "id": "1008823",
    "title": "\"Grown-ish\" No Halo (2018) [S03E13]  ",
    "image": "https://static.opensubtitles.org/gfx/empty_cover.jpg",
    "url": "https://www.opensubtitles.org/en/search/sublanguageid-eng/idmovie-1008823",
    "rating": "0",
    "downloads": "2",
    "lastUpdated": "19/02/2021"
  },
  {
    "id": "494025",
    "title": "\"Haikyuu!!\" The Halo Around the Moon (2016) [S03E04]  ",
    "image": "https://static4.opensubtitles.org/gfx/thumbs/2/1/1/8/6218112.jpg",
    "url": "https://www.opensubtitles.org/en/search/sublanguageid-eng/idmovie-494025",
    "rating": "0",
    "downloads": "1",
    "lastUpdated": "08/01/2022"
  },
  {
    "id": "7493",
    "title": "'Allo 'Allo! (1982)'Allo 'Allo, Allo 'Allo!, bonus material ",
    "image": "https://static8.opensubtitles.org/gfx/thumbs/9/5/6/6/0086659.jpg",
    "url": "https://www.opensubtitles.org/en/search/sublanguageid-eng/idmovie-7493",
    "rating": "8.4",
    "downloads": "7",
    "lastUpdated": "06/07/2015"
  },
  {
    "id": "152401",
    "title": "\"Shark Tank\" Episode #3.3 (2012) [S03E03]  ",
    "image": "https://static4.opensubtitles.org/gfx/thumbs/5/5/9/8/2198955.jpg",
    "url": "https://www.opensubtitles.org/en/search/sublanguageid-eng/idmovie-152401",
    "rating": "7.8",
    "downloads": "1",
    "lastUpdated": "29/05/2013"
  },
  {
    "id": "1806",
    "title": "Charlie's Angels: Full Throttle (2003)Charlie's Angels 2, Charlie's Angels: Halo ",
    "image": "https://static6.opensubtitles.org/gfx/thumbs/7/5/3/5/0305357.jpg",
    "url": "https://www.opensubtitles.org/en/search/sublanguageid-eng/idmovie-1806",
    "rating": "4.9",
    "downloads": "15",
    "lastUpdated": "23/03/2021"
  },
  {
    "id": "61857",
    "title": "The Social Network (2010)Segaau monglok, Shejiao wangluo, The Social Network 2010 ",
    "image": "https://static6.opensubtitles.org/gfx/thumbs/6/1/0/5/1285016.jpg",
    "url": "https://www.opensubtitles.org/en/search/sublanguageid-eng/idmovie-61857",
    "rating": "7.8",
    "downloads": "17",
    "lastUpdated": "23/09/2021"
  },
  {
    "id": "144350",
    "title": "Sweepers (1998)The Halo Trust, The Sweeper ",
    "image": "https://static9.opensubtitles.org/gfx/thumbs/1/5/8/0/0120851.jpg",
    "url": "https://www.opensubtitles.org/en/search/sublanguageid-eng/idmovie-144350",
    "rating": "4.3",
    "downloads": "3",
    "lastUpdated": "29/11/2021"
  },
  {
    "id": "177421",
    "title": "Le dernier des injustes (2013)The Last of the Unjust ",
    "image": "https://static2.opensubtitles.org/gfx/thumbs/4/8/7/0/2340784.jpg",
    "url": "https://www.opensubtitles.org/en/search/sublanguageid-eng/idmovie-177421",
    "rating": "7.2",
    "downloads": "2",
    "lastUpdated": "24/08/2015"
  },
  {
    "id": "22103",
    "title": "Closure (1997)Halo 12 ",
    "image": "https://static7.opensubtitles.org/gfx/thumbs/3/5/1/0/0150153.jpg",
    "url": "https://www.opensubtitles.org/en/search/sublanguageid-eng/idmovie-22103",
    "rating": "9.2",
    "downloads": "2",
    "lastUpdated": "19/01/2007"
  },
  {
    "id": "125635",
    "title": "\"Doctor Who\" The Web Planet (1965) [S02E16]  ",
    "image": "https://static8.opensubtitles.org/gfx/thumbs/5/7/9/2/0562975.jpg",
    "url": "https://www.opensubtitles.org/en/search/sublanguageid-eng/idmovie-125635",
    "rating": "6.5",
    "downloads": "2",
    "lastUpdated": "03/07/2015"
  },
  {
    "id": "53702",
    "title": "Night People (1954)Nocni svet, The Cannibals ",
    "image": "https://static3.opensubtitles.org/gfx/thumbs/9/7/2/7/0047279.jpg",
    "url": "https://www.opensubtitles.org/en/search/sublanguageid-eng/idmovie-53702",
    "rating": "6.6",
    "downloads": "1",
    "lastUpdated": "14/09/2017"
  },
  {
    "id": "46641",
    "title": "Mannix (1967)Intertect ",
    "image": "https://static6.opensubtitles.org/gfx/thumbs/7/7/2/1/0061277.jpg",
    "url": "https://www.opensubtitles.org/en/search/sublanguageid-eng/idmovie-46641",
    "rating": "7.4",
    "downloads": "2",
    "lastUpdated": "26/09/2021"
  },
  {
    "id": "40004",
    "title": "Top Gear USA (2008) ",
    "image": "https://static2.opensubtitles.org/gfx/thumbs/7/6/9/8/1248967.jpg",
    "url": "https://www.opensubtitles.org/en/search/sublanguageid-eng/idmovie-40004",
    "rating": "5.3",
    "downloads": "1",
    "lastUpdated": "31/05/2015"
  },
  {
    "id": "66969",
    "title": "Meditations on Revolution, Part V: Foreign City (2003) ",
    "image": "https://static.opensubtitles.org/gfx/empty_cover.jpg",
    "url": "https://www.opensubtitles.org/en/search/sublanguageid-eng/idmovie-66969",
    "rating": "\n-\n",
    "downloads": "1",
    "lastUpdated": "21/04/2014"
  }
]
```

</p>
</details>
<br>

### Search by Type

> `api/search?q=QUERY&type=TYPE`

Type can only be 2 type. One is `movies` and other is `series`.

| Parameter | Required |  Type   | Default |                    Example                    |
| :-------: | :------: | :-----: | :-----: | :-------------------------------------------: |
|   Query (q)    |    ✅    | string  |  None   |          `api/search?q=halo`           |
| Language  |    ❌    | string  |  all   |    `api/eng/search?q=halo`     |
|   Type (type)    |    ❌    | string |   None    | `api/eng/search?q=halo&type=series` |

<details>
<summary style='font-size: 15px'><span style='font-size: 20px;font-weight:bold;'>🔍 Example Output</span></summary>
<p>

```json
[
  {
    "id": "138044",
    "title": "Halo 4: Forward Unto Dawn (2012) ",
    "image": "https://static6.opensubtitles.org/gfx/thumbs/8/0/3/2/2262308.jpg",
    "url": "https://www.opensubtitles.org/en/search/sublanguageid-eng/searchonlytvseries-on/idmovie-138044",
    "rating": "6.7",
    "downloads": "12",
    "lastUpdated": "14/09/2014"
  },
  {
    "id": "185993",
    "title": "Halo: Nightfall (2014) ",
    "image": "https://static4.opensubtitles.org/gfx/thumbs/4/1/1/4/3804114.jpg",
    "url": "https://www.opensubtitles.org/en/search/sublanguageid-eng/searchonlytvseries-on/idmovie-185993",
    "rating": "5.5",
    "downloads": "19",
    "lastUpdated": "07/04/2016"
  },
  {
    "id": "399574",
    "title": "Halo: The Fall of Reach (2015) ",
    "image": "https://static4.opensubtitles.org/gfx/thumbs/2/2/3/6/4856322.jpg",
    "url": "https://www.opensubtitles.org/en/search/sublanguageid-eng/searchonlytvseries-on/idmovie-399574",
    "rating": "5.7",
    "downloads": "5",
    "lastUpdated": "14/03/2020"
  },
  {
    "id": "1126396",
    "title": "\"Halo\" Allegiance (2022) [S01E08]  ",
    "image": "https://static3.opensubtitles.org/gfx/thumbs/8/3/9/1/8631938.jpg",
    "url": "https://www.opensubtitles.org/en/search/sublanguageid-eng/searchonlytvseries-on/idmovie-1126396",
    "rating": "7.3",
    "downloads": "2",
    "lastUpdated": "12/05/2022"
  },
  {
    "id": "1126393",
    "title": "\"Halo\" Reckoning (2022) [S01E05]  ",
    "image": "https://static8.opensubtitles.org/gfx/thumbs/6/1/9/1/8631916.jpg",
    "url": "https://www.opensubtitles.org/en/search/sublanguageid-eng/searchonlytvseries-on/idmovie-1126393",
    "rating": "8.4",
    "downloads": "2",
    "lastUpdated": "21/04/2022"
  },
  {
    "id": "1126392",
    "title": "\"Halo\" Homecoming (2022) [S01E04]  ",
    "image": "https://static6.opensubtitles.org/gfx/thumbs/4/1/9/1/8631914.jpg",
    "url": "https://www.opensubtitles.org/en/search/sublanguageid-eng/searchonlytvseries-on/idmovie-1126392",
    "rating": "6.7",
    "downloads": "4",
    "lastUpdated": "14/04/2022"
  },
  {
    "id": "1126388",
    "title": "Halo (2022) ",
    "image": "https://static8.opensubtitles.org/gfx/thumbs/6/8/2/4/2934286.jpg",
    "url": "https://www.opensubtitles.org/en/search/sublanguageid-eng/searchonlytvseries-on/idmovie-1126388",
    "rating": "7.0",
    "downloads": "22",
    "lastUpdated": "19/05/2022"
  },
  {
    "id": "1126389",
    "title": "\"Halo\" Contact (2022) [S01E01]  ",
    "image": "https://static5.opensubtitles.org/gfx/thumbs/4/0/9/1/8631904.jpg",
    "url": "https://www.opensubtitles.org/en/search/sublanguageid-eng/searchonlytvseries-on/idmovie-1126389",
    "rating": "7.6",
    "downloads": "4",
    "lastUpdated": "02/04/2022"
  },
  {
    "id": "1126397",
    "title": "\"Halo\" Transcendence (2022) [S01E09]  ",
    "image": "https://static9.opensubtitles.org/gfx/thumbs/4/4/9/1/8631944.jpg",
    "url": "https://www.opensubtitles.org/en/search/sublanguageid-eng/searchonlytvseries-on/idmovie-1126397",
    "rating": "8.1",
    "downloads": "2",
    "lastUpdated": "19/05/2022"
  },
  {
    "id": "1126390",
    "title": "\"Halo\" Unbound (2022) [S01E02]  ",
    "image": "https://static9.opensubtitles.org/gfx/thumbs/8/0/9/1/8631908.jpg",
    "url": "https://www.opensubtitles.org/en/search/sublanguageid-eng/searchonlytvseries-on/idmovie-1126390",
    "rating": "6.9",
    "downloads": "2",
    "lastUpdated": "31/03/2022"
  },
  {
    "id": "1126395",
    "title": "\"Halo\" Inheritance (2022) [S01E07]  ",
    "image": "https://static8.opensubtitles.org/gfx/thumbs/4/3/9/1/8631934.jpg",
    "url": "https://www.opensubtitles.org/en/search/sublanguageid-eng/searchonlytvseries-on/idmovie-1126395",
    "rating": "4.1",
    "downloads": "2",
    "lastUpdated": "05/05/2022"
  },
  {
    "id": "1126394",
    "title": "\"Halo\" Solace (2022) [S01E06]  ",
    "image": "https://static9.opensubtitles.org/gfx/thumbs/6/2/9/1/8631926.jpg",
    "url": "https://www.opensubtitles.org/en/search/sublanguageid-eng/searchonlytvseries-on/idmovie-1126394",
    "rating": "8.2",
    "downloads": "2",
    "lastUpdated": "28/04/2022"
  },
  {
    "id": "1126391",
    "title": "\"Halo\" Emergence (2022) [S01E03]  ",
    "image": "https://static4.opensubtitles.org/gfx/thumbs/2/1/9/1/8631912.jpg",
    "url": "https://www.opensubtitles.org/en/search/sublanguageid-eng/searchonlytvseries-on/idmovie-1126391",
    "rating": "7.3",
    "downloads": "2",
    "lastUpdated": "07/04/2022"
  },
  {
    "id": "185994",
    "title": "\"Halo: Nightfall\" It's Only Just Beginning (2014) [S01E01]  ",
    "image": "https://static3.opensubtitles.org/gfx/thumbs/6/5/4/4/3884456.jpg",
    "url": "https://www.opensubtitles.org/en/search/sublanguageid-eng/searchonlytvseries-on/idmovie-185994",
    "rating": "7.1",
    "downloads": "6",
    "lastUpdated": "21/03/2015"
  },
  {
    "id": "186932",
    "title": "\"Halo: Nightfall\" Lifeboat Rules (2014) [S01E03] Lifeboat Rules ",
    "image": "https://static.opensubtitles.org/gfx/empty_cover.jpg",
    "url": "https://www.opensubtitles.org/en/search/sublanguageid-eng/searchonlytvseries-on/idmovie-186932",
    "rating": "6.8",
    "downloads": "2",
    "lastUpdated": "17/12/2014"
  },
  {
    "id": "186933",
    "title": "\"Halo: Nightfall\" Gods of the Damned (2014) [S01E04] Gods of the Damned ",
    "image": "https://static7.opensubtitles.org/gfx/thumbs/4/6/5/5/4095564.jpg",
    "url": "https://www.opensubtitles.org/en/search/sublanguageid-eng/searchonlytvseries-on/idmovie-186933",
    "rating": "6.9",
    "downloads": "2",
    "lastUpdated": "15/12/2014"
  },
  {
    "id": "187061",
    "title": "\"Halo: Nightfall\" Devil Take the Hindmost (2014) [S01E05] Devil Take the Hindmost ",
    "image": "https://static4.opensubtitles.org/gfx/thumbs/0/7/5/5/4095570.jpg",
    "url": "https://www.opensubtitles.org/en/search/sublanguageid-eng/searchonlytvseries-on/idmovie-187061",
    "rating": "7.0",
    "downloads": "1",
    "lastUpdated": "11/12/2014"
  },
  {
    "id": "186302",
    "title": "\"Halo: Nightfall\" Sourced from Hell (2014) [S01E02]  ",
    "image": "https://static6.opensubtitles.org/gfx/thumbs/4/5/5/5/4095554.jpg",
    "url": "https://www.opensubtitles.org/en/search/sublanguageid-eng/searchonlytvseries-on/idmovie-186302",
    "rating": "6.9",
    "downloads": "3",
    "lastUpdated": "05/12/2014"
  },
  {
    "id": "163574",
    "title": "\"Halo 4: Forward Unto Dawn\" Part 2 (2012) [S01E02]  ",
    "image": "https://static7.opensubtitles.org/gfx/thumbs/2/4/8/0/3250842.jpg",
    "url": "https://www.opensubtitles.org/en/search/sublanguageid-eng/searchonlytvseries-on/idmovie-163574",
    "rating": "6.5",
    "downloads": "1",
    "lastUpdated": "10/03/2014"
  },
  {
    "id": "303621",
    "title": "\"Mannix\" The Crimson Halo (1972) [S06E03]  ",
    "image": "https://static8.opensubtitles.org/gfx/thumbs/3/5/6/1/0641653.jpg",
    "url": "https://www.opensubtitles.org/en/search/sublanguageid-eng/searchonlytvseries-on/idmovie-303621",
    "rating": "7.6",
    "downloads": "2",
    "lastUpdated": "26/09/2021"
  },
  {
    "id": "107776",
    "title": "\"Top Gear USA\" Halo vs. Velociraptor (2010) [S01E04]  ",
    "image": "https://static8.opensubtitles.org/gfx/thumbs/3/4/6/4/1794643.jpg",
    "url": "https://www.opensubtitles.org/en/search/sublanguageid-eng/searchonlytvseries-on/idmovie-107776",
    "rating": "6.4",
    "downloads": "2",
    "lastUpdated": "31/05/2015"
  },
  {
    "id": "1008823",
    "title": "\"Grown-ish\" No Halo (2018) [S03E13]  ",
    "image": "https://static.opensubtitles.org/gfx/empty_cover.jpg",
    "url": "https://www.opensubtitles.org/en/search/sublanguageid-eng/searchonlytvseries-on/idmovie-1008823",
    "rating": "0",
    "downloads": "2",
    "lastUpdated": "19/02/2021"
  },
  {
    "id": "494025",
    "title": "\"Haikyuu!!\" The Halo Around the Moon (2016) [S03E04]  ",
    "image": "https://static4.opensubtitles.org/gfx/thumbs/2/1/1/8/6218112.jpg",
    "url": "https://www.opensubtitles.org/en/search/sublanguageid-eng/searchonlytvseries-on/idmovie-494025",
    "rating": "0",
    "downloads": "1",
    "lastUpdated": "08/01/2022"
  },
  {
    "id": "7493",
    "title": "'Allo 'Allo! (1982)'Allo 'Allo, Allo 'Allo!, bonus material ",
    "image": "https://static8.opensubtitles.org/gfx/thumbs/9/5/6/6/0086659.jpg",
    "url": "https://www.opensubtitles.org/en/search/sublanguageid-eng/searchonlytvseries-on/idmovie-7493",
    "rating": "8.4",
    "downloads": "7",
    "lastUpdated": "06/07/2015"
  },
  {
    "id": "152401",
    "title": "\"Shark Tank\" Episode #3.3 (2012) [S03E03]  ",
    "image": "https://static4.opensubtitles.org/gfx/thumbs/5/5/9/8/2198955.jpg",
    "url": "https://www.opensubtitles.org/en/search/sublanguageid-eng/searchonlytvseries-on/idmovie-152401",
    "rating": "7.8",
    "downloads": "1",
    "lastUpdated": "29/05/2013"
  },
  {
    "id": "125635",
    "title": "\"Doctor Who\" The Web Planet (1965) [S02E16]  ",
    "image": "https://static8.opensubtitles.org/gfx/thumbs/5/7/9/2/0562975.jpg",
    "url": "https://www.opensubtitles.org/en/search/sublanguageid-eng/searchonlytvseries-on/idmovie-125635",
    "rating": "6.5",
    "downloads": "2",
    "lastUpdated": "03/07/2015"
  },
  {
    "id": "46641",
    "title": "Mannix (1967)Intertect ",
    "image": "https://static6.opensubtitles.org/gfx/thumbs/7/7/2/1/0061277.jpg",
    "url": "https://www.opensubtitles.org/en/search/sublanguageid-eng/searchonlytvseries-on/idmovie-46641",
    "rating": "7.4",
    "downloads": "2",
    "lastUpdated": "26/09/2021"
  },
  {
    "id": "40004",
    "title": "Top Gear USA (2008) ",
    "image": "https://static2.opensubtitles.org/gfx/thumbs/7/6/9/8/1248967.jpg",
    "url": "https://www.opensubtitles.org/en/search/sublanguageid-eng/searchonlytvseries-on/idmovie-40004",
    "rating": "5.3",
    "downloads": "1",
    "lastUpdated": "31/05/2015"
  }
]
```

</p>
</details>
<br>

### Search by Season & Episode

> `api/search?q=QUERY&s=NUM&e=NUM`

| Parameter | Required |  Type   | Default |                            Example                             |
| :-------: | :------: | :-----: | :-----: | :------------------------------------------------------------: |
|   Query (q)    |    ✅    | string  |  None   |                  `api/search?q=halo`                  |
|   Language   |    ❌    | string  |  all   |          `api/eng/search?q=halo`           |
| Type  |    ❌    | string  |  None   |  `api/eng/search?q=halo&type=series`   |
|   Season    |    ❌    | integer |    None    | `api/eng/search?q=halo&s=1&type=series` |
|   Episode    |    ❌    | integer |    None    | `api/eng/search?q=halo&e=1&type=series` |
|   Season & Episode    |    ❌    | integer |    None    | `api/eng/search?q=halo&s=1&e=1&type=series` |

<details>
<summary style='font-size: 15px'><span style='font-size: 20px;font-weight:bold;'>🔍 Example Output for Season</span></summary>
<p>

```json
[
  {
    "info": [
      {
        "name": "Halo English subtitles",
        "image": "https:undefined",
        "desc": ""
      }
    ],
    "data": [
      {
        "title": "\"Halo\"Reckoning(2022)[S01E05]Halo.S01E05.1080p.WEB.H264-CAKES-NHI",
        "language": "English",
        "download": "https://www.opensubtitles.org/en/subtitleserve/sub/9060936",
        "uploadedAt": "21/04/2022 08:18:36"
      },
      {
        "title": "\"Halo\"Allegiance(2022)[S01E08]Halo.S01E08.1080p.WEB.H264-CAKES-NHI",
        "language": "English",
        "download": "https://www.opensubtitles.org/en/subtitleserve/sub/9090207",
        "uploadedAt": "12/05/2022 08:17:09"
      },
      {
        "title": "\"Halo\"Homecoming(2022)[S01E04]Halo.S01E04.1080p.WEB.H264-PECULATE-NHI",
        "language": "English",
        "download": "https://www.opensubtitles.org/en/subtitleserve/sub/9051550",
        "uploadedAt": "14/04/2022 08:40:13"
      },
      {
        "title": "\"Halo\"Homecoming(2022)[S01E04]Halo.S01E04.iNTERNAL.1080p.WEB.H264-GGEZ-NHI",
        "language": "English",
        "download": "https://www.opensubtitles.org/en/subtitleserve/sub/9051560",
        "uploadedAt": "14/04/2022 08:47:22"
      },
      {
        "title": "\"Halo\"Reckoning(2022)[S01E05]Halo.S01E05.1080p.WEB.H264-CAKES",
        "language": "English",
        "download": "https://www.opensubtitles.org/en/subtitleserve/sub/9060935",
        "uploadedAt": "21/04/2022 08:18:27"
      },
      {
        "title": "\"Halo\"Allegiance(2022)[S01E08]Halo.S01E08.1080p.WEB.H264-CAKES",
        "language": "English",
        "download": "https://www.opensubtitles.org/en/subtitleserve/sub/9090206",
        "uploadedAt": "12/05/2022 08:16:57"
      },
      {
        "title": "\"Halo\"Homecoming(2022)[S01E04]Halo.S01E04.1080p.WEB.H264-PECULATE",
        "language": "English",
        "download": "https://www.opensubtitles.org/en/subtitleserve/sub/9051548",
        "uploadedAt": "14/04/2022 08:40:01"
      },
      {
        "title": "\"Halo\"Homecoming(2022)[S01E04]Halo.S01E04.iNTERNAL.1080p.WEB.H264-GGEZ",
        "language": "English",
        "download": "https://www.opensubtitles.org/en/subtitleserve/sub/9051559",
        "uploadedAt": "14/04/2022 08:47:09"
      },
      {
        "title": "\"Halo\"Contact(2022)[S01E01]Halo.S01E01.1080p.WEB.h264-KOGi",
        "language": "English",
        "download": "https://www.opensubtitles.org/en/subtitleserve/sub/9026533",
        "uploadedAt": "24/03/2022 07:11:33"
      },
      {
        "title": "\"Halo\"Unbound(2022)[S01E02]Halo.S01E02.1080p.WEB.h264-GOSSIP",
        "language": "English",
        "download": "https://www.opensubtitles.org/en/subtitleserve/sub/9034427",
        "uploadedAt": "31/03/2022 08:12:03"
      },
      {
        "title": "\"Halo\"Emergence(2022)[S01E03]Halo.S01E03.1080p.WEB.H264-PECULATE",
        "language": "English",
        "download": "https://www.opensubtitles.org/en/subtitleserve/sub/9042166",
        "uploadedAt": "07/04/2022 08:11:25"
      },
      {
        "title": "\"Halo\"Contact(2022)[S01E01]Halo.S01E01.1080p.WEB.h264-KOGi",
        "language": "English",
        "download": "https://www.opensubtitles.org/en/subtitleserve/sub/9026532",
        "uploadedAt": "24/03/2022 07:10:58"
      },
      {
        "title": "\"Halo\"Solace(2022)[S01E06]Halo.S01E06.1080p.WEB.H264-CAKES-NHI",
        "language": "English",
        "download": "https://www.opensubtitles.org/en/subtitleserve/sub/9072178",
        "uploadedAt": "28/04/2022 08:22:52"
      },
      {
        "title": "\"Halo\"Transcendence(2022)[S01E09]Halo.S01E09.1080p.WEB.H264-CAKES-NHI",
        "language": "English",
        "download": "https://www.opensubtitles.org/en/subtitleserve/sub/9098002",
        "uploadedAt": "19/05/2022 08:22:15"
      },
      {
        "title": "\"Halo\"Contact(2022)[S01E01]Halo.S01E01.NORDiC.720p.WEB.H264-EGEN",
        "language": "English",
        "download": "https://www.opensubtitles.org/en/subtitleserve/sub/9027520",
        "uploadedAt": "25/03/2022 03:23:54"
      },
      {
        "title": "\"Halo\"Contact(2022)[S01E01]Halo.S01E01.Contact.720p.AMZN.WEBRip.DDP5.1.x26...",
        "language": "English",
        "download": "https://www.opensubtitles.org/en/subtitleserve/sub/9036764",
        "uploadedAt": "02/04/2022 02:16:42"
      },
      {
        "title": "\"Halo\"Inheritance(2022)[S01E07]Halo.S01E07.1080p.WEB.H264-CAKES-NHI",
        "language": "English",
        "download": "https://www.opensubtitles.org/en/subtitleserve/sub/9079936",
        "uploadedAt": "05/05/2022 08:23:27"
      },
      {
        "title": "\"Halo\"Unbound(2022)[S01E02]Halo.S01E02.1080p.WEB.h264-GOSSIP",
        "language": "English",
        "download": "https://www.opensubtitles.org/en/subtitleserve/sub/9034426",
        "uploadedAt": "31/03/2022 08:11:57"
      },
      {
        "title": "\"Halo\"Emergence(2022)[S01E03]Halo.S01E03.1080p.WEB.H264-PECULATE",
        "language": "English",
        "download": "https://www.opensubtitles.org/en/subtitleserve/sub/9042165",
        "uploadedAt": "07/04/2022 08:11:20"
      },
      {
        "title": "\"Halo\"Inheritance(2022)[S01E07]Halo.S01E07.1080p.WEB.H264-CAKES",
        "language": "English",
        "download": "https://www.opensubtitles.org/en/subtitleserve/sub/9079935",
        "uploadedAt": "05/05/2022 08:23:11"
      },
      {
        "title": "\"Halo\"Solace(2022)[S01E06]Halo.S01E06.1080p.WEB.H264-CAKES",
        "language": "English",
        "download": "https://www.opensubtitles.org/en/subtitleserve/sub/9072177",
        "uploadedAt": "28/04/2022 08:22:36"
      },
      {
        "title": "\"Halo\"Transcendence(2022)[S01E09]Halo.S01E09.1080p.WEB.H264-CAKES",
        "language": "English",
        "download": "https://www.opensubtitles.org/en/subtitleserve/sub/9098001",
        "uploadedAt": "19/05/2022 08:22:01"
      },
      {
        "title": "\"Halo:Nightfall\"It'sOnlyJustBeginning(2014)[S01E01]Halo.Nightfall.S01E01.Chapter.One.It's.Only.Jus...",
        "language": "English",
        "download": "https://www.opensubtitles.org/en/subtitleserve/sub/5914206",
        "uploadedAt": "01/12/2014 23:32:33"
      },
      {
        "title": "\"Halo:Nightfall\"SourcedfromHell(2014)[S01E02]Halo.Nightfall.S01E02.Chapter.Two.Sourced.from....",
        "language": "English",
        "download": "https://www.opensubtitles.org/en/subtitleserve/sub/5916604",
        "uploadedAt": "04/12/2014 01:44:52"
      },
      {
        "title": "\"Halo:Nightfall\"It'sOnlyJustBeginning(2014)[S01E01]Halo-Nightfall-01x01-It'sOnlyJustBegin...",
        "language": "English",
        "download": "https://www.opensubtitles.org/en/subtitleserve/sub/5916872",
        "uploadedAt": "04/12/2014 13:07:58"
      },
      {
        "title": "\"Halo:Nightfall\"LifeboatRules(2014)[S01E03]Halo.Nightfall.S01E03.Chapter.Three.Lifeboat.Ru...",
        "language": "English",
        "download": "https://www.opensubtitles.org/en/subtitleserve/sub/5923170",
        "uploadedAt": "09/12/2014 18:55:53"
      },
      {
        "title": "\"Halo:Nightfall\"DevilTaketheHindmost(2014)[S01E05]Halo.Nightfall.S01E05.Chapter.Five.Devil.Take.t...",
        "language": "English",
        "download": "https://www.opensubtitles.org/en/subtitleserve/sub/5925523",
        "uploadedAt": "11/12/2014 12:05:10"
      },
      {
        "title": "\"Halo4:ForwardUntoDawn\"Part2(2012)[S01E02]Halo.4.Forward.Unto.Dawn.S01E02.720p.WEBRip.x26...",
        "language": "English",
        "download": "https://www.opensubtitles.org/en/subtitleserve/sub/5577964",
        "uploadedAt": "10/03/2014 17:25:23"
      },
      {
        "title": "\"Halo:Nightfall\"SourcedfromHell(2014)[S01E02]Halo_Nightfall-01x02-SourcedfromHell.WE...",
        "language": "English",
        "download": "https://www.opensubtitles.org/en/subtitleserve/sub/5917089",
        "uploadedAt": "04/12/2014 16:25:19"
      },
      {
        "title": "\"Halo:Nightfall\"It'sOnlyJustBeginning(2014)[S01E01]Halo.Nightfall.S01E01.WEBRip.x264-4yEo.www.tuse...",
        "language": "English",
        "download": "https://www.opensubtitles.org/en/subtitleserve/sub/5917765",
        "uploadedAt": "05/12/2014 00:32:20"
      },
      {
        "title": "\"Halo:Nightfall\"GodsoftheDamned(2014)[S01E04]Halo.Nightfall.S01E04.Chapter.Four.Gods.of.the....",
        "language": "English",
        "download": "https://www.opensubtitles.org/en/subtitleserve/sub/5924738",
        "uploadedAt": "10/12/2014 19:39:15"
      },
      {
        "title": "\"Halo:Nightfall\"LifeboatRules(2014)[S01E03]Halo.Nightfall.S01E03.WEBRip.x264-AR",
        "language": "English",
        "download": "https://www.opensubtitles.org/en/subtitleserve/sub/5968918",
        "uploadedAt": "17/12/2014 02:43:50"
      },
      {
        "title": "\"Halo:Nightfall\"It'sOnlyJustBeginning(2014)[S01E01]Halo.Nightfall.S01E01.Chapter.One.Its.Only.Just...",
        "language": "English",
        "download": "https://www.opensubtitles.org/en/subtitleserve/sub/6087898",
        "uploadedAt": "21/03/2015 13:46:30"
      },
      {
        "title": "\"Halo:Nightfall\"It'sOnlyJustBeginning(2014)[S01E01]HaloNightfallChapterOne[FullHD1080p]",
        "language": "English",
        "download": "https://www.opensubtitles.org/en/subtitleserve/sub/5914473",
        "uploadedAt": "02/12/2014 09:11:31"
      },
      {
        "title": "\"Halo:Nightfall\"SourcedfromHell(2014)[S01E02]Halo.Nightfall.S01E02.720p.JB-HI.www.tuserie.com",
        "language": "English",
        "download": "https://www.opensubtitles.org/en/subtitleserve/sub/5917801",
        "uploadedAt": "05/12/2014 01:03:24"
      },
      {
        "title": "\"Halo:Nightfall\"It'sOnlyJustBeginning(2014)[S01E01]Halo.Nightfall.2014.S01.BDRip.x264-ROVERS",
        "language": "English",
        "download": "https://www.opensubtitles.org/en/subtitleserve/sub/6079322",
        "uploadedAt": "14/03/2015 17:34:35"
      },
      {
        "title": "\"Halo:Nightfall\"GodsoftheDamned(2014)[S01E04]Halo.Nightfall.S01E04.720p.x264-HI.www.tuserie.com",
        "language": "English",
        "download": "https://www.opensubtitles.org/en/subtitleserve/sub/5931358",
        "uploadedAt": "15/12/2014 21:28:09"
      },
      {
        "title": "\"TopGearUSA\"Halovs.Velociraptor(2010)[S01E04]S01E04-HalovsVelociraptor",
        "language": "English",
        "download": "https://www.opensubtitles.org/en/subtitleserve/sub/6189464",
        "uploadedAt": "31/05/2015 02:00:27"
      },
      {
        "title": "\"TopGearUSA\"Halovs.Velociraptor(2010)[S01E04]Top.Gear.US.S01.HDTV.XviD(Whole)",
        "language": "English",
        "download": "https://www.opensubtitles.org/en/subtitleserve/sub/4309107",
        "uploadedAt": "28/02/2011 20:06:46"
      }
    ]
  }
]
```

</p>
</details>

<details>
<summary style='font-size: 15px'><span style='font-size: 20px;font-weight:bold;'>🔍 Example Output for Episode</span></summary>
<p>

```json
[
  {
    "info": [
      {
        "name": "Halo English subtitles",
        "image": "https:undefined",
        "desc": ""
      }
    ],
    "data": [
      {
        "title": "\"Halo\"Contact(2022)[S01E01]Halo.S01E01.1080p.WEB.h264-KOGi",
        "language": "English",
        "download": "https://www.opensubtitles.org/en/subtitleserve/sub/9026533",
        "uploadedAt": "24/03/2022 07:11:33"
      },
      {
        "title": "\"Halo\"Contact(2022)[S01E01]Halo.S01E01.1080p.WEB.h264-KOGi",
        "language": "English",
        "download": "https://www.opensubtitles.org/en/subtitleserve/sub/9026532",
        "uploadedAt": "24/03/2022 07:10:58"
      },
      {
        "title": "\"Halo\"Contact(2022)[S01E01]Halo.S01E01.NORDiC.720p.WEB.H264-EGEN",
        "language": "English",
        "download": "https://www.opensubtitles.org/en/subtitleserve/sub/9027520",
        "uploadedAt": "25/03/2022 03:23:54"
      },
      {
        "title": "\"Halo\"Contact(2022)[S01E01]Halo.S01E01.Contact.720p.AMZN.WEBRip.DDP5.1.x26...",
        "language": "English",
        "download": "https://www.opensubtitles.org/en/subtitleserve/sub/9036764",
        "uploadedAt": "02/04/2022 02:16:42"
      },
      {
        "title": "\"Halo:Nightfall\"It'sOnlyJustBeginning(2014)[S01E01]Halo.Nightfall.S01E01.Chapter.One.It's.Only.Jus...",
        "language": "English",
        "download": "https://www.opensubtitles.org/en/subtitleserve/sub/5914206",
        "uploadedAt": "01/12/2014 23:32:33"
      },
      {
        "title": "\"Halo:Nightfall\"It'sOnlyJustBeginning(2014)[S01E01]Halo-Nightfall-01x01-It'sOnlyJustBegin...",
        "language": "English",
        "download": "https://www.opensubtitles.org/en/subtitleserve/sub/5916872",
        "uploadedAt": "04/12/2014 13:07:58"
      },
      {
        "title": "\"Halo:Nightfall\"It'sOnlyJustBeginning(2014)[S01E01]Halo.Nightfall.S01E01.WEBRip.x264-4yEo.www.tuse...",
        "language": "English",
        "download": "https://www.opensubtitles.org/en/subtitleserve/sub/5917765",
        "uploadedAt": "05/12/2014 00:32:20"
      },
      {
        "title": "\"Halo:Nightfall\"It'sOnlyJustBeginning(2014)[S01E01]Halo.Nightfall.S01E01.Chapter.One.Its.Only.Just...",
        "language": "English",
        "download": "https://www.opensubtitles.org/en/subtitleserve/sub/6087898",
        "uploadedAt": "21/03/2015 13:46:30"
      },
      {
        "title": "\"Halo:Nightfall\"It'sOnlyJustBeginning(2014)[S01E01]HaloNightfallChapterOne[FullHD1080p]",
        "language": "English",
        "download": "https://www.opensubtitles.org/en/subtitleserve/sub/5914473",
        "uploadedAt": "02/12/2014 09:11:31"
      },
      {
        "title": "\"Halo:Nightfall\"It'sOnlyJustBeginning(2014)[S01E01]Halo.Nightfall.2014.S01.BDRip.x264-ROVERS",
        "language": "English",
        "download": "https://www.opensubtitles.org/en/subtitleserve/sub/6079322",
        "uploadedAt": "14/03/2015 17:34:35"
      }
    ]
  }
]
```

</p>
</details>

<details>
<summary style='font-size: 15px'><span style='font-size: 20px;font-weight:bold;'>🔍 Example Output for Season & Episode</span></summary>
<p>

```json

  {
    "info": [
      {
        "name": "Halo English subtitles",
        "image": "https:undefined",
        "desc": ""
      }
    ],
    "data": [
      {
        "title": "\"Halo\"Contact(2022)[S01E01]Halo.S01E01.1080p.WEB.h264-KOGi",
        "language": "English",
        "download": "https://www.opensubtitles.org/en/subtitleserve/sub/9026533",
        "uploadedAt": "24/03/2022 07:11:33"
      },
      {
        "title": "\"Halo\"Contact(2022)[S01E01]Halo.S01E01.1080p.WEB.h264-KOGi",
        "language": "English",
        "download": "https://www.opensubtitles.org/en/subtitleserve/sub/9026532",
        "uploadedAt": "24/03/2022 07:10:58"
      },
      {
        "title": "\"Halo\"Contact(2022)[S01E01]Halo.S01E01.NORDiC.720p.WEB.H264-EGEN",
        "language": "English",
        "download": "https://www.opensubtitles.org/en/subtitleserve/sub/9027520",
        "uploadedAt": "25/03/2022 03:23:54"
      },
      {
        "title": "\"Halo\"Contact(2022)[S01E01]Halo.S01E01.Contact.720p.AMZN.WEBRip.DDP5.1.x26...",
        "language": "English",
        "download": "https://www.opensubtitles.org/en/subtitleserve/sub/9036764",
        "uploadedAt": "02/04/2022 02:16:42"
      },
      {
        "title": "\"Halo:Nightfall\"It'sOnlyJustBeginning(2014)[S01E01]Halo.Nightfall.S01E01.Chapter.One.It's.Only.Jus...",
        "language": "English",
        "download": "https://www.opensubtitles.org/en/subtitleserve/sub/5914206",
        "uploadedAt": "01/12/2014 23:32:33"
      },
      {
        "title": "\"Halo:Nightfall\"It'sOnlyJustBeginning(2014)[S01E01]Halo-Nightfall-01x01-It'sOnlyJustBegin...",
        "language": "English",
        "download": "https://www.opensubtitles.org/en/subtitleserve/sub/5916872",
        "uploadedAt": "04/12/2014 13:07:58"
      },
      {
        "title": "\"Halo:Nightfall\"It'sOnlyJustBeginning(2014)[S01E01]Halo.Nightfall.S01E01.WEBRip.x264-4yEo.www.tuse...",
        "language": "English",
        "download": "https://www.opensubtitles.org/en/subtitleserve/sub/5917765",
        "uploadedAt": "05/12/2014 00:32:20"
      },
      {
        "title": "\"Halo:Nightfall\"It'sOnlyJustBeginning(2014)[S01E01]Halo.Nightfall.S01E01.Chapter.One.Its.Only.Just...",
        "language": "English",
        "download": "https://www.opensubtitles.org/en/subtitleserve/sub/6087898",
        "uploadedAt": "21/03/2015 13:46:30"
      },
      {
        "title": "\"Halo:Nightfall\"It'sOnlyJustBeginning(2014)[S01E01]HaloNightfallChapterOne[FullHD1080p]",
        "language": "English",
        "download": "https://www.opensubtitles.org/en/subtitleserve/sub/5914473",
        "uploadedAt": "02/12/2014 09:11:31"
      },
      {
        "title": "\"Halo:Nightfall\"It'sOnlyJustBeginning(2014)[S01E01]Halo.Nightfall.2014.S01.BDRip.x264-ROVERS",
        "language": "English",
        "download": "https://www.opensubtitles.org/en/subtitleserve/sub/6079322",
        "uploadedAt": "14/03/2015 17:34:35"
      }
    ]
  }
]
```

</p>
</details>
<br>

### View Result by Id

> `api/view?id=ID`

| Parameter | Required |  Type  | Default |              Example               |
| :-------: | :------: | :----: | :-----: | :--------------------------------: |
|   Id (id)   |    ✅    | integer |  None   | `api/view?id=138044` |

<details>
<summary style='font-size: 15px'><span style='font-size: 20px;font-weight:bold;'>🔍 Example Output</span></summary>
<p>

```json
[
  {
    "info": [
      {
        "name": "Halo 4: Forward Unto Dawn (2012) subtitles",
        "image": "https://static.opensubtitles.org/gfx/thumbs/8/0/3/2/2262308.jpg",
        "desc": "Halo 4: Forward Unto Dawn is a science fiction web series set in the universe of the Halo franchise. Forward Unto Dawn consists of five 15-minute episodes released weekly starting on October 5, 2012, and was later released as a single film on DVD and Blu-ray. The series was produced as a marketing effort for the video game Halo 4 intended to widen the audience of the Halo series and as a stepping stone to a potential Halo film. It was written by Aaron Helbing and Todd Helbing, and directed by Stewart Hendler. Forward Unto Dawn was shot in Vancouver over 25 days in May 2012 on a budget just under USD $10 million. It has just under 500 shots with computer generated imagery, approximately a quarter of what a feature film would have, but the visual effects received praise from reviewers.\nA coming-of-age story, Forward Unto Dawn follows a cadet, Thomas Lasky, at a twenty-sixth century military training academy as it is attacked by the Covenant, an alliance of alien zealots. Lasky is unsure of his future within the military but feels pressured to follow in the footsteps of his mother and brother. Lasky and his surviving squad mates are rescued by the Master Chief and, after the death of his romantic interest, Chyler Silva, Lasky is inspired by the Chief to take initiative and aids him in saving the remaining cadets.",
        "imdb": "https://www.imdb.com/title/tt2262308/"
      }
    ],
    "data": [
      {
        "title": "1. Part 1",
        "download": "https://www.opensubtitles.orgundefined"
      },
      {
        "title": "2. Part 2",
        "download": "https://www.opensubtitles.orgundefined"
      },
      {
        "title": "3. Part 3",
        "download": "https://www.opensubtitles.orgundefined"
      },
      {
        "title": "4. Part 4",
        "download": "https://www.opensubtitles.org/en/upload/idmovieimdb-3405568"
      },
      {
        "title": "5. Part 5",
        "download": "https://www.opensubtitles.org/en/upload/idmovieimdb-3405576"
      },
      {
        "title": "Halo 4:Forward.Unto.Dawn.2012.iTALiAN.BRRip.XviD.M4V-iDN_CreW",
        "download": "https://www.opensubtitles.orgundefined"
      },
      {
        "title": " Halo 4 Forward Unto Dawn - Action Sci-Fi 2012 Eng Subs 1080p [H264-mp4]",
        "download": "https://www.opensubtitles.orgundefined"
      },
      {
        "title": "Halo.4.Forward.Unto.Dawn.2012.1080p.BluRay.H264.AAC-RARBG",
        "download": "https://www.opensubtitles.orgundefined"
      },
      {
        "title": " Halo.4.Forward.Unto.Dawn.2012.720p.BluRay.x264-GECKOS",
        "download": "https://www.opensubtitles.orgundefined"
      },
      {
        "title": " Halo.4.Forward.Unto.Dawn",
        "download": "https://www.opensubtitles.orgundefined"
      },
      {
        "title": "sdflk2kljkjl2mdsf.1080p.BRrip.x264.YIFY",
        "download": "https://www.opensubtitles.orgundefined"
      },
      {
        "title": " Halo 4 Forward Unto Dawn 2012 BRRip XviD-HELLRAZ0R",
        "download": "https://www.opensubtitles.orgundefined"
      },
      {
        "title": " Halo.4.Forward.Unto.Dawn.2012.Blu-ray.x264-10bit.DTS-HD.MA-HDTime",
        "download": "https://www.opensubtitles.orgundefined"
      },
      {
        "title": " Halo.4.Forward.Unto.Dawn.2012.Blu-ray.x264-10bit.DTS-HD.MA-HDTime",
        "download": "https://www.opensubtitles.orgundefined"
      },
      {
        "title": " TiGeR-Halo.4.Forward.Unto.Dawn",
        "download": "https://www.opensubtitles.orgundefined"
      },
      {
        "title": "Halo 4- Forward Unto Dawn 2012 720p.AriaMovie",
        "download": "https://www.opensubtitles.orgundefined"
      },
      {
        "title": " Halo forward unto dawn.HDrip",
        "download": "https://www.opensubtitles.orgundefined"
      },
      {
        "title": "Halo.4.Forward.Unto.Dawn.2012.BDRip.x264-ZHR",
        "download": "https://www.opensubtitles.orgundefined"
      },
      {
        "title": " Halo.4.Forward.Unto.Dawn.2012.BluRay.1080p.DTS.x264-CHD",
        "download": "https://www.opensubtitles.orgundefined"
      },
      {
        "title": " Halo.4.Forward.Unto.Dawn.2012.BRRip.x264.AC3-QualityXD",
        "download": "https://www.opensubtitles.orgundefined"
      },
      {
        "title": " Halo 4 Forward Unto Dawn( 2012 )BRRip-720p",
        "download": "https://www.opensubtitles.orgundefined"
      },
      {
        "title": " Halo.4.Forward.Unto.Dawn.2012.Part.3.720p.x264-Sheppard22",
        "download": "https://www.opensubtitles.orgundefined"
      },
      {
        "title": "Fringe.S05E05.An.Origin.Story.720p.WEB-DL.DD5.1.H264-EbP & 1080p",
        "download": "https://www.opensubtitles.orgundefined"
      },
      {
        "title": "Halo.4.Forward.Unto.Dawn.2012.Part.4.720p.x264-Sheppard22",
        "download": "https://www.opensubtitles.orgundefined"
      },
      {
        "title": " Halo 4- Forward Unto Dawn - Part 3 (Live-Action Halo Series)-gre",
        "download": "https://www.opensubtitles.orgundefined"
      },
      {
        "title": " Halo.4.Forward.Unto.Dawn.2012.Part.2.720p.x264-Sheppard22-gre(1)",
        "download": "https://www.opensubtitles.orgundefined"
      },
      {
        "title": " Halo.4.Forward.Unto.Dawn.2013.720p.BluRay.AC3.x264-GECKOS.DUAL-GUR",
        "download": "https://www.opensubtitles.orgundefined"
      },
      {
        "title": " Halo 4_ Forward Unto Dawn - Part 3 (Live-Action Halo Series)",
        "download": "https://www.opensubtitles.orgundefined"
      },
      {
        "title": " Halo 4 Forward Unto Dawn-Dvdrip-Xvid-MRFIXIT",
        "download": "https://www.opensubtitles.orgundefined"
      },
      {
        "title": "Halo.4.Forward.Unto.Dawn.2012.720p.BluRay.x264-GECKOS",
        "download": "https://www.opensubtitles.orgundefined"
      },
      {
        "title": " Halo.4.Forward.Unto.Dawn.2013.DVDRip.XviD.Dual.Audio-MAXi",
        "download": "https://www.opensubtitles.orgundefined"
      },
      {
        "title": " ng-halo4_remux",
        "download": "https://www.opensubtitles.orgundefined"
      },
      {
        "title": " Halo.4.Forward.Unto.Dawn.2012.BRRip.XviD.AC3-playXD",
        "download": "https://www.opensubtitles.orgundefined"
      },
      {
        "title": " [www.Cpasbien.me] h4 tmb-gre",
        "download": "https://www.opensubtitles.orgundefined"
      },
      {
        "title": " [www.Cpasbien.me] h4 tmb",
        "download": "https://www.opensubtitles.orgundefined"
      },
      {
        "title": " Halo.4.Forward.Unto.Dawn",
        "download": "https://www.opensubtitles.orgundefined"
      },
      {
        "title": " Halo 4_ Forward Unto Dawn - Part 3",
        "download": "https://www.opensubtitles.orgundefined"
      },
      {
        "title": " Halo 4_ Forward Unto Dawn - Part 1 Live.Action.Halo. Series-Sheppard23",
        "download": "https://www.opensubtitles.orgundefined"
      },
      {
        "title": " Halo.4.Forward.Unto.Dawn.2012.SWESUB.DVDrip.xvid-SC666",
        "download": "https://www.opensubtitles.orgundefined"
      },
      {
        "title": " Halo.4.Forward.Unto.Dawn.S01E05.720p.WEBRip.x264-Sheppard22",
        "download": "https://www.opensubtitles.orgundefined"
      },
      {
        "title": " Halo.4-Forward.Unto.Dawn.2012.Part3.720p.x264-Sheppard22",
        "download": "https://www.opensubtitles.orgundefined"
      },
      {
        "title": "Halo 4- Forward Unto Dawn - 01x01",
        "download": "https://www.opensubtitles.orgundefined"
      },
      {
        "title": "Halo 4- Forward Unto Dawn - 01x02",
        "download": "https://www.opensubtitles.orgundefined"
      },
      {
        "title": "Halo 4- Forward Unto Dawn - 01x03",
        "download": "https://www.opensubtitles.orgundefined"
      },
      {
        "title": "Halo 4- Forward Unto Dawn - 01x04",
        "download": "https://www.opensubtitles.orgundefined"
      }
    ]
  }
]
```

</p>
</details>
<br>

---

## 🤩 Want to Try api ?

### API
> https://opensubtitles.bymirrorx.eu.org/api/

---

## 📝 TODO
1. Add redis to cache search results.
2. Make a opensubtitle alternative website at https://opensubtitles.bymirrorx.eu.org/ using this api.
3. Add more features like pagination.

---
## 📨 Suggetions and Pull request
> Suggestions and pull requests are welcomed. You can do feature request also. 

## ⚙️ Credits
#### 📌 Bipul Dey | Contact: [Github](https://github.com/bipuldey19), [Telegram](https://t.me/bipuldey19)
