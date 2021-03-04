const { untrack } = require('./untrack');

test('strips Google UTM params from a URL', () => {
  const url = 'https://vimeo.com/519429318/f4827353ce?utm_campaign=04%2F03%20Dome%20Update%20%28RhBWZ7%29&utm_medium=email&utm_source=Dome%20Enquiries';
  const result = untrack(url);

  expect(result).toBe('https://vimeo.com/519429318/f4827353ce');
});

test('strips Facebook click ID params from a URL', () => {
  const url = 'https://vimeo.com/519429318/f4827353ce?fbclid=123456789';
  const result = untrack(url);

  expect(result).toBe('https://vimeo.com/519429318/f4827353ce');
});

test('strips Instagram share ID params from a URL', () => {
  const url = 'https://vimeo.com/519429318/f4827353ce?igshid=123456789';
  const result = untrack(url);

  expect(result).toBe('https://vimeo.com/519429318/f4827353ce');
});
