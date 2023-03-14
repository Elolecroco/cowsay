const userInfo = require("./information");
const cowsay = require("cowsay");

console.log(cowsay.say( {
   text: `I am ${userInfo.name} from the ${userInfo.campus} campus.`
}));