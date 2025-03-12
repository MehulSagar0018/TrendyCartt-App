import React from 'react';

const TimelineStep = ({ step, order, isCompleted, isCurrent, icon, description, isLastStep }) => {
    // Color mappings
    const colorMap = {
        blue: "#3B82F6",
        gray: "#6B7280",
        red: "#EF4444",
        green: "#10B981",
        yellow: "#FBBF24"
    };

    // Determine styles dynamically
    const iconStyles = {
        backgroundColor: isCompleted || isCurrent ? colorMap[icon.bgColor] || "#6B7280" : "#F3F4F6",
        color: isCompleted || isCurrent ? "#FFFFFF" : colorMap[icon.textColor] || "#6B7280",
        width: "24px",
        height: "24px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "50%",
    };

    const connectorStyles = {
        backgroundColor: isCompleted ? "#3B82F6" : "#E5E7EB",
        width: "100%",
        height: "2px",
        display: isLastStep ? "none" : "block",
    };

    const labelStyles = {
        color: isCompleted || isCurrent ? "#111827" : "#6B7280",
        fontSize: "1rem",
        fontWeight: "600",
    };

    const descriptionStyles = {
        color: isCompleted || isCurrent ? "#111827" : "#6B7280",
        fontSize: "0.875rem",
    };

    return (
        <li style={{ position: "relative", marginBottom: "1.5rem", paddingLeft: "2.5rem" }}>
            <div style={{ display: "flex", alignItems: "center" }}>
                {/* Timeline Icon */}
                <div style={iconStyles}>
                    <i className={`ri-${icon.iconName}`} style={{ fontSize: "1rem" }}></i>
                </div>

                {/* Connector Line (if not last step) */}
                {!isLastStep && <div style={connectorStyles}></div>}
            </div>

            {/* Step Details */}
            <div style={{ marginTop: "0.75rem", paddingRight: "2rem" }}>
                <h3 style={labelStyles}>{step.label}</h3>
                <time style={{ display: "block", marginBottom: "0.5rem", fontSize: "0.875rem", color: "#9CA3AF" }}>
                    {order.updatedAt ? new Date(order.updatedAt).toLocaleString() : 'Time'}
                </time>
                <p style={descriptionStyles}>{description}</p>
            </div>
        </li>
    );
};

export default TimelineStep;
