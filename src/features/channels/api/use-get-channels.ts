
import { useQuery } from "convex/react";
import { Id } from "../../../../convex/_generated/dataModel";
import { api } from "../../../../convex/_generated/api";



interface UseGetChannelsProps {
    workspaceId:Id<"workspaces">
}

export const useGetChannels = ({workspaceId}:UseGetChannelsProps)=>{

    const data = useQuery(api.channels.get ,{workspaceId});

    const isloading = data === undefined ;

    return {data, isloading}

}