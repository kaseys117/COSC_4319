// src/lib/dietUtil.js

import fetch from 'node-fetch';

const apiKey = 'DEMO_KEY'; // Replace with your FDC API key

// Function to fetch FDC ID for a given food name
export async function getFdcId(foodName) {
    //foodName = 'pizza' //for testing
  const searchUrl = `https://api.nal.usda.gov/fdc/v1/foods/search?query=${encodeURIComponent(foodName)}&api_key=${apiKey}`;

  try {
    const response = await fetch(searchUrl);
    const data = await response.json();

    // Check if any foods are found in the search
    if (data.foods && data.foods.length > 0) {
      // Use the first result's FDC ID
      const fdcId = data.foods[0].fdcId;
      return fdcId;
    } else {
      console.log(`No results found for ${foodName}.`);
      return null;
    }
  } catch (error) {
    console.error('Error fetching FDC ID:', error);
    return null;
  }
}

// Function to get calories for a given food name
export async function getCaloriesForFood(foodName) {
  const fdcId = await getFdcId(foodName);

  if (fdcId) {
    // Call the getFoodDetails function with the obtained FDC ID
    await getFoodDetails(fdcId, foodName);
  }
}

// Function to fetch food details by FDC ID
async function getFoodDetails(fdcId, foodName) {
  const apiUrl = `https://api.nal.usda.gov/fdc/v1/food/${fdcId}?api_key=${apiKey}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    // Check if foodNutrients array exists
    if (data.foodNutrients) {
      // Find the nutrient with nutrientName "Energy" (which corresponds to calories)
      const caloriesData = data.foodNutrients.find(nutrient => nutrient.nutrientName === "Energy");

      // Check if caloriesData is found
      if (caloriesData) {
        // Extract and log the calories value
        const caloriesValue = caloriesData.value;
        console.log(`Calories in ${foodName}: ${caloriesValue}`);
      } else {
        console.log(`Calories data not found for ${foodName}.`);
      }
    } else {
      console.log(`Nutrient data not found for ${foodName}.`);
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
  console.log(caloriesValue)
  return caloriesValue
}

