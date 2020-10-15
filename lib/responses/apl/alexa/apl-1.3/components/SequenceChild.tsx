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
type numberingEnum = 'normal' | 'reset' | 'skip';
type dimension = string | number;
export interface SequenceChildProps {
  /* Controls assignment of ordinals to the next child.  Defaults to 'normal'.If 'skip', the ordinal is not incremented. If 'reset', the next ordinal is 1. */
  numbering?: LiteralUnion<numberingEnum, string>;
  /* Space to add between this component and the previous component. */
  spacing?: dimension;
  [key: string]: unknown;
}
export const SequenceChild = (
  props: React.PropsWithChildren<SequenceChildProps>
) => {
  return (
    <>
      <BaseComponent
        definition={{ type: 'SequenceChild', ...omit(props, ['children']) }}>
        {props.children}
      </BaseComponent>
    </>
  );
};
