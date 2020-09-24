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
export interface AlexaRatingProps {
  /* Colors will be switched depending on the specified theme (light/dark). Default to dark theme */
  theme?: string;
  /* The adjustable padding between rating item */
  ratingSlotPadding?: string;
  /* The mode for single-asset or multiple-asset */
  ratingSlotMode?: string;
  /* The type for the rating graphic, options are AVG or image. If user selected image, they need to supply resource in the graphic parameters. Default to AVG if no valued provided */
  ratingGraphicType?: string;
  /* The width for single rating graphic. */
  singleRatingGraphicWidth?: string;
  /* The rating for rendering stars */
  ratingNumber?: any;
  /* The resource for rating graphic. */
  singleRatingGraphic?: any;
  /* The resource for full rating AVG. Default to full AVG icon if no value provided */
  fullRatingGraphic?: any;
  /* The resource for half rating AVG. Default to half AVG icon if no value provided */
  halfRatingGraphic?: any;
  /* The resource for empty rating AVG. Default to empty AVG icon if no value provided */
  emptyRatingGraphic?: any;
  /* The text shown besides the rating */
  ratingText?: string;
  [key: string]: unknown;
}
export const AlexaRating = (
  props: React.PropsWithChildren<AlexaRatingProps>
) => {
  return (
    <>
      <APLImports imports={imports} />
      <BaseComponent
        definition={{ type: 'AlexaRating', ...omit(props, ['children']) }}>
        {props.children}
      </BaseComponent>
    </>
  );
};
