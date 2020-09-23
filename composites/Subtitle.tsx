import { Text } from '../components/Text';

export function Subtitle(props) {
  return (
    <Text
      as="h2"
      size={{
        initial: '5',
        bp2: '6'
      }}
      css={{
        color: '$gray900',
        initial: {
          lineHeight: '27px'
        },
        bp2: {
          lineHeight: '29px'
        }
      }}
      {...props}
     />
  );
}