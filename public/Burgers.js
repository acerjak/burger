class Burgers {
    constructor () {
        this.burgers = []
        this.selectAll = () => this.burgers
        this.insertOne = burger => {
            this.burgers.push(burger)
        }
        this.updateOne = text => {
            this.burgers.forEach(burger => {
                if (burger.text === text) {
                    burger.isDevoured = !burger.isDevoured
                }
            })
        }
    }
}

module.exports = Burgers