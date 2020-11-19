import { Text, TextProps } from '../components/Text';

export type ParagraphProps = Omit<TextProps, 'size'>;

export function Paragraph(props: ParagraphProps) {
  return (
    <Text
      as="p"
      {...props}
      size={{
        initial: '3',
        bp2: '4',
      }}
      css={{
        lineHeight: '25px',
        ...(props.css as any),

        bp2: {
          lineHeight: '28px',
          ...(props.css?.bp2 as any),
        },
      }}
    />
  );
}
