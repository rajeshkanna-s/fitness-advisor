import type { EngineData } from '../types';

export const recoveryScienceEngine: EngineData = {
  category: 'recovery-science',
  title: 'Recovery Science',
  description:
    'A comprehensive guide to the science of recovery, including sleep optimization, active recovery protocols, deload strategies, thermal therapy, and monitoring tools. Understanding recovery is essential for long-term progress because adaptation occurs during rest, not during training itself.',
  topics: [
    {
      name: 'Sleep & Recovery',
      description:
        'Sleep is the single most important recovery modality. During deep sleep (NREM stages 3-4), growth hormone secretion peaks, protein synthesis accelerates, and the glymphatic system clears metabolic waste from the brain. Poor sleep impairs glucose metabolism, raises cortisol, blunts testosterone, and degrades motor learning consolidation.',
      details: [
        'Adults need 7-9 hours of sleep per night; athletes may benefit from 9-10 hours during heavy training blocks.',
        'Growth hormone is released in pulses primarily during slow-wave sleep (SWS), which dominates the first half of the night.',
        'REM sleep is critical for motor skill consolidation and emotional regulation; it dominates the second half of the night.',
        'Sleep deprivation (<6 hours) reduces time to exhaustion by up to 30% and impairs reaction time comparably to moderate alcohol intoxication.',
        'Consistent sleep and wake times (within a 30-minute window) regulate circadian rhythm more effectively than total sleep duration alone.',
        'Core body temperature must drop 1-2 degrees Fahrenheit for sleep onset; a cool bedroom (65-68 F / 18-20 C) facilitates this.',
        'Blue light exposure within 2 hours of bedtime suppresses melatonin secretion by up to 50%, delaying sleep onset.',
        'Caffeine has a half-life of 5-7 hours; consuming it after 2 PM can significantly impair sleep architecture even if total sleep time appears unaffected.',
        'Sleep extension studies (banking extra sleep) show improved sprint times, reaction time, and free-throw accuracy in athletes.',
        'Naps of 20-30 minutes (power naps) improve alertness without causing sleep inertia; 90-minute naps allow a full sleep cycle.',
      ],
      subtopics: [
        {
          name: 'Sleep Hygiene Protocols',
          description:
            'Evidence-based behavioral strategies to improve sleep quality and onset latency.',
          details: [
            'Maintain a consistent sleep schedule 7 days per week, including weekends.',
            'Keep the bedroom dark (use blackout curtains), cool (65-68 F), and quiet.',
            'Avoid screens for 60-90 minutes before bed; use blue-light-blocking glasses if screen use is unavoidable.',
            'Limit alcohol intake, as even moderate consumption fragments sleep architecture and suppresses REM sleep.',
            'Establish a wind-down routine: dim lights, read, meditate, or practice deep breathing for 20-30 minutes before bed.',
          ],
        },
        {
          name: 'Sleep Tracking & Assessment',
          description:
            'Tools and methods for quantifying sleep quality and identifying deficits.',
          details: [
            'Wearable devices (Oura Ring, WHOOP, Garmin) track sleep stages using accelerometry and heart rate variability.',
            'The Pittsburgh Sleep Quality Index (PSQI) is a validated self-report questionnaire for assessing subjective sleep quality.',
            'Polysomnography (PSG) is the gold standard for sleep assessment, measuring EEG, EMG, and EOG simultaneously.',
            'Sleep efficiency (time asleep / time in bed) should exceed 85%; below this suggests a sleep disorder.',
          ],
        },
      ],
    },
    {
      name: 'Active Recovery Methods',
      description:
        'Active recovery involves low-intensity movement performed on rest days or after training sessions to promote blood flow, reduce muscle soreness, and facilitate nutrient delivery to damaged tissues without imposing additional training stress.',
      details: [
        'Active recovery should stay at 30-60% of maximum heart rate (Zone 1 cardio) to promote blood flow without additional fatigue.',
        'Low-intensity cycling, walking, swimming, and light yoga are effective active recovery modalities.',
        'Active recovery accelerates blood lactate clearance more effectively than passive rest following high-intensity exercise.',
        'Foam rolling for 10-15 minutes post-workout can reduce delayed-onset muscle soreness (DOMS) by 20-30% at 24-72 hours.',
        'Mobility work during active recovery sessions improves range of motion without the neural fatigue of loaded stretching.',
        'Active recovery sessions should last 20-40 minutes; longer durations may begin to accumulate fatigue.',
        'Walking 8,000-10,000 steps daily supports recovery by maintaining low-level blood flow to muscles and joints.',
        'Light swimming provides hydrostatic pressure that assists venous return and reduces peripheral edema.',
        'Tai chi and gentle yoga activate the parasympathetic nervous system, reducing cortisol and promoting a recovery-oriented hormonal state.',
      ],
      subtopics: [
        {
          name: 'Foam Rolling & Self-Myofascial Release',
          description:
            'Self-administered soft tissue techniques using foam rollers, lacrosse balls, and massage sticks.',
          details: [
            'Roll slowly (1 inch per second) over targeted muscle groups for 60-120 seconds per area.',
            'Apply moderate pressure; excessive pressure activates a protective guarding response that is counterproductive.',
            'Foam rolling before exercise can temporarily improve range of motion without the performance decrements associated with static stretching.',
            'Focus on commonly tight areas: IT band, thoracic spine, hip flexors, calves, and quadriceps.',
          ],
        },
      ],
    },
    {
      name: 'Deload Weeks',
      description:
        'A deload is a planned period of reduced training volume, intensity, or both, designed to allow accumulated fatigue to dissipate while maintaining fitness. Deloads are a core component of periodized training and prevent overreaching from progressing to overtraining.',
      details: [
        'A typical deload reduces training volume by 40-60% while maintaining intensity (weight on the bar) at 80-90% of normal.',
        'Deloads are commonly programmed every 4-6 weeks depending on training advancement and recovery capacity.',
        'Beginners may need deloads less frequently (every 8-12 weeks); advanced athletes may need them every 3-4 weeks.',
        'Reducing volume (fewer sets) is generally preferred over reducing intensity (lighter weight) for maintaining neuromuscular adaptations.',
        'Fitness-fatigue theory (Banister model) explains deloads: fitness decays slower than fatigue, so reducing load allows fitness to emerge.',
        'Signs that a deload is needed: stalled progress for 2+ weeks, persistent soreness, elevated resting heart rate, mood disturbance, poor sleep.',
        'During a deload, maintain training frequency (number of sessions per week) but reduce sets per muscle group by 50%.',
        'Reactive deloads (taken when symptoms appear) and proactive deloads (pre-scheduled) are both valid approaches.',
        'After a deload, athletes commonly experience a supercompensation effect with PRs in the first 1-2 weeks back.',
      ],
    },
    {
      name: 'Cold & Heat Therapy',
      description:
        'Thermal therapies use temperature extremes to modulate inflammation, blood flow, and autonomic nervous system function. Cold exposure reduces acute inflammation and can enhance alertness, while heat exposure promotes vasodilation, relaxation, and may improve cardiovascular health markers.',
      details: [
        'Cold water immersion (CWI) at 10-15 C (50-59 F) for 10-15 minutes reduces muscle soreness and perceived fatigue.',
        'CWI immediately post-training may blunt hypertrophy adaptations by attenuating the inflammatory signaling cascade needed for muscle growth.',
        'Cold exposure is best used strategically: after competitions, during high-frequency training phases, or when soreness limits subsequent sessions.',
        'Cryotherapy chambers (-110 C to -140 C for 2-3 minutes) show mixed evidence; cold water immersion has stronger research support.',
        'Cold showers (ending with 1-3 minutes of cold water) increase norepinephrine by 200-300%, improving alertness and mood.',
        'Sauna use (80-100 C for 15-20 minutes, 3-4 times per week) is associated with reduced cardiovascular mortality in epidemiological studies.',
        'Heat exposure increases heat shock proteins (HSPs), which assist in protein repair and may protect against muscle atrophy during detraining.',
        'Contrast therapy (alternating hot and cold exposure in 3-4 minute cycles) may be more practical and pleasant than cold alone.',
        'Post-sauna cooling with cold exposure activates the sympathetic nervous system briefly, then induces a strong parasympathetic rebound.',
        'Sauna use increases plasma volume and improves thermoregulation, which can benefit endurance performance in hot environments.',
      ],
    },
    {
      name: 'Compression & Massage',
      description:
        'External mechanical therapies including manual massage, percussion devices, compression garments, and pneumatic compression systems that target recovery through improved blood flow, lymphatic drainage, and reduced muscle stiffness.',
      details: [
        'Sports massage increases local blood flow and may reduce DOMS by 20-30% when performed within 2 hours post-exercise.',
        'Compression garments (15-30 mmHg) worn during and after exercise can reduce perceived soreness and muscle swelling.',
        'Pneumatic compression devices (NormaTec, RecoveryPump) use sequential inflation to enhance venous return and lymphatic drainage.',
        'Percussion therapy devices (Theragun, Hypervolt) apply rapid, repetitive pressure to reduce muscle tightness and increase range of motion.',
        'Massage has measurable psychological benefits: reduced anxiety, improved mood, and lowered perceived stress via oxytocin and serotonin release.',
        'Deep tissue massage may cause temporary soreness; lighter modalities are preferred for acute recovery between sessions.',
        'Compression garments show the strongest evidence for recovery when worn for 12-24 hours post-exercise, not just during training.',
        'Evidence for massage improving actual performance metrics (strength, power) is weaker than evidence for perceptual recovery benefits.',
        'Instrument-Assisted Soft Tissue Mobilization (IASTM / Graston) can address scar tissue and fascial adhesions but requires trained practitioners.',
      ],
    },
    {
      name: 'Nutrition for Recovery',
      description:
        'Nutritional strategies that support the repair of damaged muscle tissue, replenishment of glycogen stores, rehydration, and management of inflammation during the post-exercise recovery window.',
      details: [
        'The post-exercise "anabolic window" is broader than once believed: consuming protein within 2-3 hours post-training is sufficient for most people.',
        'Post-workout protein intake of 20-40 grams of high-quality protein (0.25-0.4 g/kg) maximally stimulates muscle protein synthesis.',
        'Leucine is the primary amino acid trigger for mTOR activation and muscle protein synthesis; aim for 2-3 grams per meal.',
        'Carbohydrate intake post-exercise replenishes glycogen; 0.8-1.2 g/kg/hr for the first 4 hours is recommended for athletes training twice daily.',
        'Glycogen resynthesis rate is highest in the first 2 hours post-exercise when GLUT4 transporter activity is elevated.',
        'Tart cherry juice (equivalent to 60-90 cherries per day) reduces inflammatory markers and DOMS due to anthocyanin content.',
        'Omega-3 fatty acids (2-4 g/day of EPA+DHA) have anti-inflammatory effects and may reduce exercise-induced muscle damage.',
        'Creatine monohydrate (3-5 g/day) supports recovery by replenishing phosphocreatine stores and potentially reducing muscle damage markers.',
        'Adequate hydration (replacing 150% of fluid lost during exercise) is critical; dehydration of 2% body weight impairs recovery and performance.',
        'Vitamin D deficiency (common in indoor athletes and northern latitudes) impairs muscle repair; maintain serum levels of 40-60 ng/mL.',
      ],
      subtopics: [
        {
          name: 'Anti-Inflammatory Nutrition',
          description:
            'Dietary patterns and specific nutrients that modulate inflammation to support recovery without blunting adaptive signaling.',
          details: [
            'A Mediterranean-style diet rich in fruits, vegetables, olive oil, and fatty fish provides broad anti-inflammatory benefits.',
            'Curcumin (from turmeric) at 500-1000 mg/day with black pepper (piperine) improves bioavailability and reduces exercise-induced inflammation.',
            'Excessive NSAID use (ibuprofen, naproxen) can impair muscle protein synthesis, gut health, and kidney function; use sparingly.',
            'Polyphenol-rich foods (berries, dark chocolate, green tea) provide antioxidants that support recovery without the risks of high-dose supplements.',
          ],
        },
      ],
    },
    {
      name: 'Overreaching vs Overtraining',
      description:
        'Overreaching and overtraining represent a continuum of maladaptation caused by an imbalance between training stress and recovery. Functional overreaching is a planned, short-term strategy; non-functional overreaching and overtraining syndrome are pathological states requiring extended recovery.',
      details: [
        'Functional overreaching (FOR) involves intentionally increasing training load for 1-3 weeks, followed by a taper to induce supercompensation.',
        'Non-functional overreaching (NFOR) results in performance decrements lasting weeks to months; recovery requires weeks of reduced training.',
        'Overtraining syndrome (OTS) is a severe, chronic maladaptation with performance decrements lasting months; diagnosis requires exclusion of other causes.',
        'OTS symptoms include persistent fatigue, mood disturbance, insomnia, loss of appetite, hormonal disruption, and increased illness frequency.',
        'The sympathetic form of overtraining (more common in power/speed athletes) presents as restlessness, elevated resting heart rate, and irritability.',
        'The parasympathetic form (more common in endurance athletes) presents as lethargy, depression, bradycardia, and low motivation.',
        'Training monotony (lack of variation in daily training load) is a stronger predictor of overtraining than total volume alone.',
        'The ratio of training stress to recovery capacity is more important than absolute training volume in predicting overtraining risk.',
        'Life stressors (work, relationships, financial stress) contribute to total allostatic load and must be accounted for in training planning.',
        'Recovery from OTS can take 3-6 months of significantly reduced training and requires addressing all contributing stressors.',
      ],
    },
    {
      name: 'Heart Rate Variability (HRV)',
      description:
        'HRV measures the variation in time between consecutive heartbeats (R-R intervals) and reflects autonomic nervous system balance. Higher HRV generally indicates greater parasympathetic activity and better recovery status, while chronically low HRV suggests accumulated stress or fatigue.',
      details: [
        'HRV is measured as the variation in R-R intervals (time between successive heartbeats) and reflects autonomic nervous system balance.',
        'Higher HRV (greater beat-to-beat variation) indicates parasympathetic dominance and is associated with better recovery status.',
        'HRV should be measured first thing in the morning, in a consistent position (supine or seated), for 1-5 minutes.',
        'The RMSSD (root mean square of successive differences) metric is the most common time-domain HRV measure for recovery monitoring.',
        'Individual baseline HRV varies enormously (20-100+ ms RMSSD); always compare to personal trends, never to population norms.',
        'A 7-day rolling average of HRV is more informative than day-to-day values, which fluctuate due to numerous acute factors.',
        'HRV-guided training (adjusting intensity based on morning HRV readings) has been shown to produce equal or better outcomes than fixed programming.',
        'Alcohol, poor sleep, dehydration, illness, and psychological stress all acutely suppress HRV.',
        'Apps like HRV4Training, Elite HRV, and the WHOOP platform provide validated HRV tracking with training recommendations.',
        'HRV trends over weeks/months are more meaningful than single-day readings; a downward trend signals accumulating fatigue.',
      ],
    },
    {
      name: 'Recovery Monitoring',
      description:
        'Systematic approaches to tracking recovery status using subjective questionnaires, objective biomarkers, and performance tests to make informed training decisions.',
      details: [
        'Subjective wellness questionnaires (mood, sleep quality, muscle soreness, stress, fatigue) rated on a 1-5 scale are simple and effective.',
        'The perceived recovery status (PRS) scale (0-10) correlates well with objective recovery markers and takes seconds to administer.',
        'Resting heart rate elevation of 5+ bpm above baseline for consecutive mornings suggests incomplete recovery.',
        'Grip strength measured with a hand dynamometer can detect neuromuscular fatigue; a 5-10% decline suggests incomplete recovery.',
        'Countermovement jump (CMJ) height tested with a force plate or jump mat is sensitive to neuromuscular fatigue status.',
        'Blood biomarkers: creatine kinase (CK) indicates muscle damage, cortisol-to-testosterone ratio reflects hormonal recovery status.',
        'Training load metrics like TRIMP (Training Impulse), sRPE (session RPE x duration), and acute:chronic workload ratio help manage fatigue.',
        'The acute-to-chronic workload ratio (ACWR) should stay between 0.8-1.3; spikes above 1.5 dramatically increase injury risk.',
        'Combining subjective (questionnaires) and objective (HRV, performance tests) measures provides the most complete picture of recovery.',
        'Mood disturbance (Profile of Mood States / POMS questionnaire) is one of the earliest and most sensitive indicators of overreaching.',
      ],
    },
    {
      name: 'Periodization of Recovery',
      description:
        'Integrating recovery strategically into the training plan at micro (daily/weekly), meso (monthly), and macro (annual) levels to maximize long-term adaptation and minimize injury risk.',
      details: [
        'Microcycle recovery: plan at least 1-2 full rest or active recovery days per week depending on training intensity and volume.',
        'Mesocycle recovery: include a deload week (reduced volume) every 3-6 weeks depending on training advancement.',
        'Macrocycle recovery: plan transition periods (1-3 weeks of unstructured activity) between major training phases or competitive seasons.',
        'Undulating periodization naturally varies stress and recovery within a week, reducing the need for formal deload weeks in some cases.',
        'Block periodization concentrates training stimuli and requires carefully planned recovery blocks between high-stress phases.',
        'The general adaptation syndrome (GAS) model (alarm, resistance, exhaustion) underpins the need for cyclical recovery planning.',
        'Recovery needs increase with training age: beginners recover faster and need less structured recovery than advanced athletes.',
        'Sleep, nutrition, and stress management should be periodized alongside training; recovery demands increase as training loads increase.',
        'Competition tapers typically reduce volume by 40-60% over 1-3 weeks while maintaining intensity to peak performance.',
        'Annual planning should include at least 2-4 weeks of low-structure, low-intensity activity to allow psychological and physical renewal.',
      ],
    },
  ],
  keyTerms: [
    {
      term: 'Supercompensation',
      definition:
        'The physiological process by which the body recovers beyond its previous baseline capacity following a training stimulus and adequate rest, resulting in improved performance.',
    },
    {
      term: 'DOMS (Delayed-Onset Muscle Soreness)',
      definition:
        'Muscle pain and stiffness that develops 24-72 hours after unaccustomed or eccentric-heavy exercise, caused by microstructural muscle damage and the subsequent inflammatory response.',
    },
    {
      term: 'Parasympathetic Nervous System',
      definition:
        'The "rest and digest" branch of the autonomic nervous system that promotes recovery processes including reduced heart rate, increased digestion, and tissue repair.',
    },
    {
      term: 'Sympathetic Nervous System',
      definition:
        'The "fight or flight" branch of the autonomic nervous system that mobilizes the body for action, increasing heart rate, blood pressure, and cortisol release.',
    },
    {
      term: 'HRV (Heart Rate Variability)',
      definition:
        'The variation in time intervals between consecutive heartbeats, used as a non-invasive marker of autonomic nervous system balance and recovery status.',
    },
    {
      term: 'RMSSD',
      definition:
        'Root Mean Square of Successive Differences, a time-domain HRV metric that reflects parasympathetic cardiac modulation and is the most common measure used for recovery monitoring.',
    },
    {
      term: 'Deload',
      definition:
        'A planned period (typically 1 week) of reduced training volume and/or intensity designed to allow accumulated fatigue to dissipate while maintaining training adaptations.',
    },
    {
      term: 'Functional Overreaching',
      definition:
        'A planned, short-term increase in training load (1-3 weeks) beyond normal capacity that, when followed by adequate recovery, leads to supercompensation and performance gains.',
    },
    {
      term: 'Overtraining Syndrome (OTS)',
      definition:
        'A chronic maladaptation resulting from prolonged imbalance between training stress and recovery, characterized by persistent performance decrements, hormonal disruption, and mood disturbance lasting months.',
    },
    {
      term: 'Sleep Architecture',
      definition:
        'The cyclical structure and pattern of sleep stages (NREM 1, 2, 3 and REM) throughout a sleep period, which determines the restorative quality of sleep.',
    },
    {
      term: 'Slow-Wave Sleep (SWS)',
      definition:
        'The deepest stage of non-REM sleep (stage 3), characterized by delta brain waves, during which growth hormone release peaks and physical restoration is most active.',
    },
    {
      term: 'Glymphatic System',
      definition:
        'A waste clearance system in the brain that is most active during deep sleep, removing metabolic byproducts such as beta-amyloid that accumulate during waking hours.',
    },
    {
      term: 'Cryotherapy',
      definition:
        'The therapeutic use of cold temperatures (cold water immersion, ice baths, or cryo-chambers) to reduce inflammation, soreness, and pain following exercise.',
    },
    {
      term: 'Heat Shock Proteins (HSPs)',
      definition:
        'A family of proteins produced in response to heat stress (e.g., sauna use) that assist in protein folding, repair of damaged proteins, and cellular protection against stress.',
    },
    {
      term: 'Acute-to-Chronic Workload Ratio (ACWR)',
      definition:
        'The ratio of recent training load (typically last 7 days) to longer-term training load (typically last 28 days), used to identify injury risk from training load spikes.',
    },
    {
      term: 'Allostatic Load',
      definition:
        'The cumulative physiological burden on the body from all sources of stress (training, work, emotional, environmental), which determines total recovery demands.',
    },
    {
      term: 'Cortisol',
      definition:
        'A glucocorticoid hormone released by the adrenal glands in response to stress that promotes catabolism; chronically elevated cortisol impairs recovery, immune function, and sleep.',
    },
    {
      term: 'Growth Hormone (GH)',
      definition:
        'An anabolic hormone released primarily during deep sleep and intense exercise that stimulates tissue repair, protein synthesis, and fat metabolism.',
    },
    {
      term: 'mTOR (Mechanistic Target of Rapamycin)',
      definition:
        'A cellular signaling pathway that regulates muscle protein synthesis, activated by mechanical tension (resistance training), amino acids (especially leucine), and insulin.',
    },
    {
      term: 'Session RPE (sRPE)',
      definition:
        'A training load metric calculated by multiplying the session rating of perceived exertion (RPE, 1-10 scale) by session duration in minutes.',
    },
    {
      term: 'Contrast Therapy',
      definition:
        'A recovery method alternating between hot (38-42 C) and cold (10-15 C) water immersion in timed cycles to promote blood flow and reduce inflammation.',
    },
    {
      term: 'Phosphocreatine',
      definition:
        'An intramuscular energy reserve that rapidly regenerates ATP during high-intensity, short-duration efforts; it is fully replenished within 3-5 minutes of rest.',
    },
    {
      term: 'GLUT4 Transporters',
      definition:
        'Insulin-responsive glucose transporter proteins that translocate to the muscle cell membrane during and after exercise, enhancing glucose uptake for glycogen resynthesis.',
    },
    {
      term: 'Creatine Kinase (CK)',
      definition:
        'An enzyme released into the bloodstream when muscle cells are damaged; elevated CK levels are used as a biomarker of exercise-induced muscle damage.',
    },
    {
      term: 'Training Monotony',
      definition:
        'A measure of day-to-day variation in training load, calculated as the mean daily load divided by its standard deviation; high monotony increases overtraining risk even at moderate total volumes.',
    },
    {
      term: 'Melatonin',
      definition:
        'A hormone produced by the pineal gland in response to darkness that regulates the sleep-wake cycle; its secretion is suppressed by blue light exposure.',
    },
    {
      term: 'Circadian Rhythm',
      definition:
        'The approximately 24-hour internal biological clock that regulates sleep-wake cycles, hormone release, body temperature, and other physiological processes.',
    },
    {
      term: 'Muscle Protein Synthesis (MPS)',
      definition:
        'The process of building new muscle proteins to repair and grow muscle tissue, stimulated by resistance training and dietary protein intake, particularly leucine.',
    },
    {
      term: 'Glycogen',
      definition:
        'The stored form of glucose in muscles and the liver, serving as the primary fuel source for moderate-to-high intensity exercise; full replenishment takes 24-48 hours.',
    },
    {
      term: 'Taper',
      definition:
        'A planned reduction in training volume (typically 40-60%) in the 1-3 weeks before competition, designed to shed fatigue while preserving fitness for peak performance.',
    },
  ],
  tips: [
    'Prioritize sleep above all other recovery modalities; no supplement, gadget, or therapy can compensate for chronically poor sleep.',
    'Track your resting heart rate and HRV every morning to detect early signs of accumulated fatigue before performance declines.',
    'Schedule deload weeks proactively every 4-6 weeks rather than waiting until you feel overtrained.',
    'Consume 20-40 grams of protein within 2-3 hours post-training to maximize muscle protein synthesis.',
    'Use cold water immersion strategically (after competitions or during peaking phases) rather than routinely after every session, as it may blunt hypertrophy adaptations.',
    'Maintain consistent sleep and wake times (within 30 minutes) seven days a week, even on weekends.',
    'Account for life stress (work, relationships, finances) when planning training loads; all stress draws from the same recovery pool.',
    'Use subjective wellness questionnaires daily; they are free, fast, and often detect fatigue before objective markers change.',
    'Aim for 8,000-10,000 daily steps as a baseline for general health and recovery-promoting movement.',
    'Limit caffeine intake to before 2 PM and alcohol to no more than 1-2 standard drinks per occasion to protect sleep quality.',
  ],
  faqs: [
    {
      question: 'How many rest days per week do I need?',
      answer:
        'Most people benefit from 2-3 rest or active recovery days per week. Beginners may need more rest days as they adapt to training, while advanced athletes may train 5-6 days with carefully managed volume. The key is total weekly recovery balance, not a single magic number. Listen to your body and track recovery markers.',
    },
    {
      question: 'Are ice baths good for muscle growth?',
      answer:
        'Cold water immersion immediately after resistance training may blunt muscle hypertrophy by attenuating the inflammatory signaling cascade that triggers muscle growth. If your primary goal is building muscle, avoid ice baths within 4-6 hours post-strength training. However, ice baths remain valuable after competitions, during high-frequency training phases, or when reducing soreness is the priority.',
    },
    {
      question: 'What is the best recovery supplement?',
      answer:
        'No supplement replaces adequate sleep, nutrition, and training management. That said, creatine monohydrate (3-5 g/day) has the strongest evidence for supporting recovery and performance. Tart cherry juice, omega-3 fatty acids, and vitamin D (if deficient) also have solid research support. Always prioritize whole food nutrition before supplementation.',
    },
    {
      question: 'How do I know if I am overtrained?',
      answer:
        'True overtraining syndrome is rare and diagnosed by exclusion. Key signs include persistent performance decline lasting weeks despite adequate rest, chronic fatigue unrelieved by sleep, mood disturbance (irritability, depression, anxiety), recurrent illness, hormonal disruption, and loss of motivation. More commonly, athletes experience non-functional overreaching, which resolves with 1-2 weeks of reduced training.',
    },
    {
      question: 'Should I train if I am sore?',
      answer:
        'Mild to moderate soreness is normal and does not require complete rest. Light training or active recovery can actually reduce soreness by increasing blood flow. However, severe soreness that limits range of motion or alters movement patterns is a signal to rest or train a different body part. Never push through sharp or localized joint pain.',
    },
    {
      question: 'Does stretching help recovery?',
      answer:
        'Static stretching post-exercise may provide a small reduction in perceived soreness but has limited effect on objective recovery markers. Dynamic stretching and light movement (active recovery) are generally more effective for recovery. Stretching is most valuable for maintaining or improving flexibility over time, rather than as an acute recovery tool.',
    },
    {
      question: 'How long should I sleep for optimal recovery?',
      answer:
        'Most adults need 7-9 hours of sleep per night. Athletes under heavy training loads may benefit from 9-10 hours. Sleep quality matters as much as duration: uninterrupted sleep with adequate deep sleep (SWS) and REM stages is essential. If you consistently need an alarm to wake up or feel unrefreshed after 8+ hours, investigate potential sleep disorders.',
    },
    {
      question: 'What is the difference between a rest day and a deload week?',
      answer:
        'A rest day is a single day of no training or light activity within a weekly microcycle. A deload week is an entire week of reduced training volume (typically 40-60% reduction) designed to dissipate accumulated fatigue across multiple training weeks. Rest days manage day-to-day fatigue; deload weeks manage mesocycle-level fatigue accumulation.',
    },
    {
      question: 'Is foam rolling actually effective?',
      answer:
        'Foam rolling has moderate evidence for reducing perceived muscle soreness and temporarily improving range of motion. It likely works through neurological mechanisms (pain modulation) rather than physically breaking up fascial adhesions. It is a safe, low-cost recovery tool that most people find beneficial, though its effects are modest.',
    },
    {
      question: 'How does alcohol affect recovery?',
      answer:
        'Alcohol impairs recovery through multiple mechanisms: it disrupts sleep architecture (suppressing REM sleep), reduces muscle protein synthesis by up to 37%, increases cortisol levels, promotes dehydration, and impairs glycogen resynthesis. Even moderate consumption (2-3 drinks) can measurably impair recovery for 24-48 hours.',
    },
    {
      question: 'What is HRV and should I track it?',
      answer:
        'Heart Rate Variability (HRV) measures the variation between heartbeats and reflects your autonomic nervous system balance. Higher HRV generally indicates better recovery. Tracking morning HRV trends (7-day rolling average) can help guide training decisions. It is most useful for serious athletes who train 4+ days per week and are willing to measure consistently.',
    },
    {
      question: 'Can I do too much recovery?',
      answer:
        'Yes. Over-emphasizing passive recovery (excessive rest, constant use of recovery gadgets) can lead to detraining and create a psychological dependency on recovery rituals. Recovery should be proportional to training stress. The goal is to train as much as you can productively recover from, not to minimize all stress.',
    },
    {
      question: 'Is sauna use beneficial for recovery?',
      answer:
        'Sauna use (80-100 C for 15-20 minutes, 3-4 times per week) has demonstrated benefits including reduced perceived soreness, improved cardiovascular health markers, increased heat shock protein production, and enhanced relaxation. Epidemiological data from Finland associates regular sauna use with reduced all-cause mortality. Hydrate well before and after sauna sessions.',
    },
    {
      question: 'How important is protein timing for recovery?',
      answer:
        'The post-exercise "anabolic window" is wider than previously believed. Consuming 20-40 grams of quality protein within 2-3 hours of training is sufficient. Total daily protein intake (1.6-2.2 g/kg body weight for strength athletes) matters more than precise timing. However, distributing protein evenly across 3-5 meals maximizes daily muscle protein synthesis.',
    },
    {
      question: 'Should I train through mild illness?',
      answer:
        'Use the "neck check" as a guideline: if symptoms are above the neck only (mild congestion, sore throat without fever), light exercise is generally safe. If symptoms are below the neck (chest congestion, body aches, fever, nausea, diarrhea), rest completely. Fever always warrants complete rest. When in doubt, an extra rest day is safer than risking prolonged illness.',
    },
  ],
};
