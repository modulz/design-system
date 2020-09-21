import { styled } from '../stitches.config';
import { Switch as SwitchPrimitive, styles } from '@interop-ui/react-switch';

const Track = styled('input', {
  ...(styles.root as any),
  width: 30,
  height: 7,
  backgroundColor: '$gray500',
  borderRadius: '$pill',
  my: 5,
  '&[data-state="checked"]': {
    backgroundColor: '$gray800',
  },
});

const Thumb = styled('span', {
  ...(styles.thumb as any),
  width: 19,
  height: 19,
  backgroundColor: '$gray700',
  borderRadius: '$round',
  transition: 'all 100ms ease',
  mt: -1,
  '&:hover': {
    backgroundColor: '$gray900',
  },
  '&[data-state="checked"]': {
    transform: 'translateX(15px)',
  },
});

export function Switch(props) {
  return (
    <SwitchPrimitive as={Track} {...props}>
      <SwitchPrimitive.Thumb as={Thumb} />
    </SwitchPrimitive>
  );
}