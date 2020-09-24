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
import { APL, MainTemplate, Frame, Container, Image, Text, Command } from "../../lib";
import { APLSpec } from "./types";
import { AplDocument } from '../../lib/responses/apl-document/index';
import { APLImports } from '../../lib/responses/apl/root/AplImports';


export const frameSpec: APLSpec = (getter) => {
  const apl = (
    <APL>
      <MainTemplate>
        <Frame text="Text" />
      </MainTemplate>
    </APL>
  );
  expect(getter(apl).mainTemplate.items[0]).toEqual({
    type: 'Frame',
    items: [],
    text: 'Text'
  });
};

export const imageSpec: APLSpec = (getter) => {
  const apl = (
    <APL>
      <MainTemplate>
        <Image source="http://1" />
      </MainTemplate>
    </APL>
  );
  expect(getter(apl).mainTemplate.items[0]).toEqual(
    {
      type: 'Image',
      items: [],
      source: 'http://1'
    }
  )
};

export const darkThemeSpec: APLSpec = (getter) => {
  expect(getter(<APL theme="dark" />).theme).toEqual("dark");
};

export const lightThemeSpec: APLSpec = (getter) => {
  expect(getter(<APL theme="light" />).theme).toEqual("light");
};

export const containerAndTextSpec: APLSpec = getter => {
  const apl = (
    <APL>
      <MainTemplate>
        <Container>
          <Text text="hello" />
        </Container>
      </MainTemplate>
    </APL>
  );
  const doc = getter(apl);
  expect(doc.mainTemplate.items[0].type).toBe("Container");
  expect(doc.mainTemplate.items[0].items[0].type).toBe("Text");
  expect(doc.mainTemplate.items[0].items[0].text).toBe("hello");
};

export const mainTemplateWithDatasourceAndToken: APLSpec = getter => {
  const datasource = {"testData": {"testDataName": "testData", "testValue": "testDataValue"}};
  const apl = (
    <APL dataSources={datasource} token="testToken">
      <MainTemplate parameters={['testData']}></MainTemplate>
    </APL>
  );
  const doc = getter(apl);
  const aplDocument = new AplDocument(apl);
  const ds = aplDocument.getDatasources();
  const token = aplDocument.getDirective().token;
  expect(token).toBe("testToken");
  expect(doc.mainTemplate.parameters[0]).toBe("testData");
  expect(ds!['testData']).toBe(datasource['testData']);
};

export const multipleContainersAndTextSpec: APLSpec = getter => {
  const apl = (
    <APL>
      <MainTemplate>
        <Container>
          <Container>
            <Text text="hello" />
          </Container>
        </Container>
      </MainTemplate>
    </APL>
  );
  const doc = getter(apl);
  expect(doc.mainTemplate.items[0].type).toBe("Container");
  expect(doc.mainTemplate.items[0].items[0].type).toBe("Container");
  expect(doc.mainTemplate.items[0].items[0].items[0].type).toBe("Text");
  expect(doc.mainTemplate.items[0].items[0].items[0].text).toBe("hello");
};

export const aplDocumentLevelSpec: APLSpec = getter => {
  const imports = [{ name: 'test-import', version: '1.1.0' }];
  const layouts = { testLayout: {} };
  const styles = { testStyle: {} };
  const resources = [
    {
      colors: {
        testColor: "#0022f3"
      }
    }
  ];
  const graphics = { 
    testGraphic: {
      type: "AVG",
      version: "1.0"
    }
  };
  const description = "Test Jsx";
  const exports = {
    graphics: [
      "testGraphic"
    ]
  };
  const keyboardEvent = {
    key: "6",
    code: "Digit6",
    repeat: true
  }
  const settings = {
    idleTimeout: 2000
  };
  const animateCommand: Command = {
    type: "AnimateItem",
    duration: 500,
    value: [
      {
        "property": "opacity",
        to: "${to}"
      }
    ]
  };
  const commandsMap = {
    myAnimateCommand: {
      parameters: [
        "to"
      ],
      command: animateCommand
    }
  };
  const apl = (
    <APL settings={settings} export={exports} resources={resources} styles={styles} 
    layouts={layouts} description={description} graphics={graphics}
    commands={commandsMap} onMount={[animateCommand]} handleKeyDown={[keyboardEvent]}
    handleKeyUp={[keyboardEvent]}>
      <APLImports imports={imports} />
    </APL> 
  );
  const doc = getter(apl);
  expect(doc.export.graphics[0]).toBe("testGraphic");
  expect(doc.export.description).toBe("Test Jsx");
  expect(doc.graphics.testGraphic).toEqual(graphics.testGraphic);
  expect(doc.commands.myAnimateCommand.parameters[0]).toBe("to");
  expect(doc.commands.myAnimateCommand.command).toEqual(animateCommand);
  expect(doc.onMount[0]).toEqual(animateCommand);
  expect(doc.handleKeyDown[0]).toEqual(keyboardEvent);
  expect(doc.handleKeyUp[0]).toEqual(keyboardEvent);
  expect(doc.settings).toEqual(settings);
  expect(doc.resources.colors.testColor).toBe("#0022f3");
  expect(doc.import[0]).toEqual(
    {
      name: "test-import",
      version: "1.1.0"
    }
  );
}

export const aplDataBindingSpec: APLSpec = getter => {
  const apl = (
    <APL>
      <MainTemplate>
        <Container when="${expression}">
          <Text transform="${aplData}" />
        </Container>
      </MainTemplate>
    </APL>
  );
  const doc = getter(apl);
  expect(doc.mainTemplate.items[0].type).toBe("Container");
  expect(doc.mainTemplate.items[0].items[0].type).toBe("Text");
  expect(doc.mainTemplate.items[0].when).toBe("${expression}");
  expect(doc.mainTemplate.items[0].items[0].transform).toBe("${aplData}");
}

export const specs = [
  {
    name: '<Frame />',
    spec: frameSpec,
  },
  {
    name: '<Image />',
    spec: imageSpec,
  },
  {
    name: 'dark theme',
    spec: darkThemeSpec,
  },
  {
    name: 'light theme',
    spec: lightThemeSpec,
  },
  {
    name: 'mainTemplateWithDatasourceAndToken',
    spec: mainTemplateWithDatasourceAndToken
  },
  {
    name: 'text within container',
    spec: containerAndTextSpec,
  },
  {
    name: 'nested containers and text',
    spec: multipleContainersAndTextSpec
  },
  {
    name: 'aplDataBinding',
    spec: aplDataBindingSpec
  }
];
