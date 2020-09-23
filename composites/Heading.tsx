import { Text } from '../components/Text';

export function Heading(props) {
  return (
    <Text
      as="h3"
      size={{
        initial: '6',
        bp2: '7'
      }}
      css={{
        fontWeight: 500,
        initial: {
          lineHeight: '25px'
        },
        bp2: {
          lineHeight: '30px'
        }
      }}
      {...props}
     />
  );
}