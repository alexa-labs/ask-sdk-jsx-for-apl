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
export interface AlexaHeadlineProps {
  /* Colors will be switched depending on the specified theme (light/dark). Default to dark theme */
  theme?: string;
  /* Primary message */
  primaryText?: string;
  /* secondary message */
  secondaryText?: string;
  /* Primary text to render in header. */
  headerTitle?: string;
  /* Secondary text to render in header. */
  headerSubtitle?: string;
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
  backgroundVideoAutoPlay?: boolean | string;
  /* Audio track to play on. Defaults to foreground. EM can select foreground | background | none. */
  backgroundVideoAudioTrack?: string;
  /* Hint text to display in Footer. */
  footerHintText?: string;
  [key: string]: unknown;
}
export const AlexaHeadline = (
  props: React.PropsWithChildren<AlexaHeadlineProps>
) => {
  return (
    <>
      <APLImports imports={imports} />
      <APLComponent
        definition={{ ...omit(props, ['children']), type: 'AlexaHeadline' }}>
        {props.children}
      </APLComponent>
    </>
  );
};
