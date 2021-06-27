// 1 Create a http or https server which is listen to 3000 port.
// 2 The home page “/” which displays an html page with one input to enter any text message
// 3 User enter some message, then click “Submit” button
// 4 The user’s inputs are stored in a local file on the server side.
// 5 User will be redirect to home page after saving successfully.


const http = require("http");
const fs = require("fs");

http.createServer((req, res) => {
    if (req.url === ("/")){
        fs.createReadStream("index.html").pipe(res)

     } else if (req.url === "/sumite" && req.method === "POST") {
        let body = [];
        req.on("data", (chunk) => {
            body.push(chunk)
        })

        req.on("end", () => {
            const postdata = Buffer.concat(body).toString();
            console.log(postdata)
            const message = postdata.split("=");
            console.log(message)
            const final = message[1].split("+")
            console.log(final)
            let joined = final.join(" ")


            fs.writeFile("./newfile.txt", joined, (err) => {
                if (err) throw err
                    res.end("dont saved on ");
                // else
                //      res.end("saved successfully ")
            })


        })
        res.statusCode=302
       res.setHeader("Location","/")
        
        res.end()
       
  
    } else{
        fs.createReadStream("index.html").pipe(res)
        res.end()
    }     
}).listen(2020 ,()=>{
console.log("this si not working")
})