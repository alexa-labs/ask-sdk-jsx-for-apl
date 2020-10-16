import omit from 'lodash/omit';
import * as React from 'react';
import { APLComponent, LiteralUnion } from '../../../common';
type DisplayEnum = 'invisible' | 'none' | 'normal';
type scrollDirectionEnum = 'horizontal' | 'vertical';
type snapEnum = 'none' | 'start' | 'center' | 'end';
type Entity = {
  id: string;
  type: string;
  name: string;
  nameSynonyms?: string[] | string;
  targetSlotName?: string;
};
type tickHandler = {
  commands: Command[] | string;
  description?: string;
  minimumDelay?: number | string;
  when?: boolean | string;
};
type typeEnum =
  | 'any'
  | 'string'
  | 'number'
  | 'integer'
  | 'style'
  | 'color'
  | 'boolean'
  | 'dimension'
  | 'component'
  | 'componentArray';
type Binding = {
  name: string;
  value: string;
  type?: LiteralUnion<typeEnum, string>;
};
type dimension = string | number;
type dimensionArray = dimension[] | string;
type anyArray = anyType[] | string;
type anyType = string | number | object;
type KeyHandler = {
  commands?: Command[] | string;
  propagate?: boolean | string;
  when?: boolean | string;
};
type Command = {
  type: string;
  description?: string;
  delay?: number | string;
  screenLock?: boolean | string;
  sequencer?: string;
  when?: boolean | string;
  [key: string]: any;
};
type Transform = {
  rotate?: number | string;
  scale?: number | string;
  scaleX?: number | string;
  scaleY?: number | string;
  skewX?: number | string;
  skewY?: number | string;
  translateX?: dimension;
  translateY?: dimension;
};
export interface GridSequenceProps {
  /* An Optional description of this component. */
  description?: string;
  /* If true, this component has the checked state set. */
  checked?: boolean | string;
  /* If true, this component does not respond to touch or focus. */
  disabled?: boolean | string;
  /* Control if the component is displayed on the screen. */
  display?: LiteralUnion<DisplayEnum, string>;
  /* An array of Tick Event Handlers to execute as time passes. */
  handleTick?: tickHandler[] | string;
  /* A list of commands to execute when the component is first displayed. */
  onMount?: Command[] | string;
  /* Array of transformations. */
  transform?: Transform[] | string;
  /* If false, this component is omitted. */
  when?: boolean | string;
  /* The URL to download the audio from */
  speech?: string;
  /* An Array of entities associated with the component */
  entity?: Entity[] | string;
  /* Name of the component. This value will be reported in events and can be used in navigation commands. */
  id?: string;
  /* Named values to add to the data-binding context */
  bind?: Binding[] | string;
  /* Style to apply to the component */
  style?: string;
  /* Width of this component */
  width?: dimension;
  /* Minimum width of this component */
  minWidth?: dimension;
  /* Maximum width of this component */
  maxWidth?: dimension;
  /* Height of this component */
  height?: dimension;
  /* Inherit the display state from the parent component */
  inheritParentState?: boolean | string;
  /* Minimum height of this component */
  minHeight?: dimension;
  /* Maximum height of this component */
  maxHeight?: dimension;
  /* Opacity of this component.  Also applies to children. */
  opacity?: number | string;
  /* Space to add to the left of this object. */
  paddingLeft?: dimension;
  /* Space to add to the top this object. */
  paddingTop?: dimension;
  /* Space to add to the right of this object. */
  paddingRight?: dimension;
  /* Space to add to the bottom of this object. */
  paddingBottom?: dimension;
  /* A text string used by a screen reader when the user selects accessibility mode. */
  accessibilityLabel?: string;
  /* Data to bind into this container.  This should be an array of data items. Each item will be bound to the 'data' global variable and the 'item' component will be inflated using that data item.  The 'index' global variable will be assigned the 0-based array offset of the item. The 'ordinal' global variable will be assigned for each 'numbered' child */
  data?: anyArray | string;
  /* A child component to put at the beginning of the layout. */
  firstItem?: object[] | string;
  /* A child component to put at the end of the layout */
  lastItem?: object[] | string;
  /* Command to execute when a component is added to the multichild component */
  onChildAdded?: Command[] | string;
  /* Command to execute when a component is removed from the multichild component */
  onChildRemoved?: Command[] | string;
  /* Command to execute when the component receives focus. */
  onFocus?: Command[] | string;
  /* Command to execute when the component loses focus. */
  onBlur?: Command[] | string;
  /* Keyboard handler(s) to evaluate when the component receives a key down. */
  handleKeyDown?: KeyHandler[] | string;
  /* Keyboard handler(s) to evaluate when the component receives a key up. */
  handleKeyUp?: KeyHandler[] | string;
  /* The height of children. */
  childHeight?: dimension | dimensionArray;
  /* The height of children. */
  childHeights?: dimension | dimensionArray;
  /* The width of children. */
  childWidth?: dimension | dimensionArray;
  /* The width of children. */
  childWidths?: dimension | dimensionArray;
  numbered?: any;
  /* Command to execute during scrolling */
  onScroll?: Command[] | string;
  /* The direction to scroll this sequence. */
  scrollDirection?: LiteralUnion<scrollDirectionEnum, string>;
  /* The alignment to snap to after scrolling. */
  snap?: LiteralUnion<snapEnum, string>;
  item?: any;
  items?: any;
  [key: string]: unknown;
}
export const GridSequence = (
  props: React.PropsWithChildren<GridSequenceProps>
) => {
  return (
    <>
      <APLComponent
        definition={{ type: 'GridSequence', ...omit(props, ['children']) }}>
        {props.children}
      </APLComponent>
    </>
  );
};
