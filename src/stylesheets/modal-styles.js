import { root } from "./root";

const modalStyles = {
    overlay: {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "none",
        zIndex: 555,
        overflow: "hidden",
    },

    content: {
        padding: "294px 72px 80px",
        width: "100vw",
        height: "100vh",
        margin: "auto",
        overflow: "auto",
        inset: 0,
        border: "none",
        backgroundColor: `${root.colors.mainDarkColor}`,
    },
};

export default modalStyles;
