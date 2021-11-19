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








const shoeData = [
    {
        "brand": "Jordan",
        "colorway": "Black/White-Varsity Red",
        "gender": "men",
        "name": "Bred Patent",
        "releaseDate": "2021-12-30",
        "retailPrice": 170,
        "shoe": "Jordan 1 Retro High OG",
        "styleId": "555088-063",
        "title": "Jordan 1 Retro High OG Bred Patent",
        "year": 2021,
    
            "imageUrl": "https://images.stockx.com/images/Air-Jordan-1-Retro-High-OG-Bred-Patent-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1633542046",
            "smallImageUrl": "https://images.stockx.com/images/Air-Jordan-1-Retro-High-OG-Bred-Patent-Product.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1633542046",
            "thumbUrl": "https://images.stockx.com/images/Air-Jordan-1-Retro-High-OG-Bred-Patent-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1633542046"
        
    },
    {
      
        "brand": "Jordan",
        "colorway": "Black/White-Red",
        "gender": "men",
        "name": "Red Thunder",
        "releaseDate": "2021-12-23",
        "retailPrice": 190,
        "shoe": "Jordan 4 Retro",
        "styleId": "CT8527-016",
        "title": "Jordan 4 Retro Red Thunder",
        "year": 2021,
    
            "imageUrl": "https://images.stockx.com/images/Air-Jordan-4-Retro-Red-Thunder-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1634306815",
            "smallImageUrl": "https://images.stockx.com/images/Air-Jordan-4-Retro-Red-Thunder-Product.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1634306815",
            "thumbUrl": "https://images.stockx.com/images/Air-Jordan-4-Retro-Red-Thunder-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1634306815"
        
    },
    {
       
        "brand": "Jordan",
        "colorway": "Atmosphere/White-Laser Pink-Obsidian",
        "gender": "women",
        "name": "Atmosphere (W)",
        "releaseDate": "2021-12-22",
        "retailPrice": 190,
        "shoe": "Jordan 1 Retro High OG",
        "styleId": "DD9335-641",
        "title": "Jordan 1 Retro High OG Atmosphere (W)",
        "year": 2021,
        
            "imageUrl": "https://images.stockx.com/images/Air-Jordan-1-Retro-High-OG-Atmosphere-W.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1632170271",
            "smallImageUrl": "https://images.stockx.com/images/Air-Jordan-1-Retro-High-OG-Atmosphere-W.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1632170271",
            "thumbUrl": "https://images.stockx.com/images/Air-Jordan-1-Retro-High-OG-Atmosphere-W.jpg?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1632170271"
        
    },
    {
     
        "brand": "Jordan",
        "colorway": "Black/Archaeo Brown-Dark Chocolate",
        "gender": "men",
        "name": "Hand Crafted",
        "releaseDate": "2021-12-18",
        "retailPrice": 0,
        "shoe": "Jordan 1 Retro High OG",
        "styleId": "DH3097-001",
        "title": "Jordan 1 Retro High OG Hand Crafted",
        "year": 2021,
        
            "imageUrl": "https://images.stockx.com/images/Air-Jordan-1-Retro-High-OG-Hand-Crafted.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1632135251",
            "smallImageUrl": "https://images.stockx.com/images/Air-Jordan-1-Retro-High-OG-Hand-Crafted.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1632135251",
            "thumbUrl": "https://images.stockx.com/images/Air-Jordan-1-Retro-High-OG-Hand-Crafted.jpg?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1632135251"
        
    },
    {
        
        "brand": "Nike",
        "colorway": "Baroque Brown/Lemon Drop-Wheat-Chile Red",
        "gender": "men",
        "name": "Travis Scott Cactus Jack Baroque Brown",
        "releaseDate": "2021-12-16",
        "retailPrice": 160,
        "shoe": "Nike Air Max 1",
        "styleId": "DO9392-200",
        "title": "Nike Air Max 1 Travis Scott Cactus Jack Baroque Brown",
        "year": 2021,
        
            "imageUrl": "https://images.stockx.com/images/nike-air-max-1-travis-scott-baroque-brown.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1635878733",
            "smallImageUrl": "https://images.stockx.com/images/nike-air-max-1-travis-scott-baroque-brown.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1635878733",
            "thumbUrl": "https://images.stockx.com/images/nike-air-max-1-travis-scott-baroque-brown.jpg?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1635878733"
        
    },
    {
      
        "brand": "Nike",
        "colorway": "Wheat/Lemon Drop-Baroque Brown-Chile Red",
        "gender": "men",
        "name": "Travis Scott Cactus Jack Saturn Gold",
        "releaseDate": "2021-12-16",
        "retailPrice": 160,
        "shoe": "Nike Air Max 1",
        "styleId": "DO9392-700",
        "title": "Nike Air Max 1 Travis Scott Cactus Jack Saturn Gold",
        "year": 2021,
        
            "imageUrl": "https://images.stockx.com/images/Nike-Air-Max-1-Travis-Scott-Wheat-Ver2.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1635879244",
            "smallImageUrl": "https://images.stockx.com/images/Nike-Air-Max-1-Travis-Scott-Wheat-Ver2.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1635879244",
            "thumbUrl": "https://images.stockx.com/images/Nike-Air-Max-1-Travis-Scott-Wheat-Ver2.jpg?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1635879244"
        
    },
    {
     
        "brand": "Jordan",
        "colorway": "Medium Grey/White-Cool Grey",
        "gender": "men",
        "name": "Cool Grey (2021)",
        "releaseDate": "2021-12-11",
        "retailPrice": 225,
        "shoe": "Jordan 11 Retro",
        "styleId": "CT8012-005",
        "title": "Jordan 11 Retro Cool Grey (2021)",
        "year": 2021,
       
            "imageUrl": "https://images.stockx.com/images/Air-Jordan-11-Retro-Cool-Grey-2021-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1631898423",
            "smallImageUrl": "https://images.stockx.com/images/Air-Jordan-11-Retro-Cool-Grey-2021-Product.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1631898423",
            "thumbUrl": "https://images.stockx.com/images/Air-Jordan-11-Retro-Cool-Grey-2021-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1631898423"
        
    },
    {
       
        "brand": "Jordan",
        "colorway": "Jade Horizon/Light Silver-Anthracite-Pink Glaze",
        "gender": "men",
        "name": "Jade Horizon",
        "releaseDate": "2021-12-04",
        "retailPrice": 190,
        "shoe": "Jordan 5 Retro",
        "styleId": "",
        "title": "Jordan 5 Retro Jade Horizon",
        "year": 2021,
        
            "imageUrl": "https://images.stockx.com/images/Air-Jordan-5-Retro-Jade-Horizon-Ver3.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1632202164",
            "smallImageUrl": "https://images.stockx.com/images/Air-Jordan-5-Retro-Jade-Horizon-Ver3.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1632202164",
            "thumbUrl": "https://images.stockx.com/images/Air-Jordan-5-Retro-Jade-Horizon-Ver3.jpg?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1632202164"
        
    },
    {
      
        "brand": "Jordan",
        "colorway": "Sail/Light Bone/College Grey/Black",
        "gender": "men",
        "name": "Gore-Tex Light Bone",
        "releaseDate": "2021-12-01",
        "retailPrice": 200,
        "shoe": "Jordan 1 High Element",
        "styleId": "DB2889-100",
        "title": "Jordan 1 High Element Gore-Tex Light Bone",
        "year": 2021,
        
            "imageUrl": "https://images.stockx.com/images/air-jordan-1-high-element-gore-tex-light-bone.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1636052219",
            "smallImageUrl": "https://images.stockx.com/images/air-jordan-1-high-element-gore-tex-light-bone.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1636052219",
            "thumbUrl": "https://images.stockx.com/images/air-jordan-1-high-element-gore-tex-light-bone.jpg?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1636052219"
        
    },
    {
       
        "brand": "Jordan",
        "colorway": "Brown/Beige/Green/Grey",
        "gender": "men",
        "name": "Multi-Camo",
        "releaseDate": "2021-11-29",
        "retailPrice": 200,
        "shoe": "Jordan 3 Retro Low",
        "styleId": "DO1830-200",
        "title": "Jordan 3 Retro Low Multi-Camo",
        "year": 2021,
    
            "imageUrl": "https://images.stockx.com/images/Air-Jordan-3-Retro-Low-Multi-Camo.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1632170271",
            "smallImageUrl": "https://images.stockx.com/images/Air-Jordan-3-Retro-Low-Multi-Camo.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1632170271",
            "thumbUrl": "https://images.stockx.com/images/Air-Jordan-3-Retro-Low-Multi-Camo.jpg?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1632170271"
        
    },
    {
        
        "brand": "Vans",
        "colorway": "Green/Black/Brown/White",
        "gender": "men",
        "name": "Bape 1st Camo",
        "releaseDate": "2021-11-29",
        "retailPrice": 0,
        "shoe": "Vans Authentic 44 DX",
        "styleId": "VN0A38EN7BC",
        "title": "Vans Authentic 44 DX Bape 1st Camo",
        "year": 2021,
       
            "imageUrl": "https://images.stockx.com/images/Vans-Authentic-44-DX-Bape-1st-Camo.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1636536814",
            "smallImageUrl": "https://images.stockx.com/images/Vans-Authentic-44-DX-Bape-1st-Camo.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1636536814",
            "thumbUrl": "https://images.stockx.com/images/Vans-Authentic-44-DX-Bape-1st-Camo.jpg?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1636536814"
        
    },
    {
      
        "brand": "adidas",
        "colorway": "Slate Blue/Slate Blue/Slate Blue",
        "gender": "men",
        "name": "Slate Blue",
        "releaseDate": "2021-11-29",
        "retailPrice": 220,
        "shoe": "adidas Yeezy 350 V2 CMPCT",
        "styleId": "",
        "title": "adidas Yeezy 350 V2 CMPCT Slate Blue",
        "year": 2021,
       
            "imageUrl": "https://images.stockx.com/images/adidas-Yeezy-350-V2-CMPCT-Slate-Blue.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1634159868",
            "smallImageUrl": "https://images.stockx.com/images/adidas-Yeezy-350-V2-CMPCT-Slate-Blue.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1634159868",
            "thumbUrl": "https://images.stockx.com/images/adidas-Yeezy-350-V2-CMPCT-Slate-Blue.jpg?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1634159868"
        
    }
]

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