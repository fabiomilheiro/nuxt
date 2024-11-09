import {defineMongooseModel} from "#nuxt/mongoose";

export const MovieSchema = defineMongooseModel({
    name: "movie",
    schema: {
        title: {
            type: "string",
            required: true,
            unique: false,
        },
    },
    options: {},
});