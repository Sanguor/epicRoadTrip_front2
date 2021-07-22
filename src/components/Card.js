import React, { Fragment } from 'react';

const Card = ({ name, counter, size }) => {
  return (
    <Fragment>
      <div>{name}</div>
      {counter !== size && <hr />}
    </Fragment>
  );
}

export default Card;
