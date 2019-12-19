var UserData=[
    {
        username:"radon12",
        password:"suncast14"
    },
    {
        username:"demon14",
        password:"durkshire12"
    },
    {
        username:"simon14",
        password:"verlin12"
    }
]

function UserValidity(username, password){
    for(var i=0; i< UserData.length;i++)
    {
        if ((username===UserData[i].username)&&(password===UserData[i].password))
        return true;
    }
    return false;
}

var username=prompt("Enter your username","Type in your username here");
var password=prompt("Enter your password","Type in your password here");
loginValidity=UserValidity(username,password);

if(loginValidity)
alert("The meeting is at 0000 on 12th Street North of Death Star Valley! Do attend.");
else
alert("Your credentials are incorrect. Please refresh the page and try again.")