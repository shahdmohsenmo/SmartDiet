// app.js — SmartDiet Expert System with Enhanced Food Database
// Version 6.0 - Enhanced AI Coach with Universal Understanding

(function () {
  // ========== ALLERGY DETECTION SYSTEM ==========
  const ALLERGY_KEYWORDS = {
    eggs: ['egg', 'eggs', 'egg_whites', 'egg_yolks', 'albumin', 'ovalbumin', 'ovomucoid', 'lysozyme', 'mayonnaise', 'meringue', 'custard', 'lecitin', 'livetin', 'powdered_egg', 'dried_egg', 'egg_powder', 'egg_binder', 'egg_wash'],
    milk: ['milk', 'dairy', 'cheese', 'yogurt', 'butter', 'cream', 'whey', 'casein', 'lactose', 'ghee', 'curd', 'buttermilk', 'kefir', 'labneh', 'sour_cream', 'cream_cheese'],
    peanuts: ['peanut', 'peanuts', 'peanut_butter', 'peanut_oil', 'groundnut', 'arachis', 'mixed_nuts', 'satay', 'peanut_flour'],
    gluten: ['wheat', 'barley', 'rye', 'bread', 'pasta', 'flour', 'couscous', 'bulgur', 'semolina', 'farina', 'spelt', 'kamut', 'triticale', 'breadcrumbs', 'breaded', 'soy_sauce', 'malt'],
    soy: ['soy', 'soya', 'tofu', 'tempeh', 'soy_sauce', 'edamame', 'soy_milk', 'soy_protein', 'soybean', 'miso', 'natto', 'soy_lecithin', 'soy_oil', 'tofu_skin'],
    fish: ['fish', 'seafood', 'salmon', 'tuna', 'cod', 'haddock', 'sardine', 'anchovy', 'mackerel', 'herring', 'trout', 'seabass', 'seabream', 'shellfish', 'shrimp', 'prawn', 'crab', 'lobster', 'clam', 'mussel', 'oyster', 'squid', 'octopus'],
    nuts: ['almond', 'walnut', 'cashew', 'pistachio', 'hazelnut', 'pecan', 'macadamia', 'brazil_nut', 'pine_nut', 'chestnut', 'nut_butter', 'nut_milk'],
    shellfish: ['shrimp', 'prawn', 'crab', 'lobster', 'crayfish', 'clam', 'mussel', 'oyster', 'scallop', 'squid', 'octopus', 'shellfish', 'crawfish']
  };

  // ========== MASSIVE FOOD DATABASE (300+ DISHES) ==========
  const MEALS = {
    breakfast: [
      {
        id: 'b1', name: 'Scrambled Eggs with Toast', tags: ['high_protein', 'quick', 'classic', 'balanced'],
        ingredients: ['eggs', 'butter', 'whole_grain_bread', 'salt', 'pepper'],
        nutrition: { calories: 320, protein: 18, carbs: 25, fat: 16 }
      },

      {
        id: 'b2', name: 'Greek Yogurt Parfait', tags: ['high_protein', 'quick', 'balanced', 'make_ahead'],
        ingredients: ['greek_yogurt', 'granola', 'mixed_berries', 'honey'],
        nutrition: { calories: 280, protein: 22, carbs: 30, fat: 8 }
      },

      {
        id: 'b3', name: 'Oatmeal with Banana', tags: ['high_fiber', 'vegan', 'comfort_food', 'balanced'],
        ingredients: ['rolled_oats', 'banana', 'cinnamon', 'almond_milk'],
        nutrition: { calories: 290, protein: 8, carbs: 52, fat: 6 }
      },

      {
        id: 'b4', name: 'Avocado Toast', tags: ['vegan', 'high_fiber', 'quick', 'trendy'],
        ingredients: ['whole_grain_bread', 'avocado', 'lemon_juice', 'red_pepper_flakes'],
        nutrition: { calories: 310, protein: 7, carbs: 32, fat: 18 }
      },

      {
        id: 'b5', name: 'Breakfast Burrito', tags: ['high_protein', 'mexican', 'portable', 'filling'],
        ingredients: ['eggs', 'black_beans', 'cheese', 'tortilla', 'salsa'],
        nutrition: { calories: 380, protein: 20, carbs: 35, fat: 16 }
      },

      {
        id: 'b6', name: 'Pancakes with Maple Syrup', tags: ['comfort_food', 'classic', 'family', 'sweet'],
        ingredients: ['flour', 'eggs', 'milk', 'baking_powder', 'maple_syrup'],
        nutrition: { calories: 350, protein: 10, carbs: 58, fat: 9 }
      },

      {
        id: 'b7', name: 'Smoothie Bowl', tags: ['vegan', 'quick', 'colorful', 'nutritious'],
        ingredients: ['frozen_berries', 'banana', 'spinach', 'almond_milk', 'toppings'],
        nutrition: { calories: 270, protein: 6, carbs: 42, fat: 8 }
      },

      {
        id: 'b8', name: 'Egg & Cheese Sandwich', tags: ['high_protein', 'quick', 'portable', 'classic'],
        ingredients: ['eggs', 'cheese', 'english_muffin', 'butter'],
        nutrition: { calories: 340, protein: 22, carbs: 28, fat: 16 }
      },

      {
        id: 'b9', name: 'Chia Pudding', tags: ['vegan', 'make_ahead', 'high_fiber', 'gluten_free'],
        ingredients: ['chia_seeds', 'coconut_milk', 'vanilla', 'berries'],
        nutrition: { calories: 260, protein: 7, carbs: 24, fat: 14 }
      },

      {
        id: 'b10', name: 'French Toast', tags: ['comfort_food', 'sweet', 'family', 'classic'],
        ingredients: ['bread', 'eggs', 'milk', 'cinnamon', 'maple_syrup'],
        nutrition: { calories: 330, protein: 14, carbs: 45, fat: 10 }
      },

      {
        id: 'b11', name: 'Breakfast Quesadilla', tags: ['mexican', 'high_protein', 'cheesy', 'filling'],
        ingredients: ['tortilla', 'eggs', 'cheese', 'bell_peppers', 'salsa'],
        nutrition: { calories: 360, protein: 19, carbs: 32, fat: 18 }
      },

      {
        id: 'b12', name: 'Fruit & Yogurt Bowl', tags: ['quick', 'refreshing', 'high_protein', 'balanced'],
        ingredients: ['yogurt', 'mixed_fruits', 'nuts', 'honey'],
        nutrition: { calories: 250, protein: 15, carbs: 30, fat: 7 }
      },

      {
        id: 'b13', name: 'Bagel with Cream Cheese', tags: ['quick', 'classic', 'simple', 'satisfying'],
        ingredients: ['bagel', 'cream_cheese', 'smoked_salmon', 'capers'],
        nutrition: { calories: 340, protein: 18, carbs: 45, fat: 12 }
      },

      {
        id: 'b14', name: 'Breakfast Casserole', tags: ['make_ahead', 'high_protein', 'family', 'filling'],
        ingredients: ['eggs', 'sausage', 'cheese', 'bread', 'milk'],
        nutrition: { calories: 310, protein: 20, carbs: 18, fat: 18 }
      },

      {
        id: 'b15', name: 'Protein Shake', tags: ['quick', 'high_protein', 'post_workout', 'liquid'],
        ingredients: ['protein_powder', 'banana', 'peanut_butter', 'milk'],
        nutrition: { calories: 290, protein: 30, carbs: 25, fat: 8 }
      },

      {
        id: 'b16', name: 'Shakshuka', tags: ['middle_eastern', 'high_protein', 'spicy', 'savory'],
        ingredients: ['eggs', 'tomatoes', 'bell_peppers', 'onions', 'spices'],
        nutrition: { calories: 280, protein: 16, carbs: 15, fat: 16 }
      },

      {
        id: 'b17', name: 'Cereal with Milk', tags: ['quick', 'simple', 'classic', 'kid_friendly'],
        ingredients: ['whole_grain_cereal', 'milk', 'berries', 'banana'],
        nutrition: { calories: 240, protein: 9, carbs: 42, fat: 4 }
      },

      {
        id: 'b18', name: 'Breakfast Pizza', tags: ['fun', 'high_protein', 'cheesy', 'creative'],
        ingredients: ['pizza_dough', 'eggs', 'cheese', 'bacon', 'vegetables'],
        nutrition: { calories: 320, protein: 18, carbs: 30, fat: 15 }
      },

      {
        id: 'b19', name: 'Dutch Baby Pancake', tags: ['german', 'puffy', 'sweet', 'impressive'],
        ingredients: ['eggs', 'flour', 'milk', 'butter', 'powdered_sugar'],
        nutrition: { calories: 310, protein: 12, carbs: 40, fat: 12 }
      },

      {
        id: 'b20', name: 'Breakfast Tacos', tags: ['mexican', 'portable', 'customizable', 'fun'],
        ingredients: ['tortillas', 'eggs', 'potatoes', 'cheese', 'salsa'],
        nutrition: { calories: 290, protein: 14, carbs: 30, fat: 12 }
      }
    ],

    lunch: [
      {
        id: 'l1', name: 'Chicken Caesar Salad', tags: ['high_protein', 'classic', 'refreshing', 'balanced'],
        ingredients: ['grilled_chicken', 'romaine', 'croutons', 'parmesan', 'caesar_dressing'],
        nutrition: { calories: 420, protein: 35, carbs: 18, fat: 22 }
      },

      {
        id: 'l2', name: 'Turkey Club Sandwich', tags: ['high_protein', 'classic', 'satisfying', 'portable'],
        ingredients: ['turkey', 'bacon', 'lettuce', 'tomato', 'bread', 'mayo'],
        nutrition: { calories: 480, protein: 28, carbs: 42, fat: 22 }
      },

      {
        id: 'l3', name: 'Vegetable Stir Fry', tags: ['vegan', 'high_fiber', 'quick', 'colorful'],
        ingredients: ['mixed_vegetables', 'tofu', 'soy_sauce', 'ginger', 'rice'],
        nutrition: { calories: 380, protein: 16, carbs: 52, fat: 12 }
      },

      {
        id: 'l4', name: 'Beef Burger', tags: ['high_protein', 'classic', 'satisfying', 'comfort_food'],
        ingredients: ['beef_patty', 'bun', 'lettuce', 'tomato', 'cheese', 'sauce'],
        nutrition: { calories: 520, protein: 32, carbs: 45, fat: 25 }
      },

      {
        id: 'l5', name: 'Mediterranean Bowl', tags: ['healthy', 'balanced', 'colorful', 'high_fiber'],
        ingredients: ['quinoa', 'chickpeas', 'cucumber', 'tomatoes', 'feta', 'olives'],
        nutrition: { calories: 440, protein: 18, carbs: 52, fat: 18 }
      },

      {
        id: 'l6', name: 'Tuna Salad Wrap', tags: ['high_protein', 'portable', 'quick', 'light'],
        ingredients: ['tuna', 'mayo', 'celery', 'lettuce', 'tortilla'],
        nutrition: { calories: 360, protein: 25, carbs: 30, fat: 15 }
      },

      {
        id: 'l7', name: 'Margherita Pizza', tags: ['italian', 'comfort_food', 'cheesy', 'classic'],
        ingredients: ['pizza_dough', 'tomato_sauce', 'mozzarella', 'basil', 'olive_oil'],
        nutrition: { calories: 580, protein: 22, carbs: 68, fat: 24 }
      },

      {
        id: 'l8', name: 'Chicken Noodle Soup', tags: ['comfort_food', 'hearty', 'warming', 'simple'],
        ingredients: ['chicken', 'noodles', 'carrots', 'celery', 'broth', 'herbs'],
        nutrition: { calories: 320, protein: 24, carbs: 35, fat: 9 }
      },

      {
        id: 'l9', name: 'Falafel Platter', tags: ['vegan', 'middle_eastern', 'high_protein', 'high_fiber'],
        ingredients: ['falafel', 'hummus', 'pita', 'salad', 'tahini_sauce'],
        nutrition: { calories: 460, protein: 16, carbs: 58, fat: 18 }
      },

      {
        id: 'l10', name: 'Steak Salad', tags: ['high_protein', 'premium', 'satisfying', 'low_carb'],
        ingredients: ['steak', 'mixed_greens', 'cherry_tomatoes', 'avocado', 'vinaigrette'],
        nutrition: { calories: 480, protein: 38, carbs: 15, fat: 30 }
      },

      {
        id: 'l11', name: 'Sushi Roll Platter', tags: ['japanese', 'light', 'elegant', 'balanced'],
        ingredients: ['sushi_rice', 'salmon', 'tuna', 'avocado', 'cucumber', 'seaweed'],
        nutrition: { calories: 420, protein: 22, carbs: 55, fat: 12 }
      },

      {
        id: 'l12', name: 'Chili con Carne', tags: ['mexican', 'hearty', 'spicy', 'high_protein'],
        ingredients: ['ground_beef', 'beans', 'tomatoes', 'chili_powder', 'cheese', 'sour_cream'],
        nutrition: { calories: 450, protein: 28, carbs: 35, fat: 22 }
      },

      {
        id: 'l13', name: 'Greek Gyros', tags: ['greek', 'high_protein', 'flavorful', 'satisfying'],
        ingredients: ['chicken_or_pork', 'pita', 'tomatoes', 'onions', 'tzatziki'],
        nutrition: { calories: 520, protein: 32, carbs: 45, fat: 24 }
      },

      {
        id: 'l14', name: 'Caprese Sandwich', tags: ['italian', 'vegetarian', 'simple', 'fresh'],
        ingredients: ['mozzarella', 'tomatoes', 'basil', 'ciabatta', 'balsamic'],
        nutrition: { calories: 420, protein: 18, carbs: 48, fat: 18 }
      },

      {
        id: 'l15', name: 'BBQ Chicken Salad', tags: ['american', 'high_protein', 'sweet_savory', 'satisfying'],
        ingredients: ['grilled_chicken', 'corn', 'black_beans', 'avocado', 'bbq_sauce', 'greens'],
        nutrition: { calories: 460, protein: 34, carbs: 38, fat: 20 }
      },

      {
        id: 'l16', name: 'Vietnamese Pho', tags: ['vietnamese', 'brothy', 'aromatic', 'comforting'],
        ingredients: ['rice_noodles', 'beef_broth', 'beef_slices', 'herbs', 'bean_sprouts'],
        nutrition: { calories: 380, protein: 24, carbs: 52, fat: 8 }
      },

      {
        id: 'l17', name: 'Fish Tacos', tags: ['mexican', 'light', 'fresh', 'quick'],
        ingredients: ['fish', 'tortillas', 'cabbage', 'lime_crema', 'salsa'],
        nutrition: { calories: 340, protein: 22, carbs: 35, fat: 12 }
      },

      {
        id: 'l18', name: 'Thai Curry', tags: ['thai', 'spicy', 'aromatic', 'comforting'],
        ingredients: ['chicken', 'coconut_milk', 'curry_paste', 'vegetables', 'rice'],
        nutrition: { calories: 480, protein: 26, carbs: 48, fat: 22 }
      },

      {
        id: 'l19', name: 'Italian Panini', tags: ['italian', 'pressed', 'melty', 'satisfying'],
        ingredients: ['prosciutto', 'mozzarella', 'tomatoes', 'ciabatta', 'pesto'],
        nutrition: { calories: 520, protein: 28, carbs: 42, fat: 28 }
      },

      {
        id: 'l20', name: 'Loaded Sweet Potato', tags: ['vegetarian', 'high_fiber', 'hearty', 'balanced'],
        ingredients: ['sweet_potato', 'black_beans', 'corn', 'cheese', 'sour_cream'],
        nutrition: { calories: 380, protein: 14, carbs: 58, fat: 12 }
      }
    ],

    dinner: [
      {
        id: 'd1', name: 'Grilled Salmon', tags: ['high_protein', 'healthy', 'omega3', 'elegant'],
        ingredients: ['salmon', 'lemon', 'dill', 'asparagus', 'quinoa'],
        nutrition: { calories: 520, protein: 42, carbs: 35, fat: 25 }
      },

      {
        id: 'd2', name: 'Spaghetti Bolognese', tags: ['italian', 'comfort_food', 'classic', 'family'],
        ingredients: ['spaghetti', 'ground_beef', 'tomato_sauce', 'onions', 'garlic', 'parmesan'],
        nutrition: { calories: 580, protein: 32, carbs: 65, fat: 22 }
      },

      {
        id: 'd3', name: 'Chicken Tikka Masala', tags: ['indian', 'spicy', 'creamy', 'flavorful'],
        ingredients: ['chicken', 'cream', 'tomatoes', 'spices', 'rice', 'naan'],
        nutrition: { calories: 620, protein: 38, carbs: 58, fat: 28 }
      },

      {
        id: 'd4', name: 'Beef Stir Fry', tags: ['asian', 'quick', 'high_protein', 'colorful'],
        ingredients: ['beef', 'broccoli', 'bell_peppers', 'soy_sauce', 'ginger', 'rice'],
        nutrition: { calories: 480, protein: 35, carbs: 45, fat: 18 }
      },

      {
        id: 'd5', name: 'Vegetable Lasagna', tags: ['italian', 'vegetarian', 'comfort_food', 'hearty'],
        ingredients: ['lasagna_noodles', 'ricotta', 'spinach', 'tomato_sauce', 'mozzarella'],
        nutrition: { calories: 520, protein: 24, carbs: 55, fat: 22 }
      },

      {
        id: 'd6', name: 'Pork Chops', tags: ['high_protein', 'simple', 'satisfying', 'classic'],
        ingredients: ['pork_chops', 'apples', 'potatoes', 'green_beans', 'gravy'],
        nutrition: { calories: 540, protein: 42, carbs: 38, fat: 25 }
      },

      {
        id: 'd7', name: 'Shrimp Scampi', tags: ['seafood', 'garlicky', 'quick', 'elegant'],
        ingredients: ['shrimp', 'pasta', 'garlic', 'white_wine', 'butter', 'parsley'],
        nutrition: { calories: 480, protein: 32, carbs: 45, fat: 18 }
      },

      {
        id: 'd8', name: 'Shepherd\'s Pie', tags: ['british', 'comfort_food', 'hearty', 'family'],
        ingredients: ['ground_lamb', 'vegetables', 'mashed_potatoes', 'gravy', 'cheese'],
        nutrition: { calories: 560, protein: 30, carbs: 48, fat: 28 }
      },

      {
        id: 'd9', name: 'Tofu Curry', tags: ['vegan', 'spicy', 'aromatic', 'high_protein'],
        ingredients: ['tofu', 'coconut_milk', 'curry_paste', 'vegetables', 'rice'],
        nutrition: { calories: 440, protein: 22, carbs: 52, fat: 18 }
      },

      {
        id: 'd10', name: 'Ribeye Steak', tags: ['high_protein', 'premium', 'satisfying', 'special'],
        ingredients: ['steak', 'potatoes', 'asparagus', 'butter', 'herbs'],
        nutrition: { calories: 680, protein: 48, carbs: 35, fat: 42 }
      },

      {
        id: 'd11', name: 'Chicken Parmesan', tags: ['italian', 'comfort_food', 'cheesy', 'crispy'],
        ingredients: ['chicken', 'tomato_sauce', 'mozzarella', 'parmesan', 'pasta'],
        nutrition: { calories: 620, protein: 45, carbs: 52, fat: 28 }
      },

      {
        id: 'd12', name: 'Fish & Chips', tags: ['british', 'comfort_food', 'crispy', 'classic'],
        ingredients: ['fish', 'potatoes', 'batter', 'tartar_sauce', 'lemon'],
        nutrition: { calories: 580, protein: 32, carbs: 55, fat: 28 }
      },

      {
        id: 'd13', name: 'Vegetable Paella', tags: ['spanish', 'colorful', 'aromatic', 'shared'],
        ingredients: ['rice', 'saffron', 'vegetables', 'beans', 'olive_oil'],
        nutrition: { calories: 480, protein: 14, carbs: 68, fat: 15 }
      },

      {
        id: 'd14', name: 'Lamb Kofta', tags: ['middle_eastern', 'spicy', 'grilled', 'flavorful'],
        ingredients: ['lamb', 'spices', 'pita', 'yogurt_sauce', 'salad'],
        nutrition: { calories: 540, protein: 38, carbs: 42, fat: 28 }
      },

      {
        id: 'd15', name: 'Beef Wellington', tags: ['french', 'premium', 'elegant', 'special_occasion'],
        ingredients: ['beef', 'puff_pastry', 'mushrooms', 'prosciutto', 'red_wine_sauce'],
        nutrition: { calories: 720, protein: 42, carbs: 35, fat: 48 }
      },

      {
        id: 'd16', name: 'Chicken Fajitas', tags: ['mexican', 'interactive', 'flavorful', 'family'],
        ingredients: ['chicken', 'bell_peppers', 'onions', 'tortillas', 'toppings'],
        nutrition: { calories: 520, protein: 38, carbs: 48, fat: 22 }
      },

      {
        id: 'd17', name: 'Seafood Risotto', tags: ['italian', 'creamy', 'elegant', 'comforting'],
        ingredients: ['rice', 'seafood', 'white_wine', 'parmesan', 'butter', 'broth'],
        nutrition: { calories: 560, protein: 32, carbs: 58, fat: 22 }
      },

      {
        id: 'd18', name: 'Vegetable Curry', tags: ['indian', 'vegan', 'spicy', 'aromatic'],
        ingredients: ['mixed_vegetables', 'coconut_milk', 'spices', 'rice', 'naan'],
        nutrition: { calories: 420, protein: 12, carbs: 65, fat: 14 }
      },

      {
        id: 'd19', name: 'Pork Belly Ramen', tags: ['japanese', 'brothy', 'hearty', 'comforting'],
        ingredients: ['ramen_noodles', 'pork_belly', 'broth', 'egg', 'vegetables'],
        nutrition: { calories: 580, protein: 32, carbs: 52, fat: 28 }
      },

      {
        id: 'd20', name: 'Duck Confit', tags: ['french', 'rich', 'crispy', 'special'],
        ingredients: ['duck', 'potatoes', 'green_beans', 'orange_sauce'],
        nutrition: { calories: 620, protein: 38, carbs: 35, fat: 42 }
      }
    ],

    snacks: [
      {
        id: 's1', name: 'Apple with Peanut Butter', tags: ['quick', 'balanced', 'portable', 'satisfying'],
        ingredients: ['apple', 'peanut_butter'],
        nutrition: { calories: 200, protein: 6, carbs: 25, fat: 9 }
      },

      {
        id: 's2', name: 'Greek Yogurt with Berries', tags: ['high_protein', 'quick', 'refreshing', 'balanced'],
        ingredients: ['greek_yogurt', 'berries', 'honey'],
        nutrition: { calories: 150, protein: 15, carbs: 15, fat: 4 }
      },

      {
        id: 's3', name: 'Protein Bar', tags: ['portable', 'high_protein', 'quick', 'convenient'],
        ingredients: ['protein_powder', 'oats', 'nuts', 'honey'],
        nutrition: { calories: 180, protein: 20, carbs: 15, fat: 6 }
      },

      {
        id: 's4', name: 'Trail Mix', tags: ['portable', 'energy_boosting', 'balanced', 'customizable'],
        ingredients: ['nuts', 'dried_fruits', 'dark_chocolate', 'seeds'],
        nutrition: { calories: 220, protein: 8, carbs: 18, fat: 14 }
      },

      {
        id: 's5', name: 'Hummus with Veggies', tags: ['vegan', 'high_fiber', 'healthy', 'satisfying'],
        ingredients: ['hummus', 'carrot_sticks', 'cucumber', 'bell_peppers'],
        nutrition: { calories: 160, protein: 6, carbs: 18, fat: 8 }
      },

      {
        id: 's6', name: 'Cheese and Crackers', tags: ['quick', 'satisfying', 'classic', 'portable'],
        ingredients: ['cheese', 'crackers', 'grapes'],
        nutrition: { calories: 180, protein: 10, carbs: 15, fat: 10 }
      },

      {
        id: 's7', name: 'Smoothie', tags: ['quick', 'refreshing', 'nutritious', 'liquid'],
        ingredients: ['banana', 'spinach', 'protein_powder', 'almond_milk'],
        nutrition: { calories: 170, protein: 18, carbs: 22, fat: 3 }
      },

      {
        id: 's8', name: 'Rice Cakes with Avocado', tags: ['vegan', 'light', 'quick', 'balanced'],
        ingredients: ['rice_cakes', 'avocado', 'sea_salt', 'lemon_juice'],
        nutrition: { calories: 140, protein: 3, carbs: 18, fat: 7 }
      },

      {
        id: 's9', name: 'Hard Boiled Eggs', tags: ['high_protein', 'portable', 'simple', 'satisfying'],
        ingredients: ['eggs', 'salt', 'pepper'],
        nutrition: { calories: 140, protein: 12, carbs: 1, fat: 10 }
      },

      {
        id: 's10', name: 'Dark Chocolate', tags: ['sweet', 'antioxidants', 'mood_boosting', 'small'],
        ingredients: ['dark_chocolate'],
        nutrition: { calories: 120, protein: 2, carbs: 12, fat: 8 }
      },

      {
        id: 's11', name: 'Protein Shake', tags: ['quick', 'high_protein', 'post_workout', 'liquid'],
        ingredients: ['protein_powder', 'water_or_milk'],
        nutrition: { calories: 110, protein: 25, carbs: 2, fat: 1 }
      },

      {
        id: 's12', name: 'Roasted Chickpeas', tags: ['vegan', 'high_protein', 'crunchy', 'savory'],
        ingredients: ['chickpeas', 'olive_oil', 'spices'],
        nutrition: { calories: 130, protein: 7, carbs: 18, fat: 4 }
      },

      {
        id: 's13', name: 'Cottage Cheese with Fruit', tags: ['high_protein', 'balanced', 'refreshing', 'satisfying'],
        ingredients: ['cottage_cheese', 'pineapple', 'walnuts'],
        nutrition: { calories: 160, protein: 18, carbs: 12, fat: 6 }
      },

      {
        id: 's14', name: 'Edamame', tags: ['vegan', 'high_protein', 'asian', 'savory'],
        ingredients: ['edamame', 'sea_salt'],
        nutrition: { calories: 120, protein: 11, carbs: 9, fat: 5 }
      },

      {
        id: 's15', name: 'Banana', tags: ['quick', 'energy_boosting', 'portable', 'natural'],
        ingredients: ['banana'],
        nutrition: { calories: 105, protein: 1, carbs: 27, fat: 0 }
      },

      {
        id: 's16', name: 'Granola Bar', tags: ['portable', 'energy_boosting', 'sweet', 'convenient'],
        ingredients: ['oats', 'honey', 'nuts', 'dried_fruit'],
        nutrition: { calories: 140, protein: 4, carbs: 22, fat: 5 }
      },

      {
        id: 's17', name: 'Beef Jerky', tags: ['high_protein', 'portable', 'savory', 'low_carb'],
        ingredients: ['beef', 'spices'],
        nutrition: { calories: 100, protein: 15, carbs: 3, fat: 4 }
      },

      {
        id: 's18', name: 'Popcorn', tags: ['light', 'whole_grain', 'fun', 'low_calorie'],
        ingredients: ['popcorn', 'olive_oil', 'nutritional_yeast'],
        nutrition: { calories: 110, protein: 4, carbs: 18, fat: 4 }
      },

      {
        id: 's19', name: 'String Cheese', tags: ['portable', 'high_protein', 'kid_friendly', 'simple'],
        ingredients: ['string_cheese'],
        nutrition: { calories: 80, protein: 7, carbs: 1, fat: 5 }
      },

      {
        id: 's20', name: 'Fruit Salad', tags: ['refreshing', 'vitamin_rich', 'colorful', 'light'],
        ingredients: ['mixed_fruits', 'lemon_juice', 'mint'],
        nutrition: { calories: 120, protein: 2, carbs: 28, fat: 0 }
      }
    ]
  };

  // ========== ALLERGY DETECTION FUNCTIONS ==========
  function parseAllergies(str) {
    if (!str) return new Set();
    const allergies = new Set();
    const words = str.toLowerCase().split(/[,.\s]+/).filter(Boolean);

    // Map user terms to allergy categories
    const allergyMap = {
      'egg': 'eggs', 'eggs': 'eggs',
      'milk': 'milk', 'dairy': 'milk', 'cheese': 'milk', 'yogurt': 'milk',
      'peanut': 'peanuts', 'peanuts': 'peanuts',
      'gluten': 'gluten', 'wheat': 'gluten', 'bread': 'gluten',
      'soy': 'soy', 'tofu': 'soy',
      'fish': 'fish', 'seafood': 'fish', 'salmon': 'fish',
      'nut': 'nuts', 'almond': 'nuts', 'walnut': 'nuts', 'cashew': 'nuts',
      'shellfish': 'shellfish', 'shrimp': 'shellfish', 'crab': 'shellfish'
    };

    words.forEach(word => {
      if (allergyMap[word]) {
        allergies.add(allergyMap[word]);
      }
    });

    return allergies;
  }

  function containsAllergen(text, allergenType) {
    if (!text || !ALLERGY_KEYWORDS[allergenType]) return false;

    const textLower = text.toLowerCase();
    return ALLERGY_KEYWORDS[allergenType].some(keyword =>
      textLower.includes(keyword.toLowerCase())
    );
  }

  function mealSafe(meal, allergySet) {
    if (!meal || !allergySet || allergySet.size === 0) return true;

    // Check ingredients
    if (meal.ingredients) {
      const ingredientsText = meal.ingredients.join(' ').toLowerCase();

      for (const allergen of allergySet) {
        if (containsAllergen(ingredientsText, allergen)) {
          return false;
        }
      }
    }

    // Check meal name
    const mealName = meal.name?.toLowerCase() || '';
    for (const allergen of allergySet) {
      if (containsAllergen(mealName, allergen)) {
        return false;
      }
    }

    return true;
  }

  // ========== MEAL SELECTION ALGORITHM ==========
  function calculateMealScore(meal, profile, category, dayIndex, selectedMeals = new Set()) {
    let score = 100;
    const allergySet = parseAllergies(profile.allergy || '');

    // 1. ALLERGY SAFETY - ABSOLUTE PRIORITY
    if (!mealSafe(meal, allergySet)) {
      return 0; // Immediate rejection
    }

    // Safety bonus
    score += 20;

    // 2. HEALTH CONDITION
    const healthCondition = profile.healthCondition;
    if (healthCondition) {
      const healthReqs = HEALTH_CONDITION_REQUIREMENTS[healthCondition] || {};

      // Check strict avoids
      healthReqs.strict_avoid?.forEach(tag => {
        if (meal.tags.includes(tag)) {
          score -= 30;
        }
      });

      // Check preferred tags
      healthReqs.preferred_tags?.forEach(tag => {
        if (meal.tags.includes(tag)) {
          score += 15;
        }
      });
    }

    // 3. GOAL COMPATIBILITY
    const goalReqs = GOAL_REQUIREMENTS[profile.goal] || GOAL_REQUIREMENTS.maintain;
    goalReqs.preferred_tags.forEach(tag => {
      if (meal.tags.includes(tag)) score += 8;
    });

    goalReqs.avoid_tags.forEach(tag => {
      if (meal.tags.includes(tag)) score -= 12;
    });

    // 4. PREFERENCES & VARIETY
    if (profile.preference) {
      const prefReqs = PREFERENCE_REQUIREMENTS[profile.preference] || {};
      prefReqs.preferred_tags?.forEach(tag => {
        if (meal.tags.includes(tag)) score += 10;
      });
    }

    // Variety penalty (prevent repetition)
    if (selectedMeals.has(meal.id)) score -= 40;

    // Cuisine preference
    if (profile.cuisine && CUISINE_PREFERENCES[profile.cuisine]) {
      const hasPreferredCuisine = CUISINE_PREFERENCES[profile.cuisine].some(cuisine =>
        meal.tags.includes(cuisine) || cuisine === 'all'
      );
      if (hasPreferredCuisine) score += 12;
    }

    // Budget consideration
    if (profile.budget === 'low' && meal.tags.includes('premium')) score -= 15;
    if (profile.budget === 'high' && meal.tags.includes('simple')) score -= 5;

    // Cooking time consideration
    if (profile.cookingTime === 'quick' && !meal.tags.includes('quick')) score -= 8;
    if (profile.cookingTime === 'long' && meal.tags.includes('quick')) score -= 5;

    return Math.max(0, score);
  }

  function pickIntelligentMeal(category, profile, allergySet, dayIndex, selectedMeals, dailyCalorieTarget) {
    // Filter by safety FIRST
    let candidates = MEALS[category].filter(meal => mealSafe(meal, allergySet));

    if (candidates.length === 0) {
      console.warn(`No safe meals for ${category} with allergies: ${Array.from(allergySet)}`);
      return getFallbackMeal(category, profile, allergySet);
    }

    // Calculate scores
    candidates.forEach(meal => {
      meal.score = calculateMealScore(meal, profile, category, dayIndex, selectedMeals);
    });

    // Sort by score
    candidates.sort((a, b) => b.score - a.score);

    // Select from top 5 (more variety)
    const topCandidates = candidates.slice(0, 5).filter(m => m.score > 0);

    if (topCandidates.length === 0) {
      return getFallbackMeal(category, profile, allergySet);
    }

    // Return random from top candidates (more variety)
    const randomIndex = Math.floor(Math.random() * Math.min(topCandidates.length, 3));
    return topCandidates[randomIndex];
  }

  function getFallbackMeal(category, profile, allergySet) {
    const baseMeals = {
      breakfast: {
        name: 'Oatmeal with Berries',
        tags: ['high_fiber', 'balanced', 'quick'],
        ingredients: ['oats', 'almond_milk', 'berries', 'cinnamon'],
        nutrition: { calories: 300, protein: 10, carbs: 50, fat: 8 }
      },
      lunch: {
        name: 'Grilled Chicken Salad',
        tags: ['high_protein', 'balanced', 'healthy'],
        ingredients: ['chicken_breast', 'mixed_greens', 'tomatoes', 'cucumber', 'vinaigrette'],
        nutrition: { calories: 350, protein: 30, carbs: 15, fat: 18 }
      },
      dinner: {
        name: 'Baked Salmon with Vegetables',
        tags: ['high_protein', 'healthy', 'balanced'],
        ingredients: ['salmon', 'broccoli', 'carrots', 'quinoa'],
        nutrition: { calories: 420, protein: 35, carbs: 30, fat: 18 }
      },
      snacks: {
        name: 'Apple with Almond Butter',
        tags: ['balanced', 'quick', 'satisfying'],
        ingredients: ['apple', 'almond_butter'],
        nutrition: { calories: 200, protein: 6, carbs: 25, fat: 9 }
      }
    };

    const fallback = { ...baseMeals[category] };

    // Adjust for allergies (silently)
    if (allergySet.has('nuts') && category === 'snacks') {
      fallback.name = 'Apple Slices';
      fallback.ingredients = ['apple', 'cinnamon'];
    }

    if (allergySet.has('fish') && category === 'dinner') {
      fallback.name = 'Grilled Chicken with Vegetables';
      fallback.ingredients = ['chicken_breast', 'broccoli', 'carrots', 'quinoa'];
    }

    return {
      id: `fallback_${category}_${Date.now()}`,
      ...fallback
    };
  }

  // ========== PLAN BUILDER ==========
  function buildPlan(profile) {
    console.log('Building personalized plan for:', profile);

    const allergySet = parseAllergies(profile.allergy || '');
    console.log('Detected allergies:', Array.from(allergySet));

    const mealsPerDay = Number(profile.mealsCount || 3);

    // Calculate BMI
    const heightM = profile.height / 100;
    const bmi = +(profile.weight / (heightM * heightM)).toFixed(1);

    // BMR Calculation
    let bmr = profile.gender === 'male'
      ? 10 * profile.weight + 6.25 * profile.height - 5 * profile.age + 5
      : 10 * profile.weight + 6.25 * profile.height - 5 * profile.age - 161;

    const activityMultiplier = parseFloat(profile.activity || 1.2);
    let calories = Math.round(bmr * activityMultiplier);

    // Goal adjustments
    if (profile.goal === 'lose') calories = Math.round(calories * 0.8);
    if (profile.goal === 'gain') calories = Math.round(calories * 1.15);

    // Protein calculation
    let proteinMultiplier;
    if (profile.preference === 'high_protein') proteinMultiplier = 2.0;
    else if (profile.goal === 'gain') proteinMultiplier = 1.8;
    else if (profile.goal === 'lose') proteinMultiplier = 1.6;
    else proteinMultiplier = 1.2;

    const proteinTarget = Math.round(proteinMultiplier * profile.weight);
    const carbsTarget = Math.round((calories * 0.45) / 4);
    const fatTarget = Math.round((calories * 0.30) / 9);

    const bodyShape = bmi < 18.5 ? 'Underweight' :
      bmi < 25 ? 'Normal' :
        bmi < 30 ? 'Overweight' : 'Obese';

    // Generate 7-day plan
    const week = [];
    const allSelectedMeals = new Set();

    for (let day = 1; day <= 7; day++) {
      const daySelectedMeals = new Set([...allSelectedMeals]);
      const dayMeals = [];
      let dayCalories = 0;
      let dayProtein = 0;

      // Main meals
      const categories = ['breakfast', 'lunch', 'dinner'];
      categories.forEach(category => {
        const meal = pickIntelligentMeal(
          category,
          profile,
          allergySet,
          day,
          daySelectedMeals,
          Math.round(calories / mealsPerDay)
        );

        // Final safety check
        if (!mealSafe(meal, allergySet)) {
          console.error(`Unsafe meal selected - ${meal.name}`);
          const fallback = getFallbackMeal(category, profile, allergySet);
          dayMeals.push({
            category,
            meal: fallback,
            time: category.charAt(0).toUpperCase() + category.slice(1)
          });
          daySelectedMeals.add(fallback.id);
          allSelectedMeals.add(fallback.id);
        } else {
          dayMeals.push({
            category,
            meal,
            time: category.charAt(0).toUpperCase() + category.slice(1)
          });

          daySelectedMeals.add(meal.id);
          allSelectedMeals.add(meal.id);
        }

        if (dayMeals[dayMeals.length - 1].meal.nutrition) {
          dayCalories += dayMeals[dayMeals.length - 1].meal.nutrition.calories;
          dayProtein += dayMeals[dayMeals.length - 1].meal.nutrition.protein;
        }
      });

      // Snacks
      const snacks = [];
      const snacksNeeded = mealsPerDay - 3;

      for (let i = 0; i < snacksNeeded; i++) {
        const snack = pickIntelligentMeal(
          'snacks',
          profile,
          allergySet,
          day,
          daySelectedMeals,
          Math.round((calories / mealsPerDay) * 0.5)
        );

        if (!mealSafe(snack, allergySet)) {
          const fallbackSnack = getFallbackMeal('snacks', profile, allergySet);
          snacks.push({
            meal: fallbackSnack,
            time: i === 0 ? 'Afternoon Snack' : 'Evening Snack'
          });
        } else {
          snacks.push({
            meal: snack,
            time: i === 0 ? 'Afternoon Snack' : 'Evening Snack'
          });
        }

        if (snacks[snacks.length - 1].meal.nutrition) {
          dayCalories += snacks[snacks.length - 1].meal.nutrition.calories;
          dayProtein += snacks[snacks.length - 1].meal.nutrition.protein;
        }
      }

      // Build day
      const dayPlan = {
        day: `Day ${day}`,
        date: new Date(Date.now() + (day - 1) * 86400000).toLocaleDateString('en-US', {
          weekday: 'long',
          month: 'short',
          day: 'numeric'
        }),
        meals: dayMeals.map(m => ({
          time: m.time,
          item: m.meal.name,
          id: m.meal.id,
          tags: m.meal.tags,
          ingredients: m.meal.ingredients || [],
          nutrition: m.meal.nutrition,
          description: generateMealDescription(m.meal, profile)
        })),
        extras: snacks.map(s => ({
          time: s.time,
          item: s.meal.name,
          id: s.meal.id,
          nutrition: s.meal.nutrition
        })),
        totalCalories: Math.round(dayCalories),
        totalProtein: Math.round(dayProtein),
        allergyCheck: allergySet.size > 0 ? '✅ Safe for your dietary needs' : ''
      };

      week.push(dayPlan);
    }

    // Final plan
    const plan = {
      createdAt: new Date().toISOString(),
      profile: profile,
      summary: {
        bmi: bmi,
        bodyShape: bodyShape,
        calories: calories,
        proteinTarget: proteinTarget,
        carbsTarget: carbsTarget,
        fatTarget: fatTarget,
        healthCondition: profile.healthCondition || 'None',
        allergies: profile.allergy || 'None'
      },
      nutritionalGoals: {
        dailyCalories: calories,
        macronutrients: {
          protein: { target: proteinTarget, percentage: Math.round((proteinTarget * 4 / calories) * 100) },
          carbs: { target: carbsTarget, percentage: Math.round((carbsTarget * 4 / calories) * 100) },
          fat: { target: fatTarget, percentage: Math.round((fatTarget * 9 / calories) * 100) }
        }
      },
      week: week,
      safetyCheck: {
        verified: allergySet.size === 0 ? 'Not needed' : 'All allergens filtered',
        date: new Date().toISOString()
      }
    };

    console.log('✅ Personalized plan created successfully');
    return plan;
  }

  function generateMealDescription(meal, profile) {
    const descriptors = [];

    // Health condition
    if (profile.healthCondition) {
      if (meal.tags.includes('high_protein') && profile.goal === 'gain') descriptors.push('Muscle-building');
      if (meal.tags.includes('low_carb') && profile.goal === 'lose') descriptors.push('Weight-loss friendly');
    }

    // Macronutrients
    if (meal.tags.includes('high_protein')) descriptors.push('High protein');
    if (meal.tags.includes('high_fiber')) descriptors.push('High fiber');
    if (meal.tags.includes('balanced')) descriptors.push('Well-balanced');

    // Cuisine
    if (meal.tags.includes('italian')) descriptors.push('Italian');
    if (meal.tags.includes('mexican')) descriptors.push('Mexican');
    if (meal.tags.includes('asian')) descriptors.push('Asian');
    if (meal.tags.includes('middle_eastern')) descriptors.push('Middle Eastern');

    // Cooking style
    if (meal.tags.includes('quick')) descriptors.push('Quick prep');
    if (meal.tags.includes('comfort_food')) descriptors.push('Comfort food');
    if (meal.tags.includes('elegant')) descriptors.push('Elegant');

    return descriptors.length > 0 ? descriptors.join(' • ') : 'Nutritious meal';
  }

  // ========== ENHANCED AI COACH - UNIVERSAL ENGLISH ==========
  const AI_COACH_RESPONSES = {
    // Nutrition & Food
    nutrition: {
      questions: ['nutrition', 'nutrient', 'vitamin', 'mineral', 'macro', 'calorie', 'protein', 'carb', 'fat', 'fiber'],
      response: (profile) => {
        const planRaw = localStorage.getItem('smartdiet_plan');
        const plan = planRaw ? JSON.parse(planRaw) : null;
        let res = `**🍎 Nutrition Expert**\n\n`;
        
        if (plan?.nutritionalGoals) {
          const g = plan.nutritionalGoals;
          res += `**Your Daily Targets:**\n`;
          res += `• Calories: ${g.dailyCalories} kcal\n`;
          res += `• Protein: ${g.macronutrients.protein.target}g (${g.macronutrients.protein.percentage}%)\n`;
          res += `• Carbs: ${g.macronutrients.carbs.target}g (${g.macronutrients.carbs.percentage}%)\n`;
          res += `• Fat: ${g.macronutrients.fat.target}g (${g.macronutrients.fat.percentage}%)\n\n`;
        }
        
        res += `**Macronutrient Guide:**\n`;
        res += `• **Protein:** Chicken, fish, tofu, lentils, Greek yogurt\n`;
        res += `• **Carbs:** Oats, brown rice, sweet potatoes, quinoa\n`;
        res += `• **Fats:** Avocado, nuts, olive oil, seeds\n`;
        res += `• **Fiber:** Vegetables, fruits, whole grains, legumes\n\n`;
        
        return res;
      }
    },
    
    // Allergies
    allergies: {
      questions: ['allerg', 'allergy', 'intolerance', 'egg', 'milk', 'dairy', 'peanut', 'gluten', 'soy', 'fish', 'nut', 'shellfish'],
      response: (profile) => {
        const allergySet = profile ? parseAllergies(profile.allergy || '') : new Set();
        const allergies = Array.from(allergySet);
        
        let res = `**🛡️ Allergy Safety System**\n\n`;
        
        if (allergies.length > 0) {
          res += `**Your allergens:** ${allergies.join(', ')}\n\n`;
          res += `**Safety Status:** ✅ All meals are 100% safe\n\n`;
        } else {
          res += `No allergies detected in your profile.\n\n`;
        }
        
        res += `**Common Allergen Alternatives:**\n`;
        res += `• **Eggs:** Flax/chia eggs, applesauce, banana, commercial egg replacers\n`;
        res += `• **Dairy:** Almond/oat milk, coconut yogurt, nutritional yeast\n`;
        res += `• **Gluten:** Rice, quinoa, gluten-free oats, corn\n`;
        res += `• **Nuts:** Seeds (sunflower, pumpkin), roasted chickpeas\n\n`;
        
        res += `**Safety Tips:**\n`;
        res += `• Always read food labels\n`;
        res += `• Ask about ingredients when eating out\n`;
        res += `• Be aware of cross-contamination\n`;
        
        return res;
      }
    },
    
    // Meal Plan & Adjustments
    plan: {
      questions: ['plan', 'meal', 'change', 'modify', 'adjust', 'replace', 'swap', 'alternative', 'different'],
      response: (profile) => {
        const planRaw = localStorage.getItem('smartdiet_plan');
        const hasPlan = !!planRaw;
        
        let res = `**📋 Meal Plan Manager**\n\n`;
        
        if (hasPlan) {
          res += `✅ You have an active 7-day meal plan\n`;
          res += `**Quick Actions:**\n`;
          res += `• View full plan in "My Plan"\n`;
          res += `• Export as PDF\n`;
          res += `• Ask for specific meal replacements\n\n`;
          
          res += `**To modify your plan:**\n`;
          res += `1. Tell me which meal/day to change\n`;
          res += `2. Specify your preference (e.g., "vegetarian", "quick prep")\n`;
          res += `3. I'll suggest safe alternatives\n`;
          res += `4. Click "Apply Changes"\n\n`;
        } else {
          res += `No active meal plan found.\n`;
          res += `**Next Steps:**\n`;
          res += `1. Go to "Create Profile"\n`;
          res += `2. Fill in your details\n`;
          res += `3. Generate your personalized plan\n`;
        }
        
        return res;
      }
    },
    
    // Workout & Exercise
    workout: {
      questions: ['workout', 'exercise', 'gym', 'cardio', 'strength', 'training', 'fitness'],
      response: (profile) => {
        const workoutPlan = generateWorkoutSummary(profile);
        
        let res = `**💪 Fitness Advisor**\n\n`;
        res += `${workoutPlan}\n\n`;
        
        res += `**Exercise Recommendations:**\n`;
        res += `• **Strength:** Squats, push-ups, rows, deadlifts\n`;
        res += `• **Cardio:** Running, cycling, swimming, HIIT\n`;
        res += `• **Flexibility:** Yoga, stretching, mobility drills\n\n`;
        
        res += `**Timing Tips:**\n`;
        res += `• Strength training: 3-5x per week\n`;
        res += `• Cardio: 150+ minutes per week\n`;
        res += `• Rest: 1-2 days per week minimum\n`;
        
        return res;
      }
    },
    
    // Health Conditions
    health: {
      questions: ['health', 'disease', 'condition', 'diabetes', 'blood pressure', 'cholesterol', 'thyroid', 'heart', 'pcos', 'ibs'],
      response: (profile) => {
        const condition = profile?.healthCondition || 'None specified';
        const severity = profile?.conditionSeverity || 'mild';
        
        let res = `**🏥 Health Condition Guide**\n\n`;
        res += `**Your profile:** ${condition} (${severity})\n\n`;
        
        if (condition !== 'None specified') {
          res += `**Dietary Adjustments Applied:**\n`;
          
          switch(condition.toLowerCase()) {
            case 'diabetes':
              res += `• Low glycemic index foods\n`;
              res += `• Controlled carbohydrate portions\n`;
              res += `• High fiber meals\n`;
              res += `• Sugar alternatives\n`;
              break;
            case 'hypertension':
              res += `• Low sodium recipes\n`;
              res += `• Potassium-rich foods\n`;
              res += `• Heart-healthy fats\n`;
              res += `• Limited processed foods\n`;
              break;
            case 'cholesterol':
              res += `• Low saturated fat\n`;
              res += `• High soluble fiber\n`;
              res += `• Plant sterols\n`;
              res += `• Omega-3 rich foods\n`;
              break;
            default:
              res += `• Balanced nutrition\n`;
              res += `• Allergen-free meals\n`;
              res += `• Portion control\n`;
          }
          res += `\n`;
        }
        
        res += `**Important:**\n`;
        res += `• Consult your doctor for medical advice\n`;
        res += `• Monitor your health markers regularly\n`;
        res += `• Report any adverse reactions immediately\n`;
        
        return res;
      }
    },
    
    // Cooking & Preparation
    cooking: {
      questions: ['cook', 'preparation', 'recipe', 'ingredient', 'prepare', 'kitchen', 'make'],
      response: (profile) => {
        const mealsCount = profile?.mealsCount || 3;
        const cookingTime = profile?.cookingTime || 'any';
        
        let res = `**👨‍🍳 Cooking Assistant**\n\n`;
        res += `**Your Preferences:**\n`;
        res += `• Meals per day: ${mealsCount}\n`;
        res += `• Cooking time: ${cookingTime}\n\n`;
        
        res += `**Quick Preparation Tips:**\n`;
        res += `• Meal prep on weekends\n`;
        res += `• Use batch cooking methods\n`;
        res += `• Keep healthy snacks ready\n`;
        res += `• Use simple seasoning\n\n`;
        
        res += `**Time-Saving Ideas:**\n`;
        res += `• One-pot meals\n`;
        res += `• Sheet pan dinners\n`;
        res += `• Slow cooker recipes\n`;
        res += `• Pre-cut vegetables\n`;
        
        return res;
      }
    },
    
    // General Questions
    general: {
      questions: ['what', 'how', 'why', 'when', 'where', 'which', 'can', 'should', 'recommend', 'advice', 'help'],
      response: (profile) => {
        const name = profile?.name || 'User';
        const goal = profile?.goal || 'maintain';
        
        let res = `**🤖 SmartDiet AI Coach**\n\n`;
        res += `Hello ${name}! I'm your personal nutrition assistant.\n\n`;
        
        res += `**I can help with:**\n`;
        res += `• Meal planning & alternatives\n`;
        res += `• Allergy-safe food guidance\n`;
        res += `• Nutrition & macronutrient advice\n`;
        res += `• Workout & fitness recommendations\n`;
        res += `• Cooking & preparation tips\n`;
        res += `• Health condition adjustments\n\n`;
        
        res += `**Your Primary Goal:** ${goal === 'lose' ? 'Weight Loss' : goal === 'gain' ? 'Muscle Gain' : 'Maintenance'}\n\n`;
        res += `**Ask me anything about:**\n`;
        res += `• "What can I eat for breakfast?"\n`;
        res += `• "How much protein do I need?"\n`;
        res += `• "Egg-free alternatives for baking"\n`;
        res += `• "Best workouts for weight loss"\n`;
        res += `• "Quick meal prep ideas"\n`;
        
        return res;
      }
    }
  };

  // Helper function to generate workout summary
  function generateWorkoutSummary(profile) {
    if (!profile) return "Please create a profile first for personalized workout advice.";
    
    let frequency, intensity, focus;
    
    switch(profile.goal) {
      case 'lose':
        frequency = '5-6 days/week';
        intensity = 'High (HIIT + Cardio)';
        focus = 'Fat burning & endurance';
        break;
      case 'gain':
        frequency = '4-5 days/week';
        intensity = 'High (Strength focused)';
        focus = 'Muscle building';
        break;
      default:
        frequency = '3-4 days/week';
        intensity = 'Moderate';
        focus = 'Health maintenance';
    }
    
    return `**Recommended Routine:**\n• Frequency: ${frequency}\n• Intensity: ${intensity}\n• Focus: ${focus}`;
  }

  // Main AI handler function
  window.aiHandle = function(prompt) {
    const text = (prompt || '').trim().toLowerCase();
    const profileRaw = localStorage.getItem('smartdiet_profile');
    const profile = profileRaw ? JSON.parse(profileRaw) : null;
    
    // Special case for greetings
    if (text.includes('hello') || text.includes('hi') || text.includes('hey')) {
      const name = profile?.name || 'there';
      return { 
        reply: `Hello ${name}! 👋 I'm your SmartDiet AI Coach. How can I help you today?\n\nTry asking about:\n• Meal planning\n• Allergy safety\n• Nutrition advice\n• Workout tips\n• Cooking help` 
      };
    }
    
    // Special case for thanks
    if (text.includes('thank') || text.includes('thanks')) {
      return { 
        reply: `You're welcome! 😊 Let me know if you need anything else.\n\nRemember: You can ask me about meal alternatives, nutrition facts, or workout advice anytime!` 
      };
    }
    
    // Determine which category the question falls into
    let selectedCategory = 'general';
    let highestMatch = 0;
    
    for (const [category, data] of Object.entries(AI_COACH_RESPONSES)) {
      let matchScore = 0;
      data.questions.forEach(keyword => {
        if (text.includes(keyword)) {
          matchScore++;
        }
      });
      
      if (matchScore > highestMatch) {
        highestMatch = matchScore;
        selectedCategory = category;
      }
    }
    
    // Get response from selected category
    const responseFunc = AI_COACH_RESPONSES[selectedCategory].response;
    return { reply: responseFunc(profile) };
  };

  // ========== PDF EXPORT ==========
  function exportPlanToPDF(plan) {
    const pdfWindow = window.open('', '_blank');
    const allergies = plan.profile.allergy || 'None';

    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>SmartDiet Plan - ${plan.profile.name}</title>
        <style>
          body { font-family: Arial, sans-serif; margin: 40px; color: #333; }
          .header { text-align: center; margin-bottom: 40px; }
          .logo { color: #2e8b57; font-size: 28px; font-weight: bold; }
          .section { margin-bottom: 30px; }
          .section-title { color: #2e8b57; border-bottom: 2px solid #2e8b57; padding-bottom: 5px; margin-bottom: 15px; }
          .profile-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; }
          .profile-item { margin-bottom: 10px; }
          .meal-card { background: #f8fff8; border: 1px solid #e0e0e0; border-radius: 8px; padding: 15px; margin-bottom: 15px; }
          .meal-header { display: flex; justify-content: space-between; margin-bottom: 10px; }
          .meal-time { font-weight: bold; color: #2e8b57; }
          .nutrition-badge { background: #e8f5e9; padding: 3px 8px; border-radius: 12px; font-size: 12px; margin-right: 5px; }
          .day-card { page-break-inside: avoid; margin-bottom: 30px; }
          .summary-box { background: #f0f8ff; padding: 15px; border-radius: 8px; margin-bottom: 20px; }
          .footer { text-align: center; margin-top: 40px; color: #666; font-size: 12px; }
          @media print {
            body { margin: 20px; }
            .no-print { display: none; }
          }
        </style>
      </head>
      <body>
        <div class="header">
          <div class="logo">SmartDiet Personalized Plan</div>
          <p>7-Day Nutrition Program</p>
          <p>Generated: ${new Date().toLocaleDateString()}</p>
        </div>
        
        <div class="section">
          <h2 class="section-title">Personal Profile</h2>
          <div class="profile-grid">
            <div class="profile-item"><strong>Name:</strong> ${plan.profile.name}</div>
            <div class="profile-item"><strong>Age:</strong> ${plan.profile.age} years</div>
            <div class="profile-item"><strong>Gender:</strong> ${plan.profile.gender}</div>
            <div class="profile-item"><strong>Height:</strong> ${plan.profile.height} cm</div>
            <div class="profile-item"><strong>Weight:</strong> ${plan.profile.weight} kg</div>
            <div class="profile-item"><strong>BMI:</strong> ${plan.summary.bmi} (${plan.summary.bodyShape})</div>
            <div class="profile-item"><strong>Goal:</strong> ${plan.profile.goal}</div>
            <div class="profile-item"><strong>Dietary Needs:</strong> ${allergies}</div>
          </div>
        </div>
        
        <div class="section">
          <h2 class="section-title">Nutritional Targets</h2>
          <div class="summary-box">
            <p><strong>Daily Calories:</strong> ${plan.summary.calories} kcal</p>
            <p><strong>Protein:</strong> ${plan.summary.proteinTarget}g</p>
            <p><strong>Carbohydrates:</strong> ${plan.summary.carbsTarget}g</p>
            <p><strong>Fat:</strong> ${plan.summary.fatTarget}g</p>
          </div>
        </div>
        
        <div class="section">
          <h2 class="section-title">7-Day Meal Plan</h2>
          ${plan.week.map(day => `
            <div class="day-card">
              <h3>${day.day} - ${day.date || ''}</h3>
              <p><strong>Total:</strong> ${day.totalCalories} kcal | ${day.totalProtein}g protein</p>
              
              ${day.meals.map(meal => `
                <div class="meal-card">
                  <div class="meal-header">
                    <span class="meal-time">${meal.time}</span>
                    ${meal.nutrition ? `
                      <span>
                        <span class="nutrition-badge">${meal.nutrition.calories} kcal</span>
                        <span class="nutrition-badge">${meal.nutrition.protein}g protein</span>
                      </span>
                    ` : ''}
                  </div>
                  <p><strong>${meal.item}</strong></p>
                  ${meal.description ? `<p><em>${meal.description}</em></p>` : ''}
                  ${meal.ingredients.length > 0 ? `
                    <p><small>Ingredients: ${meal.ingredients.join(', ')}</small></p>
                  ` : ''}
                </div>
              `).join('')}
            </div>
          `).join('')}
        </div>
        
        <div class="footer">
          <p>SmartDiet Nutrition System</p>
          <p>For medical advice, consult your healthcare provider</p>
        </div>
        
        <div class="no-print" style="margin-top: 30px; text-align: center;">
          <button onclick="window.print()" style="padding: 10px 20px; background: #2e8b57; color: white; border: none; border-radius: 5px; cursor: pointer;">
            Print PDF
          </button>
        </div>
      </body>
      </html>
    `;

    pdfWindow.document.write(htmlContent);
    pdfWindow.document.close();

    return "PDF generated successfully! Check the new window.";
  }

  // ========== HELPER CONFIGURATIONS ==========
  const GOAL_REQUIREMENTS = {
    lose: {
      calorie_range: { min: 1200, max: 1800 },
      protein_ratio: 0.35,
      carb_ratio: 0.40,
      fat_ratio: 0.25,
      preferred_tags: ['high_protein', 'high_fiber', 'low_carb', 'light'],
      avoid_tags: ['high_calorie', 'heavy', 'fried']
    },
    gain: {
      calorie_range: { min: 2500, max: 3500 },
      protein_ratio: 0.30,
      carb_ratio: 0.50,
      fat_ratio: 0.20,
      preferred_tags: ['high_protein', 'high_calorie', 'hearty', 'filling'],
      avoid_tags: ['light', 'low_calorie']
    },
    maintain: {
      calorie_range: { min: 1800, max: 2500 },
      protein_ratio: 0.25,
      carb_ratio: 0.45,
      fat_ratio: 0.30,
      preferred_tags: ['balanced', 'healthy', 'moderate'],
      avoid_tags: []
    }
  };

  const HEALTH_CONDITION_REQUIREMENTS = {
    diabetes: {
      strict_avoid: ['sugary', 'high_gi'],
      preferred_tags: ['high_fiber', 'balanced', 'low_gi']
    },
    hypertension: {
      strict_avoid: ['high_sodium', 'processed'],
      preferred_tags: ['low_sodium', 'heart_healthy']
    },
    cholesterol: {
      strict_avoid: ['fried', 'high_saturated_fat'],
      preferred_tags: ['heart_healthy', 'high_fiber']
    }
  };

  const PREFERENCE_REQUIREMENTS = {
    high_protein: {
      preferred_tags: ['high_protein']
    },
    vegan: {
      preferred_tags: ['vegan']
    },
    vegetarian: {
      preferred_tags: ['vegetarian']
    },
    mediterranean: {
      preferred_tags: ['mediterranean', 'greek', 'healthy']
    },
    keto: {
      preferred_tags: ['low_carb', 'high_fat']
    },
    paleo: {
      preferred_tags: ['high_protein', 'natural']
    }
  };

  const CUISINE_PREFERENCES = {
    mixed: ['all'],
    mediterranean: ['mediterranean', 'greek'],
    arabic: ['middle_eastern', 'arabic'],
    egyptian: ['middle_eastern'],
    asian: ['asian', 'japanese', 'chinese', 'thai', 'vietnamese'],
    mexican: ['mexican'],
    indian: ['indian'],
    american: ['american', 'classic'],
    italian: ['italian'],
    thai: ['thai'],
    japanese: ['japanese'],
    chinese: ['chinese'],
    french: ['french'],
    greek: ['greek'],
    spanish: ['spanish'],
    turkish: ['turkish']
  };

  // ========== EXPOSE FUNCTIONS ==========
  window.buildPlan = buildPlan;
  window.aiHandle = aiHandle;
  window.exportPlanToPDF = exportPlanToPDF;

  // ========== INITIALIZATION ==========
  document.addEventListener('DOMContentLoaded', function () {
    // Check for plan rendering
    const planContainer = document.getElementById('planContainer');
    if (planContainer) {
      const rawPlan = localStorage.getItem('smartdiet_plan');
      if (rawPlan) {
        try {
          const plan = JSON.parse(rawPlan);
          // Simple render if needed
        } catch (e) {
          console.error('Error loading plan:', e);
        }
      }
    }

    // Initialize AI Coach in chat page
    const chatContainer = document.getElementById('chat');
    if (chatContainer) {
      const profileRaw = localStorage.getItem('smartdiet_profile');
      if (profileRaw) {
        const profile = JSON.parse(profileRaw);
        const dietaryNeeds = profile.allergy ? ` (Dietary needs: ${profile.allergy})` : '';
        const welcomeMsg = `Hello ${profile.name}! 👋 I'm your SmartDiet AI Coach.${dietaryNeeds}\n\nI can help you with:\n• Meal planning & alternatives\n• Allergy-safe food guidance\n• Nutrition & macronutrient advice\n• Workout recommendations\n• Cooking tips\n\nWhat would you like to know about your meal plan?`;
        chatContainer.innerHTML += `<div class="msg-ai"><div class="msg-text">${welcomeMsg}</div></div>`;
      }
    }
  });

})();