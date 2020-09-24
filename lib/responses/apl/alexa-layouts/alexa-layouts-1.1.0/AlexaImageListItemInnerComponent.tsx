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
export interface AlexaImageListItemInnerComponentProps {
  /* image height for the inner image */
  innerComponentImageHeight?: string;
  /* image width for the inner image */
  innerComponentImageWidth?: string;
  /* Colors will be switched depending on the specified theme (light/dark). Default to dark theme */
  theme?: string;
  /* Toggle to hide ordinal in list item. Defaults to false. */
  hideOrdinal?: boolean | string;
  /* Title for list item. */
  primaryText?: string;
  /* ImageMetadataPrimacy on devices that can only display one element due to screen size, Image's secondary and tertiary text is prioritized over hint text. Setting false displays hint text. Defaults to true */
  imageMetadataPrimacy?: boolean | string;
  /* maxLine for primary text. */
  primaryTextMaxline?: any;
  /* Secondary text for list item. */
  secondaryText?: string;
  /* Tertiary text for list item. */
  tertiaryText?: string;
  /* Provider text that will be on top of the image container. */
  providerText?: string;
  /* The height of the overlay */
  overlayHeight?: string;
  /* Toggle to hide the overlay (scrim) between image and content to increase content readability. Defaults to false. */
  imageHideScrim?: boolean | string;
  /* Progress bar’s percentage to be displayed on the image overlay to show the user glanceable status. Percentage value is any number from 1 – 100. */
  imageProgressBarPercentage?: any;
  /* Toggle to display the progress bar on the image overlay. The progress bar will be displayed if imageProgressBarPercentage parameter is defined. Defaults to true. */
  imageShowProgressBar?: boolean | string;
  /* Toggle to display the provider text on the image overlay. The progress bar will be displayed if imageShowProviderText parameter is defined. Defaults to true. */
  imageShowProviderText?: boolean | string;
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
  /* Image to display in list item. */
  imageSource?: string;
  /* Direction of the container. Default is column. */
  direction?: string;
  /* URI for the default image on the list item so the image containers are never empty */
  defaultImageSource?: string;
  /* The command that is triggered when the list item is selected. */
  primaryAction?: any;
  [key: string]: unknown;
}
export const AlexaImageListItemInnerComponent = (
  props: React.PropsWithChildren<AlexaImageListItemInnerComponentProps>
) => {
  return (
    <>
      <APLImports imports={imports} />
      <BaseComponent
        definition={{
          type: 'AlexaImageListItemInnerComponent',
          ...omit(props, ['children']),
        }}>
        {props.children}
      </BaseComponent>
    </>
  );
};
