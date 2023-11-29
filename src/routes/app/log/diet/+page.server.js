let food_data = {};
export async function load() {
    return food_data
}


export const actions = {
    default: async ({ request }) => {
        const formData = await request.formData() // get mood form data when user hits submit
        const query = formData.get('query') // get the query from the form data

        // use `query` to fetch data from the api:

        let query_encoded = encodeURIComponent(query);
        let url = "https://api.nal.usda.gov/fdc/v1/foods/search?api_key=DEMO_KEY&query=" + query_encoded
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            } else {
                food_data = await response.json();
                return food_data;
            }
        } catch (error) {
            console.error('There was a problem with the fetch operation: ' + error.message);
        }
        /*
            The Data returned to the front end should be pacakged nicely,
            make it so that it is in the format (make a util function for this called `package_food_data`):
            {
                [
                    {
                        food: "apple",
                        calories: 100,
                        carbs: 20,
                        protein: 10,
                        fat: 5
                    },
                    {
                        food: "banana",
                        calories: 200,
                        carbs: 40,
                        protein: 20,
                        fat: 10
                    },
                    ...
                ]
            }
        */
    }
}
