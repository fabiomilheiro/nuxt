// https://nuxt.com/docs/api/configuration/nuxt-config
// import dotenv from "dotenv";
//
// dotenv.config();

export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: {enabled: true},

    typescript: {
        strict: true,
        typeCheck: "build",
    },

    runtimeConfig: {
        public: {
            sentryDsn: '',// process.env.NUXT_PUBLIC_SENTRY_DSN,
        },
    },

    modules: ["@nuxt/eslint", "@nuxt/content", "@sentry/nuxt/module"],
    components: [
        {
            path: "~/components",
            pathPrefix: false,
        }
    ],
    sentry: {
        sourceMapsUploadOptions: {
            org: 'fabio-milheiro',
            project: 'nuxt-default',
            authToken: process.env.NUXT_SENTRY_AUTH_TOKEN,

        },
    },
})