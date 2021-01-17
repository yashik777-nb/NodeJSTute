const http = require("http");

const url = `http://api.weatherstack.com/current?access_key=e154567cd956719efad68b335652cf85&query=40,-75`;

const request = http.request(url, (response) => {
  let data = "";
  response.on("data", (chunk) => {
    data += chunk.toString();
  });

  response.on("end", () => {
    const body = JSON.parse(data);
    console.log(body);
  });
});

request.on("error", (error) => {
  console.log(error);
});

request.end();
