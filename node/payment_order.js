var request = require('request');

request({
  method: 'GET',
  url: 'https://localhost:8080/api/v1/payments/{orderId}/status',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Authorization': '',
    'Request-ID': '',
    'Correlation-ID': '',
    'Process-ID': '',
    'PSU–IP-Address': '',
    'PSU-Device-OS': '',
    'PSU-User-Agent': '',
    'PSU-Geo-Location': '',
    'PSU-Last-Logged-Time': ''
  }}, function (error, response, body) {
  console.log('Status:', response.statusCode);
  console.log('Headers:', JSON.stringify(response.headers));
  console.log('Response:', body);
});