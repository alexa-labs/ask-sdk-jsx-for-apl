import omit from 'lodash/omit';
import * as React from 'react';
import { BaseComponent, LiteralUnion } from '../../../common';
type DisplayEnum = 'invisible' | 'none' | 'normal';
type fontStyleEnum = 'normal' | 'italic';
type fontWeightEnum =
  | 'normal'
  | 'bold'
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900';
type hintStyleEnum = 'normal' | 'italic';
type hintWeightEnum =
  | 'normal'
  | 'bold'
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900';
type keyboardTypeEnum =
  | 'decimalPad'
  | 'emailAddress'
  | 'normal'
  | 'numberPad'
  | 'phonePad'
  | 'url';
type submitKeyTypeEnum = 'done' | 'go' | 'next' | 'search' | 'send';
type typeEnum =
  | 'any'
  | 'string'
  | 'number'
  | 'integer'
  | 'style'
  | 'color'
  | 'boolean'
  | 'dimension'
  | 'component'
  | 'componentArray';
type Binding = {
  name: string;
  value: string;
  type?: LiteralUnion<typeEnum, string>;
};
type Entity = {
  id: string;
  type: string;
  name: string;
  nameSynonyms?: string[] | string;
  targetSlotName?: string;
};
type TickHandler = {
  commands: Command[] | string;
  description?: string;
  minimumDelay?: number | string;
  when?: boolean | string;
};
type KeyboardHandler = {
  commands?: Command[] | string;
  propagate?: boolean | string;
  when?: boolean | string;
};
type Command = {
  type: string;
  description?: string;
  delay?: number | string;
  screenLock?: boolean | string;
  when?: boolean | string;
  [key: string]: any;
};
type dimension = string | number;
type Transform = {
  rotate?: number | string;
  scale?: number | string;
  scaleX?: number | string;
  scaleY?: number | string;
  skewX?: number | string;
  skewY?: number | string;
  translateX?: dimension;
  translateY?: dimension;
};
export interface EditTextProps {
  /* Voice-over will read this string when the user selects this component */
  accessibilityLabel?: string;
  /* Expressions to add to the data binding context */
  bind?: Binding[] | string;
  /* An Optional description of this component. */
  description?: string;
  /* If true, this component has the checked state set. */
  checked?: boolean | string;
  /* If true, this component does not respond to touch or focus. */
  disabled?: boolean | string;
  /* Control if the component is displayed on the screen. */
  display?: LiteralUnion<DisplayEnum, string>;
  /* An Array of entities associated with the component */
  entity?: Entity[] | string;
  /* An Array of entities associated with the component */
  entities?: Entity[] | string;
  /* An Array of entities associated with the component */
  handleTick?: TickHandler[] | string;
  /* The requested height of the component */
  height?: dimension;
  /* Reference name of the component, used for navigation and events */
  id?: string;
  /* If true, use the parent’s state */
  inheritParentState?: boolean | string;
  /* The maximum allowed height of this component. */
  maxHeight?: dimension;
  /* The maximum allowed width of this component */
  maxWidth?: dimension;
  /* The minimum allowed height of this component. */
  minHeight?: dimension;
  /* The minimum allowed width of this component */
  minWidth?: dimension;
  /* Command to execute when the component is first displayed */
  onMount?: Command[] | string;
  /* Command(s) to execute when a cursor (mouse pointer) enters the component’s active region */
  onCursorEnter?: Command[] | string;
  /* Command(s) to execute when a cursor (mouse pointer) exits the component’s active region */
  onCursorExit?: Command[] | string;
  /* Opacity of this component and children */
  opacity?: number | string;
  /* Space to add to the top of this component */
  paddingTop?: dimension;
  /* Space to add to the right of this component */
  paddingRight?: dimension;
  /* Space to add to the bottom of this component */
  paddingBottom?: dimension;
  /* Space to add to the left of this component */
  paddingLeft?: dimension;
  /* Shadow color */
  shadowColor?: string;
  /* Horizontal offset of the shadow */
  shadowHorizontalOffset?: dimension;
  /* Shadow blur radius */
  shadowRadius?: dimension;
  /* Vertical offset of the shadow */
  shadowVerticalOffset?: dimension;
  /* Transformed speech information for audio playback */
  speech?: string;
  /* Named style or styles to apply */
  style?: string;
  /* Array of transformations. */
  transform?: Transform[] | string;
  /* If it evaluates to false, this component does not inflate */
  when?: boolean | string;
  /* The requested width of this component */
  width?: dimension;
  /* Command to execute when the component receives focus */
  onFocus?: Command[] | string;
  /* Command to execute when the component loses focus */
  onBlur?: Command[] | string;
  /* Keyboard handler(s) to evaluate when the component receives a key down */
  handleKeyDown?: KeyboardHandler[] | string;
  /* Keyboard handler(s) to evaluate when the component receives a key up */
  handleKeyUp?: KeyboardHandler[] | string;
  /* Color of the border */
  borderColor?: string;
  /* Width of the border stroke */
  borderStrokeWidth?: dimension;
  /* Width of the border */
  borderWidth?: dimension;
  /* Text color */
  color?: string;
  /* The name of the font family */
  fontFamily?: string;
  /* The size of the text */
  fontSize?: dimension;
  /* The style of the font */
  fontStyle?: LiteralUnion<fontStyleEnum, string>;
  /* The weight of the font */
  fontWeight?: LiteralUnion<fontWeightEnum, string>;
  /* The highlight color to show behind selected text */
  highlightColor?: string;
  /* Hint text to display when no text */
  hint?: string;
  /* The color of the hint text */
  hintColor?: string;
  /* The style of the hint font */
  hintStyle?: LiteralUnion<hintStyleEnum, string>;
  /* The weight of the hint font */
  hintWeight?: LiteralUnion<hintWeightEnum, string>;
  /* The type of keyboard to display */
  keyboardType?: LiteralUnion<keyboardTypeEnum, string>;
  /* Maximum number of lines of text to display. */
  maxLength?: number | string;
  /* Command to execute when the text changes from a user event */
  onTextChange?: Command[] | string;
  /* Command to execute when the submit button is pressed */
  onSubmit?: Command[] | string;
  /* Hide characters as they are typed if true */
  secureInput?: boolean | string;
  /* If true the text will be selected on a focus event */
  selectOnFocus?: boolean | string;
  /* Specifies approximately how many characters can be displayed */
  size?: number | string;
  /* The type of the return key */
  submitKeyType?: LiteralUnion<submitKeyTypeEnum, string>;
  /* The text to display */
  text?: string;
  /* Restrict the characters that can be entered */
  validCharacters?: string;
  [key: string]: unknown;
}
export const EditText = (props: React.PropsWithChildren<EditTextProps>) => {
  return (
    <>
      <BaseComponent
        definition={{ type: 'EditText', ...omit(props, ['children']) }}>
        {props.children}
      </BaseComponent>
    </>
  );
};
