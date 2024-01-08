const fs = require("fs");
const superagent = require("superagent");

const readFilePro = (file) => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, (err, data) => {
      if (err) reject("I could not found that file😢");
      resolve(data);
    });
  });
};

const writeFilePro = (file, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(file, data, (err) => {
      if (err) return "Could not write file😢";
      resolve("success");
    });
  });
};

const getDogPic = async () => {
  try {
    const data = await readFilePro(`${__dirname}/dog.txt`);
    console.log(`breed: ${data}`);

    const resPro1 = superagent.get(
      `https://dog.ceo/api/breed/${data}/images/random`
    );
    const resPro2 = superagent.get(
      `https://dog.ceo/api/breed/${data}/images/random`
    );
    const resPro3 = superagent.get(
      `https://dog.ceo/api/breed/${data}/images/random`
    );

    const all = await Promise.all([resPro1, resPro2, resPro3]);
    const imgs = all.map((el) => el.body.message);
    console.log(imgs);

    writeFilePro("dog-img.txt", imgs.join("\n"));
    console.log("Random dog image saved to file");
  } catch (err) {
    console.log(err);
    throw err;
  }
  return "2: READY 🐶";
};

(async () => {
  try {
    console.log("1: will get dog pics");
    const x = await getDogPic();
    console.log(x);
    console.log("3: Done getting Dog pics");
  } catch (err) {
    console.log("ERROR 💥");
  }
})();

/*
console.log("1: will get dog pics");
getDogPic()
  .then((x) => {
    console.log(x);
    console.log("3: Done getting Dog pics");
  })
  .catch((err) => {
    console.log("ERROR 💥");
  });
*/
/*
readFilePro(`${__dirname}/dog.txt `)
  .then((data) => {
    console.log(`breed: ${data}`);
    return superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);
  })
  .then((res) => {
    console.log(res.body.message);
    return writeFilePro("dog-img.txt", res.body.message);
  })
  .then(() => {
    console.log("Random dog image saved to file");
  })
  .catch((err) => {
    console.log(err);
  });
*/
