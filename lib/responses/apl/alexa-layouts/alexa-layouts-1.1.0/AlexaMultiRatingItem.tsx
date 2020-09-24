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
import { APLImports } from '../../root';
import { BaseComponent } from '../../common';
const imports = [{ name: 'alexa-layouts', version: '1.1.0' }];
export interface AlexaMultiRatingItemProps {
  /* Colors will be switched depending on the specified theme (light/dark). Default to dark theme */
  theme?: string;
  /* The graphic source to display */
  graphic?: string;
  /* The type for the rating graphic, options are AVG or image */
  ratingGraphicType?: string;
  [key: string]: unknown;
}
export const AlexaMultiRatingItem = (
  props: React.PropsWithChildren<AlexaMultiRatingItemProps>
) => {
  return (
    <>
      <APLImports imports={imports} />
      <BaseComponent
        definition={{
          type: 'AlexaMultiRatingItem',
          ...omit(props, ['children']),
        }}>
        {props.children}
      </BaseComponent>
    </>
  );
};
