import { styled, StitchesProps } from '../stitches.config';
import { ImprovedFlex } from './ImprovedFlex';
import { flexGapSupported } from './flexGapSupported';

export type FlexProps = StitchesProps<typeof _Flex>;

export const Flex = ImprovedFlex;
