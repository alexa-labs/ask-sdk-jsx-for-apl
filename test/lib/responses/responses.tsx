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

import { APL, APLDirective, MainTemplate, ResponseBuilderCtx } from '../../../lib';
import { Container, Text } from '../../../lib/responses/apl/alexa/apl-1.3/components';
import * as React from "react";
import { ResponseBuilder } from "ask-sdk-core";
import { render } from 'enzyme';
import { mockResponseBuilder } from "../../utils/response-builder";
import { AlexaLists } from "../../../lib/responses/apl/alexa-layouts/alexa-layouts-1.1.0";

import { Consumer } from "react";
import Mocked = jest.Mocked;
import Mock = jest.Mock;
import { interfaces } from "ask-sdk-model";
import RenderDocumentDirective = interfaces.alexa.presentation.apl.RenderDocumentDirective;


let responseBuilder: Mocked<ResponseBuilder>;
beforeEach(() => {
  responseBuilder = mockResponseBuilder();
  let mock = jest.fn<Consumer<ResponseBuilder>, any>(({ children: fn }) => fn(responseBuilder));
  ResponseBuilderCtx.Consumer = mock as unknown as Consumer<ResponseBuilder>;
});

export const renderAndGet = (apl: React.ReactElement): RenderDocumentDirective => {
  render(apl);
  return (responseBuilder.addDirective as Mock<unknown>).mock.calls[0][0].document;
};

function getImportDefinition(ix = 0) {
  return (responseBuilder.addDirective.mock.calls[0][0] as APLDirective).document.import![ix];
}

describe('responses', () => {
  describe('alexa-layouts', () => {
    test('imports work with APL', () => {
      render(
        <>
          <APL>
            <MainTemplate>
              <Container width="100%">
                <Container width="50%">
                  <Text color="black" text={`You said ?`} />
                </Container>
                <AlexaLists listItems={[]} />
              </Container>
            </MainTemplate>
          </APL>
        </>
      );
      expect(responseBuilder.addDirective).toHaveBeenCalledTimes(1);
      expect(getImportDefinition()).toEqual({
        "name": "alexa-layouts",
        "version": "1.1.0"
      });
    });
  });
});
