const formatDate = (date) => {
    const d = new Date(date);

    const formattedDate = new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    }).format(d);
    return formattedDate;
};
export default formatDate;