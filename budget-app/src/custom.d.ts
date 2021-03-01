// global declaration
type RecordItem = {
    tags: string[];
    notes: string;
    type: string;
    amount: number; // data type => object / string
    createdAt?: Date; // class/constructor=> class is used to divide objects
    // 问号的意思是 createAt 可以不存在
}

type Tag = {
    id: string;
    name: string;
}

type TagListModel = {
    data: Tag[];
    fetch: () => Tag[];
    create: (name: string) => 'success' | 'duplicated'; //字符串的子类型：联合类型
    update: (id: string, name: string) => 'success' | 'not found' | 'duplicated';
    remove: (id: string) => boolean;
    save: () => void;
}

interface Window {
    tagList: Tag[];
    createTag: (name: string) => void;
    removeTag: (id: string) => boolean;
    updateTag: (id: string, name: string) => 'success' | 'not found' | 'duplicated';
    // updateTag: TagListModel['update'];
    findTag: (id: string) => Tag | undefined;
}