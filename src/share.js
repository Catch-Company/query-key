const pako = require('pako');

function share(state) {
  const jsonString = JSON.stringify(state);
  const compressed = pako.deflate(jsonString, { to: 'string' });

  return encodeURIComponent(Buffer.from(compressed).toString('base64'));
}

module.exports = share;