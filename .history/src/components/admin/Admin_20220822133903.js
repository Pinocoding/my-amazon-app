import React from "react";
import AdminHeader from "./AdminHeader";
import AdminNav from "./AdminNav";
import AdminUser from "./AdminUser";
import "./Admin.css";

function Admin() {
  const [showUsers, setShowUsers] = useState(false);
  const handleShowUsers = () => {
    setShowUsers(true);
  };
  return (
    <div>
      <div className="admin">
        <AdminHeader />
        <div className="admin__container">
          <AdminNav />
          <div className="admin__right">
            <div className="admin__titte">
              <div>Add New User</div>
              <button>Add New</button>
            </div>

            <div className="admin__tb">
              <AdminUser />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin;
