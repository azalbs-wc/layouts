import {PartInfo, PartType} from 'lit/directive.js';

export function expectRuntimeAttribute(type: string, attributes: string[]) {
  throw new Error(
    `The \`${type}\` must be used in the \`${attributes.join(', ')}\` attribute
        and must be the only part in the attribute.`
  );
}

export function runtimeCheckStylePartInfo(
  part: PartInfo,
  directive: string,
  attribute: string
) {
  if (
    part.type !== PartType.ATTRIBUTE ||
    part.name !== 'style' ||
    (part.strings?.length as number) > 2
  ) {
    expectRuntimeAttribute(directive, [attribute]);
  }
}

export function asWebMeasurement(value: unknown) {
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
