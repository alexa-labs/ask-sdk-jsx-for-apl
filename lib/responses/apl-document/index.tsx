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
import { renderToStaticMarkup } from "react-dom/server";
import { ResponseBuilder, ResponseFactory } from "ask-sdk-core";
import { interfaces } from "ask-sdk-model";
import { ResponseBuilderCtx } from "../apl/common";

import RenderDocumentDirective = interfaces.alexa.presentation.apl.RenderDocumentDirective;

export class AplDocument {
  private readonly responseBuilder: ResponseBuilder;
  private readonly doc: React.ReactElement;

  constructor(doc: React.ReactElement) {
    this.doc = doc;
    this.responseBuilder = ResponseFactory.init();
  }

  private generateStaticMarkup() {
    if (!this.directiveExists()) {
      renderToStaticMarkup(
        <ResponseBuilderCtx.Provider value={this.responseBuilder}>
          {this.doc}
        </ResponseBuilderCtx.Provider>
      );
    }
  }

  private directiveExists() {
    if (this.responseBuilder.getResponse()) {
      return (this.responseBuilder.getResponse().directives || []).find(
        (d) => d.type === 'Alexa.Presentation.APL.RenderDocument'
      );
    } else {
      throw 'ResponseBuilder response object can not be null or undefined!';
    }
  }

  public getDirective() {
    this.generateStaticMarkup();
    if (this.responseBuilder.getResponse()) {
      return (this.responseBuilder.getResponse().directives || []).find(
        (d) => d.type === 'Alexa.Presentation.APL.RenderDocument'
      )! as RenderDocumentDirective;
    } else {
      throw 'ResponseBuilder response object can not be null or undefined!';
    }
  }

  public getDocument() {
    return this.getDirective().document!;
  }

  public getDatasources() {
    return this.getDirective().datasources;
  }
}
