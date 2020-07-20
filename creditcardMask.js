// Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

// Your task is to write a function maskify, which changes all but the last four characters into '#'.

const maskify = num => {
  return num.length <= 4
    ? num
    : num.slice(0, num.length - 4).replace(/[a-zA-Z0-9]/gi, "#") +
        num.slice(num.length - 4, num.length);
};

//Other solutions

function maskify(cc) {
  return cc.slice(0, -4).replace(/./g, "#") + cc.slice(-4);
}

console.log(maskify("4556364607935616")); // '############5616'

console.log(maskify("1")); // '1;


why 

90766609