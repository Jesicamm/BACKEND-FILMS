class Storage {

    state = []

    constructor() {

    }

    async set(film) {
        return this.state.push(film)
    }

    async get() {
        return this.state;
    }

}

module.exports = Storage