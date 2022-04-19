console.log("starting...");

const ABC = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// build rack layout
function buildRack(rack,panels) {
  if (panels > 10) return "Number of Panels is too large"
  var rack = {};
  var number = 0;
  for (let panel = 0; panel < panels; panel++) {
    for (let port = 1; port <= 4; port++) {  
      number++;
      var portKey = port < 9 ? ABC[panel] + "0" + port : ABC[panel] + port
      rack[portKey] = { number: number, panel: ABC[panel], port: port, room: "", roomLoc: 0, type: "dual" };
    }
  }
  return rack;
}

// Build TR layout
function buildTR(rackArr) {
  if (rackArr.length > 9) return "Invalid rack number";
  var racks_dic = {};
  for (let i = 0; i < rackArr.length; i++) {
    var rackName = "R" + (i + 1)
    racks_dic[rackName] = buildRack(rackName, rackArr[i]);
  }
  return racks_dic;
}




// helper function to convert number to port
function helperConvertNumToPort(number) {
  if (number < 10) return "A0" + number;
  if (number < 49) return "A" + number;
  var panel = ABC[Math.floor(number / 48)];
  var port = number % 48;
  if (port < 10) port = "0" + port;
  return panel + port;
  
}

let locations = { C4235: [] };
let trC4W = buildTR([1, 1, 1]);


// function to build faceplate
function buildSinglePort(faceplate) {
  var port = helperConvertNumToPort(faceplate.number);
  var rack = "R" + faceplate.rack;

  var panelPort = trC4W[rack][port]

  if (panelPort.room !== "") return "Port is being used already by " + panelPort.room + "-" + panelPort.roomLoc;
  
  panelPort.roomLoc = !locations[faceplate.room] ? 1 : Object.keys(locations[faceplate.room]).length +1;
  console.log(port);
  console.log(rack);
  panelPort.room = faceplate.room;
  
  return trC4W[rack][port] = panelPort;
}


let singlePortFaceplate = {rack: 3, number: 3, room:"C4312"}

let wp2 = buildSinglePort(singlePortFaceplate);
let wp3  = buildSinglePort({rack: 3, number: 2, room:"C4312"});

