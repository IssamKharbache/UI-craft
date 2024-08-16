export const convertIsoToNormal = (iso: string) => {
    const date = new Date(iso);

    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ]

    //get day,month,year
    const day = date.getUTCDate().toString().padStart(2, '0');
    const month = months[date.getUTCMonth()]
    const year = date.getUTCFullYear();

    return `${day} ${month} ${year}`;

    

}