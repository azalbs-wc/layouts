import { ReactiveElement } from 'lit';
import { property } from 'lit/decorators/property.js';
import { Constructor } from './base';

type FlexAlignmentType = {
  /**
   * @attr alignment
   */
  alignment: 'stretch' | 'baseline' | 'center' | 'flex-start' | 'flex-end';
  /**
   * @attr align-content
   */
  contentAlignment:
    | 'stretch'
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'space-around'
    | 'space-between';

  /**
   * @attr justify
   */
  justify:
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'space-around'
    | 'space-between';
};

export const flexAlignment = <T extends Constructor<ReactiveElement>>(
  baseClass: T
) => {
  class AlignmentClass extends baseClass {
    /**
     * How element are position on the cross-axis
     *
     * @attr alignment
     */
    @property({ type: String, attribute: 'alignment' })
    alignment!: 'stretch' | 'baseline' | 'center' | 'flex-start' | 'flex-end';

    /**
     * How element are position on the main-axis
     *
     * @attr justify
     */
    @property({ type: String, attribute: 'justify' })
    justify!:
      | 'center'
      | 'flex-start'
      | 'flex-end'
      | 'space-around'
      | 'space-between';

    /**
     * @attr align-content
     */
    @property({ type: String, attribute: 'align-content' })
    contentAlignment!:
      | 'stretch'
      | 'center'
      | 'flex-start'
      | 'flex-end'
      | 'space-around'
      | 'space-between';
  }
  return AlignmentClass as Constructor<FlexAlignmentType> & T;
};
