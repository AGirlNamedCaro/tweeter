//This function returns a date

const date = (argument) => {

  const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
  const firstDate = new Date(argument);
  const secondDate = new Date();
  const diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay));
  return diffDays;
};
//This function takes in a string & protects it from XSS attacks
const escape = (str) => {
  let newTag = document.createElement('div');
  newTag.appendChild(document.createTextNode(str));
  return newTag.innerHTML;
};