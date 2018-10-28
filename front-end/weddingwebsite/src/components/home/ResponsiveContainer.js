import React from 'react';
import DesktopContainer from './DesktopContainer';
import MobileContainer from './MobileContainer';

const ResponsiveContainer = ({ children , signInMessage}) => (
  <div>
    <DesktopContainer signInMessage={signInMessage}>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
)

export default ResponsiveContainer;
