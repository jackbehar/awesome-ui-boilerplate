// eslint-disable-next-line no-unused-vars
import React from 'react';
export default function UXPinWrapper({ children }) {

  let aui = document.createElement('script')
  aui.setAttribute('src', 'https://dlucidone.github.io/awesome-ui/awesome-ui-components/awesome-ui-components.js')
  aui.setAttribute('type', 'text/javascript')
  document.body.appendChild(aui)

  return children;
}
