import React from 'react';
import style from './NotFound.module.css';

const NotFound = () => (
<div>
  <div className = {style.notfound}>
  <h1>404</h1>
  <p>404.That's an error.</p>
  <p>The request of URL was found on this sever.</p>
  </div>
</div>
)

export default NotFound;
