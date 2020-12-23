import EventBus from "./EventBus";

class Model extends EventBus {
    constructor(options) {
        super() //EventBus#Constructor()
        // js的代码不能以方括号开头
        /*
        在console 里
        a[0]  等于
        a
        [0]
        的形式，所以 方括号的数组总是会往前面找变量
         */
        const keys = ['data', 'update', 'create', 'delete', 'get']
        keys.forEach((key) => {
            if (key in options) {
                this[key] = options[key]
            }
        })
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