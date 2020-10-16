import omit from 'lodash/omit';
import * as React from 'react';
import { BaseComponent, LiteralUnion } from '../../../common';
type numberingEnum = 'normal' | 'reset' | 'skip';
export interface GridSequenceChildProps {
  /* Controls the ordinal value when the parent has set numbered. */
  numbering?: LiteralUnion<numberingEnum, string>;
  [key: string]: unknown;
}
export const GridSequenceChild = (
  props: React.PropsWithChildren<GridSequenceChildProps>
) => {
  return (
    <>
      <BaseComponent
        definition={{
          type: 'GridSequenceChild',
          ...omit(props, ['children']),
        }}>
        {props.children}
      </BaseComponent>
    </>
  );
};
