const user = {
    firstName: "Davies",
    lastName: "Amedeus",
    age: 24,
    skills: ["Writter", "Programmer", "Designer", "UI/UX"],
    occupation: "Software Developer",
    fullName: function(){
        return this.firstName+" "+this.lastName;
    }
}



console.log(user.fullName);