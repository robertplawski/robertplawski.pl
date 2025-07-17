export const CurrentYear = async () => {
    "use server"
    return (
        <span className="current-year"> {new Date().getFullYear()}  </ span>
    );
};