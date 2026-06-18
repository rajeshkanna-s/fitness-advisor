import type { EngineData } from '../types';

export const nutritionDietEngine: EngineData = {
  category: 'nutrition-diet',
  title: 'Nutrition & Diet',
  description:
    'Comprehensive guide to nutritional science for health, body composition, and athletic performance, covering macronutrients, micronutrients, caloric balance, meal planning, and evidence-based dietary approaches.',
  topics: [
    {
      name: 'Macronutrients',
      description:
        'The three primary nutrients required in large quantities that provide energy and serve as the building blocks for bodily functions: protein, carbohydrates, and fats, each with distinct roles and recommended intakes.',
      details: [
        'Protein provides 4 calories per gram and is essential for muscle protein synthesis, enzyme production, immune function, and hormone regulation. The RDA is 0.8 g/kg/day for sedentary adults, but active individuals need 1.2-2.2 g/kg/day.',
        'Carbohydrates provide 4 calories per gram and are the body\'s preferred fuel source for high-intensity exercise. They are stored as glycogen in muscles (300-500g) and liver (80-100g), with total storage capacity of approximately 1,600-2,000 calories.',
        'Fats provide 9 calories per gram (more than double protein or carbs) and are essential for hormone production (including testosterone and estrogen), cell membrane integrity, vitamin absorption (A, D, E, K), and insulation.',
        'A balanced macronutrient distribution for active individuals typically ranges from: protein 25-35% of calories, carbohydrates 35-55%, and fats 20-35%, adjusted based on goals, activity level, and individual response.',
        'The thermic effect of food (TEF) varies by macronutrient: protein has the highest TEF at 20-30% (meaning 20-30% of protein calories are burned during digestion), carbohydrates 5-10%, and fats 0-3%.',
        'Complete proteins contain all 9 essential amino acids in adequate proportions (animal sources, soy, quinoa), while incomplete proteins lack one or more (most plant sources), requiring complementary pairing or variety throughout the day.',
        'Macronutrient tracking (counting macros) using food scales and apps provides precise dietary control and is particularly useful for body recomposition goals, though it is not necessary for everyone and can be replaced by hand-portion methods.',
      ],
      subtopics: [
        {
          name: 'Protein',
          description:
            'The macronutrient composed of amino acids, critical for muscle repair and growth, immune function, enzyme production, and satiety in the context of body composition goals.',
          details: [
            'Optimal protein intake for muscle building is 1.6-2.2 g/kg/day (0.7-1.0 g/lb/day), distributed across 3-5 meals with 20-40g per meal to maximize muscle protein synthesis at each feeding.',
            'Leucine is the key amino acid for triggering muscle protein synthesis via the mTOR pathway; a threshold of approximately 2.5-3g of leucine per meal is needed, found in roughly 25-30g of high-quality protein.',
            'High-protein diets (up to 3.3 g/kg/day) have been studied without adverse effects on kidney function in healthy individuals, though those with pre-existing kidney disease should consult a physician.',
            'The "anabolic window" post-workout is less narrow than once believed: total daily protein intake matters more than immediate post-workout timing, though consuming protein within 2-3 hours of training is still prudent.',
            'Top protein sources per calorie include chicken breast (31g/165 kcal per 6 oz), Greek yogurt (17g/100 kcal per cup), egg whites (26g/120 kcal per cup), whey protein (25g/120 kcal per scoop), and tuna (40g/180 kcal per can).',
          ],
        },
        {
          name: 'Carbohydrates',
          description:
            'The primary energy source for high-intensity activity, brain function, and glycogen replenishment, with distinctions between simple and complex carbohydrates and their roles in performance and health.',
          details: [
            'Complex carbohydrates (whole grains, oats, sweet potatoes, brown rice, legumes) provide sustained energy through slow digestion, along with fiber, vitamins, and minerals.',
            'Simple carbohydrates (fruit, honey, white rice, sports drinks) are rapidly digested and useful immediately before, during, or after intense exercise for quick energy and glycogen replenishment.',
            'The glycemic index (GI) ranks carbs by how rapidly they raise blood sugar: low GI (<55) foods provide steadier energy, while high GI (>70) foods cause rapid spikes. Glycemic load (GI x portion size) is a more practical measure.',
            'Endurance athletes may need 5-10 g/kg/day of carbohydrates to fuel training, while strength athletes typically need 3-5 g/kg/day. Low-carb approaches can work for fat loss but may impair high-intensity performance.',
            'Fiber (a type of carbohydrate) is not fully digested and contributes minimal calories but is essential for digestive health, blood sugar regulation, and satiety. Aim for 25-38g per day from whole food sources.',
          ],
        },
        {
          name: 'Fats',
          description:
            'Essential dietary fats that support hormone production, brain health, joint lubrication, and the absorption of fat-soluble vitamins, with important distinctions between types of dietary fat.',
          details: [
            'Unsaturated fats (olive oil, avocados, nuts, fatty fish) are generally health-promoting: monounsaturated fats improve cholesterol profiles, while omega-3 polyunsaturated fats (EPA/DHA) reduce inflammation and support cardiovascular health.',
            'Saturated fats (butter, red meat, coconut oil, dairy fat) were long demonized but recent meta-analyses show their relationship with heart disease is more nuanced; moderate intake (7-10% of calories) appears safe for most people.',
            'Trans fats (partially hydrogenated oils found in processed foods) are the only type of fat with a clear, dose-dependent association with increased cardiovascular disease risk and should be minimized or avoided entirely.',
            'Omega-3 to omega-6 fatty acid ratio ideally should be closer to 1:1-1:4, but modern Western diets often reach 1:15-1:20 due to excessive vegetable oil and processed food consumption. Increasing omega-3 intake (fatty fish, flax, walnuts) helps rebalance.',
            'Fat intake should not drop below approximately 20% of total calories (or 0.5 g/kg/day), as very low fat intake impairs hormone production, with testosterone levels showing significant decline below this threshold in men.',
          ],
        },
      ],
    },
    {
      name: 'Micronutrients',
      description:
        'Essential vitamins and minerals required in small quantities for immune function, energy production, bone health, and hundreds of enzymatic reactions, with common deficiencies in active populations.',
      details: [
        'Vitamin D is deficient in an estimated 40-50% of the global population; it is crucial for bone health, immune function, testosterone production, and muscle function. Recommended intake is 1,000-4,000 IU/day, with blood levels of 30-50 ng/mL considered optimal.',
        'Iron is essential for oxygen transport (hemoglobin) and energy production; deficiency is common in endurance athletes (especially female runners) due to increased iron losses through sweat, foot strike hemolysis, and menstruation. RDA is 8mg/day for men, 18mg/day for premenopausal women.',
        'Magnesium is involved in 300+ enzymatic reactions including muscle contraction, nerve function, and protein synthesis. Approximately 50% of the US population is deficient. Good sources include dark leafy greens, nuts, seeds, and dark chocolate. RDA is 400-420mg/day for men, 310-320mg/day for women.',
        'Zinc supports immune function, testosterone production, and protein synthesis. Athletes may need higher intake (15-30mg/day) due to losses through sweat. Found in red meat, oysters, pumpkin seeds, and legumes.',
        'B vitamins (B1, B2, B3, B5, B6, B7, B9, B12) are essential coenzymes in energy metabolism, red blood cell production, and nervous system function. B12 deficiency is common in plant-based diets and requires supplementation.',
        'Calcium is critical for bone density, muscle contraction, and nerve signaling. RDA is 1,000-1,200mg/day from dairy, fortified foods, leafy greens, or supplements (taken with vitamin D for optimal absorption).',
        'Potassium is an electrolyte critical for muscle contraction and fluid balance; adequate intake (3,500-4,700mg/day) is associated with lower blood pressure and reduced stroke risk. Found abundantly in bananas, potatoes, spinach, and avocados.',
        'A food-first approach to micronutrients is preferred: a varied diet rich in fruits, vegetables, whole grains, lean proteins, and healthy fats typically meets micronutrient needs. Supplements should fill specific, identified gaps rather than replace dietary quality.',
      ],
      subtopics: [
        {
          name: 'Vitamins',
          description:
            'Organic compounds essential in small amounts for metabolic processes, immune function, and overall health, classified as water-soluble (B vitamins, C) or fat-soluble (A, D, E, K).',
          details: [
            'Fat-soluble vitamins (A, D, E, K) are stored in body fat and liver, meaning they can accumulate to toxic levels if supplemented excessively. Water-soluble vitamins (B complex, C) are excreted in urine and need regular replenishment.',
            'Vitamin C (75-90mg/day RDA) supports immune function, collagen synthesis, and iron absorption. Doses of 200-500mg may reduce the duration of upper respiratory infections, though megadoses offer no additional benefit.',
            'Vitamin A supports vision, immune function, and skin health. Found as retinol in animal foods (liver, dairy) and as beta-carotene in colorful vegetables (carrots, sweet potatoes, spinach).',
            'Vitamin K2 works synergistically with vitamin D to direct calcium into bones and teeth rather than soft tissues and arteries. Found in fermented foods (natto, aged cheese) and supplemented as MK-7 form.',
          ],
        },
        {
          name: 'Minerals',
          description:
            'Inorganic elements essential for structural roles (bone formation), regulatory functions (fluid balance, nerve signaling), and enzymatic activity throughout the body.',
          details: [
            'Electrolyte minerals (sodium, potassium, magnesium, calcium, chloride) maintain fluid balance, nerve conduction, and muscle contraction. Active individuals lose significant amounts through sweat and need intentional replenishment.',
            'Iron exists in two dietary forms: heme iron (from animal sources, 15-35% absorption) and non-heme iron (from plant sources, 2-20% absorption). Vitamin C consumed alongside non-heme iron can increase absorption by 3-6 fold.',
            'Selenium is a trace mineral critical for thyroid function and antioxidant defense (as a component of glutathione peroxidase). Brazil nuts are the richest dietary source, with a single nut providing approximately 70-90 mcg (RDA is 55 mcg).',
            'Iodine is essential for thyroid hormone production and metabolic regulation. Deficiency can cause hypothyroidism and fatigue. Sources include iodized salt, seaweed, dairy, and fish. RDA is 150 mcg/day for adults.',
          ],
        },
      ],
    },
    {
      name: 'Caloric Balance (TDEE & BMR)',
      description:
        'Understanding energy balance as the fundamental determinant of body weight change, including how to estimate caloric needs, create appropriate surpluses or deficits, and adjust intake based on progress.',
      details: [
        'Total Daily Energy Expenditure (TDEE) is the total number of calories burned per day, composed of: Basal Metabolic Rate (BMR, 60-70%), Thermic Effect of Food (TEF, ~10%), Non-Exercise Activity Thermogenesis (NEAT, 15-30%), and Exercise Activity Thermogenesis (EAT, 5-10%).',
        'BMR can be estimated using the Mifflin-St Jeor equation: Men: 10 x weight(kg) + 6.25 x height(cm) - 5 x age - 5. Women: 10 x weight(kg) + 6.25 x height(cm) - 5 x age - 161. This is then multiplied by an activity factor (1.2-1.9) to estimate TDEE.',
        'A caloric deficit of 500 calories/day theoretically produces ~1 lb (0.45 kg) of fat loss per week, as 1 lb of body fat contains approximately 3,500 calories. However, metabolic adaptation and body composition changes make this estimate imperfect.',
        'A caloric surplus of 200-500 calories/day is recommended for lean muscle gain (lean bulk), minimizing excessive fat accumulation. Larger surpluses (500+) are appropriate for underweight individuals or hardgainers but result in more fat gain.',
        'Metabolic adaptation (adaptive thermogenesis) occurs during prolonged caloric restriction: TDEE decreases by 5-15% beyond what weight loss alone would predict, through reductions in NEAT, TEF, and hormonal downregulation (decreased T3 thyroid hormone and leptin).',
        'Diet breaks (1-2 weeks at maintenance calories every 8-12 weeks of dieting) and refeed days (1-2 days per week at maintenance with higher carbohydrates) may help mitigate metabolic adaptation and improve diet adherence.',
        'Body recomposition (simultaneously losing fat and gaining muscle) is possible for beginners, overweight individuals, detrained individuals returning to training, and those using pharmacological assistance, but becomes increasingly difficult for lean, well-trained individuals.',
        'Tracking body weight should involve daily weigh-ins averaged over 7 days (weekly average) to account for normal daily fluctuations of 1-3 lb caused by water retention, sodium intake, carbohydrate intake, bowel contents, and hormonal cycles.',
      ],
    },
    {
      name: 'Meal Planning & Prep',
      description:
        'Practical strategies for organizing, preparing, and portioning meals in advance to ensure consistent adherence to nutritional targets, save time, and reduce reliance on convenience foods.',
      details: [
        'Batch cooking 2-3 protein sources, 2-3 carbohydrate sources, and preparing vegetables in bulk on 1-2 days per week provides 4-5 days of ready-made meals, dramatically improving dietary consistency.',
        'Meal prep staples include grilled chicken breast, ground turkey, hard-boiled eggs, rice (white or brown), roasted sweet potatoes, steamed broccoli, mixed salad greens, and overnight oats.',
        'Investing in quality food storage containers (glass or BPA-free plastic), a food scale, and a slow cooker or Instant Pot significantly reduces the time and friction associated with meal preparation.',
        'The plate method is a simple visual guide: fill half the plate with vegetables and fruits, one quarter with lean protein, and one quarter with whole grains or starchy carbohydrates for a balanced, portion-controlled meal without calorie counting.',
        'For those who dislike rigid meal plans, a flexible approach works: establish a protein target for each meal (25-40g), then build around it with vegetables and a carbohydrate/fat source. This ensures adequate protein while allowing variety.',
        'Meal frequency does not significantly affect metabolism or fat loss when total daily intake is equated. Eating 3 meals or 6 meals per day produces the same body composition outcomes; choose the pattern that fits your schedule and preferences.',
        'Grocery shopping with a list based on the planned meals for the week reduces impulse purchases of hyperpalatable processed foods and ensures all necessary ingredients are available for meal prep.',
      ],
    },
    {
      name: 'Special Diets',
      description:
        'Evidence-based evaluation of popular dietary approaches, including their mechanisms, benefits, limitations, and suitability for different goals and populations.',
      details: [
        'The ketogenic diet (<20-50g carbs/day) shifts the body\'s primary fuel source from glucose to ketone bodies (beta-hydroxybutyrate). Effective for appetite suppression and has therapeutic applications (epilepsy, type 2 diabetes), but may impair high-intensity exercise performance and is difficult to sustain long-term.',
        'Intermittent fasting (IF) restricts the daily eating window (common protocols: 16:8, 18:6, OMAD) or includes full fasting days (5:2). Research shows IF produces equivalent fat loss to continuous caloric restriction when calories and protein are equated; the primary benefit is simplified meal structure and appetite regulation.',
        'Plant-based diets (vegetarian, vegan) can fully support athletic performance when well-planned. Key considerations include adequate protein intake (typically needing 10-20% more total protein due to lower digestibility), B12 supplementation (essential for vegans), creatine, iron, zinc, omega-3s, and calcium.',
        'The Mediterranean diet emphasizes olive oil, fish, vegetables, fruits, whole grains, legumes, nuts, and moderate red wine. It is one of the most well-studied dietary patterns, associated with 25-30% reduced cardiovascular disease risk and improved longevity.',
        'Carb cycling alternates higher and lower carbohydrate days based on training demands (high-carb on intense training days, low-carb on rest days), potentially optimizing glycogen availability for performance while creating an overall caloric deficit on low days.',
        'No single dietary approach is universally superior for fat loss; all effective diets create a caloric deficit. The best diet is one that an individual can adhere to consistently while meeting their protein and micronutrient needs.',
        'Elimination diets temporarily remove common food sensitivities (gluten, dairy, soy, eggs, nuts) for 2-4 weeks, then systematically reintroduce each to identify individual trigger foods causing digestive issues, inflammation, or other symptoms.',
      ],
      subtopics: [
        {
          name: 'Ketogenic Diet',
          description:
            'A very low-carbohydrate, high-fat diet that induces a metabolic state of ketosis where the body primarily burns fat and ketone bodies for fuel.',
          details: [
            'Macronutrient ratios are typically 70-80% fat, 15-20% protein, and 5-10% carbohydrates (under 20-50g/day). Achieving and maintaining ketosis takes 2-4 weeks of strict adherence.',
            'The "keto flu" (fatigue, headache, irritability, brain fog) is common during the first 1-2 weeks of adaptation as the body transitions from glucose to ketone metabolism. Adequate sodium (5,000mg+), potassium, and magnesium intake mitigates symptoms.',
            'Keto may reduce anaerobic exercise capacity by 4-15% due to limited glycogen availability, making it less suitable for sports requiring repeated high-intensity efforts (sprinting, weightlifting, team sports).',
            'For fat loss, keto\'s primary advantage is appetite suppression (ketones suppress ghrelin, the hunger hormone), which can help some individuals maintain a caloric deficit more easily.',
          ],
        },
        {
          name: 'Intermittent Fasting',
          description:
            'Dietary patterns that cycle between periods of eating and fasting, not prescribing what to eat but when to eat, with various protocols ranging from daily time-restricted eating to alternate-day fasting.',
          details: [
            'The 16:8 method (16 hours fasting, 8-hour eating window) is the most popular and sustainable IF protocol, typically skipping breakfast and eating from noon to 8 PM.',
            'Fasting periods of 12-18 hours promote autophagy (cellular cleanup and recycling of damaged components), increase insulin sensitivity, and may improve markers of cellular aging.',
            'IF does not increase muscle loss compared to regular meal timing when protein intake is adequate (1.6+ g/kg/day) and resistance training is maintained.',
            'IF may be less suitable for individuals with a history of eating disorders, pregnant or breastfeeding women, those taking medications requiring food, and athletes with very high caloric needs.',
          ],
        },
      ],
    },
    {
      name: 'Fiber & Digestion',
      description:
        'The role of dietary fiber in digestive health, gut microbiome support, blood sugar regulation, satiety, and disease prevention, with practical guidance on sources and optimal intake.',
      details: [
        'Soluble fiber (oats, beans, lentils, apples, psyllium husk) dissolves in water to form a gel, slowing digestion, reducing blood sugar spikes by 20-30%, and lowering LDL cholesterol by 5-10% through bile acid binding.',
        'Insoluble fiber (whole wheat, vegetables, nuts, seeds, bran) adds bulk to stool, promotes regular bowel movements, and reduces transit time through the digestive tract, decreasing the risk of constipation and diverticular disease.',
        'The recommended daily fiber intake is 25g for women and 38g for men, but average American intake is only 15g/day. Each 10g increase in daily fiber intake is associated with a 10% reduction in all-cause mortality risk.',
        'Prebiotic fibers (inulin, fructooligosaccharides, resistant starch) feed beneficial gut bacteria, promoting the production of short-chain fatty acids (butyrate, propionate, acetate) that support gut lining integrity and immune function.',
        'Increasing fiber intake should be gradual (5g increase per week) to allow the gut microbiome to adapt; rapid increases can cause bloating, gas, and abdominal discomfort.',
        'High-fiber foods increase satiety and reduce overall caloric intake: studies show that meals with 10g+ of fiber reduce subsequent energy intake by 10-15%, making fiber a powerful tool for weight management.',
        'Resistant starch (found in cooled cooked rice, green bananas, and cooked-then-cooled potatoes) acts like fiber, passing undigested to the large intestine where it feeds beneficial bacteria and improves insulin sensitivity.',
      ],
    },
    {
      name: 'Water & Hydration',
      description:
        'The critical role of hydration in physical performance, cognitive function, metabolic processes, and overall health, including practical guidelines for daily and exercise-related fluid needs.',
      details: [
        'Water comprises 55-65% of total body mass and is involved in virtually every bodily function including nutrient transport, temperature regulation, joint lubrication, waste removal, and chemical reactions.',
        'General hydration guidelines suggest 3.7 liters (125 oz) per day for men and 2.7 liters (91 oz) per day for women from all sources (food contributes approximately 20% of total intake), though individual needs vary with body size, climate, and activity.',
        'Even mild dehydration (1-2% body mass loss) impairs cognitive function, mood, and concentration, while 2-3% dehydration reduces endurance performance by 7-10% and strength performance by 2-3%.',
        'Urine color is a practical hydration indicator: pale straw yellow indicates adequate hydration, while dark yellow or amber suggests dehydration. First-morning urine is typically more concentrated and less representative.',
        'During exercise, aim to drink 400-800 mL (14-28 oz) per hour, adjusting based on sweat rate, exercise intensity, and environmental conditions. Weighing before and after exercise helps determine individual sweat rate (1 lb of body weight loss = approximately 16 oz of fluid deficit).',
        'Hyponatremia (dangerously low blood sodium from excessive water intake without electrolytes) is a real risk during prolonged exercise lasting 3+ hours. Drinking to thirst rather than forcing fluids and including electrolytes prevents this condition.',
        'Caffeinated beverages (coffee, tea) count toward daily fluid intake. While caffeine has a mild diuretic effect, habitual caffeine consumers develop tolerance, and the net fluid contribution of caffeinated drinks is positive.',
      ],
    },
    {
      name: 'Nutrient Timing',
      description:
        'The strategic timing of nutrient intake around exercise and throughout the day to optimize performance, recovery, muscle protein synthesis, and body composition outcomes.',
      details: [
        'Pre-workout nutrition (1-3 hours before): a mixed meal containing protein (20-40g) and carbohydrates (30-60g) ensures amino acid availability and topped-off glycogen stores for optimal training performance.',
        'Intra-workout nutrition is generally unnecessary for sessions under 60-90 minutes. For longer or more intense sessions, consuming 30-60g of carbohydrates per hour (sports drink, banana, energy gel) maintains blood glucose and delays fatigue.',
        'Post-workout nutrition: consuming protein (20-40g) within 2-3 hours of training supports muscle protein synthesis. The "anabolic window" is wider than the 30-minute myth suggests, but eating sooner is beneficial if the pre-workout meal was more than 3-4 hours prior.',
        'Protein distribution across the day (3-5 meals with 20-40g each) produces greater total daily muscle protein synthesis than consuming the same amount in 1-2 large meals, due to the "muscle full" effect where MPS reaches a ceiling per meal.',
        'Carbohydrate timing matters most for athletes training twice per day or competing on consecutive days, where rapid glycogen replenishment (1.0-1.2 g/kg/hour for 4 hours post-exercise) is critical for subsequent performance.',
        'Casein protein or a mixed meal before bed provides a sustained amino acid release during sleep, potentially enhancing overnight muscle protein synthesis and recovery, as shown in several studies on evening protein intake.',
        'For fat loss, overall daily caloric intake and protein adequacy are far more important than specific meal timing. No reliable evidence shows that eating late at night, per se, causes more fat gain than eating the same calories earlier.',
      ],
    },
    {
      name: 'Food Quality vs Quantity',
      description:
        'The interplay between caloric quantity (energy balance) and food quality (nutrient density, processing level) in determining body composition, health outcomes, and long-term dietary sustainability.',
      details: [
        'For body weight change, caloric quantity (energy balance) is the primary determinant: a caloric deficit produces weight loss and a surplus produces weight gain regardless of food quality. However, food quality influences body composition, health markers, and dietary adherence.',
        'The NOVA food classification system categorizes foods from unprocessed (Group 1: fruits, vegetables, meats) to ultra-processed (Group 4: chips, sugary cereals, fast food). Ultra-processed food consumption is consistently associated with obesity, type 2 diabetes, and cardiovascular disease in epidemiological studies.',
        'Ultra-processed foods are engineered for hyper-palatability (precise combinations of sugar, fat, salt, and texture) and are easier to overeat: studies show people consume 500+ more calories per day when eating ultra-processed vs. minimally processed diets with matched macronutrients.',
        'Nutrient density refers to the amount of vitamins, minerals, and beneficial compounds per calorie. Whole foods (vegetables, fruits, lean meats, legumes, whole grains) are nutrient-dense; refined and processed foods are calorie-dense but nutrient-poor.',
        'The flexible dieting (IIFYM: If It Fits Your Macros) approach allows any food as long as macro and calorie targets are met. While effective for body composition, emphasizing food quality within this framework optimizes health, satiety, and micronutrient intake.',
        'An 80/20 approach (80% of calories from whole, minimally processed foods and 20% from less nutritious foods enjoyed for taste/social reasons) balances nutritional quality with psychological sustainability and dietary adherence.',
        'Organic vs. conventional produce: organic foods have lower pesticide residues and may have slightly higher levels of certain antioxidants, but the health differences are minimal compared to the impact of simply eating more fruits and vegetables regardless of production method.',
      ],
    },
    {
      name: 'Reading Nutrition Labels',
      description:
        'Practical skills for interpreting food packaging information to make informed dietary choices, including understanding serving sizes, ingredient lists, health claims, and regulatory requirements.',
      details: [
        'The serving size listed on a nutrition label may not reflect the amount most people actually eat. Always check the "servings per container" to understand total package contents; a small bag of chips may list 2.5 servings when most people eat the entire bag.',
        'The ingredient list is ordered by weight (most to least). If sugar (or its aliases: high fructose corn syrup, dextrose, maltose, sucrose, cane juice, agave nectar) appears in the first 3-5 ingredients, the product is likely high in added sugar.',
        'The %Daily Value (%DV) column is based on a 2,000-calorie diet: 5% DV or less is considered low, and 20% DV or more is considered high. Use this to quickly assess whether a food is a significant source of a nutrient.',
        '"Added sugars" is a required label line (since 2020 in the US) distinguishing between naturally occurring sugars (in fruit, dairy) and sugars added during processing. The American Heart Association recommends limiting added sugars to 25g/day for women and 36g/day for men.',
        'Health claims on packaging (e.g., "low fat," "high protein," "natural," "heart healthy") are regulated to varying degrees. "Natural" has no legal definition in the US, while claims like "low sodium" (<140mg per serving) and "high fiber" (5+g per serving) have specific criteria.',
        'Trans fat can be listed as "0g" if a serving contains less than 0.5g. Check the ingredient list for "partially hydrogenated oils" to identify hidden trans fats. Multiple servings of such products can add up to meaningful trans fat intake.',
        'Comparing products per 100g rather than per serving provides a standardized basis for comparison when serving sizes differ between brands or products, a common tactic manufacturers use to make their product appear healthier.',
        'The allergen declaration (required in the US for the top 9 allergens: milk, eggs, fish, shellfish, tree nuts, peanuts, wheat, soy, sesame) is critical for individuals with food allergies and also useful for identifying hidden sources of these ingredients.',
      ],
    },
  ],
  keyTerms: [
    {
      term: 'TDEE (Total Daily Energy Expenditure)',
      definition:
        'The total number of calories burned in a day from all sources: basal metabolic rate, thermic effect of food, non-exercise activity thermogenesis, and exercise. The starting point for determining caloric intake goals.',
    },
    {
      term: 'BMR (Basal Metabolic Rate)',
      definition:
        'The number of calories the body burns at complete rest to maintain basic life functions (breathing, circulation, cell production). Accounts for 60-70% of TDEE and is influenced by body mass, muscle mass, age, and sex.',
    },
    {
      term: 'Caloric Deficit',
      definition:
        'Consuming fewer calories than the body expends, resulting in the body using stored energy (primarily body fat) to make up the difference. The fundamental requirement for fat loss regardless of dietary approach.',
    },
    {
      term: 'Caloric Surplus',
      definition:
        'Consuming more calories than the body expends, providing excess energy for tissue building (muscle, fat, or both). Required for gaining weight and generally recommended for maximizing muscle growth.',
    },
    {
      term: 'Macronutrients (Macros)',
      definition:
        'The three major nutritional categories that provide calories: protein (4 kcal/g), carbohydrates (4 kcal/g), and fats (9 kcal/g). Alcohol (7 kcal/g) is sometimes considered a fourth macronutrient.',
    },
    {
      term: 'Micronutrients',
      definition:
        'Vitamins and minerals required in small amounts (milligrams or micrograms) for metabolic processes, immune function, and overall health. Unlike macronutrients, they do not provide calories.',
    },
    {
      term: 'Glycemic Index (GI)',
      definition:
        'A scale from 0-100 rating how quickly a carbohydrate-containing food raises blood glucose compared to pure glucose (GI=100). Low GI (<55) foods produce gradual blood sugar rises; high GI (>70) foods cause rapid spikes.',
    },
    {
      term: 'Thermic Effect of Food (TEF)',
      definition:
        'The energy cost of digesting, absorbing, and metabolizing food, accounting for approximately 10% of TDEE. Protein has the highest TEF (20-30%), followed by carbohydrates (5-10%), and fats (0-3%).',
    },
    {
      term: 'Essential Amino Acids (EAAs)',
      definition:
        'Nine amino acids that the body cannot synthesize and must be obtained from food: histidine, isoleucine, leucine, lysine, methionine, phenylalanine, threonine, tryptophan, and valine. All are needed for muscle protein synthesis.',
    },
    {
      term: 'Leucine',
      definition:
        'A branched-chain amino acid and the most potent stimulator of muscle protein synthesis through mTOR pathway activation. A threshold of approximately 2.5-3g per meal is needed to maximally stimulate MPS.',
    },
    {
      term: 'Insulin',
      definition:
        'A hormone produced by the pancreas in response to rising blood sugar. Facilitates glucose uptake into cells, promotes glycogen and fat storage, and inhibits fat breakdown. Insulin sensitivity (how well cells respond to insulin) is a key marker of metabolic health.',
    },
    {
      term: 'Glycogen',
      definition:
        'The stored form of glucose in the liver (80-100g) and skeletal muscles (300-500g). The primary fuel for high-intensity exercise. Depleted glycogen stores impair exercise performance and are replenished by carbohydrate consumption.',
    },
    {
      term: 'Satiety',
      definition:
        'The feeling of fullness and satisfaction after eating that suppresses further food intake. Influenced by protein content, fiber, food volume, water content, and the palatability and energy density of food.',
    },
    {
      term: 'Nutrient Density',
      definition:
        'The ratio of beneficial nutrients (vitamins, minerals, fiber, protein) to calories in a food. Nutrient-dense foods (vegetables, fruits, lean protein) provide high nutritional value per calorie; calorie-dense foods (processed snacks, sweets) provide calories with few beneficial nutrients.',
    },
    {
      term: 'Metabolic Adaptation',
      definition:
        'The body\'s reduction in energy expenditure in response to prolonged caloric restriction, beyond what would be expected from weight loss alone. Occurs through reduced NEAT, TEF, and hormonal changes (decreased thyroid hormones and leptin).',
    },
    {
      term: 'Body Recomposition',
      definition:
        'The simultaneous loss of body fat and gain of muscle mass, resulting in improved body composition without necessarily changing body weight. Most achievable in beginners, overweight individuals, and detrained athletes.',
    },
    {
      term: 'Omega-3 Fatty Acids',
      definition:
        'A family of essential polyunsaturated fats (EPA and DHA from fish oil; ALA from plant sources) with anti-inflammatory properties. Associated with reduced cardiovascular risk, improved brain function, and enhanced recovery from exercise.',
    },
    {
      term: 'Ketosis',
      definition:
        'A metabolic state where the body primarily uses ketone bodies (produced from fat in the liver) rather than glucose for fuel. Achieved through very low carbohydrate intake (<20-50g/day) or prolonged fasting.',
    },
    {
      term: 'Autophagy',
      definition:
        'A cellular process of self-cleanup where the body breaks down and recycles damaged or dysfunctional cellular components. Upregulated by fasting, caloric restriction, and exercise. May contribute to the health benefits of intermittent fasting.',
    },
    {
      term: 'Gut Microbiome',
      definition:
        'The community of trillions of microorganisms (bacteria, fungi, viruses) residing in the digestive tract. Influences digestion, immune function, nutrient absorption, mood, and body composition. Supported by dietary fiber, fermented foods, and diverse plant intake.',
    },
    {
      term: 'Bioavailability',
      definition:
        'The proportion of a nutrient that is absorbed and utilized by the body after ingestion. Varies by food source (heme vs. non-heme iron), preparation method (cooking increases lycopene bioavailability), and nutrient interactions (vitamin C enhances iron absorption).',
    },
    {
      term: 'Antinutrients',
      definition:
        'Compounds in certain foods (phytates, oxalates, lectins, tannins) that can reduce the absorption of minerals and other nutrients. Found in legumes, grains, and some vegetables. Effects are minimized by soaking, cooking, and eating a varied diet.',
    },
    {
      term: 'Refeed Day',
      definition:
        'A planned day of higher caloric intake (at or above maintenance), primarily from increased carbohydrates, during a fat loss phase. Intended to temporarily restore leptin levels, replenish glycogen, and provide a psychological break from dieting.',
    },
    {
      term: 'Diet Break',
      definition:
        'A planned 1-2 week period of eating at maintenance calories during a prolonged fat loss phase. Aims to reverse or slow metabolic adaptation, restore hormone levels, and improve long-term diet adherence.',
    },
    {
      term: 'IIFYM (If It Fits Your Macros)',
      definition:
        'A flexible dieting approach where any food is permitted as long as daily macronutrient and calorie targets are met. Emphasizes that body composition is primarily determined by macro totals, not food choices, though food quality affects health and satiety.',
    },
    {
      term: 'Thermic Effect of Activity (TEA)',
      definition:
        'The calories burned through intentional exercise, typically accounting for 5-10% of TDEE in moderately active individuals. Includes both the calories burned during the activity and the post-exercise oxygen consumption (EPOC).',
    },
    {
      term: 'Leptin',
      definition:
        'A hormone produced by fat cells that signals energy sufficiency to the brain, suppressing appetite and maintaining metabolic rate. Decreases during caloric restriction and fat loss, contributing to increased hunger and metabolic slowdown.',
    },
    {
      term: 'Ghrelin',
      definition:
        'The "hunger hormone" produced primarily in the stomach that stimulates appetite and food intake. Levels rise before meals and during caloric restriction, and are suppressed after eating (particularly by protein and fiber).',
    },
    {
      term: 'Electrolytes',
      definition:
        'Minerals that carry an electrical charge when dissolved in body fluids (sodium, potassium, magnesium, calcium, chloride, phosphate, bicarbonate). Essential for muscle contraction, nerve signaling, fluid balance, and pH regulation.',
    },
    {
      term: 'Caloric Density',
      definition:
        'The number of calories per gram of food. Low caloric density foods (vegetables, fruits, broth-based soups: 0.1-0.6 kcal/g) allow larger portions for fewer calories, enhancing satiety. High caloric density foods (nuts, oils, cheese: 4-9 kcal/g) pack many calories into small volumes.',
    },
    {
      term: 'Complete Protein',
      definition:
        'A protein source containing all nine essential amino acids in sufficient proportions to support human needs. Animal proteins (meat, dairy, eggs) and a few plant proteins (soy, quinoa, buckwheat) are complete. Most plant proteins are incomplete but can be combined for complementary profiles.',
    },
  ],
  tips: [
    'Prioritize protein at every meal (25-40g per serving). High-protein diets improve body composition, increase satiety, preserve muscle during fat loss, and have a higher thermic effect of food.',
    'Eat at least 5 servings (400g) of fruits and vegetables per day. This provides essential micronutrients, fiber, antioxidants, and phytochemicals while adding volume and satiety to meals with minimal calories.',
    'Drink water consistently throughout the day. A practical target is half your body weight in ounces (e.g., a 180 lb person drinks 90 oz). Carry a water bottle and sip regularly rather than chugging large amounts infrequently.',
    'Use a food scale for at least 2-4 weeks when starting a new dietary approach to calibrate portion awareness. Most people significantly underestimate caloric intake by 30-50% when relying on visual estimation alone.',
    'Build meals around a protein source first, then add vegetables for volume and micronutrients, then a carbohydrate and fat source to meet energy needs. This hierarchy ensures nutritional priorities are met.',
    'Do not demonize any single macronutrient. Carbohydrates, fats, and protein all serve essential biological functions. Eliminating entire food groups without medical reason increases the risk of nutrient deficiencies and reduces dietary sustainability.',
    'Prepare for dietary adherence by keeping healthy foods readily accessible and removing or limiting ultra-processed hyperpalatable foods from your environment. Willpower is finite; environment design is more reliable.',
    'If a diet feels unsustainable after 4-6 weeks of honest effort, modify it. The best diet for you is one you can follow consistently for months and years, not the one that produces the fastest short-term results.',
    'Pay attention to hunger and fullness cues. Eating slowly (20+ minutes per meal), chewing thoroughly, and removing distractions during meals improves awareness of satiety signals and naturally reduces overconsumption.',
    'Get adequate sleep (7-9 hours) to support dietary adherence. Sleep deprivation increases ghrelin (hunger hormone) by 15-28%, decreases leptin (satiety hormone), and increases cravings for high-calorie foods by activating reward centers in the brain.',
  ],
  faqs: [
    {
      question: 'How much protein do I need per day?',
      answer:
        'For general health, 0.8 g/kg bodyweight/day is the minimum RDA. For active individuals and those wanting to build or preserve muscle, research supports 1.6-2.2 g/kg/day (0.7-1.0 g/lb/day). During a caloric deficit, the higher end (2.0-2.4 g/kg/day) helps preserve muscle mass. Distribute protein across 3-5 meals with at least 20-40g per meal to maximize muscle protein synthesis throughout the day.',
    },
    {
      question: 'Are carbs bad for you?',
      answer:
        'No. Carbohydrates are the body\'s preferred fuel source for high-intensity activity and brain function. The type and quantity matter more than blanket avoidance. Whole, fiber-rich carbohydrate sources (vegetables, fruits, whole grains, legumes) provide sustained energy, essential nutrients, and health benefits. Excessive consumption of refined carbohydrates (white bread, sugary beverages, candy) can contribute to blood sugar dysregulation and weight gain when caloric intake exceeds needs.',
    },
    {
      question: 'Do I need to eat breakfast?',
      answer:
        'No. There is no metabolic advantage to eating breakfast vs. skipping it when total daily caloric intake and macronutrients are equated. Some people feel and perform better with breakfast; others function well with their first meal at noon (intermittent fasting). Choose the pattern that supports your energy, performance, and dietary adherence. If you train in the morning, a pre-workout meal or snack is recommended for performance.',
    },
    {
      question: 'How do I calculate my daily calorie needs?',
      answer:
        'Start with the Mifflin-St Jeor equation for BMR, then multiply by an activity factor: sedentary (1.2), lightly active (1.375), moderately active (1.55), very active (1.725), extremely active (1.9). This estimates your TDEE. For fat loss, subtract 300-500 calories; for muscle gain, add 200-500 calories. Track your weight for 2-3 weeks and adjust intake based on actual weight change, as all formulas are estimates.',
    },
    {
      question: 'Is counting calories necessary for weight loss?',
      answer:
        'It is not strictly necessary but is the most precise method. Alternatives include portion control using hand sizes (palm = protein, fist = carbs, thumb = fats), the plate method, or mindful eating. However, research consistently shows that people who track food intake achieve greater weight loss. At minimum, tracking for 2-4 weeks builds awareness of portion sizes and caloric density that can then be applied intuitively.',
    },
    {
      question: 'What should I eat before and after a workout?',
      answer:
        'Pre-workout (1-3 hours before): a mixed meal with 20-40g protein and 30-60g carbohydrates (e.g., chicken and rice, Greek yogurt with fruit, oatmeal with protein powder). Post-workout (within 2-3 hours): 20-40g protein to stimulate muscle protein synthesis, plus carbohydrates to replenish glycogen (more important for endurance athletes or those training twice daily). If your last meal was within 2-3 hours pre-workout, immediate post-workout nutrition is less critical.',
    },
    {
      question: 'Is a calorie a calorie regardless of food source?',
      answer:
        'For weight change, largely yes: a caloric deficit causes weight loss regardless of food source. However, not all calories are equal in terms of satiety (protein and fiber are more filling), thermic effect (protein costs more to digest), nutrient content (whole foods provide more vitamins/minerals), and long-term health outcomes (ultra-processed foods are associated with worse health markers). Focusing only on calorie quantity while ignoring food quality is a recipe for poor health despite potentially losing weight.',
    },
    {
      question: 'How much water should I drink per day?',
      answer:
        'General guidelines suggest 3.7 liters (125 oz) for men and 2.7 liters (91 oz) for women from all sources, including food (which provides about 20%). Practical indicators of adequate hydration include pale straw-colored urine, consistent thirst satisfaction, and stable body weight. Exercise, heat, humidity, and altitude increase fluid needs. During exercise, aim for 400-800 mL (14-28 oz) per hour, adjusted for individual sweat rate.',
    },
    {
      question: 'Can I eat late at night and still lose weight?',
      answer:
        'Yes. The time of day you eat has minimal direct effect on fat storage compared to your total daily caloric intake. The belief that "eating after 8 PM causes weight gain" is a myth. However, late-night eating is often associated with poor food choices (snacking on calorie-dense processed foods), mindless eating while watching TV, and eating beyond caloric needs. If your late-night meals fit within your daily calorie budget, they will not impair fat loss.',
    },
    {
      question: 'What supplements are actually worth taking?',
      answer:
        'The evidence-supported supplements for most people include: creatine monohydrate (3-5g/day for strength and muscle), protein powder (for convenience in meeting protein targets), vitamin D (1,000-4,000 IU/day if deficient, which most people are), omega-3 fish oil (1-3g EPA/DHA daily for inflammation and cardiovascular health), and magnesium (200-400mg/day if dietary intake is low). Everything else is either situation-specific or lacks strong evidence.',
    },
    {
      question: 'Are artificial sweeteners safe?',
      answer:
        'Based on current evidence, artificial sweeteners (aspartame, sucralose, stevia, erythritol) are considered safe at normal consumption levels by major regulatory bodies (FDA, EFSA). They can help reduce caloric intake by replacing sugar. Some concerns exist about potential effects on gut microbiome composition and insulin signaling, but the evidence is preliminary and inconsistent. They are generally a better choice than regular sugar for weight management, though water is the best zero-calorie beverage.',
    },
    {
      question: 'How do I lose fat without losing muscle?',
      answer:
        'Four key strategies: (1) Moderate caloric deficit of 300-500 calories/day (not extreme). (2) High protein intake of 2.0-2.4 g/kg/day. (3) Continue resistance training with the same intensity and volume as during maintenance or surplus (do not switch to light weights/high reps). (4) Adequate sleep (7-9 hours). Losing weight slowly (0.5-1% of body weight per week) preserves significantly more muscle than rapid weight loss.',
    },
    {
      question: 'Is the Mediterranean diet really the healthiest?',
      answer:
        'The Mediterranean diet is among the most well-studied and consistently associated with positive health outcomes, including 25-30% reduced cardiovascular disease risk, lower rates of type 2 diabetes, improved cognitive function, and reduced all-cause mortality. Its emphasis on olive oil, fish, vegetables, fruits, whole grains, legumes, and nuts provides a nutrient-dense, anti-inflammatory dietary pattern. However, many traditional diets worldwide share similar qualities, and the key principles (whole foods, healthy fats, abundant plants, moderate animal protein) can be applied within any cultural food tradition.',
    },
    {
      question: 'How do I know if I have a food intolerance?',
      answer:
        'Common signs include bloating, gas, diarrhea, constipation, skin issues, headaches, or fatigue after eating specific foods. The gold standard for identifying intolerances is an elimination diet: remove common triggers (dairy, gluten, soy, eggs, nuts, FODMAP foods) for 2-4 weeks, then reintroduce one at a time every 3-5 days while monitoring symptoms. Keep a detailed food and symptom diary. For suspected allergies (which involve immune responses and can be dangerous), consult an allergist for proper testing.',
    },
    {
      question: 'Is organic food worth the extra cost?',
      answer:
        'For health purposes, the evidence suggests minimal difference in nutrient content between organic and conventional produce. Organic foods have lower pesticide residues, which may be more important for certain high-residue items (the "Dirty Dozen" list). The health benefit of simply eating more fruits and vegetables far outweighs whether they are organic or conventional. If budget is limited, prioritize buying organic for high-pesticide items (strawberries, spinach, apples) and conventional for low-pesticide items (avocados, sweet corn, onions).',
    },
  ],
};
