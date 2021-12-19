const mongoose = require("mongoose");
const user = require("./models/user");

const db = mongoose.connect('mongodb://localhost:27017/usercli',{
 
}).then(value=>console.log(""));

const User = require("./models/user");

const addUser = (user)=>{
    User.create(user).then(value=>{
        console.log("New user created..");
    })
}


const findUser = (name) =>{
    const search = new RegExp(name,'i');
    User.find({$or:[{firstname: search}, {lastname: search}]})
    .then(user=>{
        console.info(user);
        console.info(`${user.length} matches`);
    })
}

const updateUser = (email,newUser)=>{
    
        User.updateOne({email:email},{firstname:newUser.firstname,lastname:newUser.lastname,phone:newUser.phone,email:newUser.email},(error,result)=>{
            if(error){
                console.log(error)
            }else{
                console.log(result)
            }
        })
    
}

const deleteUser = async (email)=>{
    await User.deleteOne({email:email}).then(value=>{
        console.log("Deleted the user...");
    }).catch(error=>{
        console.log(error);
    })
}

const listUsers = async ()=>{
    await User.find().then(value=>{
        console.log(value);
    }).catch(error=>{
        console.error(error);
    })
}

module.exports = {
    addUser,
    findUser,
    updateUser,
    deleteUser,
    listUsers,
};
