function login(userName,password){
    if(userName==="admin" && password===123){
        console.log("Login Successfull");
    }
    else{
        console.log("Invalid credentials");
    }
}
login("admin",123);