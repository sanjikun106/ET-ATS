# ET-ATS

Adaptive Tutoring System for Grade 8 Mathematics covering **Squares, Square Roots, Cubes, and Cube Roots**.

This project is a browser-based ITS that combines **structured content**, **concept-wise practice**, **60 questions**, **adaptive hints**, **remedial branching**, **learner-model fields**, and **meaningful PED logic**.

## Chapter Coverage

- 1 complete mathematics chapter: **Squares, Square Roots, Cubes & Cube Roots**
- 6 subtopics
- 20 concepts
- 60 practice questions
- 3 graduated hints per question

## Implemented Content

- **Perfect Squares**: What is a Square Number?, Properties of Perfect Squares, The Odd Number Pattern, Difference Between Consecutive Squares
- **Square Roots**: What is a Square Root?, Square Root by Repeated Subtraction, Square Root by Prime Factorisation, Square Root by Long Division
- **Applying Square Roots**: Estimating Square Roots, Pythagorean Triplets, Word Problems with Square Roots
- **Perfect Cubes**: What is a Perfect Cube?, Properties of Perfect Cubes, Smallest Multiplier / Divisor for Perfect Cubes
- **Cube Roots**: What is a Cube Root?, Cube Root by Prime Factorisation, Real-Life Problems with Cube Roots
- **Application of Cube Roots**: Volume and Edge of a Cube, Comparing and Combining Cubes, Word Problems with Cube Roots

## Learning Model

This system uses a **dual-layer adaptive learning model** derived from the report and implemented in the code.

- **Structured domain flow**: `subtopic -> concept -> explanation -> story -> worked example -> practice`
- **Macro adaptivity**: subtopic unlocking, concept progression, concept completion tracking, and challenge progression
- **Micro adaptivity**: attempt-based feedback, progressive hints, answer-aware scaffolding, remedial branching, re-entry checks, and fast-track promotion
- **Concept-wise practice**: every concept contains 3 assessment items, giving a total of 60 questions across the chapter

## PED Model

The pedagogical model is a **rule-based PED module**. It uses learner-model traces and domain checks to decide feedback, hints, remedial content, verification checks, and next-step progression.

- **R1/R2 style flow**: concept material is shown before concept-aligned practice
- **First correct attempt**: updates mastery and may trigger verification or fast-track progression
- **First incorrect attempt**: gives encouragement or a Socratic reflection prompt without revealing a hint
- **Second incorrect attempt**: opens a procedural hint automatically
- **Repeated failure**: branches to remedial content with bridge questions
- **Post-remedial re-entry**: requires a near-transfer checkpoint before returning to the main flow and records partial mastery
- **Misconception-aware intervention**: detects common patterns such as `multiply_by_two`, `dual_root_missing`, `negative_cube_positive`, and `pairing_over_triplet`
- **Frustration detection**: if the learner is taking much longer than their running average after multiple attempts, the system offers a gray-box scaffold
- **Stability-based promotion**: strong hint-free performance can trigger a fast-track jump to a harder question in the same concept

## Learner Model

The learner model uses **Bayesian Knowledge Tracing (BKT)**. For each Knowledge Component (KC), the system maintains:

- `mastery`
- `T` (learning / transition probability)
- `G` (guess probability)
- `S` (slip probability)
- `stability`
- `attempts`
- `correct`

### Knowledge Components and BKT Parameters

| KC | Meaning | L0 | T | G | S |
| --- | --- | ---: | ---: | ---: | ---: |
| `KC_SQ` | Squares | 0.20 | 0.30 | 0.10 | 0.08 |
| `KC_SR` | Square Roots | 0.15 | 0.25 | 0.15 | 0.12 |
| `KC_PF_SQ` | Square Root by Prime Factorisation | 0.10 | 0.20 | 0.10 | 0.10 |
| `KC_LD` | Square Root by Long Division | 0.10 | 0.18 | 0.08 | 0.12 |
| `KC_APP` | Applications | 0.20 | 0.22 | 0.12 | 0.10 |
| `KC_CB` | Cubes | 0.25 | 0.28 | 0.10 | 0.08 |
| `KC_CR` | Cube Roots | 0.15 | 0.22 | 0.12 | 0.10 |
| `KC_PF_CB` | Cube Root by Prime Factorisation | 0.10 | 0.20 | 0.10 | 0.12 |
| `KC_DEC` | Fraction / Decimal Root Handling | 0.20 | 0.20 | 0.15 | 0.15 |

### Learner-Model Fields Tracked in the App

The current implementation maintains an in-session learner state with the following fields:

- `student_id`
- `student_name`
- `session_id`
- `chapter_id`
- `session_start_utc`
- `kc`
- `subtopic_done`
- `subtopic_correct`
- `concept_progress`
- `concepts_cleared`
- `misconceptions`
- `question_history`
- `diagnostic_flags`
- `scaffolding_log`
- `timing`
- `metrics`

### Session Metrics Tracked

- `correct`
- `wrong`
- `attempted`
- `partial`
- `verification_checks`
- `retries`
- `hints`
- `time`
- `completion`

## Adaptive Support Implemented

- 3-level hints for every question: concept hint, procedural hint, and bottom-out help
- Adaptive hint messages based on the learner's submitted answer
- Report-aligned hinting for sign rules, root meaning, prime factor grouping, estimation, and fraction handling
- Remedial modules with bridge questions in `remedial.js`
- Re-entry checkpoints after remedial completion
- Session summary with mastery and diagnostic payload output

## Project Files

- `index.html`: main UI, dashboard, concept flow, question flow, learner model, PED logic, and summary payload
- `content.js`: full chapter content, concepts, explanations, stories, worked examples, and 60 questions
- `remedial.js`: remedial explanations, bridge questions, and recovery support
- `Presentation_ET605.pdf`: project report used to align the pedagogical and learner-model design

## Running the Project

This is a static client-side web app.

- Open `index.html` directly in a browser, or
- Serve the folder using any simple static server
