import { Text } from '../components/Text';

export function Heading(props) {
  return (
    <Text
      as="h3"
      size={{
        initial: '6',
        bp2: '7',
      }}
      css={{
        fontWeight: 500,
        fontVariantNumeric: 'proportional-nums',
        ...props.css,
        initial: {
          lineHeight: '25px',
          ...props.initial,
        },
        bp2: {
          lineHeight: '30px',
          ...props.bp2,
        },
      }}
      {...props}
    />
  );
}
