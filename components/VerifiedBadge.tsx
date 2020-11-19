import React from 'react';
import { StitchesProps, styled, css } from '../stitches.config';
import { Flex } from '../components/Flex';
import { CheckIcon } from '@modulz/radix-icons'

export type VerifiedBadgeProps = StitchesProps<typeof VerifiedBadge>;

const StyledFlex = styled(Flex, {
  alignItems: 'center',
  backgroundColor: '$blue800',
  borderRadius: '$round',
  color: 'white',
  justifyContent: 'center',
  width: '$3',
  height: '$3',
});

export function VerifiedBadge(props) {
  return (
    <StyledFlex {...props}>
      <CheckIcon />
    </StyledFlex>
  );
}
