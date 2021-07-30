//Homework1

const fs = require('fs').promises;
const { Transform } = require('stream');
const Stream = require('stream');
const { Z_STREAM_END } = require('zlib');

// const readStream = fs.createReadStream('./input.txt', {highWaterMark: 10});

// readStream.on('data', function(chunk){
//     chunk.toString().split(' ').forEach(word => {
//         if(!/[^a-zA-Z0-9]/.test(word)){
//            console.log(word)
//         }
//    })
// })

//Homework2

// const readStream = fs.createReadStream('./homework4Am.txt', {highWaterMark: 1, encoding: 'utf-8'});
// const writeStream = fs.createWriteStream('./homework4Eng.txt');

// readStream.on('data', (chunk) => {
//     if(chunk === 'T'){
//         chunk = 'Տ'
//     }else if(chunk === 'i'){
//         chunk = 'ի'
//     }else if(chunk === 'g'){
//         chunk = 'գ'
//     }else if(chunk === 'r'){
//         chunk = 'ր'
//     }else if(chunk === 'a'){
//         chunk = 'ա'
//     }else if(chunk === 'n'){
//         chunk = 'ն'
//     }

//     writeStream.write(chunk)
//     console.log(chunk);  
// })

//Homework3-version-1


// const readStream = fs.createReadStream('./homework5.txt');

// const writeStream = fs.createWriteStream('./homeworkw5.txt');

// class RemoveSpecialChars extends Transform {
//    _transform(chunk, encoding, callback){
//     chunk.toString().split('').forEach(letter => {
//                    if(!/[^a-zA-Z0-9 ]/.test(letter)){
//                         this.push(letter)
//                         }
//                     })
                      
//                 callback();
//    }
// };

// const transform = new RemoveSpecialChars();

// readStream.pipe(transform).pipe(writeStream);

//version-2

// const transform = new RemoveSpecialChars({
//     transform (chunk, encoding, callback) {
//         chunk.toString().split('').forEach(letter => {
//             if(!/[^a-zA-Z0-9 ]/.test(letter)){
//                 this.push(letter)
//                 }
//             })
              
//         callback();
//     }
// });



//Homework4

// async function firstLetterToUpperCase(path){
//     const data = (await fs.readFile(path)).toString();
//     await fs.writeFile(path, data.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' '));
    
// }

// firstLetterToUpperCase('./input2.txt').then(() => {
//     console.log('done');
// }).catch(err => {
//     console.log(err);
// });

