import test from 'ava';
import getLocation from '../src/location';

test('getLocation should return ???', t => {
  const actual = getLocation();
  const expected = '???';
  t.is(expected, actual);
});
