import { v } from "convex/values";
import { mutation, query } from "./_generated/server";
import { auth } from "./auth";


export const create = mutation({
    args:{
        name:v.string(),
    },
    handler: async (ctx,args)=>{
        const userId = await auth.getUserId(ctx);
        if(!userId){
            throw new Error("Unathorized")
        }
        //ToDO create a proper method latter
        const joinCode = "123456";
         const WorkspaceId = await ctx.db.insert("workspaces",{
            name:args.name,
            userId,
            joinCode,
         })
         return WorkspaceId ;
    }
})

export const get=query({
    args:{},
    handler:async(ctx)=>{
        return await ctx.db.query("workspaces").collect()
    }
})