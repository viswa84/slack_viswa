import { Button } from "@/components/ui/button"
import { Id } from "../../../../convex/_generated/dataModel"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useWorkspaceId } from "@/hooks/use-workspace-id";
import { Avatar, AvatarImage ,AvatarFallback} from "@/components/ui/avatar";
interface UseItemProps {
    id: Id<"members">;
    label?: string;
    image?: string;
    variant?: VariantProps<typeof userItemVariants>["variant"]
}


const userItemVariants = cva(
    "flex items-center gap-1.5 justify-start font-normal h-7 px-4 text-sm overflow-hidden",
    {
        variants: {
            variant: {
                default: "text-[#f9edffcc]",
                active: "text-[#481349] bg-white/90 hover:bg-white/90",
            },
        },
        defaultVariants: {
            variant: "default",
        }
    },
)
export const UserItem = ({ id, label="Member", image, variant }: UseItemProps) => {

    const workspaceId = useWorkspaceId();
    const avatharFallback = label.charAt(0).toUpperCase();


    return (
        <Button
         variant={"transparent"}
         className={cn(userItemVariants({variant:variant}))}
        >

            <Link  href={`/workspace/${workspaceId}/member/${id}`}>

            <Avatar className="size-5 rounded-md mr-1">
                <AvatarImage  className="rounded-md" src={image}/>
                <AvatarFallback className="rounded-md">
                    {avatharFallback}
                </AvatarFallback>
            </Avatar>
            <span className="text-sm truncate">   {label}</span>
            </Link>

        </Button>
    )
}