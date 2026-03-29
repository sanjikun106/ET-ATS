// ═══════════════════════════════════════════════════════════════════
// CHAPTER CONTENT — Squares, Square Roots, Cubes & Cube Roots
// Grade 8 · CBSE · All 6 Subtopics · 20 Concepts · 60 Questions
// ═══════════════════════════════════════════════════════════════════

const CHAPTER = {
  id: 'grade8_squares_and_cube_roots',
  name: 'Squares, Square Roots, Cubes & Cube Roots',
  subtopics: [

    // ══════════════════════════════════════════════════════════════
    // SUBTOPIC 1 — PERFECT SQUARES (4 concepts)
    // ══════════════════════════════════════════════════════════════
    {
      id: 'grade8_squares_and_cube_roots_perfect_squares',
      title: 'Perfect Squares',
      difficulty: 0.30,
      diffLabel: 'Easy',
      icon: '²',
      concepts: [

        // ── Concept 1.1 ──────────────────────────────────────────
        {
          id: 'c1_1',
          title: 'What is a Square Number?',
          explanation: `When you multiply any whole number by itself, the answer you get is called a <strong>perfect square</strong>. For example, 3 × 3 = 9, so 9 is a perfect square. We write this as 3² = 9 (read as "3 squared").

The number you multiplied — in this case 3 — is called the <strong>square root</strong> of 9. Think of it as the "parent number" that created the square.

Here are the first 15 perfect squares you should know by heart:
<table class="content-table">
<tr><th>n</th><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td><td>9</td><td>10</td><td>11</td><td>12</td><td>13</td><td>14</td><td>15</td></tr>
<tr><th>n²</th><td>1</td><td>4</td><td>9</td><td>16</td><td>25</td><td>36</td><td>49</td><td>64</td><td>81</td><td>100</td><td>121</td><td>144</td><td>169</td><td>196</td><td>225</td></tr>
</table>

A number that is NOT a perfect square is called a <strong>non-perfect square</strong> — for example, 2, 3, 5, 7, 10.`,
          keyIdea: 'A perfect square = a whole number × itself. It can always be arranged into a perfect square shape (equal rows and columns).',
          story: `Meera wants to tile her square kitchen floor with identical small tiles. She tries 5 tiles in a row — and needs 5 × 5 = 25 tiles altogether to fill the square floor. Her friend uses 7 tiles per row — that is 7 × 7 = 49 tiles total. Notice how the total is always a perfect square, because the floor itself is a square!

If Meera tries 6 tiles per side, she gets 6 × 6 = 36 tiles. She can always rearrange these 36 tiles into a perfect square grid. But if she had 37 tiles, she could never form a perfect square — one tile would always be left out.`,
          workedSteps: [
            'Q: Is 36 a perfect square?',
            '',
            'Step 1: Ask — is there a whole number n such that n × n = 36?',
            'Step 2: Try n = 6 → 6 × 6 = 36 ✓',
            '',
            'Answer: Yes, 36 is a perfect square. 36 = 6²',
            '',
            '─────────────────────────────────',
            '',
            'Q: Is 50 a perfect square?',
            '',
            'Try 7: 7 × 7 = 49 (too small)',
            'Try 8: 8 × 8 = 64 (too large)',
            '50 falls between 49 and 64 — no whole number gives 50.',
            '',
            'Answer: No, 50 is NOT a perfect square.'
          ],
          questions: [
            {
              id: 'q1_1_1', level: 1,
              text: 'What is the square root of 144?',
              hint1: 'Think: what whole number times itself gives 144? Try numbers around 12.',
              hint2: 'Check: 11 × 11 = 121. Try 12 × 12.',
              hint3: '12 × 12 = 144, so √144 = 12.',
              check: a => a.trim() === '12'
            },
            {
              id: 'q1_1_2', level: 1,
              text: 'Raju arranges 121 chairs in a perfect square formation. How many chairs are in each row?',
              hint1: 'Find n where n × n = 121. Think of a number slightly larger than 10.',
              hint2: 'Try 11: 11 × 11 = ?',
              hint3: '11 × 11 = 121. So there are 11 chairs in each row.',
              check: a => a.trim() === '11'
            },
            {
              id: 'q1_1_3', level: 2,
              text: 'From this list, which numbers are perfect squares? 25, 50, 36, 72, 81 (write all separated by commas)',
              hint1: 'Check each number — can you find a whole number that times itself gives it?',
              hint2: '5×5=25 ✓, 6×6=36 ✓, 9×9=81 ✓. What about 50 and 72?',
              hint3: '25, 36, and 81 are perfect squares. 50 and 72 are not.',
              check: a => /25/.test(a) && /36/.test(a) && /81/.test(a)
            }
          ]
        },

        // ── Concept 1.2 ──────────────────────────────────────────
        {
          id: 'c1_2',
          title: 'Properties of Perfect Squares',
          explanation: `Perfect squares have special properties that help you identify them without multiplying. Learn these well — they are huge time-savers in exams!

<strong>Property 1 — Last Digit Test:</strong>
A perfect square can ONLY end in the digits <strong>0, 1, 4, 5, 6, or 9</strong>.
If a number ends in 2, 3, 7, or 8 → it is INSTANTLY not a perfect square.

<strong>Property 2 — Trailing Zeros:</strong>
The number of zeros at the end of a perfect square must always be <strong>even</strong>.
→ 100 = 10² ✓ (2 zeros)   400 = 20² ✓ (2 zeros)   10000 = 100² ✓ (4 zeros)
→ 1000 is NOT a perfect square (3 zeros — odd number)

<strong>Property 3 — Odd and Even:</strong>
The square of an even number is always even.
The square of an odd number is always odd.

<strong>Property 4 — Between Consecutive Squares:</strong>
Between n² and (n+1)², there are exactly 2n non-square numbers.
Example: Between 3²=9 and 4²=16, there are 2×3=6 non-squares (10,11,12,13,14,15).`,
          keyIdea: 'Quick elimination test: if a number ends in 2, 3, 7, or 8 — it cannot be a perfect square. No calculation needed!',
          story: `Aarav plays a classroom game: the teacher calls out a number and Aarav must say "Square!" or "Not a Square!" in under 3 seconds.

Teacher: "1352!" — Aarav sees it ends in 2. "NOT a square!" (0.5 seconds)
Teacher: "3969!" — Ends in 9. Could be. "Let me check... 63 × 63 = 3969. SQUARE!" 
Teacher: "10000!" — Ends in 0. Count zeros: 4 zeros (even). "SQUARE! It's 100 squared."
Teacher: "1000!" — Ends in 0. Count zeros: 3 zeros (odd). "NOT a square!"

Aarav wins every round because he knows these properties cold.`,
          workedSteps: [
            'Q: Can 1352 be a perfect square?',
            '',
            'Step 1: Check last digit → 2',
            'Rule: Squares never end in 2.',
            'Answer: NO — instantly ruled out.',
            '',
            '─────────────────────────────────',
            '',
            'Q: Can 3600 be a perfect square?',
            '',
            'Last digit → 0 (okay, squares can end in 0)',
            'Trailing zeros: 00 → 2 zeros (even ✓)',
            'Check: 60 × 60 = 3600 ✓',
            'Answer: YES, 3600 = 60²'
          ],
          questions: [
            {
              id: 'q1_2_1', level: 1,
              text: 'Which of these CANNOT be perfect squares? 222, 361, 567, 900, 1024 (write all separated by commas)',
              hint1: 'Check the last digit of each number. Squares only end in 0, 1, 4, 5, 6, or 9.',
              hint2: '222 ends in 2, 567 ends in 7. What do you conclude?',
              hint3: '222 (ends in 2) and 567 (ends in 7) cannot be perfect squares.',
              check: a => /222/.test(a) && /567/.test(a)
            },
            {
              id: 'q1_2_2', level: 1,
              text: 'True or False: 10000 is a perfect square.',
              hint1: 'Count the trailing zeros in 10000. What is the rule about trailing zeros?',
              hint2: '10000 has 4 trailing zeros. Is 4 even or odd?',
              hint3: 'True! 4 zeros is even, so it could be. Check: 100 × 100 = 10000 ✓',
              check: a => /true/i.test(a)
            },
            {
              id: 'q1_2_3', level: 2,
              text: 'How many non-square numbers lie between 5² and 6²?',
              hint1: 'Use Property 4: between n² and (n+1)², there are 2n non-square numbers. Here n=5.',
              hint2: '2 × 5 = 10. List them: 26, 27, 28, 29, 30, 31, 32, 33, 34, 35.',
              hint3: 'There are 10 non-square numbers between 25 and 36.',
              check: a => a.trim() === '10'
            }
          ]
        },

        // ── Concept 1.3 ──────────────────────────────────────────
        {
          id: 'c1_3',
          title: 'The Odd Number Pattern',
          explanation: `There is a beautiful pattern connecting perfect squares and odd numbers:

<strong>1 = 1²</strong>
<strong>1 + 3 = 4 = 2²</strong>
<strong>1 + 3 + 5 = 9 = 3²</strong>
<strong>1 + 3 + 5 + 7 = 16 = 4²</strong>
<strong>1 + 3 + 5 + 7 + 9 = 25 = 5²</strong>

The rule is: <strong>Sum of the first n odd numbers = n²</strong>

This works in the other direction too — you can subtract consecutive odd numbers from any perfect square and reach 0 in exactly n steps (where n is the square root).

This is actually how the "repeated subtraction" method for finding square roots works:
Start at the number, subtract 1, 3, 5, 7, ... and count the steps until you reach 0.`,
          keyIdea: 'Sum of first n odd numbers = n². This means you can find any perfect square just by adding: 1, 1+3, 1+3+5, and so on.',
          story: `Priya's grandmother creates beautiful square rangoli patterns on the floor using coloured dots. She always starts with 1 dot in the centre. For each new square "ring" around it, she adds the next odd number of dots: first 3, then 5, then 7...

After 4 rings, she has 1 + 3 + 5 + 7 = 16 dots — arranged in a perfect 4×4 square. After 5 rings: 1+3+5+7+9 = 25 dots in a 5×5 square.

Her granddaughter Priya realised this pattern means you never need to multiply — just keep adding the next odd number and you always get a perfect square!`,
          workedSteps: [
            'Q: Find 1 + 3 + 5 + 7 + 9 + 11 + 13 without adding one by one.',
            '',
            'Count the terms → there are 7 terms',
            'These are the first 7 odd numbers.',
            'Use the pattern: sum = 7² = 49',
            '',
            'Answer: 49',
            '',
            '─────────────────────────────────',
            '',
            'Q: Express 81 as a sum of consecutive odd numbers starting from 1.',
            '',
            '81 = 9²  →  We need the first 9 odd numbers',
            '1 + 3 + 5 + 7 + 9 + 11 + 13 + 15 + 17 = 81 ✓'
          ],
          questions: [
            {
              id: 'q1_3_1', level: 1,
              text: 'Find the sum: 1 + 3 + 5 + 7 + 9 + 11 + 13 + 15 + 17 + 19',
              hint1: 'Count the terms first. These are the first ? odd numbers.',
              hint2: 'There are 10 terms. Sum of first n odd numbers = n².',
              hint3: 'n = 10, so sum = 10² = 100.',
              check: a => a.trim() === '100'
            },
            {
              id: 'q1_3_2', level: 2,
              text: 'How many odd numbers starting from 1 must be added to get a sum of 64?',
              hint1: 'Sum of first n odd numbers = n². Set n² = 64 and find n.',
              hint2: 'Which number squared equals 64?',
              hint3: '8² = 64. So the first 8 odd numbers must be added.',
              check: a => a.trim() === '8'
            },
            {
              id: 'q1_3_3', level: 3,
              text: 'Priya adds the first 15 odd numbers for her largest rangoli design. How many dots does she use in total?',
              hint1: 'Sum of first n odd numbers = n². Here n = 15.',
              hint2: 'Calculate 15².',
              hint3: '15² = 225. Priya uses 225 dots.',
              check: a => a.trim() === '225'
            }
          ]
        },

        // ── Concept 1.4 ──────────────────────────────────────────
        {
          id: 'c1_4',
          title: 'Difference Between Consecutive Squares',
          explanation: `Look at the sequence of perfect squares: 1, 4, 9, 16, 25, 36, 49...

The differences between consecutive squares: 3, 5, 7, 9, 11, 13...

These differences are always consecutive odd numbers! The rule is:

<strong>(n+1)² − n² = 2n + 1</strong>

This tells us the gap between any two consecutive perfect squares is always an odd number equal to 2n + 1, where n is the smaller square root.

This also confirms that between any two consecutive perfect squares, there are <strong>no other perfect squares</strong> — just the 2n non-square numbers we saw in the last concept.

You can use this rule to quickly find the difference between two consecutive squares without computing both of them.`,
          keyIdea: '(n+1)² − n² = 2n + 1. The gap between consecutive squares grows by 2 each time and is always an odd number.',
          story: `Karan is filling in a number line for his maths project, marking every perfect square with a star. He marks 25 (5²) and 36 (6²). His friend asks: "Could 31 be a perfect square?" 

Karan uses the rule: gap = 2×5 + 1 = 11. The very next perfect square after 25 is 25 + 11 = 36. So there is nothing in between — 26, 27, 28, 29, 30, 31, 32, 33, 34, 35 are all non-squares.

"So 31 definitely cannot be a perfect square," Karan says. No calculation needed — just the rule!`,
          workedSteps: [
            'Q: Find 26² − 25² without computing both squares.',
            '',
            'Use the rule: (n+1)² − n² = 2n + 1',
            'Here n = 25',
            '2(25) + 1 = 51',
            '',
            'Answer: 26² − 25² = 51',
            '',
            'Verify: 676 − 625 = 51 ✓',
            '',
            '─────────────────────────────────',
            '',
            'Q: What is the square of 52 if 51² = 2601?',
            '',
            '52² = 51² + (2×51 + 1) = 2601 + 103 = 2704'
          ],
          questions: [
            {
              id: 'q1_4_1', level: 1,
              text: 'Find 101² − 100² without a calculator.',
              hint1: 'Use: (n+1)² − n² = 2n + 1. What is n here?',
              hint2: 'n = 100. Calculate 2 × 100 + 1.',
              hint3: '2(100) + 1 = 201. So 101² − 100² = 201.',
              check: a => a.trim() === '201'
            },
            {
              id: 'q1_4_2', level: 2,
              text: '31² = 961. Using this, find 32².',
              hint1: 'Use: 32² = 31² + (2×31 + 1).',
              hint2: '2 × 31 + 1 = 63. So 32² = 961 + 63.',
              hint3: '32² = 961 + 63 = 1024.',
              check: a => a.trim() === '1024'
            },
            {
              id: 'q1_4_3', level: 3,
              text: 'The difference between two consecutive perfect squares is 37. What are those two perfect squares? (write both separated by comma)',
              hint1: 'Use 2n + 1 = 37. Solve for n first.',
              hint2: '2n = 36, so n = 18. The squares are n² and (n+1)².',
              hint3: 'n = 18. Squares are 18² = 324 and 19² = 361.',
              check: a => /324/.test(a) && /361/.test(a)
            }
          ]
        }
      ]
    },

    // ══════════════════════════════════════════════════════════════
    // SUBTOPIC 2 — SQUARE ROOTS (4 concepts)
    // ══════════════════════════════════════════════════════════════
    {
      id: 'grade8_squares_and_cube_roots_square_roots',
      title: 'Square Roots',
      difficulty: 0.55,
      diffLabel: 'Medium',
      icon: '√',
      unlockCondition: { subtopic: 0, minScore: 0.60 },
      concepts: [

        // ── Concept 2.1 ──────────────────────────────────────────
        {
          id: 'c2_1',
          title: 'What is a Square Root?',
          explanation: `The <strong>square root</strong> of a number n is the value that, when multiplied by itself, gives n. We write it as √n.

√9 = 3 &nbsp;&nbsp;&nbsp; because 3 × 3 = 9
√25 = 5 &nbsp;&nbsp; because 5 × 5 = 25
√144 = 12 &nbsp; because 12 × 12 = 144

<strong>Important rule:</strong> √n always means the <em>positive</em> square root. Even though (−5) × (−5) = 25, we write √25 = 5, not −5.

<strong>Square roots of fractions:</strong>
√(a/b) = √a ÷ √b
√(25/36) = √25 ÷ √36 = 5 ÷ 6 = 5/6

<strong>Why does this matter?</strong>
Every area problem involving a square uses square roots. If you know the area of a square, you find the side using √.`,
          keyIdea: 'Square root is the reverse of squaring. Squaring asks "5 × 5 = ?" Square root asks "what × itself = 25?"',
          story: `Zara is painting a square mural on the school wall. The art teacher says the mural must cover exactly 196 square centimetres. Zara needs to know the side length so she can mark the boundary.

She sets up: side × side = 196, so side = √196.
She thinks: "What number times itself gives 196?"
She tries 14: 14 × 14 = 196. ✓

"The side is 14 cm!" She marks it perfectly. Later, when the teacher asks for a 289 cm² mural, Zara immediately thinks: 17 × 17 = 289. Side = 17 cm. Square roots have become second nature to her.`,
          workedSteps: [
            'Q: Find √169.',
            '',
            'Ask: which whole number × itself = 169?',
            'Try 13: 13 × 13 = 169 ✓',
            '',
            'Answer: √169 = 13',
            '',
            '─────────────────────────────────',
            '',
            'Q: A square field has area 324 m². Find its perimeter.',
            '',
            'Side = √324',
            'Try 18: 18 × 18 = 324 ✓',
            'Side = 18 m',
            'Perimeter = 4 × 18 = 72 m'
          ],
          questions: [
            {
              id: 'q2_1_1', level: 1,
              text: 'Find √256.',
              hint1: 'Which whole number, when multiplied by itself, gives 256? Try numbers around 16.',
              hint2: '15 × 15 = 225. Try 16 × 16.',
              hint3: '16 × 16 = 256. So √256 = 16.',
              check: a => a.trim() === '16'
            },
            {
              id: 'q2_1_2', level: 2,
              text: 'A square park has an area of 484 m². Find the length of fencing needed to go around it once.',
              hint1: 'First find the side length: side = √484.',
              hint2: '22 × 22 = 484. So side = 22 m. Now find the perimeter.',
              hint3: 'Perimeter = 4 × 22 = 88 m.',
              check: a => a.trim() === '88'
            },
            {
              id: 'q2_1_3', level: 2,
              text: 'Find √(49/64). (write as a fraction like a/b)',
              hint1: 'Rule: √(a/b) = √a ÷ √b. Find √49 and √64 separately.',
              hint2: '√49 = 7 and √64 = 8.',
              hint3: '√(49/64) = 7/8.',
              check: a => /7\/8/.test(a.replace(/\s/g,''))
            }
          ]
        },

        // ── Concept 2.2 ──────────────────────────────────────────
        {
          id: 'c2_2',
          title: 'Square Root by Repeated Subtraction',
          explanation: `This method uses the odd number pattern from Subtopic 1 in reverse.

<strong>Remember:</strong> n² = 1 + 3 + 5 + ... (sum of first n odd numbers)

So to find √n, we <strong>subtract consecutive odd numbers</strong> (1, 3, 5, 7, ...) from n until we reach 0. The number of subtractions = the square root.

<strong>Steps:</strong>
1. Start with your number.
2. Subtract 1, then 3, then 5, then 7... (each time subtract the next odd number).
3. Count how many subtractions you do until you reach exactly 0.
4. That count is your square root.

<strong>Important:</strong> If you never reach exactly 0 (you "jump over" it), the number is NOT a perfect square.`,
          keyIdea: 'Subtract 1, 3, 5, 7, ... from n until you reach 0. The number of steps = √n.',
          story: `Imagine a staircase game. You start at the top (your number) and jump down. Each jump is bigger than the last: first jump goes down 1 step, second jump goes down 3 steps, third jump goes down 5 steps, and so on.

If you land exactly on the ground floor (0) after some jumps — it was a perfect square, and the number of jumps is the square root!

If you leap past 0 and land underground, the number was not a perfect square. There's no exact landing spot.

Shreya plays this staircase game with 16: she jumps 1, then 3, then 5, then 7. After 4 jumps she lands exactly on 0. So √16 = 4!`,
          workedSteps: [
            'Q: Find √36 using repeated subtraction.',
            '',
            '36 − 1 = 35  (step 1)',
            '35 − 3 = 32  (step 2)',
            '32 − 5 = 27  (step 3)',
            '27 − 7 = 20  (step 4)',
            '20 − 9 = 11  (step 5)',
            '11 − 11 = 0  (step 6)',
            '',
            'Reached 0 in 6 steps → √36 = 6',
            '',
            '─────────────────────────────────',
            '',
            'Q: Is 20 a perfect square? Try repeated subtraction.',
            '',
            '20 − 1 = 19',
            '19 − 3 = 16',
            '16 − 5 = 11',
            '11 − 7 = 4',
            '4 − 9 = −5  ← jumped past 0!',
            '',
            '20 is NOT a perfect square.'
          ],
          questions: [
            {
              id: 'q2_2_1', level: 1,
              text: 'Find √25 using the repeated subtraction method.',
              hint1: 'Start from 25. Subtract 1, then 3, then 5, ... and count the steps until you reach 0.',
              hint2: '25−1=24, 24−3=21, 21−5=16, 16−7=9, 9−9=0. How many steps?',
              hint3: '5 steps to reach 0. So √25 = 5.',
              check: a => a.trim() === '5'
            },
            {
              id: 'q2_2_2', level: 2,
              text: 'Using repeated subtraction, find √49.',
              hint1: 'Start from 49. Keep subtracting the next odd number until you reach 0.',
              hint2: '49−1=48, 48−3=45, 45−5=40, 40−7=33, 33−9=24, 24−11=13, 13−13=0.',
              hint3: '7 steps to reach 0. So √49 = 7.',
              check: a => a.trim() === '7'
            },
            {
              id: 'q2_2_3', level: 3,
              text: 'Is 30 a perfect square? (yes or no)',
              hint1: 'Try subtracting: 30−1=29, 29−3=26, 26−5=21, 21−7=14, 14−9=5. What comes next?',
              hint2: 'The next subtraction would be 5 − 11 = −6 (we jump past 0). Does it ever land on 0?',
              hint3: '30 is not a perfect square. Since we passed 0 between the 5th and 6th step, √30 is between 5 and 6.',
              check: a => /no/i.test(a)
            }
          ]
        },

        // ── Concept 2.3 ──────────────────────────────────────────
        {
          id: 'c2_3',
          title: 'Square Root by Prime Factorisation',
          explanation: `For large numbers, repeated subtraction takes too long. <strong>Prime factorisation</strong> is the faster, reliable method.

<strong>Steps:</strong>
1. Write the number as a product of its prime factors (use a factor tree or repeated division).
2. Group the prime factors into <strong>pairs</strong> of identical primes.
3. Take ONE prime from each pair.
4. Multiply these together → that is your √n.

<strong>Perfect square check:</strong>
A number is a perfect square if and only if every prime factor appears an <em>even</em> number of times.

<strong>Bonus — finding the smallest multiplier/divisor:</strong>
If any prime has an odd count, multiply by that prime (to make the count even) to get a perfect square. Or divide by those primes to remove the "odd ones out."`,
          keyIdea: 'Every prime factor must appear in pairs. Take one from each pair and multiply → that is the square root.',
          story: `Deepa's teacher gives her a bag of coloured blocks:
2 red, 2 red, 3 blue, 3 blue, 5 green, 5 green

"Pair them up perfectly," says the teacher. Every red has a partner, every blue has a partner, every green has a partner. "Now pick one from each pair."

Deepa picks: 1 red (2), 1 blue (3), 1 green (5). She multiplies: 2 × 3 × 5 = 30.

The original number was 2² × 3² × 5² = 900. And √900 = 30. ✓

If even one block is left without a partner, you cannot take "one from each pair" evenly — that means the original number is not a perfect square.`,
          workedSteps: [
            'Q: Find √2025 by prime factorisation.',
            '',
            '2025 ÷ 3 = 675',
            '675  ÷ 3 = 225',
            '225  ÷ 3 = 75',
            '75   ÷ 3 = 25',
            '25   ÷ 5 = 5',
            '5    ÷ 5 = 1',
            '',
            '2025 = 3 × 3 × 3 × 3 × 5 × 5 = 3⁴ × 5²',
            '',
            'Pairs: (3,3), (3,3), (5,5)',
            'Take one from each pair: 3 × 3 × 5 = 45',
            '',
            '√2025 = 45  ✓ (45 × 45 = 2025)'
          ],
          questions: [
            {
              id: 'q2_3_1', level: 2,
              text: 'Find √1764 by prime factorisation. (Hint: 1764 = 2² × 3² × 7²)',
              hint1: 'Pairs from 2² × 3² × 7²: (2,2), (3,3), (7,7). Take one from each pair.',
              hint2: 'One 2, one 3, one 7. Multiply them.',
              hint3: '√1764 = 2 × 3 × 7 = 42. Check: 42 × 42 = 1764 ✓',
              check: a => a.trim() === '42'
            },
            {
              id: 'q2_3_2', level: 3,
              text: 'What is the smallest number by which 180 must be divided to make it a perfect square?',
              hint1: 'Factorise 180 = 2² × 3² × 5. Which prime has an odd count?',
              hint2: '5 appears once (odd). Divide by 5 to remove it.',
              hint3: '180 ÷ 5 = 36 = 6². Divide by 5.',
              check: a => a.trim() === '5'
            },
            {
              id: 'q2_3_3', level: 3,
              text: 'What is the smallest number to multiply 1152 by to make it a perfect square? (1152 = 2⁷ × 3²)',
              hint1: 'Check each prime exponent. 2 appears 7 times (odd), 3 appears 2 times (even).',
              hint2: 'To make 7 even, we need one more 2. Multiply by 2.',
              hint3: '1152 × 2 = 2304 = 48². Multiply by 2.',
              check: a => a.trim() === '2'
            }
          ]
        },

        // ── Concept 2.4 ──────────────────────────────────────────
        {
          id: 'c2_4',
          title: 'Square Root by Long Division',
          explanation: `For large numbers (4+ digits) where prime factorisation is slow, we use the <strong>long division method</strong>.

<strong>Steps:</strong>
1. <strong>Group digits in pairs</strong> from right to left. Mark with a bar over each pair.
   Example: 2304 → 23|04
2. Find the largest digit n where n² ≤ left group. Write n as the first digit of the answer.
3. <strong>Remainder:</strong> Subtract n² from the left group. Bring down the next pair.
4. <strong>New divisor:</strong> Double the current quotient and write it as the start of the next divisor.
5. Find digit d so that (doubled quotient followed by d) × d ≤ the new number.
6. Repeat until done.

<strong>The key rule to remember:</strong> After finding each digit of the answer, double the quotient-so-far to start the next divisor.`,
          keyIdea: 'Group digits in pairs from right. Find one digit of the root at a time. Double the current answer to build the next divisor.',
          story: `Imagine cracking a safe with a combination lock. You turn the dial slowly, one number at a time. Each turn narrows down the combination. Long division for square roots works the same way — you find one digit of the answer at a time, like turning the dial, getting closer with each step.

Ananya learns this method and uses it to find that a square plot with area 5329 m² has a side of exactly 73 m. She could not have easily factorised 5329 (= 73², a prime squared), but the long division method found it perfectly.`,
          workedSteps: [
            'Q: Find √2304 using long division.',
            '',
            'Step 1: Group digits → 23 | 04',
            'Step 2: Largest n where n² ≤ 23 → n = 4 (4² = 16)',
            '        Write 4. Remainder = 23 − 16 = 7.',
            'Step 3: Bring down 04 → working number = 704',
            'Step 4: Double quotient: 4 × 2 = 8. New divisor starts with 8_',
            'Step 5: Find d: (80 + d) × d ≤ 704',
            '        Try d = 8: 88 × 8 = 704 ✓',
            'Step 6: Remainder = 704 − 704 = 0',
            '',
            '√2304 = 48',
            '',
            'Verify: 48 × 48 = 2304 ✓'
          ],
          questions: [
            {
              id: 'q2_4_1', level: 2,
              text: 'Find √1296 using the long division method.',
              hint1: 'Group: 12|96. Largest n where n²≤12 is n=3 (3²=9). Remainder=3. Bring down 96 → 396.',
              hint2: 'Double quotient: 3×2=6. New divisor: 6_. Find d: (60+d)×d ≤ 396. Try d=6: 66×6=396.',
              hint3: '√1296 = 36. Check: 36 × 36 = 1296 ✓',
              check: a => a.trim() === '36'
            },
            {
              id: 'q2_4_2', level: 2,
              text: 'Find √5929 using the long division method.',
              hint1: 'Group: 59|29. Largest n where n²≤59 is n=7 (49). Remainder=10, bring down 29 → 1029.',
              hint2: 'Double: 7×2=14. Divisor starts 14_. Try d=7: 147×7=1029 ✓.',
              hint3: '√5929 = 77. Check: 77 × 77 = 5929 ✓',
              check: a => a.trim() === '77'
            },
            {
              id: 'q2_4_3', level: 3,
              text: 'A square garden has area 7921 m². Using the long division method, find the side length.',
              hint1: 'Group: 79|21. Largest n where n²≤79 is n=8 (64). Remainder=15, bring down 21 → 1521.',
              hint2: 'Double: 8×2=16. Divisor: 16_. Try d=9: 169×9=1521 ✓.',
              hint3: '√7921 = 89. Side = 89 m.',
              check: a => a.trim() === '89'
            }
          ]
        }
      ]
    },

    // ══════════════════════════════════════════════════════════════
    // SUBTOPIC 3 — APPLICATIONS OF SQUARE ROOTS (3 concepts)
    // ══════════════════════════════════════════════════════════════
    {
      id: 'grade8_squares_and_cube_roots_sqrt_applications',
      title: 'Applying Square Roots',
      difficulty: 0.60,
      diffLabel: 'Medium',
      icon: '📐',
      unlockCondition: { subtopic: 1, minScore: 0.60 },
      concepts: [

        // ── Concept 3.1 ──────────────────────────────────────────
        {
          id: 'c3_1',
          title: 'Estimating Square Roots',
          explanation: `Not every number is a perfect square. When a number lies between two perfect squares, its square root lies between their roots — and we can estimate it.

<strong>Method:</strong>
1. Find two consecutive perfect squares that your number sits between.
2. Write: √(lower square) &lt; √n &lt; √(upper square).
3. To get a better estimate, see which perfect square n is closer to.

<strong>Example:</strong>
Estimate √50.
7² = 49 and 8² = 64.
49 &lt; 50 &lt; 64, so 7 &lt; √50 &lt; 8.
50 is very close to 49, so √50 ≈ 7.1 (just above 7).

<strong>Useful for ordering:</strong>
You can compare square roots by comparing the numbers inside — the larger the number, the larger the root.
√50 &lt; √75 &lt; √100 because 50 &lt; 75 &lt; 100.`,
          keyIdea: 'Find which two consecutive perfect squares your number sits between. The square root sits between their roots.',
          story: `Sahil needs to fence a square plot that measures 50 m². He needs to know the side length (√50 m) to buy enough fencing.

He knows 7² = 49 and 8² = 64. Since 50 is only 1 more than 49 (but 14 less than 64), √50 is very close to 7 — approximately 7.07 m.

He rounds up to 7.1 m per side to be safe and buys 4 × 7.1 = 28.4 m of fencing. He could not have found the exact value without a calculator, but the estimate was close enough to solve the real problem.`,
          workedSteps: [
            'Q: Estimate √130 and give the two whole numbers it lies between.',
            '',
            'Find consecutive perfect squares around 130:',
            '11² = 121  and  12² = 144',
            '121 < 130 < 144',
            '',
            'So: 11 < √130 < 12',
            '',
            '130 − 121 = 9  (distance from 11²)',
            '144 − 130 = 14  (distance from 12²)',
            '',
            '130 is closer to 121, so √130 ≈ 11.4'
          ],
          questions: [
            {
              id: 'q3_1_1', level: 1,
              text: 'Between which two consecutive whole numbers does √75 lie? (write both separated by comma)',
              hint1: 'Find perfect squares just below and just above 75.',
              hint2: '8² = 64 and 9² = 81. Where does 75 sit?',
              hint3: '64 < 75 < 81, so 8 < √75 < 9.',
              check: a => /8/.test(a) && /9/.test(a)
            },
            {
              id: 'q3_1_2', level: 2,
              text: 'Arrange in increasing order: √50, √121, √80, √10 (write numbers inside √ separated by commas)',
              hint1: 'Compare the numbers inside: 10 < 50 < 80 < 121.',
              hint2: '√10≈3.2, √50≈7.1, √80≈8.9, √121=11.',
              hint3: 'Increasing order: 10, 50, 80, 121.',
              check: a => /10.*50.*80.*121/.test(a)
            },
            {
              id: 'q3_1_3', level: 3,
              text: 'A square tile has an area of 200 cm². Is the side length closer to 14 cm or 15 cm?',
              hint1: 'Find: 14² and 15². Where does 200 fall?',
              hint2: '14² = 196 and 15² = 225. 200 − 196 = 4, 225 − 200 = 25.',
              hint3: '200 is much closer to 196 (4 away) than to 225 (25 away). Side ≈ 14 cm.',
              check: a => /14/.test(a)
            }
          ]
        },

        // ── Concept 3.2 ──────────────────────────────────────────
        {
          id: 'c3_2',
          title: 'Pythagorean Triplets',
          explanation: `A <strong>Pythagorean triplet</strong> is a set of three whole numbers (a, b, c) where:

<strong>a² + b² = c²</strong>

These three numbers can always form the sides of a right-angled triangle, where c is the longest side (hypotenuse).

<strong>Classic triplets to memorise:</strong>
(3, 4, 5) &nbsp;&nbsp; 9 + 16 = 25 ✓
(5, 12, 13) &nbsp; 25 + 144 = 169 ✓
(8, 15, 17) &nbsp; 64 + 225 = 289 ✓
(7, 24, 25) &nbsp; 49 + 576 = 625 ✓

<strong>Generating formula:</strong>
For any whole number m &gt; 1:
( 2m,  m²−1,  m²+1 ) is always a Pythagorean triplet.
m=2 → (4, 3, 5) ✓
m=3 → (6, 8, 10) → simplifies to (3, 4, 5) ✓
m=4 → (8, 15, 17) ✓`,
          keyIdea: 'a² + b² = c². For any m > 1, the triplet (2m, m²−1, m²+1) always works. Memorise the classic four!',
          story: `Ancient Egyptian farmers had a clever trick for making perfectly square corners in their fields — vital for fair land boundaries after the Nile floods.

They tied 12 equally spaced knots in a long rope, creating 12 equal segments. Then four farmers held the rope at positions 0, 3, 7, and 12 — stretching it into a triangle with sides 3, 4, and 5 segments.

The corner between sides 3 and 4 is always a perfect 90° angle. This is the (3, 4, 5) Pythagorean triplet in action. Builders, architects, and carpenters still use this trick today — over 4000 years later!`,
          workedSteps: [
            'Q: Check if (9, 40, 41) is a Pythagorean triplet.',
            '',
            '9² + 40² = 81 + 1600 = 1681',
            '41² = 1681',
            '',
            '1681 = 1681 ✓',
            '',
            'Yes! (9, 40, 41) is a Pythagorean triplet.',
            '',
            '─────────────────────────────────',
            '',
            'Q: Generate a triplet using m = 5.',
            '',
            '2m = 10',
            'm² − 1 = 25 − 1 = 24',
            'm² + 1 = 25 + 1 = 26',
            '',
            'Triplet: (10, 24, 26)',
            'Check: 100 + 576 = 676 = 26² ✓'
          ],
          questions: [
            {
              id: 'q3_2_1', level: 1,
              text: 'Is (8, 15, 17) a Pythagorean triplet? (yes or no)',
              hint1: 'Calculate 8² + 15² and compare with 17².',
              hint2: '64 + 225 = 289. What is 17²?',
              hint3: '17² = 289. Since 8² + 15² = 17², yes it is a Pythagorean triplet.',
              check: a => /yes/i.test(a)
            },
            {
              id: 'q3_2_2', level: 2,
              text: 'Using m = 6, generate a Pythagorean triplet. (write three numbers separated by commas)',
              hint1: 'Use the formula: 2m, m²−1, m²+1. Substitute m = 6.',
              hint2: '2×6=12, 6²−1=35, 6²+1=37.',
              hint3: 'Triplet is (12, 35, 37). Check: 144 + 1225 = 1369 = 37² ✓',
              check: a => /12/.test(a) && /35/.test(a) && /37/.test(a)
            },
            {
              id: 'q3_2_3', level: 3,
              text: 'A ladder of length 25 m leans against a wall. Its base is 7 m from the wall. How high up the wall does it reach?',
              hint1: 'Use a² + b² = c². Here c=25 (ladder), a=7 (base). Find b (height on wall).',
              hint2: '7² + b² = 25² → 49 + b² = 625 → b² = 576.',
              hint3: '√576 = 24. The ladder reaches 24 m high. (7, 24, 25) is a known triplet!',
              check: a => a.trim() === '24'
            }
          ]
        },

        // ── Concept 3.3 ──────────────────────────────────────────
        {
          id: 'c3_3',
          title: 'Word Problems with Square Roots',
          explanation: `Square roots appear naturally in many real-world problems. The key skill is recognising <em>when</em> to use a square root and setting up the equation correctly.

<strong>Common patterns:</strong>

<strong>Pattern 1 — Area to Side:</strong>
"A square has area A. Find the side." → Side = √A

<strong>Pattern 2 — Equal distribution in a square formation:</strong>
"n objects in a square arrangement. How many per row?" → rows = √n

<strong>Pattern 3 — Comparing two square areas:</strong>
"Square 1 has area a. Square 2 has area b. How much longer is Square 2's side?" → √b − √a

<strong>Pattern 4 — Rectangle with square same area:</strong>
"Rectangle l × w and square have same area. Find square's side." → Side = √(l × w)`,
          keyIdea: 'Read the problem → identify if you have the area and need the side → use square root. If you have the side and need the area → square it.',
          story: `The school principal wants two new gardens. One is a square with 441 tiles, and the other is a square with 784 tiles. The gardener needs to know how much longer the border of the second garden is compared to the first.

The gardener calculates: √441 = 21, √784 = 28. The difference in side lengths is 28 − 21 = 7 m.

The extra fencing needed per side is 7 m, so the second garden's perimeter is 4 × 7 = 28 m longer. One square root calculation, one subtraction — problem solved.`,
          workedSteps: [
            'Q: A square and a rectangle have the same area.',
            '   The rectangle is 12 cm × 27 cm. Find the side of the square.',
            '',
            'Area of rectangle = 12 × 27 = 324 cm²',
            'Area of square = 324 cm²',
            'Side of square = √324',
            '',
            '18 × 18 = 324 ✓',
            '',
            'Side = 18 cm'
          ],
          questions: [
            {
              id: 'q3_3_1', level: 1,
              text: '2025 students are seated in a perfectly square arrangement. How many students are in each row?',
              hint1: 'Find n where n × n = 2025. This gives the number in each row.',
              hint2: 'Try 45: 45 × 45 = ?',
              hint3: '45 × 45 = 2025. Each row has 45 students.',
              check: a => a.trim() === '45'
            },
            {
              id: 'q3_3_2', level: 2,
              text: 'Two square fields have areas 576 m² and 1024 m². By how many metres does the side of the larger field exceed the side of the smaller field?',
              hint1: 'Find the side of each field using square roots.',
              hint2: '√576 = 24 and √1024 = 32.',
              hint3: 'Difference = 32 − 24 = 8 m.',
              check: a => a.trim() === '8'
            },
            {
              id: 'q3_3_3', level: 3,
              text: 'A rectangular hall is 48 m long and 27 m wide. A square room has the same area as this hall. Find the perimeter of the square room.',
              hint1: 'Area of hall = 48 × 27. Find side of square = √(area).',
              hint2: '48 × 27 = 1296. √1296 = ?',
              hint3: '√1296 = 36. Perimeter = 4 × 36 = 144 m.',
              check: a => a.trim() === '144'
            }
          ]
        }
      ]
    },

    // ══════════════════════════════════════════════════════════════
    // SUBTOPIC 4 — PERFECT CUBES (3 concepts)
    // ══════════════════════════════════════════════════════════════
    {
      id: 'grade8_squares_and_cube_roots_perfect_cubes',
      title: 'Perfect Cubes',
      difficulty: 0.45,
      diffLabel: 'Easy',
      icon: '³',
      unlockCondition: { subtopic: 0, minScore: 0.55 },
      concepts: [

        // ── Concept 4.1 ──────────────────────────────────────────
        {
          id: 'c4_1',
          title: 'What is a Perfect Cube?',
          explanation: `When a number is multiplied by itself <strong>three times</strong>, the result is called a <strong>perfect cube</strong>.

4 × 4 × 4 = 64, so 64 is a perfect cube. We write this as 4³ = 64 (read: "4 cubed").

Just as a perfect square is the area of a square tile floor, a perfect cube is the <strong>volume of a cube-shaped box</strong> where all sides are equal.

<strong>The first 10 perfect cubes to memorise:</strong>
<table class="content-table">
<tr><th>n</th><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td><td>9</td><td>10</td></tr>
<tr><th>n³</th><td>1</td><td>8</td><td>27</td><td>64</td><td>125</td><td>216</td><td>343</td><td>512</td><td>729</td><td>1000</td></tr>
</table>

<strong>Cubes of negative numbers:</strong>
Unlike squares, the cube of a negative number is <strong>negative</strong>.
(−3)³ = (−3) × (−3) × (−3) = 9 × (−3) = −27

This is because multiplying a negative number an <em>odd</em> number of times gives a negative result.`,
          keyIdea: 'n³ = n × n × n. It represents the volume of a cube with side n. Negative × Negative × Negative = Negative (sign is preserved in cubing).',
          story: `Arjun is building a model city for his school exhibition. He stacks small sugar cubes to make larger cube-shaped buildings.

For a 3-floor building: 3 cubes wide, 3 deep, 3 tall → 3 × 3 × 3 = 27 cubes total.
For a 4-floor building: 4 × 4 × 4 = 64 cubes total.
For a 5-floor building: 5 × 5 × 5 = 125 cubes total.

Each of these is a perfect cube — literally a cube shape in 3D space. Arjun quickly learns that 512 = 8³, so his grandest building uses 512 cubes in an 8×8×8 arrangement.`,
          workedSteps: [
            'Q: Is 512 a perfect cube?',
            '',
            'Ask: is there n where n × n × n = 512?',
            'Try 8: 8 × 8 = 64, then 64 × 8 = 512 ✓',
            '',
            '512 = 8³  →  Yes, perfect cube!',
            '',
            '─────────────────────────────────',
            '',
            'Q: Find (−5)³',
            '',
            '(−5)³ = (−5) × (−5) × (−5)',
            '     = 25 × (−5)',
            '     = −125'
          ],
          questions: [
            {
              id: 'q4_1_1', level: 1,
              text: 'Which of these are perfect cubes: 8, 20, 64, 125, 200? (write all separated by commas)',
              hint1: 'Check your cube table: 2³=8, 4³=64, 5³=125. Are 20 and 200 there?',
              hint2: 'Is there a whole number n with n³=20? Or n³=200?',
              hint3: '8, 64, and 125 are perfect cubes. 20 and 200 are not.',
              check: a => /8/.test(a) && /64/.test(a) && /125/.test(a)
            },
            {
              id: 'q4_1_2', level: 1,
              text: 'Find (−4)³.',
              hint1: 'Cube means multiply three times. (−4) × (−4) × (−4).',
              hint2: '(−4) × (−4) = 16. Now multiply 16 × (−4).',
              hint3: '16 × (−4) = −64. So (−4)³ = −64.',
              check: a => a.trim() === '-64' || a.trim() === '−64'
            },
            {
              id: 'q4_1_3', level: 2,
              text: 'A cubic water tank holds exactly 1000 litres. What is the length of each side in decimetres? (1 dm³ = 1 litre)',
              hint1: 'Volume = side³. So side = ∛1000. Which n satisfies n³ = 1000?',
              hint2: 'Check your cube table. 10³ = ?',
              hint3: '10³ = 1000. Each side is 10 dm.',
              check: a => a.trim() === '10'
            }
          ]
        },

        // ── Concept 4.2 ──────────────────────────────────────────
        {
          id: 'c4_2',
          title: 'Properties of Perfect Cubes',
          explanation: `Perfect cubes have interesting properties related to last digits and signs:

<strong>Last Digit Table for Cubes:</strong>
<table class="content-table">
<tr><th>Number ends in</th><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td><td>9</td><td>0</td></tr>
<tr><th>Cube ends in</th><td>1</td><td>8</td><td>7</td><td>4</td><td>5</td><td>6</td><td>3</td><td>2</td><td>9</td><td>0</td></tr>
</table>

Notice the "swapper pairs": 2↔8 and 3↔7 (they swap with each other!). The digits 1,4,5,6,9,0 stay the same.

<strong>Key difference from squares:</strong>
Squares can only end in 0,1,4,5,6,9.
<em>Cubes can end in ANY digit (0–9)!</em>

<strong>Odd/Even rule:</strong>
Cube of even number → even. Cube of odd number → odd. (Same as squares.)

<strong>Consecutive cube differences:</strong>
n³ − (n−1)³ = 3n² − 3n + 1
Between consecutive cubes, the gap grows much faster than between consecutive squares.`,
          keyIdea: 'Cubes can end in any digit 0–9. The "swapper pairs" are 2↔8 and 3↔7. Use last digit to identify the cube root!',
          story: `Here is something amazing: while squares "forget" your sign (both 3 and −3 give 9 when squared), cubes "remember" your sign perfectly.

If you cube a positive → positive. Cube a negative → negative. Cube zero → zero. The sign is never lost.

This is why cube roots work for negative numbers but square roots don't — you can always "undo" a cube because the sign information is preserved.

Manu uses the last-digit trick to impress his class: "Tell me a perfect cube and I'll give you its cube root's last digit instantly!" Someone says 5832. It ends in 2, so the cube root ends in 8. ∛5832 = 18. Last digit: 8. ✓`,
          workedSteps: [
            'Q: A number cubed ends in 3. What does the original number end in?',
            '',
            'From the last-digit table:',
            'Only 7³ ends in 3 (since 7 and 3 are swappers).',
            '',
            'Answer: The original number ends in 7.',
            '',
            '─────────────────────────────────',
            '',
            'Q: True or False: 2197 could be a perfect cube?',
            '',
            'Last digit of 2197 is 7.',
            'From table: 3³ ends in 7.',
            'So it COULD be a cube. Check: 13³ = 2197 ✓',
            '',
            'True — 2197 = 13³'
          ],
          questions: [
            {
              id: 'q4_2_1', level: 1,
              text: 'A number cubed ends in 2. What does the original number end in?',
              hint1: 'Look at the swapper pairs: 2 and 8 swap. If cube ends in 2, original ends in...?',
              hint2: '8³ = 512, which ends in 2. The 2 and 8 swap.',
              hint3: 'The original number ends in 8.',
              check: a => a.trim() === '8'
            },
            {
              id: 'q4_2_2', level: 1,
              text: 'True or False: The cube of any even number is always even.',
              hint1: 'Try a few examples: 2³, 4³, 6³. Are the results even or odd?',
              hint2: '2³=8 (even), 4³=64 (even), 6³=216 (even).',
              hint3: 'True. Even × Even × Even = Even always.',
              check: a => /true/i.test(a)
            },
            {
              id: 'q4_2_3', level: 2,
              text: 'Can 9261 be a perfect cube based on its last digit? (yes or no)',
              hint1: 'Check the last digit of 9261. Use the last-digit table.',
              hint2: '9261 ends in 1. From the table: 1³ ends in 1. So numbers ending in 1 have cubes ending in 1.',
              hint3: 'Yes, it could be. The cube root would end in 1. In fact, 21³ = 9261.',
              check: a => /yes/i.test(a)
            }
          ]
        },

        // ── Concept 4.3 ──────────────────────────────────────────
        {
          id: 'c4_3',
          title: 'Smallest Multiplier / Divisor for Perfect Cubes',
          explanation: `A number is a perfect cube if and only if every prime factor appears a <strong>multiple of 3 times</strong> in its prime factorisation.

If any prime appears 1 or 2 times (not a multiple of 3), the number is not a perfect cube.

<strong>To make a perfect cube by multiplication:</strong>
If a prime appears 1 time → multiply by that prime <strong>twice</strong> (to get 3 total).
If a prime appears 2 times → multiply by that prime <strong>once</strong> (to get 3 total).

<strong>To make a perfect cube by division:</strong>
If a prime appears 1 time → divide by that prime (remove it).
If a prime appears 2 times → divide by that prime squared (remove both).

<strong>The three-step approach:</strong>
1. Factorise the number.
2. Check each prime's exponent modulo 3.
3. Decide whether to multiply or divide.`,
          keyIdea: 'Every prime factor must appear in groups of 3 (triplets). If a prime is "short," multiply by what\'s missing. If it has extras, divide them away.',
          story: `Imagine packing cubes into a box. Each type of cube must fill complete 3-layer stacks. If you have 2 red layers, you need 1 more red layer. If you have 1 blue layer, you need 2 more.

Riya has 72 small cubes: 2³ × 3² = 8 × 9 = 72. The 2s form a complete triplet (3 layers), but the 3s only have 2 layers. She needs one more layer of 3s.

72 × 3 = 216 = 6³. Now every prime has exactly 3 layers and the total forms a perfect cube!`,
          workedSteps: [
            'Q: Find the smallest number to multiply 72 by to make it a perfect cube.',
            '',
            '72 = 2³ × 3²',
            '',
            '2 appears 3 times → already a multiple of 3 ✓',
            '3 appears 2 times → needs 1 more to reach 3',
            '',
            'Multiply by 3.',
            '72 × 3 = 216 = 2³ × 3³ = 6³ ✓',
            '',
            '─────────────────────────────────',
            '',
            'Q: Find the smallest number to divide 81 by to get a perfect cube.',
            '',
            '81 = 3⁴',
            '3 appears 4 times → 4 = 3 + 1 → leftover is 3¹',
            '',
            'Divide by 3¹ = 3.',
            '81 ÷ 3 = 27 = 3³ ✓'
          ],
          questions: [
            {
              id: 'q4_3_1', level: 2,
              text: 'Find the smallest number to multiply 675 by to make it a perfect cube. (675 = 3³ × 5²)',
              hint1: 'Check each prime\'s exponent. 3 appears 3 times (fine). 5 appears 2 times (needs 1 more).',
              hint2: 'Multiply by 5 once to get 5³.',
              hint3: '675 × 5 = 3375 = 15³. Multiply by 5.',
              check: a => a.trim() === '5'
            },
            {
              id: 'q4_3_2', level: 2,
              text: 'What is the smallest number to divide 1372 by to get a perfect cube? (1372 = 2² × 7³)',
              hint1: 'Check each prime. 7 appears 3 times (fine). 2 appears 2 times — divide it out.',
              hint2: 'Divide by 2² = 4 to remove both 2s.',
              hint3: '1372 ÷ 4 = 343 = 7³. Divide by 4.',
              check: a => a.trim() === '4'
            },
            {
              id: 'q4_3_3', level: 3,
              text: 'The volume of a cube is 3375 cm³. Without using a calculator, find the edge length.',
              hint1: 'Edge = ∛3375. Factorise 3375 = 3³ × 5³.',
              hint2: 'Triplets: (3,3,3) and (5,5,5). Take one from each.',
              hint3: '∛3375 = 3 × 5 = 15 cm.',
              check: a => a.trim() === '15'
            }
          ]
        }
      ]
    },

    // ══════════════════════════════════════════════════════════════
    // SUBTOPIC 5 — CUBE ROOTS (3 concepts)
    // ══════════════════════════════════════════════════════════════
    {
      id: 'grade8_squares_and_cube_roots_cube_roots',
      title: 'Cube Roots',
      difficulty: 0.65,
      diffLabel: 'Hard',
      icon: '∛',
      unlockCondition: { subtopic: 3, minScore: 0.60 },
      concepts: [

        // ── Concept 5.1 ──────────────────────────────────────────
        {
          id: 'c5_1',
          title: 'What is a Cube Root?',
          explanation: `The <strong>cube root</strong> of a number n is the value that, when multiplied by itself three times, gives n.

We write it as <strong>∛n</strong> (or n^(1/3)).

∛27 = 3 &nbsp;&nbsp; because 3 × 3 × 3 = 27
∛64 = 4 &nbsp;&nbsp; because 4 × 4 × 4 = 64
∛125 = 5 &nbsp; because 5 × 5 × 5 = 125

<strong>Cube roots of negative numbers:</strong>
∛(−27) = −3 because (−3) × (−3) × (−3) = −27

<em>This is different from square roots</em> — cube roots of negative numbers are real and negative. Square roots of negative numbers do not exist in our number system.

<strong>Cube roots of fractions:</strong>
∛(a/b) = ∛a ÷ ∛b
∛(27/125) = ∛27 ÷ ∛125 = 3 ÷ 5 = 3/5`,
          keyIdea: '∛n is the reverse of cubing. It works for negative numbers too — ∛(−n) = −∛n. Unlike square roots, negative cube roots are real numbers.',
          story: `Nadia's chemistry teacher shows her a perfectly cube-shaped crystal of salt under a microscope. "Its volume is 512 cubic millimetres," the teacher says. "What is the length of each edge?"

Nadia thinks: edge³ = 512, so edge = ∛512. She remembers 8³ = 512. "Each edge is 8 mm!"

Later, in a puzzle: "A cube has volume −343 cubic units." Nadia isn't confused — she knows cube roots handle negatives: ∛(−343) = −7, because (−7)³ = −343. Cube roots are honest about signs!`,
          workedSteps: [
            'Q: Find ∛729.',
            '',
            'Ask: which n satisfies n × n × n = 729?',
            'Try 9: 9 × 9 = 81, then 81 × 9 = 729 ✓',
            '',
            '∛729 = 9',
            '',
            '─────────────────────────────────',
            '',
            'Q: Find ∛(−512).',
            '',
            'Step 1: Find ∛512 = 8 (since 8³ = 512)',
            'Step 2: Apply the sign: ∛(−512) = −8',
            '',
            'Verify: (−8) × (−8) × (−8) = 64 × (−8) = −512 ✓'
          ],
          questions: [
            {
              id: 'q5_1_1', level: 1,
              text: 'Find ∛1000.',
              hint1: 'Which number × itself × itself = 1000? Check your cube table.',
              hint2: '10³ = 10 × 10 × 10 = ?',
              hint3: '10 × 10 × 10 = 1000. So ∛1000 = 10.',
              check: a => a.trim() === '10'
            },
            {
              id: 'q5_1_2', level: 2,
              text: 'Find ∛(−729).',
              hint1: 'First find ∛729. Then apply the negative sign.',
              hint2: '9³ = 729. What is ∛(−729)?',
              hint3: '∛(−729) = −9 because (−9)³ = −729.',
              check: a => a.trim() === '-9' || a.trim() === '−9'
            },
            {
              id: 'q5_1_3', level: 2,
              text: 'Evaluate ∛(27/125). (write as a fraction like a/b)',
              hint1: 'Rule: ∛(a/b) = ∛a ÷ ∛b. Find ∛27 and ∛125 separately.',
              hint2: '∛27 = 3 and ∛125 = 5.',
              hint3: '∛(27/125) = 3/5.',
              check: a => /3\/5/.test(a.replace(/\s/g,''))
            }
          ]
        },

        // ── Concept 5.2 ──────────────────────────────────────────
        {
          id: 'c5_2',
          title: 'Cube Root by Prime Factorisation',
          explanation: `The most reliable method for finding cube roots of large numbers is <strong>prime factorisation</strong>.

<strong>Steps:</strong>
1. Factorise the number completely into prime factors.
2. Group the primes into <strong>triplets</strong> (groups of 3 identical primes).
3. Take <strong>one prime</strong> from each triplet.
4. Multiply these together → that is ∛n.

<strong>Perfect cube check:</strong>
A number is a perfect cube if and only if every prime factor appears exactly 3 times (or 6, 9, 12... — any multiple of 3).

<strong>For negative numbers:</strong>
∛(−n) = −∛n. Just find the cube root of the positive part, then apply the minus sign.`,
          keyIdea: 'Form triplets (groups of 3 identical primes). Take one from each triplet. Multiply → cube root. Three makes a team!',
          story: `Vikram's maths teacher gives him bags of coloured marbles for a "packing game."

Bag 1: 3 red marbles (one triplet of 2s → take 1 red → represents 2)
Bag 2: 3 blue marbles (one triplet of 3s → take 1 blue → represents 3)
Bag 3: 3 green marbles (one triplet of 7s → take 1 green → represents 7)

The original number was 2³ × 3³ × 7³ = 8 × 27 × 343 = 74088.
His "one from each triplet" gives: 2 × 3 × 7 = 42.
So ∛74088 = 42. ✓

"One representative from each team of three" — that's the cube root!`,
          workedSteps: [
            'Q: Find ∛9261 by prime factorisation.',
            '',
            '9261 ÷ 3 = 3087',
            '3087 ÷ 3 = 1029',
            '1029 ÷ 3 = 343',
            '343 ÷ 7 = 49',
            '49 ÷ 7 = 7',
            '7 ÷ 7 = 1',
            '',
            '9261 = 3³ × 7³',
            '',
            'Triplets: (3,3,3) and (7,7,7)',
            'One from each: 3 × 7 = 21',
            '',
            '∛9261 = 21 ✓ (21³ = 9261)'
          ],
          questions: [
            {
              id: 'q5_2_1', level: 2,
              text: 'Find ∛1728. (Hint: 1728 = 2⁶ × 3³)',
              hint1: 'Group into triplets: 2⁶ = (2,2,2)(2,2,2) — two triplets. 3³ = (3,3,3) — one triplet.',
              hint2: 'Take one from each triplet: 2, 2, 3. Multiply.',
              hint3: '∛1728 = 2 × 2 × 3 = 12. Check: 12³ = 1728 ✓',
              check: a => a.trim() === '12'
            },
            {
              id: 'q5_2_2', level: 2,
              text: 'Find ∛17576. (Hint: 17576 = 2³ × 13³)',
              hint1: 'Triplets: (2,2,2) and (13,13,13). Take one from each.',
              hint2: 'One 2 and one 13. Multiply.',
              hint3: '∛17576 = 2 × 13 = 26. Check: 26³ = 17576 ✓',
              check: a => a.trim() === '26'
            },
            {
              id: 'q5_2_3', level: 3,
              text: 'Show that 46656 is a perfect cube and find its cube root. (Hint: 46656 = 2⁶ × 3⁶)',
              hint1: 'Check: are all exponents multiples of 3? 6 is a multiple of 3 for both 2 and 3.',
              hint2: 'Triplets from 2⁶: (2,2,2)(2,2,2) → two 2s. Triplets from 3⁶: (3,3,3)(3,3,3) → two 3s.',
              hint3: '∛46656 = 2 × 2 × 3 × 3 = 36. Check: 36³ = 46656 ✓',
              check: a => a.trim() === '36'
            }
          ]
        },

        // ── Concept 5.3 ──────────────────────────────────────────
        {
          id: 'c5_3',
          title: 'Real-Life Problems with Cube Roots',
          explanation: `Cube roots appear in real life wherever we deal with 3D objects — especially volumes of cubes and cube-shaped containers.

<strong>Pattern 1 — Volume to Edge:</strong>
"A cube has volume V. Find its edge." → Edge = ∛V

<strong>Pattern 2 — Surface Area from Volume:</strong>
"Cube volume = V. Find surface area."
→ Edge = ∛V → Surface area = 6 × Edge²

<strong>Pattern 3 — Comparing cube sizes:</strong>
"Cube A has volume a, Cube B has volume b. How much longer is B's edge?"
→ ∛b − ∛a

<strong>Pattern 4 — Scaling:</strong>
"If all sides of a cube are doubled, the new volume is 8× the original."
(2n)³ = 8n³ → Doubling sides multiplies volume by 8.`,
          keyIdea: 'When you know the volume of a cube-shaped object and need the edge length → use cube root. Edge = ∛Volume.',
          story: `The city water board is designing underground cube-shaped reservoirs. Each one must hold exactly 15,625 litres (= 15,625 dm³, since 1 dm³ = 1 litre).

The engineer needs to find the dimensions: edge = ∛15625.

She thinks: 25³ = 25 × 25 × 25 = 625 × 25 = 15625. So the edge is 25 dm = 2.5 m.

She orders exactly 2.5 m × 2.5 m × 2.5 m construction. No guessing needed — the cube root formula gives the exact answer every time.`,
          workedSteps: [
            'Q: A cubical storage box has volume 5832 cm³. Find its surface area.',
            '',
            'Step 1: Edge = ∛5832',
            '18 × 18 = 324, 324 × 18 = 5832 ✓',
            'Edge = 18 cm',
            '',
            'Step 2: Surface area = 6 × edge²',
            '= 6 × 18²',
            '= 6 × 324',
            '= 1944 cm²'
          ],
          questions: [
            {
              id: 'q5_3_1', level: 1,
              text: 'A cube-shaped gift box has a volume of 2744 cm³. Find the length of each edge.',
              hint1: 'Edge = ∛2744. Factorise: 2744 = 2³ × 7³.',
              hint2: 'Take one from each triplet: 2 × 7 = ?',
              hint3: '∛2744 = 14. Each edge is 14 cm.',
              check: a => a.trim() === '14'
            },
            {
              id: 'q5_3_2', level: 2,
              text: 'Two cubes have volumes 216 cm³ and 1000 cm³. By how many centimetres does the edge of the larger cube exceed the smaller?',
              hint1: 'Find ∛216 and ∛1000 separately.',
              hint2: '∛216 = 6 and ∛1000 = 10.',
              hint3: 'Difference = 10 − 6 = 4 cm.',
              check: a => a.trim() === '4'
            },
            {
              id: 'q5_3_3', level: 3,
              text: 'A metal cube with edge 6 cm is melted and recast with extra metal added. The new cube has edge 8 cm. What volume of extra metal was added?',
              hint1: 'Find the volume of both cubes: 6³ and 8³.',
              hint2: '6³ = 216 cm³ and 8³ = 512 cm³.',
              hint3: 'Extra metal = 512 − 216 = 296 cm³.',
              check: a => a.trim() === '296'
            }
          ]
        }
      ]
    },

    // ══════════════════════════════════════════════════════════════
    // SUBTOPIC 6 — APPLICATION OF CUBE ROOTS (3 concepts)
    // ══════════════════════════════════════════════════════════════
    {
      id: 'grade8_squares_and_cube_roots_cube_root_applications',
      title: 'Application of Cube Roots',
      difficulty: 0.70,
      diffLabel: 'Hard',
      icon: '📦',
      unlockCondition: { subtopic: 4, minScore: 0.60 },
      concepts: [

        // ── Concept 6.1 ──────────────────────────────────────────
        {
          id: 'c6_1',
          title: 'Volume and Edge of a Cube',
          explanation: `The most common application of cube roots is finding the <strong>edge length</strong> of a cube when its volume is given.

<strong>Formula:</strong>
Volume of cube = edge³
Edge of cube = ∛Volume

<strong>Surface area from volume:</strong>
Once you know the edge, you can find:
→ Surface area = 6 × edge²
→ Length of one edge = ∛Volume

<strong>Example:</strong>
A cube has volume 2744 cm³. Find its edge and surface area.
Edge = ∛2744 = 14 cm (since 14 × 14 × 14 = 2744)
Surface area = 6 × 14² = 6 × 196 = 1176 cm²`,
          keyIdea: 'Edge = ∛Volume. Once you have the edge, surface area = 6 × edge². These two formulas solve most cube problems.',
          story: `A toy company makes cube-shaped gift boxes. The factory receives an order: "Make boxes that hold exactly 3375 cubic centimetres." The machine operator needs to know the exact edge length to cut the cardboard.

He calculates: ∛3375. He factorises: 3375 = 3³ × 5³. Taking one from each triplet: 3 × 5 = 15 cm. The edge is 15 cm. He also needs to know how much cardboard to use: 6 × 15² = 6 × 225 = 1350 cm² per box.`,
          workedSteps: [
            'Q: A cubical water tank has volume 8000 litres. Find its edge in dm.',
            '(1 litre = 1 dm³)',
            '',
            'Edge = ∛8000',
            '8000 = 8 × 1000 = 2³ × 10³',
            '∛8000 = 2 × 10 = 20 dm',
            '',
            'Edge = 20 dm = 2 m'
          ],
          questions: [
            {
              id: 'q6_1_1', level: 1,
              text: 'A cube has volume 729 cm³. What is its edge length?',
              hint1: 'Edge = ∛729. Which number cubed gives 729?',
              hint2: 'Try 9: 9 × 9 × 9 = ?',
              hint3: '9 × 9 × 9 = 729. Edge = 9 cm.',
              check: a => a.trim() === '9'
            },
            {
              id: 'q6_1_2', level: 2,
              text: 'A cubical box has volume 4913 cm³. Find the total surface area. (4913 = 17³)',
              hint1: 'First find edge = ∛4913 = 17. Then surface area = 6 × edge².',
              hint2: '6 × 17² = 6 × 289 = ?',
              hint3: 'Surface area = 6 × 289 = 1734 cm².',
              check: a => a.trim() === '1734'
            },
            {
              id: 'q6_1_3', level: 3,
              text: 'A cubical tank holds 5832 litres of water. What is the length of its edge in metres? (1 m³ = 1000 litres)',
              hint1: 'Convert: 5832 litres = 5.832 m³. Edge = ∛5.832. Or work in dm: 5832 dm³, edge = ∛5832 dm.',
              hint2: '5832 = 2³ × 3³ × (3³ × 2³)... Try: 18³ = 5832.',
              hint3: 'Edge = 18 dm = 1.8 m.',
              check: a => /1\.8|18/.test(a)
            }
          ]
        },

        // ── Concept 6.2 ──────────────────────────────────────────
        {
          id: 'c6_2',
          title: 'Comparing and Combining Cubes',
          explanation: `Many real-world problems involve comparing cube-shaped objects or combining their volumes.

<strong>Pattern 1 — Comparing edges:</strong>
Two cubes with volumes V₁ and V₂. Difference in edges = ∛V₂ − ∛V₁.

<strong>Pattern 2 — Melting and recasting:</strong>
When a cube is melted and recast into a new cube, the volume is preserved (unless extra material is added or removed).
New edge = ∛(total volume)

<strong>Pattern 3 — Scaling:</strong>
If the edge of a cube is doubled → volume becomes 8 times.
If the edge is tripled → volume becomes 27 times.
In general: if edge is multiplied by k → volume is multiplied by k³.`,
          keyIdea: 'When combining cubes: add volumes first, then take cube root. When scaling: volume changes by k³ when edge changes by k.',
          story: `A goldsmith has two cube-shaped gold blocks — one with edge 3 cm (volume 27 cm³) and another with edge 4 cm (volume 64 cm³). A customer asks: "Can you melt both and make one bigger cube?"

Total volume = 27 + 64 = 91 cm³. The goldsmith checks: ∛91 ≈ 4.5. Since 91 is not a perfect cube, a perfect cube cannot be formed. He tells the customer: "I can make a cube with edge about 4.5 cm, but it won't use all the gold exactly."`,
          workedSteps: [
            'Q: Two cubes have edges 6 cm and 8 cm. They are melted together.',
            'Can the combined metal form a perfect cube?',
            '',
            'Volume 1 = 6³ = 216 cm³',
            'Volume 2 = 8³ = 512 cm³',
            'Total = 216 + 512 = 728 cm³',
            '',
            'Is 728 a perfect cube?',
            '9³ = 729 ≠ 728',
            '',
            'No, 728 is not a perfect cube.',
            'The combined metal cannot form a perfect cube.'
          ],
          questions: [
            {
              id: 'q6_2_1', level: 1,
              text: 'Two cubes have volumes 125 cm³ and 216 cm³. What is the difference in their edge lengths?',
              hint1: 'Find both edges: ∛125 and ∛216.',
              hint2: '∛125 = 5 and ∛216 = 6.',
              hint3: 'Difference = 6 − 5 = 1 cm.',
              check: a => a.trim() === '1'
            },
            {
              id: 'q6_2_2', level: 2,
              text: 'If the edge of a cube is tripled, how many times does its volume increase?',
              hint1: 'If original edge = a, new edge = 3a. What is the new volume?',
              hint2: 'New volume = (3a)³ = 27a³. Original = a³.',
              hint3: 'Volume increases 27 times.',
              check: a => a.trim() === '27'
            },
            {
              id: 'q6_2_3', level: 3,
              text: 'Three cubes with edges 3 cm, 4 cm, and 5 cm are melted and recast into a single cube. What is the edge of the new cube?',
              hint1: 'Total volume = 3³ + 4³ + 5³ = 27 + 64 + 125.',
              hint2: 'Total = 216. Edge = ∛216.',
              hint3: '∛216 = 6. The new cube has edge 6 cm.',
              check: a => a.trim() === '6'
            }
          ]
        },

        // ── Concept 6.3 ──────────────────────────────────────────
        {
          id: 'c6_3',
          title: 'Word Problems with Cube Roots',
          explanation: `Cube root problems appear in everyday contexts involving 3D measurements. The key is recognising when a problem involves a cube shape.

<strong>Clue words that signal cube roots:</strong>
→ "cubical", "cube-shaped", "equal length, width, and height"
→ "volume of a cube", "how many small cubes fit"

<strong>Stacking pattern:</strong>
If n small cubes are stacked to form a larger cube, the edge of the larger cube (in terms of small cubes) = ∛n.
Example: 64 small cubes → ∛64 = 4 cubes along each edge.

<strong>Negative cube roots in context:</strong>
Temperature drops, depth below sea level, or losses can involve negative cubes.
If the temperature change is −125°, and it changed by the same amount each of 3 equal intervals → change per interval = ∛(−125) = −5° per interval.`,
          keyIdea: 'Look for "cubical" or "volume" clues. To find edge from volume → cube root. For stacking problems → cube root tells you cubes per edge.',
          story: `A warehouse manager receives 1331 identical small cube-shaped boxes. She needs to stack them into one large cube for storage. She calculates: ∛1331 = 11. So she stacks them 11 boxes long, 11 wide, and 11 high — a perfect 11 × 11 × 11 arrangement!

Later, she receives 1000 more boxes and stacks them separately: ∛1000 = 10, so a 10 × 10 × 10 cube. Quick cube root calculations make warehouse organisation easy.`,
          workedSteps: [
            'Q: 2197 identical cubes are stacked into a larger cube.',
            'How many small cubes are along each edge?',
            '',
            'Edge count = ∛2197',
            '13 × 13 = 169, 169 × 13 = 2197 ✓',
            '',
            'Answer: 13 cubes along each edge.',
            '',
            '─────────────────────────────────',
            '',
            'Q: A cube has volume 1728 cm³. If each edge is',
            'increased by 2 cm, what is the new volume?',
            '',
            'Original edge = ∛1728 = 12 cm',
            'New edge = 12 + 2 = 14 cm',
            'New volume = 14³ = 2744 cm³'
          ],
          questions: [
            {
              id: 'q6_3_1', level: 1,
              text: '512 small cubes are stacked to form a big cube. How many small cubes are along each edge?',
              hint1: 'Find ∛512. Which number cubed is 512?',
              hint2: 'Try 8: 8 × 8 × 8 = ?',
              hint3: '8 × 8 × 8 = 512. So 8 cubes along each edge.',
              check: a => a.trim() === '8'
            },
            {
              id: 'q6_3_2', level: 2,
              text: 'A cube has volume 343 cm³. If each edge is doubled, what is the new volume?',
              hint1: 'First find original edge = ∛343. Then double it and cube.',
              hint2: '∛343 = 7. New edge = 14. New volume = 14³.',
              hint3: '14³ = 2744 cm³.',
              check: a => a.trim() === '2744'
            },
            {
              id: 'q6_3_3', level: 3,
              text: 'The temperature dropped by 64° over 3 equal intervals. If the drop follows a cube pattern (total drop = drop per interval cubed), what was the drop per interval?',
              hint1: 'Drop per interval cubed = 64. So drop = ∛64.',
              hint2: '∛64 = ?',
              hint3: '∛64 = 4. The drop was 4° per interval.',
              check: a => a.trim() === '4'
            }
          ]
        }
      ]
    }
  ]
};
