import { icons } from "../../assets/icons";

export default function EditButton({ onClick }: { onClick?: () => void }) {
  return (
    <button className="edit-btn" title="Edit" onClick={onClick}>
      {icons.edit}
    </button>
  );
}
