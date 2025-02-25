import { v } from "convex/values";
import {mutation ,query} from "./_generated/server";
export const create = mutation({
    args:{
        name: v.string(),
        price: v.number()
    },
    handler: async (ctx, args) => {

        const products = await ctx.db.query("products").collect();


        const prodId = await ctx.db.insert("products", {
            prodName: args.name, 
            prodPrice: args.price,
        });

        return prodId;
    }
});

export const get = query({
    args: {},
    handler: async (ctx) => {
        return await ctx.db.query("products").collect();
    }
}) 