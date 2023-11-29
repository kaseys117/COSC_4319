export function duration(start, end) {
    /* TODO Given two strings, start and end, in 24-hour format "HH:MM",
    calculate and return the hours in between.*/
    //Make start calculatable
    const [startHourStr, startMinStr] = start.split(":");
    const startHour = parseInt(startHourStr, 10);
    const startMin = parseInt(startMinStr, 10);

    //Make end calculatable
    const [endHourStr, endMinStr] = end.split(":");
    const endHour = parseInt(endHourStr, 10);
    const endMin = parseInt(endMinStr, 10);
    //calc time passed
    let startTime = startHour + startMin / 60;
    let endTime = endHour + endMin / 60;

    //check for day passing
    if (endTime < startTime) {
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
}

export function yyyy_mm_dd(date) {
    const offset = date.getTimezoneOffset();
    date = new Date(date.getTime() - offset * 60 * 1000);
    return date.toISOString().split("T")[0];
}

export function get_today_data(data) {
    // Get the data that matches today's date (data.date === today)
    const today = new Date();
    today.setDate(today.getDate() + 1); // bug where the server data has date offset by one day in the future but the UI renders it as today so we have to use tomorrow's date
    return data.filter((d) => d.date === yyyy_mm_dd(today))[0];
}


export function filter_today(data) {
    // Remove the data that matches today's date (data.date === today)
    const today = new Date();
    today.setDate(today.getDate() + 1); // bug where the server data has date offset by one day in the future but the UI renders it as today so we have to use tomorrow's date
    return data.filter((d) => d.date !== yyyy_mm_dd(today));
}


export function repackage_data(data) {
    // Puts the data in json with the keys `today` and `history`
    let today_data = get_today_data(data);
    let history_data = filter_today(data);
    let repackaged_data = {
        today: today_data,
        history: history_data,
    };
    return repackaged_data;
}

export function BMR( weight,height, age, Female){
    /*Calculation for base metabloic Rate,
    weight in kg,
    height in cm,
    age round number,
    Female bolean of gender
    */
    if (!Female){
        //calculation for male BMR
        BaseMetabolicRate = 13.397*weight + 4.799*height - 5.677*age + 88.362;
    }else {
        //calculation for female BMR
        BaseMetabolicRate = 9.247*weight + 3.098*height - 4.330*age + 447.593;
    }
        return BaseMetabolicRate;
}

export function impToMetHeight(feet, inchs){
    //calcuation of Height in cm from feet and inchs
    cm = feet*30.48 + inchs*254;
    return cm;
}

export function impToMetWeight(lb){
    //calculation from lb to kg
    kg = lb*.454
    return kg;
}

export const activity_level_enum = {
    SEDENTARY: 'sedentary',
    LIGHT: 'light',
    MODERATE: 'moderate',
    HIGH: 'HIGH',
    INTENSE: 'intense'
}
