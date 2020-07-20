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
import { APLComponent } from '../../common';
const imports = [{ name: 'alexa-layouts', version: '1.1.0' }];
export interface AlexaImageProps {
  /* Dimension value to set image width */
  imageWidth?: string;
  /* Dimension value to set image height */
  imageHeight?: string;
  /* Aspect ratio of the image. Options are square, round, standard_landscape, standard_portrait, poster_landscape, poster_portrait, widescreen. Default to square */
  imageAspectRatio?: string;
  /* Scale setting for the image. Options are none, fill, best-fit, best-fill, best-fit-down. Default to best-fit */
  imageScale?: string;
  /* Alignment setting for the image. Options are bottom, bottom-left, bottom-right, center, left, right, top, top-left, top-right. Default to center */
  imageAlignment?: string;
  /* Whether to use rounded corners for the image */
  imageRoundedCorner?: boolean | string;
  /* Set a blurred version of the image to appear behind the image to create a visually consistent container size */
  imageBlurredBackground?: boolean | string;
  /* URI for the image */
  imageSource?: string;
  [key: string]: unknown;
}
export const AlexaImage = (props: React.PropsWithChildren<AlexaImageProps>) => {
  return (
    <>
      <APLImports imports={imports} />
      <APLComponent
        definition={{ ...omit(props, ['children']), type: 'AlexaImage' }}>
        {props.children}
      </APLComponent>
    </>
  );
};
