import React, { useEffect } from 'react';

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

const App = (props) => {
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
                style={item.color}
              />
            </React.Fragment>
          )
        )
      )}
    </React.Fragment>
  );
};

export default App;

const Pad = (props) => {
  function genericPlay(id) {
    const audio = document.getElementById(id);
    audio.play();
  }

  function handleChange() {
    document.addEventListener('keydown', function (event) {
      {
        if (event.key === props.keyTrigger) {
          return document.getElementById(props.id).play();
        } else {
          console.log('handleChange in progress');
        }
      }
    });
  }

  return (
    <div>
      <button onKeyPress={handleChange()}>
        {props.name}
        {props.color}
        {props.keyTrigger}
      </button>
      <audio id={props.id} src={props.source} />
    </div>
  );
};
