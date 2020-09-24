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
import { ListItemComponent } from '../../common';
const imports = [{ name: 'alexa-layouts', version: '1.1.0' }];
export interface AlexaTextListItemProps {
  /* Colors will be switched depending on the specified theme (light/dark). Default to dark theme */
  theme?: string;
  /* Toggle to hide ordinal in list item. Defaults to false. */
  hideOrdinal?: boolean | string;
  /* Toggle to hide the divider that appears at the bottom of each item to help separate it from the content below. Default to false */
  hideDivider?: boolean | string;
  /* Primary text for each list item so that users can understand and select an item. */
  primaryText?: string;
  /* The action that is triggered when the item is selected. */
  primaryAction?: any;
  /* Toggle to switch between touch forward and voice forward. Defaults to false, voice forward */
  touchForward?: boolean | string;
  [key: string]: unknown;
}
export const AlexaTextListItem = (
  props: React.PropsWithChildren<AlexaTextListItemProps>
) => {
  return (
    <>
      <APLImports imports={imports} />
      <ListItemComponent
        definition={{
          type: 'AlexaTextListItem',
          ...omit(props, ['children']),
        }}>
        {props.children}
      </ListItemComponent>
    </>
  );
};
