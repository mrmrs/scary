const theme = {
  containerWidth: '72rem',
  breakpoints: ['36em', '48em', '64em'],
  radii: [0, 3, 5, 9999],
  lineHeight: [1, 1.25, 1.5],
  measure: ['20em', '28em', '34em'],
  space: [0, 2, 4, 8, 16, 32, 64, 128, 256, 512],
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  font: {
    sansSerif:
      "-apple-system,system-ui,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,'Helvetica Neue',Arial,sans-serif",
    serif: 'serif',
    mono: 'Monaco, monospace'
  },
  textStyles: {
    caps: {
      textTransform: 'uppercase',
      letterSpacing: '0.2em'
    }
  },
  colors: {
    blue: [
      '#E4F2FF',
      '#ADD6FD',
      '#76BAFA',
      '#47A0F5',
      '#208AED',
      '#0377E4',
      '#006FD7',
      '#0067C7',
      '#005DB3',
      '#00519E',
      '#004687',
    ],
    gray: [
      '#FfffFF',
      '#F8FBFF',
      '#F3F6FB',
      '#EBEEF4',
      '#DFE3E9',
      '#D0D3D9',
      '#BCBFC5',
      '#A1A4AA',
      '#818387',
      '#595B5E',
      '#2D2E30',
      '#000000',
    ]
  }
};

export default theme
