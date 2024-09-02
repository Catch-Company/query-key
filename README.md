# query-key

`query-key` is a lightweight JavaScript library that compresses and decompresses JSON objects representing page states into URL-safe query parameters. This allows you to store complex state information in a URL, making it easy to share or bookmark specific states of your web application.

## Features

- **Compression**: Converts JSON objects into compressed, URL-safe strings.
- **Decompression**: Restores the original JSON object from a compressed query parameter.
- **Simple API**: Easy-to-use methods for compressing and decompressing state.

## Installation

You can install the `query-key` library using npm:

```bash
npm install query-key
```

## Usage

### Build a string to share the state (Compressing)

Use the share method to compress a JSON object into a query parameter string.

```javascript
  const { share } = require('query-key');

  const state = { page: 1, filters: { category: 'books' }, sort: 'asc' };
  const queryParam = share(state);

  console.log(queryParam);  // Example: "eJyrVkrLz1eyUkpKLFbSUXJOTc1RslIw0cQCAACt6g=="
```

### Parse a string to an object state

Use the read method to decompress a query parameter string back into the original JSON object.

```javascript
  const { read } = require('query-key');

  const decompressedState = read(queryParam);

  console.log(decompressedState);  // { page: 1, filters: { category: 'books' }, sort: 'asc' }
```
