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
import {
  APL,
  MainTemplate,
  Container,
  Text,
  Image,
  AplLayout,
} from '../../lib';
import { APLSpec } from './types';

export const innerAplLayoutSpec: APLSpec = (getter) => {
  const apl = (
    <APL>
      <MainTemplate>
        <Container>
          <Text />
          <AplLayout name="testLayout">
            <Container>
              <Image source="http://1" />
            </Container>
          </AplLayout>
        </Container>
      </MainTemplate>
    </APL>
  );
  const doc = getter(apl);
  const testLayout = doc.layouts['testLayout'];
  expect(testLayout.items[0].type).toBe('Container');
  expect(testLayout.items[0].items[0].type).toBe('Image');
  expect(testLayout.items[0].items[0].source).toBe('http://1');
  expect(doc.mainTemplate.items[0].items[1].type).toBe('testLayout');
};

export const aplLayoutWithParameters: APLSpec = (getter) => {
    const apl = (
      <APL>
        <MainTemplate>
          <Container>
            <Text /> 
            <AplLayout name="testLayout" imageWidth="100vh">
              <Image source="http://1" width="${imageWidth}" />
            </AplLayout>
          </Container>
        </MainTemplate>
      </APL>
    );
    const doc = getter(apl);
    const testLayout = doc.layouts['testLayout'];
    const testLayoutInner = doc.mainTemplate.items[0].items[1];
    expect(testLayoutInner.type).toBe('testLayout');
    expect(testLayoutInner.imageWidth).toBe('100vh');
    expect(testLayout.items[0].type).toBe('Image');
    expect(testLayout.items[0].source).toBe('http://1');
    expect(testLayout.items[0].width).toBe('${imageWidth}');
    expect(testLayout.parameters).toEqual(["imageWidth"]);
}

export const aplLayoutsWithExistingLayouts: APLSpec = (getter) => {
    const existingLayout = {
        existingLayout: {
            parameters: ["testParam"],
            item: {
                type: "Text",
                text: "${testParam}"
            }
        }
    }
    const apl = (
        <APL layouts={ existingLayout }>
          <MainTemplate>
            <Container>
              <Text /> 
              <AplLayout name="testLayout" imageWidth="100vh">
                <Image source="http://1" width="${imageWidth}" />
              </AplLayout>
            </Container>
          </MainTemplate>
        </APL>
      );
      const doc = getter(apl);
      const testLayout = doc.layouts['testLayout'];
      const existingOne = doc.layouts['existingLayout'];
      expect(testLayout.items[0].type).toBe('Image');
      expect(testLayout.parameters).toEqual(["imageWidth"]);
      expect(existingOne.item.type).toBe('Text');
      expect(existingOne.parameters).toEqual(["testParam"]);

}

export const specs = [
  {
    name: 'apl layouts',
    spec: innerAplLayoutSpec,
  },
  {
    name: 'apl layouts with parameters',
    spec: aplLayoutWithParameters,
  },
  {
      name: 'apl layouts with existing parameters',
      spec: aplLayoutsWithExistingLayouts
  }
];
