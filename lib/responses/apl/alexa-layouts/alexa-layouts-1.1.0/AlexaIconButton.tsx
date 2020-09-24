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
export interface AlexaIconButtonProps {
  /* Colors will be swiched depending on the specified theme (light/dark). Defaults to dark theme. */
  theme?: string;
  /* The command that is triggered when the button is selected. */
  primaryAction?: any;
  /* Voice over will read this string when the user selects this component. */
  accessibilityLabel?: string;
  /* Size (height and width) of the icon button. Defaults to 72dp. */
  buttonSize?: string;
  /* Direct reference to a vector graphic. */
  vectorSource?: string;
  /* The visual of the icon. Defaults to image, which only displays the icon. If contained, there will be a circle around the icon. */
  buttonStyle?: string;
  [key: string]: unknown;
}
export const AlexaIconButton = (
  props: React.PropsWithChildren<AlexaIconButtonProps>
) => {
  return (
    <>
      <APLImports imports={imports} />
      <BaseComponent
        definition={{ type: 'AlexaIconButton', ...omit(props, ['children']) }}>
        {props.children}
      </BaseComponent>
    </>
  );
};
