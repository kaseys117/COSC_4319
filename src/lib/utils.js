export function duration(start, end) {
    /* TODO Given two strings, start and end, in 24-hour format "HH:MM",
    calculate and return the hours in between.*/

    //Make start calculatable
    const [startHourStr, startMinStr] = start.split(':');
    const startHour = parseInt(startHourStr, 10);
    const startMin = parseInt(startMinStr,10);

    //Make end calculatable
    const [endHourStr, endMinStr] = end.split(':');
    const endHour = parseInt(endHourStr, 10);
    const endMin = parseInt(endMinStr,10);
    //calc time passed
    let startTime = startHour+(startMin/60);
    let endTime  = endHour+(endMin/60);

    //check for day passing
    if(endTime < startTime){
        endTime += 24;
    }

    const timePassed = endTime - startTime;
    return Math.round((timePassed + Number.EPSILON) * 10) / 10;
}

export function formatDate(timestamp) {
        const date = new Date(timestamp);
        const month = date.toLocaleString("default", { month: "short" });
        const day = date.getDate();
        return `${month} ${day}`;
    };
