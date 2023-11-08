function User(name, email){
    this.name = name,
    this.email = email,

    this.showInfos = function() {
       return `${this.name}, ${this.email}.`
    }
}

// var newUser = new User('Steve', 's@s.com')
// console.log(novoUser.showInfos())

///////////////////////////////////////////////////////////////////////////////////////////////////////////

function Admin(role){
    User.call(this, 'Steve', 's@s.com')
    this.role = role || 'student'
}

// Admin.prototype = Object.create(User.prototype)
// var newUser = new Admin('admin')
// console.log(newUser.showInfos())
// console.log(newUser.role)

///////////////////////////////////////////////////////////////////////////////////////////////////////////

var user = {
    init: function(name, email){
        this.name = name
        this.email = email
    },

    showInfos: function(){
        return this.name
    }
}

var newUser = Object.create(user)
newUser.init('Bomber', 'b@b.com')
console.log(newUser.showInfos())

///////////////////////////////////////////////////////////////////////////////////////////////////////////