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

import * as React from "react";
import { APLSpec } from "./types";
import { APL, Container, Text, MainTemplate } from "../../lib";
import { AlexaLists, AlexaHeader, AlexaFooter, AlexaButton, AlexaImageList, AlexaImageListItem } from "../../lib/responses/apl/alexa-layouts/alexa-layouts-1.1.0";


function getImportDefinition(document, ix = 0) {
  return document.import![ix];
}

const getItem = (document, itemIdx = 0) => {
  return document.mainTemplate.items[itemIdx];
};

export const importsAtRootSpec: APLSpec = (getter) => {
  const apl = (
    <APL>
      <MainTemplate>
        <AlexaLists listItems={[]} />
      </MainTemplate>
    </APL>
  );
  expect(getImportDefinition(getter(apl))).toEqual({
    "name": "alexa-layouts",
    "version": "1.1.0"
  });
};

export const importsDeeperSpec: APLSpec = (getter) => {
  const apl = (
    <APL>
      <MainTemplate>
        <Container width="100%">
          <Container width="50%">
            <Text color="black" text={`You said hi`} />
          </Container>
          <AlexaLists listItems={[]} />
        </Container>
      </MainTemplate>
    </APL>
  );
  expect(getImportDefinition(getter(apl))).toEqual({
    "name": "alexa-layouts",
    "version": "1.1.0"
  });
};

export const listItemsSpec: APLSpec = getter => {
  const listItems = [{ textContent: { primaryText: 'hello' }, token: 'a' }];
  const apl = (
    <>
      <APL>
        <MainTemplate>
          <AlexaLists listItems={listItems} />
        </MainTemplate>
      </APL>
    </>
  );

  expect(getItem(getter(apl)).listItems).toEqual(listItems);
};

export const alexaHeaderSpec: APLSpec = getter => {
  const apl = (
    <APL>
      <MainTemplate>
        <AlexaHeader headerTitle="Hello World" />
      </MainTemplate>
    </APL>
  );

  expect(getItem(getter(apl))).toEqual({
    type: 'AlexaHeader',
    headerTitle: 'Hello World'
  });
};

export const alexaFooterSpec: APLSpec = getter => {
  const apl = (
    <APL>
      <MainTemplate>
        <AlexaFooter hintText="hello" />
      </MainTemplate>
    </APL>
  );

  expect(getItem(getter(apl))).toEqual(
    {
      type: 'AlexaFooter',
      hintText: 'hello'
    }
  )
};

export const alexaButtonSpec: APLSpec = getter => {
  const apl = (
    <APL>
      <MainTemplate>
        <AlexaButton
          buttonText="hello"
          primaryAction={{ type: 'SendEvent', arguments: ['hello'] }}
        />
      </MainTemplate>
    </APL>
  );

  expect(getItem(getter(apl))).toEqual(
    {
      type: 'AlexaButton',
      buttonText: 'hello',
      primaryAction: {
        type: 'SendEvent',
        arguments: ['hello']
      }
    }
  );
};

export const alexaImageListSpec: APLSpec = getter => {
  const apl = (
    <APL>
      <MainTemplate>
        <AlexaImageList imageSource="test source" headerTitle="test images">
          <AlexaImageListItem imageSource="test source second" />
          <AlexaImageListItem imageSource="test source third" />
        </AlexaImageList>
      </MainTemplate>
    </APL>
  );

  expect(getItem(getter(apl))).toEqual({
    type: 'AlexaImageList',
    listItems: [
      {
        type: 'AlexaImageListItem',
        imageSource: 'test source second'
      },
      {
        type: 'AlexaImageListItem',
        imageSource: 'test source third'
      }
    ],
    imageSource: 'test source',
    headerTitle: 'test images'
  });
}

export const alexaTextListItemSpec: APLSpec = getter => {
  const apl = (
    <APL>
      <MainTemplate>
        <AlexaImageListItem imageSource="test source" primaryText="ask-jsx-for-apl" />
      </MainTemplate>
    </APL>
  );

  expect(getItem(getter(apl))).toEqual({
    type: 'AlexaImageListItem',
    imageSource: 'test source',
    primaryText: 'ask-jsx-for-apl'
  });
}

export const specs = [
  {
    name: 'imports work at root',
    spec: importsAtRootSpec
  },
  {
    name: 'imports work at deeper levels',
    spec: importsDeeperSpec,
  },
  {
    name: 'definitions work with listItems prop',
    spec: listItemsSpec,
  },
  {
    name: '<AlexaHeader />',
    spec: alexaHeaderSpec,
  },
  {
    name: '<AlexaFooter />',
    spec: alexaFooterSpec,
  },
  {
    name: '<AlexaButton />',
    spec: alexaButtonSpec,
  },
  {
    name: '<AlexaTextListItem />',
    spec: alexaTextListItemSpec
  },
  {
    name: 'AlexaImageList and AlexaImageListItem',
    spec: alexaImageListSpec
  }
];
