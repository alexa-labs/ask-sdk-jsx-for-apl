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
export interface AlexaButtonProps {
  /* Colors will be swiched depend on the specified theme (light/dark). Default to dark theme */
  theme?: string;
  /* The text string should communicate the action the customer can take. */
  buttonText?: string;
  /* An EM can choose outlined or contained. Defaults to contained. */
  buttonStyle?: string;
  /* The action that is triggered when the Button is selected. */
  primaryAction?: any;
  /* Voice over will read this string when the user selects this component. */
  accessibilityLabel?: string;
  [key: string]: unknown;
}
export const AlexaButton = (
  props: React.PropsWithChildren<AlexaButtonProps>
) => {
  return (
    <>
      <APLImports imports={imports} />
      <APLComponent
        definition={{ ...omit(props, ['children']), type: 'AlexaButton' }}>
        {props.children}
      </APLComponent>
    </>
  );
};
