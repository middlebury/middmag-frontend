const buildSrcSet = sizes => {
  if (!sizes) return;

  const prefix = 'https://via.placeholder.com/';

  const last = sizes[sizes.length - 1];
  const src = prefix + last;

  let width;

  const srcset = sizes.map(size => {
    width = size.split('x')[0];

    return `${prefix}${size} ${width}w`;
  });

  return {
    src,
    srcset,
    width
  };
};

const getResponsiveImageStyles = img => {
  const { src, srcset, width } = buildSrcSet(img.srcset);
  
  const sizes = img.sizes
    ? img.sizes
    : `(max-width: ${width}px) 100vw, ${width}px)`;

  const attrs = {
    src
  };

  if (srcset.length > 1) {
    attrs.srcset = srcset.join(',');
    attrs.sizes = sizes;
  }

  return attrs;
};

module.exports = [
  {
    name: 'getResponsiveImage',
    func: getResponsiveImageStyles
  },
  {
    name: 'exists',
    func: (value, args) => {
      if (!value) {
        console.log(args);
        throw new Error('value is falsy');
      }

      return value;
    }
  }
];
