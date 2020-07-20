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

import { ResponseBuilder } from "ask-sdk-core";

export const mockResponseBuilder = (): jest.Mocked<ResponseBuilder> => {
  return {
    speak: jest.fn(),
    reprompt: jest.fn(),
    withSimpleCard: jest.fn(),
    withStandardCard: jest.fn(),
    withLinkAccountCard: jest.fn(),
    withAskForPermissionsConsentCard: jest.fn(),
    addDelegateDirective: jest.fn(),
    addElicitSlotDirective: jest.fn(),
    addConfirmSlotDirective: jest.fn(),
    addConfirmIntentDirective: jest.fn(),
    addAudioPlayerPlayDirective: jest.fn(),
    addAudioPlayerStopDirective: jest.fn(),
    addAudioPlayerClearQueueDirective: jest.fn(),
    addRenderTemplateDirective: jest.fn(),
    addHintDirective: jest.fn(),
    addVideoAppLaunchDirective: jest.fn(),
    withCanFulfillIntent: jest.fn(),
    withShouldEndSession: jest.fn(),
    addDirective: jest.fn(),
    getResponse: jest.fn()
  }
};
