import { possibleStatus } from "../helpers/defaultData"

export const StatusSelect = ({ value, onChange }) => {
  return (
    <select value={value} onChange={onChange} className="status-select">
      <option value="">Select Your Status</option>
      {possibleStatus.map(({ id, label }) => <option key={id} value={id}>{label}</option>)}
    </select>
  )
}