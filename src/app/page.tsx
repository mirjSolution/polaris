'use client'

import { useMutation, useQuery } from "convex/react"
import { Button } from "@/components/ui/button"
import { api } from "../../convex/_generated/api"

const Page = () => {
  const projects = useQuery(api.projects.get)
  const createProject = useMutation(api.projects.create)

  return <div className="flex flex-col gap-2">
    <Button onClick={() => createProject({
      name: 'New Project123'
    })}>
      Add New
    </Button>
    {projects?.map(project => <div className="border rounded p-4 flex flex-col"  key={project._id}>
      <p>{project.name}</p>
      <p>Owner Id: {project.ownerId}</p>
    </div>)}
  </div>
}

export default Page