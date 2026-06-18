import type { BookResource, WebResource } from '../types';

export const bookResources: BookResource[] = [
  // ─── Exercise & Strength Training Books ─────────────────────────────
  {
    title: 'Starting Strength: Basic Barbell Training',
    author: 'Mark Rippetoe',
    category: 'Exercise & Strength Training',
    description:
      'The definitive guide to barbell-based strength training for beginners. Provides exhaustive biomechanical analysis and coaching cues for the squat, deadlift, bench press, overhead press, and power clean, along with a simple linear progression program.',
    keyTakeaways: [
      'The squat, deadlift, bench press, overhead press, and power clean form the foundation of barbell strength training.',
      'Novice lifters can add weight to the bar every session (linear progression) for months before more advanced programming is needed.',
      'Proper bar path, joint angles, and leverages are critical for safe and efficient lifting; detailed biomechanical analysis is provided for each lift.',
      'Strength is the most general athletic adaptation; it improves performance in virtually all physical activities.',
      'The program emphasizes compound movements over isolation exercises, training the body as an integrated system.',
    ],
  },
  {
    title: 'Strength Training Anatomy',
    author: 'Frederic Delavier',
    category: 'Exercise & Strength Training',
    description:
      'A richly illustrated anatomy reference showing the muscles involved in over 600 exercises. Detailed anatomical drawings reveal which muscles are primary movers, synergists, and stabilizers during each movement, making it an invaluable visual learning tool for trainers and athletes.',
    keyTakeaways: [
      'Visual understanding of which muscles are activated during specific exercises improves exercise selection and programming.',
      'Anatomical variations between individuals (limb length, muscle insertion points) affect exercise mechanics and optimal form.',
      'Understanding agonist, antagonist, synergist, and stabilizer roles helps identify muscle imbalances and program accordingly.',
      'Both free weight and machine exercises are covered with anatomical detail, allowing informed choices between modalities.',
      'Common injury mechanisms are illustrated, helping trainers understand and prevent exercise-related injuries.',
    ],
  },
  {
    title: 'Science and Practice of Strength Training',
    author: 'Vladimir Zatsiorsky & William Kraemer',
    category: 'Exercise & Strength Training',
    description:
      'An academic textbook bridging exercise physiology and practical strength training. Covers the biomechanics of force production, neuromuscular adaptation mechanisms, periodization models, and training methodology at a level suitable for coaches, researchers, and advanced athletes.',
    keyTakeaways: [
      'Strength gains result from both neural adaptations (motor unit recruitment, rate coding, synchronization) and muscular hypertrophy.',
      'The three methods of maximal force development: maximal effort method, dynamic effort method, and repeated effort method.',
      'Periodization is necessary because the body cannot simultaneously develop all fitness qualities at maximal rates.',
      'The concept of training residuals explains how quickly different fitness qualities decay during detraining.',
      'Conjugate sequence system (training multiple qualities simultaneously) is presented as an alternative to traditional linear periodization.',
    ],
  },
  {
    title: 'Becoming a Supple Leopard',
    author: 'Kelly Starrett',
    category: 'Exercise & Strength Training',
    description:
      'A comprehensive guide to movement quality, mobility, and self-maintenance for athletes. Provides a systematic approach to identifying and resolving movement restrictions, with hundreds of mobilization techniques organized by body region and movement archetype.',
    keyTakeaways: [
      'Movement quality should be prioritized over intensity or volume; poor positions under load lead to injury.',
      'The "tunnel" concept: organize the spine first (bracing sequence), then address peripheral joint positions.',
      'Mobility restrictions can be addressed through soft tissue work (smashing), joint capsule mobilization, and motor control drills.',
      'Every athlete should perform daily mobility maintenance, spending 10-15 minutes addressing tissue restrictions.',
      'Movement archetypes (squat, hinge, push, pull, overhead) have universal principles of good position that apply across sports.',
    ],
  },
  {
    title: 'The New Encyclopedia of Modern Bodybuilding',
    author: 'Arnold Schwarzenegger',
    category: 'Exercise & Strength Training',
    description:
      'The classic comprehensive reference on bodybuilding training, nutrition, and competition preparation. Covers exercise technique for every muscle group, training splits, competition preparation, and the history and philosophy of bodybuilding.',
    keyTakeaways: [
      'High-volume, multi-angle training with progressive overload is the foundation of bodybuilding hypertrophy programs.',
      'Mind-muscle connection (focusing attention on the target muscle) enhances muscle activation during isolation exercises.',
      'Training splits (push/pull/legs, body part splits) allow high volume per muscle group with adequate recovery between sessions.',
      'Nutrition, posing, and mental preparation are equally important to training for competitive bodybuilding success.',
      'Consistency and long-term commitment (years of dedicated training) are required for significant physique development.',
    ],
  },
  {
    title: 'Periodization: Theory and Methodology of Training',
    author: 'Tudor Bompa & G. Gregory Haff',
    category: 'Exercise & Strength Training',
    description:
      'The foundational textbook on periodization, the systematic planning of training variation over time. Covers annual planning, macrocycles, mesocycles, and microcycles for strength, endurance, speed, and sport-specific performance across competitive seasons.',
    keyTakeaways: [
      'Periodization is the systematic variation of training volume, intensity, and specificity across defined time periods to optimize performance and recovery.',
      'The annual plan divides the training year into preparatory, competitive, and transition phases, each with distinct objectives.',
      'Macrocycles (months to a year), mesocycles (3-6 weeks), and microcycles (1 week) provide progressively finer planning granularity.',
      'Biomotor abilities (strength, endurance, speed, flexibility, coordination) must be developed in a logical sequence based on their interdependencies.',
      'Peaking involves tapering training volume while maintaining intensity to maximize performance at targeted competitions.',
    ],
  },

  // ─── Nutrition Books ────────────────────────────────────────────────
  {
    title: 'Renaissance Diet 2.0',
    author: 'Dr. Mike Israetel, Dr. Melissa Davis & Dr. Jen Case',
    category: 'Nutrition',
    description:
      'An evidence-based nutrition guide for body composition and athletic performance. Systematically ranks nutrition priorities (calories, macros, nutrient timing, food composition, supplements) and provides practical recommendations for fat loss, muscle gain, and maintenance phases.',
    keyTakeaways: [
      'Calorie balance is the most important factor for body composition; macronutrient ratios are second; meal timing and food quality follow.',
      'Protein intake of 1.6-2.2 g/kg body weight per day is recommended for maximizing muscle retention during fat loss and growth during surplus.',
      'Diet phases (fat loss, maintenance, muscle gain) should be cycled strategically with planned transitions between phases.',
      'Adherence and sustainability are more important than nutritional perfection; the best diet is one you can consistently follow.',
      'Supplement hierarchy: most supplements are unnecessary; creatine, caffeine, and protein powder are among the few with strong evidence.',
    ],
  },
  {
    title: 'Precision Nutrition Level 1 Certification Textbook',
    author: 'Dr. John Berardi & Ryan Andrews',
    category: 'Nutrition',
    description:
      'The comprehensive curriculum for the Precision Nutrition coaching certification. Covers nutritional science, behavioral coaching, habit-based nutrition change, and practical coaching strategies for helping clients achieve sustainable dietary improvements.',
    keyTakeaways: [
      'Habit-based coaching (changing one small behavior at a time) produces more sustainable results than prescriptive meal plans.',
      'Nutritional coaching is about meeting clients where they are, not where you want them to be.',
      'Hand-sized portion guides (palm for protein, fist for vegetables, cupped hand for carbs, thumb for fats) simplify nutrition without calorie counting.',
      'The coaching relationship and communication skills are as important as nutritional knowledge for client outcomes.',
      'Nutritional needs are highly individual; factors like genetics, activity level, stress, sleep, and gut health all influence optimal nutrition.',
    ],
  },
  {
    title: 'Sports Nutrition: A Handbook for Professionals',
    author: 'Christine Rosenbloom & Shawn Coleman',
    category: 'Nutrition',
    description:
      'A clinical reference for sports nutrition professionals covering energy needs assessment, macronutrient periodization, hydration strategies, sport-specific nutrition, supplement evaluation, and special population considerations including youth athletes, vegetarian athletes, and those with eating disorders.',
    keyTakeaways: [
      'Energy availability (energy intake minus exercise energy expenditure) must remain above 30 kcal/kg fat-free mass to avoid Relative Energy Deficiency in Sport (RED-S).',
      'Carbohydrate periodization (matching carb intake to training demands) optimizes both performance and metabolic adaptation.',
      'Hydration strategies should be individualized based on sweat rate testing; general guidelines are a starting point, not prescriptions.',
      'Supplement recommendations should be evidence-based; most supplements lack sufficient evidence to justify use.',
      'Sport-specific nutrition strategies differ significantly between endurance, strength/power, weight-class, and aesthetic sports.',
    ],
  },
  {
    title: 'The Obesity Code',
    author: 'Dr. Jason Fung',
    category: 'Nutrition',
    description:
      'A detailed examination of the hormonal (particularly insulin) drivers of obesity. Challenges the calories-in-calories-out model by emphasizing insulin resistance as a primary cause of weight gain and argues for dietary strategies (including intermittent fasting) that address hormonal dysfunction.',
    keyTakeaways: [
      'Insulin is a key hormonal driver of fat storage; chronically elevated insulin levels promote weight gain and resist weight loss.',
      'Insulin resistance develops from chronic hyperinsulinemia, creating a feedback loop that makes obesity self-reinforcing.',
      'Intermittent fasting reduces insulin levels and may improve insulin sensitivity, independent of total caloric reduction.',
      'Refined carbohydrates and sugar are primary dietary drivers of hyperinsulinemia; reducing them can improve metabolic health.',
      'The "calories in, calories out" model is incomplete; hormonal context (especially insulin) determines how calories are partitioned.',
    ],
  },
  {
    title: 'How Not to Die',
    author: 'Dr. Michael Greger',
    category: 'Nutrition',
    description:
      'A comprehensive review of the evidence linking dietary patterns to the prevention and reversal of the leading causes of death. Advocates for a whole-food, plant-based diet and provides the "Daily Dozen" checklist of foods associated with optimal health outcomes.',
    keyTakeaways: [
      'A whole-food, plant-based diet is associated with reduced risk of heart disease, cancer, diabetes, and other leading causes of death.',
      'The "Daily Dozen" checklist (beans, berries, fruits, cruciferous vegetables, greens, other vegetables, flaxseed, nuts, spices, whole grains, beverages, exercise) provides a practical daily guide.',
      'Dietary fiber is critical for gut health, cholesterol management, and blood sugar control; most people consume far less than recommended.',
      'Specific foods (turmeric, cruciferous vegetables, berries, legumes, mushrooms) have particularly strong evidence for disease prevention.',
      'Nutritional science should focus on foods, not just nutrients; whole foods contain synergistic compounds that isolated supplements cannot replicate.',
    ],
  },
  {
    title: 'Metabolical: The Lure and the Lies of Processed Food, Nutrition, and Modern Medicine',
    author: 'Dr. Robert Lustig',
    category: 'Nutrition',
    description:
      'An examination of how processed food and added sugar drive metabolic disease. Argues that the food industry, healthcare system, and government policy have failed to address the root causes of the chronic disease epidemic, and provides a framework for distinguishing "real food" from processed food.',
    keyTakeaways: [
      'Processed food and added sugar are primary drivers of metabolic syndrome, which underlies most chronic diseases.',
      'Not all calories are metabolically equal; fructose and glucose are processed differently by the liver, with excess fructose promoting liver fat accumulation.',
      'The "food industry playbook" parallels the tobacco industry in manufacturing doubt, lobbying against regulation, and engineering addictive products.',
      'Real food can be defined by two criteria: it protects the liver (fiber, omega-3s) and feeds the gut (fiber, prebiotics).',
      'Metabolic health (insulin sensitivity, low inflammation, healthy liver function) is a better health metric than body weight alone.',
    ],
  },

  // ─── Health & Wellness Books ────────────────────────────────────────
  {
    title: 'Why We Sleep',
    author: 'Matthew Walker',
    category: 'Health & Wellness',
    description:
      'A comprehensive exploration of sleep science covering the mechanisms, stages, and critical functions of sleep, the consequences of sleep deprivation on health and cognitive function, and evidence-based strategies for improving sleep quality.',
    keyTakeaways: [
      'Sleep is the single most effective thing you can do for brain and body health; no biological function is unaffected by sleep deprivation.',
      'Both NREM (deep) sleep and REM (dreaming) sleep serve distinct, critical functions for memory consolidation, emotional regulation, and physical repair.',
      'Sleeping less than 7 hours per night is associated with increased risk of cancer, heart disease, Alzheimer\'s, diabetes, and all-cause mortality.',
      'Caffeine, alcohol, blue light, irregular schedules, and warm bedrooms are the most common sleep disruptors.',
      'Sleep is not a luxury or a sign of laziness; it is a biological necessity that society chronically undervalues.',
    ],
  },
  {
    title: 'Breath: The New Science of a Lost Art',
    author: 'James Nestor',
    category: 'Health & Wellness',
    description:
      'An investigation into the science and history of breathing, revealing how modern humans have lost the ability to breathe properly and how breathing dysfunction contributes to a wide range of health problems from sleep apnea to anxiety to poor athletic performance.',
    keyTakeaways: [
      'Nasal breathing filters, humidifies, and warms air, and produces nitric oxide which improves oxygen absorption and kills pathogens.',
      'Chronic mouth breathing contributes to sleep disorders, dental problems, facial structure changes, and reduced athletic performance.',
      'Slow, controlled breathing (5-6 breaths per minute) activates the parasympathetic nervous system and reduces stress and anxiety.',
      'The diaphragm is the primary breathing muscle; most people over-rely on accessory neck and chest muscles, contributing to tension and shallow breathing.',
      'Breathing practices (Buteyko, Wim Hof, pranayama, box breathing) can influence autonomic function, immune response, and mental state.',
    ],
  },
  {
    title: 'The Body Keeps the Score',
    author: 'Dr. Bessel van der Kolk',
    category: 'Health & Wellness',
    description:
      'A groundbreaking work on how trauma is stored in the body and how body-based therapies (yoga, EMDR, neurofeedback, movement) can be more effective than talk therapy alone for treating the physical manifestations of psychological trauma.',
    keyTakeaways: [
      'Trauma is stored not just in memory but in the body; physical symptoms (chronic pain, tension, digestive issues) often have traumatic roots.',
      'The autonomic nervous system becomes dysregulated by trauma, leading to chronic fight/flight/freeze responses.',
      'Body-based therapies (yoga, mindful movement, EMDR) can help restore autonomic regulation and body awareness.',
      'Exercise and physical activity can be powerful tools for trauma recovery when integrated with appropriate psychological support.',
      'Fitness professionals should be aware that certain exercises, positions, or environments may trigger trauma responses in some clients.',
    ],
  },
  {
    title: 'Outlive: The Science and Art of Longevity',
    author: 'Dr. Peter Attia',
    category: 'Health & Wellness',
    description:
      'A comprehensive framework for extending healthspan (years of healthy, functional life) by proactively addressing the "four horsemen" of chronic disease (cardiovascular disease, cancer, neurodegeneration, metabolic dysfunction) through exercise, nutrition, sleep, and emotional health strategies.',
    keyTakeaways: [
      'Healthspan (quality of life) matters more than lifespan; the goal is to extend functional, disease-free years.',
      'The "four horsemen" (heart disease, cancer, neurodegenerative disease, type 2 diabetes/metabolic dysfunction) account for the majority of deaths and disability.',
      'Exercise is the most potent longevity intervention; both cardiorespiratory fitness and muscular strength independently reduce all-cause mortality.',
      'VO2 max is the single strongest predictor of longevity; improving from the bottom 25th percentile to above average reduces mortality risk by approximately 50%.',
      'Proactive, preventive medicine ("Medicine 3.0") using early biomarker testing and intervention is superior to reactive treatment of established disease.',
    ],
  },
  {
    title: 'Atomic Habits',
    author: 'James Clear',
    category: 'Health & Wellness',
    description:
      'A practical guide to building good habits and breaking bad ones based on the science of behavioral psychology. Introduces the Four Laws of Behavior Change and emphasizes identity-based habits, environment design, and the compound effect of small improvements.',
    keyTakeaways: [
      'The Four Laws of Behavior Change: make it obvious (cue), make it attractive (craving), make it easy (response), make it satisfying (reward).',
      'Identity-based habits ("I am a person who exercises") are more durable than outcome-based habits ("I want to lose 20 pounds").',
      'Environment design is more powerful than willpower; structure your surroundings to make good habits the path of least resistance.',
      'The Two-Minute Rule: scale any habit down to 2 minutes to overcome the activation energy of starting.',
      'Habits compound over time: 1% better every day leads to being 37 times better over a year (1.01^365 = 37.78).',
    ],
  },
  {
    title: 'Lifespan: Why We Age and Why We Don\'t Have To',
    author: 'Dr. David Sinclair',
    category: 'Health & Wellness',
    description:
      'An exploration of the biology of aging and emerging longevity science. Presents the "information theory of aging" (aging as loss of epigenetic information) and discusses interventions including caloric restriction, exercise, cold exposure, and pharmacological agents that may slow or reverse biological aging.',
    keyTakeaways: [
      'Aging is a disease-like process driven by the loss of epigenetic information, not an inevitable consequence of time.',
      'Sirtuins (longevity genes) are activated by metabolic stress including caloric restriction, intermittent fasting, exercise, and cold exposure.',
      'NAD+ (nicotinamide adenine dinucleotide) levels decline with age; boosting NAD+ through precursors (NMN, NR) is a promising longevity intervention.',
      'Exercise, caloric restriction, and temperature stress activate cellular defense and repair pathways that slow aging processes.',
      'Biological age (measured by epigenetic clocks, telomere length, and biomarkers) is more predictive of healthspan than chronological age.',
    ],
  },

  // ─── Anatomy & Reference Books ──────────────────────────────────────
  {
    title: 'Anatomy of Movement',
    author: 'Blandine Calais-Germain',
    category: 'Anatomy & Reference',
    description:
      'A visually rich anatomy textbook designed for movement professionals that presents the skeletal, articular, and muscular systems in the context of human movement. Unique in its approach of teaching anatomy through movement rather than as static structures.',
    keyTakeaways: [
      'Understanding joint structure (bone shapes, ligament arrangements, capsule properties) explains why certain movements are possible and others are risky.',
      'Muscles have optimal length-tension relationships; understanding these explains why certain positions produce more or less force.',
      'The spine, pelvis, and rib cage function as an integrated unit; pelvic position directly affects spinal alignment and movement options.',
      'Breathing mechanics interact with core stability and spinal alignment; diaphragm function affects posture and vice versa.',
      'Movement professionals benefit from understanding anatomy in context (during movement) rather than as isolated textbook structures.',
    ],
  },
  {
    title: 'Trail Guide to the Body',
    author: 'Andrew Biel',
    category: 'Anatomy & Reference',
    description:
      'A practical palpation and anatomy guide that teaches how to locate and identify muscles, bones, ligaments, and other structures through touch. Essential for hands-on practitioners including personal trainers, massage therapists, and physical therapy students.',
    keyTakeaways: [
      'Palpation skills (identifying structures by touch) enhance assessment accuracy and communication with clients and healthcare providers.',
      'Surface anatomy landmarks provide reference points for identifying underlying structures and assessing alignment.',
      'Understanding muscle fiber direction and attachment points informs exercise selection and manual therapy technique.',
      'The body is organized into regions with layered structures; knowing what lies beneath the surface improves clinical reasoning.',
      'Hands-on anatomical knowledge bridges the gap between textbook learning and practical application in fitness and rehabilitation.',
    ],
  },
  {
    title: 'Essentials of Strength Training and Conditioning',
    author: 'NSCA (National Strength and Conditioning Association) / G. Gregory Haff & N. Travis Triplett',
    category: 'Anatomy & Reference',
    description:
      'The official textbook for the NSCA-CSCS certification exam and the most comprehensive academic reference on strength and conditioning science. Covers exercise physiology, biomechanics, nutrition, testing, program design, and administration for strength and conditioning professionals.',
    keyTakeaways: [
      'Exercise technique chapters provide detailed biomechanical analysis and coaching cues for all major resistance training and plyometric exercises.',
      'Program design follows a systematic process: needs analysis, exercise selection, training frequency, exercise order, load and volume, and rest periods.',
      'Testing and evaluation protocols are standardized and sport-specific, allowing evidence-based program development and progress monitoring.',
      'The bioenergetic system (phosphagen, glycolytic, oxidative) determines energy availability for different exercise intensities and durations.',
      'Facility design, administration, and legal considerations are covered, providing a complete professional framework for strength coaches.',
    ],
  },
];

