const message = "hello other file";

const getMessage = () => {
    console.log(message);
    return message;
};

const duh = () => {};

//module.exort.getMessage = getMessage;
module.exports = {duh, getMessage};