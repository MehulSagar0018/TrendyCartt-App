import React, { useState } from "react";
import { useUpdateUserRoleMutation } from "../../../../features/auth/authApi";

const UpdateUserModal = ({ user, onClose, onRoleUpdate }) => {
    const [role, setRole] = useState(user.role);
    const [updateUserRole] = useUpdateUserRoleMutation();

    const handleUpdateRole = async () => {
        try {
            await updateUserRole({ userId: user._id, role }).unwrap();
            alert("User role updated successfully");
            onRoleUpdate();
            onClose();
        } catch (error) {
            console.error("Failed to update user role", error);
        }
    };

    return (
        <div style={overlayStyle}>
            <div style={modalStyle}>
                <h2 style={{ fontSize: "1.25rem", marginBottom: "1rem" }}>Edit User</h2>

                <div style={{ marginBottom: "1rem" }}>
                    <label style={labelStyle}>Email:</label>
                    <input
                        type="text"
                        value={user.email}
                        readOnly
                        style={inputStyle}
                    />
                </div>

                <div style={{ marginBottom: "1rem" }}>
                    <label style={labelStyle}>Role:</label>
                    <select
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                        style={inputStyle}
                    >
                        <option value="user">User</option>
                        <option value="admin">Admin</option>
                    </select>
                </div>

                <div style={{ display: "flex", justifyContent: "flex-end", paddingTop: "1rem" }}>
                    <button
                        onClick={onClose}
                        style={{ ...buttonStyle, backgroundColor: "#718096", marginRight: "0.5rem" }}
                        onMouseOver={(e) => (e.target.style.backgroundColor = "#4A5568")}
                        onMouseOut={(e) => (e.target.style.backgroundColor = "#718096")}
                    >
                        Cancel
                    </button>

                    <button
                        onClick={handleUpdateRole}
                        style={{ ...buttonStyle, backgroundColor: "#4A90E2" }}
                        onMouseOver={(e) => (e.target.style.backgroundColor = "#357ABD")}
                        onMouseOut={(e) => (e.target.style.backgroundColor = "#4A90E2")}
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
};

// Styles
const overlayStyle = {
    position: "fixed",
    inset: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
};

const modalStyle = {
    backgroundColor: "#fff",
    padding: "1.5rem",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    width: "30%",
};

const labelStyle = {
    display: "block",
    fontSize: "0.875rem",
    fontWeight: "bold",
    color: "#4A5568",
    marginBottom: "0.5rem",
};

const inputStyle = {
    width: "100%",
    padding: "0.75rem",
    fontSize: "1rem",
    borderRadius: "6px",
    border: "1px solid #CBD5E0",
    backgroundColor: "#F7FAFC",
    outline: "none",
};

const buttonStyle = {
    color: "#fff",
    padding: "0.75rem 1.5rem",
    borderRadius: "6px",
    fontSize: "0.875rem",
    border: "none",
    cursor: "pointer",
    transition: "background-color 0.3s",
};

export default UpdateUserModal;
