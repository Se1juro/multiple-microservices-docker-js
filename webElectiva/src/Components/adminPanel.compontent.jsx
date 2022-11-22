import { NavLink } from "react-router-dom";
import axios from "axios";
import { setCurrentPage, setMaxPage, setUsers } from "../slices/users.slice";
import { useSelector, useDispatch } from "react-redux";
function AdminPanel() {
  const page = useSelector((state) => state.users.page);
  const dispatch = useDispatch();

  const handleGenerateUsers = async () => {
    await axios.post("http://localhost:3006/api/users");
    window.location.href = "/";
  };

  const handleDeleteUsers = async () => {
    await axios.delete("http://localhost:3006/api/users");
    window.location.href = "/";
  };
  return (
    <div className="App">
      <div className="container-admin">
        <button id="generate-rows" onClick={handleGenerateUsers}>
          Generar nuevos registros
        </button>
        <button id="delete-rows" onClick={handleDeleteUsers}>
          Borrar todos los registros
        </button>
        <NavLink to="/">Regresar</NavLink>
      </div>
    </div>
  );
}

export default AdminPanel;
