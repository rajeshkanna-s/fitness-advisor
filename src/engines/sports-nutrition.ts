import type { EngineData } from '../types';

export const sportsNutritionEngine: EngineData = {
  category: 'sports-nutrition',
  title: 'Sports Nutrition',
  description:
    'Evidence-based guide to nutritional supplementation and fueling strategies for athletic performance, covering pre- and post-workout nutrition, ergogenic aids, hydration protocols, and supplement safety for active individuals.',
  topics: [
    {
      name: 'Pre-Workout Nutrition',
      description:
        'Strategic food and fluid intake in the hours before training to optimize energy availability, glycogen stores, hydration status, and performance while minimizing gastrointestinal discomfort.',
      details: [
        'A pre-workout meal consumed 2-4 hours before training should contain 1-4 g/kg of carbohydrates and 0.25-0.4 g/kg of protein, with moderate fat and fiber to allow sufficient digestion time. Example: chicken breast with rice and vegetables.',
        'A pre-workout snack consumed 30-60 minutes before training should be easily digestible with 20-40g of carbohydrates and 10-20g of protein, low in fat and fiber. Examples: banana with whey shake, rice cake with honey, or white toast with jam.',
        'Training in a fasted state does not enhance fat loss compared to fed training when total daily caloric intake is equated; however, some individuals prefer fasted training for comfort, and performance is minimally impacted for sessions under 60 minutes.',
        'Pre-exercise hydration should include 5-7 mL/kg of body weight (350-500 mL for most adults) consumed 2-4 hours before exercise, with an additional 200-300 mL 10-20 minutes before starting.',
        'Caffeine consumed 30-60 minutes before training (3-6 mg/kg bodyweight) is one of the most well-supported ergogenic aids, improving endurance performance by 2-4%, strength by 2-7%, and cognitive function during exercise.',
        'High-fat and high-fiber meals immediately before training slow gastric emptying and can cause bloating, cramping, and nausea during exercise. Keep pre-workout meals relatively low in fat (<15g) and fiber (<10g) within the 1-2 hour pre-exercise window.',
        'Individual tolerance varies significantly: experiment during training (not competitions) to find the timing, composition, and quantity of pre-workout nutrition that optimizes your performance and comfort.',
      ],
    },
    {
      name: 'Post-Workout Nutrition',
      description:
        'Nutritional strategies following exercise to replenish glycogen stores, stimulate muscle protein synthesis, reduce muscle protein breakdown, support rehydration, and accelerate recovery between sessions.',
      details: [
        'Post-workout protein intake of 20-40g within 2-3 hours of training maximally stimulates muscle protein synthesis. Larger athletes (>85 kg) may benefit from the higher end (40g), while smaller individuals can achieve maximal MPS with 20-25g.',
        'The "anabolic window" is real but wider than the 30-minute myth: if a pre-workout meal was consumed 2-4 hours before training, the urgency of immediate post-workout nutrition is reduced because amino acids from that meal are still circulating.',
        'Post-exercise carbohydrate intake of 0.8-1.2 g/kg/hour for the first 4 hours is critical when glycogen replenishment speed matters (training again within 8 hours or competing on consecutive days). For most recreational trainees, normal meal patterns are sufficient.',
        'Whey protein is superior to other protein sources immediately post-exercise due to its rapid digestion, high leucine content (10-12% by weight), and complete amino acid profile, stimulating MPS 30-50% more than casein or soy in the acute post-exercise period.',
        'The combination of protein and carbohydrates post-workout enhances glycogen replenishment beyond carbohydrates alone (by approximately 40% when protein is added to suboptimal carbohydrate intake) and creates a more anabolic hormonal environment.',
        'Rehydration should replace 125-150% of fluid lost during exercise over the following 4-6 hours. For every 1 lb of body weight lost during exercise, consume 20-24 oz (600-720 mL) of fluid with electrolytes.',
        'Post-workout meals rich in anti-inflammatory nutrients (tart cherry juice, omega-3 fatty acids, turmeric, blueberries) may modestly reduce exercise-induced muscle soreness and inflammation, though the evidence is stronger for tart cherry juice and omega-3s.',
      ],
    },
    {
      name: 'Protein Supplements',
      description:
        'A detailed examination of protein supplement types, their digestion kinetics, amino acid profiles, and optimal use cases for supporting muscle protein synthesis, recovery, and meeting daily protein targets.',
      details: [
        'Whey protein concentrate (WPC, 70-80% protein) is the most cost-effective option, retaining some lactose and fat. Whey protein isolate (WPI, 90%+ protein) is more refined, nearly lactose-free, and absorbs slightly faster. Whey hydrolysate is pre-digested for the fastest absorption but offers minimal practical advantage over isolate.',
        'Casein protein digests slowly (6-8 hours), providing a sustained release of amino acids. It is ideal before bed or as a meal replacement, supporting overnight muscle protein synthesis and reducing muscle protein breakdown during fasting periods.',
        'Plant-based protein powders (pea, rice, hemp, soy) are suitable alternatives for those avoiding dairy. Pea-rice blends provide a complete amino acid profile; soy protein isolate is a complete protein with efficacy comparable to whey for muscle building when leucine content is matched.',
        'Leucine content per serving is the most important factor for MPS stimulation: whey contains approximately 10-12% leucine, casein 8-9%, soy 7-8%, and pea 7-8%. Supplementing plant proteins with 2-3g of added leucine can equalize their MPS response.',
        'Protein powder is a supplement, not a requirement. Whole food protein sources (chicken, fish, eggs, dairy, legumes) provide additional micronutrients and are generally more satiating. Protein powder is most valuable as a convenient tool for reaching daily protein targets.',
        'Quality markers for protein supplements include third-party testing certifications (NSF Certified for Sport, Informed Sport, USP Verified), short ingredient lists, and protein content of 80%+ by weight (protein grams divided by serving size grams).',
        'Protein absorption rate varies: whey is absorbed at approximately 8-10g/hour, casein at 6-7g/hour, and egg protein at 3g/hour. However, the body can digest and utilize much more than 20-30g per meal; the "30g limit" myth has been debunked by research showing benefits of higher single-dose intakes.',
      ],
      subtopics: [
        {
          name: 'Whey Protein',
          description:
            'The most popular and well-researched protein supplement, derived from milk during cheese production, valued for its rapid absorption, high leucine content, and strong muscle protein synthesis response.',
          details: [
            'Whey is a complete protein containing all 9 essential amino acids with particularly high concentrations of BCAAs (25%) and leucine (10-12%), making it the most effective protein for acute MPS stimulation.',
            'Whey concentrate is 70-80% protein with retained bioactive compounds (immunoglobulins, lactoferrin); isolate is 90%+ protein with virtually no lactose (<1%); hydrolysate is enzymatically pre-digested.',
            'Peak blood amino acid levels occur approximately 60-90 minutes after whey consumption, making it ideal for post-workout recovery and pre-workout meals within 1-2 hours of training.',
            'Common dosing is 25-50g per serving (1-2 scoops), providing 20-40g of protein. Multiple daily servings can be used to meet protein targets conveniently.',
          ],
        },
        {
          name: 'Casein Protein',
          description:
            'A slow-digesting milk protein that forms a gel in the stomach, providing a sustained amino acid release over 6-8 hours, making it ideal for anti-catabolic purposes and overnight recovery.',
          details: [
            'Micellar casein is the least processed form and digests most slowly. Casein hydrolysate (found in some formulas) is pre-digested and absorbs rapidly, losing the slow-release benefit.',
            'Consuming 30-40g of casein before sleep has been shown in studies to increase overnight muscle protein synthesis by 22% and improve recovery without increasing fat storage.',
            'Casein is particularly useful during prolonged periods without food (overnight, long workdays) where a sustained amino acid supply prevents muscle protein breakdown from exceeding synthesis.',
            'Cottage cheese is a whole-food casein source: one cup provides approximately 25-28g of protein, primarily as casein, making it a popular pre-bed snack among athletes.',
          ],
        },
        {
          name: 'Plant-Based Protein',
          description:
            'Non-animal protein supplements derived from peas, rice, hemp, soy, and other plant sources, suitable for vegans, those with dairy allergies, and individuals seeking sustainable protein options.',
          details: [
            'Pea protein isolate is the most popular plant-based option, providing approximately 80-85% protein content with a good amino acid profile, though lower in methionine. Blending with rice protein creates a complete amino acid profile.',
            'Soy protein isolate is a complete protein with a PDCAAS (Protein Digestibility Corrected Amino Acid Score) of 1.0 (maximum), equal to whey and casein. Concerns about phytoestrogen effects on testosterone have been largely debunked at normal intake levels.',
            'Plant proteins generally have lower digestibility (70-85%) compared to animal proteins (90-99%), meaning slightly more total protein intake may be needed (approximately 10-20% more) to achieve equivalent amino acid delivery.',
            'Modern plant-based protein blends often combine multiple sources and add leucine to match the MPS-stimulating capacity of whey, narrowing the performance gap between plant and animal protein supplements.',
          ],
        },
      ],
    },
    {
      name: 'Creatine',
      description:
        'The most extensively researched and effective sports supplement, supporting high-intensity exercise performance, muscle growth, strength development, and potentially cognitive function through enhanced ATP regeneration.',
      details: [
        'Creatine monohydrate is stored in muscle as phosphocreatine and rapidly regenerates ATP during high-intensity, short-duration efforts (sprints, heavy lifts), increasing the capacity for repeated bouts of maximal effort by 5-15%.',
        'The standard supplementation protocol is 3-5g of creatine monohydrate daily, which saturates muscle stores in 3-4 weeks. A loading phase of 20g/day (split into 4x5g doses) for 5-7 days achieves saturation faster but is not necessary.',
        'Creatine supplementation has been shown in over 500 peer-reviewed studies to increase strength by 5-10%, power output by 5-15%, lean mass by 1-2 kg over 4-12 weeks (beyond training alone), and sprint performance by 5-8%.',
        'Creatine monohydrate is the most researched, effective, and cost-effective form. More expensive forms (creatine HCl, buffered creatine, creatine ethyl ester) have not demonstrated superiority in peer-reviewed research.',
        'Creatine causes 1-3 lb of water retention within the first 1-2 weeks due to increased intracellular water storage in muscle cells (not subcutaneous water). This is a sign it is working, not a negative side effect.',
        'Creatine is safe for long-term use: studies up to 5 years show no adverse effects on kidney function, liver function, or cardiovascular health in healthy individuals. It is banned by no major sports organization.',
        'Emerging research suggests creatine may benefit cognitive function (particularly under sleep deprivation or mental fatigue), bone health in older adults, and recovery from concussion, though more studies are needed.',
        'Approximately 20-30% of individuals are "non-responders" to creatine supplementation, often those with naturally high baseline muscle creatine levels (typically people who consume large amounts of red meat). Vegetarians and vegans tend to respond more robustly.',
      ],
    },
    {
      name: 'BCAAs & EAAs',
      description:
        'Branched-chain amino acids and essential amino acids supplements, their mechanisms of action, and the evidence for their efficacy in muscle building, fatigue reduction, and recovery.',
      details: [
        'BCAAs (leucine, isoleucine, and valine) are three of the nine essential amino acids, with leucine being the primary trigger for muscle protein synthesis via the mTOR signaling pathway.',
        'BCAA supplementation is largely unnecessary when daily protein intake is adequate (1.6+ g/kg/day) from complete protein sources, as whole proteins already contain sufficient BCAAs. A typical 30g serving of whey provides approximately 7g of BCAAs.',
        'EAA supplements contain all 9 essential amino acids (including the 3 BCAAs) and are superior to BCAAs alone for stimulating muscle protein synthesis because MPS requires all essential amino acids, not just leucine.',
        'The primary scenario where BCAA/EAA supplementation may be beneficial is during fasted training or extended exercise (90+ minutes) when consumed intra-workout to provide amino acids without the gastric burden of whole food.',
        'BCAAs have been shown to reduce perceived exertion and central fatigue during prolonged exercise by competing with tryptophan for transport across the blood-brain barrier, potentially reducing serotonin production that contributes to fatigue.',
        'A common BCAA ratio in supplements is 2:1:1 (leucine:isoleucine:valine), though some products use higher leucine ratios (4:1:1 or 8:1:1). The 2:1:1 ratio mirrors the natural ratio in muscle tissue.',
        'For most athletes and recreational trainees, money spent on BCAA supplements would be better allocated toward quality whole food protein or whey protein, which provides BCAAs along with all other essential amino acids at a lower cost per gram.',
      ],
    },
    {
      name: 'Caffeine & Pre-Workouts',
      description:
        'The science and application of caffeine as an ergogenic aid, along with the evaluation of multi-ingredient pre-workout supplements, their common ingredients, and evidence-based dosing.',
      details: [
        'Caffeine is the most widely used psychoactive substance in the world and one of the most well-supported ergogenic aids in sports science, with over 1,000 studies demonstrating performance benefits across endurance, strength, and power activities.',
        'The optimal caffeine dose for performance enhancement is 3-6 mg/kg bodyweight consumed 30-60 minutes before exercise (e.g., 200-400 mg for a 70 kg person). Higher doses (>9 mg/kg) do not provide additional benefit and increase side effect risk.',
        'Caffeine improves performance through multiple mechanisms: blocking adenosine receptors (reducing perceived fatigue), increasing catecholamine release (adrenaline, noradrenaline), enhancing calcium release in muscle cells (improving contractile force), and increasing fat oxidation.',
        'Caffeine tolerance develops with regular use, potentially blunting the ergogenic effect. Cycling caffeine (2 weeks on, 1 week off, or reserving use for key sessions) may help maintain sensitivity, though research is mixed.',
        'Common pre-workout ingredients beyond caffeine include beta-alanine (3.2-6.4 g/day for buffering acid; causes harmless tingling/paresthesia), citrulline malate (6-8g for blood flow and endurance), and betaine (2.5g for power output). Many other ingredients are underdosed or lack strong evidence.',
        'Proprietary blends on pre-workout labels list ingredients without individual doses, making it impossible to assess whether effective doses are included. Choose products with transparent labeling and disclosed doses of each ingredient.',
        'Pre-workout supplements should not be relied upon as a crutch for poor sleep, inadequate nutrition, or lack of motivation. If you need a pre-workout to function in the gym, address the underlying lifestyle factor first.',
        'Stimulant-free pre-workouts (containing citrulline, beta-alanine, betaine without caffeine) are an option for those training in the evening or who are caffeine-sensitive, providing performance support without disrupting sleep.',
      ],
    },
    {
      name: 'Hydration for Athletes',
      description:
        'Advanced hydration strategies for athletic performance, including sweat rate calculation, fluid replacement protocols, electrolyte needs, and practical approaches for different sports and environmental conditions.',
      details: [
        'Individual sweat rates typically range from 0.5-2.5 liters per hour during exercise and vary with intensity, fitness level, body size, environmental temperature, humidity, and acclimatization status. Determine your sweat rate by weighing before and after a 1-hour session.',
        'The goal during exercise is to limit body mass loss to less than 2% of bodyweight through fluid intake, while avoiding overdrinking that could lead to hyponatremia. Drinking to thirst is generally appropriate for most recreational athletes.',
        'Sodium is the primary electrolyte lost in sweat (average 0.5-1.5 g/L of sweat) and must be replaced during prolonged exercise (>60-90 minutes). Sports drinks typically contain 300-800 mg sodium per liter, though heavy/salty sweaters may need more.',
        'A carbohydrate concentration of 6-8% in sports drinks (60-80g/L) optimizes both fluid absorption and energy delivery. Higher concentrations slow gastric emptying and can cause gastrointestinal distress.',
        'In hot and humid conditions, begin hydrating 2-4 hours before exercise (5-7 mL/kg), consume cool fluids during exercise (cool beverages empty the stomach 25% faster than warm ones), and plan for 125-150% fluid replacement post-exercise.',
        'Glycerol hyperhydration (1.2 g/kg with 26 mL/kg of fluid 60-90 minutes pre-exercise) is a strategy used by some endurance athletes to super-hydrate before events in hot conditions, though it may cause gastrointestinal discomfort.',
        'Urine specific gravity (measured with a refractometer) is a more accurate hydration assessment than urine color alone: values below 1.020 indicate adequate hydration, while values above 1.025 suggest significant dehydration.',
      ],
    },
    {
      name: 'Carb Loading',
      description:
        'The strategic increase of carbohydrate intake in the days before endurance competition to maximize muscle and liver glycogen stores, supporting sustained high-intensity performance during events lasting 90+ minutes.',
      details: [
        'Classic carb loading protocols involve 10-12 g/kg/day of carbohydrates for 36-48 hours before competition, combined with a training taper, increasing muscle glycogen stores by 50-100% above normal levels.',
        'Modern approaches have replaced the older depletion-loading method (which included exhaustive exercise and 3 days of low-carb eating before loading) with a simpler protocol of just increasing carbohydrate intake while reducing training volume for 2-3 days.',
        'Carb loading is most beneficial for endurance events lasting 90+ minutes (marathon, triathlon, cycling road races, cross-country skiing). It provides minimal benefit for events under 60-90 minutes where normal glycogen stores are sufficient.',
        'Practical carb-loading foods include white rice, pasta, bread, bagels, potatoes, pancakes, fruit juice, sports drinks, and low-fiber cereals. Choosing low-fiber, low-fat, easily digestible carb sources minimizes gastrointestinal issues on race day.',
        'Women may respond less dramatically to carb loading than men due to hormonal influences on glycogen storage, but still benefit from increased carbohydrate intake before endurance competition, particularly during the follicular phase of the menstrual cycle.',
        'Carb loading results in 1-3 lb of temporary weight gain due to water stored with glycogen (approximately 3g of water per 1g of glycogen). This extra water also provides a hydration buffer during prolonged exercise.',
        'A pre-competition meal 2-4 hours before the event should provide 1-4 g/kg of carbohydrates. During the event, consume 30-60g of carbohydrates per hour (up to 90g/hour using glucose-fructose combinations for events over 2.5 hours).',
      ],
    },
    {
      name: 'Electrolytes',
      description:
        'Electrically charged minerals essential for nerve conduction, muscle contraction, fluid balance, and pH regulation, with increased importance for athletes due to losses through sweat during exercise.',
      details: [
        'The primary electrolytes for athletic performance are sodium (Na+), potassium (K+), magnesium (Mg2+), calcium (Ca2+), and chloride (Cl-). Sodium and chloride are lost in the highest concentrations through sweat.',
        'Sweat sodium concentration varies between individuals from 200 to 2,000+ mg/L, with an average of approximately 900 mg/L. Heavy/salty sweaters (visible white residue on clothing) may need significantly more sodium replacement than average.',
        'Sodium loading before exercise in the heat (consuming an additional 1,500-3,000 mg of sodium in the hours before competition with fluids) can expand plasma volume and improve thermoregulation and endurance performance.',
        'Potassium (recommended 3,500-4,700 mg/day) works in concert with sodium to maintain fluid balance and nerve/muscle function. Potassium-rich foods include bananas (422 mg), potatoes (926 mg), spinach (839 mg per cup), and avocados (975 mg).',
        'Magnesium is involved in muscle relaxation, energy production (ATP metabolism), and sleep quality. Exercise increases magnesium requirements, and deficiency (common in 50%+ of the population) can cause cramping, fatigue, and impaired recovery.',
        'Electrolyte supplements come in various forms: tablets (convenient for adding to water bottles), powders (customizable concentration), and ready-made sports drinks. For events over 60-90 minutes, electrolyte-containing drinks are preferred over plain water.',
        'Muscle cramping during exercise has traditionally been attributed to electrolyte depletion, but current evidence suggests the primary cause is neuromuscular fatigue rather than electrolyte imbalance. However, maintaining electrolyte balance remains important for overall performance and health.',
        'Post-exercise electrolyte replacement is critical for recovery: consuming sodium with fluids enhances fluid retention (plain water triggers a diuretic response), and replacing the approximately 1,000-2,000 mg of sodium lost per liter of sweat supports complete rehydration.',
      ],
    },
    {
      name: 'Supplement Safety & Regulation',
      description:
        'Understanding the regulatory landscape of dietary supplements, evaluating product quality and safety, identifying evidence-based supplements, and avoiding harmful or contaminated products.',
      details: [
        'In the United States, dietary supplements are regulated under DSHEA (1994) and do not require FDA pre-market approval for safety or efficacy. Manufacturers are responsible for their own quality control, and the FDA only intervenes after adverse events are reported.',
        'Third-party testing organizations (NSF Certified for Sport, Informed Sport, USP Verified, BSCG) independently test supplements for banned substances, contaminants (heavy metals, pesticides), and label accuracy. Athletes subject to anti-doping testing should only use third-party certified products.',
        'A 2018 study found that approximately 12-15% of commercial supplements contained substances not listed on the label, and 20-25% contained banned substances (often stimulants or pro-hormones). These rates are higher in products marketed for weight loss and muscle building.',
        'Evidence-based supplements with strong research support include: creatine monohydrate, caffeine, beta-alanine, sodium bicarbonate, nitrate (beetroot juice), whey protein, and vitamin D (if deficient). This is a short list compared to the thousands of products marketed.',
        'Warning signs of unreliable supplements include: proprietary blends hiding ingredient doses, claims of "proprietary technology" without published research, extreme marketing claims ("gain 10 lbs of muscle in 2 weeks"), testimonials from paid athletes, and prices far below market average (suggesting low-quality ingredients).',
        'Contamination with banned substances occurs through several pathways: intentional adulteration to make products "work," cross-contamination during manufacturing on shared equipment, and contaminated raw ingredient supply chains.',
        'The supplement industry generates over $50 billion annually in the US alone. The vast majority of products provide no benefit beyond a balanced diet, and many rely on cherry-picked studies, misleading statistics, or proprietary research to support marketing claims.',
        'Before starting any supplement, consult with a healthcare provider if you are pregnant, nursing, taking medications, or have pre-existing medical conditions. Many supplements interact with medications (e.g., vitamin K with blood thinners, St. John\'s Wort with antidepressants).',
      ],
    },
  ],
  keyTerms: [
    {
      term: 'Ergogenic Aid',
      definition:
        'Any substance, technique, or device that enhances energy production, use, or recovery beyond normal physiological capacity, thereby improving athletic performance. Includes supplements (creatine, caffeine), strategies (carb loading), and equipment.',
    },
    {
      term: 'Bioavailability',
      definition:
        'The proportion of an ingested nutrient or supplement that is absorbed into the bloodstream and available for physiological use. Varies by compound form, food matrix, and individual digestive function.',
    },
    {
      term: 'Anabolic Window',
      definition:
        'The period after exercise during which nutrient intake is believed to be most effective for recovery and muscle building. Research shows it is wider than initially thought (extending 2-4+ hours post-exercise), but consuming protein and carbohydrates in this window is still beneficial.',
    },
    {
      term: 'PDCAAS (Protein Digestibility Corrected Amino Acid Score)',
      definition:
        'A method of evaluating protein quality based on amino acid requirements and digestibility. Scores range from 0 to 1.0, with 1.0 being highest quality. Whey, casein, soy, and egg all score 1.0; most plant proteins score 0.4-0.8.',
    },
    {
      term: 'DIAAS (Digestible Indispensable Amino Acid Score)',
      definition:
        'The newer and more accurate protein quality scoring method (replacing PDCAAS), evaluating digestibility at the ileal level rather than fecal level. Scores can exceed 1.0 for high-quality proteins. Whey scores approximately 1.09; pea protein approximately 0.82.',
    },
    {
      term: 'Phosphocreatine (PCr)',
      definition:
        'A high-energy phosphate compound stored in muscle that rapidly regenerates ATP during maximal-effort exercise lasting 0-10 seconds. Creatine supplementation increases PCr stores by 20-40%, directly improving high-intensity exercise capacity.',
    },
    {
      term: 'mTOR (Mechanistic Target of Rapamycin)',
      definition:
        'A key cellular signaling pathway that regulates muscle protein synthesis. Activated by leucine intake, mechanical tension from resistance training, and insulin. The primary molecular switch for initiating the muscle-building response.',
    },
    {
      term: 'Muscle Protein Synthesis (MPS)',
      definition:
        'The process of building new muscle proteins, the key biological mechanism underlying muscle repair and growth. Stimulated by resistance training and protein (particularly leucine) intake. Elevated for 24-72 hours post-exercise.',
    },
    {
      term: 'Muscle Protein Breakdown (MPB)',
      definition:
        'The process of degrading muscle proteins. Net muscle growth occurs when MPS exceeds MPB over time. Resistance training initially increases both MPS and MPB, but protein intake shifts the balance toward net synthesis.',
    },
    {
      term: 'Glycogen Supercompensation',
      definition:
        'The increase of muscle glycogen stores above normal resting levels (by 50-100%) achieved through carbohydrate loading protocols. Extends time to exhaustion in endurance events lasting 90+ minutes.',
    },
    {
      term: 'Beta-Alanine',
      definition:
        'An amino acid supplement (effective dose: 3.2-6.4 g/day for 4+ weeks) that increases muscle carnosine levels, buffering hydrogen ions during high-intensity exercise. Improves performance in activities lasting 1-4 minutes by 2-3%. Causes harmless tingling (paresthesia).',
    },
    {
      term: 'Citrulline Malate',
      definition:
        'A compound combining the amino acid L-citrulline with malic acid. At doses of 6-8g pre-workout, it increases nitric oxide production, improving blood flow, reducing fatigue, and enhancing endurance performance and recovery between sets.',
    },
    {
      term: 'Nitric Oxide (NO)',
      definition:
        'A signaling molecule that causes vasodilation (blood vessel widening), increasing blood flow, nutrient delivery, and waste removal in working muscles. Boosted by dietary nitrate (beetroot juice), citrulline, and arginine.',
    },
    {
      term: 'Adenosine Triphosphate (ATP)',
      definition:
        'The primary energy currency of cells. Muscles store only enough ATP for 1-3 seconds of maximal effort; it must be continuously regenerated through phosphocreatine, glycolysis, and oxidative phosphorylation pathways.',
    },
    {
      term: 'WADA (World Anti-Doping Agency)',
      definition:
        'The international organization responsible for the World Anti-Doping Code and the list of prohibited substances in sport. Athletes should ensure supplements are free of WADA-banned substances through third-party testing.',
    },
    {
      term: 'NSF Certified for Sport',
      definition:
        'A third-party certification program that tests supplements for banned substances, label accuracy, and contaminant levels. One of the most recognized and rigorous certifications, required by many professional sports leagues.',
    },
    {
      term: 'Informed Sport',
      definition:
        'A global quality assurance program for sports nutrition products that tests every batch of a supplement for substances prohibited in sport. Widely recognized by athletes and anti-doping organizations worldwide.',
    },
    {
      term: 'Sweat Rate',
      definition:
        'The volume of sweat produced per unit of time during exercise, typically measured in liters per hour. Determined by weighing before and after exercise (accounting for fluid intake). Ranges from 0.5-2.5 L/hour depending on intensity, environment, and individual factors.',
    },
    {
      term: 'Hyponatremia',
      definition:
        'A dangerous condition where blood sodium concentration falls below 135 mmol/L, typically caused by excessive water intake without adequate sodium during prolonged exercise. Symptoms include nausea, headache, confusion, and in severe cases, seizures and death.',
    },
    {
      term: 'Paresthesia',
      definition:
        'A harmless tingling or prickling sensation on the skin, commonly experienced with beta-alanine supplementation. Caused by beta-alanine binding to sensory nerve receptors. Subsides within 60-90 minutes and can be minimized by dividing the daily dose.',
    },
    {
      term: 'Proprietary Blend',
      definition:
        'A combination of ingredients listed on a supplement label with only the total weight disclosed, hiding individual ingredient doses. Makes it impossible for consumers to verify effective dosing and is often a red flag for underdosed key ingredients.',
    },
    {
      term: 'Gastric Emptying Rate',
      definition:
        'The speed at which food and fluids leave the stomach and enter the small intestine for absorption. Affected by caloric density, osmolality, volume, temperature, and macronutrient composition. Important for timing pre-workout nutrition.',
    },
    {
      term: 'Osmolality',
      definition:
        'The concentration of dissolved particles in a solution, critical for sports drink formulation. Hypotonic solutions (<280 mOsm/kg) are absorbed fastest, isotonic (280-330 mOsm/kg) balance absorption and energy delivery, and hypertonic (>330 mOsm/kg) provide more energy but are absorbed slower.',
    },
    {
      term: 'Branched-Chain Amino Acids (BCAAs)',
      definition:
        'Three essential amino acids (leucine, isoleucine, valine) with a branched molecular structure, metabolized primarily in muscle tissue rather than the liver. Comprise approximately 35% of essential amino acids in muscle protein.',
    },
    {
      term: 'Essential Amino Acids (EAAs)',
      definition:
        'The nine amino acids the body cannot synthesize: histidine, isoleucine, leucine, lysine, methionine, phenylalanine, threonine, tryptophan, and valine. All nine must be present for complete muscle protein synthesis.',
    },
    {
      term: 'Sodium Bicarbonate',
      definition:
        'An evidence-based ergogenic aid (300 mg/kg taken 60-90 minutes pre-exercise) that buffers blood pH during high-intensity exercise lasting 1-7 minutes, improving performance by 1-3%. Common side effect is gastrointestinal distress.',
    },
    {
      term: 'Beetroot Juice (Dietary Nitrate)',
      definition:
        'A natural source of inorganic nitrate that is converted to nitric oxide in the body, improving exercise efficiency, reducing oxygen cost of exercise by 3-5%, and enhancing endurance performance. Effective dose is 300-600 mg of nitrate (typically 500 mL of beetroot juice) consumed 2-3 hours before exercise.',
    },
    {
      term: 'Caffeine Half-Life',
      definition:
        'The time required for the body to eliminate half of the consumed caffeine, averaging 5-6 hours but ranging from 1.5-9.5 hours based on genetics (CYP1A2 gene), age, liver function, and concurrent medications. Guides timing to avoid sleep disruption.',
    },
    {
      term: 'DSHEA (Dietary Supplement Health and Education Act)',
      definition:
        'A 1994 US federal law that defines dietary supplements and sets the regulatory framework. Critically, it places the burden of proof for safety on the FDA (to prove harm) rather than on manufacturers (to prove safety or efficacy before sale).',
    },
    {
      term: 'Collagen Peptides',
      definition:
        'Hydrolyzed collagen protein supplements marketed for joint, skin, and connective tissue health. While collagen is abundant in the body, its low leucine content makes it a poor choice for muscle protein synthesis. Moderate evidence supports 10-15g daily for joint health.',
    },
    {
      term: 'Adaptogen',
      definition:
        'A category of herbs and mushrooms (ashwagandha, rhodiola, cordyceps) claimed to help the body "adapt" to stress and improve resilience. Ashwagandha has the strongest evidence, with studies showing modest improvements in strength (10%), VO2max, and stress markers.',
    },
  ],
  tips: [
    'Get your nutrition fundamentals right before considering supplements. A well-structured diet providing adequate protein (1.6-2.2 g/kg/day), sufficient carbohydrates for your activity level, healthy fats, and abundant fruits and vegetables covers 90% of your nutritional needs.',
    'Creatine monohydrate (3-5g daily) is the single most effective and well-researched supplement for strength and power athletes. Take it consistently every day, timing does not matter significantly.',
    'Consume 20-40g of protein within 2-3 hours after training to support muscle protein synthesis. If you train fasted or your last meal was more than 3-4 hours prior, prioritize post-workout protein intake sooner.',
    'Use caffeine strategically (3-6 mg/kg, 30-60 min pre-training) for performance benefits, but avoid consuming it within 8-10 hours of bedtime to protect sleep quality, which is more important for recovery than any supplement.',
    'Choose supplements with third-party testing certifications (NSF Certified for Sport, Informed Sport) to minimize the risk of contamination with banned or harmful substances.',
    'Be skeptical of supplements with dramatic marketing claims. If a product promises results that sound too good to be true, it almost certainly is. The most effective supplements (creatine, caffeine, protein) are inexpensive and well-established.',
    'Calculate your individual sweat rate by weighing yourself before and after a 1-hour workout (accounting for fluid consumed). This gives you a personalized hydration target that is far more useful than generic guidelines.',
    'For endurance events over 90 minutes, practice your race-day nutrition strategy during training. Gastrointestinal tolerance for carbohydrates and fluids during exercise improves with practice and should not be tested for the first time in competition.',
    'Distribute protein intake across 3-5 meals throughout the day (20-40g per meal) rather than consuming the majority in one or two large meals. This maximizes total daily muscle protein synthesis.',
    'Read supplement labels carefully: avoid proprietary blends, check for effective dosing of key ingredients, and compare the cost per effective dose rather than cost per serving, as many products under-dose active ingredients.',
  ],
  faqs: [
    {
      question: 'Do I need protein powder to build muscle?',
      answer:
        'No. Protein powder is a convenient food product, not a requirement. If you can meet your daily protein target (1.6-2.2 g/kg/day) through whole foods (chicken, fish, eggs, dairy, legumes), protein powder provides no additional benefit. However, protein powder is a practical and cost-effective tool for people who struggle to eat enough protein, need quick post-workout nutrition, or have busy schedules that limit meal preparation.',
    },
    {
      question: 'When should I take creatine?',
      answer:
        'Timing of creatine supplementation does not significantly affect its efficacy. The most important factor is taking 3-5g daily with consistency. Some research suggests a slight advantage to post-workout consumption (taken with a protein and carbohydrate meal), but the difference is marginal. Take it whenever is most convenient and sustainable for you to maintain the daily habit.',
    },
    {
      question: 'Are pre-workout supplements safe?',
      answer:
        'Most pre-workouts from reputable brands are safe for healthy adults when used as directed. However, concerns include: (1) excessive caffeine content (some products contain 300-400+ mg per serving), (2) proprietary blends hiding ingredient doses, (3) potential contamination in low-quality products, and (4) building psychological dependency. Start with half the recommended dose to assess tolerance, avoid products with undisclosed ingredient amounts, and choose third-party tested options.',
    },
    {
      question: 'Is creatine safe for long-term use?',
      answer:
        'Yes. Creatine monohydrate is one of the most extensively studied supplements in history, with research spanning over 30 years. Studies of up to 5 years of continuous use show no adverse effects on kidney function, liver function, or cardiovascular health in healthy individuals. The International Society of Sports Nutrition considers creatine monohydrate safe and effective for both short- and long-term use.',
    },
    {
      question: 'Should I take BCAAs?',
      answer:
        'For most people, BCAA supplementation is unnecessary and not cost-effective. If you consume adequate total daily protein (1.6+ g/kg/day) from complete protein sources (which naturally contain BCAAs), additional BCAA supplementation provides no measurable benefit for muscle growth or recovery. The one scenario where BCAAs may help is during fasted endurance training lasting 90+ minutes. Otherwise, spend that money on quality food or whey protein.',
    },
    {
      question: 'How much water should I drink during a workout?',
      answer:
        'Aim for 400-800 mL (14-28 oz) per hour during exercise, adjusted based on your sweat rate, exercise intensity, and environmental conditions. For sessions under 60 minutes at moderate intensity, drinking to thirst is adequate. For longer or more intense sessions, particularly in heat, use a more structured approach. The best method is to determine your individual sweat rate and develop a personalized plan.',
    },
    {
      question: 'Does caffeine actually improve exercise performance?',
      answer:
        'Yes, caffeine is one of the most well-documented ergogenic aids in sports science. At doses of 3-6 mg/kg bodyweight consumed 30-60 minutes before exercise, caffeine improves endurance performance by 2-4%, strength and power by 2-7%, sprint performance, reaction time, and focus. These benefits have been consistently demonstrated across over 1,000 peer-reviewed studies. The effects come from blocking adenosine (reducing fatigue perception), increasing catecholamines, and enhancing muscle contractility.',
    },
    {
      question: 'What should I eat on race day?',
      answer:
        'For endurance events: Eat a familiar, carbohydrate-rich, low-fiber, low-fat meal 2-4 hours before (1-4 g/kg of carbs, e.g., toast with banana and honey, oatmeal with berries). Avoid anything new. During events over 60-90 minutes, consume 30-60g of carbohydrates per hour (gels, sports drink, banana) and 400-800 mL of fluid with electrolytes. For strength events: a moderate meal with protein and carbs 2-3 hours before, with caffeine 30-60 minutes pre-competition if tolerated.',
    },
    {
      question: 'Are sports drinks necessary or is water enough?',
      answer:
        'For exercise lasting less than 60 minutes at moderate intensity, water is sufficient. For sessions longer than 60-90 minutes, or intense exercise in hot conditions, sports drinks providing carbohydrates (30-60g/hour) and electrolytes (especially sodium) improve performance and delay fatigue compared to water alone. For everyday gym training of 45-75 minutes, water is typically adequate unless you are a heavy sweater or training in extreme heat.',
    },
    {
      question: 'How do I know if a supplement is contaminated?',
      answer:
        'You cannot tell by taste, smell, or appearance. The only reliable way to reduce contamination risk is to choose products certified by independent testing organizations: NSF Certified for Sport, Informed Sport, BSCG, or USP Verified. These organizations test every batch for banned substances, heavy metals, and label accuracy. Additionally, purchase from established, reputable brands rather than unknown companies, and be cautious of products with extreme claims or unusually low prices.',
    },
    {
      question: 'What is the best protein powder for muscle building?',
      answer:
        'Whey protein isolate is generally considered the gold standard due to its rapid absorption, high leucine content (10-12%), complete amino acid profile, and strong research base. However, whey concentrate is nearly as effective at a lower cost. Casein is superior for sustained release (before bed). For plant-based options, a pea-rice protein blend with added leucine comes closest to matching whey\'s efficacy. Ultimately, the "best" protein is one you tolerate well and consume consistently.',
    },
    {
      question: 'Can I take too much protein?',
      answer:
        'For healthy individuals with normal kidney function, high protein intakes (up to 3.3 g/kg/day) have been studied without adverse effects on kidney or liver function. However, protein above 2.2 g/kg/day provides diminishing returns for muscle building and displaces other important macronutrients (carbohydrates for energy, fats for hormones). Individuals with pre-existing kidney disease should consult a physician, as high protein intake can accelerate renal decline in compromised kidneys.',
    },
    {
      question: 'Is carb loading effective for all types of exercise?',
      answer:
        'No. Carb loading is primarily beneficial for endurance events lasting 90+ minutes (marathon, triathlon, long-distance cycling) where glycogen depletion is a limiting factor. For strength training, sprinting, team sports, or any activity lasting less than 60-90 minutes, normal glycogen stores are adequate if you are consuming sufficient daily carbohydrates. Carb loading for a 30-minute gym session provides no performance benefit and just adds unnecessary calories.',
    },
    {
      question: 'How important is post-workout nutrition timing?',
      answer:
        'Important but not as critical as once believed. If you ate a balanced meal containing protein and carbohydrates 2-3 hours before training, amino acids from that meal are still circulating post-workout, making immediate consumption less urgent. However, if you trained fasted or your last meal was 4+ hours ago, consuming protein (20-40g) soon after training (within 1-2 hours) becomes more important. For athletes training twice per day, post-workout nutrition timing is critical for glycogen replenishment.',
    },
    {
      question: 'Are natural supplements better than synthetic ones?',
      answer:
        'Not inherently. "Natural" and "synthetic" are marketing terms with limited relevance to efficacy or safety. Creatine monohydrate is synthetically produced and is the most effective and well-studied supplement available. Some natural compounds (beetroot juice, tart cherry juice, caffeine from coffee) are effective, but the "natural" label does not guarantee safety (many toxic substances are natural) or superiority. Evaluate supplements based on evidence from peer-reviewed research, not marketing claims about their origin.',
    },
  ],
};
