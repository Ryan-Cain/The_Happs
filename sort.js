const articles = [
  {
    source: {
      id: "business-insider",
      name: "Business Insider",
    },
    author: "Alistair Barr",
    title: "CHART: AI stocks enter correction territory",
    description:
      "AI hype drove huge gains among some tech stocks in the first half of 2023. Lately, that has gone into reverse.",
    url: "https://www.businessinsider.com/ai-stocks-enter-correction-territory-chart-analysis-2023-8",
    urlToImage:
      "https://i.insider.com/64d434014dd2b50019c27314?width=1200&format=jpeg",
    publishedAt: "2023-08-10T15:19:22Z",
    content:
      "Tom Siebel, CEO of the artificial intelligence firm C3.ai.Courtesy C3.ai\r\n<ul><li>The hottest AI stocks from earlier in 2023 have fallen in recent weeks. </li><li>Insider looked at 10 of the top AI s… [+3187 chars]",
  },
  {
    source: {
      id: "google-news",
      name: "Google News",
    },
    author: null,
    title:
      "Column: US manufacturing slowdown fails to rebuild diesel stocks - Reuters",
    description:
      "Column: US manufacturing slowdown fails to rebuild diesel stocks  Reuters",
    url: "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMibmh0dHBzOi8vd3d3LnJldXRlcnMuY29tL2J1c2luZXNzL2VuZXJneS91cy1tYW51ZmFjdHVyaW5nLXNsb3dkb3duLWZhaWxzLXJlYnVpbGQtZGllc2VsLXN0b2Nrcy1rZW1wLTIwMjMtMDgtMDIv0gEA?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
    urlToImage: null,
    publishedAt: "2023-08-03T01:00:00Z",
    content:
      "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]",
  },
  {
    source: {
      id: "google-news",
      name: "Google News",
    },
    author: null,
    title: "London stocks edge lower at open, Unite Group slips - Reuters",
    description: "London stocks edge lower at open, Unite Group slips  Reuters",
    url: "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMiXGh0dHBzOi8vd3d3LnJldXRlcnMuY29tL3dvcmxkL3VrL2xvbmRvbi1zdG9ja3MtZWRnZS1sb3dlci1vcGVuLXVuaXRlLWdyb3VwLXNsaXBzLTIwMjMtMDgtMDcv0gEA?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
    urlToImage: null,
    publishedAt: "2023-08-07T07:26:00Z",
    content:
      "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]",
  },
  {
    source: {
      id: "google-news",
      name: "Google News",
    },
    author: null,
    title: "U.S. stocks end lower after Apple disappoints - Reuters",
    description: "U.S. stocks end lower after Apple disappoints  Reuters",
    url: "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMiM2h0dHBzOi8vd3d3LnJldXRlcnMuY29tL3ZpZGVvL3dhdGNoL2lkc0FTVj9ub3c9dHJ1ZdIBAA?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
    urlToImage: null,
    publishedAt: "2023-08-04T23:02:23Z",
    content:
      "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]",
  },
  {
    source: {
      id: "google-news",
      name: "Google News",
    },
    author: null,
    title: "Technology, energy stocks push TSX higher at open - Reuters Canada",
    description:
      "Technology, energy stocks push TSX higher at open  Reuters Canada",
    url: "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMieGh0dHBzOi8vd3d3LnJldXRlcnMuY29tL3dvcmxkL2FtZXJpY2FzL3RzeC1mdXR1cmVzLXJpc2UtaGlnaGVyLWNydWRlLXByaWNlcy1haGVhZC1tYWpvci1jYmFua3MtcmF0ZS1tZWV0aW5ncy0yMDIzLTA3LTI0L9IBAA?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
    urlToImage: null,
    publishedAt: "2023-07-24T13:33:00Z",
    content:
      "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]",
  },
  {
    source: {
      id: "google-news",
      name: "Google News",
    },
    author: null,
    title: "Asia stocks stall, yuan slips as China cuts rates - Reuters",
    description: "Asia stocks stall, yuan slips as China cuts rates  Reuters",
    url: "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMiQ2h0dHBzOi8vd3d3LnJldXRlcnMuY29tL21hcmtldHMvZ2xvYmFsLW1hcmtldHMtd3JhcHVwLTEtMjAyMy0wOC0xNS_SAQA?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
    urlToImage: null,
    publishedAt: "2023-08-15T01:47:00Z",
    content:
      "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]",
  },
  {
    source: {
      id: "google-news",
      name: "Google News",
    },
    author: null,
    title: "Indian shares fall as metal stocks drag - Reuters India",
    description: "Indian shares fall as metal stocks drag  Reuters India",
    url: "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMiVGh0dHBzOi8vd3d3LnJldXRlcnMuY29tL3dvcmxkL2luZGlhL2luZGlhbi1zaGFyZXMtZmFsbC1tZXRhbC1zdG9ja3MtZHJhZy0yMDIzLTA4LTE0L9IBAA?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
    urlToImage: null,
    publishedAt: "2023-08-14T03:53:35Z",
    content:
      "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]",
  },
  {
    source: {
      id: "google-news",
      name: "Google News",
    },
    author: null,
    title: "Asia stocks fall as weak China data weigh - Reuters",
    description: "Asia stocks fall as weak China data weigh  Reuters",
    url: "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMiQ2h0dHBzOi8vd3d3LnJldXRlcnMuY29tL21hcmtldHMvZ2xvYmFsLW1hcmtldHMtd3JhcHVwLTEtMjAyMy0wOC0xNi_SAQA?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
    urlToImage: null,
    publishedAt: "2023-08-16T02:10:23Z",
    content:
      "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]",
  },
  {
    source: {
      id: "google-news",
      name: "Google News",
    },
    author: null,
    title: "Morning Bid: August cools Wall St stocks - Reuters",
    description: "Morning Bid: August cools Wall St stocks  Reuters",
    url: "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMiRmh0dHBzOi8vd3d3LnJldXRlcnMuY29tL21hcmtldHMvdXMvZ2xvYmFsLW1hcmtldHMtdmlldy11c2EtMjAyMy0wOC0wMS_SAQA?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
    urlToImage: null,
    publishedAt: "2023-08-01T10:02:00Z",
    content:
      "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]",
  },
  {
    source: {
      id: "google-news",
      name: "Google News",
    },
    author: null,
    title: "European stocks steady after three-day selloff - Reuters",
    description: "European stocks steady after three-day selloff  Reuters",
    url: "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMiYWh0dHBzOi8vd3d3LnJldXRlcnMuY29tL21hcmtldHMvZXVyb3BlL2V1cm9wZWFuLXN0b2Nrcy1zdGVhZHktYWZ0ZXItdGhyZWUtZGF5LXNlbGxvZmYtMjAyMy0wOC0wNC_SAQA?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
    urlToImage: null,
    publishedAt: "2023-08-04T07:39:00Z",
    content:
      "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]",
  },
  {
    source: {
      id: "google-news",
      name: "Google News",
    },
    author: null,
    title:
      "European stocks rise on cooling inflation, healthcare boost - Reuters",
    description:
      "European stocks rise on cooling inflation, healthcare boost  Reuters",
    url: "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMiamh0dHBzOi8vd3d3LnJldXRlcnMuY29tL21hcmtldHMvZXVyb3BlL2V1cm9wZWFuLXNoYXJlcy1kaXAtYWhlYWQtaW5mbGF0aW9uLWRhdGEtaGVpbmVrZW4tZHJhZ3MtMjAyMy0wNy0zMS_SAQA?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
    urlToImage: null,
    publishedAt: "2023-07-31T16:29:00Z",
    content:
      "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]",
  },
  {
    source: {
      id: "google-news",
      name: "Google News",
    },
    author: null,
    title: "AMERICAS Bonds bruised, China stocks and rouble sink - Reuters",
    description:
      "AMERICAS Bonds bruised, China stocks and rouble sink  Reuters",
    url: "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMiSmh0dHBzOi8vd3d3LnJldXRlcnMuY29tL21hcmtldHMvdXMvZ2xvYmFsLW1hcmtldHMtdmlldy11c2EtcGl4LTIwMjMtMDgtMTQv0gEA?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
    urlToImage: null,
    publishedAt: "2023-08-14T10:01:00Z",
    content:
      "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]",
  },
  {
    source: {
      id: "google-news",
      name: "Google News",
    },
    author: null,
    title: "Luxury stocks, Fed rate pause bets boost European shares - Reuters",
    description:
      "Luxury stocks, Fed rate pause bets boost European shares  Reuters",
    url: "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMidmh0dHBzOi8vd3d3LnJldXRlcnMuY29tL21hcmtldHMvZXVyb3BlL2luc3VyZXJzLWx1eHVyeS1zdG9ja3MtbGlmdC1ldXJvcGVhbi1zaGFyZXMtYWhlYWQtdXMtaW5mbGF0aW9uLWRhdGEtMjAyMy0wOC0xMC_SAQA?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
    urlToImage: null,
    publishedAt: "2023-08-10T16:10:00Z",
    content:
      "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]",
  },
  {
    source: {
      id: "google-news",
      name: "Google News",
    },
    author: null,
    title: "SoftBank seen returning to profit as tech stocks gain - Reuters",
    description:
      "SoftBank seen returning to profit as tech stocks gain  Reuters",
    url: "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMiZGh0dHBzOi8vd3d3LnJldXRlcnMuY29tL2J1c2luZXNzL2ZpbmFuY2Uvc29mdGJhbmstc2Vlbi1yZXR1cm5pbmctcHJvZml0LXRlY2gtc3RvY2tzLWdhaW4tMjAyMy0wOC0wNy_SAQA?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
    urlToImage: null,
    publishedAt: "2023-08-07T00:00:18Z",
    content:
      "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]",
  },
  {
    source: {
      id: "google-news",
      name: "Google News",
    },
    author: null,
    title:
      "European stocks slip as investors await key inflation readings - Reuters",
    description:
      "European stocks slip as investors await key inflation readings  Reuters",
    url: "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMibmh0dHBzOi8vd3d3LnJldXRlcnMuY29tL21hcmtldHMvZXVyb3BlL2V1cm9wZWFuLXN0b2Nrcy1zbGlwLWludmVzdG9ycy1hd2FpdC1rZXktaW5mbGF0aW9uLXJlYWRpbmdzLTIwMjMtMDgtMDcv0gEA?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
    urlToImage: null,
    publishedAt: "2023-08-07T07:14:00Z",
    content:
      "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]",
  },
  {
    source: {
      id: null,
      name: "The Guardian",
    },
    author: "Kari Paul in Oakland",
    title:
      "Alphabet stocks rise after second-quarter profits exceed expectations",
    description:
      "The sunny report establishes a continued rebound for the tech company after a difficult 2022 and thousands of job cutsAlphabet stocks rose in after-hours trading on Tuesday after the Google parent company’s second-quarter profits exceeded Wall Street expectat…",
    url: "https://www.theguardian.com/technology/2023/jul/25/alphabet-google-q2-earnings-report-stock",
    urlToImage:
      "https://i.guim.co.uk/img/media/c6629ffd6b6b331f328010cb52820a40c3eb6d6a/0_199_6048_3627/master/6048.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=61c70f795426c95104d2ac3f06289272",
    publishedAt: "2023-07-25T21:07:44Z",
    content:
      "Alphabet stocks rose in after-hours trading on Tuesday after the Google parent companys second-quarter profits exceeded Wall Street expectations, amid a rebound in advertising dollars and the growing… [+1391 chars]",
  },
  {
    source: {
      id: "business-insider",
      name: "Business Insider",
    },
    author: "Zahra Tayeb",
    title:
      "The sizzling stock rally is under threat, and company profits could shrink as consumers feel the squeeze, JPMorgan strategist says",
    description:
      "There's room to run for stocks in the near term, but the impact of Fed policy and banking chaos could start to weigh on stocks, David Lebovitz said.",
    url: "https://markets.businessinsider.com/news/stocks/us-stock-rally-under-threat-company-profits-could-shrink-jpmorgan-2023-8",
    urlToImage:
      "https://i.insider.com/646225865cd814001883d088?width=1200&format=jpeg",
    publishedAt: "2023-08-10T09:20:18Z",
    content:
      "An American flag hangs behind traders working on the floor of the New York Stock Exchange (NYSE) on October 11, 2019 in New York City.Drew Angerer/Getty Images\r\n<ul>\n<li>2023's blistering stock rally… [+2301 chars]",
  },
  {
    source: {
      id: "google-news",
      name: "Google News",
    },
    author: null,
    title:
      "London stocks fall at open as financials drag; Ocado shines - Reuters.com",
    description:
      "London stocks fall at open as financials drag; Ocado shines  Reuters.com",
    url: "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMiYWh0dHBzOi8vd3d3LnJldXRlcnMuY29tL3dvcmxkL3VrL2xvbmRvbi1zdG9ja3MtZmFsbC1vcGVuLWZpbmFuY2lhbHMtZHJhZy1vY2Fkby1zaGluZXMtMjAyMy0wNy0yNC_SAQA?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
    urlToImage: null,
    publishedAt: "2023-07-24T07:27:00Z",
    content:
      "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]",
  },
  {
    source: {
      id: "google-news",
      name: "Google News",
    },
    author: null,
    title:
      "US distillate stocks fail to make summer recovery amid refinery outages - Reuters",
    description:
      "US distillate stocks fail to make summer recovery amid refinery outages  Reuters",
    url: "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMifGh0dHBzOi8vd3d3LnJldXRlcnMuY29tL21hcmtldHMvY29tbW9kaXRpZXMvdXMtZGlzdGlsbGF0ZS1zdG9ja3MtZmFpbC1tYWtlLXN1bW1lci1yZWNvdmVyeS1hbWlkLXJlZmluZXJ5LW91dGFnZXMtMjAyMy0wNy0yNS_SAQA?oc%3D5%26hl%3Den-CA%26gl%3DCA%26ceid%3DCA:en&gl=FR&hl=en-CA&cm=2&pc=n&src=1",
    urlToImage: null,
    publishedAt: "2023-07-25T21:25:33Z",
    content:
      "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]",
  },
  {
    source: {
      id: "google-news",
      name: "Google News",
    },
    author: null,
    title:
      "Options bets on earnings-fueled volatility in US stocks paying off - Reuters",
    description:
      "Options bets on earnings-fueled volatility in US stocks paying off  Reuters",
    url: "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMia2h0dHBzOi8vd3d3LnJldXRlcnMuY29tL21hcmtldHMvdXMvb3B0aW9ucy1iZXRzLWVhcm5pbmdzLWZ1ZWxlZC12b2xhdGlsaXR5LXVzLXN0b2Nrcy1wYXlpbmctb2ZmLTIwMjMtMDgtMDcv0gEA?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
    urlToImage: null,
    publishedAt: "2023-08-07T17:59:00Z",
    content:
      "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]",
  },
  {
    source: {
      id: "google-news",
      name: "Google News",
    },
    author: null,
    title:
      "European stocks close best week in more than three months in U.S.... - Reuters.com - OltNews",
    description:
      "European stocks close best week in more than three months in U.S.... - Reuters.com  OltNews",
    url: "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMiYGh0dHBzOi8vb2x0bmV3cy5jb20vZXVyb3BlYW4tc3RvY2tzLWNsb3NlLWJlc3Qtd2Vlay1pbi1tb3JlLXRoYW4tdGhyZWUtbW9udGhzLWluLXUtcy1yZXV0ZXJzLWNvbdIBAA?oc%3D5%26hl%3Den-CA%26gl%3DCA%26ceid%3DCA:en&gl=FR&hl=en-CA&cm=2&pc=n&src=1",
    urlToImage: null,
    publishedAt: "2023-08-13T09:49:24Z",
    content:
      "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]",
  },
  {
    source: {
      id: "google-news",
      name: "Google News",
    },
    author: null,
    title:
      "Toronto stocks hover near 2-month highs on strength in commodities - Reuters Canada",
    description:
      "Toronto stocks hover near 2-month highs on strength in commodities  Reuters Canada",
    url: "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMiZGh0dHBzOi8vd3d3LnJldXRlcnMuY29tL3dvcmxkL2FtZXJpY2FzL3RzeC1mdXR1cmVzLXN1YmR1ZWQtaW52ZXN0b3JzLWF3YWl0LWVhcm5pbmdzLWRhdGEtMjAyMy0wNy0zMS_SAQA?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
    urlToImage: null,
    publishedAt: "2023-07-31T14:49:00Z",
    content:
      "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]",
  },
  {
    source: {
      id: "google-news",
      name: "Google News",
    },
    author: null,
    title: "Cracks tick up to $31/bbl amid low US stocks - TradingView",
    description: "Cracks tick up to $31/bbl amid low US stocks  TradingView",
    url: "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMicWh0dHBzOi8vd3d3LnRyYWRpbmd2aWV3LmNvbS9uZXdzL3JldXRlcnMuY29tLDIwMjM6bmV3c21sX0w4TjM5VzUwTTowLWNyYWNrcy10aWNrLXVwLXRvLTMxLWJibC1hbWlkLWxvdy11cy1zdG9ja3Mv0gEA?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
    urlToImage: null,
    publishedAt: "2023-08-15T16:08:17Z",
    content:
      "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]",
  },
  {
    source: {
      id: "google-news",
      name: "Google News",
    },
    author: null,
    title:
      "European luxury and travel stocks gain as China lifts bans on group tours - Reuters",
    description:
      "European luxury and travel stocks gain as China lifts bans on group tours  Reuters",
    url: "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMicmh0dHBzOi8vd3d3LnJldXRlcnMuY29tL21hcmtldHMvZXVyb3BlL2V1cm9wZWFuLWx1eHVyeS10cmF2ZWwtc3RvY2tzLWdhaW4tY2hpbmEtbGlmdHMtYmFucy1ncm91cC10b3Vycy0yMDIzLTA4LTEwL9IBAA?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
    urlToImage: null,
    publishedAt: "2023-08-10T14:57:00Z",
    content:
      "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]",
  },
  {
    source: {
      id: "google-news",
      name: "Google News",
    },
    author: null,
    title: "Asia stocks slip as US CPI fails to enthuse; dollar up - Reuters",
    description:
      "Asia stocks slip as US CPI fails to enthuse; dollar up  Reuters",
    url: "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMiQ2h0dHBzOi8vd3d3LnJldXRlcnMuY29tL21hcmtldHMvZ2xvYmFsLW1hcmtldHMtd3JhcHVwLTEtMjAyMy0wOC0xMS_SAQA?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
    urlToImage: null,
    publishedAt: "2023-08-11T01:59:36Z",
    content:
      "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]",
  },
  {
    source: {
      id: "google-news",
      name: "Google News",
    },
    author: null,
    title:
      "European stocks stabilize as rate jitters weigh, pound firm lags... - Reuters.com - OltNews",
    description:
      "European stocks stabilize as rate jitters weigh, pound firm lags... - Reuters.com  OltNews",
    url: "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMiX2h0dHBzOi8vb2x0bmV3cy5jb20vZXVyb3BlYW4tc3RvY2tzLXN0YWJpbGl6ZS1hcy1yYXRlLWppdHRlcnMtd2VpZ2gtcG91bmQtZmlybS1sYWdzLXJldXRlcnMtY29t0gEA?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
    urlToImage: null,
    publishedAt: "2023-08-13T00:48:20Z",
    content:
      "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]",
  },
  {
    source: {
      id: "google-news",
      name: "Google News",
    },
    author: null,
    title:
      "European stocks slide to three-week lows as earnings, higher yields drag - Reuters",
    description:
      "European stocks slide to three-week lows as earnings, higher yields drag  Reuters",
    url: "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMiY2h0dHBzOi8vd3d3LnJldXRlcnMuY29tL21hcmtldHMvZXVyb3BlL2V1cm9wZWFuLXN0b2Nrcy1zbGlwLWVhcm5pbmdzLWhpZ2hlci15aWVsZHMtZHJhZy0yMDIzLTA4LTAzL9IBAA?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
    urlToImage: null,
    publishedAt: "2023-08-03T08:54:00Z",
    content:
      "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]",
  },
  {
    source: {
      id: "google-news",
      name: "Google News",
    },
    author: null,
    title:
      "Miners, energy firms weigh on London stocks amid China property woes - Reuters UK",
    description:
      "Miners, energy firms weigh on London stocks amid China property woes  Reuters UK",
    url: "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMiX2h0dHBzOi8vd3d3LnJldXRlcnMuY29tL3dvcmxkL3VrL2xvbmRvbi1zdG9ja3Mtb3Blbi1sb3dlci1lbmVyZ3ktZmlybXMtbWluZXJzLXdlaWdoLTIwMjMtMDgtMTQv0gEA?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
    urlToImage: null,
    publishedAt: "2023-08-14T16:11:12Z",
    content:
      "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]",
  },
  {
    source: {
      id: "google-news",
      name: "Google News",
    },
    author: null,
    title:
      "Wall St Week Ahead Hopes of 'Goldilocks' economy, rate peak buoy US stocks - Reuters",
    description:
      "Wall St Week Ahead Hopes of 'Goldilocks' economy, rate peak buoy US stocks  Reuters",
    url: "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMic2h0dHBzOi8vd3d3LnJldXRlcnMuY29tL21hcmtldHMvdXMvd2FsbC1zdC13ZWVrLWFoZWFkLWhvcGVzLWdvbGRpbG9ja3MtZWNvbm9teS1yYXRlLXBlYWstYnVveS11cy1zdG9ja3MtMjAyMy0wNy0yOC_SAQA?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
    urlToImage: null,
    publishedAt: "2023-07-29T00:57:00Z",
    content:
      "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]",
  },
  {
    source: {
      id: "google-news",
      name: "Google News",
    },
    author: null,
    title:
      "Stocks slip, yen surges on speculation of Bank of Japan policy tweak - Reuters",
    description:
      "Stocks slip, yen surges on speculation of Bank of Japan policy tweak  Reuters",
    url: "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMiQ2h0dHBzOi8vd3d3LnJldXRlcnMuY29tL21hcmtldHMvZ2xvYmFsLW1hcmtldHMtd3JhcHVwLTEtMjAyMy0wNy0yOC_SAQA?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
    urlToImage: null,
    publishedAt: "2023-07-28T00:53:43Z",
    content:
      "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]",
  },
  {
    source: {
      id: "google-news",
      name: "Google News",
    },
    author: null,
    title: "Crypto stocks dip after bitcoin slumps to six-week low - Reuters",
    description:
      "Crypto stocks dip after bitcoin slumps to six-week low  Reuters",
    url: "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMiYmh0dHBzOi8vd3d3LnJldXRlcnMuY29tL3RlY2hub2xvZ3kvY3J5cHRvLXN0b2Nrcy1kaXAtYWZ0ZXItYml0Y29pbi1zbHVtcHMtc2l4LXdlZWstbG93LTIwMjMtMDgtMDEv0gEA?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
    urlToImage: null,
    publishedAt: "2023-08-01T13:59:00Z",
    content:
      "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]",
  },
  {
    source: {
      id: "google-news",
      name: "Google News",
    },
    author: null,
    title:
      "European shares eke out gains as healthcare, telecom stocks rise - Reuters",
    description:
      "European shares eke out gains as healthcare, telecom stocks rise  Reuters",
    url: "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMib2h0dHBzOi8vd3d3LnJldXRlcnMuY29tL21hcmtldHMvZXVyb3BlL2V1cm9wZWFuLXNoYXJlcy1lYXNlLWNvbW1vZGl0eS1saW5rZWQtc3RvY2tzLWZhbGwtY2hpbmEtd29lcy0yMDIzLTA4LTE0L9IBAA?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
    urlToImage: null,
    publishedAt: "2023-08-14T08:49:00Z",
    content:
      "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]",
  },
  {
    source: {
      id: "google-news",
      name: "Google News",
    },
    author: null,
    title:
      "London stocks up, but lag broader Europe rally as ex-dividend shares weigh - Reuters",
    description:
      "London stocks up, but lag broader Europe rally as ex-dividend shares weigh  Reuters",
    url: "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMibGh0dHBzOi8vd3d3LnJldXRlcnMuY29tL3dvcmxkL3VrL2xvbmRvbi1zdG9ja3MtbGFnLWJyb2FkZXItZXVyb3BlLXJhbGx5LWV4LWRpdmlkZW5kLXNoYXJlcy13ZWlnaC0yMDIzLTA4LTEwL9IBAA?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
    urlToImage: null,
    publishedAt: "2023-08-10T09:06:00Z",
    content:
      "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]",
  },
  {
    source: {
      id: "google-news",
      name: "Google News",
    },
    author: null,
    title:
      "US bank stocks fall on prospect of tougher oversight, more downgrades - Flipboard",
    description:
      "US bank stocks fall on prospect of tougher oversight, more downgrades  Flipboard",
    url: "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMiowFodHRwczovL2ZsaXBib2FyZC5jb20vYXJ0aWNsZS91cy1iYW5rLXN0b2Nrcy1mYWxsLW9uLXByb3NwZWN0LW9mLXRvdWdoZXItb3ZlcnNpZ2h0LW1vcmUtZG93bmdyYWRlcy9hLU5wS1ZvNURaU3FhZmVPb2ZmblZpZ3clM0FhJTNBNDM1OTE4OTctM2Q3YTZhNGM5OSUyRnJldXRlcnMuY29t0gGuAWh0dHBzOi8vZmxpcGJvYXJkLmNvbS9hcnRpY2xlL3VzLWJhbmstc3RvY2tzLWZhbGwtb24tcHJvc3BlY3Qtb2YtdG91Z2hlci1vdmVyc2lnaHQtbW9yZS1kb3duZ3JhZGVzL2EtTnBLVm81RFpTcWFmZU9vZmZuVmlndyUzQWElM0E0MzU5MTg5Ny0zZDdhNmE0Yzk5JTJGcmV1dGVycy5jb20_Zm9ybWF0PWFtcA?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
    urlToImage: null,
    publishedAt: "2023-08-15T17:59:18Z",
    content:
      "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]",
  },
  {
    source: {
      id: "google-news",
      name: "Google News",
    },
    author: null,
    title:
      "U.S. bank stocks fall on Fitch downgrade warning, tougher oversight worries - Reuters",
    description:
      "U.S. bank stocks fall on Fitch downgrade warning, tougher oversight worries  Reuters",
    url: "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMiYGh0dHBzOi8vd3d3LnJldXRlcnMuY29tL21hcmtldHMvdXMvdXMtYmFuay1zdG9ja3MtZHJvcC1hZnRlci1maXRjaC1kb3duZ3JhZGUtd2FybmluZy0yMDIzLTA4LTE1L9IBAA?oc%3D5%26hl%3Den-CA%26gl%3DCA%26ceid%3DCA:en&gl=FR&hl=en-CA&cm=2&pc=n&src=1",
    urlToImage: null,
    publishedAt: "2023-08-15T14:16:00Z",
    content:
      "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]",
  },
  {
    source: {
      id: "google-news",
      name: "Google News",
    },
    author: null,
    title:
      "BAE feels less ESG aversion to defence stocks since Ukraine war - Reuters",
    description:
      "BAE feels less ESG aversion to defence stocks since Ukraine war  Reuters",
    url: "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMigQFodHRwczovL3d3dy5yZXV0ZXJzLmNvbS9idXNpbmVzcy9hZXJvc3BhY2UtZGVmZW5zZS9iYWUtY2VvLWVzZy1pbnZlc3RvcnMtbGVzcy1mcm9zdHktZGVmZW5jZS1zZWN0b3Itc2luY2UtdWtyYWluZS13YXItMjAyMy0wOC0wMi_SAQA?oc%3D5&gl=FR&hl=en&cm=2&pc=n&src=1",
    urlToImage: null,
    publishedAt: "2023-08-02T16:15:00Z",
    content:
      "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]",
  },
  {
    source: {
      id: "google-news",
      name: "Google News",
    },
    author: null,
    title:
      "Investors still see blue sky ahead for Europe travel stocks as boom abates - Reuters",
    description:
      "Investors still see blue sky ahead for Europe travel stocks as boom abates  Reuters",
    url: "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMidmh0dHBzOi8vd3d3LnJldXRlcnMuY29tL21hcmtldHMvZXVyb3BlL2ludmVzdG9ycy1zdGlsbC1zZWUtYmx1ZS1za3ktYWhlYWQtZXVyb3BlLXRyYXZlbC1zdG9ja3MtYm9vbS1hYmF0ZXMtMjAyMy0wNy0zMS_SAQA?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
    urlToImage: null,
    publishedAt: "2023-07-31T05:06:43Z",
    content:
      "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]",
  },
  {
    source: {
      id: "google-news",
      name: "Google News",
    },
    author: null,
    title:
      "European shares hold steady, Spanish stocks lag on election jitters - Reuters.com",
    description:
      "European shares hold steady, Spanish stocks lag on election jitters  Reuters.com",
    url: "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMicmh0dHBzOi8vd3d3LnJldXRlcnMuY29tL21hcmtldHMvZXVyb3BlL2V1cm9wZWFuLXN0b2Nrcy1pbmNoLWZpdmUtd2Vlay1oaWdoLXNwYWluLWxhZ3MtZWxlY3Rpb24taml0dGVycy0yMDIzLTA3LTI0L9IBAA?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
    urlToImage: null,
    publishedAt: "2023-07-24T16:14:00Z",
    content:
      "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]",
  },
  {
    source: {
      id: "google-news",
      name: "Google News",
    },
    author: null,
    title:
      "Wall St Week Ahead Inflation report, bond yields in focus as U.S. stocks rally pauses - Reuters",
    description:
      "Wall St Week Ahead Inflation report, bond yields in focus as U.S. stocks rally pauses  Reuters",
    url: "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMie2h0dHBzOi8vd3d3LnJldXRlcnMuY29tL21hcmtldHMvdXMvd2FsbC1zdC13ZWVrLWFoZWFkLWluZmxhdGlvbi1yZXBvcnQtYm9uZC15aWVsZHMtZm9jdXMtdXMtc3RvY2tzLXJhbGx5LXBhdXNlcy0yMDIzLTA4LTA0L9IBAA?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
    urlToImage: null,
    publishedAt: "2023-08-04T22:51:00Z",
    content:
      "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]",
  },
  {
    source: {
      id: "google-news",
      name: "Google News",
    },
    author: null,
    title:
      "Asian stocks hit 9-month lows on worries over China economy, US ... - Reuters",
    description:
      "Asian stocks hit 9-month lows on worries over China economy, US ...  Reuters",
    url: "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMiQ2h0dHBzOi8vd3d3LnJldXRlcnMuY29tL21hcmtldHMvZ2xvYmFsLW1hcmtldHMtd3JhcHVwLTEtMjAyMy0wOC0xNy_SAQA?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
    urlToImage: null,
    publishedAt: "2023-08-17T02:54:42Z",
    content:
      "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]",
  },
  {
    source: {
      id: "google-news",
      name: "Google News",
    },
    author: null,
    title: "Cracks hit fresh 1-yr highs on low U.S. stocks - TradingView",
    description: "Cracks hit fresh 1-yr highs on low U.S. stocks  TradingView",
    url: "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMic2h0dHBzOi8vd3d3LnRyYWRpbmd2aWV3LmNvbS9uZXdzL3JldXRlcnMuY29tLDIwMjM6bmV3c21sX0w4TjM5WDRZTjowLWNyYWNrcy1oaXQtZnJlc2gtMS15ci1oaWdocy1vbi1sb3ctdS1zLXN0b2Nrcy_SAQA?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
    urlToImage: null,
    publishedAt: "2023-08-16T16:26:23Z",
    content:
      "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]",
  },
  {
    source: {
      id: "business-insider",
      name: "Business Insider",
    },
    author: "Max Adams",
    title: "US stocks slip as traders wait for Fed meeting minutes",
    description:
      "Markets were eyeing the release of the Fed's July meeting minutes, due out at 2 p.m. ET on Wednesday.",
    url: "https://markets.businessinsider.com/news/stocks/stock-market-news-today-fed-minutes-economy-inflation-china-2023-8",
    urlToImage:
      "https://i.insider.com/64dcc7905e5d5a00195f1749?width=1200&format=jpeg",
    publishedAt: "2023-08-16T13:31:33Z",
    content:
      "Michael M. Santiago/Getty Images\r\n<ul>\n<li>US stocks were lower Wednesday morning ahead of the release of the Fed's latest meeting minutes. </li>\n<li>Inflation has been falling but is still above the… [+2483 chars]",
  },
  {
    source: {
      id: "business-insider",
      name: "Business Insider",
    },
    author: "Jennifer Sor",
    title: "US stocks falls as markets assess downbeat China data",
    description:
      "China's economic slump continues, weighing on prospects for global growth. The US 10-year Treasury jumped further above 4%.",
    url: "https://markets.businessinsider.com/news/stocks/stock-market-news-today-china-economy-news-growth-outlook-fitch-2023-8",
    urlToImage:
      "https://i.insider.com/543f7c31ecad04fd6a2a820a?width=1200&format=jpeg",
    publishedAt: "2023-08-15T13:50:56Z",
    content:
      "A trader watches the screen at his terminal on the floor of the New York Stock Exchange in New York October 15, 2014. REUTERS/Lucas Jackson\r\n<ul>\n<li>US stocks fell in early morning trading as invest… [+2720 chars]",
  },
  {
    source: {
      id: "business-insider",
      name: "Business Insider",
    },
    author: "Zahra Tayeb",
    title:
      "Apple and Meta powered the Nasdaq's sizzling rally in July, helping the tech-heavy index wrap up a 5-month winning streak",
    description:
      "Both Apple and Meta stock have surged about 37% and over 160% year-to-date as AI buzz remains alive and well.",
    url: "https://markets.businessinsider.com/news/stocks/apple-meta-nasdaq-5-month-winning-streak-tech-artificial-intelligence-2023-8",
    urlToImage:
      "https://i.insider.com/646b467a63c86a0018cd153f?width=1200&format=jpeg",
    publishedAt: "2023-08-01T15:24:36Z",
    content:
      "Apple and Meta stock have surged this year on AI buzz.(Photo by Fernando Gutierrez-Juarez/picture alliance via Getty Images)\r\n<ul>\n<li>Apple and Meta stocks have been the key drivers of the Nasdaq 10… [+1578 chars]",
  },
  {
    source: {
      id: "business-insider",
      name: "Business Insider",
    },
    author: "fdemott@insider.com (Filip De Mott)",
    title:
      "Legendary investor Jeremy Grantham's GMO is launching its first ETF",
    description:
      "The proposed ETF will be an actively managed fund investing in high quality stocks, an SEC application said.",
    url: "https://markets.businessinsider.com/news/etf/jeremy-grantham-gmo-first-etf-quality-stocks-mutual-funds-recession-2023-8",
    urlToImage:
      "https://i.insider.com/64e4ca83bd98a600197be570?width=1200&format=jpeg",
    publishedAt: "2023-08-22T16:23:54Z",
    content:
      "Jeremy Grantham's GMO is hopping into the ETF industry in a first for the $59 billion investment firm.\r\nThe proposed fund would be an actively-managed ETF with a focus on equities the company conside… [+1489 chars]",
  },
  {
    source: {
      id: "business-insider",
      name: "Business Insider",
    },
    author: "tmohamed@insider.com (Theron Mohamed)",
    title:
      "'Big Short' investor Michael Burry piled into energy and shipping stocks last quarter. A top strategist explains why.",
    description:
      "Burry likes to make contrarian, asymmetric bets, and his latest oil-and-gas and shipping wagers fit the bill, a top UBS strategist says.",
    url: "https://markets.businessinsider.com/news/stocks/why-big-short-michael-burry-energy-shipping-stocks-puts-portfolio-2023-8",
    urlToImage:
      "https://i.insider.com/6033c77238aa9f00185e02c3?width=1200&format=jpeg",
    publishedAt: "2023-08-18T09:01:38Z",
    content:
      "Michael Burry didn't just bet against the S&amp;P 500 and Nasdaq-100 last quarter, he also loaded up on energy and shipping stocks. Those purchases make perfect sense for the investor of \"The Big Sho… [+2680 chars]",
  },
  {
    source: {
      id: "business-insider",
      name: "Business Insider",
    },
    author: "Jennifer Sor",
    title:
      "Wharton professor Jeremy Siegel says the stock market is headed to new all-time highs thanks to a strong economy and resilient corporate earnings",
    description:
      '"Lower inflation and stronger economy and good guidance and good profits, what\'s to stop this market now?"',
    url: "https://markets.businessinsider.com/news/stocks/jeremy-siegel-stock-market-outlook-inflation-economy-sp500-record-rally-2023-7",
    urlToImage:
      "https://i.insider.com/639b0a3bb7e0f20018092442?width=1200&format=jpeg",
    publishedAt: "2023-07-31T16:15:05Z",
    content:
      'Jeremy SiegelREUTERS/Steve Marcus\r\n<ul>\n<li>Stocks are headed for a new record, Wharton professor Jeremy Siegel told CNBC on Friday.</li>\n<li>"Lower inflation and stronger economy and good guidance a… [+2902 chars]',
  },
  {
    source: {
      id: "business-insider",
      name: "Business Insider",
    },
    author: "prosen@insider.com (Phil Rosen)",
    title:
      "US stocks edge lower as August slump continues amid China property woes",
    description:
      "Stocks' sluggish start to the month continued, with the Nasdaq Composite coming off its first back-to-back losing weeks of the year.",
    url: "https://markets.businessinsider.com/news/stocks/stock-market-news-today-economy-fed-china-property-market-investors-2023-8",
    urlToImage:
      "https://i.insider.com/64caae1095fe1f0019df48fe?width=1200&format=jpeg",
    publishedAt: "2023-08-14T13:34:35Z",
    content:
      "US stocks dipped early Monday, after the Nasdaq Composite recorded its first back-to-back losing weeks of the year.\r\nMeanwhile, Asian markets declined Monday and shares of Chinese property giant Coun… [+463 chars]",
  },
  {
    source: {
      id: "business-insider",
      name: "Business Insider",
    },
    author: "madams@businessinsider.com (Max Adams)",
    title:
      "US stocks rise after CPI shows inflation came in cooler than expected in July",
    description:
      "Inflation in July was higher than June but still lower than what was expected, with markets still eyeing a Fed pause on rate hikes next month.",
    url: "https://markets.businessinsider.com/news/stocks/stock-market-news-today-inflation-reoort-july-cpi-fed-markets-2023-8",
    urlToImage:
      "https://i.insider.com/64d4d6124dd2b50019c2aef4?width=1200&format=jpeg",
    publishedAt: "2023-08-10T13:35:12Z",
    content:
      "US stocks jumped on Thursday as July Consumer Price Index data showed inflation rose last month at a slower rate than economists were predicting. \r\nInflation rose 3.2% on an annualized basis in July.… [+1445 chars]",
  },
  {
    source: {
      id: "business-insider",
      name: "Business Insider",
    },
    author: "fdemott@insider.com (Filip De Mott)",
    title:
      "US stocks rise as tech sector leads rally amid high hopes for Nvidia earnings",
    description:
      "Stocks looked to break out of the August slump as investors gear up for Nvidia earnings and the Federal Reserve's Jackson Hole summit.",
    url: "https://markets.businessinsider.com/news/stocks/stock-market-news-today-tech-sectorsrally-nvidia-ai-earnings-2023-8",
    urlToImage:
      "https://i.insider.com/64e4b6e5b698ac0019df0159?width=1200&format=jpeg",
    publishedAt: "2023-08-22T13:38:51Z",
    content:
      "US stocks were mostly higher Tuesday, extending gains sparked by expectations around upcoming earnings reports and the Federal Reserve's Jackson Hole meeting.\r\nFollowing a three week sell-off, market… [+1181 chars]",
  },
  {
    source: {
      id: "business-insider",
      name: "Business Insider",
    },
    author: "Matthew Fox",
    title:
      "4 reasons why investors should buy stocks now ahead of Nvidia earnings and Powell's Jackson Hole speech",
    description:
      '"Our analysis suggests there is a greater than 80% [chance] equities rally post-Friday," Fundstrat\'s Tom Lee said.',
    url: "https://markets.businessinsider.com/news/stocks/stock-market-outlook-buy-stocks-powell-jackson-hole-nvidia-earnings-2023-8",
    urlToImage:
      "https://i.insider.com/630622c2c2794d00197f4cfe?width=1200&format=jpeg",
    publishedAt: "2023-08-23T14:19:58Z",
    content:
      "Federal Reserve policymakers including chairman Jerome Powell meet in Jackson Hole this week.Amber Baesler/AP Photo\r\n<ul>\n<li>Investors should buy stocks ahead of Nvidia's earnings report and Fed Cha… [+3707 chars]",
  },
  {
    source: {
      id: "business-insider",
      name: "Business Insider",
    },
    author: "Zahra Tayeb",
    title:
      "Short sellers have lost more than $175 billion betting against US stocks as Nvidia, Tesla, and Meta defy doomsayers",
    description:
      "Betting against stocks including Nvidia, Meta, and Tesla has been the least profitable trade for investors this year thanks to an AI boom.",
    url: "https://markets.businessinsider.com/news/stocks/short-sellers-lose-175-billion-us-stocks-nvidia-meta-rally-2023-8",
    urlToImage:
      "https://i.insider.com/6348425ff900fa001814c580?width=1200&format=jpeg",
    publishedAt: "2023-08-09T09:55:05Z",
    content:
      "(Photo by Scott Heins/Getty Images)\r\n<ul>\n<li>Short sellers suffered losses of more than $170 billion betting against US stocks this year. </li>\n<li>US equities surged throughout 2023 as investor fre… [+1705 chars]",
  },
  {
    source: {
      id: "business-insider",
      name: "Business Insider",
    },
    author: "Theron Mohamed",
    title:
      "The AI-fueled hype around tech stocks has eclipsed the dot-com bubble - and a brutal sell-off may lie ahead, Bill Smead says",
    description:
      "The passive-investing boom and lax regulation have led to Big Tech companies growing dangerously large and dominating the stock market, Smead said.",
    url: "https://markets.businessinsider.com/news/stocks/smead-ai-big-tech-stock-market-outlook-dot-com-bubble-2023-8",
    urlToImage:
      "https://i.insider.com/64e48a2eb698ac0019dee3be?width=1200&format=jpeg",
    publishedAt: "2023-08-22T11:07:40Z",
    content:
      "Bill Smead.Smead Capital Management\r\n<ul>\n<li>The AI-fueled mania around tech stocks is more extreme than the dot-com bubble, Bill Smead says.</li>\n<li>The fund manager says the passive-investing boo… [+2539 chars]",
  },
  {
    source: {
      id: "business-insider",
      name: "Business Insider",
    },
    author: "Jennifer Sor",
    title:
      "The market's FOMO-driven rally is unsustainable and most AI stocks are still bottoming, CIO says",
    description:
      '"We tell investors who have a case of FOMO that only a small part of the train has left the station, as most stocks are still bottoming."',
    url: "https://markets.businessinsider.com/news/stocks/stock-market-outlook-fomo-rally-ai-artificial-intelligence-investing-bottoming-2023-7",
    urlToImage:
      "https://i.insider.com/64be8ed4bea34400195fe3bc?width=1200&format=jpeg",
    publishedAt: "2023-07-24T15:03:54Z",
    content:
      "Yuichiro Chino/Getty Images\r\n<ul>\n<li>The stock market's red-hot rally has mostly been driven by fear of missing out, Main Street Research said.</li>\n<li>The firm pointed to record-low stock market v… [+2559 chars]",
  },
  {
    source: {
      id: "business-insider",
      name: "Business Insider",
    },
    author: "Theron Mohamed",
    title:
      "Stocks are pricing in an AI revolution, putting investors at risk of disappointment, Bill Gross says",
    description:
      'Billionaire investor and "Bond King" Bill Gross says AI may need to supercharge US productivity growth to justify the high price of stocks today.',
    url: "https://markets.businessinsider.com/news/stocks/stock-market-outlook-economy-ai-tech-interest-rates-bill-gross-2023-8",
    urlToImage:
      "https://i.insider.com/634013c62095d500187cf75d?width=1200&format=jpeg",
    publishedAt: "2023-08-23T12:52:01Z",
    content:
      "Bill Gross.YouTube / PIMCO\r\n<ul>\n<li>The stock market has surged this year as investors bet big on an artificial-intelligence revolution.</li>\n<li>AI may have to boost US productivity growth to justi… [+2580 chars]",
  },
  {
    source: {
      id: "business-insider",
      name: "Business Insider",
    },
    author: "Theron Mohamed",
    title:
      "Brace for stocks and home prices to drop — and the US economy's 'trampoline landing' to end next year, strategist warns",
    description:
      "StoneX's Vincent Deluard sees investors swapping stocks for bonds, reluctant sellers eventually listing their homes, and the economic rebound fading.",
    url: "https://markets.businessinsider.com/news/stocks/stock-market-outlook-house-prices-deluard-stonex-economy-trampoline-landing-2023-8",
    urlToImage:
      "https://i.insider.com/64d4c8c94dd2b50019c2a6c1?width=1200&format=jpeg",
    publishedAt: "2023-08-10T12:15:17Z",
    content:
      "Vincent Deluard, the director of global macro strategy at StoneX Group.Vincent Deluard/Real Vision\r\n<ul>\n<li>Stocks and home prices are poised to drop and the US economy is set to cool, Vincent Delua… [+1981 chars]",
  },
  {
    source: {
      id: "business-insider",
      name: "Business Insider",
    },
    author: "George Glover",
    title:
      "China hints at bringing in a stimulus package to support its faltering economy",
    description:
      'The yuan and Chinese-listed stocks both rallied on after the politburo acknowledged economic "difficulties and challenges".',
    url: "https://www.businessinsider.com/china-economy-recession-growth-stimulus-package-inflation-xi-jinping-politburo-2023-7",
    urlToImage:
      "https://i.insider.com/64bf9bd8ed4f46001962cfb5?width=1200&format=jpeg",
    publishedAt: "2023-07-25T10:37:10Z",
    content:
      "China's politburo said late Monday that it would bring in a stimulus package to support the country's faltering economy.Tingshu Wang/Reuters\r\n<ul>\n<li>China's top leaders said late Monday that they'd… [+2474 chars]",
  },
  {
    source: {
      id: "business-insider",
      name: "Business Insider",
    },
    author: "prosen@insider.com (Phil Rosen)",
    title:
      "Why JPMorgan's trading desk says a new record high in the S&P 500 'feels inevitable'",
    description:
      "Analysts at JPMorgan predict that the huge amount of money waiting on the sidelines makes any technical correction unlikely.",
    url: "https://markets.businessinsider.com/news/stocks/stock-market-outlook-jpmorgan-traders-analysts-economy-rally-equities-inflation-2023-8",
    urlToImage:
      "https://i.insider.com/64c9544acf0778001968d36d?width=1200&format=jpeg",
    publishedAt: "2023-08-01T20:31:42Z",
    content:
      "The S&amp;P 500 has already had a blistering first half of 2023, and there's reason to believe a new record high might just be all but guaranteed at this point. \r\nAnalysts from the bank's trading des… [+3009 chars]",
  },
  {
    source: {
      id: "business-insider",
      name: "Business Insider",
    },
    author: "Theron Mohamed",
    title:
      "'Bond King' Bill Gross warns stocks are dangerously overvalued — and predicts an economic slump",
    description:
      "Stocks look overpriced relative to corporate profits and risk-free assets like government bonds, and higher interest rates will bite, Gross said.",
    url: "https://markets.businessinsider.com/news/stocks/stock-market-outlook-bond-king-bill-gross-economy-recession-rates-2023-8",
    urlToImage:
      "https://i.insider.com/560295139dd7cc1c008bc67e?width=1200&format=jpeg",
    publishedAt: "2023-08-14T11:06:17Z",
    content:
      "Bill Gross.REUTERS/Jason Reed\r\n<ul>\n<li>Bill Gross says stocks and long-dated bonds are overpriced and the US economy will slump.</li>\n<li>Stocks are too pricey relative to risk-free assets and compa… [+2513 chars]",
  },
  {
    source: {
      id: "business-insider",
      name: "Business Insider",
    },
    author: "George Glover",
    title:
      "Don't worry about stocks with the Fed closing in on its dream no-recession scenario, Goldman Sachs says",
    description:
      'There\'s just a 20% chance of a recession with the Fed near to its ideal "soft landing" scenario, Goldman Sachs chief economist Jan Hatzius said.',
    url: "https://markets.businessinsider.com/news/stocks/stock-market-outlook-recession-federal-reserve-soft-landing-goldman-sachs-2023-8",
    urlToImage:
      "https://i.insider.com/64db4acc1f51cc001969a67f?width=1200&format=jpeg",
    publishedAt: "2023-08-15T11:34:49Z",
    content:
      "Stocks have slipped lower in August after starting 2023 with a breakneck rally.Mario Tama/Getty Images\r\n<ul>\n<li>Stocks have given up some of their gains in August, after starting 2023 on a tear.</li… [+2222 chars]",
  },
  {
    source: {
      id: "business-insider",
      name: "Business Insider",
    },
    author: "Jason Ma",
    title: "US stocks fall to begin new month after big rally in July",
    description:
      "Later on Tuesday, the Labor Department will release job openings data, and ISM will publish its manufacturing activity index.",
    url: "https://markets.businessinsider.com/news/stocks/stock-market-news-today-dow-sp500-nasdaq-august-july-rally-2023-8",
    urlToImage:
      "https://i.insider.com/64676d4dcd3a9c001918519b?width=1200&format=jpeg",
    publishedAt: "2023-08-01T13:35:07Z",
    content:
      "y agTraders work on the floor of the New York Stock Exchange.Michael M. Santiago/Getty Images\r\n<ul>\n<li>US stocks dropped Tuesday, starting off a new month lower after July's big rally.</li>\n<li>Dow … [+2058 chars]",
  },
  {
    source: {
      id: "business-insider",
      name: "Business Insider",
    },
    author: "Jennifer Sor",
    title:
      "Stocks could see a sharp sell-off as the possibility of resurgent inflation threatens the FOMO-fueled rally, Wells Fargo says",
    description:
      "Wells Fargo said the sectors that have driven this year's rally are at risk of a sharp pullback if inflation stops falling or starts rising again.",
    url: "https://markets.businessinsider.com/news/stocks/stock-market-outlook-inflation-rebound-rally-bull-market-wells-fargo-2023-8",
    urlToImage:
      "https://i.insider.com/62d1951cb0ab4f001853ea5a?width=1200&format=jpeg",
    publishedAt: "2023-08-03T15:38:17Z",
    content:
      "Bear stock market\r\n<ul>\n<li>Investors shouldn't chase the current FOMO-fueled rally in stocks, Wells Fargo warned.</li>\n<li>That's because the economy risks rebounding inflation, which could easily w… [+1854 chars]",
  },
  {
    source: {
      id: "business-insider",
      name: "Business Insider",
    },
    author: "Theron Mohamed",
    title:
      "Stocks may crumble under the weight of inflation, interest-rate hikes and economic woes, one strategist says",
    description:
      "Hedgeye CEO Keith McCullough sees inflation rebounding to 3.5%, and potentially a couple more interest-rate hikes by November.",
    url: "https://markets.businessinsider.com/news/stocks/stock-market-outlook-crash-hedgeye-mccullough-inflation-recession-fed-hike-2023-8",
    urlToImage:
      "https://i.insider.com/64db4acc1f51cc001969a67f?width=1200&format=jpeg",
    publishedAt: "2023-08-22T14:06:11Z",
    content:
      "Traders.Mario Tama/Getty Images\r\n<ul>\n<li>Stubborn inflation, sluggish growth, and further rate hikes may tank stocks, one strategist says.</li>\n<li>Hedgeye's Keith McCullough says strong momentum an… [+2058 chars]",
  },
  {
    source: {
      id: "business-insider",
      name: "Business Insider",
    },
    author: "Matthew Fox",
    title:
      "Meme-stocks make a comeback after Tupperware and bankrupt Yellow see shares jump more than 800%",
    description:
      "Both rallies have occurred on little fundamental news, and instead appear to have been partly driven by a short-squeeze.",
    url: "https://markets.businessinsider.com/news/stocks/meme-stocks-rally-tupperware-yellow-stock-price-bankruptcy-filings-riteaid-2023-8",
    urlToImage:
      "https://i.insider.com/64cbc42d0f3dff0019564657?width=1200&format=jpeg",
    publishedAt: "2023-08-03T15:35:31Z",
    content:
      "Scott Olson/Getty Images\r\n<ul><li>Meme-stocks are making a comeback as investors send shares of troubled companies higher.</li><li>Tupperware and Yellow have both seen their share prices surge by mor… [+2181 chars]",
  },
  {
    source: {
      id: "business-insider",
      name: "Business Insider",
    },
    author: "Jennifer Sor",
    title:
      "US stocks fall as bond yields jump and investors await Apple, Amazon earnings",
    description:
      "Apple and Amazon stock traded mostly flat as investors waited for the mega-cap tech firms to release second-quarter results.",
    url: "https://markets.businessinsider.com/news/stocks/stock-market-news-today-apple-amazon-earnings-price-bond-yields-2023-8",
    urlToImage:
      "https://i.insider.com/5e8f5b15c0232051c357299d?width=1200&format=jpeg",
    publishedAt: "2023-08-03T20:03:10Z",
    content:
      "Lucas Jackson/Reuters\r\n<ul>\n<li>US stocks closed lower on Thursday as investors awaited for Apple and Amazon earnings to roll out.</li>\n<li>The 10-year Treasury surged 11 basis points, continuing its… [+2563 chars]",
  },
  {
    source: {
      id: "business-insider",
      name: "Business Insider",
    },
    author: "Filip De Mott",
    title: "US stocks trade mixed as the Fed begins its 2-day policy meeting",
    description:
      "Tuesday marks the start of the Fed's FOMC meeting for July, while investors can also look forward to earnings reports from Microsoft and Alphabet.",
    url: "https://markets.businessinsider.com/news/stocks/stock-market-news-today-equities-fed-fomc-earnings-soft-landing-2023-7",
    urlToImage:
      "https://i.insider.com/64bfcb6ded4f46001962f648?width=1200&format=jpeg",
    publishedAt: "2023-07-25T13:36:13Z",
    content:
      "US Federal Reserve Chair Jerome Powell attends a press conference in Washington, DC, on March 22, 2023.Liu Jie/Xinhua via Getty Images\r\n\n<ul>\n<li>US stocks were mixed on Tuesday as the Fed kicked off… [+2557 chars]",
  },
  {
    source: {
      id: "business-insider",
      name: "Business Insider",
    },
    author: "Phil Rosen",
    title:
      "US stocks climb as the Dow heads for longest winning streak in 126 years",
    description:
      "The Dow was looking to hold onto a historic winning streak as markets digest the latest Fed moves and higher-than-expected GDP growth.",
    url: "https://markets.businessinsider.com/news/stocks/stock-market-news-today-dow-winning-streak-gdp-fed-inflation-2023-7",
    urlToImage:
      "https://i.insider.com/5fb28114402d49001924f12a?width=1200&format=jpeg",
    publishedAt: "2023-07-27T13:34:35Z",
    content:
      "Traders work on the floor at the New York Stock Exchange (NYSE) in New York, U.S., March 2, 2020.Brendan McDermid/Reuters\r\n<ul>\n<li>US stocks climbed Thursday, with the Dow on pace for a 14-day winni… [+2413 chars]",
  },
  {
    source: {
      id: "business-insider",
      name: "Business Insider",
    },
    author: "George Glover",
    title:
      "Rising interest rates could re-emerge as a threat to stocks, Bank of America says",
    description:
      "It might be time for investors to start worrying about rising interest rates again, Bank of America analysts warned in a note to clients Tuesday.",
    url: "https://markets.businessinsider.com/news/stocks/stock-market-outlook-recession-interest-rates-bonds-bank-of-america-2023-8",
    urlToImage:
      "https://i.insider.com/64d25bf87d2e900019463a81?width=1200&format=jpeg",
    publishedAt: "2023-08-08T15:16:20Z",
    content:
      "High interest rates could be about to weigh on stocks again, Bank of America warned in a note to clients Tuesday.Getty Images\r\n<ul>\n<li>Stocks plunged last year as the Fed started raising interest ra… [+2302 chars]",
  },
  {
    source: {
      id: "business-insider",
      name: "Business Insider",
    },
    author: "Filip De Mott",
    title:
      "US stocks fall after erasing earlier gains as Apple sells off on earnings",
    description:
      "For the week, the Dow lost 1%, the S&P 500 fell 2.3%, and the Nasdaq dropped 2.8%.",
    url: "https://markets.businessinsider.com/news/stocks/stock-market-news-today-apple-amazon-q2-earnings-jobs-report-2023-8",
    urlToImage:
      "https://i.insider.com/64cd491ef5d4870019e2046b?width=1200&format=jpeg",
    publishedAt: "2023-08-04T20:12:51Z",
    content:
      "Spencer Platt/Getty Images\r\n<ul>\n<li>US stocks finished lower after reversing earlier gains as Apple dragged down indexes.</li>\n<li>Apple stock tumbled 4.8% as quarterly revenue continued to drop.  <… [+1806 chars]",
  },
  {
    source: {
      id: "business-insider",
      name: "Business Insider",
    },
    author: "Jennifer Sor",
    title:
      "US stocks extend sell-off as bond yields jump following Fitch downgrade of US credit rating",
    description:
      "Investors are waiting for financials from Apple and Amazon, which are set to report earnings after the closing bell.",
    url: "https://markets.businessinsider.com/news/stocks/stock-market-news-today-fitch-us-credit-downgrade-bond-yields-2023-8",
    urlToImage:
      "https://i.insider.com/5fa2a0e31df1d50018218c5c?width=1200&format=jpeg",
    publishedAt: "2023-08-03T13:46:46Z",
    content:
      "Don Emmert /AFP/GettyImages\r\n<ul>\n<li>US stocks continued to slide Thursday following Fitch's US credit downgrade.</li>\n<li>The hit to America's credit rating also caused bond yields to jump.</li>\n<l… [+2384 chars]",
  },
  {
    source: {
      id: "business-insider",
      name: "Business Insider",
    },
    author: "Matthew Fox",
    title:
      "Investors should bet on risky stocks as the market enters early-cycle phase of expansion",
    description:
      '"Real wage growth is positive again for the first time in two years. Discretionary has historically been the biggest beneficiary of real wage growth."',
    url: "https://markets.businessinsider.com/news/stocks/stock-market-outlook-early-cycle-expansion-buy-risky-consumer-discretionary-2023-8",
    urlToImage:
      "https://i.insider.com/648cb3e951ea980019d6b1e7?width=1200&format=jpeg",
    publishedAt: "2023-08-14T18:45:19Z",
    content:
      "Drew Angerer / Getty\r\n<ul>\n<li>Investors should buy risky stocks as the market shows signs of entering the early cycle of an expansion, said Bank of America.</li>\n<li>The bank double-upgraded consume… [+3823 chars]",
  },
  {
    source: {
      id: "business-insider",
      name: "Business Insider",
    },
    author: "Phil Rosen",
    title:
      "US stocks rise as investors try to shake off August slump ahead of retail data",
    description:
      "Tech led the market higher, with the Nasdaq up more than 1% after last Friday marked its first run of back-to-back weekly losses in 2023.",
    url: "https://markets.businessinsider.com/news/stocks/stock-market-news-today-indexes-traders-banks-wall-street-housing-2023-8",
    urlToImage:
      "https://i.insider.com/64da740f5e5d5a00195db4ef?width=1200&format=jpeg",
    publishedAt: "2023-08-14T20:09:22Z",
    content:
      "NYSE\r\n<ul>\n<li>US stocks ended higher as traders try to reinvigorate a rally that's stalled in August.</li>\n<li>The Nasdaq Composite was up over 1% after coming off back-to-back losing weeks for the … [+2872 chars]",
  },
  {
    source: {
      id: "business-insider",
      name: "Business Insider",
    },
    author: "Filip De Mott",
    title:
      "US stocks trade mixed after giving up early gains as tech-led rally fizzles",
    description:
      "Investors are bracing for Nvidia's earnings report on Wednesday, while the Federal Reserve's upcoming Jackson Hole symposium may provide some upside.",
    url: "https://markets.businessinsider.com/news/stocks/stock-market-news-today-nvda-nvidia-tech-rally-federal-reserve2023-8",
    urlToImage:
      "https://i.insider.com/64e510fa912f290019a90b8b?width=1200&format=jpeg",
    publishedAt: "2023-08-22T20:16:07Z",
    content:
      "Jen-Hsun Huang, CEO of Nvidia Corp., gives a keynote presentation during the GPU Technology Conference in San Jose, California. Huang later unveiled the Titan X CPU operating with a GeForce GTX Titan… [+2897 chars]",
  },
  {
    source: {
      id: "business-insider",
      name: "Business Insider",
    },
    author: "Matthew Fox",
    title:
      "US stocks rise as investors turn attention to upcoming inflation data",
    description:
      "For the Federal Reserve to cut interest rates, inflation would have to be decisively on track to near the central bank's long-term 2% target.",
    url: "https://markets.businessinsider.com/news/stocks/stock-market-news-today-july-cpi-inflation-data-interest-rates-2023-8",
    urlToImage:
      "https://i.insider.com/64caae27ce6977001984c24c?width=1200&format=jpeg",
    publishedAt: "2023-08-07T13:49:26Z",
    content:
      ": Traders work on the floor of the New York Stock Exchange (NYSE) on June 01, 2023 in New York City. Despite the passing the debt ceiling bill in the U.S. House of Representatives, the Dow was lower … [+2724 chars]",
  },
  {
    source: {
      id: "business-insider",
      name: "Business Insider",
    },
    author: "Max Adams",
    title:
      "US stocks whipsaw but close higher as Wall Street mulls Fed outlook after July CPI",
    description:
      "Stocks initially rallied hard after CPI data was published Thursday morning, but had given up most of those gains by the afternoon.",
    url: "https://markets.businessinsider.com/news/stocks/stock-market-news-today-july-cpi-inflation-dow-sp500-economy-2023-8",
    urlToImage:
      "https://i.insider.com/64d53e737e9149001aa4462c?width=1200&format=jpeg",
    publishedAt: "2023-08-10T20:03:47Z",
    content:
      "Photo by Michael Nagle/Xinhua via Getty Images)\r\n<ul>\n<li>US stocks closed higher Thursday but gave up their biggest gains as traders assess July CPI data. </li>\n<li>Inflation last month came in at 3… [+2565 chars]",
  },
  {
    source: {
      id: "business-insider",
      name: "Business Insider",
    },
    author: "Phil Rosen",
    title:
      "Dow snaps historic win streak as US stocks fall amid more earnings results",
    description:
      "After 13 consecutive days in the green, the Dow Jones Industrial Average dropped more than 200 points on Thursday.",
    url: "https://markets.businessinsider.com/news/stocks/stock-market-news-today-dow-win-streak-ends-fed-gdp-2023-7",
    urlToImage:
      "https://i.insider.com/64c2c48acf0778001965b121?width=1200&format=jpeg",
    publishedAt: "2023-07-27T20:05:38Z",
    content:
      "Timothy A. Clary/Getty Images\r\n<ul>\n<li>US stocks fell as the Dow Jones Industrial Average snapped its 13-day streak on Thursday.</li>\n<li>Treasury yields shot up after second-quarter GDP growth beat… [+2375 chars]",
  },
  {
    source: {
      id: "business-insider",
      name: "Business Insider",
    },
    author: "Matthew Fox",
    title:
      "US stocks finish the week mostly lower as July inflation data comes in mixed",
    description:
      "Wholesale prices for July edged up more than anticipated, muddling the outlook for when the Fed may declare victory over inflation.",
    url: "https://markets.businessinsider.com/news/stocks/stock-market-news-today-mixed-inflation-data-sends-stocks-lower-2023-8",
    urlToImage:
      "https://i.insider.com/5f732c1e0ab50d00184aced9?width=1200&format=jpeg",
    publishedAt: "2023-08-11T20:03:55Z",
    content:
      "Lucas Jackson/Reuters\r\n<ul><li>US stocks finished the week mostly lower as investors digest mixed inflation data.</li><li>While the July CPI report came in lower than expected, the producer price ind… [+2639 chars]",
  },
  {
    source: {
      id: "business-insider",
      name: "Business Insider",
    },
    author: "Jason Ma",
    title: "US stocks trade mixed amid earnings rush and fresh economic data",
    description:
      "The number of job openings in June dropped by more than expected, according to data from the Labor Department.",
    url: "https://markets.businessinsider.com/news/stocks/stock-market-news-today-dow-sp500-nasdaq-earnings-jolts-ism-2023-8",
    urlToImage:
      "https://i.insider.com/64c950f0048ff200190f39de?width=1200&format=jpeg",
    publishedAt: "2023-08-01T20:07:34Z",
    content:
      "Gen Z is putting more stock into careers in finance, with one in four recent graduates considering the field a top career sector.Photo by ANGELA WEISS/AFP via Getty Images\r\n<ul>\n<li>US stocks finishe… [+2032 chars]",
  },
  {
    source: {
      id: "business-insider",
      name: "Business Insider",
    },
    author: "Phil Rosen",
    title:
      "US stocks fall as Dow sheds nearly 350 points after Fitch credit-rating downgrade",
    description:
      "Fitch pointed to a deterioration of US governance and suspect management of fiscal and debt matters, though some experts have shrugged it off.",
    url: "https://markets.businessinsider.com/news/stocks/stock-market-news-today-dow-fitch-downgrade-fed-debt-credit-2023-8",
    urlToImage:
      "https://i.insider.com/64caae27ce6977001984c24c?width=1200&format=jpeg",
    publishedAt: "2023-08-02T20:06:18Z",
    content:
      ": Traders work on the floor of the New York Stock Exchange (NYSE) on June 01, 2023 in New York City. Despite the passing the debt ceiling bill in the U.S. House of Representatives, the Dow was lower … [+2490 chars]",
  },
  {
    source: {
      id: "business-insider",
      name: "Business Insider",
    },
    author: "Jennifer Sor",
    title:
      "Stocks are in a 'slow-motion meltup' as investors realize the bull market isn't a fluke",
    description:
      'The S&P 500 is "solidly in bull market territory," DataTrek co-founder Nicholas Colas said in a note.',
    url: "https://markets.businessinsider.com/news/stocks/stock-market-outlook-bull-market-rally-meltup-recession-us-economy-2023-8",
    urlToImage:
      "https://i.insider.com/6400d66476a35b0018480c6c?width=1200&format=jpeg",
    publishedAt: "2023-08-02T13:28:07Z",
    content:
      'Drew Angerer / Getty\r\n<ul>\n<li>Stocks are in a "slow-motion" meltup, according to DataTrek co-founder Nicholas Colas.</li>\n<li>That\'s because investors are slowly buying into the bull market as they … [+2214 chars]',
  },
  {
    source: {
      id: "business-insider",
      name: "Business Insider",
    },
    author: "Jason Ma",
    title:
      "US stocks tumble as 10-year yield keeps climbing to hit highest since 2007",
    description:
      "Stock market indexes gave up early gains to finish lower, with the Dow notching its third consecutive decline.",
    url: "https://markets.businessinsider.com/news/stocks/stock-market-news-today-10-year-yield-highest-2007-dow-2023-8",
    urlToImage:
      "https://i.insider.com/64de77aabd98a6001978718e?width=1200&format=jpeg",
    publishedAt: "2023-08-17T20:05:00Z",
    content:
      "Angela Weiss/AFP via Getty Images\r\n<ul>\n<li>US stocks tumbled Thursday as the 10-year Treasury yield kept climbing and hit the highest level since 2007.</li>\n<li>Measured on a daily basis, using a si… [+2056 chars]",
  },
  {
    source: {
      id: "business-insider",
      name: "Business Insider",
    },
    author: "Matthew Fox",
    title:
      "Tech stocks just flashed a 'sell' signal ahead of Nvidia's big earnings report",
    description:
      "Fairlead Strategies ultimately sees the current weakness in stocks as a buying opportunity after long-term momentum moved to the upside.",
    url: "https://markets.businessinsider.com/news/stocks/stock-market-outlook-tech-stocks-just-flashed-sell-signal-nvidia-2023-8",
    urlToImage:
      "https://i.insider.com/64e3824dbd98a600197aed41?width=1200&format=jpeg",
    publishedAt: "2023-08-21T16:28:33Z",
    content:
      '(Photo by Michael Nagle/Xinhua via Getty Images)\r\n<ul><li>The Nasdaq 100 just flashed a technical "sell" signal ahead of Nvidia\'s big earnings report, according to Fairlead Strategies. </li><li>The s… [+2746 chars]',
  },
  {
    source: {
      id: "business-insider",
      name: "Business Insider",
    },
    author: "Filip De Mott",
    title:
      "US stocks rise as investors look to close out strong month of gains",
    description:
      "All three of the major US indices rose at least 3% in July, amid cooling inflation and a strong earnings season.",
    url: "https://markets.businessinsider.com/news/stocks/stock-market-news-today-dow-jones-sp500-nasdaq-july-gains-2023-7",
    urlToImage:
      "https://i.insider.com/64c7b2cccf077800196784b0?width=1200&format=jpeg",
    publishedAt: "2023-07-31T13:36:12Z",
    content:
      "A trader works on the floor of the New York Stock Exchange during the afternoon of December 4, 2015 in New York City.Andrew Burton/Getty Images\r\n<ul>\n<li>US stocks traded higher early Monday as inves… [+1969 chars]",
  },
  {
    source: {
      id: "business-insider",
      name: "Business Insider",
    },
    author: "Jennifer Sor",
    title:
      "US stocks rise ahead of big tech earnings and the Fed's next rate move",
    description:
      "Investors are expecting the Fed to issue its last interest rate hike this week as inflation continues to cool off in the economy.",
    url: "https://markets.businessinsider.com/news/stocks/stock-market-news-today-faang-tech-earnings-fed-rate-hike-2023-7",
    urlToImage:
      "https://i.insider.com/5ebbeb49fc593d69cc5af19b?width=1200&format=jpeg",
    publishedAt: "2023-07-24T13:35:42Z",
    content:
      "An American flag hangs behind traders working on the floor of the New York Stock Exchange (NYSE) on October 11, 2019 in New York City.Drew Angerer/Getty Images\r\n<ul>\n<li>Stocks moved higher on Monday… [+2675 chars]",
  },
  {
    source: {
      id: "business-insider",
      name: "Business Insider",
    },
    author: "Filip De Mott",
    title:
      "US stocks rise as investors digest mega-cap earnings and jobs report",
    description:
      "The Labor Department's payroll report came in weaker than expected on Friday, with 187,000 new jobs created in July.",
    url: "https://markets.businessinsider.com/news/stocks/stock-market-news-today-dow-apple-amazon-earnings-jobs-report-2023-8",
    urlToImage:
      "https://i.insider.com/64ccf34c0b651c00193ace02?width=1200&format=jpeg",
    publishedAt: "2023-08-04T13:32:02Z",
    content:
      "Stock tradersDrew Angerer/Getty Images\r\n<ul>\n<li>US stocks rose as investors weighed Apple and Amazon earnings as well as payroll data.</li>\n<li>The US jobs report came in weaker than expected on Fri… [+1912 chars]",
  },
  {
    source: {
      id: "business-insider",
      name: "Business Insider",
    },
    author: "Phil Rosen",
    title:
      "US stocks trade mixed as the Dow caps off its worst week since March",
    description:
      "The S&P 500 and Nasdaq Composite both notched their third consecutive week of declines.",
    url: "https://markets.businessinsider.com/news/stocks/stock-market-news-today-dow-china-fed-deflation-bonds-bankruptcy-2023-8",
    urlToImage:
      "https://i.insider.com/64dfbe81b698ac0019dcc01e?width=1200&format=jpeg",
    publishedAt: "2023-08-18T20:07:00Z",
    content:
      "Traders work on the floor of the New York Stock Exchange shortly after the opening bell in New York, U.S., February 6, 2020.Lucas Jackson/Reuters\r\n<ul>\n<li>US stocks finished mixed on Friday, with th… [+2428 chars]",
  },
  {
    source: {
      id: "business-insider",
      name: "Business Insider",
    },
    author: "Phil Rosen",
    title:
      "US stocks drop as bank shares slide after Moody's downgrades 10 firms",
    description:
      "The ratings giant slashed the ratings for 10 lenders and also put a handful of other banks on watch for a potential downgrade.",
    url: "https://markets.businessinsider.com/news/stocks/stock-market-news-today-dow-banks-moodys-downgrades-ratings-finance-2023-8",
    urlToImage:
      "https://i.insider.com/64d240e320f1cf0019cce8bf?width=1200&format=jpeg",
    publishedAt: "2023-08-08T13:50:38Z",
    content:
      "Mario Tama/Getty Images\r\n<ul>\n<li>US stocks dropped Tuesday, and the Dow lost more than 260 points at the open.</li>\n<li> Moody's downgraded 10 US banks and also put other firms on downgrade watch.</… [+2392 chars]",
  },
  {
    source: {
      id: "business-insider",
      name: "Business Insider",
    },
    author: "Joseph Wilkins",
    title:
      "Hedge fund Vantage Point is slashing its exposure to US stocks and seeking value in China",
    description:
      "US stocks have enjoyed strong year-to-date gains as the economy defied recession predictions. But the trend may be on its last legs, according one hedge fund that's slashed its net exposure.",
    url: "https://markets.businessinsider.com/news/stocks/stock-market-outlook-hedge-fund-us-hard-landing-value-china-2023-8",
    urlToImage:
      "https://i.insider.com/64dce6455e5d5a00195f38e0?width=1200&format=jpeg",
    publishedAt: "2023-08-17T12:05:01Z",
    content:
      "Singapore.Taro Hama @ e-kamakura/Getty Images\r\n<ul>\n<li>The stock market has enjoyed strong year-to-date gains as the economy defied widespread recession predictions.</li>\n<li>But the upbeat trend ma… [+2575 chars]",
  },
  {
    source: {
      id: "business-insider",
      name: "Business Insider",
    },
    author: "Zahra Tayeb",
    title:
      "A long-time market bear who called the 2000 and 2008 crashes warns the S&P 500 could plummet 64%, bursting a historic bubble",
    description:
      'The next big selloff in US stocks could see for the collapse of the "most extreme yield-seeking speculative bubble in U.S. history," according to John Hussman.',
    url: "https://markets.businessinsider.com/news/stocks/stock-market-crash-sp-500-risks-64-percent-selloff-hussman-2023-7",
    urlToImage:
      "https://i.insider.com/649ece42fd8a3e0019121329?width=1200&format=jpeg",
    publishedAt: "2023-07-25T12:45:46Z",
    content:
      "(Photo by Mario Tama/Getty Images)\r\n<ul>\n<li>Asset-bubble expert John Hussman has issued another dire warning: the S&P 500 could crash 64% from current levels.</li>\n<li>The famously bearish investor … [+2647 chars]",
  },
  {
    source: {
      id: "business-insider",
      name: "Business Insider",
    },
    author: "Theron Mohamed",
    title:
      "Warren Buffett is struggling to find bargains, Berkshire Hathaway's 2nd-quarter earnings show",
    description:
      "Buffett's company sold a net $8 billion of stocks and only spent $1.4 billion on buybacks last quarter, meaning its cash pile swelled to $147 billion.",
    url: "https://markets.businessinsider.com/news/stocks/warren-buffett-bargains-stock-portfolio-buybacks-berkshire-hathaway-q2-earnings-2023-8",
    urlToImage:
      "https://i.insider.com/6412e2275f4f54001919d7a0?width=1200&format=jpeg",
    publishedAt: "2023-08-05T13:16:55Z",
    content:
      "Warren BuffettRick Wilking/Reuters\r\n<ul>\n<li>Warren Buffett found few bargains in the second quarter, Berkshire Hathaway's earnings show.</li>\n<li>The investor's company sold a net $8 billion of stoc… [+2372 chars]",
  },
  {
    source: {
      id: "business-insider",
      name: "Business Insider",
    },
    author: "Zahra Tayeb",
    title:
      "The extreme bubble in stocks 'will end in tears' with the S&P 500 plunging 64%, a long-time bear who called the 2000, 2008 crashes has warned. Here are his 6 best quotes.",
    description:
      'The asset-bubble expert and president of Hussman Investment Trust forecasts a frightening collapse in stocks, saying the current rally will "end in tears."',
    url: "https://markets.businessinsider.com/news/stocks/stock-market-crash-sp-500-64-percent-john-hussman-bubble-2023-7",
    urlToImage:
      "https://i.insider.com/64c3b0ba048ff200190c99cf?width=1200&format=jpeg",
    publishedAt: "2023-07-28T15:43:25Z",
    content:
      '(Photo by DANIEL LUNA/AFP via Getty Image\r\n<ul>\n<li>John Hussman, an asset-bubble expert, forecasts the ongoing rally in US stocks will "end in tears." </li>\n<li>The S&P 500 risks a 64% collapse give… [+2838 chars]',
  },
  {
    source: {
      id: "business-insider",
      name: "Business Insider",
    },
    author: "Filip De Mott",
    title:
      "The S&P 500 is moving on from its Big Tech fixation, but that could mean smaller 3rd-quarter gains",
    description:
      "Big Tech stocks once made up most of the S&P 500's gains, but now account for only 6%, according to DataTrek Research.",
    url: "https://markets.businessinsider.com/news/stocks/stock-market-outlook-sp500-big-tech-bull-market-q3-earnings-2023-7",
    urlToImage:
      "https://i.insider.com/64be802fed4f46001961cef5?width=1200&format=jpeg",
    publishedAt: "2023-07-24T13:52:57Z",
    content:
      "Pietro Recchia/SOPA Images/LightRocket via Getty Images\r\n<ul>\n<li>Big Tech is contributing less to the S&P 500's gains, DataTrek Research noted.</li>\n<li>In the third quarter so far, those stocks acc… [+2042 chars]",
  },
  {
    source: {
      id: "business-insider",
      name: "Business Insider",
    },
    author: "Jason Ma",
    title:
      "The world's biggest stock investor says if you don't see opportunities in AI, then you are a 'complete moron'",
    description:
      "Norway's sovereign wealth fund made $143 billion in the first half of the year, helped by top US tech stocks like Nvidia, Microsoft, and Apple.",
    url: "https://markets.businessinsider.com/news/funds/ai-investing-artificial-intelligence-stocks-norway-sovereign-wealth-fund-nvidia-2023-8",
    urlToImage:
      "https://i.insider.com/64d4e13b48a88f001968b063?width=1200&format=jpeg",
    publishedAt: "2023-08-16T15:26:31Z",
    content:
      "NurPhoto/Getty Images\r\n<ul>\n<li>\"If you don't think there are opportunities with AI, then in my mind you are a complete moron.\"</li>\n<li>That comes from the head of Norway's sovereign wealth fund, wh… [+1974 chars]",
  },
  {
    source: {
      id: "business-insider",
      name: "Business Insider",
    },
    author: "Theron Mohamed",
    title:
      "'Big Short' investor Michael Burry's new bets against the S&P 500 and Nasdaq-100 are no surprise. Here's why.",
    description:
      "Michael Burry has repeatedly sounded the alarm on stocks, and warned the passive-investing boom could lead to a worse disaster than the dot-com crash.",
    url: "https://markets.businessinsider.com/news/stocks/big-short-michael-burry-spx-nasdaq-put-options-index-funds-2023-8",
    urlToImage:
      "https://i.insider.com/6467751ccd3a9c00191852c6?width=1200&format=jpeg",
    publishedAt: "2023-08-16T08:41:31Z",
    content:
      'Michael Burry.Jim Spellman/Getty Images\r\n<ul>\n<li>Michael Burry bet against two ETFs that track the S&P 500 and Nasdaq-100 last quarter.</li>\n<li>The "Big Short" investor held bearish put options on … [+2780 chars]',
  },
  {
    source: {
      id: "business-insider",
      name: "Business Insider",
    },
    author: "Jennifer Sor",
    title:
      "Stocks are approaching a perfect buy-the-dip opportunity as the S&P 500 faces August rout, Fundstrat says",
    description:
      "Fundstrat's Tom Lee is one of the most bullish stock forecasters on Wall Street, with his S&P 500 target set to take the benchmark index 10% higher.",
    url: "https://markets.businessinsider.com/news/stocks/stock-market-outlook-sp500-prediction-selloff-buy-the-dip-fundstrat-2023-8",
    urlToImage:
      "https://i.insider.com/5f0dd65b3f73702332465bf6?width=1200&format=jpeg",
    publishedAt: "2023-08-18T13:58:11Z",
    content:
      "Reuters / Lucas Jackson\r\n<ul>\n<li>The August sell-off in stocks is the perfect buy-the-dip opportunity, Fundstrat said. </li>\n<li>Markets will remained jittery over rising interest rates through the … [+2908 chars]",
  },
  {
    source: {
      id: "business-insider",
      name: "Business Insider",
    },
    author: "Theron Mohamed",
    title:
      "The stock market's fear gauge just hit a 42-month low. Investors are ignoring a load of risks, hedge fund manager says.",
    description:
      "Investors expect the least volatility in stocks since January 2020. They're overlooking dangers like a recession and supply woes, Boaz Weinstein says.",
    url: "https://markets.businessinsider.com/news/stocks/stock-market-outlook-vix-weinstein-saba-inflation-recession-russia-ukraine-2023-7",
    urlToImage:
      "https://i.insider.com/644a56a89052390019701e24?width=1200&format=jpeg",
    publishedAt: "2023-07-31T10:50:14Z",
    content:
      "Boaz Weinstein.Reuters / Richard Brian\r\n<ul>\n<li>Wall Street's \"fear gauge\" registered its lowest weekly close since January 2020 on Friday.</li>\n<li>Boaz Weinstein questioned investors' confidence g… [+2360 chars]",
  },
  {
    source: {
      id: "business-insider",
      name: "Business Insider",
    },
    author: "Theron Mohamed",
    title:
      "'Wizard of Wharton' predicts stocks will hit record highs - and sees only a 30% chance of recession",
    description:
      "Jeremy Siegel likes the Fed's balanced approach, and says the strong US economy is good news for stocks and cuts the risk of a recession.",
    url: "https://markets.businessinsider.com/news/stocks/stock-market-outlook-forecast-jeremy-siegel-wharton-recession-fed-economy-2023-8",
    urlToImage:
      "https://i.insider.com/639c8710b7e0f20018095561?width=1200&format=jpeg",
    publishedAt: "2023-08-01T10:57:59Z",
    content:
      'Jeremy Siegel.Scott Mlyn/CNBC/NBCU Photo Bank/NBCUniversal via Getty Images\r\n<ul>\n<li>Jeremy Siegel expects stocks to hit fresh highs, and sees only a 30% chance of a recession.</li>\n<li>The "Wizard … [+2765 chars]',
  },
  {
    source: {
      id: "business-insider",
      name: "Business Insider",
    },
    author: "Matthew Fox",
    title:
      "These are the top 10 holdings of the Mormon Church's $49 billion stock portfolio",
    description:
      "The Church of Jesus Christ of Latter-day Saints' has an investment portfolio topping $100 billion that includes $49.3 billion invested in stocks.",
    url: "https://markets.businessinsider.com/news/stocks/mormon-church-49-billion-stock-portfolio-top-holdings-ensign-peak-2023-8",
    urlToImage:
      "https://i.insider.com/64da75355e5d5a00195db68e?width=1200&format=jpeg",
    publishedAt: "2023-08-14T19:54:20Z",
    content:
      "Getty Images\r\n<ul><li>The $100 billion investment arm of the Mormon Church revealed some of its holdings in a 13F filing on Monday.</li><li>The church has amassed a portfolio of individual stocks wor… [+3234 chars]",
  },
  {
    source: {
      id: "business-insider",
      name: "Business Insider",
    },
    author: "Jason Ma",
    title: "Foreign investors are giving up on China as capital flows reverse",
    description:
      "Global investors have resumed dumping Chinese stocks and bonds after Beijing's pledges to boost the economy briefly lifted hopes for a rebound.",
    url: "https://markets.businessinsider.com/news/stocks/china-economy-foreign-investors-capital-flows-chinese-stocks-bonds-yuan-2023-8",
    urlToImage:
      "https://i.insider.com/64de5f4fb698ac0019db78fa?width=1200&format=jpeg",
    publishedAt: "2023-08-17T19:03:38Z",
    content:
      "A Chinese flag flying over Shanghai.Liu Liqun/Getty Images\r\n<ul>\n<li>Foreign investors are giving up on China as the country's post-COVID rebound fizzles.</li>\n<li>They resumed dumping Chinese stocks… [+3357 chars]",
  },
  {
    source: {
      id: "business-insider",
      name: "Business Insider",
    },
    author: "Theron Mohamed",
    title:
      "A 'Black Swan' investor warns of an epic debt bubble - and says stocks are overvalued and set to plunge",
    description:
      "Universa's Mark Spitznagel says stocks are at dangerous highs, blasts the Fed, and advises retail investors to follow Warren Buffett's advice.",
    url: "https://markets.businessinsider.com/news/stocks/black-swan-spitznagel-universa-credit-bubble-stock-market-outlook-crash-2023-8",
    urlToImage:
      "https://i.insider.com/5e9ef3615bd7a55b8d3be824?width=1200&format=jpeg",
    publishedAt: "2023-08-07T11:09:19Z",
    content:
      "Mark Spitznagel.Universa Investments\r\n<ul>\n<li>Mark Spitznagel flagged a huge credit bubble, slammed the Fed, and endorsed Warren Buffett's advice.</li>\n<li>The Universa Investments boss warned stock… [+2726 chars]",
  },
];

function sortArticlesWithPic(articlesArr) {
  let newArticlesList = [];
  let noPicList = [];

  articlesArr.forEach((article) => {
    if (article.urlToImage != null) {
      newArticlesList.push(article);
    } else {
      noPicList.push(article);
    }
  });
  newArticlesList = [...newArticlesList, ...noPicList];
  return newArticlesList;
}

console.log(sortArticlesWithPic(articles));
