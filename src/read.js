const pako = require('pako');

function read(queryKey) {
  const compressed = Buffer.from(decodeURIComponent(queryKey), 'base64');
  const jsonString = pako.inflate(compressed, { to: 'string' });
  
  return JSON.parse(jsonString);
}

module.exports = read;