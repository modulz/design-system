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
        ...props.css,
        initial: {
          lineHeight: '25px',
          ...props.initial,
        },
        bp2: {
          lineHeight: '30px',
          ...props.bp2,
        }
      }}
      {...props}
     />
  );
}