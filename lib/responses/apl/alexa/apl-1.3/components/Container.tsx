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
import { APLComponent } from '../../../common';
type Entity = {
  id: string;
  type: string;
  name: string;
  nameSynonyms?: string[] | string;
  targetSlotName?: string;
};
type Binding = {
  name: string;
  value: string;
  type?: string;
};
type dimension = string | number;
type anyArray = anyType[] | string;
type anyType = string | number | object;
type Command = {
  type: string;
  description?: string;
  delay?: number | string;
  screenLock?: boolean | string;
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
export interface ContainerProps {
  /* An Optional description of this component. */
  description?: string;
  /* If true, this component has the checked state set. */
  checked?: boolean | string;
  /* If true, this component does not respond to touch or focus. */
  disabled?: boolean | string;
  /* Control if the component is displayed on the screen. */
  display?: string;
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
  /* If true, assign ordinal numbers to the children */
  numbered?: boolean | string;
  /* Specifies default alignment for children in the cross-axis. */
  alignItems?: string;
  /* The direction that children will laid out in. */
  direction?: string;
  /* Distribute free space when there is room on the main axis. */
  justifyContent?: string;
  /* Shadow color */
  shadowColor?: string;
  /* Horizontal offset of the shadow */
  shadowHorizontalOffset?: dimension;
  /* Shadow blur radius */
  shadowRadius?: dimension;
  /* Vertical offset of the shadow */
  shadowVerticalOffset?: dimension;
  item?: any;
  items?: any;
  [key: string]: unknown;
}
export const Container = (props: React.PropsWithChildren<ContainerProps>) => {
  return (
    <>
      <APLComponent
        definition={{ type: 'Container', ...omit(props, ['children']) }}>
        {props.children}
      </APLComponent>
    </>
  );
};
