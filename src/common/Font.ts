const FONT: font = {
  SIZE: {
    small: '1.3rem',
    medium: '1.5rem',
    large: '1.6rem',
  },
  WEIGHT: {
    regular: 400,
    medium: 500,
    bold: 600,
  },
};

type font = {
  SIZE: {
    [key: string]: string;
  };
  WEIGHT: {
    [key: string]: number;
  };
};

export default FONT;
