"use client"
import { useGetWorkspace } from '@/features/workspaces/api/use-get-workspace';
import { useWorkspaceId } from '@/hooks/use-workspace-id';
import { useParams } from 'next/navigation';
import React from 'react';

const WorkspaceIdPage = () => {

  const workspaceId = useWorkspaceId();

  const { data } = useGetWorkspace({ id: workspaceId })
  const params = useParams()
  return (
    <div>
      data:- {JSON.stringify(data)}
    </div>
  )
}

export default WorkspaceIdPage
