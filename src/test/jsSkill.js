const isType = (type) =>{
    return (target) => {
        `[object ${type}]` === Object.prototype.toString.call(target)
    }
}
Object.assign(this.$data,this.$options.data())