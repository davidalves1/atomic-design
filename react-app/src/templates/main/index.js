import React from 'react';

import Header from '../../organisms/header';

export default function MainTemplate(props) {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="row mt-3">
          { props.children }
        </div>
      </div>
    </div>
  );
}
