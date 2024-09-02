const { share, read } = require('../index');

test('compress and decompress state', () => {
  const state = { page: 1, filters: { category: 'books' }, sort: 'asc' };
  const queryParam = share(state);
  const decompressedState = read(queryParam);

  expect(decompressedState).toEqual(state);
});

