const log = {
    data() {
        return {
            name: undefined,
            time: undefined
        }
    },
    created() {
        if (!this.name) {
            throw new Error("No Name provided")
        }
        this.time = new Date()
        console.log(`${this.name} has been created.`)
    },
    beforeDestroy() {
        const now = new Date()
        console.log(`${this.name} will be die, Living interval: ${now - this.time}  ms`)
    }
}

export default log