import getLocationHref from './location';
import getUrlHash from './url';

const component = (() => {
  const element = document.createElement('div');
  const href = getLocationHref();
  const hash = getUrlHash(href);
  element.innerHTML = hash;
  return element;
})();

document.body.appendChild(component);
