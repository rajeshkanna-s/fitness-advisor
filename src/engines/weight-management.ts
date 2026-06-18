import type { EngineData } from '../types';

export const weightManagementEngine: EngineData = {
  category: 'weight-management',
  title: 'Weight Management',
  description:
    'Comprehensive guide to evidence-based weight management including fat loss, lean bulking, body recomposition, metabolic science, and sustainable long-term strategies for achieving and maintaining your ideal body composition.',
  topics: [
    {
      name: 'Calorie Deficit & Fat Loss Science',
      description:
        'The thermodynamic and physiological principles behind fat loss, including how to create and sustain a calorie deficit safely and effectively.',
      details: [
        'A calorie deficit of 500 kcal/day yields approximately 0.45 kg (1 lb) of fat loss per week, since 1 lb of body fat stores roughly 3,500 kcal of energy.',
        'Fat oxidation occurs when the body mobilizes triglycerides from adipocytes via hormone-sensitive lipase, releasing glycerol and free fatty acids into the bloodstream for energy use.',
        'Moderate deficits of 20-25% below TDEE preserve more lean mass compared to aggressive deficits of 40%+ which significantly increase muscle loss risk, especially in trained individuals.',
        'The rate of fat loss slows over time as the body downregulates metabolic rate, increases hunger hormones (ghrelin), and decreases satiety hormones (leptin) in response to sustained energy restriction.',
        'Protein intake of 1.6-2.2 g/kg body weight during a deficit is critical for muscle preservation, with research showing up to 2.4 g/kg may be beneficial during aggressive dieting phases.',
        'Diet breaks (1-2 weeks at maintenance calories every 6-12 weeks of dieting) can help mitigate metabolic adaptation, reduce psychological fatigue, and improve long-term adherence.',
        'Non-exercise activity thermogenesis (NEAT) often decreases unconsciously during a deficit by 200-400 kcal/day, which can stall weight loss if not accounted for.',
      ],
      subtopics: [
        {
          name: 'Rate of Weight Loss',
          description: 'Guidelines for safe and effective weekly weight loss targets based on body composition.',
          details: [
            'Beginners and those with higher body fat (>25% for men, >35% for women) can safely lose 0.7-1.0% of body weight per week without significant muscle loss.',
            'Leaner individuals (<15% body fat for men, <25% for women) should target a slower rate of 0.5-0.7% body weight per week to preserve lean tissue.',
            'Athletes in competition prep may push to 1-1.5% per week temporarily, but this requires high protein, resistance training, and close monitoring for performance decline.',
            'Very rapid weight loss (>1.5% body weight per week) consistently results in greater lean mass loss, hormonal disruption, and increased likelihood of weight regain.',
          ],
        },
        {
          name: 'Tracking Calorie Intake',
          description: 'Methods and tools for accurately monitoring energy intake during a fat loss phase.',
          details: [
            'Food scales provide the most accurate measurement; studies show people underestimate calorie intake by 30-50% when relying on visual estimation alone.',
            'Apps like MyFitnessPal and Cronometer use databases with hundreds of thousands of foods, but restaurant and packaged food entries can be inaccurate by 10-20%.',
            'Weigh foods raw when possible, as cooking methods (frying, baking, boiling) can significantly alter weight-to-calorie ratios due to water loss or oil absorption.',
            'Consistent tracking for at least 2-4 weeks provides enough data to identify true calorie intake patterns and make meaningful adjustments.',
          ],
        },
      ],
    },
    {
      name: 'Lean Bulking',
      description:
        'Strategic caloric surplus approach designed to maximize muscle gain while minimizing fat accumulation through controlled energy intake and progressive training.',
      details: [
        'A lean bulk typically involves a surplus of 200-350 kcal above TDEE, which supports muscle protein synthesis without excessive fat storage compared to traditional "dirty" bulks.',
        'Natural trainees can expect to gain 0.25-0.5 kg (0.5-1 lb) of muscle per month under optimal conditions, with beginners gaining at the higher end and advanced lifters at the lower end.',
        'Protein requirements during a bulk are approximately 1.6-2.0 g/kg body weight, slightly lower than during a deficit since the caloric surplus itself provides an anti-catabolic effect.',
        'Carbohydrate intake should be prioritized during a bulk at 4-7 g/kg body weight to fuel training performance, replenish glycogen stores, and support the anabolic hormonal environment.',
        'Fat intake should comprise 20-35% of total calories, with a minimum of 0.5 g/kg body weight to support hormonal function, including testosterone production.',
        'Progressive overload (adding weight, reps, or volume over time) is the primary driver of muscle growth; without it, a calorie surplus will predominantly add fat.',
        'Monitoring waist circumference alongside body weight helps distinguish lean gains from excessive fat gain; waist should not increase more than 50% of the rate of total weight gain.',
        'A lean bulk phase typically lasts 4-9 months, followed by a mini-cut of 4-8 weeks to shed accumulated fat before beginning the next bulking phase.',
      ],
    },
    {
      name: 'Body Recomposition',
      description:
        'The process of simultaneously losing fat and gaining muscle, most effective for specific populations and requiring precise nutrition and training programming.',
      details: [
        'Body recomposition is most effective in untrained beginners, individuals returning from a layoff (muscle memory), those with high body fat, and individuals using performance-enhancing drugs.',
        'A slight calorie deficit or maintenance calories combined with high protein (2.0-2.4 g/kg) and resistance training can drive simultaneous fat loss and muscle gain in suitable candidates.',
        'The scale may not change during recomposition since muscle is being gained as fat is lost; progress is better tracked through measurements, progress photos, and strength gains.',
        'Calorie cycling (surplus on training days, deficit on rest days) is one strategy to support recomposition by aligning energy availability with muscle protein synthesis demand.',
        'Studies show untrained individuals can gain 1-2 kg of muscle while losing 2-4 kg of fat over 8-12 weeks when following a structured resistance training and high-protein diet.',
        'Advanced trainees with years of training experience have limited recomposition potential at maintenance calories; they typically need distinct bulk and cut phases for meaningful progress.',
        'Sleep quality and duration (7-9 hours) are particularly important during recomposition, as growth hormone release during deep sleep supports both fat oxidation and tissue repair.',
      ],
    },
    {
      name: 'BMR & TDEE Calculation',
      description:
        'Understanding and calculating basal metabolic rate and total daily energy expenditure, the foundation of any weight management strategy.',
      details: [
        'Basal Metabolic Rate (BMR) represents the energy required to maintain basic physiological functions at rest and accounts for 60-75% of total daily energy expenditure.',
        'The Mifflin-St Jeor equation is considered the most accurate predictive formula: Men: 10 x weight(kg) + 6.25 x height(cm) - 5 x age - 5; Women: 10 x weight(kg) + 6.25 x height(cm) - 5 x age - 161.',
        'Total Daily Energy Expenditure (TDEE) = BMR x Activity Factor, where sedentary = 1.2, lightly active = 1.375, moderately active = 1.55, very active = 1.725, and extremely active = 1.9.',
        'TDEE is composed of BMR (60-75%), the thermic effect of food (TEF, 8-15%), exercise activity thermogenesis (EAT, 5-10%), and non-exercise activity thermogenesis (NEAT, 15-30%).',
        'Thermic effect of food varies by macronutrient: protein requires 20-30% of its caloric value to digest, carbohydrates 5-10%, and fat only 0-3%.',
        'Online TDEE calculators provide estimates with a margin of error of 10-20%; the most accurate method is tracking actual intake and weight change over 2-4 weeks to calculate true TDEE.',
        'Indirect calorimetry using a metabolic cart is the gold standard for measuring resting metabolic rate in clinical settings, with accuracy within 1-2%.',
        'Muscle tissue burns approximately 6 kcal per pound per day at rest, while fat tissue burns approximately 2 kcal per pound per day, making body composition a factor in BMR.',
      ],
      subtopics: [
        {
          name: 'Activity Multipliers',
          description: 'How to accurately assess and apply activity levels to BMR for TDEE calculation.',
          details: [
            'Sedentary (1.2): Desk job with no formal exercise; less than 5,000 steps per day on average.',
            'Lightly active (1.375): 1-3 days of light exercise per week or an active job like retail; 5,000-7,500 steps daily.',
            'Moderately active (1.55): 3-5 days of moderate exercise per week; 7,500-10,000 steps daily.',
            'Very active (1.725): 6-7 days of hard exercise per week or a physically demanding job plus regular exercise; 10,000-12,500 steps daily.',
            'Extremely active (1.9): Professional athletes, military in training, or individuals with very physically demanding jobs combined with daily intense exercise; 12,500+ steps daily.',
          ],
        },
      ],
    },
    {
      name: 'Body Composition Analysis',
      description:
        'Methods for assessing body fat percentage, lean mass, and overall composition to track progress beyond simple scale weight.',
      details: [
        'DEXA (Dual-Energy X-ray Absorptiometry) scanning is the clinical gold standard with accuracy of +/- 1-2% body fat; it also provides regional body composition and bone density data.',
        'Bioelectrical Impedance Analysis (BIA) is widely available in smart scales but has an error margin of +/- 3-5% body fat and is heavily influenced by hydration status, recent meals, and exercise.',
        'Skinfold calipers (3-site or 7-site protocols) can achieve +/- 3% accuracy when performed by an experienced technician, making them a reliable and inexpensive option.',
        'Hydrostatic (underwater) weighing was the former gold standard with +/- 1.5-2.5% accuracy, but has been largely replaced by DEXA due to accessibility and ease of testing.',
        'The Bod Pod uses air displacement plethysmography with accuracy comparable to hydrostatic weighing (+/- 2-3%) and is available at many universities and sports performance centers.',
        'Navy method body fat estimation uses neck and waist circumference measurements and is a free, reasonably accurate estimation tool (+/- 3-4%) for general population use.',
        'Consistency of testing conditions (time of day, hydration, recent meals, recent exercise) is more important than absolute accuracy when using any method to track trends over time.',
        'Visual estimation of body fat percentage is common but subjective; reference photo guides can improve accuracy to +/- 3-5% for most individuals with some practice.',
      ],
    },
    {
      name: 'Metabolic Adaptation',
      description:
        'How the body adapts its energy expenditure in response to prolonged caloric restriction, and strategies to mitigate the effects.',
      details: [
        'Adaptive thermogenesis can reduce metabolic rate by 5-15% beyond what is predicted by weight loss alone, meaning the body burns fewer calories than expected for its new size.',
        'Hormonal changes during prolonged dieting include decreased leptin (up to 50%), decreased thyroid hormones (T3 drops 10-20%), decreased testosterone, and increased ghrelin.',
        'NEAT reduction is the largest non-BMR component of metabolic adaptation; people unconsciously move less, fidget less, and reduce spontaneous physical activity during a deficit.',
        'The degree of metabolic adaptation is correlated with the severity and duration of the calorie deficit; more aggressive and longer diets produce greater adaptation.',
        'Research on "The Biggest Loser" contestants showed metabolic rates 500+ kcal/day lower than predicted 6 years after the competition, highlighting the persistence of adaptation.',
        'Strategies to mitigate adaptation include maintaining high protein intake, preserving resistance training volume, incorporating diet breaks, and avoiding excessively low calorie intakes.',
        'Metabolic adaptation is not permanent; it can be partially or fully reversed through a careful reverse dieting phase or extended period at maintenance calories.',
      ],
    },
    {
      name: 'Reverse Dieting',
      description:
        'A strategic, gradual increase in calorie intake after a dieting phase designed to restore metabolic rate while minimizing rapid fat regain.',
      details: [
        'Reverse dieting involves increasing calorie intake by 50-150 kcal per week over 4-12 weeks, gradually bringing intake from deficit levels back to estimated maintenance or above.',
        'The primary goals are to restore suppressed hormones (leptin, thyroid, testosterone), rebuild NEAT levels, improve training performance, and psychologically transition out of a dieting mindset.',
        'A well-executed reverse diet can allow a person to eat significantly more calories with minimal fat gain, as metabolic rate upregulates with increased food intake and activity.',
        'Carbohydrate increases should be prioritized during a reverse diet, as carbs have a greater impact on leptin levels and thyroid hormone conversion (T4 to T3) than fat.',
        'Weight may increase 1-3 kg during the initial phase of a reverse diet due to glycogen replenishment and water retention, which is not actual fat gain.',
        'Monitoring biofeedback markers such as body temperature, energy levels, sleep quality, libido, and training performance helps gauge the success of the reverse dieting process.',
        'An alternative to slow reverse dieting is an immediate jump to estimated maintenance calories; research suggests similar outcomes for many individuals, though psychological preference varies.',
      ],
    },
    {
      name: 'Tracking Progress',
      description:
        'Multi-metric approaches to monitoring body composition changes that go beyond the bathroom scale for a complete picture of progress.',
      details: [
        'Daily weigh-ins averaged over 7-day periods provide the most accurate weight trend data, eliminating the noise from daily fluctuations of 0.5-2 kg caused by water, food, and glycogen.',
        'Progress photos taken every 2-4 weeks under consistent lighting, angle, and time of day are one of the most reliable visual tracking methods for body composition changes.',
        'Circumference measurements of waist, hips, chest, arms, and thighs taken with a fabric tape measure can detect changes that the scale misses during body recomposition.',
        'Strength progression in key compound lifts serves as an indirect indicator of muscle mass changes; consistent strength gains during a deficit strongly suggest lean mass preservation.',
        'Clothing fit is a practical, underappreciated indicator of body composition changes that can be more motivating than scale weight for many individuals.',
        'Biofeedback metrics including energy levels, sleep quality, mood, libido, hunger, and training performance should be tracked alongside physical metrics to ensure overall health.',
        'Rate of weight change should be evaluated in 2-4 week blocks rather than day-to-day or week-to-week, as short-term fluctuations often mask the true trend.',
        'Combining 3+ tracking methods (scale, measurements, photos, strength) provides the most complete and accurate picture of progress and prevents over-reliance on any single metric.',
      ],
    },
    {
      name: 'Set Point Theory',
      description:
        'The biological concept that the body may defend a particular weight range through hormonal and metabolic regulatory mechanisms.',
      details: [
        'Set point theory proposes that the body has a genetically influenced weight range (typically spanning 5-10 kg) that it actively defends through metabolic and hormonal adjustments.',
        'The hypothalamus plays a central role in energy homeostasis, integrating signals from leptin, ghrelin, insulin, and other hormones to regulate appetite and energy expenditure.',
        'Leptin, produced by fat cells, signals energy abundance to the brain; as fat mass decreases, leptin drops and the brain increases hunger and reduces energy expenditure to defend the set point.',
        'The "settling point" model is a more nuanced alternative, suggesting body weight stabilizes based on the interaction between biological regulation and environmental factors (food availability, activity level).',
        'Prolonged maintenance of a new body weight for 6-12+ months may help establish a new settling point as the body gradually adapts to the new metabolic and hormonal environment.',
        'Yo-yo dieting may make it progressively harder to lose weight by upregulating hunger hormones and fat storage efficiency, though the evidence for permanent metabolic "damage" is mixed.',
        'Behavioral factors such as habitual eating patterns, social environment, and physical activity routines have a powerful influence on where body weight settles beyond pure biology.',
      ],
    },
    {
      name: 'Sustainable Weight Loss',
      description:
        'Evidence-based behavioral and lifestyle strategies for achieving and maintaining weight loss long-term, focusing on adherence and habit formation.',
      details: [
        'Research consistently shows that 80-95% of dieters regain lost weight within 1-5 years; the key differentiator for successful maintainers is long-term behavioral and lifestyle change.',
        'The National Weight Control Registry found that successful long-term weight maintainers share common habits: regular breakfast, 1+ hours of daily physical activity, regular self-monitoring, and consistent eating patterns.',
        'Flexible dieting approaches (no "forbidden" foods) produce equal or better long-term adherence and weight loss compared to rigid, rule-based diets across multiple meta-analyses.',
        'Habit stacking (attaching new behaviors to existing habits) and environment design (removing junk food, pre-preparing meals) are more effective than willpower alone for long-term adherence.',
        'Social support and accountability (training partners, coaches, community groups) significantly improve weight loss outcomes and long-term maintenance rates.',
        'Increasing daily step count to 8,000-12,000 steps is one of the most effective NEAT interventions for weight management, burning an additional 200-500 kcal/day depending on body weight.',
        'Moderate alcohol reduction can significantly support weight loss; alcohol provides 7 kcal/g, inhibits fat oxidation for hours after consumption, and often leads to increased food intake.',
        'Transition from a deficit to maintenance should be planned in advance; most weight regain occurs because people lack a clear maintenance strategy once they reach their goal weight.',
      ],
    },
  ],
  keyTerms: [
    {
      term: 'Calorie Deficit',
      definition:
        'A state in which energy intake is less than energy expenditure, forcing the body to utilize stored energy (primarily body fat) to meet its needs. The fundamental requirement for fat loss.',
    },
    {
      term: 'Calorie Surplus',
      definition:
        'A state in which energy intake exceeds energy expenditure, providing excess energy that can be stored as body fat or used to build new muscle tissue when combined with resistance training.',
    },
    {
      term: 'TDEE (Total Daily Energy Expenditure)',
      definition:
        'The total number of calories burned in a 24-hour period, encompassing BMR, thermic effect of food, exercise activity, and non-exercise activity thermogenesis.',
    },
    {
      term: 'BMR (Basal Metabolic Rate)',
      definition:
        'The minimum number of calories required to sustain basic physiological functions (breathing, circulation, cell production) while at complete rest in a fasted state.',
    },
    {
      term: 'NEAT (Non-Exercise Activity Thermogenesis)',
      definition:
        'Calories burned through all daily movement that is not deliberate exercise, including walking, fidgeting, standing, and performing household tasks. Highly variable between individuals (200-900 kcal/day).',
    },
    {
      term: 'TEF (Thermic Effect of Food)',
      definition:
        'The energy cost of digesting, absorbing, and processing nutrients from food, accounting for approximately 8-15% of total daily energy expenditure. Protein has the highest TEF at 20-30%.',
    },
    {
      term: 'Body Recomposition',
      definition:
        'The process of simultaneously reducing body fat and increasing lean muscle mass, resulting in improved body composition without necessarily changing overall body weight.',
    },
    {
      term: 'Adaptive Thermogenesis',
      definition:
        'A decrease in metabolic rate beyond what would be predicted by changes in body mass alone, occurring as a physiological response to prolonged caloric restriction.',
    },
    {
      term: 'Reverse Dieting',
      definition:
        'A strategic approach to increasing calorie intake gradually after a dieting phase, typically by 50-150 kcal per week, to restore metabolic rate while minimizing fat regain.',
    },
    {
      term: 'Leptin',
      definition:
        'A hormone produced by adipose tissue that signals energy status to the brain. Higher in those with more body fat; decreases during dieting, increasing hunger and reducing metabolic rate.',
    },
    {
      term: 'Ghrelin',
      definition:
        'A hormone produced primarily in the stomach that stimulates appetite and promotes food intake. Levels increase during caloric restriction and decrease after meals.',
    },
    {
      term: 'DEXA Scan',
      definition:
        'Dual-Energy X-ray Absorptiometry; a medical imaging technique that measures body fat percentage, lean mass, and bone mineral density with high precision (+/- 1-2% for body fat).',
    },
    {
      term: 'BIA (Bioelectrical Impedance Analysis)',
      definition:
        'A body composition measurement method that sends a small electrical current through the body; lean tissue conducts better than fat tissue, allowing estimation of body fat percentage.',
    },
    {
      term: 'Macronutrients',
      definition:
        'The three primary nutrients that provide energy: protein (4 kcal/g), carbohydrates (4 kcal/g), and fat (9 kcal/g). Alcohol also provides energy at 7 kcal/g but is not considered an essential macronutrient.',
    },
    {
      term: 'Glycogen',
      definition:
        'The stored form of glucose in muscle and liver tissue, bound with water at a ratio of approximately 1:3. Glycogen depletion and repletion account for much of the rapid weight changes seen during dieting.',
    },
    {
      term: 'Lipolysis',
      definition:
        'The metabolic process of breaking down stored triglycerides in fat cells into glycerol and free fatty acids, which are then released into the bloodstream and oxidized for energy.',
    },
    {
      term: 'Set Point',
      definition:
        'The theoretical body weight range that the body actively defends through hormonal and metabolic regulatory mechanisms, making significant deviation from this range increasingly difficult to maintain.',
    },
    {
      term: 'Mifflin-St Jeor Equation',
      definition:
        'The most widely validated formula for estimating basal metabolic rate, considered more accurate than the older Harris-Benedict equation, especially for overweight and obese populations.',
    },
    {
      term: 'Energy Balance',
      definition:
        'The relationship between energy intake (calories consumed) and energy expenditure (calories burned). A positive energy balance leads to weight gain; a negative balance leads to weight loss.',
    },
    {
      term: 'Lean Mass',
      definition:
        'All body weight that is not fat mass, including muscle, bone, water, organs, and connective tissue. Preserving lean mass during weight loss is critical for maintaining metabolic rate and functional capacity.',
    },
    {
      term: 'Maintenance Calories',
      definition:
        'The calorie intake at which body weight remains stable over time; energy intake equals energy expenditure. This value changes as body weight, composition, and activity levels change.',
    },
    {
      term: 'Calorie Cycling',
      definition:
        'Alternating between higher and lower calorie intake days (or training/rest days) while maintaining the same weekly average. Used to align energy availability with training demands.',
    },
    {
      term: 'Diet Break',
      definition:
        'A planned 1-2 week period at maintenance calories during a prolonged dieting phase, used to temporarily reverse some metabolic and hormonal adaptations and improve adherence.',
    },
    {
      term: 'Refeed Day',
      definition:
        'A single day of increased calorie intake (primarily from carbohydrates) during a dieting phase, aimed at boosting leptin levels, replenishing glycogen, and providing psychological relief.',
    },
    {
      term: 'Satiety',
      definition:
        'The feeling of fullness and satisfaction after eating that suppresses further food intake. High-protein, high-fiber, and high-volume foods tend to produce the greatest satiety per calorie.',
    },
    {
      term: 'Body Fat Percentage',
      definition:
        'The proportion of total body mass that is adipose tissue. Essential fat is approximately 3-5% in men and 10-13% in women; athletic ranges are 6-13% for men and 14-20% for women.',
    },
    {
      term: 'Water Retention',
      definition:
        'Temporary accumulation of extra fluid in body tissues caused by factors such as high sodium intake, cortisol elevation, carbohydrate consumption, menstrual cycle, and stress. Can mask fat loss on the scale.',
    },
    {
      term: 'Insulin Sensitivity',
      definition:
        'The degree to which cells respond to insulin for glucose uptake. Higher insulin sensitivity improves nutrient partitioning toward muscle rather than fat, and is improved by exercise and weight loss.',
    },
    {
      term: 'Somatotype',
      definition:
        'A classification of body type into ectomorph (thin, difficulty gaining weight), mesomorph (muscular, gains muscle easily), and endomorph (wider, gains fat easily). Most people are a combination of types.',
    },
    {
      term: 'Nutrient Partitioning',
      definition:
        'How the body directs consumed calories toward muscle tissue versus fat storage. Influenced by insulin sensitivity, training status, hormonal profile, and overall body composition.',
    },
  ],
  tips: [
    'Weigh yourself daily at the same time (morning, after bathroom, before eating) and track the 7-day moving average to see your true weight trend while filtering out daily noise.',
    'Prioritize protein at every meal (30-50g per serving) during a deficit to maximize satiety, preserve muscle mass, and take advantage of the high thermic effect of protein digestion.',
    'Increase daily step count to 8,000-12,000 as your primary NEAT strategy; this burns 200-500 extra calories daily without the fatigue and recovery cost of additional gym sessions.',
    'Use a food scale for calorie counting accuracy, especially for calorie-dense foods like nuts, oils, cheese, and peanut butter where small volume differences mean large calorie differences.',
    'Plan diet breaks of 1-2 weeks at maintenance every 8-12 weeks of continuous dieting to mitigate metabolic adaptation, restore hormones, and prevent psychological burnout.',
    'Take progress photos every 2-4 weeks in consistent lighting and angles; visual changes are often apparent in photos weeks before they show up on the scale or in measurements.',
    'Focus on filling, nutrient-dense foods that provide high volume per calorie: vegetables, fruits, lean proteins, legumes, and whole grains help manage hunger at lower calorie levels.',
    'Do not eliminate entire food groups or create "forbidden" food lists; flexible dieting with an 80/20 approach (80% whole foods, 20% discretionary) produces better long-term adherence.',
    'Keep resistance training volume and intensity high during a deficit; reducing training load sends a signal that muscle is not needed, accelerating lean mass loss.',
    'Have a clear exit strategy before starting a fat loss phase; know your target endpoint, how long it should take, and your plan for transitioning to maintenance or reverse dieting.',
  ],
  faqs: [
    {
      question: 'How many calories should I eat to lose weight?',
      answer:
        'Start by estimating your TDEE using the Mifflin-St Jeor equation multiplied by an activity factor. Then subtract 300-500 kcal for a moderate deficit. Track your weight for 2-3 weeks; if you are not losing 0.5-1% body weight per week, reduce by another 100-200 kcal. Most women should not go below 1,200 kcal and most men below 1,500 kcal without medical supervision.',
    },
    {
      question: 'Is it possible to lose fat and build muscle at the same time?',
      answer:
        'Yes, body recomposition is possible but most effective for beginners, those returning from a training break, individuals with higher body fat, and those using performance-enhancing drugs. Eat at maintenance or a slight deficit with high protein (2.0-2.4 g/kg), follow a progressive resistance training program, and track body measurements rather than scale weight.',
    },
    {
      question: 'Why has my weight loss stalled even though I am still in a deficit?',
      answer:
        'Plateaus are common and can result from metabolic adaptation, unconscious reduction in NEAT, increased water retention from stress or cortisol, inaccurate calorie tracking, or the deficit becoming too small as your body weight decreases. Reassess your TDEE at your current weight, verify tracking accuracy with a food scale, check stress and sleep, and consider a 1-2 week diet break before adjusting calories further.',
    },
    {
      question: 'Do I need to eat breakfast to lose weight?',
      answer:
        'No. Meal timing has minimal impact on fat loss when total daily calories and protein are equated. Some people find skipping breakfast (intermittent fasting) helps control total intake; others find it leads to overeating later. Choose the meal pattern that best supports your adherence, energy levels, and lifestyle.',
    },
    {
      question: 'How accurate are BMR and TDEE calculators?',
      answer:
        'Online calculators provide estimates with a 10-20% margin of error. They are useful starting points, but the most accurate way to determine your TDEE is to track calorie intake and body weight consistently for 2-4 weeks, then calculate actual expenditure from the observed rate of weight change.',
    },
    {
      question: 'Will eating carbs at night make me gain fat?',
      answer:
        'No. Total daily calorie intake and overall macronutrient distribution matter far more than the timing of specific macronutrients. Studies show no difference in fat loss between consuming carbs earlier versus later in the day when total intake is controlled. Eat carbs when it best suits your schedule, training, and preferences.',
    },
    {
      question: 'How much weight fluctuation is normal day to day?',
      answer:
        'Daily weight can fluctuate 0.5-2 kg (1-4 lbs) due to water retention, glycogen changes, food volume in the gut, sodium intake, hormonal shifts, and bowel movements. This is completely normal and does not reflect actual fat gain or loss. Track 7-day averages instead of individual daily readings.',
    },
    {
      question: 'What is the best diet for weight loss?',
      answer:
        'The best diet is the one you can adhere to consistently. Meta-analyses show no significant difference in weight loss between low-fat, low-carb, Mediterranean, keto, or other named diets when calories and protein are equated. Choose an eating pattern that fits your food preferences, lifestyle, budget, and cultural context for sustainable results.',
    },
    {
      question: 'Should I do cardio or weight training for fat loss?',
      answer:
        'Both are beneficial, but resistance training should be the priority. It preserves muscle mass during a deficit (critical for maintaining metabolic rate), improves body composition, and provides long-term metabolic benefits. Add cardio as a tool for additional calorie expenditure, starting with low-impact options like walking and increasing only as needed.',
    },
    {
      question: 'How do I know if I am losing fat or muscle?',
      answer:
        'Track multiple metrics: if strength levels are maintained or increasing, your lean mass is likely preserved. Use body measurements, DEXA scans, or skinfold calipers in addition to scale weight. Rapid weight loss (>1% body weight per week), declining strength, and excessive fatigue are warning signs of muscle loss.',
    },
    {
      question: 'Is a 1,200-calorie diet safe?',
      answer:
        'For most adults, 1,200 kcal/day is the minimum recommended for women and 1,500 kcal/day for men without medical supervision. Very low calorie diets increase the risk of nutrient deficiencies, muscle loss, hormonal disruption, and metabolic adaptation. Smaller individuals with low TDEE may require such levels, but should work with a healthcare professional.',
    },
    {
      question: 'What is the whoosh effect?',
      answer:
        'The "whoosh effect" describes the phenomenon where fat cells fill with water temporarily after releasing their fat content, causing the scale to stall, followed by a sudden drop in weight as the water is released. While not fully established in scientific literature, many dieters report this pattern, and increased water intake and reduced stress may help.',
    },
    {
      question: 'How long should I bulk before cutting?',
      answer:
        'A lean bulk phase typically lasts 4-9 months, depending on goals and the rate of fat accumulation. A good guideline is to bulk until you reach approximately 15-18% body fat for men or 25-28% for women, then cut to 10-12% for men or 18-22% for women. This range optimizes insulin sensitivity, nutrient partitioning, and hormonal profile.',
    },
    {
      question: 'Do metabolism-boosting supplements work?',
      answer:
        'Most "fat burner" supplements have little to no meaningful effect on fat loss. Caffeine can increase metabolic rate by 3-11% temporarily and improve exercise performance. Green tea extract and capsaicin have very small effects (50-100 kcal/day). No supplement replaces a calorie deficit, and many carry risks. Focus on diet, exercise, and sleep first.',
    },
    {
      question: 'How do I prevent weight regain after dieting?',
      answer:
        'Transition gradually to maintenance calories using a reverse diet. Maintain the exercise and eating habits that helped you lose weight. Continue monitoring weight weekly. Stay within a 2-3 kg range above your lowest weight and intervene early if weight creeps up. Build a sustainable lifestyle rather than reverting to pre-diet behaviors.',
    },
  ],
};
