import type { EngineData } from '../types';

export const hormonalHealthEngine: EngineData = {
  category: 'hormonal-health',
  title: 'Hormonal Health & Fitness',
  description:
    'Evidence-based guide to the hormones that influence body composition, athletic performance, and recovery, including how exercise, nutrition, sleep, and lifestyle factors affect hormonal balance and how to optimize hormonal health naturally.',
  topics: [
    {
      name: 'Testosterone & Muscle Growth',
      description:
        'The primary anabolic hormone in males and its role in muscle protein synthesis, body composition, and training adaptations.',
      details: [
        'Testosterone is the primary male sex hormone, with normal ranges of 300-1,000 ng/dL in men and 15-70 ng/dL in women; it drives muscle protein synthesis, bone density, red blood cell production, and fat distribution.',
        'Free testosterone (the biologically active form, approximately 2-3% of total) is more functionally important than total testosterone; it is not bound to sex hormone-binding globulin (SHBG) or albumin.',
        'Testosterone increases muscle protein synthesis by binding to androgen receptors in muscle fibers, activating the mTOR signaling pathway, and increasing satellite cell activity for muscle repair and growth.',
        'Acute testosterone elevation from heavy resistance training (15-30% increase lasting 30-60 minutes) appears to contribute less to hypertrophy than chronic baseline testosterone levels and local muscular factors.',
        'Heavy compound exercises (squats, deadlifts) produce the largest acute testosterone responses; training with moderate-to-heavy loads (70-85% 1RM) and moderate volume (3-5 sets of 6-12 reps) optimizes this response.',
        'Natural testosterone levels can be optimized through adequate sleep (7-9 hours), healthy dietary fat intake (20-35% of calories), zinc and vitamin D sufficiency, stress management, and maintaining 10-20% body fat.',
        'Very low body fat (<8% for men) and extreme caloric restriction can suppress testosterone by 20-40%, as the body downregulates reproductive function in response to perceived energy scarcity.',
        'Age-related testosterone decline begins around age 30 at approximately 1-2% per year; resistance training, adequate sleep, and healthy body composition can slow this decline significantly.',
      ],
      subtopics: [
        {
          name: 'Testosterone Optimization',
          description: 'Natural strategies to maintain healthy testosterone levels through lifestyle factors.',
          details: [
            'Sleep is the most critical factor: 5 hours of sleep reduces daytime testosterone by 10-15% compared to 8 hours, with most testosterone production occurring during REM sleep cycles.',
            'Dietary fat should comprise 20-35% of total calories; very low-fat diets (<15% calories from fat) have been associated with 10-15% lower testosterone levels in multiple studies.',
            'Zinc (15-30 mg/day) and vitamin D (2,000-5,000 IU/day, or sufficient sun exposure to maintain 40-60 ng/mL blood levels) are the two micronutrients with the strongest evidence for supporting testosterone.',
            'Chronic alcohol consumption (>2 drinks/day) and chronic stress (elevated cortisol) both suppress testosterone through direct testicular effects and HPA axis interference.',
          ],
        },
      ],
    },
    {
      name: 'Cortisol & Stress',
      description:
        'The primary stress hormone, its necessary physiological roles, and the negative consequences of chronic elevation on body composition and recovery.',
      details: [
        'Cortisol is a glucocorticoid hormone produced by the adrenal cortex in response to stress and low blood glucose, with a natural diurnal pattern: highest in the morning (cortisol awakening response) and lowest at night.',
        'Acute cortisol release during exercise is beneficial: it mobilizes energy substrates (glucose, fatty acids), reduces inflammation, and supports the adaptive response to training stress.',
        'Chronic cortisol elevation (from psychological stress, sleep deprivation, overtraining, or extreme dieting) promotes visceral fat storage, muscle catabolism, insulin resistance, and immune suppression.',
        'Cortisol and testosterone have an inverse relationship; chronically elevated cortisol suppresses gonadotropin-releasing hormone (GnRH), reducing luteinizing hormone (LH) and subsequently testosterone production.',
        'High-intensity exercise lasting longer than 60-75 minutes progressively increases cortisol, which is why limiting intense training sessions to 45-75 minutes is often recommended for body composition goals.',
        'Cortisol increases muscle protein breakdown by activating the ubiquitin-proteasome pathway, making chronically stressed individuals more prone to muscle loss during caloric restriction.',
        'Cortisol management strategies include limiting caffeine to morning hours, practicing stress-reduction techniques (meditation, deep breathing), maintaining blood sugar stability, and prioritizing sleep.',
        'Post-workout cortisol can be mitigated by consuming carbohydrates and protein within 1-2 hours after training, which stimulates insulin release and blunts the catabolic cortisol response.',
      ],
    },
    {
      name: 'Insulin & Blood Sugar',
      description:
        'The role of insulin in nutrient partitioning, muscle growth, fat storage, and how exercise and diet influence insulin function.',
      details: [
        'Insulin is a peptide hormone released by pancreatic beta cells in response to elevated blood glucose; it facilitates glucose uptake into muscle and fat cells and promotes nutrient storage.',
        'Insulin is both anabolic (promotes muscle protein synthesis, glycogen storage, and amino acid uptake) and lipogenic (promotes fat storage and inhibits lipolysis), making its regulation critical for body composition.',
        'Insulin sensitivity determines how efficiently cells respond to insulin; high sensitivity means less insulin is needed to clear glucose, directing nutrients toward muscle rather than fat storage.',
        'Exercise dramatically improves insulin sensitivity: a single session can increase glucose uptake by 40% for up to 48 hours through GLUT4 transporter translocation, independent of insulin.',
        'Resistance training improves insulin sensitivity chronically by increasing muscle mass (the largest glucose sink in the body) and enhancing intramuscular glycogen storage capacity.',
        'Insulin resistance (decreased cellular response to insulin) develops from chronic inactivity, excessive body fat (especially visceral fat), chronic high-sugar diets, poor sleep, and chronic stress.',
        'Nutrient timing around training leverages insulins anabolic properties: consuming carbohydrates and protein post-workout when insulin sensitivity is highest directs nutrients toward muscle glycogen and protein synthesis.',
        'Fasting insulin levels of 2-8 mIU/L and HbA1c below 5.7% indicate healthy insulin function; levels above these ranges suggest developing insulin resistance and warrant lifestyle intervention.',
      ],
      subtopics: [
        {
          name: 'Insulin Sensitivity Optimization',
          description: 'Strategies to maximize insulin sensitivity for improved body composition and health.',
          details: [
            'Regular exercise (both aerobic and resistance training) is the most powerful intervention for insulin sensitivity, with improvements of 20-60% depending on baseline fitness and exercise type.',
            'Maintaining body fat below 20% for men and 30% for women significantly reduces insulin resistance risk, with visceral fat being the most metabolically harmful depot.',
            'Dietary strategies include consuming adequate fiber (25-35 g/day), choosing lower-glycemic carbohydrate sources, distributing carbohydrate intake throughout the day, and pairing carbs with protein and fat.',
            'Sleep restriction (6 hours vs. 8 hours) reduces insulin sensitivity by 25-30% within just 4 days, highlighting sleep as a critical factor in metabolic health.',
          ],
        },
      ],
    },
    {
      name: 'Growth Hormone',
      description:
        'The pulsatile anabolic hormone that supports fat metabolism, tissue repair, and recovery, and how to optimize its natural production.',
      details: [
        'Human growth hormone (HGH) is released from the anterior pituitary in a pulsatile pattern, with the largest pulse (60-70% of daily output) occurring during deep slow-wave sleep (N3 stage).',
        'GH promotes lipolysis (fat breakdown), stimulates IGF-1 production in the liver (which mediates most of GH anabolic effects on muscle and bone), and enhances protein synthesis in recovery.',
        'Exercise is a potent GH stimulus; high-intensity exercise (>70% VO2max or heavy resistance training) can increase GH levels by 300-500% acutely, with the response proportional to exercise intensity.',
        'Metabolic stress-type training (moderate loads, short rest periods of 60-90 seconds, higher rep ranges of 8-12) produces the largest acute GH responses, driven by lactate accumulation and acidosis.',
        'Sleep deprivation severely blunts GH secretion by reducing the duration and depth of slow-wave sleep; even partial sleep restriction reduces GH output by 50-70%.',
        'Fasting increases GH secretion by 300-500% over 24-48 hours as a mechanism to preserve lean mass during energy restriction; however, this acute spike does not translate directly to muscle growth.',
        'GH levels decline with age (approximately 14% per decade after age 30), contributing to increased body fat, decreased lean mass, and slower recovery; this process is termed somatopause.',
        'Natural GH optimization strategies include: prioritizing deep sleep, high-intensity exercise, managing body fat (higher body fat suppresses GH), avoiding high-sugar meals before bed, and adequate protein intake.',
      ],
    },
    {
      name: 'Thyroid Function',
      description:
        'How thyroid hormones regulate metabolism, energy expenditure, and body composition, and how exercise and dieting affect thyroid function.',
      details: [
        'The thyroid gland produces thyroxine (T4) and triiodothyronine (T3), which regulate basal metabolic rate, protein synthesis, fat metabolism, heart rate, and body temperature.',
        'T3 is the biologically active form (3-5x more potent than T4); T4 is converted to T3 primarily in the liver and kidneys by deiodinase enzymes that require selenium as a cofactor.',
        'Normal TSH range is 0.4-4.0 mIU/L, with optimal function often associated with TSH between 1.0-2.5 mIU/L; elevated TSH suggests hypothyroidism (underactive thyroid).',
        'Hypothyroidism reduces metabolic rate by 15-40%, causing fatigue, weight gain, cold intolerance, constipation, depression, and impaired recovery from exercise; it affects approximately 5% of the population.',
        'Caloric restriction reduces T3 levels by 10-20% as a metabolic adaptation mechanism; this is one of the hormonal drivers of metabolic slowdown during prolonged dieting.',
        'Carbohydrate intake has a direct effect on T3 levels; very low-carb diets (<50 g/day) can reduce T3 by 20-40%, which is why refeeds with carbohydrates are recommended during extended dieting phases.',
        'Iodine (150-300 mcg/day), selenium (55-200 mcg/day), and zinc (15-30 mg/day) are the three most critical micronutrients for thyroid function; deficiency in any can impair T4-to-T3 conversion.',
        'Overtraining syndrome and chronic under-eating can suppress thyroid function as part of the body energy conservation response, manifesting as low T3 syndrome even with normal TSH levels.',
      ],
    },
    {
      name: 'Estrogen & Progesterone',
      description:
        'The role of female sex hormones in body composition, training response, and performance across the menstrual cycle.',
      details: [
        'Estrogen (primarily estradiol, E2) is the primary female sex hormone, important for bone health, cardiovascular protection, joint lubrication, and body fat distribution to hips, thighs, and breasts.',
        'The menstrual cycle consists of the follicular phase (days 1-14, estrogen rising), ovulation (day 14, estrogen and LH peak), and the luteal phase (days 15-28, progesterone dominant, both hormones declining before menstruation).',
        'During the follicular phase (higher estrogen, lower progesterone), women may experience better strength performance, higher pain tolerance, improved insulin sensitivity, and greater training capacity.',
        'During the luteal phase (higher progesterone), basal metabolic rate increases by 5-10% (approximately 100-300 extra kcal/day), body temperature rises, and some women experience reduced performance and increased fatigue.',
        'Estrogen has a protective effect on muscle damage and recovery; higher estrogen levels during the follicular phase may allow for more intense training and faster recovery.',
        'Relative Energy Deficiency in Sport (RED-S, formerly the Female Athlete Triad) occurs when energy intake is insufficient relative to expenditure, causing menstrual dysfunction, decreased bone density, and impaired performance.',
        'Loss of menstruation (amenorrhea) in female athletes is a serious warning sign of inadequate energy availability and is associated with stress fractures, decreased bone density, impaired immunity, and cardiovascular risk.',
        'Estrogen levels decline dramatically during menopause (average age 51), leading to accelerated bone loss (2-5% per year for 5-7 years), increased visceral fat accumulation, and decreased lean mass, making resistance training especially important for postmenopausal women.',
      ],
    },
    {
      name: 'Hormonal Effects of Exercise',
      description:
        'How different types, intensities, and durations of exercise affect the endocrine system acutely and chronically.',
      details: [
        'Resistance training acutely increases testosterone (15-30%), growth hormone (300-500%), IGF-1, and cortisol, with the magnitude depending on exercise selection, volume, intensity, and rest periods.',
        'Compound exercises involving large muscle groups (squats, deadlifts, rows) produce larger hormonal responses than isolation exercises due to greater total mechanical stress and metabolic demand.',
        'High-intensity interval training (HIIT) produces significant increases in GH, catecholamines (adrenaline, noradrenaline), and cortisol, enhancing both fat oxidation and cardiovascular adaptation.',
        'Steady-state aerobic exercise at moderate intensity (60-70% max HR) primarily increases cortisol and catecholamines; excessive volumes (>60 minutes) can suppress testosterone and increase cortisol chronically.',
        'Endurance athletes (marathon runners, ultramarathon athletes) frequently show chronically suppressed testosterone and elevated cortisol, a pattern termed "exercise hypogonadism" that impairs recovery and body composition.',
        'The post-exercise hormonal window (0-2 hours after training) was traditionally emphasized for muscle growth, but research shows that chronic training-induced hormonal adaptations matter more than acute post-workout hormone spikes.',
        'Overtraining disrupts the HPA axis, suppressing both testosterone and growth hormone while chronically elevating cortisol, creating a catabolic hormonal environment that impairs recovery and performance.',
        'Regular exercise improves hormonal sensitivity (androgen receptor density, insulin receptor sensitivity, GH receptor responsiveness), meaning the body responds more effectively to the hormones it produces.',
      ],
    },
    {
      name: 'Natural Hormone Optimization',
      description:
        'Evidence-based lifestyle, nutrition, and training strategies to support healthy hormonal function without exogenous supplementation.',
      details: [
        'Sleep is the foundation of hormonal health: 7-9 hours optimizes testosterone (produced during REM), growth hormone (produced during N3 deep sleep), cortisol rhythm, insulin sensitivity, and leptin/ghrelin balance.',
        'Dietary fat intake of 20-35% of total calories is necessary for steroid hormone (testosterone, estrogen, cortisol) synthesis; the cholesterol in dietary fat serves as the precursor molecule for all steroid hormones.',
        'Micronutrient sufficiency is critical: zinc (15-30 mg/day) for testosterone synthesis, vitamin D (2,000-5,000 IU/day) for testosterone and insulin function, magnesium (400-600 mg/day) for sleep and cortisol regulation, and selenium (55-200 mcg/day) for thyroid function.',
        'Body fat management directly impacts hormones: excess body fat increases aromatase activity (converting testosterone to estrogen in men), while very low body fat suppresses reproductive hormones in both sexes.',
        'The optimal body fat range for hormonal health is approximately 10-20% for men and 18-28% for women; extremes in either direction disrupt the endocrine system.',
        'Stress management through meditation, social connection, time in nature, and adequate leisure time reduces chronic cortisol elevation and its downstream suppressive effects on testosterone, thyroid, and growth hormone.',
        'Alcohol consumption suppresses testosterone acutely by 20-25% even with moderate intake (3-4 drinks), impairs GH release during sleep, and chronically increases estrogen through enhanced aromatase activity.',
        'Avoiding endocrine-disrupting chemicals (BPA in plastics, parabens in cosmetics, pesticides on produce) may help preserve hormonal function, though human evidence for significant effects from typical exposure is still evolving.',
      ],
    },
    {
      name: 'Hormones & Sleep',
      description:
        'The bidirectional relationship between hormonal function and sleep quality, and why sleep is the cornerstone of endocrine health.',
      details: [
        'Growth hormone secretion is tightly linked to slow-wave sleep; the largest GH pulse occurs within the first 90 minutes of sleep onset, making early sleep quality particularly important for recovery.',
        'Testosterone production follows a circadian pattern with peak levels in the early morning (6-8 AM); disrupted sleep reduces morning testosterone by 10-15%, equivalent to 10-15 years of aging.',
        'Cortisol follows an opposite pattern to testosterone, with lowest levels at sleep onset and highest in the morning (cortisol awakening response); disrupted sleep flattens this rhythm, keeping cortisol inappropriately elevated at night.',
        'Melatonin production begins 2-3 hours before habitual bedtime in response to dim light; it not only promotes sleep but also has antioxidant properties and may help regulate reproductive hormone cycling.',
        'Leptin (satiety hormone) levels decrease and ghrelin (hunger hormone) levels increase with sleep deprivation, leading to 15-25% increased calorie consumption the following day, predominantly from high-carbohydrate foods.',
        'Even moderate sleep restriction (6 vs. 8 hours) for one week reduces insulin sensitivity by 25-30% and increases inflammatory markers, creating a metabolic environment that favors fat storage.',
        'Shift workers and those with irregular sleep schedules show higher rates of metabolic syndrome, obesity, and hormonal disruption due to chronic circadian misalignment.',
        'Napping (20-30 minutes in early afternoon) can partially compensate for sleep debt and has been shown to reduce cortisol and restore some of the hormonal deficits caused by inadequate nighttime sleep.',
      ],
    },
    {
      name: 'Age-Related Hormonal Changes',
      description:
        'How the endocrine system changes with aging and strategies to maintain hormonal health through exercise and lifestyle across the lifespan.',
      details: [
        'Testosterone in men declines approximately 1-2% per year after age 30 (andropause), with total testosterone dropping from 600-700 ng/dL in the 20s to 400-500 ng/dL by age 50-60 on average.',
        'Estrogen in women drops by 60-80% during menopause (average age 51), leading to hot flashes, bone loss, body composition changes, mood disturbances, and cardiovascular risk increase.',
        'Growth hormone declines approximately 14% per decade after age 30 (somatopause), contributing to increased body fat, decreased lean mass, reduced skin thickness, and slower recovery.',
        'Insulin sensitivity decreases with age due to reduced muscle mass (sarcopenia), increased body fat, decreased physical activity, and reduced mitochondrial function, increasing type 2 diabetes risk.',
        'DHEA (dehydroepiandrosterone), a precursor to both testosterone and estrogen, declines 2-3% per year from its peak at age 25, reaching 20-30% of peak levels by age 70.',
        'Resistance training is the most effective intervention for age-related hormonal decline: it maintains muscle mass (preventing sarcopenia), preserves bone density, improves insulin sensitivity, and acutely stimulates testosterone and GH.',
        'Postmenopausal women who perform regular resistance training show 1-3% increases in bone mineral density versus 1-2% decreases in sedentary controls, making it the most effective non-pharmacological osteoporosis intervention.',
        'Maintaining a healthy body weight, adequate protein intake (1.2-1.6 g/kg for older adults, higher than the general RDA), vitamin D sufficiency, and regular exercise can offset a significant portion of age-related hormonal decline.',
      ],
    },
  ],
  keyTerms: [
    {
      term: 'Testosterone',
      definition:
        'The primary male sex hormone (androgen) produced mainly in the testes (men) and ovaries/adrenals (women). Drives muscle protein synthesis, bone density, red blood cell production, and fat distribution. Normal: 300-1,000 ng/dL (men), 15-70 ng/dL (women).',
    },
    {
      term: 'Estrogen (Estradiol)',
      definition:
        'The primary female sex hormone produced mainly in the ovaries. Essential for bone health, cardiovascular protection, joint lubrication, and female body composition. Also present in men, where excess can impair testosterone function.',
    },
    {
      term: 'Cortisol',
      definition:
        'A glucocorticoid stress hormone produced by the adrenal cortex. Acutely beneficial for energy mobilization; chronically elevated cortisol promotes muscle catabolism, visceral fat storage, immune suppression, and insulin resistance.',
    },
    {
      term: 'Insulin',
      definition:
        'A peptide hormone from pancreatic beta cells that facilitates glucose uptake into cells. Both anabolic (promotes protein synthesis and glycogen storage) and lipogenic (promotes fat storage). Sensitivity to insulin determines metabolic health.',
    },
    {
      term: 'Growth Hormone (HGH)',
      definition:
        'An anterior pituitary hormone released in pulsatile fashion (largest pulse during deep sleep). Promotes lipolysis, stimulates IGF-1 production, enhances protein synthesis, and supports tissue repair and recovery.',
    },
    {
      term: 'IGF-1 (Insulin-like Growth Factor 1)',
      definition:
        'A hormone produced primarily in the liver in response to growth hormone stimulation. Mediates most of GH anabolic effects on muscle, bone, and connective tissue through autocrine and paracrine signaling.',
    },
    {
      term: 'Thyroid Hormones (T3/T4)',
      definition:
        'Hormones produced by the thyroid gland that regulate basal metabolic rate, protein synthesis, and energy metabolism. T3 is 3-5x more active than T4. Caloric restriction and low-carb diets can suppress T3 production.',
    },
    {
      term: 'Leptin',
      definition:
        'A satiety hormone produced by adipose tissue that signals energy abundance to the hypothalamus. Decreases during dieting (proportional to fat loss), increasing hunger and reducing metabolic rate.',
    },
    {
      term: 'Ghrelin',
      definition:
        'The primary hunger hormone produced in the stomach that stimulates appetite and food intake. Increases during caloric restriction and sleep deprivation, and decreases after meals.',
    },
    {
      term: 'SHBG (Sex Hormone-Binding Globulin)',
      definition:
        'A liver-produced protein that binds to sex hormones (testosterone, estrogen), rendering them biologically inactive. Only unbound (free) hormones are available to act on target tissues. SHBG increases with age and estrogen, decreases with insulin and obesity.',
    },
    {
      term: 'Aromatase',
      definition:
        'An enzyme that converts testosterone to estrogen, primarily found in adipose tissue. Higher body fat increases aromatase activity, which can reduce effective testosterone levels in men and contribute to estrogen dominance.',
    },
    {
      term: 'HPA Axis',
      definition:
        'The hypothalamic-pituitary-adrenal axis; the neuroendocrine system governing the cortisol stress response. Chronic activation (from stress, overtraining, under-eating) suppresses reproductive hormones and thyroid function.',
    },
    {
      term: 'HPG Axis',
      definition:
        'The hypothalamic-pituitary-gonadal axis; the neuroendocrine system controlling reproductive hormone production. GnRH from the hypothalamus stimulates LH and FSH from the pituitary, which stimulate testosterone/estrogen from the gonads.',
    },
    {
      term: 'Catecholamines',
      definition:
        'Hormones and neurotransmitters including adrenaline (epinephrine) and noradrenaline (norepinephrine) released during exercise and stress. They increase heart rate, mobilize energy substrates, and stimulate fat oxidation.',
    },
    {
      term: 'Progesterone',
      definition:
        'A female sex hormone dominant in the luteal phase of the menstrual cycle. Increases basal metabolic rate by 5-10%, raises body temperature, and prepares the uterus for potential pregnancy.',
    },
    {
      term: 'DHEA (Dehydroepiandrosterone)',
      definition:
        'An adrenal hormone that serves as a precursor to both testosterone and estrogen. Peaks at age 25 and declines 2-3% per year. Sometimes supplemented to combat age-related hormonal decline, though evidence is mixed.',
    },
    {
      term: 'mTOR Pathway',
      definition:
        'Mechanistic target of rapamycin; a key intracellular signaling pathway that integrates hormonal signals (insulin, IGF-1, testosterone) with nutrient availability and mechanical tension to regulate muscle protein synthesis.',
    },
    {
      term: 'Insulin Sensitivity',
      definition:
        'The degree to which cells respond to insulin for glucose uptake. High sensitivity improves nutrient partitioning toward muscle. Improved by exercise, adequate sleep, healthy body fat levels, and reduced stress.',
    },
    {
      term: 'Insulin Resistance',
      definition:
        'A condition where cells respond poorly to insulin, requiring higher insulin levels to maintain normal blood glucose. A precursor to type 2 diabetes, associated with excess body fat, inactivity, poor sleep, and chronic stress.',
    },
    {
      term: 'Androgen Receptor',
      definition:
        'A nuclear receptor protein that binds testosterone and DHT, mediating their effects on gene expression in target tissues including muscle. Resistance training increases androgen receptor density, improving hormonal sensitivity.',
    },
    {
      term: 'Cortisol Awakening Response (CAR)',
      definition:
        'The natural 50-75% surge in cortisol within the first 30-45 minutes of waking that mobilizes energy and promotes alertness. A blunted or absent CAR indicates HPA axis dysregulation from chronic stress.',
    },
    {
      term: 'Somatopause',
      definition:
        'The age-related decline in growth hormone and IGF-1, beginning around age 30 at approximately 14% per decade. Contributes to increased body fat, decreased lean mass, and slower recovery with aging.',
    },
    {
      term: 'Andropause',
      definition:
        'The gradual decline in testosterone in aging men, approximately 1-2% per year after age 30. Unlike female menopause, andropause is gradual and variable; symptoms include reduced muscle mass, increased body fat, and decreased energy.',
    },
    {
      term: 'Menopause',
      definition:
        'The cessation of menstruation (12 consecutive months without a period), occurring at an average age of 51. Marked by a 60-80% decline in estrogen, leading to bone loss, body composition changes, and cardiovascular risk increase.',
    },
    {
      term: 'Endocrine Disruptors',
      definition:
        'Synthetic chemicals (BPA, phthalates, parabens, pesticides) that can interfere with hormonal function by mimicking, blocking, or altering hormone signaling. Found in plastics, cosmetics, and food containers.',
    },
    {
      term: 'RED-S (Relative Energy Deficiency in Sport)',
      definition:
        'A syndrome caused by insufficient caloric intake relative to exercise expenditure, resulting in hormonal disruption (suppressed reproductive hormones, thyroid, GH), impaired bone health, decreased performance, and compromised immunity.',
    },
    {
      term: 'Luteinizing Hormone (LH)',
      definition:
        'A pituitary hormone that stimulates testosterone production in the testes (men) and triggers ovulation (women). Suppressed by chronic stress, caloric restriction, and exogenous hormone use.',
    },
    {
      term: 'Sarcopenia',
      definition:
        'Age-related loss of muscle mass and function, accelerated by hormonal decline (testosterone, GH, IGF-1), physical inactivity, and inadequate protein intake. Resistance training is the primary preventive intervention.',
    },
    {
      term: 'Diurnal Rhythm',
      definition:
        'The natural daily fluctuation pattern of hormone levels. Testosterone and cortisol peak in the morning; growth hormone peaks during early sleep; melatonin rises in the evening. Disrupted by shift work and irregular schedules.',
    },
    {
      term: 'Free Testosterone',
      definition:
        'The fraction of testosterone (approximately 2-3% of total) not bound to SHBG or albumin, and therefore biologically available to act on target tissues. More functionally relevant than total testosterone levels.',
    },
    {
      term: 'Gluconeogenesis',
      definition:
        'The metabolic process of producing glucose from non-carbohydrate sources (amino acids, glycerol, lactate), stimulated by cortisol and glucagon during fasting, exercise, and caloric restriction.',
    },
  ],
  tips: [
    'Prioritize 7-9 hours of quality sleep every night; it is the single most impactful intervention for optimizing testosterone, growth hormone, cortisol rhythm, insulin sensitivity, and appetite hormones simultaneously.',
    'Include healthy dietary fats (avocados, olive oil, nuts, fatty fish) at 20-35% of total calories to provide the cholesterol precursor needed for steroid hormone synthesis, including testosterone and estrogen.',
    'Maintain body fat in the optimal range (10-20% for men, 18-28% for women); both extremes disrupt hormonal function, with excess fat increasing aromatase and very low fat suppressing reproductive hormones.',
    'Perform heavy compound resistance training (squats, deadlifts, bench press, rows) to maximize acute testosterone and growth hormone release and build the chronic adaptations that support long-term hormonal health.',
    'Manage stress proactively through meditation, deep breathing, nature exposure, and social connection; chronic cortisol elevation is the most common hormonal disruptor in modern life.',
    'Ensure adequate zinc (15-30 mg/day from red meat, shellfish, pumpkin seeds), vitamin D (2,000-5,000 IU/day), and magnesium (400-600 mg/day) as these three micronutrients directly support testosterone and sleep quality.',
    'Limit alcohol to occasional moderate consumption; even 3-4 drinks acutely suppresses testosterone by 20-25% and impairs growth hormone release during sleep.',
    'Avoid chronic extreme dieting; prolonged severe caloric restriction reduces T3 thyroid hormone, testosterone, leptin, and growth hormone. Use moderate deficits with periodic refeeds or diet breaks.',
    'Women should track their menstrual cycle and consider adjusting training intensity across phases: heavier training during the follicular phase (days 1-14) and slightly reduced intensity during the luteal phase if fatigue is an issue.',
    'Get blood work done annually (total and free testosterone, SHBG, thyroid panel, fasting insulin, vitamin D) to establish your personal baseline and detect hormonal issues before they become symptomatic.',
  ],
  faqs: [
    {
      question: 'Does exercise increase testosterone?',
      answer:
        'Yes. Resistance training acutely increases testosterone by 15-30% for 30-60 minutes after the session, with compound exercises producing the largest responses. More importantly, regular training chronically maintains healthier testosterone levels by improving body composition, insulin sensitivity, and sleep quality. However, excessive endurance training (>75 minutes of high intensity daily) can actually suppress testosterone.',
    },
    {
      question: 'Can I naturally boost my testosterone significantly?',
      answer:
        'You can optimize testosterone within your genetic potential through lifestyle factors. Sleep (7-9 hours), adequate dietary fat (20-35% of calories), zinc and vitamin D sufficiency, stress management, maintaining 10-20% body fat, and regular resistance training collectively can improve testosterone by 10-30% in deficient individuals. However, natural optimization cannot achieve supraphysiological levels.',
    },
    {
      question: 'How does cortisol affect muscle building?',
      answer:
        'Acute cortisol elevation during training is normal and part of the adaptive response. However, chronically elevated cortisol (from stress, poor sleep, overtraining) activates muscle protein breakdown via the ubiquitin-proteasome pathway, suppresses testosterone, impairs recovery, and promotes visceral fat storage. Managing life stress and recovery is as important as training itself for muscle growth.',
    },
    {
      question: 'Why do I gain weight when I am stressed?',
      answer:
        'Chronic stress elevates cortisol, which promotes visceral fat storage (especially abdominal), increases appetite (particularly for high-calorie comfort foods via increased ghrelin and neuropeptide Y), impairs insulin sensitivity, disrupts sleep (further worsening hormones), and may reduce NEAT and exercise motivation. The combination of hormonal, behavioral, and metabolic changes creates a strong weight gain environment.',
    },
    {
      question: 'Does intermittent fasting boost growth hormone?',
      answer:
        'Fasting does increase GH secretion by 300-500% over 24-48 hours, primarily as a mechanism to preserve lean mass during energy restriction. However, this acute GH spike does not necessarily translate to increased muscle growth, as muscle protein synthesis requires adequate amino acid availability. The practical impact on body composition is likely minimal compared to total calorie and protein intake.',
    },
    {
      question: 'How does the menstrual cycle affect training performance?',
      answer:
        'During the follicular phase (days 1-14, rising estrogen), women may experience better strength, higher pain tolerance, and greater training capacity. During the luteal phase (days 15-28, progesterone dominant), some women experience reduced performance, increased fatigue, and higher perceived exertion. However, individual variation is enormous; many women train effectively throughout the cycle without modification.',
    },
    {
      question: 'Does alcohol lower testosterone?',
      answer:
        'Yes. Acute consumption of 3-4 drinks can suppress testosterone by 20-25% for up to 24 hours. Chronic heavy drinking (>2 drinks/day) causes persistent testosterone suppression through direct testicular toxicity, increased aromatase (converting testosterone to estrogen), and HPA axis disruption. Occasional moderate drinking (1-2 drinks) has minimal measurable impact.',
    },
    {
      question: 'At what body fat percentage do hormonal issues start?',
      answer:
        'For men, testosterone begins to decline below approximately 8% and above approximately 25% body fat. For women, menstrual irregularities can begin below 15-18% body fat, and excess estrogen from aromatase increases above 35%. The optimal range for hormonal health is approximately 10-20% for men and 18-28% for women, though individual variation exists.',
    },
    {
      question: 'Should I take a testosterone booster supplement?',
      answer:
        'Most commercial "testosterone boosters" have little to no evidence of meaningfully increasing testosterone in healthy individuals. The few ingredients with modest evidence (ashwagandha may increase T by 10-15%, fenugreek has mixed results, D-aspartic acid has inconclusive evidence) produce effects far smaller than optimizing sleep, nutrition, body fat, and stress management. Address lifestyle factors first.',
    },
    {
      question: 'How does sleep affect my hormones?',
      answer:
        'Sleep affects virtually every hormone: testosterone production occurs during REM sleep (5 hours of sleep reduces T by 10-15% vs. 8 hours), growth hormone is secreted during deep sleep (60-70% of daily GH), cortisol rhythm depends on regular sleep-wake patterns, insulin sensitivity drops 25-30% with 6 vs. 8 hours, and appetite hormones (leptin down, ghrelin up) increase hunger by 15-25%.',
    },
    {
      question: 'What blood tests should I get to check my hormonal health?',
      answer:
        'A comprehensive hormonal panel should include: total and free testosterone, SHBG, estradiol, DHEA-S, TSH, free T3 and T4, fasting insulin and glucose, HbA1c, IGF-1, cortisol (morning), vitamin D, and a complete blood count. For women, add FSH and LH. Get tested in the morning (when testosterone peaks) after 8+ hours of sleep for the most accurate baseline.',
    },
    {
      question: 'Can too much exercise hurt my hormones?',
      answer:
        'Yes. Excessive exercise volume and intensity (especially combined with caloric restriction) can suppress the HPG axis, reducing testosterone and estrogen production. Signs include persistent fatigue, decreased libido, menstrual irregularity (women), mood disturbances, and declining performance. This is common in endurance athletes and those combining heavy training with aggressive dieting.',
    },
    {
      question: 'Do carbs affect my hormones?',
      answer:
        'Yes, significantly. Carbohydrates stimulate insulin (the primary anabolic storage hormone), support T3 thyroid hormone conversion (low carb diets can reduce T3 by 20-40%), help restore leptin during dieting, and lower cortisol post-workout. Very low carb diets may impair testosterone in some individuals. For hormonal health, moderate carbohydrate intake (3-5 g/kg body weight) is generally recommended for active individuals.',
    },
    {
      question: 'How do age-related hormone changes affect fitness?',
      answer:
        'Declining testosterone (1-2% per year in men after 30), estrogen (60-80% drop at menopause), growth hormone (14% per decade), and DHEA lead to reduced muscle mass (sarcopenia), increased body fat, slower recovery, and decreased bone density. However, regular resistance training, adequate protein (1.2-1.6 g/kg for older adults), sufficient sleep, and maintaining a healthy body weight can offset a large portion of these effects.',
    },
    {
      question: 'Is soy bad for my testosterone?',
      answer:
        'The concern that soy phytoestrogens reduce testosterone is largely unsupported by research. Meta-analyses show that moderate soy consumption (1-2 servings/day) does not significantly affect testosterone, estrogen, or SHBG levels in men. Extreme consumption (multiple servings daily from concentrated supplements) may have effects in some individuals, but normal dietary soy intake is safe for hormonal health.',
    },
  ],
};
