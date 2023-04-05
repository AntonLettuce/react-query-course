import { useLabelsData } from "../helpers/useLabelsData";

export default function LabelList({ selected, toggle }) {
  const { data, isLoading } = useLabelsData();
  return (
    <>
      <h3>Labels</h3>
      <div className="labels">
        {isLoading ? <p>Loading...</p> : (
          <ul>
            {data.map(({ id, color, name }) => (
              <li key={id}>
                <button onClick={() => toggle(id)} className={`${selected.includes(id) ? 'selected' : ''} label ${color}`}>{name}</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}
