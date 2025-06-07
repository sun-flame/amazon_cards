export default function Price({ oldPrice, newPrice }) {
    let oldStyles = {
        textDecorationLine: "line-through",
        color: "#333",
        fontSize: "0.9rem",
    };
    let newStyles = {
        fontWeight: "bold",
        color: "#000",
        fontSize: "1.1rem",
    };
    let styles = {
        backgroundColor: "#facc15",
        height: "50px",
        borderBottomLeftRadius: "14px",
        borderBottomRightRadius: "14px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "20px",
        marginTop: "12px",
    };

    return (
        <div style={styles}>
            <span style={oldStyles}>{oldPrice}</span>
            <span style={newStyles}>{newPrice}</span>
        </div>
    );
}
