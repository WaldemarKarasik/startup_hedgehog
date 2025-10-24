"use client";

import {
  useApplications,
  useSetApplicationStatus,
} from "@/src/hooks/applications";
import { DeveloperApplication } from "@/src/types";
import { Eye, ThumbsDown, ThumbsUp } from "lucide-react";
import { Button } from "primereact/button";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { DeveloperApplicationStatuses } from "shared";

export const ApplicationsTable = ({
  data,
}: {
  data: DeveloperApplication[];
}) => {
  const { data: applications } = useApplications(data);
  const { mutate: setStatus, error: setStatusError } =
    useSetApplicationStatus();
  const actionBodyTemplate = (application: DeveloperApplication) => {
    const handleApprove = () => {
      // Одобрить developer application
      setStatus({ application, status: "APPROVED" });
    };

    const handleReject = () => {
      // Отклонить developer application
      setStatus({ application, status: "REJECTED" });
    };

    const handleReview = async () => {
      // Отправить на рассмотрение
      setStatus({ application, status: "IN_REVIEW" });
    };
    switch (application.status) {
      case DeveloperApplicationStatuses.NEW:
        return (
          <Button
            icon={<Eye />}
            rounded
            onClick={handleReview}
            tooltip="Отправить на рассмотрение"
            tooltipOptions={{ position: "top" }}
          />
        );
      case DeveloperApplicationStatuses.IN_REVIEW:
        return (
          <div className="flex gap-2">
            <Button
              icon={<ThumbsUp />}
              rounded
              severity="success"
              onClick={handleApprove}
              tooltip="Одобрить"
              tooltipOptions={{ position: "top" }}
            />
            <Button
              icon={<ThumbsDown />}
              rounded
              severity="danger"
              onClick={handleReject}
              tooltip="Отказать"
              tooltipOptions={{ position: "top" }}
            />
          </div>
        );
    }
  };
  return (
    <>
      <DataTable value={applications} tableStyle={{}} showGridlines>
        <Column header="Статус" field="status" />
        <Column header="Telegram" field="telegram" />
        <Column header="Название" field="productName" />
        <Column header="Описание" field="productDescription" />
        <Column header="Стоимость кастомизации" field="customizationPrice" />
        <Column header="Revenue Share %" field="revenueSharePercent" />
        <Column header="Demo URL" field="demoUrl" />
        <Column header="Github URL" field="githubUrl" />

        <Column
          header="Действия"
          body={actionBodyTemplate}
          exportable={false}
        />
      </DataTable>
    </>
  );
};
