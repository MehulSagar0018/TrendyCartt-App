import React, { useState } from "react";
import { useDeleteUserMutation, useGetUserQuery } from "../../../../features/auth/authApi";
import { Link, useNavigate } from "react-router-dom";
import UpdateUserModal from "./UpdateUserModal";

const ManageUser = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const { data: users = [], error, isLoading, refetch } = useGetUserQuery();
  const [deleteUser] = useDeleteUserMutation();
  const navigate = useNavigate();

  const handleDelete = async (id) => {
    try {
      const response = await deleteUser(id).unwrap();
      console.log(response);
      alert("User deleted successfully");
      refetch();
      navigate("/");
    } catch (error) {
      console.error("Failed to delete user", error);
    }
  };

  const handleEdit = (user) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedUser(null);
  };

  return (
    <>
      {isLoading && <div>Loading...</div>}
      {error && <div>Failed to load users.</div>}
      <section style={{ padding: "1rem", backgroundColor: "#F1F5F9" }}>
        <div style={{ width: "100%", marginBottom: "3rem", padding: "1rem", margin: "0 auto" }}>
          <div style={{ backgroundColor: "#fff", padding: "1.5rem", borderRadius: "8px", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid #E2E8F0", paddingBottom: "1rem" }}>
              <h3 style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#2D3748" }}>All Users</h3>
             
            </div>

            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "1rem" }}>
                <thead>
                  <tr style={{ backgroundColor: "#EDF2F7", textAlign: "left" }}>
                    <th style={headerStyle}>No.</th>
                    <th style={headerStyle}>User Email</th>
                    <th style={headerStyle}>User Role</th>
                    <th style={headerStyle}>Edit or Manage</th>
                    <th style={headerStyle}>Delete</th>
                  </tr>
                </thead>

                <tbody>
                  {users &&
                    users.map((user, index) => (
                      <tr key={user._id} style={{ borderBottom: "1px solid #E2E8F0" }}>
                        <td style={cellStyle}>{index + 1}</td>
                        <td style={cellStyle}>{user?.email}</td>

                        <td style={cellStyle}>
                          <span
                            style={{
                              padding: "2px 10px",
                              borderRadius: "10px",
                              backgroundColor: user?.role === "admin" ? "#4A90E2" : "#FFC107",
                              color: user?.role === "admin" ? "#fff" : "#000",
                            }}
                          >
                            {user?.role}
                          </span>
                        </td>

                        <td style={cellStyle}>
                          <button
                            onClick={() => handleEdit(user)}
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "5px",
                              color: "#1D4ED8",
                              cursor: "pointer",
                              border: "none",
                              background: "none",
                              fontSize: "0.875rem",
                            }}
                          >
                            <i className="ri-edit-2-line"></i> Edit
                          </button>
                        </td>

                        <td style={cellStyle}>
                          <button
                            onClick={() => handleDelete(user?._id)}
                            style={{
                              backgroundColor: "#E53E3E",
                              color: "#fff",
                              padding: "4px 8px",
                              borderRadius: "6px",
                              fontSize: "0.875rem",
                              cursor: "pointer",
                              border: "none",
                              transition: "background-color 0.3s",
                            }}
                            onMouseOver={(e) => (e.target.style.backgroundColor = "#C53030")}
                            onMouseOut={(e) => (e.target.style.backgroundColor = "#E53E3E")}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Modal Logic */}
      {isModalOpen && <UpdateUserModal user={selectedUser} onClose={handleCloseModal} onRoleUpdate={refetch} />}
    </>
  );
};

// Styles for table headers and cells
const headerStyle = {
  padding: "12px",
  fontSize: "0.875rem",
  fontWeight: "bold",
  textTransform: "uppercase",
  borderBottom: "2px solid #CBD5E0",
};

const cellStyle = {
  padding: "12px",
  fontSize: "0.875rem",
  color: "#4A5568",
};

export default ManageUser;
