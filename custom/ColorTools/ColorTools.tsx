import React from 'react';
import { Box } from '../../components/Box';
import { Flex } from '../../components/Flex';
import { Text } from '../../components/Text';
import { ScrollArea } from '../../components/Scrollbar';
import { createCeaser } from './ceaser';
import * as curves from './curves';
import generate from './generate.js';
import bezier from 'bezier-easing';
import { EyeClosedIcon, EyeOpenIcon, CodeIcon, BlendingModeIcon } from '@modulz/radix-icons';

const gray = {
  hue_start: 206,
  hue_end: 206,
  sat_start: 0.5,
  sat_end: 5,
  sat_curve: '0.630, 0.575, 0.495, 0.115',
  lum_start: 99.4,
  lum_end: 82,
};

const red = {
  hue_start: 351,
  hue_end: 356,
  sat_start: 3,
  sat_end: 34,
  sat_curve: '0.520, 0.405, 0.625, 0.505',
  lum_start: 100,
  lum_end: 97,
};

const crimson = {
  hue_start: 332,
  hue_end: 336,
  sat_start: 4,
  sat_end: 51,
  sat_curve: '0.655, 0.325, 0.815, 0.480',
  lum_start: 100,
  lum_end: 94,
};

const pink = {
  hue_start: 310,
  hue_end: 322,
  sat_start: 3,
  sat_end: 55,
  sat_curve: '0.740, 0.290, 0.820, 0.450',
  lum_start: 100,
  lum_end: 94,
};

const purple = {
  hue_start: 280,
  hue_end: 272,
  sat_start: 2,
  sat_end: 45,
  sat_curve: '0.700, 0.415, 0.745, 0.465',
  lum_start: 100,
  lum_end: 91,
};

const violet = {
  hue_start: 252,
  hue_end: 252,
  sat_start: 2,
  sat_end: 50,
  sat_curve: '0.700, 0.415, 0.745, 0.465',
  lum_start: 100,
  lum_end: 95,
};

const indigo = {
  hue_start: 228,
  hue_end: 228,
  sat_start: 2,
  sat_end: 50,
  sat_curve: '0.605, 0.370, 0.680, 0.430',
  lum_start: 100,
  lum_end: 93,
};

const blue = {
  hue_start: 206,
  hue_end: 206,
  sat_start: 2,
  sat_end: 57,
  sat_curve: '0.700, 0.415, 0.745, 0.465',
  lum_start: 100,
  lum_end: 98,
};

const turquoise = {
  hue_start: 185,
  hue_end: 190,
  sat_start: 3,
  sat_end: 54,
  sat_curve: '0.515, 0.260, 0.700, 0.770',
  lum_start: 100,
  lum_end: 92,
};

const teal = {
  hue_start: 167,
  hue_end: 174,
  sat_start: 4,
  sat_end: 72,
  sat_curve: '0.680, 0.420, 0.700, 0.725',
  lum_start: 100,
  lum_end: 82,
};

const green = {
  hue_start: 130,
  hue_end: 145,
  sat_start: 4,
  sat_end: 57,
  sat_curve: '0.650, 0.380, 0.810, 0.595',
  lum_start: 100,
  lum_end: 84,
};

const lime = {
  hue_start: 75,
  hue_end: 78,
  sat_start: 4,
  sat_end: 82,
  sat_curve: '0.310, 0.205, 0.760, 0.765',
  lum_start: 100,
  lum_end: 93,
};

const yellow = {
  hue_start: 44,
  hue_end: 52,
  sat_start: 6,
  sat_end: 100,
  sat_curve: '0.415, 0.245, 0.730, 0.455',
  lum_start: 100,
  lum_end: 100,
};

const orange = {
  hue_start: 36,
  hue_end: 36,
  sat_start: 4,
  sat_end: 86,
  sat_curve: '0.700, 0.415, 0.745, 0.465',
  lum_start: 100,
  lum_end: 100,
};

const gold = {
  hue_start: 42,
  hue_end: 35,
  sat_start: 3,
  sat_end: 43,
  sat_curve: '0.700, 0.415, 0.745, 0.465',
  lum_start: 99,
  lum_end: 75,
};

const brown = {
  hue_start: 33,
  hue_end: 31,
  sat_start: 3,
  sat_end: 43,
  sat_curve: '0.700, 0.415, 0.745, 0.465',
  lum_start: 99,
  lum_end: 75,
};

const bronze = {
  hue_start: 16,
  hue_end: 16,
  sat_start: 3,
  sat_end: 43,
  sat_curve: '0.700, 0.415, 0.745, 0.465',
  lum_start: 100,
  lum_end: 75,
};

export function ColorTools() {
  return (
    <Box
      id="fixedParent"
      css={{
        position: 'fixed',
        // top: '36px',
        top: '0',
        right: '0',
        bottom: '0',
        width: '250px',
        borderLeft: '1px solid $canvas',
        backgroundColor: '$loContrast',
      }}
    >
      <ScrollArea>
        <Scale name="gray" scale={gray} />
        <Scale name="red" scale={red} />
        <Scale name="crimson" scale={crimson} />
        <Scale name="pink" scale={pink} />
        <Scale name="purple" scale={purple} />
        <Scale name="violet" scale={violet} />
        <Scale name="indigo" scale={indigo} />
        <Scale name="blue" scale={blue} />
        <Scale name="turquoise" scale={turquoise} />
        <Scale name="teal" scale={teal} />
        <Scale name="green" scale={green} />
        <Scale name="lime" scale={lime} />
        <Scale name="yellow" scale={yellow} />
        <Scale name="orange" scale={orange} />
        <Scale name="gold" scale={gold} />
        <Scale name="brown" scale={brown} />
        <Scale name="bronze" scale={bronze} />
      </ScrollArea>
    </Box>
  );
}

