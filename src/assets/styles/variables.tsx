export const variables = {
  font: "'Arial', sans-serif",
  icon_font: 'FontAwesome',
  content_color: '#333',
  black: '#000',
  white: '#fff',
  square_bg_color: '#d1ccc0',
  square_color: '#fff',
  square_text_shadow: `2px 2px 4px rgba(0, 0, 0, 0.2)`,
  player1_color_normal: '#474787',
  player1_color_active: '#706fd3',
  player1_icon: "'\\f00d'",
  player2_color_normal: '#cc8e35',
  player2_color_active: '#ffb142',
  player2_icon: "'\\f10c'",
  status_bg_color: 'rgba(255, 255, 255, 0.8)',
  media_query: 'min-width: 450px',
  transition: (property, duration) => `
    -moz-transition: ${property} ${duration};
    -o-transition: ${property} ${duration};
    -webkit-transition: ${property} ${duration};
    transition: ${property} ${duration};
  `,
};
