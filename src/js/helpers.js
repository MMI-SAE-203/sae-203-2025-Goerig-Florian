export function formatDate(dateString) {
    const date = new Date(dateString);

    const options = {
        day: "numeric",
        month: "long",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
        hour12: false,
        timeZone: "Europe/Paris",
    };

    const formatter = new Intl.DateTimeFormat("fr-FR", options);
    const formattedDate = formatter.format(date);

    return formattedDate;
}