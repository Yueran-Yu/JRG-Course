let data = {}
data._n = 0

Object.defineProperty(data,'n',{
    get(){
        return this._n
    },
    set(value){
        if(value < 0) return
        this._n = value
    }
})