import axios from "axios";

const BASEURL = "https://www.google.com";

// Export an object with a "search" method that searches the ? API for the passed query
export default {
  search: function(query) {
    return axios.get(BASEURL + query);
  },
  // Gets all liquors
  getLiquor: function() {
    console.log('getLqiuor');
    return axios.get("/api/liquors");
  },
  // Updates the database with new info for a liquor
  updateLiquor: function(id, LiquorData) {
    return axios.put("/api/liquors/" + id, LiquorData);
  },
  // Deletes the liquor with the given id
  deleteLiquor: function(id) {
    return axios.delete("/api/liquors/" + id);
  },
  // Saves a liquor to the database
  saveLiquor: function(LiquorData) {
    return axios.post("/api/liquors", LiquorData);
  },

  // gets all drinks
  getRecipe: function () {
    return axios.get("/api/recipes");
  },
  // Gets the drink with the given id
  updateRecipe: function (id, DrinkData) {
    // console.log("updateLiquor");
    return axios.put("/api/recipes/" + id, DrinkData);
  },
  // Deletes the drink with the given id
  deleteRecipe: function (id) {
    return axios.delete("/api/recipes/" + id);
  },
  // Saves a drink to the database
  saveDrink: function (DrinkData) {
    console.log("Drink Data: ", DrinkData);
    return axios.post("/api/drinks", DrinkData)
  }
};
