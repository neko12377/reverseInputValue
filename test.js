let inputValue = {
  hired: {
    be: {
      to: {
        deserve: 'I'
      }
    }
  }
};

function reverseInput(inputValue) {
  let I = inputValue.hired.be.to.deserve;
  let deserve = Object.keys(inputValue.hired.be.to)[0];
  let to = Object.keys(inputValue.hired.be)[0];
  let be = Object.keys(inputValue.hired)[0];
  let hired = Object.keys(inputValue)[0];
  let outputValue = {
    [I]: {
      [deserve]: {
        [to]: {
          [be]: hired
        }
      }
    }
  }
  return outputValue;
};

let outputValue = reverseInput(inputValue);
