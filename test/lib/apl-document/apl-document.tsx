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

import React from "react";
import { AplDocument } from "../../../lib";
import { specs as aplSpecs } from "../../specs/apl-specs";
import { specs as alexaLayoutSpecs } from "../../specs/alexa-layouts-specs"
import { specs as aplCommandSpecs } from "../../specs/apl-commands-specs"
import { specs as aplCustomLayoutsSpecs } from "../../specs/apl-custom-layouts"

const getter = (doc) => new AplDocument(doc).getDocument();
describe('APLDocument', () => {
  describe('APL Specs', () => {
    aplSpecs.forEach(({name, spec}) => test(name, () => spec(getter)));
  });
  describe('Alexa Layouts Specs', () => {
    alexaLayoutSpecs.forEach(({name, spec}) => test(name, () => spec(getter)));
  });
  describe('APL Commands Specs', () => {
    aplCommandSpecs.forEach(({name, spec}) => test(name, () => spec(getter)));
  });
  describe('APL Custom Layouts Specs', () => {
    aplCustomLayoutsSpecs.forEach(({name, spec}) => test(name, () => spec(getter)));
  });
});
