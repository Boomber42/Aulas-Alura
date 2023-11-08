var user = {
    name: "Boomber",
    email: "b@b.com",
    birth: "1997/12/29",
    role: "student",
    active: true,
    showInfos: function(){
        console.log(this.name, this.email)
    }
}

var admin = {
    name: "Shuri",
    email: "s@s.com",
    birth: "1997/10/28",
    role: "admin",
    active: true,
    crirarCurso(){
        console.log("curso criado!")
    }
}

// Object.setPrototypeOf serve para buscar metodos de outros objetos e passar para outro que não o possui
Object.setPrototypeOf(admin, user)
admin.crirarCurso()
admin.showInfos()

// var show = function(){
//     console.log(this.name)
// };

// // .bind serve para prender um contexto, neste caso usado para prender o "user" e referenciar ele na função
// var showName = show.bind(user);

// showName();