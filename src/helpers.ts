/**
 * Returns a web measurement correspondance of javascript number
 * 
 * @internal
 */
export function measurementUnit(value: unknown) {
  if (typeof value === 'undefined' || value === null) {
    return '';
  }
  if (
    String(value).indexOf('rem') !== -1 ||
    String(value).indexOf('px') !== -1 ||
    String(value).indexOf('em') !== -1
  ) {
    return `${value}`;
  }
  return `${value}px`;
}
