import { Text } from '../components/Text';

export function Title(props) {
  return (
    <Text
      as="h1"
      size={{
        initial: '8',
        bp2: '9'
      }}
      css={{
        initial: {
          lineHeight: '35px'
        },
        bp2: {
          lineHeight: '55px'
        }
      }}>
      {props.children}
    </Text>
  );
}