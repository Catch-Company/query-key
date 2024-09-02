const pako = require('pako');

function read(queryKey) {
  if (typeof queryKey !== 'string') {
    throw new Error('[QueryKey] Query parameter must be a string.');
  }

  const compressed = Buffer.from(decodeURIComponent(queryKey), 'base64');
  const jsonString = pako.inflate(compressed, { to: 'string' });

  return JSON.parse(jsonString);
}

module.exports = read;