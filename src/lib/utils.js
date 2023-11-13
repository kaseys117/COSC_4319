export function duration(start, end) {
    /* TODO Given two strings, start and end, in 24-hour format "HH:MM",
    calculate and return the hours in between.

    test 1:
    start = "22:00"
    end = "07:00:
    return 9

    test 2:
    start = "20:00"
    end = " "5:30"
    return 9.5 */
}

export function formatDate(timestamp) {
        const date = new Date(timestamp);
        const month = date.toLocaleString("default", { month: "short" });
        const day = date.getDate();
        return `${month} ${day}`;
    };
