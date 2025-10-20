import { useQuery } from "@tanstack/react-query";
import { DeveloperApplication } from "../types";
import { apiClient } from "../lib/api-client";

export const useApplications = (initialData: DeveloperApplication[]) => {
  return useQuery({
    queryKey: ["developer-applications"],
    queryFn: async () => {
      const applications = await apiClient.api.developerApplication.list.$get();
      const applicationsRes = await applications.json();
      if (!applicationsRes.success) {
        throw new Error(applicationsRes.error);
      }
      return applicationsRes.data as DeveloperApplication[];
    },
    refetchOnMount: false,
    initialData,
  });
};
