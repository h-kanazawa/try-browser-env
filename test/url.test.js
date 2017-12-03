import test from 'ava';
import getUrlHash from '../src/url';

test('getUrlHash should return the hash of the input URL', t => {
  const actual = getUrlHash('http://example.com/path/to?key=value#xyz');
  const expected = '#xyz';
  t.is(expected, actual);
});
