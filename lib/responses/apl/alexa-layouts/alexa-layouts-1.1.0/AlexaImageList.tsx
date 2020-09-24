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
import { ListComponent } from '../../common';
const imports = [{ name: 'alexa-layouts', version: '1.1.0' }];
export interface AlexaImageListProps {
  /* Colors will be swiched depend on the specified theme (light/dark). Default to dark theme */
  theme?: string;
  /* Primary text to render in header. */
  headerTitle?: string;
  /* Attribution text to render in header. Only shown when no headerAttributionImage is provided, and when headerAttributionPrimacy is true, or on a device that shows Title/Subtitle and Attribution. */
  headerAttributionText?: string;
  /* URL for attribution image source. Only shown when headerAttributionPrimacy is true, or on a device that shows Title/Subtitle and Attribution. */
  headerAttributionImage?: string;
  /* On devices that can only display one element due to screen size, Attribution is prioritized. Setting False displays Title/Subtitle.  Defaults to true. */
  headerAttributionPrimacy?: boolean | string;
  /* Toggle to display the divider that appears at the bottom of header to help separate it from the content below. Default to false */
  headerDivider?: boolean | string;
  /* Toggle to display back button in header. Defaults to false. */
  headerBackButton?: boolean | string;
  /* An accessibility label to describe the back button to customers who use a screen reader. */
  headerBackButtonAccessibilityLabel?: string;
  /* Command that is issued when back button is pressed. */
  headerBackButtonCommand?: any;
  /* Optional color value to use as background color for Header. Defaults to transparent. */
  headerBackgroundColor?: string;
  /* Hint text to display in Footer. */
  hintText?: string;
  /* Color value to use as background color for layout. */
  backgroundColor?: string;
  /* URL for background image source. */
  backgroundImageSource?: string;
  /* URL for background video source. */
  backgroundVideoSource?: any;
  /* Image/video scale to apply to background image/video. Defaults to best-fill. */
  backgroundScale?: string;
  /* Image/video alignment to apply to background image/video. Defaults to center. */
  backgroundAlign?: string;
  /* Toggle to apply background blur. Defaults to false. */
  backgroundBlur?: boolean | string;
  /* Toggle to apply overlay scrim to background image/video. Defaults to false. */
  backgroundColorOverlay?: boolean | string;
  /* Toggle to apply gradient to background image/video. Defaults to false. */
  backgroundOverlayGradient?: boolean | string;
  /* Toggle to autoplay background video(s). Defaults to false. */
  videoAutoPlay?: boolean | string;
  /* Audio track to play on. Defaults to foreground. EM can select foreground | background | none. */
  videoAudioTrack?: string;
  /* The Items will be displayed in the list. */
  listItems?: any;
  /* ImageMetadataPrimacy on devices that can only display one element due to screen size, Image's secondary and tertiary text is prioritized over hint text. Setting false displays hint text. Defaults to true */
  imageMetadataPrimacy?: boolean | string;
  /* Toggle to hide ordinal in list item. Defaults to false. */
  hideOrdinal?: boolean | string;
  /* Toggle to hide the overlay (scrim) between image and content to increase content readability. Defaults to false. */
  imageHideScrim?: boolean | string;
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
  /* Image to display in list item. */
  imageSource?: string;
  /* Toggle to display the progress bar on the image overlay. The progress bar will be displayed if imageProgressBarPercentage parameter is defined. Defaults to true. */
  imageShowProgressBar?: boolean | string;
  /* URI for the default image on the list item so the image containers are never empty */
  defaultImageSource?: string;
  /* The number of list items in one screen */
  listItemHorizontalCount?: any;
  /* The action that is triggered when the item is selected. */
  primaryAction?: any;
  [key: string]: unknown;
}
export const AlexaImageList = (
  props: React.PropsWithChildren<AlexaImageListProps>
) => {
  return (
    <>
      <APLImports imports={imports} />
      <ListComponent
        definition={{ type: 'AlexaImageList', ...omit(props, ['children']) }}>
        {props.children}
      </ListComponent>
    </>
  );
};
