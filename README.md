<p align="center">
  <img src="https://m.media-amazon.com/images/G/01/mobile-apps/dex/avs/docs/ux/branding/mark1._TTH_.png">
  <br/>
  <h1 align="center">Alexa Skills Kit SDK - JSX for APL</h1>
</p>

**JSX for APL** is a React-based APL templating framework that allows developers to define APL document within the code. By using the React-style JSX/TSX file format, developers can include JSX-based APL components as XML-style definition for the APL and shorten the APL definition code length, making the development more manageable.

## Installation

Install `ask-sdk-jsx-for-apl`, `react` and `react-dom` as dependencies

```
npm install -S ask-sdk-jsx-for-apl react react-dom
```

## Getting Started

To learn how to set up your workspace and get started, please reference the [Getting Started](https://github.com/alexa-labs/ask-sdk-jsx-for-apl/wiki/Getting-Started) section.

## Basic Usage

To create an APL component using JSX, create an APL document using `APL` component and `MainTemplate` component.

**Component Code**

```JSX
// apl/LaunchAplDocument.js

import * as React from 'react';
import { APL, MainTemplate, Container, Text } from 'ask-sdk-jsx-for-apl';

export class LaunchAplDocument extends React.Component {
    constructor(props) {
        super(props);
        this.launchMessage = 'Welcome to my first JSX for APL skill!';
    }
    render() {
        return (
            <APL theme="dark">
                <MainTemplate>
                    <Container
                        alignItems="center"
                        justifyContent="spaceAround">
                        <Text
                            text={this.launchMessage}
                            fontSize="50px"
                            color="rgb(251,184,41)" />
                    </Container>
                </MainTemplate>
            </APL>
        );
    }
}
```

</details>

After creating your component, include it in your skill response as an APL directive.

**Skill Response**

```JS
import { SkillBuilders } from 'ask-sdk';
import * as Alexa from 'ask-sdk-core';
import { AplDocument } from "ask-sdk-jsx-for-apl";

import { LaunchAplDocument } from './apl/LaunchAplDocument';

class LaunchIntentHandler {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'LaunchRequest';
    }

  handle(handlerInput) {
    const responseBuilder = handlerInput.responseBuilder;
    return responseBuilder
        .addDirective(
        new AplDocument({
            (<LaunchAplDocument />).getDirective();
        }))
        .speak("Welcome to my first JSX for APL skill")
        .getResponse();
  }
}

const builder = SkillBuilders.custom();

export const handler = builder.addRequestHandlers(
    new LaunchIntentHandler()
).lambda();
```

To see more example, check out the [Common Usage](https://github.com/alexa-labs/ask-sdk-jsx-for-apl/wiki/Common-Usage) section in our Wiki.

## Why use JSX for APL?

### Code First Approach

JSX for APL uses React-based components to define each APL document. By using JSX files to include XML-based APL document declaration and defining the document in an encapsulated React component, we can simply import and include the component into the response as a natural Javascript/Typescript code. Following code shows how a JSX for APL document can naturally fit into the LaunchIntent handler.

<details>
<summary>Example Code</summary>

APL Document

```JSX
import * as React from 'react';
import { APL, MainTemplate, Frame, Container, Text } from 'ask-sdk-jsx-for-apl';

export class LaunchAplDocument extends React.Component {
    constructor(props) {
        super(props);
        this.launchMessage = 'Welcome to my first JSX for APL skill!';
    }
    render() {
        return (
            <APL theme="dark">
                <MainTemplate parameters={["payload"]}>
                    <Frame
                    width="100vw"
                    height="100vh"
                    backgroundColor="rgb(22,147,165)"
                    >
                        <Container
                        alignItems="center"
                        justifyContent="spaceAround"
                        >
                            <Text
                                text={this.launchMessage}
                                fontSize="50px"
                                color="rgb(251,184,41)"
                            />
                        </Container>
                    </Frame>
                </MainTemplate>
            </APL>
        );
    }
}
```

Intent Handler

```JSX
import { HandlerInput, RequestHandler } from 'ask-sdk';
import * as Alexa from 'ask-sdk-core';
import { Response } from 'ask-sdk-model';

import { LaunchAplDocument } from './apl/LaunchAplDocument';

export class LaunchIntentHandler {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'LaunchRequest';
    }

    handle(handlerInput) {
        const responseBuilder = handlerInput.responseBuilder;
        return responseBuilder
            .addDirective(
                new AplDocument({
                    (<LaunchAplDocument />).getDirective();
                })
            )
            .speak("Welcome to my first JSX for APL skill!")
            .getResponse();
    }
};
```

Main Skill

```JSX
import { SkillBuilders } from 'ask-sdk';

import { LaunchIntentHandler } from './handlers/LaunchIntentHandler';

const builder = SkillBuilders.custom();

export const handler = builder.addRequestHandlers(
    new LaunchIntentHandler()
).lambda();
```

</details>

### Dynamic APL Response

By leveraging React's component render lifecycle, JSX for APL can dynamically change the custom component's behaviour and minimize the returned APL document size.

The following example shows a usage of dynamic APL Response to check for the viewport shape on runtime and service different width and height values for the APL documents.

<details>
<summary>Example Code</summary>

APL Document

```JSX
import * as React from 'react';
import { APL, MainTemplate, Frame, Container, Text } from 'ask-sdk-jsx-for-apl';

export class LaunchAplDocument extends React.Component {
    constructor(props) {
        super(props);
        this.launchMessage = 'Welcome to my first JSX for APL skill!';
    }
    render() {
      return (
        <APL theme="dark">
          <MainTemplate parameters={["payload"]}>
            <Frame
              width={this.props.aplParameters.width}
              height={this.props.aplParameters.height}
              backgroundColor="rgb(22,147,165)"
            >
              <Container
                alignItems="center"
                justifyContent="spaceAround"
              >
                <Text
                  text={this.launchMessage}
                  fontSize="50px"
                  color="rgb(251,184,41)"
                />
              </Container>
            </Frame>
          </MainTemplate>
        </APL>
      );
    }
}
```

Intent Handler

```JSX
import { HandlerInput, RequestHandler } from 'ask-sdk';
import * as Alexa from 'ask-sdk-core';
import { Response } from 'ask-sdk-model';

import { LaunchAplDocument } from './apl/LaunchAplDocument';

export class LaunchIntentHandler {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'LaunchRequest';
    }

    handle(handlerInput) {
        const responseBuilder = handlerInput.responseBuilder;
        const viewportShape = handlerInput.requestEnvelope.context.Viewport.shape;
        const aplParameters = {
          width: '100vw',
          height: '100vh'
        };
        if (viewportShape === 'ROUND') {
          aplParameters.width = '80vh';
          aplParameters.height = '80vh';
        }

        return responseBuilder
            .addAplxDocument(
                new AplDocument({
                    (<LaunchAplDocument aplParameters={aplParameters}/>)
                        .getDirective();
                }))
            .speak("Welcome to my first JSX for APL skill")
            .getResponse();
    }
};

```

</details>

### Readability, Reusability and Reliability

In the traditional JSON-based APL, a reuse of components can get complicated. Without use of layouts, multiple copies of same structure can exist and code change management can get very difficult. With JSX for APL, however, the reusability issue is resolved by simply creating new instances of a defined component class, making changes very fast and reliable.

The following example shows the reuse of Container component to serve different content.

<details>
<summary>Example Code</summary>

Sub-component Code

```JSX
import * as React from 'react';
import { Container } from 'ask-sdk-jsx-for-apl';

class WorkoutColumn extends React.Component {
    render() {
        return (
            <Container width="30%" height="100%"
                paddingBottom="16dp"
                paddingLeft="16dp"
                paddingRight="16dp"
                paddingTop="16dp"
                spacing="16dp">
                {this.props.children}
            </Container>
        );
    }
}

export default WorkoutColumn;
```

APL Document

```JSX
import * as React from 'react';
import { APL, Container, Image, Text } from 'ask-sdk-jsx-for-apl';
import WorkoutColumn from './workout-column-apl';

class WorkoutApl extends React.Component {
    private renderWorkoutPartsImage() { ... }
    private renderWorkoutStepsImages() { ... }
    private renderWorkoutStepsTexts() { ... }

    render() {
        return (
            <APL theme="dark">
                <MainTemplate>
                    <Container width="100%" height="80vh" direction="row">
                        <WorkoutColumn>
                            {
                                this.renderWorkoutPartsImage();
                            }
                        </WorkoutColumn>
                        <WorkoutColumn>
                            {
                                this.renderWorkoutStepsImages();
                            }
                        </WorkoutColumn>
                        <WorkoutColumn>
                            {
                                this.renderWorkoutStepsTexts();
                            }
                        </WorkoutColumn>
                    </Container>
                </MainTemplate>
            </APL>
        );
    }
}

export default WorkoutApl;
```

Intent Handler

```JSX
import * as Alexa from 'ask-sdk';

import WorkOutApl from './apl/workout-apl';

class WorkoutTypeIntentHandler {
    canHandle(handlerInput) {
        return Alexa.getIntentName(handlerInput.requestEnvelope) === 'WorkoutTypeIntent';
    }

    async handle(handlerInput) {
        const responseBuilder = handlerInput.responseBuilder;
        ... other code logic ...
        return responseBuilder
            .addAplxDocument(<WorkOutApl ... />)
            .speak('Here\'s a workout!')
            .getResponse();
    }
}
```

</details>

Check out the [Core Concepts](https://github.com/alexa-labs/ask-sdk-jsx-for-apl/wiki/Core-Concepts) page in our Wiki to see more details!

## Security

See [CONTRIBUTING](CONTRIBUTING.md#security-issue-notifications) for more information.

## License

This project is licensed under the Apache-2.0 License.

