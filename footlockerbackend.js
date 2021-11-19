const { createClient } = require('@supabase/supabase-js')
const express = require("express")
const app = express();
const PORT = 5000
const path = require('path');

const whitelist = ['http://localhost:3000', 'http://localhost:8080', 'https://shrouded-journey-38552.heroku...']
const corsOptions = {
  origin: function (origin, callback) {
    console.log("** Origin of request " + origin)
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      console.log("Origin acceptable")
      callback(null, true)
    } else {
      console.log("Origin rejected")
      callback(new Error('Not allowed by CORS'))
    }
  }
}
app.use(cors(corsOptions))



app.use(express.json())

const supabase = createClient
 ("https://ezwmibduswttopxcmutr.supabase.co", 
 "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNjY1NjIzNSwiZXhwIjoxOTUyMjMyMjM1fQ.T6IwQKPdRMJhBxkq2VOYUxdeOOG4F40rySE0Y0e1Prs");


app.get("/", (req,res)=>res.send("Hello World"))

app.post("/insertData", async (req,res)=>{
    const[body]= req.body


    const { data, error }  = await supabase.from("footlockerData").insert(shoeData)
    res.send(console.log(error))

    });
    
app.get("/grabData", async (req,res)=>{
    const { data, error } = await supabase
  .from('footlockerData')
  .select()

  res.send(console.log(data))

})    


if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));
// Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}


app.listen(PORT,()=>console.log('listening on port' ))