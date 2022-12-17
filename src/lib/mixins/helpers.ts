/**
 * Returns a web measurement correspondance of javascript number
 *
 * @internal
 */
export function measurementUnit(value: unknown) {
  if (typeof value === 'undefined' || value === null) {
    return '';
  }
  if (typeof value === 'string' && Number.isNaN(value as any)) {
    return `${value}`;
  }
  return `${value}px`;
}
