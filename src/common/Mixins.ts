const MIXINS = {
  flexBox: ({ direction = 'row', alignItems = 'center', justifyContent = 'flex-start' }: flexBoxType) => `
          display: flex;
          flex-direction: ${direction};
          align-items: ${alignItems};
          justify-content: ${justifyContent};
        `,
  position: ({ type = 'relative', top = 'auto', left = 'auto', bottom = 'auto', right = 'auto' }: positionType) => `
          position: ${type};
          top: ${top};
          left: ${left};
          bottom: ${bottom};
          right: ${right};
        `,
};

type flexBoxType = {
  direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
  justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around';
};

type positionType = {
  type?: 'static' | 'relative' | 'absolute' | 'fixed';
  top?: string;
  left?: string;
  bottom?: string;
  right?: string;
};

export default MIXINS;
