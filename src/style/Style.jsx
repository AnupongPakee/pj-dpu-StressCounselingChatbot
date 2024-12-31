const style = {
    "container": {
        position: "relative",
        width: "100vw",
        height: "100vh",
        padding: "1.6rem",
        backgroundColor: "#E0EAFC",
        overflow: "hidden"
    },
    "content": {
        position: "relative",
        display: "flex",
        alignItems: "center",
        padding: "1.6rem",
        width: "100%",
        height: "100%",
        overflow: "hidden",
        zIndex: "3"
    },
    "font_family":
    {
        "en": {
            fontFamily: "Roboto, sans-serif",
            fontWeight: "400",
            letterSpacing: "1px"
        },
        "th": {
            fontFamily: "IBM Plex Sans Thai, sans-serif",
            fontWeight: "400",
            letterSpacing: "1px"
        }
    },
    "bg-content": {
        position: "absolute",
        top: "0",
        left: "0",
        display: "flex",
        width: "100%",
        height: "100%"
    },
    "bg-1": {
        position: "relative",
        minWidth: "640px",
        width: "100%",
        height: "100%",
        backgroundColor: "#6F3089",
        boxShadow: "0.4rem 0 1rem rgba(0, 0, 0, 0.5)",
        zIndex: "3"
    },
    "bg-2": {
        position: "relative",
        maxWidth: "320px",
        width: "100%",
        height: "100%",
        backgroundColor: "#6F3089",
        boxShadow: "0.4rem 0 1rem rgba(0, 0, 0, 0.5)",
        zIndex: "2"
    }, 
    "bg-3": {
        position: "relative",
        maxWidth: "320px",
        width: "100%",
        height: "100%",
        backgroundColor: "#6F3089",
        boxShadow: "0.4rem 0 1rem rgba(0, 0, 0, 0.5)",
        zIndex: "1"
    }
}

export default style;