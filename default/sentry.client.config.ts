import * as Sentry from "@sentry/nuxt";
import { useRuntimeConfig } from '#imports';

const config = useRuntimeConfig();

Sentry.init({
    environment: config.public.environment,
    // If set up, you can use your runtime config here
    dsn: config.public.sentryDsn,
    //dsn: "https://335037ff2ac3bb61e3407d8a96234e80@o369016.ingest.us.sentry.io/4508189808656384",
    integrations: [Sentry.replayIntegration({
        maskAllText: false,
        blockAllMedia: false,
    })],
    // Tracing
    // We recommend adjusting this value in production, or using a tracesSampler for finer control.
    tracesSampleRate: 1.0, //  Capture 100% of the transactions
    // Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
    tracePropagationTargets: ["localhost"/*, /^https:\/\/yourserver\.io\/api/*/],
    // Session Replay
    replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
    replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
});