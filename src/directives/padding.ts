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
import { asWebMeasurement } from '../helpers';
import {BoxContrained} from '../types';

export type Paddings = {padding: string} & BoxContrained;

export class PaddingMapDirective extends Directive {
  //#region Class properties
  private readonly _controller!: StylesController;
  //#endregion Class properties

  constructor(partInfo: PartInfo) {
    super(partInfo);
    // runtimeCheckStylePartInfo(partInfo, 'marginMap', 'style');
    this._controller = new StylesController();
  }

  override render(_: Readonly<Paddings>) {
    return nothing;
  }

  override update(part: Part, [styleInfo]: DirectiveParameters<this>): unknown {
    const {style} = (part as AttributePart)!.element as HTMLElement;
    if (typeof style === 'undefined' || style === null) {
      return nothing;
    }
    const styles = this._controller.tranformStyles(
      styleInfo,
      (prop, value) => [`padding-${prop}`, asWebMeasurement(value)]
    );
    this._controller.updateStyles(style as PriorityPropertyDeclaration, [
      styles,
    ]);
    return nothing;
  }
}

export const paddingMap = directive(PaddingMapDirective);
