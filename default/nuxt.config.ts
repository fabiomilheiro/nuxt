// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: {enabled: true},

    pages: true,
    typescript: {
        strict: true,
        typeCheck: "build",
    },

    runtimeConfig: {
        public: {
            environment: "",
            sentryDsn: "",
            tmdbApiToken: "",
            motion: {
                directives: {},
            }
        },
    },

    modules: [
        "@nuxt/eslint",
        "@nuxt/content",
        "@sentry/nuxt/module",
        "@nuxt/image",
        "@pinia/nuxt",
        "@nuxt/ui",
        "@vueuse/motion/nuxt",
    ],
    components: [
        {
            path: "~/components",
            pathPrefix: false,
        }
    ],
    app: {
        pageTransition: {name: "page", mode: "out-in"},
        layoutTransition: {name: "layout", mode: "out-in"},
    },
    ui: {
        theme: {
            colors: ['primary', 'secondary', 'info', 'success', 'warning', 'error'],
        }
    },
    colorMode: {
        preference: "light",
    },
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