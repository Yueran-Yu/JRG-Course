class Model{
    constructor(options) {
        this.data = options.data
    }
    create() {
        console && console.error && console.error("You haven't implement Create")
        //optional chaining operator
        // console?.error?.("You haven't implement Create")
    }
    delete() {
        console && console.error && console.error("You haven't implement delete")
    }
    update(data) {
        console && console.error && console.error("You haven't implement update")
    }
    get() {
        console && console.error && console.error("You haven't implement get")
    }
}

export default Model