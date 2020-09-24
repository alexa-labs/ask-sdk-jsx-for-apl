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
export interface AlexaTransportControlsProps {
  /* The type of secondary controls to use. Default is skip (foward and backwards). Valid options are skip | jump10 | jump30 | none */
  secondaryControls?: string;
  /* The height and width for the primary button. */
  primaryControlSize?: string;
  /* The height and width for the secondary buttons. */
  secondaryControlSize?: string;
  /* The id of the media playing component */
  mediaComponentId?: string;
  /* Determines the starting state of the play/pause icon. This should match the autoplay state of the media playing component. Defaults to false.  */
  autoplay?: boolean | string;
  /* Optional id to set on the Play/Pause Toggle Button. This is useful when displaying mutiple Videos on one screen, each with their own transport controls. */
  playPauseToggleButtonId?: string;
  [key: string]: unknown;
}
export const AlexaTransportControls = (
  props: React.PropsWithChildren<AlexaTransportControlsProps>
) => {
  return (
    <>
      <APLImports imports={imports} />
      <BaseComponent
        definition={{
          type: 'AlexaTransportControls',
          ...omit(props, ['children']),
        }}>
        {props.children}
      </BaseComponent>
    </>
  );
};
