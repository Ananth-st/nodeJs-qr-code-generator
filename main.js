import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from "fs";

inquirer
  .prompt([
    {message: "type url: ",name: "url"}
  ])
  .then((answers) => {
    // console.log(answers);
    const url = answers.url;
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream('qr_code.png'));
    fs.writeFile("url.txt",url,(err)=>{
        if (err) throw err;
        console.log("file saved")
    })

  })
  .catch((error) => {
    if (error.isTtyError) {
      console.error("Cannot render prompt in the current environment.");
    } else {
      console.error("An error occurred:", error);
    }
  });