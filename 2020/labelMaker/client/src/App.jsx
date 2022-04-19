import { useState } from "react";

function App() {
  const [items, setItems] = useState([]);
  const [room, setRoom] = useState("");
  const [oldNumber, setOldNumber] = useState(1);

  let rack1 = [""];
  let rack3 = [""];

  const abc = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  for (let i = 0; i <= abc.length; i++) {
    for (let e = 1; e <= 48; e++) {
      if (e < 10) {
        rack1.push("R1:" + abc[i] + ":0" + e);
        rack3.push("R3:" + abc[i] + ":0" + e);
      } else {
        rack1.push("R1:" + abc[i] + ":" + e);
        rack3.push("R3:" + abc[i] + ":" + e);
      }
    }
  }

  // console.log(rack1);

  const onSubmit = (e) => {
    e.preventDefault();
    setItems([
      ...items,
      (items[oldNumber] = {
        rack1: rack1[oldNumber],
        rack3: rack3[oldNumber],
        room: room,
      }),
    ]);
    setOldNumber(oldNumber + 1);
    console.log(items);
  };

  const onChange = (e) => {
    setRoom(e.target.value);
  };

  var content = [];

  for (let i = 1; i <= 12; i++) {
    content.push(
      <div className="box" key={i}>
        <p>{i} MC1020-01</p>
      </div>
    );
  }

  return (
    <div className="main">
      <header className="App-header">
        <h2>Label Maker</h2>
      </header>

      <div className="faceplate-form">
        <div className="topLabel">
          <h4 className="trLocation">TR-4E</h4>
            <div className="data">{rack1[oldNumber]}</div>
            <div className="voice">{rack3[oldNumber]}</div>
        </div>

        <br />
        <h3>{oldNumber}</h3>
        <form onSubmit={onSubmit}>
          <input value={room} onChange={onChange} />
          <br />
          <button type="submit">Create</button>
        </form>
      </div>

      <div className="faceplate">
        <div>
          <p>TR-01W</p>
          {rack1[oldNumber]}
          {"       "}
          {rack3[oldNumber]}
          <p>1W-M1024-01</p>
        </div>
        <div>
          <p>P: MC147-01</p>
        </div>
      </div>
      {/* {content} */}
    </div>
  );
}

export default App;
