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
import { APL, MainTemplate, Command, Image, Pager, TouchWrapper } from "../../lib";

export const animateItemSpec: APLSpec = (getter) => {
    const animateItem: Command = {
      type: "AnimateItem",
      duration: 300,
      value: [
        {
          property: 'opacity',
          from: 0,
          to: 1,
        },
      ],
    };
    const apl = (
        <APL>
            <MainTemplate>
                <Image onMount={ [animateItem] }/>
            </MainTemplate>
        </APL>
    );
    expect(getter(apl).mainTemplate.items[0].onMount[0]).toEqual({
        type: 'AnimateItem',
        duration: 300,
        value: [
            {
              property: 'opacity',
              from: 0,
              to: 1,
            },
          ]
    });
}

export const autoPageCommandSpec: APLSpec = (getter) => {
  const autoPage: Command = {
    type: 'AutoPage',
    duration: 500,
    delay: 500,
  };
  const apl = (
    <APL>
      <MainTemplate>
        <Pager onMount={[autoPage]} />
      </MainTemplate>
    </APL>
  );
  expect(getter(apl).mainTemplate.items[0].onMount[0]).toEqual({
    type: 'AutoPage',
    duration: 500,
    delay: 500,
  });
};

export const finishSendEventCommandSpec: APLSpec = (getter) => {
  const finishCommand: Command = {
    type: "Finish"
  };
  const sendCommand: Command = {
    type: "SendEvent",
    arguments: [
      "stopping"
    ]
  }
  const apl = (
    <APL>
      <MainTemplate>
        <TouchWrapper onPress={[sendCommand, finishCommand]} />
      </MainTemplate>
    </APL>
  );
  expect(getter(apl).mainTemplate.items[0].onPress).toEqual([
    {type: 'SendEvent',
    arguments: [
      "stopping"
    ]},
    {
      type: 'Finish'
    }
  ]);
}

export const sequentialWithMultipleCommandSpec: APLSpec = (getter) => {
  const playMedia: Command = {
    type: 'PlayMedia',
    componentId: 'myAudioPlayer',
    source: 'http://test',
    audioTrack: 'test'
  };
  const speakItem: Command = {
    type: 'SpeakItem',
    componentId: 'mySpokenItem'
  };
  const sequential: Command = {
    type: 'Sequential',
    commands: [playMedia, speakItem]
  };
  const apl = (
    <APL>
      <MainTemplate>
        <TouchWrapper onPress={[sequential]} />
      </MainTemplate>
    </APL>
  );
  expect(getter(apl).mainTemplate.items[0].onPress).toEqual([
    {
      type: 'Sequential',
      commands: [
        { type: 'PlayMedia',
        componentId: 'myAudioPlayer',
        source: 'http://test',
        audioTrack: 'test' },
        {
          type: 'SpeakItem',
          componentId: 'mySpokenItem'
        }
      ]
    },
  ]);
}

export const setCommandsSpec: APLSpec = (getter) => {
  const setPage: Command = {
    type: 'SetPage',
    componentId: 'myPager',
    position: 'relative',
    value: 1,
  };
  const setFocus: Command = {
    type: 'SetFocus',
    componentId: 'myButton',
  };
  const setState: Command = {
    type: 'SetState',
    componentId: 'myButton',
    state: 'checked',
    value: true,
  };
  const setValue: Command = {
    type: 'SetValue',
    property: 'opacity',
    componentId: 'myContainer',
    value: 1,
  };

  const apl = (
    <APL>
      <MainTemplate>
        <TouchWrapper onPress={[setPage, setFocus, setState, setValue]} />
      </MainTemplate>
    </APL>
  );
  expect(getter(apl).mainTemplate.items[0].onPress).toEqual([
    {
      type: 'SetPage',
      componentId: 'myPager',
      position: 'relative',
      value: 1,
    },
    { type: 'SetFocus', componentId: 'myButton' },
    {
      type: 'SetState',
      componentId: 'myButton',
      state: 'checked',
      value: true,
    },
    {
      type: 'SetValue',
      property: 'opacity',
      componentId: 'myContainer',
      value: 1,
    },
  ]);
};

export const parallelCommandWithMultipleCommands: APLSpec = (getter) => {
  const scrollToCommand: Command = {
    type: "ScrollToComponent",
    componentId: "test",
    align: "center"
  }

  const openUrlCommand: Command = {
    type: "OpenURL",
    source: "https://www.amazon.com/",
    onFail: [ scrollToCommand ]
  }

  const speakList: Command = {
    type: "SpeakList",
    start: 3,
    count: 3,
    componentId: "movieList"
  }

  const parallelCommand: Command = {
    type: "Parallel",
    delay: 500,
    commands: [
      openUrlCommand,
      speakList
    ]
  }
  const apl = (
    <APL>
      <MainTemplate>
        <TouchWrapper onPress={[parallelCommand]} />
      </MainTemplate>
    </APL>
  );
  expect(getter(apl).mainTemplate.items[0].onPress).toEqual([
    {
      type: 'Parallel',
      delay: 500,
      commands: [
        {
          type: 'OpenURL',
          source: 'https://www.amazon.com/',
          onFail: [
            {
              type: 'ScrollToComponent',
              componentId: 'test',
              align: 'center',
            },
          ],
        },
        {
          type: 'SpeakList',
          start: 3,
          count: 3,
          componentId: 'movieList',
        },
      ],
    },
  ]);
}

export const specs = [
    {
      name: 'Animation Command',
      spec: animateItemSpec
    },
    {
      name: 'AutoPage Command',
      spec: animateItemSpec
    },
    {
      name: 'Finish and Send Event Command',
      spec: finishSendEventCommandSpec
    },
    {
      name: 'Sequential Command With Multiple Commands',
      spec: sequentialWithMultipleCommandSpec
    },
    {
      name: 'Set Commands',
      spec: setCommandsSpec
    },
    {
      name: "Parallel Command with Multiple Commands",
      spec: parallelCommandWithMultipleCommands
    }
]