export const webResources: WebResource[] = [
  {
    name: 'Examine.com',
    url: 'https://examine.com',
    purpose: 'Supplement and nutrition research',
    description:
      'The largest independent database of supplement and nutrition research. Provides unbiased, evidence-based analysis of supplements, nutrients, and health topics with study summaries, effect matrices, and human-relevant research reviews. Essential for evaluating supplement claims and making evidence-based nutrition recommendations.',
  },
  {
    name: 'ExRx.net',
    url: 'https://exrx.net',
    purpose: 'Exercise encyclopedia and fitness calculators',
    description:
      'A comprehensive exercise encyclopedia with animated demonstrations, muscle group targeting guides, strength standards by body weight and experience level, and fitness calculators (1RM, calorie expenditure, BMI). An invaluable free reference for exercise selection and programming.',
  },
  {
    name: 'ISSN (International Society of Sports Nutrition)',
    url: 'https://www.sportsnutritionsociety.org',
    purpose: 'Sports nutrition position stands and research',
    description:
      'The leading academic society for sports nutrition, publishing peer-reviewed position stands on key topics including protein, creatine, caffeine, beta-alanine, energy drinks, nutrient timing, and diets for body composition. Their position stands are go-to references for evidence-based nutrition recommendations.',
  },
  {
    name: 'NSCA (National Strength and Conditioning Association)',
    url: 'https://www.nsca.com',
    purpose: 'Strength and conditioning research, certifications, and education',
    description:
      'The premier professional organization for strength and conditioning coaches. Publishes the Journal of Strength and Conditioning Research (JSCR) and Strength and Conditioning Journal, offers the CSCS and NSCA-CPT certifications, and provides continuing education resources, position statements, and professional development tools.',
  },
  {
    name: 'Precision Nutrition',
    url: 'https://www.precisionnutrition.com',
    purpose: 'Nutrition coaching education and certification',
    description:
      'A leading nutrition coaching certification and education platform. Offers the PN Level 1 and Level 2 certifications, extensive free articles on nutrition science and coaching methodology, and research-backed resources for both coaches and individuals pursuing evidence-based nutrition strategies.',
  },
  {
    name: 'PubMed',
    url: 'https://pubmed.ncbi.nlm.nih.gov',
    purpose: 'Primary biomedical research database',
    description:
      'The world\'s largest database of biomedical and life sciences literature, maintained by the National Library of Medicine. Contains over 35 million citations from peer-reviewed journals. Essential for fitness professionals seeking primary research evidence on exercise, nutrition, physiology, and health topics.',
  },
  {
    name: 'ACE Fitness (American Council on Exercise)',
    url: 'https://www.acefitness.org',
    purpose: 'Fitness education, certifications, and consumer information',
    description:
      'A nonprofit fitness certification and education organization. Offers CPT, GFI, and Health Coach certifications, publishes free evidence-based fitness articles, funds original exercise science research (ACE-sponsored studies), and provides CEU opportunities. Known for the Integrated Fitness Training (IFT) model.',
  },
  {
    name: 'IFCT / NIN (Indian Food Composition Tables / National Institute of Nutrition)',
    url: 'https://www.nin.res.in',
    purpose: 'Indian food composition and nutrition data',
    description:
      'India\'s National Institute of Nutrition maintains the Indian Food Composition Tables (IFCT), providing detailed macronutrient and micronutrient data for Indian foods. Essential for nutrition professionals working with South Asian populations or Indian dietary patterns, covering regional foods not found in Western databases.',
  },
  {
    name: 'T-Nation',
    url: 'https://www.t-nation.com',
    purpose: 'Strength training, bodybuilding, and performance articles',
    description:
      'A long-running online publication featuring articles from leading strength coaches, sports scientists, and bodybuilding experts. Covers training methodology, nutrition strategies, supplement reviews, and program design. While commercially affiliated with supplement sales, the training content from expert contributors is often practical and well-informed.',
  },
  {
    name: 'Huberman Lab',
    url: 'https://www.hubermanlab.com',
    purpose: 'Neuroscience-based health and performance protocols',
    description:
      'The podcast and website of Dr. Andrew Huberman, a Stanford neuroscientist, covering evidence-based protocols for sleep, stress management, exercise performance, nutrition, and cognitive enhancement. Episodes feature detailed scientific explanations with actionable takeaways, often based on peer-reviewed research.',
  },
  {
    name: 'Cronometer',
    url: 'https://cronometer.com',
    purpose: 'Detailed nutrition tracking and micronutrient analysis',
    description:
      'A nutrition tracking app and website that provides detailed micronutrient analysis beyond basic macros. Uses verified, research-grade food data (NCCDB, USDA) to track over 80 nutrients including vitamins, minerals, amino acids, and fatty acids. Preferred by nutrition professionals for its accuracy and depth.',
  },
  {
    name: 'GOWOD / ROMWOD (now pliability)',
    url: 'https://www.pliability.com',
    purpose: 'Guided mobility and flexibility programming',
    description:
      'A guided mobility app providing daily stretching and mobility routines tailored to the user\'s sport, training schedule, and flexibility assessment results. Offers structured mobility programming that complements strength and conditioning programs, with routines ranging from 10 to 40 minutes.',
  },
  {
    name: 'r/Fitness (Reddit)',
    url: 'https://www.reddit.com/r/Fitness',
    purpose: 'Community discussion and curated fitness resources',
    description:
      'One of the largest online fitness communities with a well-maintained wiki covering beginner programs, nutrition basics, and frequently asked questions. The wiki is curated by experienced contributors and provides free, evidence-based starter programs. Community discussions provide diverse perspectives but should be evaluated critically.',
  },
];

export const booksAndResourcesContext: string = (() => {
  const bookSection = bookResources
    .map(
      (book) =>
        `"${book.title}" by ${book.author} [${book.category}]: ${book.description} Key takeaways: ${book.keyTakeaways.join('; ')}`
    )
    .join('\n\n');

  const webSection = webResources
    .map(
      (site) =>
        `${site.name} (${site.url}) [${site.purpose}]: ${site.description}`
    )
    .join('\n\n');

  return `=== RECOMMENDED FITNESS BOOKS ===\n\n${bookSection}\n\n=== RECOMMENDED WEBSITES & ONLINE RESOURCES ===\n\n${webSection}`;
})();
