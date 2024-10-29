export default defineNuxtRouteMiddleware((to, from)=> {
    if (to.query.error) {
        return createError({
            status: 500,
            message: "Artificial error from log middleware*",
        })
    }
})