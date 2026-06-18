import type { EngineData } from '../types';

export const injuryPreventionEngine: EngineData = {
  category: 'injury-prevention',
  title: 'Injury Prevention & Recovery',
  description:
    'Evidence-based guide to preventing common training injuries, implementing effective warm-up and prehab protocols, managing acute and chronic injuries, and safely returning to training after setbacks.',
  topics: [
    {
      name: 'Common Gym Injuries',
      description:
        'The most frequently encountered injuries in resistance training and how to identify, prevent, and manage them.',
      details: [
        'Rotator cuff injuries account for approximately 30-40% of shoulder complaints in gym-goers, often caused by excessive overhead pressing, poor bench press form, or imbalanced push-to-pull ratios.',
        'Lower back injuries (muscle strains, disc herniations, facet joint irritation) are the most common gym injuries overall, frequently resulting from poor deadlift/squat mechanics or excessive spinal flexion under load.',
        'Knee injuries include patellar tendinopathy (jumpers knee), meniscus tears, and IT band syndrome; often caused by excessive volume, sudden load increases, or biomechanical issues like valgus collapse.',
        'Elbow injuries such as lateral epicondylitis (tennis elbow) and medial epicondylitis (golfers elbow) are common in lifters who perform high-volume pulling or pressing without adequate forearm conditioning.',
        'Muscle strains most frequently occur in the hamstrings, pectorals, and biceps, typically during eccentric loading or when the muscle is taken through a long range of motion under heavy load without adequate warm-up.',
        'Wrist injuries including TFCC tears and de Quervain tenosynovitis are increasingly common due to heavy front rack positions, wrist-intensive movements, and excessive phone/computer use outside the gym.',
        'Hip impingement (femoroacetabular impingement or FAI) can be aggravated by deep squats in individuals with certain hip anatomy, manifesting as pinching pain in the front of the hip at depth.',
      ],
      subtopics: [
        {
          name: 'Rotator Cuff Injuries',
          description: 'Understanding the four rotator cuff muscles and how to protect them during training.',
          details: [
            'The rotator cuff consists of four muscles: supraspinatus, infraspinatus, teres minor, and subscapularis (SITS), which stabilize the humeral head in the glenoid socket during shoulder movement.',
            'Supraspinatus tears and impingement are the most common rotator cuff injuries, often aggravated by upright rows, behind-the-neck presses, and wide-grip bench pressing.',
            'Maintaining a 2:1 or 3:2 pull-to-push ratio in training volume helps prevent the anterior shoulder dominance and internal rotation that predisposes the rotator cuff to injury.',
            'External rotation exercises (band pull-aparts, face pulls, Cuban rotations) performed 2-3 times per week with light loads are the foundation of rotator cuff prehab programming.',
          ],
        },
        {
          name: 'Lower Back Injuries',
          description: 'Protecting the lumbar spine during heavy compound movements.',
          details: [
            'Maintaining a neutral spine (slight natural lordosis) during deadlifts and squats is critical; lumbar flexion under load (butt wink at bottom of squat, rounded back deadlifts) significantly increases disc injury risk.',
            'Bracing the core by taking a deep diaphragmatic breath and creating 360-degree intra-abdominal pressure (Valsalva maneuver) protects the spine during heavy lifts far more effectively than a lifting belt alone.',
            'Gradual load progression is essential; the intervertebral discs adapt to loading much more slowly than muscles (weeks to months versus days), making rapid strength gains a risk factor for disc injury.',
            'Hip hinge competency (Romanian deadlifts, good mornings, hip hinges) should be developed with lighter loads before progressing to heavy conventional deadlifts.',
          ],
        },
      ],
    },
    {
      name: 'Warm-Up Protocols',
      description:
        'Systematic approaches to preparing the body for training that reduce injury risk and optimize performance.',
      details: [
        'An effective warm-up should take 10-15 minutes and include general circulation (5 min light cardio), dynamic stretching, activation drills, and movement-specific preparation in that order.',
        'General warm-up (5 minutes of rowing, cycling, or brisk walking) raises core temperature by 1-2 degrees Celsius, increasing blood flow to muscles and improving nerve conduction velocity.',
        'Dynamic stretching (leg swings, arm circles, walking lunges, inchworms) improves range of motion acutely by 5-10% without the performance decrements associated with prolonged static stretching.',
        'Activation drills target commonly underactive muscles (glutes, lower traps, deep neck flexors) using light resistance bands or bodyweight exercises to improve neuromuscular recruitment before loading.',
        'Movement-specific warm-up sets should progressively increase in load: empty bar x 10-15, 40% x 8, 60% x 5, 75% x 3, 85% x 1-2 before working sets, allowing joints and connective tissue to prepare for heavy loads.',
        'Static stretching before resistance training can reduce power output by 5-8% and should be reserved for post-workout or separate flexibility sessions; dynamic stretching is superior pre-training.',
        'Cold muscles have reduced elasticity and are more susceptible to strains; training in cold environments or immediately after prolonged sitting requires a longer, more thorough warm-up.',
        'The RAMP protocol (Raise temperature, Activate muscles, Mobilize joints, Potentiate the nervous system) provides a structured framework for comprehensive warm-up design.',
      ],
    },
    {
      name: 'Prehab Exercises',
      description:
        'Preventive exercises targeting commonly vulnerable areas to build resilience and address weaknesses before they become injuries.',
      details: [
        'Shoulder prehab should include external rotations, face pulls, band pull-aparts, and Y-T-W raises performed 2-3 times per week with 2-3 sets of 15-20 reps at low intensity.',
        'Hip prehab includes clamshells, banded lateral walks, single-leg glute bridges, and hip 90/90 stretches to address the glute weakness and hip stiffness common in desk-bound populations.',
        'Knee prehab focuses on VMO (vastus medialis oblique) activation through terminal knee extensions, Peterson step-ups, and Spanish squats, plus IT band foam rolling and hip strengthening.',
        'Ankle mobility work (wall ankle stretches, banded dorsiflexion, calf raises with controlled eccentrics) is essential for proper squat mechanics and reducing compensatory knee valgus.',
        'Core stability exercises (dead bugs, Pallof presses, bird dogs, anti-rotation holds) protect the spine by training the transverse abdominis and multifidus muscles that provide segmental spinal stability.',
        'Wrist prehab (wrist circles, finger extensions with rubber bands, flexor and extensor stretches) is important for those performing heavy pressing, Olympic lifts, or front rack positions.',
        'Thoracic spine mobility drills (foam roller extensions, open books, quadruped rotations) prevent compensatory motion at the lumbar spine and shoulders during overhead and pressing movements.',
        'Prehab is most effective when performed consistently 3-4 times per week as part of the warm-up or on rest days, rather than sporadically after an injury scare.',
      ],
    },
    {
      name: 'Form & Technique Safety',
      description:
        'Principles of safe movement mechanics and common technique errors that increase injury risk during resistance training.',
      details: [
        'The squat should maintain a neutral spine throughout, with knees tracking over toes (not caving inward), adequate depth for the individual anatomy, and weight distributed across the full foot.',
        'Deadlift safety requires the bar to stay close to the body throughout the pull, hips and shoulders rising at the same rate off the floor, and no lumbar flexion (rounding) at any point during the lift.',
        'Bench press safety involves retracting and depressing the scapulae, maintaining a slight arch, bringing the bar to the lower chest, and keeping wrists stacked directly over the elbows.',
        'Overhead pressing should begin with full scapular upward rotation, the ribcage should not excessively flare, and the bar path should travel in a slight arc around the face to a position directly overhead.',
        'Ego lifting (using weight beyond technical competence) is the single most common cause of acute gym injuries; a weight is too heavy if form breaks down on any repetition of a set.',
        'Training to absolute muscular failure increases injury risk, especially on compound movements; stopping 1-2 reps short of failure (RPE 7-8) provides nearly the same stimulus with substantially less risk.',
        'Controlled tempo, especially during the eccentric (lowering) phase, reduces injury risk and improves muscle activation; a 2-3 second eccentric is generally appropriate for most movements.',
        'Video recording your lifts from the side and front angles is one of the most effective self-coaching tools for identifying and correcting form deviations before they cause injury.',
      ],
    },
    {
      name: 'Recovery Protocols',
      description:
        'Evidence-based methods for optimizing recovery between training sessions and managing acute injury with proper first aid.',
      details: [
        'Sleep is the most important recovery tool; 7-9 hours per night is optimal, with research showing that sleeping less than 6 hours increases injury risk by 1.7x in athletes.',
        'The PEACE & LOVE framework has replaced the older RICE protocol for acute soft tissue injuries: Protect, Elevate, Avoid anti-inflammatories, Compress, Educate & Load, Optimism, Vascularization, Exercise.',
        'Active recovery (light walking, swimming, or cycling at 30-40% max heart rate) on rest days promotes blood flow and nutrient delivery to recovering tissues without adding meaningful training stress.',
        'Adequate protein intake (1.6-2.2 g/kg/day) provides the amino acids necessary for tissue repair, with leucine being particularly important for activating the mTOR muscle protein synthesis pathway.',
        'Foam rolling and self-myofascial release can reduce perceived muscle soreness (DOMS) by 20-30% and transiently improve range of motion, though they do not accelerate actual tissue healing.',
        'Cold water immersion (10-15 degrees Celsius for 10-15 minutes) may reduce acute inflammation and soreness but can blunt long-term hypertrophy and strength adaptations when used chronically post-training.',
        'Contrast therapy (alternating hot and cold water exposure) may promote recovery through a vascular pumping mechanism, though evidence is mixed and effects are modest compared to adequate sleep and nutrition.',
        'Deload weeks (reducing training volume by 40-60% every 4-6 weeks) allow accumulated fatigue to dissipate and connective tissues to adapt, reducing overuse injury risk during intensified training blocks.',
      ],
    },
    {
      name: 'When to See a Doctor',
      description:
        'Guidelines for distinguishing between normal training discomfort and symptoms that require professional medical evaluation.',
      details: [
        'Seek immediate medical attention for acute injuries involving a pop or snap sound, immediate severe swelling, inability to bear weight or move a joint, visible deformity, or numbness/tingling.',
        'Sharp, stabbing, or electrical pain during movement (as opposed to dull muscular soreness) is a warning sign of structural damage and should not be trained through.',
        'Pain that persists beyond 2 weeks despite rest, ice, and activity modification warrants professional evaluation to rule out structural damage or develop a proper rehabilitation plan.',
        'Symptoms of nerve involvement (radiating pain, numbness, tingling, weakness in a specific pattern) require prompt evaluation as they may indicate disc herniation or nerve entrapment.',
        'Joint locking, catching, or giving way suggests internal derangement (meniscus tear, loose body, labral tear) and typically requires imaging and specialist evaluation.',
        'Persistent night pain that wakes you from sleep may indicate a more serious pathology (stress fracture, tumor, infection) and should always be evaluated by a physician.',
        'Chronic tendon pain lasting more than 3 months that has not responded to load management, eccentric exercises, and activity modification may benefit from specialist interventions such as shockwave therapy or PRP.',
        'When in doubt, seeing a sports medicine physician, orthopedic specialist, or physiotherapist early is always preferable to prolonged self-treatment that allows an injury to worsen.',
      ],
    },
    {
      name: 'Tendinopathy Management',
      description:
        'Understanding and managing tendon injuries through evidence-based loading protocols and progressive rehabilitation.',
      details: [
        'Tendinopathy is a degenerative (not inflammatory) condition involving disorganized collagen, increased ground substance, and neovascularization within the tendon, most commonly affecting the patellar, Achilles, and rotator cuff tendons.',
        'The continuum model of tendinopathy describes three stages: reactive (acute overload), tendon dysrepair (failed healing), and degenerative (structural breakdown); treatment differs at each stage.',
        'Isometric exercises (e.g., wall sits for patellar tendinopathy, 45-second holds at 70% MVC) can provide significant pain relief and are an excellent starting point for painful tendons.',
        'Progressive eccentric-concentric loading (heavy slow resistance) is the gold standard for tendinopathy rehabilitation; protocols typically involve gradually increasing load over 12-24 weeks.',
        'Complete rest is generally counterproductive for tendinopathy; tendons require appropriate mechanical loading to stimulate healing and collagen reorganization, following the principle of "relative rest."',
        'Pain monitoring using a 0-10 scale during exercises is recommended: pain up to 3-4/10 during loading is acceptable; pain that increases the next morning or persists above 5/10 indicates excessive load.',
        'NSAIDs and corticosteroid injections may provide short-term pain relief but can impair tendon healing and are associated with increased risk of tendon rupture with repeated use.',
        'Full tendinopathy recovery typically takes 3-6 months of consistent, progressive loading; patients should be educated that improvement is gradual and setbacks are normal.',
      ],
    },
    {
      name: 'Joint Health',
      description:
        'Strategies for maintaining healthy joints through proper training practices, nutrition, and lifestyle factors.',
      details: [
        'Cartilage is avascular and relies on cyclical loading (compression and decompression) to receive nutrients through synovial fluid diffusion; regular moderate exercise is essential for cartilage health.',
        'Joint-friendly training principles include using full range of motion, controlled tempos, appropriate loading, adequate warm-up, and balancing pushing and pulling movements.',
        'Omega-3 fatty acids (2-3 g EPA/DHA daily) have anti-inflammatory properties that may benefit joint health; fish oil supplementation has shown modest benefits for joint pain in some studies.',
        'Collagen supplementation (10-15 g of hydrolyzed collagen with 50 mg vitamin C taken 30-60 minutes before training) may support tendon and ligament health, with emerging evidence from Baar lab research.',
        'Glucosamine (1,500 mg/day) and chondroitin (1,200 mg/day) supplementation shows mixed evidence; some individuals report symptom improvement, though large meta-analyses show modest or no benefit.',
        'Maintaining a healthy body weight reduces joint stress; each pound of body weight translates to approximately 3-4 pounds of force across the knee joint during walking.',
        'Training through a full range of motion strengthens connective tissues throughout the entire joint range, building resilience; consistently using partial range of motion leaves tissues vulnerable at end-range.',
        'Joint health is significantly influenced by overall systemic inflammation; managing stress, sleep quality, diet quality, and body composition all contribute to long-term joint longevity.',
      ],
    },
    {
      name: 'Overtraining Syndrome',
      description:
        'Recognizing the signs of excessive training stress that exceeds recovery capacity, and how to prevent and address it.',
      details: [
        'Overtraining syndrome (OTS) is a persistent state of performance decline, fatigue, and neuroendocrine disruption that does not resolve with short-term rest; it can take weeks to months to recover from.',
        'Overreaching is a milder, short-term state of accumulated fatigue that resolves with 1-2 weeks of reduced training; functional overreaching is actually a deliberate training strategy in periodization.',
        'Warning signs include persistent fatigue despite adequate sleep, declining performance over 2+ weeks, elevated resting heart rate (5-10 bpm above normal), mood disturbances, increased illness frequency, and loss of motivation.',
        'Hormonal indicators of OTS include suppressed testosterone, elevated cortisol, disrupted cortisol awakening response, and decreased IGF-1 levels, reflecting chronic hypothalamic-pituitary-adrenal axis disruption.',
        'OTS risk increases with rapid training volume increases (>10% per week), inadequate sleep (<7 hours), caloric restriction, high life stress, and insufficient rest days.',
        'Heart rate variability (HRV) monitoring using smartphone apps can detect early signs of excessive training stress by tracking changes in autonomic nervous system balance before performance decline occurs.',
        'Prevention is far more effective than treatment; periodized programming with planned deload weeks, adequate nutrition, 7-9 hours of sleep, and stress management are the primary prevention strategies.',
        'Recovery from true OTS may require 4-12 weeks of significantly reduced or eliminated training, increased caloric intake, stress management, and sometimes psychological support.',
      ],
    },
    {
      name: 'Return to Training After Injury',
      description:
        'Evidence-based guidelines for safely progressing back to full training after an injury, minimizing re-injury risk.',
      details: [
        'The return-to-training continuum follows a progression: pain-free daily activities, pain-free rehabilitation exercises, modified training, progressive loading, and finally unrestricted training.',
        'Load should be reintroduced gradually, starting at approximately 50% of pre-injury training loads and progressing by 10-20% per week as tolerated, guided by pain and function.',
        'Tissue healing timelines vary: muscle strains heal in 2-6 weeks, ligament sprains in 6-12 weeks, bone fractures in 6-12 weeks, and tendon injuries in 3-6 months, though these are general guides.',
        'The 24-hour pain response rule: if an exercise causes pain that increases the next day or lasts more than 24 hours, the load or volume was too high and should be reduced.',
        'Bilateral training can continue during a unilateral injury; training the uninjured side helps maintain neuromuscular function and can provide a cross-education effect of up to 10-15% strength retention in the injured limb.',
        'Psychological readiness is as important as physical readiness when returning from injury; fear of re-injury (kinesiophobia) can alter movement patterns and actually increase re-injury risk.',
        'Criteria-based return-to-sport decisions (achieving specific strength, range of motion, and functional benchmarks) are superior to time-based decisions (returning after a fixed number of weeks).',
        'Re-injury rates are highest in the first 2-4 weeks after return to full training; maintaining a conservative approach during this period and continuing prehab exercises long-term is essential.',
      ],
    },
  ],
  keyTerms: [
    {
      term: 'Tendinopathy',
      definition:
        'A degenerative condition of a tendon characterized by pain, swelling, and impaired function, caused by chronic overload without adequate recovery. Not primarily inflammatory despite the older term "tendinitis."',
    },
    {
      term: 'Impingement',
      definition:
        'Compression of soft tissues (tendons, bursa) between bones during movement, most commonly in the shoulder (subacromial impingement) or hip (femoroacetabular impingement), causing pain and restricted motion.',
    },
    {
      term: 'DOMS (Delayed Onset Muscle Soreness)',
      definition:
        'Muscle pain and stiffness occurring 24-72 hours after unaccustomed or eccentric-heavy exercise, caused by microtrauma to muscle fibers. Normal and not indicative of injury; resolves in 3-5 days.',
    },
    {
      term: 'PEACE & LOVE',
      definition:
        'The current evidence-based acute injury management framework: Protect, Elevate, Avoid anti-inflammatories, Compress, Educate (acute phase) & Load, Optimism, Vascularization, Exercise (recovery phase).',
    },
    {
      term: 'Prehab',
      definition:
        'Preventive rehabilitation exercises targeting commonly vulnerable areas (shoulders, hips, knees, core) to build resilience and address weaknesses before injuries occur, typically performed as part of a warm-up routine.',
    },
    {
      term: 'Overtraining Syndrome',
      definition:
        'A chronic state of performance decline and neuroendocrine disruption resulting from excessive training stress without adequate recovery, requiring weeks to months of reduced training to resolve.',
    },
    {
      term: 'Valgus Collapse',
      definition:
        'Inward caving of the knees during squatting or landing movements, often caused by weak gluteus medius and hip external rotators. A major risk factor for ACL and meniscus injuries.',
    },
    {
      term: 'Neutral Spine',
      definition:
        'The natural alignment of the spine with its three curves (cervical lordosis, thoracic kyphosis, lumbar lordosis) maintained during loading. Deviation from neutral under load increases injury risk.',
    },
    {
      term: 'Valsalva Maneuver',
      definition:
        'A bracing technique involving deep inhalation and holding breath against a closed glottis to create intra-abdominal pressure, stabilizing the spine during heavy lifts. Temporarily increases blood pressure.',
    },
    {
      term: 'Eccentric Loading',
      definition:
        'The phase of an exercise where the muscle lengthens under tension (e.g., lowering a deadlift). Produces the highest forces and most muscle damage; critical in tendinopathy rehabilitation protocols.',
    },
    {
      term: 'Deload',
      definition:
        'A planned reduction in training volume (40-60%) and/or intensity for one week, typically every 4-6 weeks, to allow accumulated fatigue to dissipate and connective tissues to recover.',
    },
    {
      term: 'RPE (Rate of Perceived Exertion)',
      definition:
        'A subjective scale (typically 1-10) used to gauge effort intensity. RPE 7-8 (2-3 reps in reserve) is generally recommended for most training to balance stimulus with injury risk.',
    },
    {
      term: 'Kinesiophobia',
      definition:
        'An excessive, irrational fear of movement and re-injury that can develop after injury. It alters movement patterns, delays recovery, and is a significant predictor of poor rehabilitation outcomes.',
    },
    {
      term: 'Crepitus',
      definition:
        'Cracking, popping, or grinding sounds or sensations in a joint during movement. Often benign (gas cavitation in synovial fluid) but may indicate cartilage damage if accompanied by pain or swelling.',
    },
    {
      term: 'Bursitis',
      definition:
        'Inflammation of a bursa (fluid-filled sac) that cushions tendons and bones at a joint, most commonly in the shoulder (subacromial), hip (trochanteric), or knee (prepatellar). Caused by repetitive friction or direct trauma.',
    },
    {
      term: 'Scapular Dyskinesis',
      definition:
        'Abnormal movement or positioning of the shoulder blade during arm motion, often characterized by winging or excessive protraction. Contributes to shoulder impingement and rotator cuff injuries.',
    },
    {
      term: 'Myofascial Release',
      definition:
        'A manual therapy and self-treatment technique (foam rolling, lacrosse ball) targeting the fascia and muscle tissue to reduce tension, improve range of motion, and decrease perceived soreness.',
    },
    {
      term: 'Proprioception',
      definition:
        'The body sense of joint position and movement in space without visual input. Essential for joint stability and injury prevention; often impaired after injury and must be specifically retrained.',
    },
    {
      term: 'Active Recovery',
      definition:
        'Low-intensity exercise (30-40% max effort) performed on rest days to promote blood flow and nutrient delivery to recovering tissues without adding significant training stress.',
    },
    {
      term: 'Cross-Education Effect',
      definition:
        'A neurological phenomenon where training one limb produces strength gains (up to 10-15%) in the opposite untrained limb, useful for maintaining function during unilateral injury rehabilitation.',
    },
    {
      term: 'Progressive Overload',
      definition:
        'The gradual increase in training stress (weight, reps, or volume) over time, necessary for continued adaptation but requiring careful management to avoid exceeding tissue tolerance.',
    },
    {
      term: 'Acute vs. Chronic Injury',
      definition:
        'Acute injuries occur suddenly from a single traumatic event (tear, sprain, fracture). Chronic injuries develop gradually from repetitive microtrauma (tendinopathy, stress fracture) over weeks to months.',
    },
    {
      term: 'Range of Motion (ROM)',
      definition:
        'The full degree of movement available at a joint. Training through full ROM strengthens tissues at all joint angles; restricted ROM can create vulnerable positions and compensatory patterns.',
    },
    {
      term: 'Inflammation',
      definition:
        'The body natural healing response to tissue damage, characterized by redness, swelling, heat, and pain. Acute inflammation is necessary for healing; chronic inflammation impairs recovery and tissue quality.',
    },
    {
      term: 'Referred Pain',
      definition:
        'Pain perceived at a location different from the actual source of injury or dysfunction. For example, a cervical disc problem may cause arm pain, or a hip issue may present as knee pain.',
    },
    {
      term: 'Motor Control',
      definition:
        'The ability to coordinate muscle activation patterns for efficient and safe movement. Impaired motor control (muscle firing timing and sequencing) is a significant injury risk factor, especially after previous injury.',
    },
    {
      term: 'HRV (Heart Rate Variability)',
      definition:
        'The variation in time intervals between heartbeats, reflecting autonomic nervous system balance. Lower HRV indicates higher stress and reduced recovery capacity; used to monitor training readiness.',
    },
    {
      term: 'Sprain vs. Strain',
      definition:
        'A sprain is an injury to a ligament (connects bone to bone), while a strain is an injury to a muscle or tendon (connects muscle to bone). Both are graded I (mild), II (moderate), or III (complete tear).',
    },
    {
      term: 'Stress Fracture',
      definition:
        'A small crack in a bone caused by repetitive loading without adequate recovery. Most common in weight-bearing bones (tibia, metatarsals). Requires complete rest from impact activities for 6-8 weeks.',
    },
    {
      term: 'Compensatory Movement',
      definition:
        'An altered movement pattern the body adopts to avoid pain or work around a weakness, which shifts stress to other structures and can create secondary injuries if not addressed.',
    },
  ],
  tips: [
    'Never skip your warm-up; a proper 10-15 minute warm-up with general cardio, dynamic stretching, activation drills, and progressive loading sets is the single most effective injury prevention tool.',
    'Follow the 10% rule for training progression: increase total weekly volume (sets x reps x weight) by no more than 10% per week to allow connective tissues time to adapt.',
    'Maintain a 2:1 pull-to-push ratio in your upper body training to protect the shoulders; most people push far more than they pull, creating dangerous anterior dominance.',
    'Perform prehab exercises for shoulders, hips, and knees 3-4 times per week as part of your warm-up; 5-10 minutes of targeted work prevents weeks or months of forced time off.',
    'Film your lifts regularly from multiple angles to identify form deviations; what feels correct internally often looks different on camera, especially under heavy loads.',
    'Listen to your body: sharp, stabbing pain during a movement is a stop signal. Muscular fatigue and mild discomfort are normal; pain that alters your movement pattern is not.',
    'Prioritize sleep as your number one recovery tool; athletes sleeping less than 7 hours per night have a 1.7x higher injury rate than those sleeping 8+ hours.',
    'Schedule deload weeks every 4-6 weeks where you reduce training volume by 40-60%; this allows accumulated connective tissue fatigue to resolve and prevents overuse injuries.',
    'If pain persists beyond 2 weeks despite rest and modification, see a sports medicine professional early rather than training around it for months and allowing a minor issue to become chronic.',
    'Strengthen the muscles you cannot see in the mirror (rear delts, lower traps, glutes, hamstrings, rotator cuff); these posterior chain muscles are the foundation of injury resistance.',
  ],
  faqs: [
    {
      question: 'Should I train through pain?',
      answer:
        'It depends on the type of pain. Muscular soreness (DOMS) and mild discomfort during training are generally safe to work through. Sharp, stabbing, electrical, or worsening pain should never be trained through. A good rule: if pain alters your movement pattern, forces you to compensate, or exceeds 3-4/10 on a pain scale, stop that exercise and modify or substitute.',
    },
    {
      question: 'Is cracking and popping in my joints dangerous?',
      answer:
        'Painless cracking and popping (crepitus) is usually harmless and caused by gas cavitation in synovial fluid, tendon snapping over bony prominences, or ligament movement. However, if cracking is accompanied by pain, swelling, locking, or instability, it may indicate cartilage damage, meniscus tears, or other pathology requiring evaluation.',
    },
    {
      question: 'How long should I rest after an injury?',
      answer:
        'Complete rest is rarely the best approach. Modern evidence favors "relative rest" where you modify activities to avoid aggravating the injury while maintaining general fitness and loading the injured tissue within pain-free or mildly painful ranges. Timelines vary: minor strains 2-4 weeks, moderate sprains 6-8 weeks, fractures 6-12 weeks. A physiotherapist can provide specific guidance.',
    },
    {
      question: 'Should I use ice or heat on an injury?',
      answer:
        'For acute injuries (first 48-72 hours), cold therapy can help manage pain and limit excessive swelling. After the acute phase, heat may be more beneficial for promoting blood flow and tissue healing. The current PEACE & LOVE framework de-emphasizes ice and suggests letting the natural inflammatory process proceed. Use cold primarily for pain relief if needed.',
    },
    {
      question: 'Should I take anti-inflammatory medication for training injuries?',
      answer:
        'NSAIDs (ibuprofen, naproxen) should be used sparingly. While they reduce pain, they can impair tissue healing by suppressing the inflammatory phase necessary for repair. Short-term use (2-3 days) for acute injuries is generally acceptable, but chronic use for tendinopathy or muscle injuries can delay recovery. Always consult a healthcare professional.',
    },
    {
      question: 'How do I prevent shoulder injuries from bench pressing?',
      answer:
        'Retract and depress your shoulder blades throughout the movement, maintain a slight arch, touch the bar to the lower chest (not the neck), keep elbows at 45-75 degrees (not flared to 90), use a grip width that keeps forearms vertical at the bottom, and balance pressing volume with pulling exercises (rows, face pulls). Include rotator cuff prehab 2-3 times weekly.',
    },
    {
      question: 'What is the difference between a sprain and a strain?',
      answer:
        'A sprain involves a ligament (connecting bone to bone) and typically occurs at joints like the ankle, knee, or wrist. A strain involves a muscle or its tendon and usually occurs in the hamstrings, lower back, or shoulders. Both are graded from Grade I (mild stretching) to Grade III (complete rupture). Treatment principles are similar but recovery timelines differ.',
    },
    {
      question: 'Is it normal to feel sore after every workout?',
      answer:
        'Some soreness (DOMS) is normal, especially after new exercises, increased volume, or eccentric-heavy training. However, severe soreness after every session suggests excessive volume or intensity. As your body adapts, DOMS should decrease. Lack of soreness does not mean an ineffective workout; soreness is a poor indicator of training quality.',
    },
    {
      question: 'How do I know if I am overtraining?',
      answer:
        'Warning signs include persistent fatigue despite adequate sleep, declining performance over 2+ weeks, elevated resting heart rate, frequent illness, mood disturbances (irritability, depression), loss of motivation, disrupted sleep, decreased appetite, and persistent muscle soreness. If multiple signs are present, take a full week off or significantly reduce training and focus on recovery.',
    },
    {
      question: 'Should I stretch before or after training?',
      answer:
        'Dynamic stretching (controlled movement through range of motion) is ideal before training as it improves mobility without reducing performance. Static stretching (holding positions for 30+ seconds) is best performed after training or in separate sessions, as pre-workout static stretching can temporarily reduce strength and power output by 5-8%.',
    },
    {
      question: 'When can I return to training after a muscle strain?',
      answer:
        'Grade I strains (mild): typically 1-3 weeks with progressive loading. Grade II (moderate): 3-8 weeks with structured rehabilitation. Grade III (complete tear): 3-6 months, potentially requiring surgery. Return should be based on functional criteria: full pain-free range of motion, strength within 90% of the uninjured side, and ability to perform sport-specific movements without compensation.',
    },
    {
      question: 'Are lifting belts necessary for injury prevention?',
      answer:
        'Lifting belts are not necessary but can be beneficial for heavy compound lifts (squats, deadlifts) above 80-85% of your one-rep max. They increase intra-abdominal pressure by 15-25%, providing additional spinal support. However, they should supplement proper bracing technique, not replace it. Relying on a belt without developing core bracing ability may increase injury risk long-term.',
    },
    {
      question: 'My knees crack when I squat. Should I stop squatting?',
      answer:
        'Painless cracking during squats is usually benign and does not indicate damage. If there is no pain, swelling, or instability, you can continue squatting safely. Ensure proper form: knees tracking over toes, adequate ankle mobility, controlled descent, and appropriate depth for your anatomy. If cracking is accompanied by pain or swelling, seek professional evaluation.',
    },
    {
      question: 'How do I prevent lower back pain from deadlifts?',
      answer:
        'Master the hip hinge pattern with lighter loads before progressing. Maintain a neutral spine throughout the lift, brace your core with a proper Valsalva maneuver, keep the bar close to your body, and ensure your hips and shoulders rise at the same rate. Progress loads conservatively, never sacrifice form for weight, and strengthen your core with anti-extension and anti-rotation exercises.',
    },
    {
      question: 'Is foam rolling actually helpful?',
      answer:
        'Foam rolling can temporarily reduce perceived soreness by 20-30% and improve range of motion for 10-30 minutes. It does not break up scar tissue or fascial adhesions as commonly claimed. It is best used as a warm-up tool or post-workout recovery aid. For chronic tightness or pain, addressing the underlying cause (weakness, movement dysfunction) is more effective than foam rolling alone.',
    },
  ],
};
