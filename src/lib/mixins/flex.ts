import { ReactiveElement } from 'lit';
/** @typescript-eslint/no-unused-vars */
import { property } from 'lit/decorators/property.js';
import { Constructor } from './base.js';
import {
  ContentAlignmentType,
  ItemsAlignmentType,
  JustifyContentType,
  JustifyItemsType,
  JustifySelfType,
  SelfAlignmentType,
} from './types.js';

export interface FlexElementType {
  /**
   * @attr align-self
   */
  alignment: SelfAlignmentType;

  /**
   * @attr align-items
   */
  alignItems: ItemsAlignmentType;
  /**
   * @attr align-content
   */
  alignContent: ItemsAlignmentType;

  /**
   * @attr justify-self
   */
  justify: JustifySelfType;

  /**
   * @attr justify-content
   */
  justifyContent: JustifyContentType;
  /**
   * @attr justify-items
   */
  justifyItems: JustifyItemsType;
}

export const flexAlignment = <T extends Constructor<ReactiveElement>>(
  baseClass: T
) => {
  class AlignmentClass extends baseClass {
    /**
     * How element are position on the main-axis
     *
     * @attr justify
     */
    @property({ type: String, attribute: 'justify' })
    justify!: JustifySelfType;

    /**
     * @attr justify-content
     */
    @property({ type: String, attribute: 'justify-content' })
    justifyContent!: JustifyContentType;

    /**
     * @attr justify-items
     */
    @property({ type: String, attribute: 'justify-items' })
    justifyItems!: JustifyItemsType;

    /**
     * @attr align-self
     */
    @property({ type: String, attribute: 'align-self' })
    alignment!: SelfAlignmentType;

    /**
     * @attr align-items
     */
    @property({ type: String, attribute: 'align-items' })
    alignItems!: ItemsAlignmentType;

    /**
     * @attr align-content
     */
    @property({ type: String, attribute: 'align-content' })
    alignContent!: ContentAlignmentType;
  }
  return AlignmentClass as Constructor<FlexElementType> & T;
};
