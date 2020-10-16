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
import { AplDocument, APLImports, APL, MainTemplate, Frame, Container, Image, Text, EditText, GridSequence, TouchWrapper, Video, Command } from "../../lib";
import { APLSpec } from "./types";

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
        <Image source="http://1" overlayGradient= {{angle: 70, colorRange:"jsx", type:"linear"}} />
      </MainTemplate>
    </APL>
  );
  expect(getter(apl).mainTemplate.items[0]).toEqual(
    {
      type: 'Image',
      source: 'http://1',
      overlayGradient: {
        angle: 70,
        colorRange:"jsx",
        type:"linear"
      }
    }
  )
};

export const darkThemeSpec: APLSpec = (getter) => {
  expect(getter(<APL theme="dark" />).theme).toEqual("dark");
};

export const lightThemeSpec: APLSpec = (getter) => {
  expect(getter(<APL theme="light" />).theme).toEqual("light");
};

export const versionSpec: APLSpec = (getter) => {
  expect(getter(<APL />).version).toEqual("1.4");
};

export const containerAndTextSpec: APLSpec = getter => {
  const apl = (
    <APL>
      <MainTemplate>
        <Container display="normal">
          <Text text="hello" />
          <EditText
            borderColor="darkgrey"
            hintColor="grey"
            hintWeight="200"
            fontSize="20dp"
            size="10"
            hint="Zip Code"
            validCharacters="-0-9"
          />
        </Container>
      </MainTemplate>
    </APL>
  );
  const doc = getter(apl);
  expect(doc.mainTemplate.items[0].type).toBe("Container");
  expect(doc.mainTemplate.items[0].display).toBe("normal");
  expect(doc.mainTemplate.items[0].items[0].type).toBe("Text");
  expect(doc.mainTemplate.items[0].items[0].text).toBe("hello");
  expect(doc.mainTemplate.items[0].items[1].type).toBe("EditText");
  expect(doc.mainTemplate.items[0].items[1].hintColor).toBe("grey");
  expect(doc.mainTemplate.items[0].items[1].hint).toBe("Zip Code");
  expect(doc.mainTemplate.items[0].items[1].validCharacters).toBe("-0-9");
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
            <Text text="from ask-jsx-for-apl" />
          </Container>
          <Text text="testing" />
        </Container>
      </MainTemplate>
    </APL>
  );
  const doc = getter(apl);
  expect(doc.mainTemplate.items[0].type).toBe("Container");
  expect(doc.mainTemplate.items[0].items[1].type).toBe("Text");
  expect(doc.mainTemplate.items[0].items[1].text).toBe("testing");
  expect(doc.mainTemplate.items[0].items[0].type).toBe("Container");
  expect(doc.mainTemplate.items[0].items[0].items[0].type).toBe("Text");
  expect(doc.mainTemplate.items[0].items[0].items[0].text).toBe("hello");
  expect(doc.mainTemplate.items[0].items[0].items[1].type).toBe("Text");
  expect(doc.mainTemplate.items[0].items[0].items[1].text).toBe("from ask-jsx-for-apl");
};

export const multipleNestedComponentsSpec: APLSpec = getter => {
  const openUrlCommand: Command = {
    type: "OpenURL",
    source: "http://openUrl.com"
  }
  const longPressGesture = {
    type: 'LongPress',
    onLongPressStart: [openUrlCommand]
  }
  const apl = (
    <APL>
      <MainTemplate>
        <Container>
          <GridSequence childWidths={["20%", "30%", "auto"]}>
            <Image source="http://1" />
            <TouchWrapper gestures={[longPressGesture]}>
              <Text text="testing touchwrapper text" />
            </TouchWrapper>
            <Video source={{url: "http://2", repeatCount: 3}} />
          </GridSequence>
        </Container>
      </MainTemplate>
    </APL>
  );
  const doc = getter(apl);
  const containerComponent = doc.mainTemplate.items[0];
  const gridSequenceComponent = doc.mainTemplate.items[0].items[0];
  const touchWrapperSequence = doc.mainTemplate.items[0].items[0].items[1];
  expect(containerComponent.type).toBe("Container");
  expect(gridSequenceComponent.type).toBe("GridSequence");
  expect(gridSequenceComponent.childWidths).toEqual(["20%", "30%", "auto"]);
  expect(gridSequenceComponent.items[0].type).toBe("Image");
  expect(gridSequenceComponent.items[0].source).toBe("http://1");
  expect(touchWrapperSequence.type).toBe("TouchWrapper");
  expect(touchWrapperSequence.gestures[0]).toEqual(longPressGesture);
  expect(touchWrapperSequence.items[0].text).toBe("testing touchwrapper text");
  expect(gridSequenceComponent.items[2].type).toBe("Video");
  expect(gridSequenceComponent.items[2].source).toEqual({url: "http://2", repeatCount: 3});
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
        property: "opacity",
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
    name: 'versionSpec',
    spec: versionSpec
  },
  {
    name: 'mainTemplateWithDatasourceAndToken',
    spec: mainTemplateWithDatasourceAndToken
  },
  {
    name: 'multipleNestedComponentsSpec',
    spec: multipleNestedComponentsSpec
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