type ScaleProps = {
  name: string;
  scale: typeof red;
};
type BezierParams = [number, number, number, number];

function Scale({ name, scale }: ScaleProps) {
  const [isEnabled, setIsEnabled] = React.useState(true);
  const [showCode, setShowCode] = React.useState(false);
  const [curve, setCurve] = React.useState(scale.sat_curve);
  const [colors, setColors] = React.useState<ReturnType<typeof generate>>([]);

  const originalColors = React.useRef<string[]>([]);

  React.useEffect(() => {
    if (originalColors.current.length === 0) {
      originalColors.current = [
        document.documentElement.style.getPropertyValue(`--colors-${name}100`),
        document.documentElement.style.getPropertyValue(`--colors-${name}200`),
        document.documentElement.style.getPropertyValue(`--colors-${name}300`),
        document.documentElement.style.getPropertyValue(`--colors-${name}400`),
        document.documentElement.style.getPropertyValue(`--colors-${name}500`),
        document.documentElement.style.getPropertyValue(`--colors-${name}600`),
        document.documentElement.style.getPropertyValue(`--colors-${name}700`),
      ];
    }
  }, []);

  React.useEffect(() => {
    const newCurveParams = curve.split(',').map(parseFloat) as BezierParams;
    // const lumCurveParams = curves.easeOutCubic.split(',').map(parseFloat) as BezierParams;

    const [x1, y1, x2, y2] = newCurveParams;
    const lumCurveParams = [1 - x2, 1 - y2, 1 - x1, 1 - y1] as BezierParams;

    const newColors = generate({
      specs: {
        steps: 7,
        sat_rate: 100,
        modifier: 10,
        ...scale,
        hue_curve: bezier(...newCurveParams),
        sat_curve: bezier(...newCurveParams),
        lum_curve: bezier(...lumCurveParams),
      },
    });

    setColors(newColors);
  }, [scale, curve]);

  React.useEffect(() => {
    if (!isEnabled) {
      document.documentElement.style.setProperty(`--colors-${name}100`, originalColors.current[0]);
      document.documentElement.style.setProperty(`--colors-${name}200`, originalColors.current[1]);
      document.documentElement.style.setProperty(`--colors-${name}300`, originalColors.current[2]);
      document.documentElement.style.setProperty(`--colors-${name}400`, originalColors.current[3]);
      document.documentElement.style.setProperty(`--colors-${name}500`, originalColors.current[4]);
      document.documentElement.style.setProperty(`--colors-${name}600`, originalColors.current[5]);
      document.documentElement.style.setProperty(`--colors-${name}700`, originalColors.current[6]);
    }
  }, [isEnabled]);

  React.useEffect(() => {
    if (isEnabled) {
      colors.forEach((color, index) => {
        document.documentElement.style.setProperty(`--colors-${name}${index + 1}00`, color.hex);
      });
    }
  }, [isEnabled, name, colors]);

  return (
    <Box css={{ m: '$3' }}>
      <Flex css={{ my: '$2' }}>
        <Text
          size="2"
          css={{ fontWeight: 500, lineHeight: '15px', textTransform: 'capitalize', mr: 'auto' }}
        >
          {name}
        </Text>
        <Box onClick={() => setShowCode(!showCode)} css={{ m: '-$1', mr: '$1', p: '$1' }}>
          {showCode ? <CodeIcon /> : <BlendingModeIcon />}
        </Box>
        <Box
          data-color-visibility-button
          onClick={(event) => {
            if (event.altKey) {
              document
                .querySelectorAll('[data-color-visibility-button]')
                .forEach((button) => (button as HTMLButtonElement).click());
            } else {
              setIsEnabled(!isEnabled);
            }
          }}
          css={{ m: '-$1', p: '$1' }}
        >
          {isEnabled ? <EyeOpenIcon /> : <EyeClosedIcon />}
        </Box>
      </Flex>
      {colors.map((color, index) => {
        const [h, s, l] = color.hsl;
        return (
          <Box
            key={index}
            css={{
              width: '100%',
              height: 25,
              backgroundColor: showCode ? 'transparent' : `var(--colors-${name}${index + 1}00)`,
            }}
          >
            {showCode && (
              <Text
                css={{
                  fontSize: '10px',
                  width: '100%',
                  display: 'block',
                  fontFamily: '$mono',
                  lineHeight: '25px',
                  whiteSpace: 'nowrap',
                }}
              >
                {`
                $${name}${index + 1}00:
                'hsl(${h.toFixed()},
                ${(s * 100).toFixed()}%,
                ${(l * 100).toFixed()}%)',`}
              </Text>
            )}
          </Box>
        );
      })}
      <Curve
        defaultCurve={curve}
        onChange={(newCurve) => {
          setCurve(newCurve);
          setIsEnabled(true);
        }}
      />
    </Box>
  );
}

type CurveProps = {
  defaultCurve: string;
  onChange: (newCurve: string) => void;
};

function Curve({ defaultCurve, onChange }: CurveProps) {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  const codeRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (canvasRef.current && codeRef.current) {
      createCeaser(canvasRef.current, codeRef.current, defaultCurve, onChange);
    }
  }, [codeRef, canvasRef]);

  return (
    <Box css={{ position: 'relative', WebkitUserSelect: 'none', mb: '$5' }}>
      <Box css={{ display: 'block' }} as="canvas" width="200" height="250" ref={canvasRef} />
      <Text
        size="1"
        ref={codeRef}
        css={{
          left: 0,
          bottom: 0,
          fontFamily: '$mono',
          position: 'absolute',
          WebkitUserSelect: 'text',
          width: 200,
        }}
      />
    </Box>
  );
}
