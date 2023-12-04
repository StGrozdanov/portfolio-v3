import { JobsAndProjectsContext, JobsAndProjectsContextType } from "@/contexts/JobsAndProjectsContext";
import { useContext } from "react";

/**
 * Jobs and Projects context hook that allows access to the context props
 */
export const useJobsAndProjectsContext = (): JobsAndProjectsContextType => useContext(JobsAndProjectsContext) as JobsAndProjectsContextType;