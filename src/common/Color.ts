const COLOR: colors = {
  WHITE: {
    Default: '#FFFFFF',
    Opacity: {
      25: 'rgba(255, 255, 255, 0.25)',
      40: 'rgba(255, 255, 255, 0.4)',
      50: 'rgba(255, 255, 255, 0.5)',
      80: 'rgba(255, 255, 255, 0.8)',
    },
  },
  BLACK: {
    Default: '#000000',
    Opacity: {
      60: 'rgba(0, 0, 0, 0.6)',
      50: 'rgba(0, 0, 0, 0.5)',
      75: 'rgba(21, 21, 21, 0.75)',
      95: 'rgba(21, 21, 21, 0.95)',
    },
  },
};

type color = {
  Default: string;
  Opacity: {
    [key: number]: string;
  };
};

type colors = {
  WHITE: color;
  BLACK: color;
};

export default COLOR;
