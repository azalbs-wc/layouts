import {AttributePart, nothing, Part} from 'lit';
import {
  directive,
  Directive,
  DirectiveParameters,
  PartInfo,
} from 'lit/directive.js';
import {
  PriorityPropertyDeclaration,
  StylesController,
} from '../controllers/styles-controller';
import {asWebMeasurement} from '../helpers';
// import {runtimeCheckStylePartInfo} from './helpers';
import {BoxContrained} from '../types';

export type Margins = {margin: string} & BoxContrained;

export class MarginMapDirective extends Directive {
  //#region Class properties
  private readonly _controller!: StylesController;
  //#endregion Class properties

  constructor(partInfo: PartInfo) {
    super(partInfo);
    // runtimeCheckStylePartInfo(partInfo, 'marginMap', 'style');
    this._controller = new StylesController();
  }

  override render(_: Readonly<Margins>) {
    return nothing;
  }

  override update(part: Part, [styleInfo]: DirectiveParameters<this>): unknown {
    const {style} = (part as AttributePart)!.element as HTMLElement;
    if (typeof style === 'undefined' || style === null) {
      return nothing;
    }
    const styles = this._controller.tranformStyles(styleInfo, (prop, value) => [
      `margin-${prop}`,
      asWebMeasurement(value),
    ]);
    this._controller.updateStyles(style as PriorityPropertyDeclaration, [
      styles,
    ]);
    return nothing;
  }
}

export const marginMap = directive(MarginMapDirective);
