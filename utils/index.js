const fs = require("fs");
const path = require("path");

const readOneFile = () => {
  const newPath = path.join(__dirname, "../");
  fs.readFileSync(`${newPath}/alumnos/alumnos1.json`, (error, data) => {
    if (error) {
      throw new Error("Error in read file");
    }
    const student = JSON.parse(data);
    console.log(student);
  });
};
module.exports = { readOneFile };
