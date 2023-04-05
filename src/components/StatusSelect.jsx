const options = [
  { id: "backlog", label: "Backlog" },
  { id: "todo", label: "To-do" },
  { id: "inProgress", label: "In Progress" },
  { id: "done", label: "Done" },
  { id: "cancelled", label: "Cancelled" },
];

export const StatusSelect = ({ value, onChange }) => {
  return (
    <select value={value} onChange={onChange} className="status-select">
      <option value="">Select Your Status</option>
      {options.map(({ id, label }) => <option key={id} value={id}>{label}</option>)}
    </select>
  )
}