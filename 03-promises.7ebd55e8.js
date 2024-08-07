console.log("Starting server");new Promise(((e,o)=>{setTimeout((()=>{console.log("Preparing server...");e({server:"aws",port:1234,status:"running"})}),2e3)})).then((e=>{new Promise(((o,r)=>{setTimeout((()=>{e.modified=!0,o(e)}),2e3)})).then((e=>{console.log("Data received",e)}))}));
//# sourceMappingURL=03-promises.7ebd55e8.js.map
