import { Text, TextProps } from '../components/Text';

export type SubheadingProps = Omit<TextProps, 'size'>;

export function Subheading(props: SubheadingProps) {
  return (
    <Text
      as="h4"
      {...props}
      size={{
        initial: '5',
        bp2: '6',
      }}
      css={{
        fontWeight: 500,
        fontVariantNumeric: 'proportional-nums',
        lineHeight: '25px',
        ...(props.css as any),

        bp2: {
          lineHeight: '30px',
          ...(props.css?.bp2 as any),
        },
      }}
    />
  );
}
