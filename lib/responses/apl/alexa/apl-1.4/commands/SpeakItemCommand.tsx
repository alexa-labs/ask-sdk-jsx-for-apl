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

import { LiteralUnion } from '../../../common';
type alignEnum = 'first' | 'center' | 'last' | 'visible';
type highlightModeEnum = 'line' | 'block';
export interface ISpeakItemCommand {
  /* An optional description for this command */
  description?: string;
  /* Delay time in milliseconds before this event fires */
  delay?: number | string;
  /* If true, disable the Interaction Timer */
  screenLock?: boolean | string;
  /* Specify the sequencer that should execute this command. */
  sequencer?: string;
  /* If this evaluates to false, the command is skipped */
  when?: boolean | string;
  /* The alignment of the item after scrolling. */
  align?: LiteralUnion<alignEnum, string>;
  /* The id of the component. */
  componentId?: string;
  /* How Karaoke is applied: on a line-by-line basis, or to the entire block. */
  highlightMode?: LiteralUnion<highlightModeEnum, string>;
  /* The minimum number of milliseconds that an item will be highlighted. */
  minimumDwellTime?: number | string;
  [key: string]: unknown;
  readonly type: 'SpeakItem';
}
