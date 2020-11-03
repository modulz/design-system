import React from 'react';
import { styled } from '../stitches.config';
import {
  ProgressBar as ProgressBarPrimitive,
  ProgressBarProps,
  styles,
} from '@interop-ui/react-progress-bar';

const StyledProgressBar = styled(ProgressBarPrimitive, {
  ...styles.root,
  height: '$1',
  overflow: 'hidden',
  borderRadius: '9999px',
  background:
    'linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)',
});

const ProgressBarIndicator = styled(ProgressBarPrimitive.Indicator, {
  ...styles.indicator,
  width: '100%',
  backgroundColor: '$gray300',
  transition: 'transform 100ms ease-out',
});

export function ProgressBar({ value = 0, max = 100, ...props }: ProgressBarProps) {
  const percentage = value != null ? Math.round((value / max) * 100) : null;

  return (
    <div>
      <StyledProgressBar {...props}>
        <ProgressBarIndicator style={{ transform: `translateX(${percentage}%)` }} />
      </StyledProgressBar>
    </div>
  );
}
