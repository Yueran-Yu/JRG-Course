import createId from "@/lib/idCreator";


const localStorageKeyName = 'tagList';
const tagStore = {
    // tag store
    tagList: [] as Tag[],
    fetchTags() {
        this.tagList = JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]');
        return this.tagList
    },
    findTag(id: string) {
        // filter 返回的是一个数组
        return this.tagList.filter(t => t.id === id)[0]
    },
    createTag(name: string) {
        // map method to fetch names array
        const names = this.tagList.map(item => item.name)
        if (names.indexOf(name) >= 0) {
            window.alert('The tag id duplicated.')
            return 'duplicated'
        }
        // this.data = [{id:'1', name: '1'}, {id:'2',name: '2'}]
        const id = createId().toString()
        this.tagList.push({id, name: name})
        this.saveTags()
        window.alert('Added successfully.')
        return 'success';
    },
    removeTag(id: string) {
        let index = -1
        for (let i = 0; i < this.tagList.length; i++) {
            if (this.tagList[i].id === id) {
                index = i
                break
            }
        }
        this.tagList.splice(index, 1)
        this.saveTags()
        return true
    },
    updateTag(id: string, name: string) {
        const idList = this.tagList.map(item => item.id)
        if (idList.indexOf(id) >= 0) {
            const names = this.tagList.map(item => item.name)
            if (names.indexOf(name) >= 0) {
                return 'duplicated'
            } else {
                const tag = this.tagList.filter(item => item.id === id)[0]
                tag.id = tag.name = name
                this.saveTags()
                return 'success'
            }
        } else {
            return 'not found'
        }
    },
    saveTags() {
        window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.tagList));
    }
};
tagStore.fetchTags()
export default tagStore;