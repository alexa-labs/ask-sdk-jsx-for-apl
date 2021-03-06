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

type Command = {
  type: string;
  description?: string;
  delay?: number | string;
  screenLock?: boolean | string;
  when?: boolean | string;
  [key: string]: any;
};
export interface IParallelCommand {
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
  /* An unordered list of commands to execute in parallel. */
  commands: Command[] | string;
  [key: string]: unknown;
  readonly type: 'Parallel';
}
