import tagListModel from "@/models/tagListModel";

export default {
    // tag store
    tagList: tagListModel.fetch(),
    findTag(id: string) {
        // filter 返回的是一个数组
        return this.tagList.filter(t => t.id === id)[0]
    },
    createTag: (name: string) => {
        // point 2: write data: from the tagListModel
        const message = tagListModel.create(name)
        if (message === 'duplicated') {
            window.alert('The tag id duplicated.')
        } else if (message === 'success') {
            window.alert('Added successfully.')
        }
    },
    removeTag: (id: string) => {
        return tagListModel.remove(id);
    },
    updateTag: (id: string, name: string) => {
        return tagListModel.update(id, name)
    }
}