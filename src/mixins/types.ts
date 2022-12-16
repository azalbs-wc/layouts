export type DistributedAlignmentType =
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
  | 'stretch';

export type BaseCssPropertiesType =
  | 'inherit'
  | 'initial'
  | 'revert'
  | 'revert-layer'
  | 'unset'
  | 'auto'
  | 'normal';

export type BaselineAlignmentType =
  | 'baseline'
  | 'first baseline'
  | 'last baseline';

export type OverflowAlignmentType = 'safe center' | 'unsafe center';

export type AlignmentType =
  | 'center'
  | 'start'
  | 'end'
  | 'flex-start'
  | 'flex-end'
  | 'left'
  | 'right';

export type JustifyItemsType =
  | BaseCssPropertiesType
  | BaselineAlignmentType
  | AlignmentType
  | OverflowAlignmentType
  | (
      | 'stretch'
      | 'self-start'
      | 'self-end'
      | 'legacy right'
      | 'legacy left'
      | 'legacy center'
    );

export type JustifySelfType =
  | 'stretch'
  | BaseCssPropertiesType
  | OverflowAlignmentType
  | BaselineAlignmentType
  | AlignmentType;

export type JustifyContentType =
  | BaseCssPropertiesType
  | AlignmentType
  | DistributedAlignmentType
  | ('stretch' | 'safe center' | 'unsafe center');

export type ContentAlignmentType =
  | DistributedAlignmentType
  | BaseCssPropertiesType
  | AlignmentType
  | BaselineAlignmentType
  | OverflowAlignmentType;

export type ItemsAlignmentType =
  | BaseCssPropertiesType
  | AlignmentType
  | BaselineAlignmentType;

export type SelfAlignmentType =
  | 'strech'
  | AlignmentType
  | BaselineAlignmentType
  | DistributedAlignmentType
  | OverflowAlignmentType
  | BaseCssPropertiesType;
