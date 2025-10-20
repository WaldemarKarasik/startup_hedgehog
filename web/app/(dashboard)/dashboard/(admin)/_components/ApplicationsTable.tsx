"use client";

import { useApplications } from "@/src/hooks/applications";
import { DeveloperApplication } from "@/src/types";
import { Eye } from "lucide-react";
import { Button } from "primereact/button";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { useState } from "react";
import { DeveloperApplicationStatuses } from "shared";

const initialState = {
  success: false,
};

export const ApplicationsTable = ({
  data,
}: {
  data: DeveloperApplication[];
}) => {
  const { data: applications } = useApplications(data);
  const actionBodyTemplate = (application: DeveloperApplication) => {
    const handleApprove = () => {
      console.log("Approve application:", application.id);
      // Ваша логика одобрения
    };

    const handleReject = () => {
      console.log("Reject application:", application.id);
      // Ваша логика отклонения
    };

    const handleReview = async () => {
      // Отправить на рассмотрение
      console.log("View application:", application.id);
    };
    if (application.status == DeveloperApplicationStatuses.NEW) {
      return (
        <Button
          icon={<Eye />}
          rounded
          onClick={handleReview}
          tooltip="Отправить на рассмотрение"
          tooltipOptions={{ position: "top" }}
        />
      );
    } else return null;
  };
  return (
    <>
      <DataTable value={applications} tableStyle={{ minWidth: "50rem" }}>
        {Object.keys(applications[0]).map((key) => (
          <Column field={key} header={key} />
        ))}

        <Column
          header="Действия"
          body={actionBodyTemplate}
          exportable={false}
        />
      </DataTable>
    </>
  );
};
