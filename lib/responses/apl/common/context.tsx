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

import React from 'react';
import { ResponseBuilder } from 'ask-sdk-core';

export interface ImportDefinition {
  name: string;
  version: string;
  source?: string;
}

export interface LayoutDefinition {
  [key: string]: {
    parameters?: any;
    items?: any;
    [key: string]: any;
  }
}

export const ResponseBuilderCtx = React.createContext<ResponseBuilder | null>(null);

export interface MainTemplateDefinition {
  parameters: string[];
  items: unknown[];
}
export const {
  Provider: MainTemplateProvider,
  Consumer: MainTemplateConsumer
} = React.createContext<MainTemplateDefinition | null>(null);

export interface APLContext {
  items: unknown[];
}

export interface LayoutContext {
  listItems: unknown[];
}

export const {
  Provider: APLComponentProvider,
  Consumer: APLComponentConsumer,
} = React.createContext<APLContext | null>(null);

export const {
  Provider: ListComponentProvider,
  Consumer: ListComponentConsumer,
} = React.createContext<LayoutContext | null>(null);

interface APLRoot {
  imports: ImportDefinition[];
  layouts: LayoutDefinition;
}
export const {
  Provider: APLProvider,
  Consumer: APLConsumer,
} = React.createContext<APLRoot | null>(null);
