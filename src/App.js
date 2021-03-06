import React, { useEffect, useState } from 'react';

const bankOne = [
  {
    keyCode: 81,
    keyTrigger: 'q',
    id: 'Heater-1',
    color: 'green',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
  },
  {
    keyCode: 87,
    keyTrigger: 'w',
    id: 'Heater-2',
    color: 'blue',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
  },
  {
    keyCode: 69,
    keyTrigger: 'e',
    id: 'Heater-3',
    color: 'purple',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
  },
  {
    keyCode: 65,
    keyTrigger: 'a',
    id: 'Heater-4',
    color: 'blue',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
  },
  {
    keyCode: 83,
    keyTrigger: 's',
    id: 'Clap',
    color: 'purple',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
  },
  {
    keyCode: 68,
    keyTrigger: 'd',
    id: 'Open-HH',
    color: 'red',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
  },
  {
    keyCode: 90,
    keyTrigger: 'z',
    id: "Kick-n'-Hat",
    color: 'purple',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
  },
  {
    keyCode: 88,
    keyTrigger: 'x',
    id: 'Kick',
    color: 'red',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
  },
  {
    keyCode: 67,
    keyTrigger: 'c',
    id: 'Closed-HH',
    color: 'green',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
  },
];

function StyledApp() {
  return (
    <div
      style={{
        backgroundColor: 'powderblue',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '100px 100px 100px',
          gridTemplateRows: '100px 100px 100px',
          gridGap: '50px',
        }}
      >
        <App />
      </div>
    </div>
  );
}

export default StyledApp;

const App = (props) => {
  const [color1, setColor] = useState('red');

  return (
    <React.Fragment>
      {bankOne.map(
        (item) => (
          console.log('being run'),
          (
            <React.Fragment key={item.id}>
              <Pad
                source={item.url}
                id={item.id}
                keyTrigger={item.keyTrigger}
                name={item.id}
                style={color1}
                function={console.log(item.color)}
                color={item.color}
                // , `${(color = item.color)}`
                // color={item.color}
              />
            </React.Fragment>
          )
        )
      )}
    </React.Fragment>
  );
};

// export default App;

const Pad = (props) => {
  // function handleColor() {
  //   document.addEventListener('keydown', function (event) {
  //     {
  //       if (event.key === props.keyTrigger) {
  //         return console.log(props.color);
  //       } else {
  //         return 'red';
  //         // console.log('handleColor in progress');
  //       }
  //     }
  //   });
  // }
  const hello = props.color;

  function handleChange() {
    document.addEventListener('keydown', function (event) {
      {
        if (event.key === props.keyTrigger) {
          return document.getElementById(props.id).play();
        } else {
          return null;
        }
      }
    });
  }

  return (
    <div style={{ backgroundColor: hello }}>
      {/* <div style={{ backgroundColor: `${props.style}` }}> */}

      <button onKeyPress={handleChange()}>
        {console.log(hello, 'change color')}
        {props.name}
        {props.color}
        {props.keyTrigger}
      </button>
      <audio id={props.id} src={props.source} />
    </div>
  );
};
