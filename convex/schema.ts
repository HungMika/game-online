import { defineSchema, defineTable } from "convex/server";
import {v} from "convex/values";

const schema = defineSchema({
    products: defineTable({
        prodName: v.string(),
        prodPrice: v.number(),
    })
})

export default schema;