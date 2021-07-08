
class User {
    constructor(username,password,role){
        this.username= username
        this. password=  password
        this.role = role;
    }

    login(){
    return users.find(a =>a.username === this.username && a.password===this.password)
    }

}
const users=[new User("luwam", "luwam123","admin"),new User("salem", "salem123","user")]

module.exports= User;