const palette = {
  black: '#000000',
  white: '#ffffff',
  gray: {
    light: '#e1e1e1',
  },
  primary: '#253840',
  secondary: '#0097e6',
  success: '#C4E538',
  danger: '#ff7171',
  text: {
    light: '#f1f1f1',
    dark: '#333',
  },
};

export const getTagColor = id => {
  return (
    {
      1: '#ff7171',
      2: '#006266',
      3: '#1B1464',
      4: '#5758BB',
      5: '#6F1E51',
    }[id] || palette.primary
  );
};

export default palette;
