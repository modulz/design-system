import { Text } from '../components/Text';

export function Subtitle(props) {
  return (
    <Text
      as="h2"
      size={{
        initial: '5',
        bp2: '6'
      }}
      {...props}
      css={{
        color: '$gray900',
        ...props.css,
        initial: {
          lineHeight: '27px',
          ...props.initial,
        },
        bp2: {
          lineHeight: '29px',
          ...props.bp2,
        },
      }}
     />
  );
}