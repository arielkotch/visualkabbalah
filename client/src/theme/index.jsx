import theme from 'styled-theming';


export const backgroundColor = theme('mode', {
    light: '#fff',
    dark: '#000'
});
export const textColor = theme('mode', {
  light: '#000',
  dark: '#fff',
});
export const fontFamily = theme('mode', {
  light: "'Ubuntu', sans-serif",
  dark: '#000',
});

export const pageBackground = theme('mode', {
  light: '#01ABAA',
  dark: '#000'
});