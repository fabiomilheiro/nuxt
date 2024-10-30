export const useListStore = defineStore("list", ()=>{
    const list = ref<string[]>([]);

    const add = (value: string) => {
        list.value.push(value);
    };

    return {
        list,
        add,
    };
})