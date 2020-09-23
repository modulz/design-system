import { Text } from '../components/Text';

export function Subheading(props) {
  return (
    <Text
      as="h4"
      size={{
        initial: '5',
        bp2: '6'
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