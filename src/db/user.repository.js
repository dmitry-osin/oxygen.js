class UserRepository {
    constructor(mongoose) {
        this.User = mongoose.model('User')
    }

    create(user) {
        return this.User.create(user)
    }

    findByEmail(email) {
        return this.User.findOne({email})
    }

    findById(id) {
        return this.User.findById(id)
    }

    update(id, user) {
        return this.User.findByIdAndUpdate(id, user)
    }

    delete(id) {
        return this.User.findByIdAndDelete(id)
    }

    findAll() {
        return this.User.find()
    }
}

module.exports = UserRepository