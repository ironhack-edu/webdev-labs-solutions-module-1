const contacts = [
  {
    name: "Arnold Schwarzenegger",
    pictureUrl: "https://image.tmdb.org/t/p/w500/sOkCXc9xuSr6v7mdAq9LwEBje68.jpg",
    popularity: 18.216362,
    wonOscar: false,
  },
  {
    name: "Monica Bellucci",
    pictureUrl:
      "https://image.tmdb.org/t/p/w500/qlT4904d8oi2NIs28RrgnIZDFZB.jpg",
    popularity: 16.096436,
    wonOscar: false,
  },
  {
    name: "Idris Elba",
    pictureUrl:
      "https://image.tmdb.org/t/p/w500/d9NkfCwczP0TjgrjpF94jF67SK8.jpg",
    popularity: 11.622713,
    wonOscar: false,
  },  
  {
    name: "Gal Gadot",
    pictureUrl:
      "https://image.tmdb.org/t/p/w500/34kHAyBaBhq2kUrmhM15paEBuuI.jpg",
    popularity: 10.049256,
    wonOscar: false,
  },  
  {
    name: "Ben Affleck",
    pictureUrl:
      "https://image.tmdb.org/t/p/w500/cPuPt6mYJ83DjvO3hbjNGug6Fbi.jpg",
    popularity: 9.157077,
    wonOscar: true,
  },
  {
    name: "Ana de Armas",
    pictureUrl:
      "https://image.tmdb.org/t/p/w500/nwS5UfMT0XUA6JEPwmt0jbNDa7B.jpg",
    popularity: 11.039487,
    wonOscar: false,
  },  
  {
    name: "Johnny Depp",
    pictureUrl:
      "https://image.tmdb.org/t/p/w500/kbWValANhZI8rbWZXximXuMN4UN.jpg",
    popularity: 15.656534,
    wonOscar: false,
  },
  {
    name: "Ian McKellen",
    pictureUrl:
      "https://image.tmdb.org/t/p/w500/coWjgMEYJjk2OrNddlXCBm8EIr3.jpg",
    popularity: 10.070132,
    wonOscar: false,
  },
  {
    name: "Matt Damon",
    pictureUrl:
      "https://image.tmdb.org/t/p/w500/elSlNgV8xVifsbHpFsqrPGxJToZ.jpg",
    popularity: 9.500475,
    wonOscar: true,
  },
  {
    name: "David Harbour",
    pictureUrl:
      "https://image.tmdb.org/t/p/w500/chPekukMF5SNnW6b22NbYPqAStr.jpg",
    popularity: 9.47013,
    wonOscar: false,
  },
  {
    name: "Ansel Elgort",
    pictureUrl:
      "https://image.tmdb.org/t/p/w500/uQYUfGvOZkB5x25Z19UeyLABHmr.jpg",
    popularity: 9.429994,
    wonOscar: false,
  },
  {
    name: "Maria Bello",
    pictureUrl:
      "https://image.tmdb.org/t/p/w500/tFkbad0JoWvYc6XYBITv6EfeLwR.jpg",
    popularity: 9.209649,
    wonOscar: false,
  },
  {
    name: "Ryan Reynolds",
    pictureUrl:
      "https://image.tmdb.org/t/p/w500/h1co81QaT2nJA41Sb7eZwmWl1L2.jpg",
    popularity: 9.457546,
    wonOscar: false,
  },
  {
    name: "Lauren Cohan",
    pictureUrl:
      "https://image.tmdb.org/t/p/w500/ygzDi7DIY6fHHxAcxvS7Z5kMFHe.jpg",
    popularity: 9.191322,
    wonOscar: false,
  },
  {
    name: "Dwayne Johnson",
    pictureUrl:
      "https://image.tmdb.org/t/p/w500/kuqFzlYMc2IrsOyPznMd1FroeGq.jpg",
    popularity: 9.236478,
    wonOscar: false,
  },
  {
    name: "James McAvoy",
    pictureUrl:
      "https://image.tmdb.org/t/p/w500/oPIfGm3mf4lbmO5pWwMvfTt5BM1.jpg",
    popularity: 9.098376,
    wonOscar: false,
  },
  {
    name: "Robin Wright",
    pictureUrl:
      "https://image.tmdb.org/t/p/w500/cke0NNZP4lHRtOethRy2XGSOp3E.jpg",
    popularity: 8.802542,
    wonOscar: false,
  },
  {
    name: "Hugh Jackman",
    pictureUrl:
      "https://image.tmdb.org/t/p/w500/oOqun0BhA1rLXOi7Q1WdvXAkmW.jpg",
    popularity: 8.58347,
    wonOscar: false,
  },
  {
    name: "Sam Page",
    pictureUrl:
      "https://image.tmdb.org/t/p/w500/hCe4MEgugU33IdvDtDkJ6E5siqx.jpg",
    popularity: 8.42623,
    wonOscar: false,
  },
  {
    name: "Robert Pattinson",
    pictureUrl:
      "https://image.tmdb.org/t/p/w500/wNcm8RiMYlWvneAkqQepkqI6r7L.jpg",
    popularity: 8.428432,
    wonOscar: false,
  },
  {
    name: "Henry Cavill",
    pictureUrl:
      "https://image.tmdb.org/t/p/w500/h8bn6ybR5Hu58UGJGwb66nrOagV.jpg",
    popularity: 34.132372,
    wonOscar: false,
  },
  {
    name: "Chris Hemsworth",
    pictureUrl:
      "https://image.tmdb.org/t/p/w500/tlkDiLn2G75Xr7m1ybK8QFzZBso.jpg",
    popularity: 56.23257,
    wonOscar: false,
  },

  {
    name: "Jennifer Lawrence",
    pictureUrl:
      "https://image.tmdb.org/t/p/w500/q0tf3XEo7wa8XglIznTC7WzZ9W3.jpg",
    popularity: 19.560912,
    wonOscar: true,
  },
  {
    name: "Chris Evans",
    pictureUrl:
      "https://image.tmdb.org/t/p/w500/8CgFKCZJVwZxa1F88n8drEux0vT.jpg",
    popularity: 10.536705,
    wonOscar: false,
  },
  {
    name: "Robert Downey Jr.",
    pictureUrl:
      "https://image.tmdb.org/t/p/w500/1YjdSym1jTG7xjHSI0yGGWEsw5i.jpg",
    popularity: 11.182626,
    wonOscar: false,
  },
  {
    name: "Tom Hardy",
    pictureUrl:
      "https://image.tmdb.org/t/p/w500/4W8v3fX0viPRmwRtS0SfLJW8fkd.jpg",
    popularity: 10.572327,
    wonOscar: false,
  },
  {
    name: "Mark Ruffalo",
    pictureUrl:
      "https://image.tmdb.org/t/p/w500/zdM6RgCR5LpZwnL8UA3m7CfVpiq.jpg",
    popularity: 10.378788,
    wonOscar: false,
  },
  {
    name: "Steve Carell",
    pictureUrl:
      "https://image.tmdb.org/t/p/w500/fF9txPQCmHJSTYypJfA3ZzTH9Zr.jpg",
    popularity: 10.227521,
    wonOscar: false,
  },
  {
    name: "Shu Qi",
    pictureUrl:
      "https://image.tmdb.org/t/p/w500/kmTErFq6lKQww2Yk9AfpR2Q5YWx.jpg",
    popularity: 10.445066,
    wonOscar: false,
  },
  {
    name: "Olga Kurylenko",
    pictureUrl:
      "https://image.tmdb.org/t/p/w500/v9HmONHtTZM4Sl9QSNpxDYvuMCk.jpg",
    popularity: 10.286325,
    wonOscar: false,
  },
  {
    name: "Anthony Hopkins",
    pictureUrl:
      "https://image.tmdb.org/t/p/w500/jdoBTIru71FbPuHGEgox5RVmIO0.jpg",
    popularity: 10.273801,
    wonOscar: true,
  },
  {
    name: "John Goodman",
    pictureUrl:
      "https://image.tmdb.org/t/p/w500/eOIx8zj1vYIRhVY2bK5cjIQfua0.jpg",
    popularity: 7.914248,
    wonOscar: false,
  },
  {
    name: "Angelina Jolie",
    pictureUrl:
      "https://image.tmdb.org/t/p/w500/nsxtg9MQG01hvud1vVEW9vvfukK.jpg",
    popularity: 7.875641,
    wonOscar: true,
  },
  {
    name: "Kaya Scodelario",
    pictureUrl:
      "https://image.tmdb.org/t/p/w500/iTrPnn7oS96k0iWPzNxaKCNutB6.jpg",
    popularity: 7.82401,
    wonOscar: false,
  },
  {
    name: "Katee Sackhoff",
    pictureUrl:
      "https://image.tmdb.org/t/p/w500/lVtYSDuIxSaAsd2jW0qKvDTltVi.jpg",
    popularity: 7.725615,
    wonOscar: false,
  },
  {
    name: "Daniel Gillies",
    pictureUrl:
      "https://image.tmdb.org/t/p/w500/zasTOfb8TNyVGwRfb4jNdHnsZ2m.jpg",
    popularity: 7.859381,
    wonOscar: false,
  },
  {
    name: "Elijah Wood",
    pictureUrl:
      "https://image.tmdb.org/t/p/w500/hHzLAVspGGuPg1KW5JAEsyRvnUT.jpg",
    popularity: 7.7395,
    wonOscar: false,
  },
  {
    name: "Colin Firth",
    pictureUrl:
      "https://image.tmdb.org/t/p/w500/lKUq407IhFF6CQoJbUgbEyfS9JA.jpg",
    popularity: 7.994861,
    wonOscar: true,
  },
  {
    name: "Michael Keaton",
    pictureUrl:
      "https://image.tmdb.org/t/p/w500/baeHNv3qrVsnApuKbZXiJOhqMnw.jpg",
    popularity: 8.011631,
    wonOscar: false,
  },
  {
    name: "Garth Jennings",
    pictureUrl:
      "https://image.tmdb.org/t/p/w500/zl6ZWijGySSIYJRFalleAiGkxyQ.jpg",
    popularity: 7.450652,
    wonOscar: false,
  },
  {
    name: "Elle Fanning",
    pictureUrl:
      "https://image.tmdb.org/t/p/w500/cbFVl9NWREa0xD2vW9Z3J4ursiu.jpg",
    popularity: 7.474528,
    wonOscar: false,
  },
  {
    name: "Miki Takakura",
    pictureUrl:
      "https://image.tmdb.org/t/p/w500/2bXHWy82SzgMCFIuxVRKvDtw8Q6.jpg",
    popularity: 7.563937,
    wonOscar: false,
  },
  {
    name: "Jake Gyllenhaal",
    pictureUrl:
      "https://image.tmdb.org/t/p/w500/1dHiMQsqiIAF9zhGvB0oJOIaM16.jpg",
    popularity: 7.177807,
    wonOscar: false,
  },
  {
    name: "Brendan Fraser",
    pictureUrl:
      "https://image.tmdb.org/t/p/w500/n8VOWXp94nhIEo5nS9o6bOpUHiN.jpg",
    popularity: 7.188894,
    wonOscar: false,
  },
  {
    name: "Tessa Thompson",
    pictureUrl:
      "https://image.tmdb.org/t/p/w500/fycqdiiM6dsNSbnONBVVQ57ILV1.jpg",
    popularity: 7.090946,
    wonOscar: false,
  },
  {
    name: "Lee Chae-dam",
    pictureUrl:
      "https://image.tmdb.org/t/p/w500/lJ2ryu3XGVyP7WESkL3pTigeg8j.jpg",
    popularity: 14.042809,
    wonOscar: false,
  },
  {
    name: "Tom Hanks",
    pictureUrl:
      "https://image.tmdb.org/t/p/w500/pQFoyx7rp09CJTAb932F2g8Nlho.jpg",
    popularity: 13.978997,
    wonOscar: true,
  },
  {
    name: "Cara Delevingne",
    pictureUrl:
      "https://image.tmdb.org/t/p/w500/lEIFRIR8EohwOVe7PQu4zvIl850.jpg",
    popularity: 13.272943,
    wonOscar: false,
  },
  {
    name: "Rose Byrne",
    pictureUrl:
      "https://image.tmdb.org/t/p/w500/laJdQNmsuR2iblYUggEqr49LvwJ.jpg",
    popularity: 13.094365,
    wonOscar: false,
  },
  {
    name: "Keanu Reeves",
    pictureUrl:
      "https://image.tmdb.org/t/p/w500/1wpzvf5PaQ1AZjl5rPNjWQobLLP.jpg",
    popularity: 12.267253,
    wonOscar: false,
  },
  {
    name: "Ron Howard",
    pictureUrl:
      "https://image.tmdb.org/t/p/w500/qdtdnNLSsaXZmpwOqXuQB3xU2uL.jpg",
    popularity: 6.984089,
    wonOscar: true,
  },
  {
    name: "Orlando Bloom",
    pictureUrl:
      "https://image.tmdb.org/t/p/w500/6JmscW0HXS10420mzdgjKXfWdkX.jpg",
    popularity: 6.955899,
    wonOscar: false,
  },
];
