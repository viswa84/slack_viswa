"use client";

import Image from "next/image";
import VerificatonInput from "react-verification-input"
//logo need_to_change
const JoinPage = () => {
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
          character:"uppercase h-auto rounded-md border border-gray-300 flex items-center text-lg font-medium"
        }}/>
      </div>
    </div>
  );
};

export default JoinPage;
