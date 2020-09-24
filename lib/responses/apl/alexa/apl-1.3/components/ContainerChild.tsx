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
import { BaseComponent } from '../../../common';
type dimension = string | number;
export interface ContainerChildProps {
  /* Controls assignment of ordinals to the next child.  Defaults to 'normal'.If 'skip', the ordinal is not incremented. If 'reset', the next ordinal is 1. */
  numbering?: string;
  /* Space to add between this component and the previous component. */
  spacing?: dimension;
  /* If positive, this component will stretch if there is extra space. This only applies if the component is inside a container or sequence. */
  grow?: number | string;
  /* If positive, this component will shrink if there is not enought space .This only applies if the component is inside a container or sequence. */
  shrink?: number | string;
  /* Cross-axis layout position.  Only works in a container or sequence.  Overrides the parent's alignItems property */
  alignSelf?: string;
  /* Relative or absolute layout positioning */
  position?: string;
  /* Distance to offset the left edge of this component in absolute positioning */
  left?: dimension;
  /* Distance to offset the top edge of this component in absolute positioning */
  top?: dimension;
  /* Distance to offset the right edge of this component in absolute positioning */
  right?: dimension;
  /* Distance to offset the bottom edge of this component in absolute positioning */
  bottom?: dimension;
  [key: string]: unknown;
}
export const ContainerChild = (
  props: React.PropsWithChildren<ContainerChildProps>
) => {
  return (
    <>
      <BaseComponent
        definition={{ type: 'ContainerChild', ...omit(props, ['children']) }}>
        {props.children}
      </BaseComponent>
    </>
  );
};
