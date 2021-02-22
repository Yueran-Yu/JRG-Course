// global declaration
type RecordItem = {
    tags: string[];
    notes: string;
    type: string;
    amount: number; // data type => object / string
    createdAt?: Date; // class/constructor=> class is used to divide objects
    // 问号的意思是 createAt 可以不存在
}