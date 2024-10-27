// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: {enabled: true},

    typescript: {
        strict: true,
        typeCheck: "build",
    },

    runtimeConfig: {
        public: {
            environment: '',
            sentryDsn: '',
        },
    },

    modules: ["@nuxt/eslint", "@nuxt/content", "@sentry/nuxt/module"],
    components: [
        {
            path: "~/components",
            pathPrefix: false,
        }
    ],
    sourcemap: {client: true},
    sentry: {
        sourceMapsUploadOptions: {
            org: 'fabio-milheiro',
            project: 'nuxt-default',
            authToken: process.env.NUXT_SENTRY_AUTH_TOKEN,
            enabled: true,
        },
    },
})