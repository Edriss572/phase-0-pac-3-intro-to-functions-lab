function shout(str) {
  return str.toUpperCase();
}

function whisper(str) {
  return str.toLowerCase();
}

function logShout(str) {
  console.log(str.toUpperCase());
}

function logWhisper(str) {
  console.log(str.toLowerCase());
}

function sayHiToHeadphonedRoommate(str) {
  let msg = "Let's have dinner together!";

  if(str === str.toLowerCase()) {
    return "I can't hear you!"
  } 
  else if (str === str.toUpperCase()) {
    return "YES INDEED!";
  }

  else if(str === msg) {
    return "I would love to!";
  }
}