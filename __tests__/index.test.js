const { share, read } = require('../index');

test('[Basic] compress and decompress state', () => {
  const state = { page: 1, filters: { category: 'books' }, sort: 'asc' };
  const queryParam = share(state);
  const decompressedState = read(queryParam);

  expect(decompressedState).toEqual(state);
});

test('[Negative Share] should throw an error when non-object is provided to share', () => {
  const nonObjectValues = [
      null,
      undefined,
      123,
      "string",
      true,
      false,
      [1, 2, 3],
      Symbol('symbol'),
      function() {}
  ];

  nonObjectValues.forEach(value => {
      expect(() => share(value)).toThrow('[QueryKey] Input must be a non-null object.');
  });
});

test('[Negative Read] should throw an error when non-string is provided to read', () => {
  const nonStringValues = [
      null,
      undefined,
      123,
      true,
      false,
      [1, 2, 3],
      Symbol('symbol'),
      function() {},
      {}  // empty object
  ];

  nonStringValues.forEach(value => {
    expect(() => read(value)).toThrow('[QueryKey] Query parameter must be a string.');
  });
});

