export const assetPath = (relativePath = '') => {
  const base = process.env.PUBLIC_URL || '';
  if (!relativePath) {
    return base;
  }
  const normalized = relativePath.startsWith('/') ? relativePath : `/${relativePath}`;
  return `${base}${normalized}`;
};
