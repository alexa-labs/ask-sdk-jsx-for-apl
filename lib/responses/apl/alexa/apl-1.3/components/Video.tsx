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
type audioTrackEnum = 'foreground' | 'background' | 'none';
type scaleEnum =
  | 'fill'
  | 'best-fill'
  | 'best-fit'
  | 'best-fit-down'
  | 'none'
  | 'contain'
  | 'cover'
  | 'scale-down';
type Entity = {
  id: string;
  type: string;
  name: string;
  nameSynonyms?: string[] | string;
  targetSlotName?: string;
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
type stringOrvideoTrackArray = (object | string)[] | string;
type urlDefinition = string[] | string;
type sourceDefinition = stringOrvideoTrackArray | string | object;
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
export interface VideoProps {
  /* An Optional description of this component. */
  description?: string;
  /* If true, this component has the checked state set. */
  checked?: boolean | string;
  /* If true, this component does not respond to touch or focus. */
  disabled?: boolean | string;
  /* Control if the component is displayed on the screen. */
  display?: LiteralUnion<DisplayEnum, string>;
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
  /* Audio track to play on */
  audioTrack?: LiteralUnion<audioTrackEnum, string>;
  /* Start playing automatically */
  autoplay?: boolean | string;
  /* The URL to download the image from */
  source?: sourceDefinition;
  /* How the image should be scaled to fill the current box. */
  scale?: LiteralUnion<scaleEnum, string>;
  /* Commands to execute when the last video track is finished playing. */
  onEnd?: Command[] | string;
  /* Commands to execute when the video switches from playing to paused. */
  onPause?: Command[] | string;
  /* Commands to execute when the video switches from paused to playing. */
  onPlay?: Command[] | string;
  /* Commands to execute when the playback position changes. */
  onTimeUpdate?: Command[] | string;
  /* Commands to execute when the current video track changes. */
  onTrackUpdate?: Command[] | string;
  [key: string]: unknown;
}
export const Video = (props: React.PropsWithChildren<VideoProps>) => {
  return (
    <>
      <BaseComponent
        definition={{ type: 'Video', ...omit(props, ['children']) }}>
        {props.children}
      </BaseComponent>
    </>
  );
};
