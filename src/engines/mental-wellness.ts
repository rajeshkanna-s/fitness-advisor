import type { EngineData } from '../types';

export const mentalWellnessEngine: EngineData = {
  category: 'mental-wellness',
  title: 'Mental Wellness & Fitness Psychology',
  description:
    'Evidence-based guide to the psychological dimensions of fitness, including the mental health benefits of exercise, stress management, sleep optimization, motivation science, body image, mindfulness, and strategies for long-term psychological well-being.',
  topics: [
    {
      name: 'Exercise & Mental Health',
      description:
        'The extensive, well-documented benefits of regular physical activity on mental health conditions and overall psychological well-being.',
      details: [
        'Regular exercise reduces symptoms of depression by 20-30% on average, with some meta-analyses suggesting effects comparable to antidepressant medication for mild to moderate depression.',
        'Exercise triggers the release of endorphins, serotonin, dopamine, and norepinephrine, collectively improving mood, reducing pain perception, and enhancing feelings of well-being.',
        'Brain-derived neurotrophic factor (BDNF) increases 2-3x during exercise, promoting neuroplasticity, neurogenesis in the hippocampus, and improved cognitive function including memory and learning.',
        'Anxiety symptoms are reduced by 20-30% with regular aerobic exercise; even a single session of moderate-intensity exercise can reduce state anxiety for 4-6 hours afterward.',
        'The minimum effective dose for mental health benefits appears to be approximately 150 minutes of moderate-intensity activity per week, though benefits increase with up to 300+ minutes weekly.',
        'Resistance training specifically has been shown to reduce anxiety symptoms by 20% and depression symptoms by 33% in meta-analyses, independent of improvements in physical fitness.',
        'Exercise improves self-efficacy (belief in one ability to succeed), which generalizes beyond fitness to improve confidence in work, relationships, and other life domains.',
        'Regular physical activity reduces the risk of developing clinical depression by 25-30% and is increasingly recognized by psychiatric guidelines as a first-line treatment option.',
      ],
    },
    {
      name: 'Stress Management',
      description:
        'Understanding the stress response and how exercise and lifestyle strategies can effectively manage acute and chronic stress.',
      details: [
        'The stress response (fight-or-flight) activates the sympathetic nervous system and HPA axis, releasing cortisol and adrenaline, which are adaptive short-term but damaging when chronically elevated.',
        'Exercise acts as a controlled stressor that improves stress resilience by training the HPA axis to respond more efficiently and return to baseline faster after activation.',
        'Chronic psychological stress increases cortisol, impairs immune function, disrupts sleep, promotes visceral fat storage, and interferes with muscle protein synthesis and recovery from training.',
        'Heart rate variability (HRV) biofeedback and diaphragmatic breathing (4-7-8 breathing: inhale 4 seconds, hold 7, exhale 8) can activate the parasympathetic nervous system within minutes.',
        'Progressive muscle relaxation (systematically tensing and releasing muscle groups) reduces perceived stress by 25-40% and can improve sleep quality when practiced before bed.',
        'Time in nature (forest bathing, outdoor exercise) reduces cortisol levels by 12-16% compared to indoor exercise, with effects lasting several hours after the session.',
        'Stress management is essential for training results; chronically elevated cortisol impairs recovery, reduces testosterone, increases injury risk, and can contribute to overtraining syndrome.',
        'The allostatic load model suggests that cumulative stress from all sources (work, relationships, financial, training) must be managed holistically, as the body does not differentiate between stress types.',
      ],
    },
    {
      name: 'Sleep Hygiene & Optimization',
      description:
        'The critical role of sleep in physical recovery, mental health, and training performance, with practical strategies for improvement.',
      details: [
        'Sleep is the most important recovery tool; growth hormone secretion peaks during deep (N3) sleep, with 60-70% of daily GH release occurring in the first half of the night.',
        'Adults need 7-9 hours of sleep per night; sleeping less than 6 hours reduces testosterone by 10-15%, impairs glucose metabolism, increases cortisol, and reduces protein synthesis by up to 18%.',
        'Sleep deprivation (<6 hours) increases injury risk by 1.7x in athletes, reduces reaction time by 15-20%, impairs decision-making, and reduces maximal strength by 5-10%.',
        'The circadian rhythm is governed by the suprachiasmatic nucleus and strongly influenced by light exposure; 10-15 minutes of bright morning light within 30 minutes of waking helps anchor the circadian clock.',
        'Blue light from screens suppresses melatonin production by up to 50% when viewed within 2 hours of bedtime; blue light filters, dim lighting, and screen curfews improve sleep onset latency.',
        'Room temperature of 15-19 degrees Celsius (60-67 degrees Fahrenheit) is optimal for sleep, as the body needs to drop core temperature by approximately 1 degree Celsius to initiate sleep.',
        'Caffeine has a half-life of 5-7 hours; consuming caffeine within 6 hours of bedtime can reduce total sleep time by 1 hour and significantly reduce deep sleep even without subjective awareness.',
        'Consistent sleep and wake times (within 30 minutes, even on weekends) are more important for sleep quality than total sleep duration, as they align the circadian rhythm.',
      ],
      subtopics: [
        {
          name: 'Sleep Architecture',
          description: 'Understanding sleep stages and their roles in physical and cognitive recovery.',
          details: [
            'A complete sleep cycle lasts approximately 90 minutes and includes N1 (light sleep), N2 (intermediate), N3 (deep/slow-wave sleep), and REM sleep in sequence.',
            'Deep sleep (N3) is critical for physical recovery: growth hormone release, muscle repair, immune function, and glycogen replenishment occur primarily during this stage.',
            'REM sleep is essential for cognitive function, memory consolidation, emotional processing, and motor learning; it increases in proportion during the later cycles of the night.',
            'Alcohol disrupts sleep architecture by increasing N1/N2 at the expense of N3 and REM, even when total sleep duration is maintained, resulting in non-restorative sleep.',
          ],
        },
      ],
    },
    {
      name: 'Mind-Body Connection',
      description:
        'The bidirectional relationship between physical sensations, mental states, and movement quality, and how to leverage this connection in training.',
      details: [
        'Interoception (awareness of internal body signals like heart rate, breathing, muscle tension) can be developed through practice and improves both training quality and emotional regulation.',
        'The mind-muscle connection (attentional focus on the working muscle) has been shown to increase EMG activity in the target muscle by up to 20% during isolation exercises at moderate loads.',
        'Internal focus (thinking about the muscle) is superior for hypertrophy-focused training with isolation movements, while external focus (thinking about the outcome, moving the weight) is superior for strength and athletic performance.',
        'Breathing patterns directly influence autonomic nervous system state: slow, deep diaphragmatic breathing (6 breaths/minute) activates the parasympathetic system and reduces anxiety and cortisol.',
        'Somatic experiencing and body scan meditation help identify and release stored muscular tension patterns that develop from chronic stress, poor posture, or emotional guarding.',
        'Yoga and tai chi combine movement, breathing, and mindfulness, showing benefits for stress reduction, flexibility, balance, and mental health comparable to or exceeding traditional exercise in some studies.',
        'The facial feedback hypothesis suggests that facial expressions can influence emotional state; maintaining a relaxed face during training (rather than grimacing) may reduce perceived exertion.',
        'Embodied cognition research shows that physical states affect mental states and vice versa; adopting expansive, upright postures is associated with increased confidence and reduced stress hormone levels.',
      ],
    },
    {
      name: 'Motivation & Discipline',
      description:
        'The science of motivation, habit formation, and strategies for maintaining long-term exercise adherence beyond initial enthusiasm.',
      details: [
        'Self-determination theory identifies three psychological needs for sustained motivation: autonomy (choice in what and how you train), competence (sense of progress and ability), and relatedness (social connection).',
        'Intrinsic motivation (exercising because you enjoy it and value the process) is far more sustainable than extrinsic motivation (exercising for appearance or external rewards) for long-term adherence.',
        'Habit formation research suggests that exercise becomes automatic after approximately 66 days of consistent practice on average, though the range is 18-254 days depending on complexity and individual factors.',
        'Implementation intentions ("I will do X at Y time in Z location") increase the probability of following through on exercise plans by 2-3x compared to vague goals like "I will exercise more."',
        'The transtheoretical model of behavior change describes five stages: precontemplation, contemplation, preparation, action, and maintenance; strategies should match the current stage for maximum effectiveness.',
        'Goal setting using the SMART framework (Specific, Measurable, Achievable, Relevant, Time-bound) increases adherence; process goals (train 4x/week) are more controllable than outcome goals (lose 10 kg).',
        'Discipline is a trainable skill that strengthens with practice; starting with small, consistent actions (a 10-minute walk daily) builds the neural pathways and identity that support larger commitments.',
        'Motivation fluctuates naturally; building systems (scheduled training times, gym bag packed, training partner accountability) reduces reliance on motivation and makes consistency more automatic.',
      ],
    },
    {
      name: 'Body Image & Dysmorphia',
      description:
        'Understanding healthy and unhealthy relationships with physical appearance in the context of fitness culture.',
      details: [
        'Body dysmorphic disorder (BDD) affects approximately 2-3% of the general population and up to 13-15% of bodybuilders, characterized by obsessive preoccupation with perceived flaws in appearance.',
        'Muscle dysmorphia (bigorexia) is a subtype of BDD predominantly affecting men, where individuals perceive themselves as small and weak despite being muscularly developed; associated with compulsive exercise and disordered eating.',
        'Social media exposure to idealized fitness physiques increases body dissatisfaction by 15-25% in both men and women, with "fitspiration" content being particularly harmful despite its positive framing.',
        'Positive body image is not about loving your appearance at all times but about body appreciation, body functionality appreciation, and a broad conceptualization of beauty that is not appearance-centered.',
        'Body neutrality (focusing on what your body can do rather than how it looks) may be a more achievable and psychologically sustainable goal than body positivity for many individuals in fitness contexts.',
        'Warning signs of unhealthy body image include: exercising purely to compensate for eating, persistent dissatisfaction despite objective physical changes, social withdrawal, and mirror avoidance or compulsive checking.',
        'Cognitive behavioral therapy (CBT) is the most evidence-based treatment for BDD and body image disturbances, with response rates of 50-70% for reducing dysmorphic symptoms and associated distress.',
        'Fitness professionals should be aware that comments about clients bodies, even complimentary ones, can be triggering; focusing on performance, health, and functional improvements is more psychologically safe.',
      ],
    },
    {
      name: 'Exercise Addiction',
      description:
        'When the healthy pursuit of fitness crosses into compulsive, harmful behavior that negatively impacts physical and mental health.',
      details: [
        'Exercise addiction affects an estimated 3-5% of regular exercisers and up to 25-30% of marathon runners and ultramarathon athletes, sharing behavioral characteristics with substance addictions.',
        'The six components of exercise addiction parallel substance addiction: salience (exercise dominates thinking), mood modification (exercise used to alter emotional state), tolerance (needing more exercise for the same effect), withdrawal symptoms, conflict (with relationships, work, rest), and relapse.',
        'Exercise addiction often co-occurs with eating disorders (anorexia athletica), body dysmorphia, anxiety disorders, and obsessive-compulsive tendencies, requiring comprehensive treatment.',
        'Warning signs include exercising despite injury or illness, severe anxiety or guilt when unable to exercise, prioritizing exercise over relationships and work obligations, and secretive or rigid exercise behavior.',
        'The distinction between healthy dedication and addiction lies in flexibility: dedicated exercisers can adapt their schedule and enjoy rest days, while addicted exercisers cannot tolerate deviation from their routine.',
        'Withdrawal symptoms from exercise cessation can include anxiety, irritability, depression, insomnia, and restlessness, similar to substance withdrawal profiles.',
        'Treatment typically involves cognitive behavioral therapy, gradual reduction in exercise volume, developing alternative coping mechanisms, and often addressing co-occurring conditions like eating disorders.',
        'Prevention includes maintaining diverse interests and social connections outside of fitness, scheduling planned rest days without guilt, and periodically evaluating whether exercise enhances or detracts from overall quality of life.',
      ],
    },
    {
      name: 'Mindfulness & Meditation',
      description:
        'Evidence-based mindfulness practices and their application to fitness, recovery, and overall mental well-being.',
      details: [
        'Mindfulness meditation reduces cortisol levels by 15-25% and decreases anxiety and depression symptoms by 30-40% in meta-analyses, with effects comparable to cognitive behavioral therapy for some conditions.',
        'As little as 10-15 minutes of daily meditation practice for 8 weeks produces measurable changes in brain structure (increased grey matter in the prefrontal cortex and hippocampus) and function.',
        'Body scan meditation systematically directs attention through the body, improving interoceptive awareness that enhances mind-muscle connection and helps identify developing injuries or tension patterns early.',
        'Mindful eating (paying full attention to the sensory experience of eating) has been shown to reduce binge eating by 40-50% and improve overall dietary adherence by increasing awareness of hunger and satiety cues.',
        'Pre-performance meditation or centering routines (focused breathing, visualization) can reduce competitive anxiety and improve performance by shifting the nervous system from sympathetic to parasympathetic dominance.',
        'Loving-kindness meditation (directing compassion toward self and others) has been shown to improve self-compassion, reduce self-criticism, and improve body image in fitness populations.',
        'Mindfulness-based stress reduction (MBSR) 8-week programs show 35% reduction in psychological distress and significant improvements in sleep quality, pain management, and emotional regulation.',
        'Integration of mindfulness into training (mindful warm-ups, breathing between sets, non-judgmental awareness during movement) can transform exercise from a stressor into a restorative practice.',
      ],
    },
    {
      name: 'Social Aspects of Fitness',
      description:
        'How social connections, community, and relationships influence exercise behavior, adherence, and mental health outcomes.',
      details: [
        'Training with a partner or group increases exercise adherence by 60-95% compared to training alone, driven by accountability, social support, and the Kohler motivation gain effect (working harder in groups).',
        'Social comparison in fitness settings can be both motivating (upward comparison with role models) and harmful (unfavorable comparison leading to decreased self-esteem), depending on the individual mindset.',
        'Group fitness classes and CrossFit-style training produce measurably higher enjoyment, social bonding, and psychological well-being than equivalent solo training, partly through synchronized group effort.',
        'Online fitness communities can provide valuable support and information but also propagate unrealistic standards, misinformation, and toxic comparison; curating your social media feed is important for mental health.',
        'The "social contagion" effect means that your fitness habits are strongly influenced by your social network; having fit friends increases your probability of exercising regularly by 50-70%.',
        'Inclusive fitness environments that welcome diverse body types, fitness levels, and backgrounds produce better mental health outcomes than environments focused on appearance or competition.',
        'Gym anxiety (feeling judged, not knowing what to do, fear of looking foolish) affects 50-65% of gym newcomers and is a major barrier to exercise adoption; working with a trainer or starting with group classes can mitigate this.',
        'Romantic partner support for exercise significantly predicts adherence; couples who exercise together report higher relationship satisfaction and are 34% more likely to maintain their fitness routines.',
      ],
    },
    {
      name: 'Burnout Prevention',
      description:
        'Recognizing and preventing psychological burnout from training, which can undermine both fitness progress and mental health.',
      details: [
        'Training burnout is a state of chronic physical and emotional exhaustion, reduced performance, and negative attitudes toward training, distinct from overtraining syndrome though often co-occurring.',
        'The three dimensions of burnout are emotional exhaustion (feeling drained by training), depersonalization (cynical or detached attitude toward fitness), and reduced personal accomplishment (feeling that training is pointless).',
        'Perfectionism in training (all-or-nothing thinking, rigid adherence to plans, self-criticism for missed sessions) is one of the strongest predictors of burnout in both recreational and competitive athletes.',
        'Variety in training (changing exercises, environments, training partners, and modalities periodically) prevents monotony and stimulates the novelty-seeking neural circuits that maintain engagement.',
        'Periodization is a psychological tool as well as a physical one; cycling through phases with different goals (strength, hypertrophy, endurance, skill work) prevents the monotony that drives burnout.',
        'Autonomy in training decisions (choosing exercises, scheduling sessions, setting goals) is protective against burnout; rigidly following someone else program without personal investment increases burnout risk.',
        'Warning signs of impending burnout include dreading training sessions you previously enjoyed, persistent low motivation lasting 2+ weeks, emotional numbness toward goals, and viewing exercise purely as obligation.',
        'Recovery from burnout often requires a complete break from structured training (1-4 weeks), followed by a gradual return focused on enjoyable, low-pressure physical activity before resuming formal programming.',
      ],
    },
  ],
  keyTerms: [
    {
      term: 'Endorphins',
      definition:
        'Endogenous opioid neuropeptides released during exercise that reduce pain perception and produce feelings of euphoria ("runner\'s high"). Levels increase significantly with moderate-to-vigorous intensity exercise.',
    },
    {
      term: 'BDNF (Brain-Derived Neurotrophic Factor)',
      definition:
        'A protein that supports neurogenesis, synaptic plasticity, and neuronal survival, particularly in the hippocampus. Exercise increases BDNF levels by 2-3x, improving learning, memory, and mood.',
    },
    {
      term: 'Cortisol',
      definition:
        'The primary stress hormone released by the adrenal glands. Acutely beneficial for energy mobilization and focus, but chronically elevated cortisol promotes fat storage, muscle breakdown, immune suppression, and mood disorders.',
    },
    {
      term: 'Serotonin',
      definition:
        'A neurotransmitter that regulates mood, appetite, sleep, and social behavior. Exercise increases serotonin synthesis and sensitivity, contributing to the antidepressant effects of physical activity.',
    },
    {
      term: 'Dopamine',
      definition:
        'A neurotransmitter involved in reward, motivation, and pleasure pathways. Exercise increases dopamine release and receptor sensitivity, improving motivation, focus, and mood both acutely and long-term.',
    },
    {
      term: 'HPA Axis',
      definition:
        'The hypothalamic-pituitary-adrenal axis; the neuroendocrine system governing the stress response. Exercise trains the HPA axis to respond more efficiently, improving stress resilience over time.',
    },
    {
      term: 'Self-Efficacy',
      definition:
        'The belief in one ability to succeed at specific tasks, central to motivation and behavior change. Exercise builds self-efficacy through mastery experiences, which generalizes to confidence in other life domains.',
    },
    {
      term: 'Self-Determination Theory',
      definition:
        'A motivation framework identifying three innate psychological needs: autonomy (control over choices), competence (sense of mastery), and relatedness (social connection). Fulfilling all three sustains intrinsic motivation.',
    },
    {
      term: 'Intrinsic Motivation',
      definition:
        'Motivation driven by internal satisfaction and enjoyment of the activity itself, rather than external rewards. Associated with higher exercise adherence, enjoyment, and psychological well-being than extrinsic motivation.',
    },
    {
      term: 'Body Dysmorphic Disorder (BDD)',
      definition:
        'A mental health condition characterized by obsessive preoccupation with perceived flaws in physical appearance that are not observable or appear slight to others. Affects 2-3% of the general population.',
    },
    {
      term: 'Muscle Dysmorphia',
      definition:
        'A subtype of BDD primarily affecting men, characterized by the belief that one is too small or insufficiently muscular despite being objectively muscular. Associated with compulsive exercise and supplement use.',
    },
    {
      term: 'Mindfulness',
      definition:
        'The practice of non-judgmental, present-moment awareness of thoughts, feelings, and sensations. Applied to fitness, it enhances mind-muscle connection, body awareness, and the psychological benefits of exercise.',
    },
    {
      term: 'Circadian Rhythm',
      definition:
        'The approximately 24-hour internal biological clock that regulates sleep-wake cycles, hormone release, body temperature, and metabolism. Disruption (jet lag, shift work, irregular schedules) impairs recovery and mental health.',
    },
    {
      term: 'Melatonin',
      definition:
        'A hormone produced by the pineal gland in response to darkness that promotes sleep onset. Production is suppressed by bright light and blue light exposure, with levels beginning to rise 2-3 hours before habitual bedtime.',
    },
    {
      term: 'Autonomic Nervous System',
      definition:
        'The division of the nervous system controlling involuntary functions, split into sympathetic (fight-or-flight, arousal) and parasympathetic (rest-and-digest, recovery) branches. Balance between them is key for health.',
    },
    {
      term: 'Exercise Addiction',
      definition:
        'A behavioral addiction characterized by compulsive, excessive exercise that negatively impacts physical health, relationships, and psychological well-being despite awareness of harm. Affects 3-5% of regular exercisers.',
    },
    {
      term: 'Cognitive Behavioral Therapy (CBT)',
      definition:
        'An evidence-based psychotherapy approach that addresses maladaptive thought patterns and behaviors. First-line treatment for body image disorders, exercise addiction, and depression related to fitness.',
    },
    {
      term: 'Implementation Intention',
      definition:
        'A specific plan of action formatted as "If situation X arises, then I will perform behavior Y." Increases the probability of following through on exercise intentions by 2-3x compared to motivation alone.',
    },
    {
      term: 'Flow State',
      definition:
        'A state of complete absorption in an activity where self-consciousness disappears, time perception is altered, and intrinsic motivation peaks. Experienced during optimally challenging physical activities.',
    },
    {
      term: 'Allostatic Load',
      definition:
        'The cumulative physiological burden on the body from chronic stress exposure, including training stress, psychological stress, poor sleep, and environmental factors. Excessive allostatic load impairs recovery and health.',
    },
    {
      term: 'Neuroplasticity',
      definition:
        'The brain ability to form new neural connections and reorganize throughout life. Exercise promotes neuroplasticity through BDNF release, improved cerebral blood flow, and reduction of neuroinflammation.',
    },
    {
      term: 'Interoception',
      definition:
        'The perception of internal body states including heart rate, breathing, hunger, and muscle tension. Enhanced interoception improves emotional regulation, training quality, and injury prevention.',
    },
    {
      term: 'Kinesiophobia',
      definition:
        'An irrational, debilitating fear of physical movement resulting from a feeling of vulnerability to painful injury. Common after injury and a significant barrier to rehabilitation and return to training.',
    },
    {
      term: 'Burnout',
      definition:
        'A syndrome of chronic physical and emotional exhaustion, detachment, and reduced accomplishment resulting from prolonged stress. In fitness, it manifests as loss of motivation, dreading training, and stalled progress.',
    },
    {
      term: 'Social Contagion',
      definition:
        'The spread of behaviors and habits through social networks. Research shows that fitness habits, body weight, and health behaviors are significantly influenced by the habits of friends and close social contacts.',
    },
    {
      term: 'Parasympathetic Nervous System',
      definition:
        'The "rest-and-digest" branch of the autonomic nervous system responsible for recovery, digestion, and relaxation. Activated by deep breathing, meditation, sleep, and recovery activities.',
    },
    {
      term: 'Growth Mindset',
      definition:
        'The belief that abilities can be developed through dedication and effort, as opposed to a fixed mindset. In fitness, growth mindset is associated with greater resilience, persistence through plateaus, and long-term adherence.',
    },
    {
      term: 'Gym Anxiety',
      definition:
        'A common social anxiety experienced in gym environments, characterized by fear of judgment, embarrassment, or incompetence. Affects 50-65% of gym newcomers and is a major barrier to exercise adoption.',
    },
    {
      term: 'Periodization (Psychological)',
      definition:
        'The systematic variation of training variables over time, serving both physiological and psychological purposes. Prevents monotony, maintains novelty, and protects against burnout through planned variety.',
    },
    {
      term: 'Sleep Hygiene',
      definition:
        'A set of behavioral and environmental practices that promote quality sleep: consistent schedule, cool dark room, limited screen time before bed, avoidance of caffeine and alcohol, and relaxation routines.',
    },
  ],
  tips: [
    'Use exercise as medicine for your mind: even a 10-minute walk significantly reduces anxiety and improves mood through endorphin and serotonin release, making it the most accessible mental health intervention.',
    'Prioritize sleep above all other recovery tools; 7-9 hours of quality sleep impacts mental health, training performance, hormone production, and body composition more than any supplement or technique.',
    'Practice mindfulness for 10-15 minutes daily; apps like Headspace or Calm can guide beginners, and research shows measurable brain changes and stress reduction after just 8 weeks of consistent practice.',
    'Curate your social media feed ruthlessly; unfollow accounts that make you feel inadequate and follow those that promote realistic expectations, diversity, and performance-focused rather than appearance-focused content.',
    'Build exercise habits through implementation intentions: specify exactly when, where, and how you will exercise rather than relying on motivation, which naturally fluctuates.',
    'Schedule complete rest days without guilt; they are essential for both physical recovery and psychological sustainability. If you feel anxious about resting, explore whether exercise addiction tendencies may be present.',
    'Develop a pre-sleep routine (dim lights, cool room, no screens for 60 minutes, relaxation exercise) and maintain consistent sleep-wake times to optimize your circadian rhythm and sleep quality.',
    'Find your "exercise why" that goes deeper than appearance: wanting to be strong for your children, maintaining cognitive function as you age, or managing anxiety gives training meaning that sustains adherence through difficult periods.',
    'Invest in social connections around fitness; a training partner or supportive community increases adherence by 60-95% and provides accountability, motivation, and enjoyment that solo training cannot match.',
    'If you notice signs of burnout (dreading workouts you once enjoyed, persistent low motivation, viewing exercise as obligation), take a planned break of 1-2 weeks. Coming back refreshed is more productive than grinding through exhaustion.',
  ],
  faqs: [
    {
      question: 'How does exercise help with depression?',
      answer:
        'Exercise combats depression through multiple mechanisms: increasing serotonin and norepinephrine (the same neurotransmitters targeted by antidepressants), releasing endorphins, boosting BDNF for neuroplasticity, reducing inflammation, improving sleep quality, building self-efficacy, and providing social connection. Meta-analyses show exercise reduces depressive symptoms by 20-30%, with effects comparable to medication for mild-to-moderate depression. Both aerobic and resistance training are effective.',
    },
    {
      question: 'I cannot sleep after evening workouts. What should I do?',
      answer:
        'Intense exercise within 2-3 hours of bedtime can elevate core temperature, cortisol, and sympathetic nervous system activity, impairing sleep onset. Solutions include finishing intense training at least 3 hours before bed, switching evening sessions to moderate intensity or yoga/stretching, incorporating a cool-down and relaxation routine after training, and using a warm shower 1-2 hours before bed to trigger the temperature drop that initiates sleep.',
    },
    {
      question: 'How do I stay motivated when progress stalls?',
      answer:
        'First, recognize that plateaus are normal and temporary. Then: shift from outcome goals (weight on the bar) to process goals (consistency, technique improvement). Add variety to prevent monotony. Track progress through multiple metrics (strength, measurements, energy, mood) rather than just one. Review how far you have come rather than how far you have to go. Consider working with a coach for new perspectives. And examine whether you need a deload or diet break rather than more effort.',
    },
    {
      question: 'Is it normal to feel anxious about going to the gym?',
      answer:
        'Yes, gym anxiety is very common, affecting 50-65% of gym newcomers. It typically involves fear of judgment, not knowing what to do, or feeling out of place. Strategies include: going during less busy hours, having a written plan before arriving, using headphones, starting with machines (which have clear instructions), working with a trainer for the first few sessions, or starting with home workouts or group classes to build confidence.',
    },
    {
      question: 'How much does sleep actually affect my fitness results?',
      answer:
        'Sleep is arguably the most impactful recovery variable. Sleeping less than 7 hours reduces testosterone by 10-15%, increases cortisol by 20-40%, impairs muscle protein synthesis by up to 18%, increases injury risk by 1.7x, reduces maximal strength by 5-10%, impairs glucose metabolism, increases hunger hormones, and reduces motivation and decision-making capacity. Prioritizing sleep from 6 to 8 hours can improve results more than any training or nutrition change.',
    },
    {
      question: 'How can I tell if I have exercise addiction versus healthy dedication?',
      answer:
        'The key differentiator is flexibility and control. Healthy dedication means you enjoy exercise, can adapt your schedule, take rest days without anxiety, and exercise enhances your life. Exercise addiction means training dominates your thinking, you feel severe anxiety or guilt when missing sessions, you train through injury or illness, exercise takes priority over relationships and work, and overall quality of life is declining despite increasing exercise volume.',
    },
    {
      question: 'Does meditation really help with fitness?',
      answer:
        'Yes. Meditation reduces cortisol by 15-25%, improves sleep quality, enhances body awareness (mind-muscle connection and injury detection), reduces competitive anxiety, improves emotional regulation (less emotional eating, better discipline), and enhances focus during training. Even 10 minutes daily produces measurable benefits. Pre-workout mindfulness can improve training quality, and post-workout meditation can enhance recovery.',
    },
    {
      question: 'How do I deal with body image issues related to fitness?',
      answer:
        'Focus on what your body can do (performance, strength, endurance) rather than how it looks. Limit social media exposure to idealized physiques. Practice body neutrality rather than requiring body positivity. Diversify your identity beyond your physical appearance. Set performance-based goals rather than aesthetic ones. Seek professional help (CBT therapy) if body dissatisfaction is causing significant distress or disordered behaviors.',
    },
    {
      question: 'What is the best time of day to exercise for mental health?',
      answer:
        'Morning exercise may have additional benefits for mood and energy throughout the day due to cortisol regulation and light exposure, and it often improves adherence since fewer schedule conflicts arise. However, the best time is whenever you will consistently do it. Afternoon and evening exercise also significantly improve mental health. The key is regularity, not timing.',
    },
    {
      question: 'Can exercise replace medication for anxiety or depression?',
      answer:
        'Exercise should not be viewed as a replacement for medication without medical guidance. For mild to moderate symptoms, exercise may be effective as a standalone treatment or combined with therapy. For moderate to severe clinical depression or anxiety disorders, exercise is best used as an adjunct to medication and psychotherapy. Always consult a mental health professional before making changes to medication.',
    },
    {
      question: 'How do I prevent burnout from training?',
      answer:
        'Build variety into your programming through periodization. Maintain interests and social connections outside of fitness. Schedule regular deload weeks and rest days. Pursue intrinsic motivation (enjoyment, personal growth) rather than external validation. Practice self-compassion when you miss sessions or underperform. Set flexible rather than rigid training rules. Take planned breaks before burnout forces unplanned ones.',
    },
    {
      question: 'Why do I feel guilty when I take rest days?',
      answer:
        'Rest day guilt often stems from all-or-nothing thinking, tying self-worth to productivity, or early signs of exercise addiction. Reframe rest as an essential part of training (muscles grow during recovery, not during workouts). Schedule rest days proactively rather than reactively. If guilt is persistent and distressing, it may be worth exploring with a therapist, as it can indicate deeper patterns of perfectionism or compulsive exercise behavior.',
    },
    {
      question: 'How does social media affect my fitness mindset?',
      answer:
        'Social media can be both helpful (education, motivation, community) and harmful (unrealistic comparisons, misinformation, appearance obsession). Studies show that exposure to fitspiration content increases body dissatisfaction by 15-25%. Protect yourself by following diverse accounts, remembering that posted physiques often involve optimal lighting, angles, and editing, limiting total social media time, and focusing on accounts that emphasize health and performance over aesthetics.',
    },
    {
      question: 'What should I do if exercise is making my anxiety worse?',
      answer:
        'While exercise generally reduces anxiety, it can worsen it if: intensity is too high (triggering sympathetic overdrive that mimics panic), it is done compulsively (reinforcing control-based coping), or environmental factors are stressful (crowded gym, performance pressure). Try lowering intensity, switching to outdoor or solo exercise, incorporating yoga or walking, and ensuring adequate sleep and nutrition. If anxiety persists or worsens, consult a mental health professional.',
    },
    {
      question: 'How do I build a consistent exercise habit?',
      answer:
        'Start extremely small (a 10-minute daily walk is better than an ambitious plan you abandon). Use implementation intentions (specific time and place). Stack exercise onto an existing habit (after morning coffee, go for a walk). Remove friction (pack your gym bag the night before, choose a convenient gym). Track consistency visually (calendar checkmarks). Find social accountability. Accept imperfection; missing one day does not erase your habit. Consistency matters more than perfection.',
    },
  ],
};
