import { Text } from '../components/Text';

export function Title(props) {
  return (
    <Text
      as="h1"
      size={{
        initial: '8',
        bp2: '9',
      }}
      {...props}
      css={{
        fontWeight: 500,
        ...props.css,
        initial: {
          lineHeight: '35px',
          ...props.initial,
        },
        bp2: {
          lineHeight: '55px',
          ...props.bp2,
        },
      }}
    />
  );
}