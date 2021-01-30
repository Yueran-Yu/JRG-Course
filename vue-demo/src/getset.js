let data = {}
data._n = 0

Object.defineProperty(data, 'n', {
    get() {
        return this._n
    },
    set(value) {
        if (value < 0) return
        this._n = value
    }
})

let data2 = proxy({data: {n: 0}})

function proxy({data}) {
    const obj = {}
    Object.defineProperty(obj, 'n', {
        get() {
            return data.n
        },
        set(value) {
            if (value < 0) return
            data.n = value
        }
    })
}


let myData3 = {n: 0}
let data3 = proxy2({data: myData3})

function proxy2({data}) {
    let value = data.n
    Object.defineProperty(data,'n',{
        get(){
            return value
        },
        set(newValue){
            if(newValue) return
            value = newValue
        }
    })
}




