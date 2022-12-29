console.log('hello world!')
// handling the process
// console.log(process)

// default hooks
process.on('exit', function(){
  // do the exit
  console.log('exiting')
})
//custom event hooks
const { EventEmitter } = require('events')
const eventEmitter = new EventEmitter()
eventEmitter.on('lunch', ()=>{
  console.log('yummy')
})
eventEmitter.emit('lunch')

// FileSystem Hooks (fs)
const {readFile, redFileSync, readFileSync } = require('fs')
const txt = readFileSync('./hello.txt', 'utf8', (err, txt) =>{
  console.log(txt)
})
console.log(txt)
console.log('ASAP!!')


//-- Promise-based solution
// const { readFile } =  require('fs').promises
//v top-level await supported as of 14.3
// const file = await readFile('./hello.txt', 'utf8') 
async function hello(){
  const file = await readFile('./hello.txt', 'utf8') // wrap it in a function otherwise
}

// Modules and npm/yarn
// Modules are jsut js files that export its code
// old js uses require(), new ESModules use import/export
const myModule = require('./my-module');
console.log(myModule)

// External Express module
const express = require('express')
const { response } = require('express')
const app = express()
// Serving the page when the browser .get request hits
app.get('/', (request, response)=>{
  readFile('./home.html', 'utf8', (err, html)=>{
    if (err){
      response.status(500).send('awh heck we didnt find it',err)
    }
    response.send(html)
  })
})
app.listen(3009, ()=> console.log('app availible!'))