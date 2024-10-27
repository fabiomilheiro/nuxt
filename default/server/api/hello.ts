export default defineEventHandler(event => {
    const shouldError = getQuery(event).error;

    if (shouldError) {
        return createError({
            status: 500,
            message: `Artificial internal server error (${new Date().toISOString()})`,
        })
    }

    return {
        value: "hello, User 1!",
    }
});