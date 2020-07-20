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
import { ResponseBuilder } from 'ask-sdk-core';
import { ResponseBuilderCtx } from '../apl/common';

export abstract class SkillResponsePart<P> extends React.Component<P> {
  protected constructor(props) {
    super(props);
    this.register = this.register.bind(this);
  }

  protected abstract register(responseBuilder: ResponseBuilder): void;

  public render() {
    return (
      <ResponseBuilderCtx.Consumer>
        {(responseBuilder) => {
          if (responseBuilder) {
            this.register(responseBuilder);
            return null;
          }
          return null;
        }}
      </ResponseBuilderCtx.Consumer>
    );
  }
}
