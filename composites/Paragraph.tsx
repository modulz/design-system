import { Text } from '../components/Text';

export function Paragraph(props) {
  return (
    <Text
      as="p"
      size={{
        initial: '3',
        bp2: '4'
      }}
      css={{
        initial: {
          lineHeight: '25px'
        },
        bp2: {
          lineHeight: '28px'
        }
      }}
      {...props}
     />
  );
}