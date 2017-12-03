import test from 'ava';
import browserEnv from 'browser-env';
import getLocationHref from '../src/location';

// The 2nd argument of browserEnv is the same with JSDOM.
// See: https://github.com/tmpvar/jsdom
browserEnv(['location'], { url: 'http://example.com/path/to?key=value#xyz' });

test('getLocationHref should return location.href', t => {
  const actual = getLocationHref();
  const expected = 'http://example.com/path/to?key=value#xyz';
  t.is(expected, actual);
  t.is(location.href, actual);
});
