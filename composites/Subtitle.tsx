import React from 'react';
import { Text, TextProps } from '../components/Text';

export type SubtitleProps = Omit<TextProps, 'size'>;

export function Subtitle(props: SubtitleProps) {
  return (
    <Text
      as="h2"
      {...props}
      size={{
        initial: '5',
        bp2: '6',
      }}
      css={{
        color: '$gray900',
        lineHeight: '27px',
        ...(props.css as any),

        bp2: {
          lineHeight: '29px',
          ...(props.css?.bp2 as any),
        },
      }}
    />
  );
}
