/*
  Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.

  Licensed under the Apache License, Version 2.0 (the "License").
  You may not use this file except in compliance with the License.
  You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
*/

import omit from 'lodash/omit';
import * as React from 'react';
import { BaseComponent, LiteralUnion } from '../../../common';
type DisplayEnum = 'invisible' | 'none' | 'normal';
type alignEnum =
  | 'left'
  | 'right'
  | 'center'
  | 'top'
  | 'bottom'
  | 'top-left'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-right';
type scaleEnum = 'none' | 'fill' | 'best-fill' | 'best-fit';
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
type KeyHandler = {
  commands?: Command[] | string;
  propagate?: boolean | string;
  when?: boolean | string;
};
type GestureHandlerArray = Gestures[] | string;
type Gestures = DoublePress | LongPress | SwipeAway;
type DoublePress = {
  type: string;
  onDoublePress?: Command[] | string;
  onSinglePress?: Command[] | string;
  [key: string]: any;
};
type LongPress = {
  type: string;
  onLongPressStart?: Command[] | string;
  onLongPressEnd?: Command[] | string;
  [key: string]: any;
};
type actionEnum = 'reveal' | 'slide' | 'cover';
type directionEnum = 'left' | 'right' | 'up' | 'down';
type SwipeAway = {
  type: string;
  action?: LiteralUnion<actionEnum, string>;
  direction: LiteralUnion<directionEnum, string>;
  item?: object[] | string;
  onSwipeMove?: Command[] | string;
  onSwipeDone?: Command[] | string;
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
export interface VectorGraphicProps {
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
  /* Shadow color */
  shadowColor?: string;
  /* Horizontal offset of the shadow */
  shadowHorizontalOffset?: dimension;
  /* Shadow blur radius */
  shadowRadius?: dimension;
  /* Vertical offset of the shadow */
  shadowVerticalOffset?: dimension;
  /* How the graphic should be aligned in the current box */
  align?: LiteralUnion<alignEnum, string>;
  /* The URL or direct reference to a vector graphic. */
  source?: string;
  /* How the image should be scaled to fill the current box. */
  scale?: LiteralUnion<scaleEnum, string>;
  /* Command to execute when the component receives focus. */
  onFocus?: Command[] | string;
  /* Command to execute when the component loses focus. */
  onBlur?: Command[] | string;
  /* Keyboard handler(s) to evaluate when the component receives a key down. */
  handleKeyDown?: KeyHandler[] | string;
  /* Keyboard handler(s) to evaluate when the component receives a key up. */
  handleKeyUp?: KeyHandler[] | string;
  /* Gestures to interpret */
  gestures?: GestureHandlerArray | string;
  /* Commands to execute when a gesture takes over the pointer. */
  onCancel?: Command[] | string;
  /* Commands to execute when a pointer down event occurs. */
  onDown?: Command[] | string;
  /* Commands to execute while moving the pointer. */
  onMove?: Command[] | string;
  /* Commands to execute for a pointer down followed by an up. */
  onPress?: Command[] | string;
  /* Commands to execute when releasing the pointer. */
  onUp?: Command[] | string;
  [key: string]: unknown;
}
export const VectorGraphic = (
  props: React.PropsWithChildren<VectorGraphicProps>
) => {
  return (
    <>
      <BaseComponent
        definition={{ type: 'VectorGraphic', ...omit(props, ['children']) }}>
        {props.children}
      </BaseComponent>
    </>
  );
};
