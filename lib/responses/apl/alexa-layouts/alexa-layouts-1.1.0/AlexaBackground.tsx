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
export interface AlexaBackgroundProps {
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
  /* Toggle to apply noise to background image. Defaults to false */
  overlayNoise?: boolean | string;
  /* Toggle to apply overlay scrim to background image/video. Defaults to false. */
  colorOverlay?: boolean | string;
  /* Toggle to apply gradient to background image/video. Defaults to false. */
  overlayGradient?: boolean | string;
  /* Toggle to autoplay background video(s). Defaults to false. */
  videoAutoPlay?: boolean | string;
  /* Audio track to play on. Defaults to foreground. EM can select foreground | background | none. */
  videoAudioTrack?: string;
  [key: string]: unknown;
}
export const AlexaBackground = (
  props: React.PropsWithChildren<AlexaBackgroundProps>
) => {
  return (
    <>
      <APLImports imports={imports} />
      <APLComponent
        definition={{ ...omit(props, ['children']), type: 'AlexaBackground' }}>
        {props.children}
      </APLComponent>
    </>
  );
};
