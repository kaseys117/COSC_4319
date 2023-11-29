import { parse_food_data } from "$lib/utils";

let food_data = {};
export async function load() {
    return parse_food_data(food_data);
}

export const actions = {
    default: async ({ request, fetch }) => {
        const formData = await request.formData(); // get mood form data when user hits submit
        const query = formData.get("query"); // get the query from the form data

        // use `query` to fetch data from the api:

        let query_encoded = encodeURIComponent(query);
        let url =
            "https://api.nal.usda.gov/fdc/v1/foods/search?api_key=DEMO_KEY&query=" +
            query_encoded;
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            } else {
                food_data = await response.json();
                return {success: true}
            }
        } catch (error) {
            console.error(
                "There was a problem with the fetch operation: " + error.message
            );
        }
        return {success: false}
    },
};
