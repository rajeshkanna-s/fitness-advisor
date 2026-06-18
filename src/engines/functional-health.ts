import type { EngineData } from '../types';

export const functionalHealthEngine: EngineData = {
  category: 'functional-health',
  title: 'Functional Health & Movement',
  description:
    'A comprehensive guide to functional fitness, movement quality, and health optimization across the lifespan. Covers posture correction, core stability, movement screening, balance training, daily activity, and special population considerations including desk workers, pregnancy, and seniors.',
  topics: [
    {
      name: 'Posture Assessment & Correction',
      description:
        'Posture is the alignment of body segments relative to gravity and each other. While "perfect posture" is a simplification, certain chronic postural deviations can increase injury risk, limit movement capacity, and contribute to pain. Assessment identifies deviations; correction involves a combination of strengthening weak muscles, mobilizing restricted tissues, and building awareness.',
      details: [
        'Common postural deviations include upper crossed syndrome (forward head, rounded shoulders), lower crossed syndrome (anterior pelvic tilt, weak glutes), and flat back posture.',
        'Upper crossed syndrome involves tight pectorals and upper traps with weak deep neck flexors and lower traps/rhomboids.',
        'Lower crossed syndrome involves tight hip flexors and lumbar erectors with weak abdominals and gluteal muscles.',
        'Static posture assessment observes alignment from anterior, posterior, and lateral views using a plumb line reference.',
        'Dynamic posture assessment during movement (overhead squat, gait analysis) reveals compensations that static assessment may miss.',
        'Postural correction prioritizes strengthening weak, lengthened muscles over stretching tight, shortened muscles.',
        'Text neck (forward head posture from device use) increases cervical spine load from approximately 10 lbs at neutral to 60 lbs at 60 degrees of flexion.',
        'The best posture is your next posture: frequent position changes throughout the day are more important than achieving one ideal alignment.',
        'Postural muscles (deep stabilizers) are primarily slow-twitch (Type I) fibers and respond best to endurance-oriented training with lower loads and higher time under tension.',
        'Mirror and photo-based self-assessment can help individuals track postural changes over weeks and months.',
      ],
      subtopics: [
        {
          name: 'Corrective Exercise Strategies',
          description:
            'A systematic approach to correcting postural deviations through inhibit, lengthen, activate, and integrate (NASM CEx model).',
          details: [
            'Inhibit: foam roll or apply pressure to overactive muscles to reduce tone (e.g., foam roll upper traps, pectorals).',
            'Lengthen: static stretch or mobilize shortened tissues (e.g., hip flexor stretch, doorway pec stretch).',
            'Activate: isolate and strengthen underactive muscles (e.g., band pull-aparts for lower traps, glute bridges for glutes).',
            'Integrate: perform compound movements that reinforce proper alignment (e.g., cable row for scapular retraction, squat for hip-spine coordination).',
          ],
        },
      ],
    },
    {
      name: 'Core Stability & Anti-Movement Training',
      description:
        'True core stability is the ability to resist unwanted movement at the spine while generating force through the extremities. Modern core training emphasizes anti-extension, anti-rotation, anti-lateral flexion, and hip flexion patterns rather than traditional crunches and sit-ups.',
      details: [
        'The core includes the diaphragm (top), pelvic floor (bottom), transverse abdominis (front), and multifidus (back), creating an intra-abdominal pressure cylinder.',
        'Anti-extension exercises (planks, ab wheel rollouts, dead bugs) train the core to resist lumbar hyperextension under load.',
        'Anti-rotation exercises (Pallof presses, single-arm carries, bird dogs) train the core to resist rotational forces.',
        'Anti-lateral flexion exercises (suitcase carries, side planks, single-leg deadlifts) train the core to resist lateral bending.',
        'Bracing (co-contraction of all trunk muscles) is used for heavy, bilateral lifts; breathing and bracing is the technique for maintaining intra-abdominal pressure during dynamic movements.',
        'The diaphragm is both a breathing muscle and a core stabilizer; diaphragmatic breathing patterns are foundational to core function.',
        'McGill Big Three (curl-up, side plank, bird dog) are evidence-based exercises for building spinal stability while minimizing spinal load.',
        'Traditional sit-ups and crunches generate high compressive and shear forces on lumbar discs; anti-movement alternatives are safer for most populations.',
        'Core endurance (ability to maintain stability over time) is more protective against low back pain than core strength (maximal force production).',
        'A properly functioning core transfers force from the lower body to the upper body (and vice versa) during athletic movements like throwing, punching, and sprinting.',
      ],
      subtopics: [
        {
          name: 'Intra-Abdominal Pressure & Bracing',
          description:
            'The technique of creating a pressurized cylinder in the trunk to stabilize the spine during loaded movements.',
          details: [
            'Take a deep diaphragmatic breath (belly expands 360 degrees), then brace the abdominal wall as if preparing to be punched.',
            'The Valsalva maneuver (holding breath against a closed glottis) maximizes intra-abdominal pressure for maximal lifts; use judiciously as it raises blood pressure.',
            'A lifting belt (worn during heavy compound lifts) provides a surface for the abdominal wall to push against, increasing IAP by approximately 15-20%.',
            'Learn to breathe and brace: maintain partial IAP while breathing during sub-maximal and dynamic movements.',
          ],
        },
      ],
    },
    {
      name: 'Movement Screening (FMS)',
      description:
        'The Functional Movement Screen (FMS) is a standardized battery of seven movement tests designed to identify asymmetries, mobility limitations, and stability deficits that may increase injury risk. It provides a baseline for corrective exercise programming.',
      details: [
        'The FMS consists of seven tests: deep squat, hurdle step, inline lunge, shoulder mobility, active straight leg raise, trunk stability push-up, and rotary stability.',
        'Each test is scored 0-3: 0 = pain during movement, 1 = unable to perform, 2 = completed with compensation, 3 = performed without compensation.',
        'A composite score of 14 or below (out of 21) has been associated with increased injury risk in some athletic populations.',
        'Asymmetries between left and right sides (scoring difference of 1+ on bilateral tests) are considered a higher priority for correction than low overall scores.',
        'The FMS is a screening tool, not a diagnostic tool; it identifies movement pattern issues but does not diagnose pathology.',
        'Corrective exercise strategies should address the lowest-scoring patterns first, as they represent the weakest links in the movement chain.',
        'The overhead squat assessment (NASM) and Y-Balance Test are complementary screening tools that provide additional movement quality information.',
        'Re-screening after 4-6 weeks of corrective exercise determines whether interventions are effective and guides program modifications.',
        'FMS is most valuable as a baseline screen for new clients and as a periodic reassessment tool (every 3-6 months).',
        'Movement screening should be performed when the individual is fresh (not fatigued) for accurate results.',
      ],
    },
    {
      name: 'Functional Movement Patterns',
      description:
        'All human movement can be categorized into fundamental patterns: squat, hinge, lunge, push, pull, carry, and rotation. Training these patterns rather than isolated muscles improves real-world function, athletic performance, and injury resilience.',
      details: [
        'Squat pattern: bilateral knee-dominant movement (goblet squat, front squat, back squat) essential for sitting, standing, and lower body power.',
        'Hinge pattern: hip-dominant movement with minimal knee bend (deadlift, Romanian deadlift, kettlebell swing) essential for lifting objects from the ground.',
        'Lunge pattern: unilateral lower body movement (forward lunge, reverse lunge, step-up, Bulgarian split squat) important for gait, stair climbing, and balance.',
        'Push pattern: upper body pressing (push-up, bench press, overhead press) divided into horizontal and vertical pushing.',
        'Pull pattern: upper body pulling (row, pull-up, lat pulldown) divided into horizontal and vertical pulling.',
        'Carry pattern: loaded locomotion (farmer walks, suitcase carries, overhead carries) trains core stability, grip, and total body endurance.',
        'Rotation and anti-rotation patterns: twisting and resisting twisting forces (cable chops, medicine ball throws, Pallof press) essential for athletic movements.',
        'A balanced program trains all seven movement patterns within each training week.',
        'Regression-progression continuum: every movement pattern has simpler and more complex variations to match any fitness level.',
        'Movement quality always takes priority over load; add weight only when the pattern is performed with proper mechanics.',
      ],
      subtopics: [
        {
          name: 'Movement Regression & Progression',
          description:
            'A systematic approach to scaling exercises to match individual ability while maintaining pattern integrity.',
          details: [
            'Regression strategies: reduce range of motion, add external support (bands, boxes), decrease load, move from bilateral to supported unilateral positions.',
            'Progression strategies: increase range of motion, remove support, add load, move from bilateral to unsupported unilateral positions, add speed or instability.',
            'Example squat progression: wall sit, box squat, goblet squat, front squat, back squat, pistol squat.',
            'Example hinge progression: hip hinge drill with dowel, pull-through, kettlebell deadlift, barbell Romanian deadlift, conventional deadlift.',
          ],
        },
      ],
    },
    {
      name: 'Balance & Proprioception',
      description:
        'Balance is the ability to maintain the center of gravity over the base of support, while proprioception is the body\'s awareness of limb position and movement in space. Both decline with age but are highly trainable and critical for injury prevention.',
      details: [
        'Proprioception relies on mechanoreceptors in joints, muscles (muscle spindles), tendons (Golgi tendon organs), and the vestibular system.',
        'Balance training progresses from static (standing on one leg) to dynamic (single-leg reaches) to reactive (perturbation training).',
        'Ankle sprains are the most common sports injury; proprioceptive training on unstable surfaces reduces recurrence by up to 50%.',
        'The BOSU ball, balance boards, and foam pads provide progressively challenging unstable surfaces for balance training.',
        'Visual input contributes significantly to balance; closing the eyes during balance exercises dramatically increases difficulty and proprioceptive demand.',
        'Single-leg stance time decreases with age: young adults average 30+ seconds eyes closed; by age 70, many struggle with 10 seconds eyes open.',
        'Balance training should be performed 2-3 times per week, progressing from stable to unstable surfaces and from eyes open to eyes closed.',
        'Tai chi has the strongest evidence base for improving balance and reducing fall risk in older adults.',
        'Ankle strengthening (calf raises, dorsiflexion, inversion/eversion) supports balance by improving the first line of postural control.',
        'Reactive balance training (unexpected perturbations, partner pushes) most closely mimics real-world balance demands.',
      ],
    },
    {
      name: 'Daily Movement & NEAT',
      description:
        'Non-Exercise Activity Thermogenesis (NEAT) encompasses all energy expended through daily movement outside of intentional exercise, including walking, fidgeting, household chores, and occupational activity. NEAT is a major contributor to total daily energy expenditure and metabolic health.',
      details: [
        'NEAT can vary by 2,000+ calories per day between individuals and accounts for the largest variable component of total daily energy expenditure.',
        'Sedentary behavior (prolonged sitting) is an independent risk factor for cardiovascular disease, type 2 diabetes, and all-cause mortality, even among regular exercisers.',
        'Breaking up prolonged sitting every 30-60 minutes with 2-5 minutes of light movement improves glucose metabolism and reduces cardiometabolic risk.',
        'The "active couch potato" phenomenon describes individuals who meet exercise guidelines but remain sedentary for the remaining 15+ waking hours.',
        'Standing desks increase caloric expenditure by only 8-10 calories per hour over sitting; walking desks or movement breaks are more impactful.',
        '10,000 steps per day is a reasonable health target but is not evidence-based; health benefits plateau around 7,000-8,000 steps/day for adults.',
        'Walking meetings, active commuting (cycling, walking), and household chores all contribute meaningfully to NEAT.',
        'NEAT decreases unconsciously during caloric restriction (dieting), contributing to metabolic adaptation and weight loss plateaus.',
        'Movement snacking (brief bouts of 1-5 minutes of movement throughout the day) is an effective strategy for increasing NEAT.',
        'A structured exercise program combined with high daily NEAT produces better health outcomes than exercise alone.',
      ],
    },
    {
      name: 'Desk Worker Fitness',
      description:
        'Specific strategies for individuals who spend 6+ hours daily in seated desk work, addressing the postural, metabolic, and musculoskeletal consequences of prolonged sitting and computer use.',
      details: [
        'Prolonged sitting shortens the hip flexors, weakens the glutes, rounds the thoracic spine, and protracts the shoulders over time.',
        'Ergonomic workstation setup: monitor at eye level, elbows at 90 degrees, feet flat on the floor, lumbar support at the natural curve of the spine.',
        'Set a timer to stand and move every 30-45 minutes; even 2 minutes of walking or stretching counteracts some effects of prolonged sitting.',
        'Priority exercises for desk workers: hip flexor stretches, thoracic spine extensions, chin tucks, face pulls, glute bridges, and farmer walks.',
        'Thoracic spine mobility is often the primary limitation in desk workers; foam roller extensions and wall slides are highly effective correctives.',
        'Wrist and forearm exercises (wrist curls, extensor stretches, grip work) help prevent carpal tunnel syndrome and repetitive strain injuries.',
        'Eye strain (computer vision syndrome) can be reduced by following the 20-20-20 rule: every 20 minutes, look at something 20 feet away for 20 seconds.',
        'Desk workers should prioritize posterior chain strengthening (rows, deadlifts, reverse flyes) to counteract the anterior-dominant posture of desk work.',
        'Lunch break walks (even 10-15 minutes) improve afternoon energy, mood, and productivity while contributing to daily movement targets.',
        'A mini-band routine at the desk (band pull-aparts, external rotations, glute bridges) can be done in 5 minutes and addresses the most common desk worker imbalances.',
      ],
    },
    {
      name: 'Age-Appropriate Exercise',
      description:
        'Exercise recommendations should be tailored to the physiological and developmental characteristics of different age groups, from children and adolescents through middle age and into older adulthood.',
      details: [
        'Children (6-12): emphasize fun, multi-sport participation, fundamental movement skills, and bodyweight strength; avoid early sport specialization.',
        'Adolescents (13-17): introduce structured resistance training with proper coaching; progressive overload is safe when technique is prioritized over load.',
        'Young adults (18-35): highest capacity for training volume and intensity; ideal time to build muscle mass, strength, and aerobic fitness base.',
        'Middle-aged adults (35-55): emphasize maintenance of muscle mass (sarcopenia begins in the 30s), joint health, flexibility, and cardiovascular fitness.',
        'Older adults (55-75): prioritize resistance training to combat sarcopenia, balance training for fall prevention, and moderate aerobic activity.',
        'Elderly adults (75+): focus on activities of daily living (ADLs), fall prevention, bone density maintenance, and social engagement through exercise.',
        'Resistance training is safe and beneficial at every age; the NSCA recommends strength training for children as young as 7-8 with qualified supervision.',
        'Sarcopenia (age-related muscle loss) begins around age 30, accelerates after 60, and can be significantly attenuated by regular resistance training.',
        'Bone density peaks around age 30; weight-bearing and impact activities throughout life help maintain bone mass and reduce osteoporosis risk.',
        'Recovery capacity generally decreases with age; older adults may need more rest days and longer recovery periods between intense sessions.',
      ],
    },
    {
      name: 'Pregnancy & Postpartum Fitness',
      description:
        'Exercise during pregnancy provides numerous benefits including reduced gestational diabetes risk, improved mood, easier labor and delivery, and faster postpartum recovery. Guidelines have evolved significantly, with current evidence supporting continued exercise throughout uncomplicated pregnancies.',
      details: [
        'ACOG (American College of Obstetricians and Gynecologists) recommends 150 minutes of moderate-intensity exercise per week during uncomplicated pregnancies.',
        'Exercise during pregnancy reduces risk of gestational diabetes by 25-30%, preeclampsia by 40%, and excessive gestational weight gain.',
        'Avoid supine (lying face-up) exercise after the first trimester due to potential vena cava compression reducing blood flow to the uterus.',
        'Contact sports, activities with fall risk, hot yoga (heat exposure), and heavy Valsalva maneuvers should be avoided during pregnancy.',
        'The "talk test" is a practical intensity guideline: the pregnant individual should be able to carry on a conversation during exercise.',
        'Pelvic floor exercises (Kegels and deep core activation) are recommended throughout pregnancy and are essential for postpartum recovery.',
        'Diastasis recti (separation of the rectus abdominis along the linea alba) is common during pregnancy; avoid traditional crunches and exercises that cause doming of the abdomen.',
        'Postpartum return to exercise should be gradual: walking and pelvic floor exercises first, then progressive loading over 6-12 weeks (or longer after cesarean section).',
        'Breastfeeding is not impaired by moderate exercise; lactic acid from intense exercise may temporarily alter milk taste but does not harm the infant.',
        'A qualified prenatal and postnatal fitness specialist should be consulted for individualized exercise programming, especially with complications.',
      ],
      subtopics: [
        {
          name: 'Postpartum Return to Exercise',
          description:
            'A phased approach to safely resuming exercise after childbirth, accounting for tissue healing, hormonal changes, and individual recovery.',
          details: [
            'Phase 1 (0-6 weeks): gentle walking, diaphragmatic breathing, pelvic floor activation; focus on reconnecting with the body.',
            'Phase 2 (6-12 weeks): progressive bodyweight exercises, light resistance training, gradual return to structured cardio; clear medical check-up recommended at 6 weeks.',
            'Phase 3 (12+ weeks): gradual return to pre-pregnancy exercise intensity; monitor for pelvic floor symptoms (leaking, heaviness, pain).',
            'Running, jumping, and high-impact activities should generally wait until 12+ weeks postpartum and after pelvic floor function is assessed.',
          ],
        },
      ],
    },
    {
      name: 'Senior Fitness',
      description:
        'Exercise is arguably more important for older adults than for any other age group, as it directly addresses the primary causes of functional decline: muscle loss, bone density reduction, impaired balance, and cardiovascular deconditioning.',
      details: [
        'Resistance training 2-3 times per week significantly combats sarcopenia, with studies showing strength gains of 25-100% in previously untrained older adults.',
        'Balance training reduces fall risk by 23-40% in older adults; tai chi and structured balance programs have the strongest evidence.',
        'Falls are the leading cause of injury death in adults over 65; exercise-based prevention programs are the most effective intervention.',
        'Aerobic exercise (walking, swimming, cycling) at moderate intensity for 150 minutes/week maintains cardiovascular health and cognitive function.',
        'Flexibility and mobility work helps maintain range of motion needed for activities of daily living (reaching, bending, dressing).',
        'Power training (explosive movements at moderate loads) may be more protective against functional decline than slow, heavy strength training for seniors.',
        'Social exercise settings (group classes, walking groups, tai chi classes) provide dual benefits of physical activity and social engagement, both of which reduce dementia risk.',
        'Chair-based exercises are an effective entry point for frail or mobility-limited older adults; they can be progressively loaded using resistance bands.',
        'Aquatic exercise provides joint-friendly resistance and balance challenges with reduced fall risk, making it ideal for those with arthritis or joint pain.',
        'Cognitive challenges during exercise (dual-task training such as counting backwards while walking) improve both physical and cognitive outcomes in seniors.',
      ],
    },
  ],
  keyTerms: [
    {
      term: 'NEAT (Non-Exercise Activity Thermogenesis)',
      definition:
        'All energy expended through daily physical activity other than intentional exercise, sleeping, or eating, including walking, fidgeting, household chores, and occupational movement.',
    },
    {
      term: 'Functional Movement Screen (FMS)',
      definition:
        'A standardized series of seven movement tests that identify asymmetries, mobility limitations, and stability deficits to establish a baseline for corrective exercise programming.',
    },
    {
      term: 'Sarcopenia',
      definition:
        'Age-related progressive loss of skeletal muscle mass, strength, and function beginning around age 30, accelerating after 60, and directly contributing to falls, frailty, and loss of independence.',
    },
    {
      term: 'Proprioception',
      definition:
        'The body\'s ability to sense the position, movement, and force of its limbs and joints in space, mediated by mechanoreceptors in muscles, tendons, joints, and the vestibular system.',
    },
    {
      term: 'Upper Crossed Syndrome',
      definition:
        'A postural pattern characterized by tight upper trapezius and pectoral muscles with weak deep cervical flexors and lower trapezius/rhomboids, resulting in forward head posture and rounded shoulders.',
    },
    {
      term: 'Lower Crossed Syndrome',
      definition:
        'A postural pattern characterized by tight hip flexors and lumbar erectors with weak abdominals and gluteal muscles, resulting in anterior pelvic tilt and excessive lumbar lordosis.',
    },
    {
      term: 'Intra-Abdominal Pressure (IAP)',
      definition:
        'Pressure generated within the abdominal cavity by co-contraction of the diaphragm, pelvic floor, transverse abdominis, and multifidus, which stabilizes the spine during loaded movements.',
    },
    {
      term: 'Diastasis Recti',
      definition:
        'A separation of the two bellies of the rectus abdominis muscle along the linea alba, commonly occurring during pregnancy, which affects core stability and trunk function.',
    },
    {
      term: 'Anti-Movement Training',
      definition:
        'Core exercises designed to resist unwanted spinal movement (anti-extension, anti-rotation, anti-lateral flexion) rather than produce movement, reflecting the core\'s primary stabilization role.',
    },
    {
      term: 'Transverse Abdominis (TVA)',
      definition:
        'The deepest abdominal muscle that wraps around the trunk like a corset, providing spinal stability through compression and contributing to intra-abdominal pressure.',
    },
    {
      term: 'McGill Big Three',
      definition:
        'Three evidence-based core exercises developed by Dr. Stuart McGill: the curl-up, side plank, and bird dog, designed to build spinal stability while minimizing spinal compressive loads.',
    },
    {
      term: 'Kinetic Chain',
      definition:
        'The concept that the body\'s joints and segments work together as an interconnected system during movement, where dysfunction at one segment affects segments above and below it.',
    },
    {
      term: 'Activities of Daily Living (ADLs)',
      definition:
        'Fundamental self-care tasks necessary for independent living, including bathing, dressing, eating, toileting, transferring (standing up), and walking.',
    },
    {
      term: 'Dual-Task Training',
      definition:
        'Performing a cognitive task simultaneously with a physical task (e.g., walking while counting backwards) to challenge both systems and improve real-world functional capacity, especially in older adults.',
    },
    {
      term: 'Pelvic Floor',
      definition:
        'The group of muscles forming the base of the core cylinder, supporting pelvic organs, contributing to continence, and playing a critical role in core stability and intra-abdominal pressure generation.',
    },
    {
      term: 'Golgi Tendon Organ (GTO)',
      definition:
        'A proprioceptive receptor located at the muscle-tendon junction that senses changes in muscle tension and triggers a reflexive relaxation (autogenic inhibition) to protect against excessive force.',
    },
    {
      term: 'Muscle Spindle',
      definition:
        'A proprioceptive receptor embedded within muscle fibers that detects changes in muscle length and rate of change, triggering the stretch reflex to protect against overstretching.',
    },
    {
      term: 'Motor Control',
      definition:
        'The process by which the nervous system coordinates and organizes muscle activation patterns to produce purposeful, efficient, and well-timed movements.',
    },
    {
      term: 'Corrective Exercise',
      definition:
        'A systematic approach to identifying and addressing movement dysfunction through a sequence of inhibiting overactive muscles, lengthening shortened tissues, activating underactive muscles, and integrating into compound movements.',
    },
    {
      term: 'Osteoporosis',
      definition:
        'A condition characterized by reduced bone mineral density and increased fracture risk, most common in postmenopausal women; mitigated by weight-bearing exercise, resistance training, and adequate calcium and vitamin D intake.',
    },
    {
      term: 'Vena Cava Compression',
      definition:
        'Pressure on the inferior vena cava (the large vein returning blood to the heart) caused by the weight of the uterus when lying supine during late pregnancy, potentially reducing blood flow to the fetus.',
    },
    {
      term: 'Perturbation Training',
      definition:
        'A form of reactive balance training that involves unexpected external forces (pushes, surface changes) to challenge and improve automatic postural correction responses.',
    },
    {
      term: 'Movement Regression',
      definition:
        'Simplifying an exercise by reducing range of motion, load, speed, or stability demand to match an individual\'s current movement capacity while maintaining the fundamental movement pattern.',
    },
    {
      term: 'Vestibular System',
      definition:
        'The sensory system located in the inner ear that detects head position and movement, providing critical input for balance, spatial orientation, and gaze stabilization during movement.',
    },
    {
      term: 'Autogenic Inhibition',
      definition:
        'A reflexive decrease in muscle tension mediated by Golgi tendon organs in response to high force; the principle underlying contract-relax (PNF) stretching techniques.',
    },
    {
      term: 'Ergonomics',
      definition:
        'The science of designing workstations, tools, and tasks to fit the human body, minimizing musculoskeletal stress and maximizing efficiency, comfort, and safety.',
    },
    {
      term: 'Active Couch Potato',
      definition:
        'An individual who meets recommended exercise guidelines (e.g., 30 minutes of exercise daily) but is sedentary for the remaining waking hours, retaining elevated health risks from prolonged sitting.',
    },
    {
      term: 'Gait Analysis',
      definition:
        'Systematic observation and assessment of walking or running biomechanics to identify deviations, asymmetries, or compensations that may contribute to pain or injury.',
    },
    {
      term: 'Fascial System',
      definition:
        'A continuous network of connective tissue that surrounds and interconnects muscles, organs, and bones, transmitting force and providing structural support throughout the body.',
    },
    {
      term: 'Closed Kinetic Chain Exercise',
      definition:
        'Exercises where the distal segment (hand or foot) is fixed to a surface (e.g., squats, push-ups, pull-ups), typically producing more functional joint loading patterns and co-contraction.',
    },
  ],
  tips: [
    'Move frequently throughout the day; even if you exercise intensely for an hour, sitting for the remaining 15 waking hours undermines health.',
    'Train movement patterns (squat, hinge, push, pull, carry, lunge, rotate) rather than isolated muscles for real-world functional strength.',
    'Address your weakest movement pattern first; it represents the greatest injury risk and potential for improvement.',
    'Prioritize core stability (anti-movement training) over core flexion exercises like crunches and sit-ups to protect the spine.',
    'If you work at a desk, invest in thoracic spine mobility and hip flexor flexibility as your top corrective exercise priorities.',
    'Include single-leg and asymmetric exercises in every program to address side-to-side imbalances and improve balance.',
    'Balance training is not just for elderly adults; athletes of all ages benefit from proprioceptive challenges for injury prevention.',
    'Use the FMS or overhead squat assessment as a baseline screen, then retest every 3-6 months to track movement quality improvements.',
    'Carry heavy things (farmer walks, loaded carries) regularly; carries train core stability, grip, posture, and total-body conditioning simultaneously.',
    'Movement quality always comes before movement quantity; never add load to a dysfunctional pattern.',
  ],
  faqs: [
    {
      question: 'What is functional fitness?',
      answer:
        'Functional fitness refers to training that improves your ability to perform real-world activities by emphasizing multi-joint, multi-plane movements that mirror daily tasks and sports. Rather than training muscles in isolation on machines, functional training develops coordination, stability, and strength across movement patterns like squatting, lifting, pushing, pulling, and carrying.',
    },
    {
      question: 'Is sitting really that bad for you?',
      answer:
        'Prolonged, uninterrupted sitting is associated with increased risk of cardiovascular disease, type 2 diabetes, and all-cause mortality, independent of exercise habits. However, the risk comes from prolonged, continuous sitting rather than total seated time. Breaking up sitting with 2-5 minutes of movement every 30-60 minutes significantly reduces these risks. Regular exercise helps but does not fully compensate for an otherwise sedentary lifestyle.',
    },
    {
      question: 'How do I fix my posture?',
      answer:
        'Posture correction involves: (1) identifying specific deviations through assessment, (2) strengthening weak muscles (typically the posterior chain: glutes, lower traps, deep neck flexors), (3) mobilizing restricted areas (typically hip flexors, pectorals, thoracic spine), and (4) building awareness through frequent position changes. Quick fixes do not exist; consistent corrective exercise over 4-8 weeks produces meaningful change. The best posture is your next posture: movement variety matters more than perfect alignment.',
    },
    {
      question: 'Are planks better than crunches?',
      answer:
        'For most people, yes. Planks train the core in its primary role as a stabilizer (anti-extension) while keeping the spine in a neutral position. Crunches produce repeated spinal flexion under load, which increases disc compression forces. For individuals with low back issues, planks and other anti-movement exercises are significantly safer. Athletes who specifically need spinal flexion strength can include controlled flexion exercises selectively.',
    },
    {
      question: 'Can children lift weights?',
      answer:
        'Yes. Resistance training is safe and beneficial for children as young as 7-8 years old when supervised by qualified coaches. The NSCA position statement supports youth resistance training with age-appropriate loads and technique emphasis. Resistance training does not stunt growth (this is a persistent myth); it improves bone density, movement skill, injury resilience, and self-confidence. However, maximal 1-rep lifts should be avoided until physical and emotional maturity allows proper execution.',
    },
    {
      question: 'Is exercise safe during pregnancy?',
      answer:
        'Yes, for uncomplicated pregnancies, ACOG recommends 150 minutes of moderate-intensity exercise per week. Exercise reduces risk of gestational diabetes, preeclampsia, and excessive weight gain while improving mood and making delivery easier. Avoid contact sports, activities with fall risk, supine exercise after the first trimester, and overheating. Always consult your healthcare provider, especially with any pregnancy complications.',
    },
    {
      question: 'How can seniors prevent falls?',
      answer:
        'A combination of strength training (2-3 times per week focusing on lower body), balance training (single-leg exercises, tai chi), and adequate vision and home safety modifications is most effective. Exercise programs that include balance challenges reduce fall risk by 23-40%. Tai chi has the strongest evidence among specific modalities. Vitamin D supplementation (when deficient) and medication review also help.',
    },
    {
      question: 'What is the FMS and do I need it?',
      answer:
        'The Functional Movement Screen is a standardized set of seven movement tests that identify mobility limitations, stability deficits, and asymmetries. It is most useful as a baseline assessment for new training clients and for periodic re-screening. While not required, it provides objective data to guide corrective exercise selection. The overhead squat assessment is a simpler alternative that captures many of the same movement quality issues.',
    },
    {
      question: 'How many steps per day should I aim for?',
      answer:
        'Research suggests significant health benefits up to about 7,000-8,000 steps per day, with diminishing returns beyond that. The commonly cited 10,000-step target originated from a Japanese marketing campaign, not science, but it remains a reasonable goal. For weight management, higher step counts (10,000-12,000) may be beneficial. Focus on increasing your current baseline by 1,000-2,000 steps rather than hitting a specific target.',
    },
    {
      question: 'What exercises should desk workers prioritize?',
      answer:
        'Desk workers should focus on: (1) hip flexor stretching and glute activation (hip flexor stretch, glute bridges), (2) thoracic spine mobility (foam roller extensions, wall slides), (3) scapular strengthening (face pulls, band pull-aparts, rows), (4) deep neck flexor activation (chin tucks), and (5) regular walking breaks. These address the most common imbalances from prolonged sitting and computer use.',
    },
    {
      question: 'Is yoga good for functional fitness?',
      answer:
        'Yoga provides excellent flexibility, body awareness, breathing control, and balance benefits. However, it lacks significant resistance to build or maintain muscle mass and bone density, especially as you age. Yoga is a valuable complement to a resistance training program, not a complete replacement. Styles like Ashtanga and Power Yoga provide more physical challenge, while Yin and Restorative Yoga support recovery.',
    },
    {
      question: 'How do I train my core without hurting my back?',
      answer:
        'Focus on anti-movement exercises that keep the spine in a neutral position: planks (anti-extension), Pallof presses (anti-rotation), side planks (anti-lateral flexion), and dead bugs (anti-extension with limb movement). The McGill Big Three (curl-up, side plank, bird dog) are specifically designed to build spinal stability with minimal spinal load. Avoid traditional sit-ups, Russian twists with heavy loads, and any exercise that causes low back pain.',
    },
    {
      question: 'What is the difference between mobility and flexibility?',
      answer:
        'Flexibility is the passive range of motion at a joint (how far a limb can be moved by an external force). Mobility is the active, usable range of motion under your own muscular control. You can be flexible but lack mobility if you cannot actively control the end range. Mobility requires both adequate tissue length (flexibility) and strength/control at end ranges, making it more functional for movement and athletics.',
    },
    {
      question: 'When should I use a standing desk?',
      answer:
        'A standing desk is useful for reducing prolonged sitting time, but standing all day has its own issues (increased leg fatigue, varicose veins). The best approach is alternating between sitting and standing every 30-60 minutes. Standing burns only marginally more calories than sitting (about 8-10 per hour). Movement breaks (walking, stretching) are more impactful than simply standing in place.',
    },
    {
      question: 'How long does it take to correct a postural imbalance?',
      answer:
        'Noticeable improvements in posture typically take 4-8 weeks of consistent corrective exercise (3-5 sessions per week, 10-15 minutes per session). Significant changes may take 3-6 months depending on the severity and chronicity of the imbalance. Postural correction is an ongoing process, not a one-time fix, as daily habits continually influence posture. Awareness and frequent position changes are as important as targeted exercises.',
    },
  ],
};
