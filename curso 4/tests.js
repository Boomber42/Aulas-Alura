import User from "./User.js";
import Admin from "./Admin.js";
import Teacher from "./Teacher.js";

// Testes utilizando a classe User.
var newUser = new User('Boomber', 'b@b.com', '1997-05-11')
console.log('Dados do(a) aluno(a): ',newUser.showInfos())

// Testes utilizando a classe Admin.
var newAdmin = new Admin ('Steve', 's@s.com', '1998-01-02')
console.log(newAdmin.createClass('C#', 15))
console.log(newAdmin.showInfos())
console.log('Dados do(a) Admin: ',newAdmin.showInfos())

// Testes utilizando a classe Teacher.
var newTeacher = new Teacher ('Shuri', 's@s.com', '1995-03-05')
console.log(newTeacher.approveStudent('Boomber', 'C#'))
console.log('Dados do(a) Professor(a): ',newTeacher.showInfos())