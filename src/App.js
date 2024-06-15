import React, { useState, useEffect } from "react";
import "./index.css";

const dietPlans = {
  Sunday: {
    Breakfast: {
      name: "Ommelete + Buttermilk",
      ingredients: ["eggs - 2", "Vegetables - any"],
    },
    Snack1: {
      name: "Fruit and coffee",
      ingredients: ["any fruit"],
    },
    Lunch: {
      name: "Dal chawal or khichdi and salad",
      ingredients: ["dal", "vegetables - any", "rice"],
    },
    Snack2: {
      name: "Coffee + makhana or bhel",
      ingredients: ["black coffee", "roasted makhana", "bhel"],
    },
    Dinner: {
      name: "Soyabean salad or paneer salad",
      ingredients: ["soyabean or paneer", "Vegetables - any", "curd"],
    },
    Snack3: {
      name: "Nuts",
      ingredients: ["Almonds - 10", "Walnuts - 5"],
    },
    Meal7: {
      name: "Smoothie",
      ingredients: ["Banana - 1", "Milk - 1 cup", "Berries - 1/2 cup"],
    },
    Meal8: {
      name: "Cottage Cheese",
      ingredients: ["Cottage Cheese - 1 cup", "Honey - 1 tbsp"],
    },
  },
  // Define similarly for other days...
  Monday: {
    Breakfast: {
      name: "Oatmeal",
      ingredients: ["Oats - 1 cup", "Milk - 1 cup", "Honey - 1 tbsp"],
    },
    // Other meals...
  },
  // Define the rest of the days...
  Tuesday: {
    // Sample meals...
  },
  Wednesday: {
    // Sample meals...
  },
  Thursday: {
    // Sample meals...
  },
  Friday: {
    // Sample meals...
  },
  Saturday: {
    // Sample meals...
  },
};

const App = () => {
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedMeal, setSelectedMeal] = useState(null);

  const handleMealClick = (meal) => {
    setSelectedMeal(meal);
  };

  useEffect(() => {
    const handleClick = (event) => {
      if (
        event.target.className === "app" ||
        event.target.className === "days" ||
        event.target.className === "diet-chart" ||
        event.target.className === ""
      ) {
        window.location.reload();
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div className="app">
      <div className="days">
        {Object.keys(dietPlans).map((day) => (
          <div
            key={day}
            className="day"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedDay(day);
              setSelectedMeal(null);
            }}
          >
            {day}
          </div>
        ))}
      </div>
      {selectedDay && (
        <div className="diet-chart">
          <h2>{selectedDay}'s Diet Plan</h2>
          <ul>
            {Object.keys(dietPlans[selectedDay]).map((meal, index) => (
              <li
                key={index}
                onClick={(e) => {
                  e.stopPropagation();
                  handleMealClick(meal);
                }}
              >
                {meal}: {dietPlans[selectedDay][meal].name}
              </li>
            ))}
          </ul>
        </div>
      )}
      {selectedMeal && (
        <div className="sidebar">
          <h3>{dietPlans[selectedDay][selectedMeal].name}</h3>
          <ul>
            {dietPlans[selectedDay][selectedMeal].ingredients.map(
              (ingredient, index) => (
                <li key={index}>{ingredient}</li>
              )
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default App;
