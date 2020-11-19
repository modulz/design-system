import React from 'react';
import { StitchesProps, styled } from '../stitches.config';
import {
  Label as LabelPrimitive,
  LabelProps as LabelPrimitiveProps,
} from '@interop-ui/react-label';
import { Text } from './Text';

export type LabelProps = LabelPrimitiveProps & StitchesProps<typeof StyledLabel>;

const StyledLabel = styled(Text, {
  // ...styles.root,
});

export const Label = React.forwardRef<HTMLSpanElement, LabelProps>((props, forwardedRef) => (
  <StyledLabel ref={forwardedRef} {...props} />
));
