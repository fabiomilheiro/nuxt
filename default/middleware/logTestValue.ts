export default defineNuxtRouteMiddleware((to, from)=> {
    if (to.query.test) {
        console.log("test value =", to.query.test);
    }
})