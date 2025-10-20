import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { DeveloperApplication } from "../types";
import { apiClient } from "../lib/api-client";
import { DeveloperApplicationStatuses } from "shared";
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

export const useSetApplicationStatus = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (applicationData: {
      application: DeveloperApplication;
      status: (typeof DeveloperApplicationStatuses)[keyof typeof DeveloperApplicationStatuses];
    }) => {
      const review = await apiClient.api.developerApplication.setStatus.$post({
        query: { id: applicationData.application.id },
        json: applicationData.status,
      });
      const reviewRes = await review.json();
      if (!reviewRes.success) {
        throw new Error(reviewRes.error);
      }
    },
    onSuccess: () => {
      queryClient.refetchQueries({ queryKey: ["developer-applications"] });
    },
  });
};
