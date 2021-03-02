import recordStore from "@/store/recordStore";
import tagStore from './tagStore';

const store = {
    ...recordStore,
    ...tagStore
}

export default store