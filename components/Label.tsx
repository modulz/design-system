import React from 'react';
import { StitchesProps, styled } from '../stitches.config';
import * as LabelPrimitive from '@interop-ui/react-label';
import { Text } from './Text';

export type LabelProps = React.ComponentProps<typeof LabelPrimitive.Root> &
  StitchesProps<typeof StyledLabel>;

const StyledLabel = styled(Text, {
  display: 'inline-block',
  verticalAlign: 'middle',
  cursor: 'default',
});

export const Label = React.forwardRef<HTMLSpanElement, LabelProps>((props, forwardedRef) => (
  <StyledLabel ref={forwardedRef} as={LabelPrimitive.Root} {...props} />
));
