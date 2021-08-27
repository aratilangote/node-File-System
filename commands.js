
const  fs = require('fs');
const { title } = require('process');
const file = 'listing.json';
const readFille = fileName => {
    try{
        return JSON.parse(fs.readFileSync(fileName));
    } catch(e)
    {
        return [];
    }
};

const writeFile = (fileName, content) =>{
    try{
        fs.writeFileSync(fileName, JSON.stringify(content));
        console.log("success");
    } catch (e) {
        console.log(e);
    }
};
const add = (title, body) => {
    let listing =  readFile(file);

    let index = listing.findIndex(x => x.title === title);
    
    if (index === -1) {
        listing.push({ title, body });
      } else {
        listing[index].body += body;
      }
      writeFile(file, listing);   
};

const remove = title => {
    let listing = readFile(file);
  
    const filteredList = listing.filter(x => x.item !== title);
  
    writeFile(file, filteredList);
  };
  
  const list = () => {
    let listing = readFile(file);
  
    console.log(listing);
  };
  
  const read = title => {
    let listing = readFile(file);
  
    let index = listing.findIndex(x => x.title === title);
  
    if (index !== -1) {
      console.log(`title ${title} is ${listing[index].body}`);
    } else {
      console.log(`${item} not found`)
    }
  };
  
  module.exports = {
    add,
    list,
    read,
    remove
  };