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

import * as React from 'react';
import omit from 'lodash/omit';
import { BaseComponent } from '../common/BaseComponent';
import {
  APLComponentProvider,
  APLConsumer,
  APLContext
} from '../common/context';

export interface AplLayoutProps {
  name: string;
  [key: string]: unknown;
}

export const AplLayout = (props: React.PropsWithChildren<AplLayoutProps>) => {
  const aplCtx: APLContext = {
    items: [],
  };
  return (
    <>
      <APLComponentProvider value={aplCtx}>
        {props.children}
      </APLComponentProvider>
      <APLConsumer>
        {(parentCtx) => {
          if (parentCtx) {
            const parameters = Object.keys(omit(props, ['name', 'children']));
            parentCtx.layouts[props.name] = parentCtx.layouts[props.name] || {};
            parentCtx.layouts[props.name].parameters = parameters;
            parentCtx.layouts[props.name] = Object.assign(
              parentCtx.layouts[props.name],
              aplCtx
            );
          }
          return null;
        }}
      </APLConsumer>
      <BaseComponent definition={{ type: props.name, ...omit(props, ['name', 'children']) }} />
    </>
  );
};
