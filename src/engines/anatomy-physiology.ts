import type { EngineData } from '../types';

export const anatomyPhysiologyEngine: EngineData = {
  category: 'anatomy-physiology',
  title: 'Anatomy & Exercise Physiology',
  description:
    'Comprehensive guide to the human body systems relevant to exercise and fitness, including muscular, skeletal, and cardiovascular anatomy, biomechanics, energy systems, and neural adaptations to training.',
  topics: [
    {
      name: 'Muscular System',
      description:
        'The major muscle groups of the body, their functions, fiber type composition, and relevance to resistance training programming.',
      details: [
        'The human body contains approximately 600 skeletal muscles, but resistance training primarily targets about 10-12 major muscle groups organized into pushing, pulling, and lower body categories.',
        'Muscles are composed of two main fiber types: Type I (slow-twitch, oxidative, fatigue-resistant, endurance-oriented) and Type II (fast-twitch, glycolytic, powerful, fatigue-prone), with Type IIa being intermediate.',
        'Fiber type distribution varies by muscle: the soleus is approximately 80% Type I, while the triceps lateral head is approximately 60% Type II, influencing optimal training rep ranges for each muscle.',
        'Muscle growth (hypertrophy) occurs primarily through three mechanisms: mechanical tension (heavy loading), metabolic stress (pump, burn), and muscle damage (microtrauma), with mechanical tension being the primary driver.',
        'The chest consists of the pectoralis major (clavicular and sternal heads) and pectoralis minor; the clavicular head is best targeted with incline pressing at 30-45 degrees.',
        'The back includes the latissimus dorsi (widest muscle, responsible for pull-down and rowing motions), trapezius (upper, middle, lower fibers), rhomboids, teres major, and erector spinae group.',
        'The deltoids have three heads (anterior, lateral, posterior) each requiring different movement patterns: pressing for anterior, lateral raises for lateral, and reverse flies for posterior.',
        'The quadriceps (rectus femoris, vastus lateralis, vastus medialis, vastus intermedius), hamstrings (biceps femoris, semimembranosus, semitendinosus), and glutes (maximus, medius, minimus) are the primary lower body muscles.',
      ],
      subtopics: [
        {
          name: 'Upper Body Muscles',
          description: 'Detailed anatomy of the major upper body muscle groups used in resistance training.',
          details: [
            'The biceps brachii has a long head (outer) and short head (inner), crosses both the shoulder and elbow joints, and is most active during supinated (palms up) curling movements.',
            'The triceps brachii has three heads (long, lateral, medial) and makes up approximately 60-65% of upper arm mass; the long head is best targeted with overhead extension movements.',
            'The rotator cuff (supraspinatus, infraspinatus, teres minor, subscapularis) stabilizes the shoulder joint and must be strengthened to prevent impingement during pressing movements.',
            'The forearm contains over 20 muscles controlling wrist and finger movement; grip strength correlates highly with overall upper body strength and is often a limiting factor in pulling exercises.',
          ],
        },
        {
          name: 'Core Musculature',
          description: 'The deep and superficial muscles that stabilize the trunk during all movements.',
          details: [
            'The rectus abdominis is a single continuous muscle (the "six-pack" appearance is due to tendinous intersections) that flexes the trunk; it cannot be isolated into "upper" and "lower" sections.',
            'The transverse abdominis is the deepest abdominal muscle and acts as a natural weight belt, creating intra-abdominal pressure to stabilize the spine during heavy lifting.',
            'The obliques (internal and external) provide rotational force and lateral flexion; anti-rotation exercises like Pallof presses train them more functionally than twisting movements.',
            'The erector spinae group (iliocostalis, longissimus, spinalis) runs along the spine and provides extension force; it works isometrically during squats and deadlifts to maintain spinal position.',
          ],
        },
      ],
    },
    {
      name: 'Skeletal System',
      description:
        'The bony framework that provides structure, protection, and leverage for movement, and how it adapts to training.',
      details: [
        'The adult human skeleton contains 206 bones that provide structural support, protect vital organs, produce blood cells (in red marrow), store minerals (calcium, phosphorus), and serve as lever arms for muscle action.',
        'Wolff Law states that bone remodels in response to mechanical stress; resistance training increases bone mineral density by 1-3% per year, making it the most effective exercise intervention for osteoporosis prevention.',
        'The spine consists of 7 cervical, 12 thoracic, 5 lumbar, 5 fused sacral, and 4 fused coccygeal vertebrae; the lumbar spine bears the greatest load during lifting and is most vulnerable to injury.',
        'Intervertebral discs consist of a gel-like nucleus pulposus surrounded by a fibrous annulus fibrosus; they act as shock absorbers and allow spinal flexibility but are vulnerable to herniation under excessive flexion-compression loads.',
        'The shoulder girdle (clavicle and scapula) is the most mobile joint complex in the body, sacrificing stability for range of motion, which is why shoulder injuries are so common in training.',
        'The hip joint (femoral head in the acetabulum) is a deep ball-and-socket joint designed for stability and weight-bearing; individual acetabular depth and femoral neck angle significantly affect squat mechanics.',
        'Bone adaptation to loading occurs over months (slower than muscle), which is why gradually progressive overload is important; sudden load increases can cause stress fractures before bone has adequately remodeled.',
        'The long bones (femur, humerus, tibia) act as levers in the musculoskeletal system; limb length ratios significantly influence individual biomechanics and exercise selection.',
      ],
    },
    {
      name: 'Cardiovascular System',
      description:
        'The heart, blood vessels, and blood that deliver oxygen and nutrients to working muscles and remove metabolic waste products.',
      details: [
        'The heart pumps approximately 5 liters of blood per minute at rest (cardiac output) and can increase to 20-35 liters per minute during maximal exercise in trained individuals.',
        'Cardiac output = Heart Rate x Stroke Volume; endurance training primarily increases stroke volume (volume per beat), allowing a lower resting heart rate while maintaining the same cardiac output.',
        'Resting heart rate in trained endurance athletes can be 40-60 bpm compared to 60-80 bpm in untrained individuals, reflecting increased cardiac efficiency and vagal tone.',
        'VO2max (maximal oxygen consumption) is the gold standard measure of aerobic fitness, typically 35-45 mL/kg/min in untrained adults and 60-85+ mL/kg/min in elite endurance athletes.',
        'Blood pressure responses during exercise: systolic pressure rises progressively (from 120 to 200+ mmHg during heavy resistance training), while diastolic pressure remains stable or slightly decreases during aerobic exercise.',
        'The arteriovenous oxygen difference (a-vO2 diff) increases with training as muscles become more efficient at extracting oxygen from blood, contributing to improved aerobic performance.',
        'Capillary density increases with endurance training, improving oxygen and nutrient delivery to muscle fibers; resistance training also increases capillarization proportional to muscle fiber growth.',
        'Regular cardiovascular exercise reduces resting blood pressure by 5-10 mmHg, improves lipid profiles (increases HDL, decreases triglycerides), and reduces cardiovascular disease risk by 30-50%.',
      ],
    },
    {
      name: 'Muscle Contraction Mechanics',
      description:
        'The molecular and physiological mechanisms by which muscles generate force, from neural signaling to the sliding filament theory.',
      details: [
        'Muscle contraction begins with a motor neuron releasing acetylcholine at the neuromuscular junction, triggering an action potential that propagates along the sarcolemma and into the T-tubules.',
        'The sliding filament theory explains contraction: calcium released from the sarcoplasmic reticulum binds to troponin, exposing binding sites on actin, allowing myosin cross-bridges to pull actin filaments inward.',
        'The motor unit (a motor neuron plus all the muscle fibers it innervates) is the functional unit of muscle contraction; small motor units control fine movements, while large motor units generate high force.',
        'Force production is regulated by motor unit recruitment (activating more motor units) and rate coding (increasing the firing frequency of active motor units), following the size principle from small to large.',
        'Three types of muscle contraction: concentric (shortening under tension, e.g., lifting phase), eccentric (lengthening under tension, e.g., lowering phase), and isometric (no length change, e.g., holding a position).',
        'Eccentric contractions can generate 20-40% more force than concentric contractions using the same muscle, which is why you can control a heavier weight down than you can lift up.',
        'The length-tension relationship shows that muscles produce maximum force at an intermediate length (optimal actin-myosin overlap) and less force when fully shortened or fully stretched.',
        'The force-velocity relationship demonstrates that muscles produce more force at slower contraction speeds and less force at higher speeds, explaining why heavier weights must be moved more slowly.',
      ],
    },
    {
      name: 'Kinesiology & Biomechanics',
      description:
        'The study of human movement mechanics and how forces interact with the body during exercise.',
      details: [
        'Biomechanics applies Newton laws of motion to human movement: force equals mass times acceleration, every action has an equal and opposite reaction, and objects resist changes in motion (inertia).',
        'Leverage in the body works through three classes of levers: first class (rare, like neck extension), second class (rare, like calf raise), and third class (most common, like bicep curl).',
        'Moment arm is the perpendicular distance between the line of force and the joint axis of rotation; longer moment arms produce greater torque demand, explaining why exercises feel harder at certain joint angles.',
        'Individual anthropometry (limb lengths, torso proportions, insertion points) significantly affects exercise mechanics; a long-femur individual squats very differently from a short-femur individual.',
        'Ground reaction forces during exercise can exceed 2-5 times body weight during running and 6-8 times body weight during heavy squats, which tissues must be progressively conditioned to tolerate.',
        'The center of mass (COM) must remain over the base of support for stability; exercises like front squats and overhead presses require specific postural adjustments to maintain balance.',
        'Joint torque = Force x Moment arm; understanding torque demands at each joint helps explain why certain exercises stress particular muscles more at specific ranges of motion.',
        'Bilateral deficit is the phenomenon where the sum of force produced by each limb individually is 5-20% greater than the force produced when both limbs work simultaneously.',
      ],
    },
    {
      name: 'Planes of Motion',
      description:
        'The three anatomical planes through which all human movement occurs and their application to exercise selection.',
      details: [
        'The sagittal plane divides the body into left and right halves; movements in this plane include flexion and extension (squats, bicep curls, running, deadlifts) and represent the majority of gym exercises.',
        'The frontal (coronal) plane divides the body into front and back; movements include abduction, adduction, lateral flexion, and eversion/inversion (lateral raises, side lunges, lateral band walks).',
        'The transverse (horizontal) plane divides the body into upper and lower halves; movements include rotation, horizontal flexion/extension, and pronation/supination (cable woodchops, Russian twists, throwing).',
        'Most real-world and athletic movements occur in multiple planes simultaneously (a throwing motion involves sagittal, frontal, and transverse plane components), making multi-planar training important.',
        'Traditional gym training overemphasizes the sagittal plane; incorporating frontal and transverse plane exercises (lateral movements, rotational exercises) improves functional strength and reduces injury risk.',
        'Anti-movement exercises (anti-rotation, anti-lateral flexion, anti-extension) train the core to resist unwanted motion in each plane, which is more functional than producing motion in those planes.',
      ],
    },
    {
      name: 'Joint Types & Actions',
      description:
        'The classification of joints in the body and the movements they permit, essential for understanding exercise mechanics.',
      details: [
        'Synovial joints (freely movable) are the primary joints involved in exercise and include hinge (elbow, knee), ball-and-socket (hip, shoulder), pivot (radius-ulna), saddle (thumb), and gliding (intercarpal) types.',
        'The shoulder (glenohumeral joint) permits the greatest range of motion of any joint: flexion, extension, abduction, adduction, internal rotation, external rotation, and circumduction.',
        'The knee is primarily a hinge joint allowing flexion and extension, with some rotational ability when flexed; the menisci, cruciate ligaments, and collateral ligaments provide stability.',
        'The hip joint permits flexion (typically 120 degrees), extension (30 degrees), abduction (45 degrees), adduction (30 degrees), and internal/external rotation (45 degrees each), varying significantly between individuals.',
        'Ankle dorsiflexion (pulling toes toward shin) typically ranges from 10-20 degrees and is a common mobility limitation that affects squat depth, causing compensatory movement at the knee and lower back.',
        'The spine permits flexion, extension, lateral flexion, and rotation; the lumbar region primarily allows flexion-extension, while the thoracic region allows more rotation due to rib and vertebral orientation.',
        'Joint stability exists on a spectrum with mobility: the shoulder sacrifices stability for mobility (prone to dislocations), while the hip sacrifices some mobility for stability (weight-bearing function).',
        'Understanding joint actions allows precise exercise selection: if the biceps performs elbow flexion and forearm supination, the most complete bicep exercise includes both actions (supinating dumbbell curl).',
      ],
    },
    {
      name: 'Neural Adaptations to Training',
      description:
        'How the nervous system adapts to resistance training, accounting for much of the early strength gains in beginners.',
      details: [
        'Neural adaptations account for the majority (60-80%) of strength gains in the first 4-8 weeks of training, before significant muscle hypertrophy occurs.',
        'Increased motor unit recruitment allows the nervous system to activate a greater percentage of available muscle fibers; untrained individuals may only recruit 60-70% of their motor units voluntarily.',
        'Improved rate coding (faster firing frequency of motor neurons) allows recruited motor units to produce force more rapidly, contributing to increased rate of force development and power.',
        'Enhanced intermuscular coordination improves the timing and sequencing of agonist, antagonist, and synergist muscle activation, making complex movements like squats and deadlifts more efficient.',
        'Reduced co-contraction of antagonist muscles (e.g., less hamstring activation during knee extension) occurs with training, allowing more net force production in the desired direction.',
        'The cross-education effect demonstrates that unilateral training can produce strength gains of 5-15% in the untrained contralateral limb, purely through neural mechanisms.',
        'Skill acquisition in complex lifts (Olympic lifts, squats, deadlifts) involves establishing and refining motor programs in the cerebellum and motor cortex, requiring consistent practice for automaticity.',
        'Neural adaptations are highly specific to the movement pattern, contraction type, velocity, and joint angle trained, which is why the principle of specificity is fundamental to exercise programming.',
      ],
    },
    {
      name: 'Energy Systems',
      description:
        'The three metabolic pathways that produce ATP (energy currency) for muscle contraction during different types and intensities of exercise.',
      details: [
        'The ATP-PC (phosphocreatine) system provides immediate energy for high-intensity efforts lasting 0-10 seconds (heavy singles, sprints, jumps) without requiring oxygen; PC stores are depleted in 6-10 seconds.',
        'The glycolytic (anaerobic) system breaks down glucose to produce ATP for moderate-to-high intensity efforts lasting 10 seconds to 2-3 minutes (sets of 8-15 reps, 400m sprints); produces lactate as a byproduct.',
        'The oxidative (aerobic) system uses oxygen to metabolize carbohydrates, fats, and small amounts of protein for low-to-moderate intensity efforts lasting beyond 2-3 minutes; dominant during steady-state cardio.',
        'All three energy systems are active at all times; the contribution of each depends on exercise intensity and duration, with higher intensities relying more on anaerobic systems and lower intensities on aerobic.',
        'ATP (adenosine triphosphate) is the universal energy currency of all cells; muscles store only enough ATP for approximately 1-2 seconds of maximum effort, requiring constant regeneration.',
        'Creatine supplementation (3-5 g/day) increases intramuscular phosphocreatine stores by 20-40%, improving performance in short, high-intensity efforts and supporting the ATP-PC system.',
        'Lactate (not lactic acid) is actually a useful fuel that can be recycled by the heart, liver, and other muscles through the Cori cycle; the "lactic acid causes soreness" myth has been debunked.',
        'Training at specific intensities preferentially develops the corresponding energy system: heavy singles/doubles develop ATP-PC, moderate rep ranges develop glycolytic, and endurance work develops oxidative capacity.',
      ],
      subtopics: [
        {
          name: 'ATP-PC System',
          description: 'The immediate energy system for maximum-intensity, short-duration activities.',
          details: [
            'Phosphocreatine (PCr) donates a phosphate group to ADP to rapidly regenerate ATP via the creatine kinase enzyme, without requiring oxygen or producing fatigue-inducing byproducts.',
            'PCr stores are approximately 80% replenished in 30 seconds and 95% replenished in 2-3 minutes of rest, which dictates rest periods for maximal strength and power training.',
            'This system is dominant during 1-5 rep max efforts, Olympic lifts, short sprints, and explosive jumps, making it the primary system for strength and power athletes.',
            'Training the ATP-PC system involves maximal effort sets of 1-5 reps with 2-5 minutes rest, heavy resistance (85-100% 1RM), and explosive movements.',
          ],
        },
        {
          name: 'Oxidative System',
          description: 'The aerobic energy pathway for sustained, lower-intensity exercise.',
          details: [
            'The oxidative system produces ATP through the Krebs cycle and electron transport chain in the mitochondria, yielding 36-38 ATP per glucose molecule compared to 2 ATP from anaerobic glycolysis.',
            'Fat oxidation during the oxidative pathway is highest at approximately 60-70% VO2max (moderate intensity); above this threshold, the contribution of carbohydrate oxidation increases progressively.',
            'Endurance training increases mitochondrial density by 50-100%, capillary density by 20-40%, and oxidative enzyme activity, dramatically improving the capacity of the aerobic energy system.',
            'The aerobic system is important even for strength athletes, as it drives recovery between sets and between training sessions; a base level of aerobic fitness supports overall training capacity.',
          ],
        },
      ],
    },
    {
      name: 'Body Types (Somatotypes)',
      description:
        'The classification of body types and how individual anthropometry and genetics influence training responses and programming.',
      details: [
        'The somatotype system classifies body types into three categories: ectomorph (narrow frame, long limbs, difficulty gaining weight), mesomorph (broad shoulders, muscular build), and endomorph (wider hips, tendency to store fat).',
        'Most people are a blend of somatotypes rather than purely one type; the Heath-Carter method rates individuals on a 1-7 scale for each component to describe their unique body composition profile.',
        'Somatotype influences exercise mechanics: ectomorphs with long limbs have longer moment arms making exercises like squats and bench press mechanically harder, but may excel at deadlifts.',
        'Metabolic differences between somatotypes are often overstated; NEAT levels and appetite regulation (which vary between individuals) play a larger role in weight management than inherent metabolic rate differences.',
        'Muscle insertion points are genetically determined and affect muscle shape and peak contraction force; for example, a longer biceps insertion produces a fuller muscle belly but less peak height.',
        'Fiber type distribution has a genetic component (50-70% heritable) and influences training response; individuals with more Type II fibers may respond better to heavy, explosive training.',
        'Regardless of somatotype, all individuals can build significant muscle and strength with proper training and nutrition; genetics influence the rate and ceiling of adaptation, not the ability to adapt.',
        'Limb-to-torso proportions significantly affect optimal exercise form and selection; long-femur individuals may benefit from wider squat stances and higher bar positions, while short-femur individuals can squat more upright.',
      ],
    },
  ],
  keyTerms: [
    {
      term: 'Hypertrophy',
      definition:
        'Increase in muscle fiber size (cross-sectional area) resulting from resistance training, occurring through myofibrillar (contractile protein addition) and sarcoplasmic (fluid and glycogen storage) mechanisms.',
    },
    {
      term: 'Sarcomere',
      definition:
        'The smallest functional unit of muscle contraction, bounded by Z-lines and containing the actin and myosin filaments that produce force through the sliding filament mechanism.',
    },
    {
      term: 'Motor Unit',
      definition:
        'A single motor neuron and all the muscle fibers it innervates. Small motor units control fine movements; large motor units generate high force. Recruitment follows the size principle (small to large).',
    },
    {
      term: 'Type I Muscle Fibers',
      definition:
        'Slow-twitch, oxidative fibers with high fatigue resistance and endurance capacity but lower force production. Dominant in postural muscles and respond to higher rep ranges (12+) and endurance training.',
    },
    {
      term: 'Type II Muscle Fibers',
      definition:
        'Fast-twitch fibers with high force and power output but lower fatigue resistance. Type IIa are intermediate; Type IIx are the most powerful and fatigable. Respond to heavy loads and explosive training.',
    },
    {
      term: 'VO2max',
      definition:
        'The maximum rate of oxygen consumption during incremental exercise, measured in mL/kg/min. The gold standard measure of aerobic fitness, reflecting the integrated capacity of cardiovascular and muscular systems.',
    },
    {
      term: 'Cardiac Output',
      definition:
        'The volume of blood pumped by the heart per minute (Heart Rate x Stroke Volume). Increases from approximately 5 L/min at rest to 20-35 L/min during maximal exercise in trained individuals.',
    },
    {
      term: 'ATP (Adenosine Triphosphate)',
      definition:
        'The universal energy currency of cells. Muscle contraction requires ATP hydrolysis to ADP; the body stores only enough ATP for 1-2 seconds of maximal effort, requiring continuous regeneration.',
    },
    {
      term: 'Phosphocreatine',
      definition:
        'A high-energy phosphate compound stored in muscle that rapidly regenerates ATP via the creatine kinase reaction. Provides the immediate energy for efforts lasting 6-10 seconds at maximum intensity.',
    },
    {
      term: 'Glycolysis',
      definition:
        'The metabolic breakdown of glucose into pyruvate, producing 2 ATP per glucose molecule without oxygen (anaerobic glycolysis) or feeding into the Krebs cycle with oxygen for additional ATP production.',
    },
    {
      term: 'Sliding Filament Theory',
      definition:
        'The mechanism of muscle contraction where myosin cross-bridges attach to actin filaments and pull them toward the center of the sarcomere, shortening the muscle fiber.',
    },
    {
      term: 'Neuromuscular Junction',
      definition:
        'The synapse between a motor neuron and a muscle fiber where the neurotransmitter acetylcholine is released to initiate muscle contraction.',
    },
    {
      term: 'Sarcoplasmic Reticulum',
      definition:
        'A specialized endoplasmic reticulum in muscle cells that stores and releases calcium ions, which are essential for initiating and terminating the muscle contraction cycle.',
    },
    {
      term: 'Agonist',
      definition:
        'The primary muscle responsible for producing a movement. For example, the quadriceps are the agonist during knee extension, and the biceps are the agonist during elbow flexion.',
    },
    {
      term: 'Antagonist',
      definition:
        'The muscle that opposes the action of the agonist, providing deceleration and joint stability. For example, the hamstrings are the antagonist to the quadriceps during knee extension.',
    },
    {
      term: 'Synergist',
      definition:
        'A muscle that assists the agonist in producing a movement by providing additional force or stabilizing adjacent joints. For example, the brachialis assists the biceps during elbow flexion.',
    },
    {
      term: 'Sagittal Plane',
      definition:
        'The anatomical plane that divides the body into left and right halves. Movements in this plane include flexion, extension, dorsiflexion, and plantarflexion. Most gym exercises occur primarily in this plane.',
    },
    {
      term: 'Frontal Plane',
      definition:
        'The anatomical plane that divides the body into front and back. Movements include abduction, adduction, lateral flexion, eversion, and inversion. Lateral raises and side lunges occur in this plane.',
    },
    {
      term: 'Transverse Plane',
      definition:
        'The anatomical plane that divides the body into upper and lower halves. Movements include rotation, horizontal flexion/extension, and pronation/supination. Cable woodchops and rotational throws occur here.',
    },
    {
      term: 'Concentric Contraction',
      definition:
        'A muscle contraction where the muscle shortens while generating force (the "lifting" phase). Produces less force than eccentric contraction but requires active energy expenditure.',
    },
    {
      term: 'Eccentric Contraction',
      definition:
        'A muscle contraction where the muscle lengthens while under tension (the "lowering" phase). Can produce 20-40% more force than concentric, causes more muscle damage, and is important for rehabilitation.',
    },
    {
      term: 'Isometric Contraction',
      definition:
        'A muscle contraction where force is generated without a change in muscle length or joint angle. Used for core bracing during heavy lifts and as a pain management tool in tendinopathy rehabilitation.',
    },
    {
      term: 'Wolff Law',
      definition:
        'The principle that bone remodels and adapts in response to the mechanical stresses placed upon it. Resistance training and impact loading increase bone mineral density over time.',
    },
    {
      term: 'Moment Arm',
      definition:
        'The perpendicular distance from the joint axis of rotation to the line of force application. Longer moment arms increase torque demand, making exercises harder at certain joint angles.',
    },
    {
      term: 'Rate Coding',
      definition:
        'The frequency at which a motor neuron fires action potentials. Higher firing rates produce more force per motor unit and are improved with training, especially with explosive and heavy loading.',
    },
    {
      term: 'Lactate Threshold',
      definition:
        'The exercise intensity at which blood lactate accumulation exceeds clearance rate, approximately 60-80% VO2max in untrained and 80-90% in trained individuals. A strong predictor of endurance performance.',
    },
    {
      term: 'EPOC (Excess Post-Exercise Oxygen Consumption)',
      definition:
        'The elevated oxygen consumption and metabolic rate that persists after exercise, contributing to additional calorie expenditure. Higher after intense resistance training and HIIT than steady-state cardio.',
    },
    {
      term: 'Proprioception',
      definition:
        'The sensory awareness of body position, movement, and force in space without visual input. Mediated by mechanoreceptors in muscles, tendons, and joints. Essential for balance and coordination.',
    },
    {
      term: 'Size Principle',
      definition:
        'The physiological rule that motor units are recruited in order from smallest (low-threshold, slow-twitch) to largest (high-threshold, fast-twitch) as force demand increases.',
    },
    {
      term: 'Bilateral Deficit',
      definition:
        'The phenomenon where the combined force output of each limb working individually exceeds the force produced when both limbs work simultaneously, typically by 5-20%.',
    },
    {
      term: 'Fascicle',
      definition:
        'A bundle of muscle fibers wrapped in perimysium connective tissue. Fascicle arrangement (parallel, pennate, convergent) determines the muscle force-producing and range-of-motion characteristics.',
    },
  ],
  tips: [
    'Learn the names and functions of the major muscle groups; understanding which muscles are working during each exercise improves mind-muscle connection and helps identify muscle imbalances.',
    'Train in all three planes of motion (sagittal, frontal, transverse) for well-rounded functional fitness; most gym programs are overly sagittal-plane dominant (squats, presses, curls).',
    'Understand that strength gains in the first 6-8 weeks are primarily neural (learning to recruit more muscle fibers); do not expect visible muscle growth until consistent training for 8-12+ weeks.',
    'Use the length-tension relationship to your advantage: muscles are strongest at mid-range; cable exercises and resistance bands change the resistance curve to challenge muscles differently than free weights.',
    'Prioritize full range of motion in training; partial reps leave portions of the muscle underloaded and can create strength deficits at end-range positions where injuries commonly occur.',
    'Build an aerobic base even if your primary goal is strength; the oxidative system drives between-set and between-session recovery, and a resting heart rate under 60 bpm indicates good cardiovascular health.',
    'Respect the time it takes for connective tissues (tendons, ligaments, cartilage) to adapt to new loads; they respond 5-10x slower than muscles, which is why gradual progression prevents injuries.',
    'Allow 2-5 minutes of rest between heavy compound sets to replenish phosphocreatine stores (95% recovery in 3 minutes); cutting rest periods short reduces performance on subsequent sets.',
    'Understand that eccentric contractions generate the most muscle damage and delayed soreness; control the lowering phase of every rep for better results and reduced injury risk.',
    'Individual anatomy (limb lengths, muscle insertions, joint structure) determines optimal exercise form for each person; copy the principles of good form, not the exact positions of another lifter.',
  ],
  faqs: [
    {
      question: 'Why do beginners gain strength before gaining visible muscle?',
      answer:
        'In the first 4-8 weeks of training, 60-80% of strength gains come from neural adaptations: the nervous system learns to recruit more motor units, fire them faster (rate coding), improve coordination between muscles, and reduce antagonist co-contraction. Measurable muscle hypertrophy typically becomes apparent after 6-12 weeks of consistent training.',
    },
    {
      question: 'What is the mind-muscle connection and does it matter?',
      answer:
        'The mind-muscle connection refers to the ability to consciously focus on contracting a specific muscle during exercise. Research by Schoenfeld et al. shows that internal focus (thinking about the muscle) increases activation in the target muscle by up to 20% during isolation exercises at moderate loads. It is most effective for hypertrophy-focused training with isolation movements, less relevant for heavy compound lifts where external focus (moving the weight) is superior.',
    },
    {
      question: 'Can muscle turn into fat or fat turn into muscle?',
      answer:
        'No. Muscle tissue and fat tissue are entirely different cell types and one cannot convert into the other. When someone stops training, muscles atrophy (shrink) and if calorie intake is not adjusted, excess energy is stored as fat. The visual result can look like muscle "turning into" fat, but it is two separate processes happening simultaneously.',
    },
    {
      question: 'Why do some muscles respond to training faster than others?',
      answer:
        'Muscle response to training varies due to fiber type composition (Type II dominant muscles like chest and biceps may hypertrophy faster), neuromuscular efficiency (well-innervated muscles like forearms may not respond as dramatically), genetics (insertion length and muscle belly shape), training experience, and daily use patterns (frequently used muscles like calves may be more resistant to additional growth stimulus).',
    },
    {
      question: 'What causes the "burning" sensation during high-rep sets?',
      answer:
        'The burning sensation is primarily caused by the accumulation of hydrogen ions (H+) that accompany lactate production during anaerobic glycolysis, lowering intracellular pH (acidosis). Contrary to popular belief, lactate itself is not the cause of the burn; it is actually a useful fuel source. The acidic environment also impairs calcium release and cross-bridge cycling, contributing to muscular fatigue.',
    },
    {
      question: 'Is there an optimal rep range for muscle growth?',
      answer:
        'Research shows that hypertrophy can occur across a wide rep range (5-30+ reps) when sets are taken close to failure. However, the 6-12 rep range offers the best balance of mechanical tension, metabolic stress, and practical training volume. Incorporating a mix of rep ranges (heavy 4-6 reps, moderate 8-12 reps, light 15-25 reps) may produce the best overall hypertrophy stimulus.',
    },
    {
      question: 'How do the three energy systems determine my rest periods?',
      answer:
        'The ATP-PC system (used for 1-5 rep maxes) requires 2-5 minutes of rest for phosphocreatine replenishment. The glycolytic system (6-15 reps) requires 1-3 minutes. The oxidative system (15+ reps, cardio) requires 30-90 seconds. Matching rest periods to the energy system you are training optimizes performance and adaptation for your specific goals.',
    },
    {
      question: 'Does body type determine how I should train?',
      answer:
        'Somatotype (ectomorph, mesomorph, endomorph) provides a general framework but should not rigidly dictate training. All body types benefit from progressive resistance training and adequate protein. Individual anthropometry (limb lengths, joint structure) has more practical impact on exercise selection and form than general body type. Focus on finding the exercises and techniques that work best for your individual anatomy.',
    },
    {
      question: 'Why is eccentric training emphasized for rehabilitation?',
      answer:
        'Eccentric contractions generate the highest forces (20-40% more than concentric) with lower metabolic cost and less cardiovascular stress, making them ideal for loading healing tissues progressively. They stimulate collagen synthesis and tendon remodeling, improve muscle-tendon unit stiffness, and have been shown to produce the best outcomes for tendinopathy rehabilitation in particular (patellar, Achilles).',
    },
    {
      question: 'How does resistance training improve bone density?',
      answer:
        'According to Wolff Law, bone remodels in response to mechanical stress. Resistance training creates compressive, tensile, and shear forces on bones through muscle pull and gravitational loading. Osteoblasts (bone-building cells) are stimulated to increase bone mineral density by 1-3% per year, while osteoclast (bone-breaking) activity is regulated. This makes resistance training the most effective exercise for osteoporosis prevention, superior to even most forms of cardio.',
    },
    {
      question: 'What is the difference between muscular strength and muscular endurance?',
      answer:
        'Muscular strength is the maximum force a muscle can produce in a single effort (1 rep max) and relies on Type II fiber recruitment and neural drive. Muscular endurance is the ability to sustain repeated contractions over time and depends on Type I fibers, capillary density, mitochondrial function, and buffering capacity. Strength is best developed with heavy loads (1-6 reps), while endurance is best developed with lighter loads (15-25+ reps) taken to near failure.',
    },
    {
      question: 'Why do I feel dizzy during heavy leg exercises?',
      answer:
        'Heavy compound leg exercises (squats, leg press) sequester a large volume of blood in the lower extremities while the Valsalva maneuver temporarily restricts blood return to the heart. Upon completing the rep, blood pressure can drop rapidly, reducing cerebral perfusion momentarily. This is normal and usually manageable by breathing between reps, avoiding excessive breath-holding, and taking an extra second before standing after heavy sets.',
    },
    {
      question: 'Can I change my muscle fiber type through training?',
      answer:
        'To a limited extent, yes. Type IIx fibers can convert to Type IIa with resistance training, and some evidence suggests Type IIa fibers can shift toward Type I characteristics with prolonged endurance training. However, the fundamental ratio of Type I to Type II fibers is largely genetic (50-70% heritable). Training optimizes the fibers you have rather than dramatically changing the overall composition.',
    },
    {
      question: 'What is the stretch-shortening cycle and why does it matter?',
      answer:
        'The stretch-shortening cycle (SSC) is when a muscle is rapidly stretched (eccentric phase) immediately before a concentric contraction, producing 10-30% more force than a concentric contraction alone. This occurs due to stored elastic energy in the muscle-tendon unit and the stretch reflex. The SSC is the basis for plyometric training (box jumps, depth jumps) and is exploited during movements like the bounce at the bottom of a squat.',
    },
  ],
};
