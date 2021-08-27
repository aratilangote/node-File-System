const fs = require('fs');


//reading file
fs.readFile('./docs/demo.txt', (err,data)=>{
   if (err){
       console.log(err);
   }
   console.log(data.toString());
});
console.log('last line');



//writing files
fs.writeFile('./docs/demo2.txt','Hello, I am fine',()=>{
    console.log('File was written');
});
//reading file
fs.readFile('./docs/demo2.txt', (err,data)=>{
    if (err){
        console.log(err);
    }
    console.log(data.toString());
 });



 //directories
 fs.mkdir('./DemoC', (err)=>{
     if(err){
         console.log(err);
     }
     console.log('folder Created');
 });

 if(!fs.existsSync('./DemoB')){
    fs.mkdir('./DemoB', (err)=>{
        if(err){
            console.log(err);
        }
        console.log('folder Created');
    });
}else{
    fs.rmdir('./DemoB', (err) =>{
        if(err){
            console.log(err);
        }
        console.log('Folder Deleted');
    });
}



//deleting files
if(fs.existsSync('./docs/deleteme.txt')){
    fs.unlink('./docs/deleteme.txt', (err) =>{
        if(err){
            console.log(err);
        }
        console.log('file deleted');
    })
}