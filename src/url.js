const getUrlHash = href => {
  return new URL(href).hash;
};

export { getUrlHash as default };
