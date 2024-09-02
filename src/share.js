const pako = require('pako');

function share(state) {
  if (typeof state !== 'object' || state === null  || Array.isArray(state)) {
    throw new Error('[QueryKey] Input must be a non-null object.');
  }

  const jsonString = JSON.stringify(state);
  const compressed = pako.deflate(jsonString, { to: 'string' });
  
  const encoded = encodeURIComponent(Buffer.from(compressed).toString('base64'));
  
  return encoded;
}

module.exports = share;