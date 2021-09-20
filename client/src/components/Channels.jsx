import React from 'react';

const Channels = (props) => {
  return (
    <div>
      <div>{props.division}</div>
      <button>{props.teams[0]}</button>
      <br />
      <button>{props.teams[1]}</button>
      <br />
      <button>{props.teams[2]}</button>
      <br />
      <button>{props.teams[3]}</button>
      <br />
      <br />
    </div>
  )
}

export default Channels;