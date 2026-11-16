document.getElementById("dietForm").addEventListener("submit", function(e){
    e.preventDefault();

    const name = document.getElementById("name").value;
    const age = parseInt(document.getElementById("age").value);
    const gender = document.getElementById("gender").value;
    const height = parseInt(document.getElementById("height").value) / 100;
    const weight = parseInt(document.getElementById("weight").value);
    const activity = parseFloat(document.getElementById("activity").value);
    const goal = document.getElementById("goal").value;
    const allergy = document.getElementById("allergy").value.toLowerCase();

    // BMI
    const bmi = (weight / (height * height)).toFixed(1);

    // BMR
    let bmr = gender === "male"
        ? 10 * weight + 6.25 * height * 100 - 5 * age + 5
        : 10 * weight + 6.25 * height * 100 - 5 * age - 161;

    let calories = bmr * activity;
    if(goal === "lose") calories *= 0.8;
    if(goal === "gain") calories *= 1.15;
    calories = Math.round(calories);

    // Exercise suggestion
    let exercise =
        goal === "lose" ? "Cardio + strength training 3-5 times a week" :
        goal === "gain" ? "Weight lifting + high protein 4-5 times a week" :
        "Mixed cardio & strength 2-3 times a week";

    // 7-day meal plans
    const plans = {
        lose: [
            {breakfast:"Oats with low-fat milk", lunch:"Grilled chicken + salad", dinner:"Grilled fish + veggies", extra:"Fruit"},
            {breakfast:"Yogurt + fruit", lunch:"Chicken + veggies", dinner:"Salad + protein", extra:"Herbal tea"},
            {breakfast:"Boiled eggs + cucumber", lunch:"Fish + brown rice", dinner:"Veggies + protein", extra:"Fruit"},
            {breakfast:"Oats + fruit", lunch:"Tuna + salad", dinner:"Chicken + veggies", extra:"Veggies"},
            {breakfast:"Yogurt + nuts", lunch:"Beef + veggies", dinner:"Fish + salad", extra:"Fruit"},
            {breakfast:"Eggs + veggies", lunch:"Chicken + salad", dinner:"Veggies + protein", extra:"Veggies"},
            {breakfast:"Oats + fruit", lunch:"Fish + veggies", dinner:"Chicken + salad", extra:"Fruit"}
        ],
        gain: [
            {breakfast:"Eggs + bread + whole milk", lunch:"Beef + rice + veggies", dinner:"Chicken + potatoes", extra:"Nuts"},
            {breakfast:"Oats + banana + full milk", lunch:"Fish + rice + veggies", dinner:"Beef + potatoes", extra:"Juice"},
            {breakfast:"Yogurt + fruit + nuts", lunch:"Chicken + rice + veggies", dinner:"Fish + potatoes", extra:"Protein shake"},
            {breakfast:"Eggs + bread", lunch:"Beef + rice", dinner:"Chicken + veggies", extra:"Nuts"},
            {breakfast:"Oats + banana", lunch:"Fish + rice", dinner:"Beef + potatoes", extra:"Yogurt"},
            {breakfast:"Eggs + veggies + bread", lunch:"Chicken + rice", dinner:"Fish + potatoes", extra:"Nuts"},
            {breakfast:"Yogurt + fruit + nuts", lunch:"Beef + rice", dinner:"Chicken + veggies", extra:"Protein shake"}
        ],
        maintain: [
            {breakfast:"Oats + milk", lunch:"Chicken + rice + veggies", dinner:"Fish + salad", extra:"Fruit"},
            {breakfast:"Eggs + bread", lunch:"Fish + rice", dinner:"Beef + salad", extra:"Fruit"},
            {breakfast:"Yogurt + fruit", lunch:"Chicken + rice", dinner:"Fish + salad", extra:"Fruit"},
            {breakfast:"Oats + fruit", lunch:"Beef + rice", dinner:"Chicken + salad", extra:"Fruit"},
            {breakfast:"Eggs + veggies", lunch:"Fish + rice", dinner:"Beef + salad", extra:"Fruit"},
            {breakfast:"Yogurt + fruit", lunch:"Chicken + rice", dinner:"Fish + salad", extra:"Fruit"},
            {breakfast:"Oats + milk", lunch:"Beef + rice", dinner:"Chicken + salad", extra:"Fruit"}
        ]
    };

    let userPlan = plans[goal];

    // Allergy filter ⛔
    if(allergy.trim() !== ""){
        userPlan = userPlan.map(day => {
            let newDay = {...day};
            for(let meal in newDay){
                if(newDay[meal].toLowerCase().includes(allergy)){
                    newDay[meal] = `*Safe alternative (removed ${allergy})*`;
                }
            }
            return newDay;
        });
    }

    // Build HTML
    let html = `
        <h2>Hello ${name}</h2>
        <p><strong>BMI:</strong> ${bmi}</p>
        <p><strong>Calories per day:</strong> ${calories}</p>
        <p><strong>Exercise recommendation:</strong> ${exercise}</p>

        <h2>Your 7-Day Diet Plan</h2>
    `;

    userPlan.forEach((d, index) => {
        html += `
            <div class="day-card">
                <h3>Day ${index+1}</h3>
                <p><strong>Breakfast:</strong> ${d.breakfast}</p>
                <p><strong>Lunch:</strong> ${d.lunch}</p>
                <p><strong>Dinner:</strong> ${d.dinner}</p>
                <p><strong>Extra meal:</strong> ${d.extra}</p>
            </div>
        `;
    });

    document.getElementById("result").innerHTML = html;
});
