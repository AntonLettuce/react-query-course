import { useMutation, useQueryClient } from "react-query";
import { StatusSelect } from "./StatusSelect";

export default function IssueStatus({ status, issueNumber }) {
  const queryClient = useQueryClient();

  const changeStatus = useMutation(
    (status) =>
      fetch(`/api/issues/${issueNumber}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ status }),
      }).then((res) => res.json()),
    {
      onMutate: (status) => {
        const oldStatus = queryClient.getQueryData([
          "issues",
          issueNumber,
        ]).status;
        queryClient.setQueryData(["issues", issueNumber], (data) => ({
          ...data,
          status,
        }));
        return () => {
          queryClient.setQueryData(["issues", issueNumber], (data) => ({
            ...data,
            status: oldStatus,
          }));
        };
      },
      onError: (_, __, rollback) => {
        rollback();
      },
      onSettled: () => {
        queryClient.invalidateQueries(["issues", issueNumber], { exact: true });
      },
    }
  );

  return (
    <div className="issue-options">
      <div>
        <span>Status</span>
        <StatusSelect
          value={status}
          onChange={(e) => changeStatus.mutate(e.target.value)}
          noEmptyOption
        />
      </div>
    </div>
  );
}
