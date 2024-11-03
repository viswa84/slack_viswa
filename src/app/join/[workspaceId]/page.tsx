"use client";

import { Button } from "@/components/ui/button";
import { useGetWorkspace } from "@/features/workspaces/api/use-get-workspace";
import { useWorkspaceId } from "@/hooks/use-workspace-id";
import Image from "next/image";
import Link from "next/link";
import VerificatonInput from "react-verification-input"
//logo need_to_change


const JoinPage = () => {
  const workspaceId = useWorkspaceId();
  // const {}=useGetWorkspace()
 
  return (
    <div className="h-full flex flex-col gap-y-8 items-center justify-center bg-white p-8 rounded-lg shadow-md">
      <Image src={"/logo.svg"} alt="Logo" width={60} height={60} />
      <div className="flex flex-col gap-y-4 items-center justify-center max-w-md">
        <div className="flex flex-col gap-y-2 items-center justify-center">
          <h1>
            Join workspace
          </h1>
          <p className="text-md text-muted-foreground">
            Enter the workspace code to join
          </p>
        </div>
        <VerificatonInput classNames={{
          container:"flex gap-x-2",
          character:"uppercase h-auto rounded-md border border-gray-300 flex items-center justify-center text-lg font-medium text-gray-500",
          characterInactive:"bg-muted",
          characterSelected:"bg-white text-black",
          characterFilled:"bg-white text-black",
        }}
         length={6}
        autoFocus

        />
      </div>
      <div className="flex gap-x-4">
            <Button 
            size={"lg"}
            variant={"outline"}
            asChild
            >
            <Link href={"/"}>
            Back to home
            </Link>
            </Button>
      </div>
    </div>
  );
};

export default JoinPage;
