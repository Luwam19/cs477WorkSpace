const User = require("../models/user")
const jwt = require("jsonwebtoken")
const secret = "luwamfrezghi"

exports.login=(req,res,next)=>{
    console.log(req.body)
    const user = new User(req.body.username,req.body.password,null).login()
  if(user){
     const jwtToken = jwt.sign({username:user.username,role : user.role},secret) 
      res.json({jwtToken})
  }
  else{
      res.json({"error": "invalid username"})
  }
}

exports.authorize = (req,res,next)=>{
  const authHeader = req.headers.authorization;
  if(authHeader){
      const jwtToken = authHeader.split(" ")[1];
//     jwt.verify(jwtToken,secret,(err,user)=>{
//  
//           if(err){
//            res.status(403).json({error:"forbidden"});
//           }
//            req.user = user;
//             next()
//            })
//           }else{
//       res.status(401).json({error:"unauthorized"});
//   }



   try{
       const payload=jwt.verify(jwtToken,secret)
       next();
   }catch(error){
       res.status(403).json({error: "forbidden"});
   }
  }else{
      res.status(401).json({error:"unauthorized"})
  }
}

exports.authorizeAdmin =(req,res,next)=>{
    if(req.use.rool==="admin"){
       next(); 
    }else{
        res.status(401).json({error:"forbidden"}); 
    }

}
