const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 3000;

//here java object is 
/*
identifier : string
*/


// Middleware to parse incoming request bodies as JSON
app.use(bodyParser.json());
// Hostel Menu Data
const hostelMenu = {
  monday: {
    breakfast: "Poori, Buta aloo curry, Tea",
    lunch:
      "Steamed rice, Roti, Veg Jalfrazzi, Nadia pachedi, Saga bhaja muga, Pickle (all without onion and garlic)",
    snacks: "Papdi chaat (dahi, imli, seu), onion, coriander, Guguni, Tea",
    dinner:
      "Muga hengu ada khechudi, Roti, Dalma, Aloo tomato bharta, Papad, Frooti",
  },
  tuesday: {
    breakfast: "Suji semiya upma, Guguni, Coffee",
    lunch:
      "Steamed rice, Roti, Arhar dal, Malai kofta curry/Egg masala, Dahi packet",
    snacks: "Sambhar bara (2 pcs) with onion, sev(thin), Tea",
    dinner:
      "Steamed rice, Roti, Arhar dal, Kadali paneer/Kadai chicken, Crispy Bhindi, Rasgulla",
  },
  wednesday: {
    breakfast: "Bread, Aloo chop (2 pcs), Boiled egg (1 pc)/Banana, Coffee",
    lunch:
      "Steamed rice, Roti, Arhar dal, Aloo beans bhaja, Paneer makhani/Chicken makhani, Green salad, Pickle",
    snacks: "Schwan noodle with paneer",
    dinner:
      "Steamed rice, Roti, Arhar dal jeera aloo, Veg ghanta/Chingudi Ghanta, Pickle, Gulab jamun",
  },
  thursday: {
    breakfast: "Idli, Sambhar, Chutney, Coffee",
    lunch:
      "Steamed rice, Roti, Dalma, Tomato khajur khatta, Aloo potol rosa, Dahi pachedi with annar dana (all without onion and garlic)",
    snacks: "Corn salad (with black pepper, butter, lemon, coriander), Tea",
    dinner:
      "Schezwan fried rice, Roti soya bean chilli, Honey chilli potato, Kimchi salad, Ice-cream",
  },
  friday: {
    breakfast: "Bada (4 pcs), Guguni(no ela), Tea",
    lunch:
      "Steamed rice, Roti, Palak dal, Soya matar masala/Fish curry, Aloo tomato bharta, Buttermilk packet",
    snacks: "Pani puri (8 pcs), Tea",
    dinner:
      "Steamed rice, Roti, Dal Makhani, Bhindi crispy, Veg Hydrabadi/Fish aloo curry, Pickle",
  },
  saturday: {
    breakfast: "Uttapam (2 pcs), Sambhar chutney, Tea",
    lunch:
      "Steamed rice, Roti, Arhar dal, Dahi-pakhala (with chunka, Aloo bhaja (boiled long, not mashed) Fish masala fry (dry)/Mushroom aloo rai curry, onion cucumber salad",
    snacks: "Vegetable chop (3 pcs), Coffee",
    dinner:
      "Steamed rice, Roti, Arhar dal, Aloo methi, Chicken dopiaza/Paneer dopiaza, Pickle",
  },
  sunday: {
    breakfast: "Upama, Guguni, Tea",
    lunch:
      "Steamed rice, Roti, Arhar dal, Veg kolhapuri, Paneer/Egg Hyderabadi (semi gravy), Fryums",
    snacks: "Biscuit (Oreo/Bourbon), Tea",
    dinner:
      "Special mixed veggie fried rice (with soybean chunks, peas, sweet corn), Manchurian, Chilli chicken, Raita",
  },
};

const getMenuResponse = (day, meal) => {
  day = day.toLowerCase();
  meal = meal.toLowerCase();
  if (hostelMenu[day] && hostelMenu[day][meal]) {
    return `The ${meal} menu for ${day} is: ${hostelMenu[day][meal]}`;
  } else {
    return `Sorry, I couldn't find the menu for ${meal} on ${day}. Please check the day and meal type.`;
  }
};

// POST route to handle webhook requests from Dialogflow
app.post("/webhook", (req, res) => {
  if (req.body.queryResult) {
    //Handling Dialogflow request
    const intentName = req.body.queryResult.intent.displayName;
    let responseText = "";

    const today = new Date();
    const days = [
      "sunday",
      "monday",
      "tuesday",
      "wednesday",
      "thursday",
      "friday",
      "saturday",
    ];
    const currentDay = days[today.getDay()];

    if (intentName === "GetBreakFastMenu") {
      responseText = getMenuResponse(currentDay, "breakfast");
    } else if (intentName === "GetLunchMenu") {
      responseText = getMenuResponse(currentDay, "lunch");
    } else if (intentName === "GetSnacksMenu") {
      responseText = getMenuResponse(currentDay, "snacks");
    } else if (intentName === "GetDinnerMenu") {
      responseText = getMenuResponse(currentDay, "dinner");
    } else {
      responseText =
        "Sorry, I didn't understand that. Please look up the menu in the dining hall.";
    }

    // Send response back to Dialogflow
    const response = {
      fulfillmentText: responseText,
    };
    res.json(response);
  } else {
    res.status(400).send("Bad Request: Missing required fields");
  }
});

// Start the Express.js server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
