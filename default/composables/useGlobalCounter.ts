export const useGlobalCounter = ()=>  useState("globalCounter", () => {
    return 0;
});