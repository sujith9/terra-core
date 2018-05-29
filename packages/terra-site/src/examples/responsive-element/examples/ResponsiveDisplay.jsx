import React from 'react';
import ResponsiveElement from 'terra-responsive-element';

const ResponsiveDisplayExample = () => {
  const mobileView = (
    <ul>
      <li>John Smith, 22</li>
      <li>David Johnson, 25</li>
      <li>Leeroy Jenkins, 31</li>
    </ul>
  );

  const desktopView = (
    <table style={{ width: '100%' }}>
      <tbody>
        <tr>
          <td>John Smith</td>
          <td>22</td>
        </tr>
        <tr>
          <td>David</td>
          <td>Johnson</td>
          <td>25</td>
        </tr>
        <tr>
          <td>Leeroy</td>
          <td>Jenkins</td>
          <td>31</td>
        </tr>
      </tbody>
    </table>
  );

  return <ResponsiveElement defaultElement={mobileView} medium={desktopView} />;
};

export default ResponsiveDisplayExample;
