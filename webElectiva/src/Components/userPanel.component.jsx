import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import {
  setCurrentPage,
  setDecrementPage,
  setIncrementPage,
  setMaxPage,
  setTotalRows,
  setUsers,
} from "../slices/users.slice";

function UserPanel() {
  const users = useSelector((state) => state.users.users);
  const page = useSelector((state) => state.users.page);
  const maxPage = useSelector((state) => state.users.maxPage);
  const totalRows = useSelector((state) => state.users.totalRows);
  const dispatch = useDispatch();

  const getUsers = async () => {
    const result = await axios.get("http://localhost:3006/api/users", {
      params: {
        page,
      },
    });
    const users = [...result.data.rows];
    const currentPage = result.data.page;
    const maxPage = result.data.totalPages;
    const totalRows = result.data.totalRows;
    dispatch(setUsers(users));
    dispatch(setCurrentPage(currentPage));
    dispatch(setMaxPage(maxPage));
    dispatch(setMaxPage(maxPage));
    dispatch(setTotalRows(totalRows));
  };

  useEffect(() => {
    getUsers();
  }, [page]);

  const handleNextPage = () => {
    dispatch(setIncrementPage());
  };

  const handlePrevPage = () => {
    dispatch(setDecrementPage());
  };

  return (
    <div className="App">
      <h1>Panel de usuarios</h1>
      <nav>
        <div className="item">
          <NavLink to="/admin">Admin</NavLink>
        </div>
      </nav>

      <div className="container-users-total">
        <h2>Cantidad total de usuarios</h2>
        <p id="users-total">{totalRows}</p>
      </div>

      <div className="container-users">
        {users &&
          users.map((user) => (
            <div className="container-users__card" key={user.id}>
              {user.name} {user.lastname} - {user.address} - {user.phone} -{" "}
              {user.email}
            </div>
          ))}
      </div>
      <div className="container-buttons">
        <button id="prev-page" disabled={page == 1} onClick={handlePrevPage}>
          Anterior
        </button>
        <p id={"current-page"}>1</p>
        <button
          id="next-page"
          disabled={page == maxPage && maxPage != 1 && totalRows > 0}
          onClick={handleNextPage}
        >
          Continuar
        </button>
      </div>
    </div>
  );
}

export default UserPanel;
