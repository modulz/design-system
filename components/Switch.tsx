import { styled } from '../stitches.config';
import { Switch as SwitchPrimitive, styles } from '@interop-ui/react-switch';

const Track = styled('input', {
  ...(styles.root as any),
  width: 30,
  height: 5,
  backgroundColor: '$gray500',
  borderRadius: '$pill',
  my: 5,
  '&[data-state="checked"]': {
    backgroundColor: '$gray700',
  },
});

const Thumb = styled('span', {
  ...(styles.thumb as any),
  width: 11,
  height: 11,
  backgroundColor: 'orange',
  borderRadius: '$round',
  transition: 'all 100ms ease',
  mt: -3,
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