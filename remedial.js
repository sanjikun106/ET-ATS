// ═══════════════════════════════════════════════════════════════════
// REMEDIAL CONTENT — Alternative explanations for every concept
// Shown when student fails 3+ times on a concept
// Each entry has: a different explanation, a different story,
// and 2 simpler "bridge" questions to rebuild confidence
// ═══════════════════════════════════════════════════════════════════

const REMEDIAL = {

  // ── SUBTOPIC 1 ─────────────────────────────────────────────────

  c1_1: {
    title: 'Let\'s try a different way — Square Numbers',
    explanation: `Let's go back to basics using a very visual idea.

Draw a grid of dots. A <strong>1×1 grid</strong> has 1 dot. A <strong>2×2 grid</strong> has 4 dots. A <strong>3×3 grid</strong> has 9 dots.

Each of these dot counts (1, 4, 9, 16, 25...) is a perfect square — because you can always arrange those dots into a perfect square grid.

<strong>The simple test:</strong>
To check if n is a perfect square, try whole numbers starting from 1:
→ 1×1=1, 2×2=4, 3×3=9... keep going until you either hit n exactly (✓ it's a square) or jump past it (✗ not a square).

You don't need any formula — just systematic checking.`,
    story: `Neel has square sticker sheets. Each sheet is n×n stickers. He has sheets of size 1×1 (1 sticker), 2×2 (4 stickers), 3×3 (9 stickers), and so on.

If a friend gives Neel 16 stickers, he knows immediately it's a 4×4 sheet (4² = 16). If someone gives him 20 stickers, he can't arrange them as a square — because no whole number times itself equals 20. He'd have 4 leftover if he tried a 4×4 arrangement.`,
    bridgeQuestions: [
      {
        text: 'Is 9 a perfect square? What is its square root?',
        answer: '3',
        hint: '3 × 3 = 9. So yes, 9 is a perfect square and its square root is 3.',
        check: a => a.trim() === '3' || (a.includes('3') && /yes/i.test(a))
      },
      {
        text: 'Is 16 a perfect square?',
        answer: 'Yes, 16 = 4²',
        hint: '4 × 4 = 16. So yes, 16 is a perfect square.',
        check: a => /yes/i.test(a) || a.trim() === '4'
      }
    ]
  },

  c1_2: {
    title: 'Let\'s try a different way — Properties Shortcut',
    explanation: `Forget trying to multiply — use the shortcut tests!

<strong>TEST 1 — The last digit trick:</strong>
Write down these "safe" endings: 0, 1, 4, 5, 6, 9
Write down these "danger" endings: 2, 3, 7, 8

If a number ends in a "danger" digit → STOP. It's not a square.
If it ends in a "safe" digit → it might be a square (continue checking).

<strong>TEST 2 — Zero counting:</strong>
Count the zeros at the end of the number.
Even number of zeros → safe.
Odd number of zeros → not a perfect square.

Two quick tests, and you've eliminated most non-squares in seconds.`,
    story: `In a quiz competition, Priti must identify perfect squares from a list of 20 numbers in 30 seconds. She uses the last-digit trick ruthlessly.

She crosses out everything ending in 2, 3, 7, 8 — that eliminates 8 numbers instantly. Then she checks trailing zeros and eliminates 3 more. Now she only needs to test 9 numbers properly. She finishes with 12 seconds to spare!

The trick: elimination is faster than verification.`,
    bridgeQuestions: [
      {
        text: 'Can a number ending in 7 be a perfect square? Answer Yes or No.',
        answer: 'No',
        hint: 'Squares only end in 0, 1, 4, 5, 6, 9. Never in 7.',
        check: a => /no/i.test(a)
      },
      {
        text: 'Can 100 be a perfect square? (Check trailing zeros)',
        answer: 'Yes',
        hint: '100 has 2 trailing zeros. 2 is even, so it passes the zero test. 10 × 10 = 100 ✓',
        check: a => /yes/i.test(a)
      }
    ]
  },

  c1_3: {
    title: 'Let\'s try a different way — Building Squares with Odd Numbers',
    explanation: `Let's build this pattern from scratch, one step at a time.

Start with a single dot: that's 1 = 1².

Now add an "L-shape" of 3 dots around the top and right: you get a 2×2 grid = 4 dots = 2².

Add another L-shape of 5 dots: you get a 3×3 grid = 9 dots = 3².

Each L-shape is the next odd number: 3, 5, 7, 9...

<strong>So:</strong>
1 = 1²
1 + 3 = 4 = 2²
1 + 3 + 5 = 9 = 3²

The count of odd numbers you add = the square root of the total!`,
    story: `Deepak's art teacher asks him to make square frames out of square tiles. The innermost square uses 1 tile. Each new border frame adds more tiles in an L-shape.

First border: 3 tiles. Total: 4 tiles (2×2).
Second border: 5 tiles. Total: 9 tiles (3×3).
Third border: 7 tiles. Total: 16 tiles (4×4).

Deepak notices: each border is always an odd number of tiles, and the total is always a perfect square. He uses this to design borders of any size without counting every tile.`,
    bridgeQuestions: [
      {
        text: 'What is 1 + 3 + 5 (the first 3 odd numbers)?',
        answer: '9',
        hint: '1 + 3 = 4, then 4 + 5 = 9. This equals 3².',
        check: a => a.trim() === '9'
      },
      {
        text: 'What is the sum of the first 4 odd numbers?',
        answer: '16',
        hint: '1 + 3 + 5 + 7 = 16 = 4².',
        check: a => a.trim() === '16'
      }
    ]
  },

  c1_4: {
    title: 'Let\'s try a different way — The Gap Between Squares',
    explanation: `Let's understand why (n+1)² − n² = 2n + 1 using simple algebra.

Expand (n+1)²:
(n+1)² = n² + 2n + 1

Subtract n²:
(n+1)² − n² = 2n + 1

That's it! No memorising — just expand and subtract. The answer is always 2n + 1.

<strong>What this means practically:</strong>
If you know 10² = 100, then 11² = 100 + (2×10 + 1) = 100 + 21 = 121.
If you know 20² = 400, then 21² = 400 + (2×20 + 1) = 400 + 41 = 441.

You can build up squares one step at a time!`,
    story: `Ananya is memorising squares for a maths olympiad but only knows up to 10². Instead of memorising each one separately, she uses the gap rule.

11² = 100 + 21 = 121
12² = 121 + 23 = 144
13² = 144 + 25 = 169
14² = 169 + 27 = 196
15² = 196 + 29 = 225

She extends her list quickly just by adding the next odd number each time. In 2 minutes, she knows all squares up to 20²!`,
    bridgeQuestions: [
      {
        text: 'If 5² = 25, find 6² using the gap rule.',
        answer: '36',
        hint: '6² = 5² + (2×5 + 1) = 25 + 11 = 36.',
        check: a => a.trim() === '36'
      },
      {
        text: 'What is 7² − 6²? Use the formula, not multiplication.',
        answer: '13',
        hint: '(n+1)² − n² = 2n + 1. Here n = 6. So 2(6) + 1 = 13.',
        check: a => a.trim() === '13'
      }
    ]
  },

  // ── SUBTOPIC 2 ─────────────────────────────────────────────────

  c2_1: {
    title: 'Let\'s try a different way — Square Root as Reverse',
    explanation: `Think of squaring and square roots as opposite operations — like addition and subtraction.

Addition: 5 + 3 = 8
Subtraction undoes it: 8 − 3 = 5

Squaring: 6² = 36
Square root undoes it: √36 = 6

<strong>Simple lookup method:</strong>
Build your "square family" from n = 1 to 15:
1²=1, 2²=4, 3²=9, 4²=16, 5²=25, 6²=36, 7²=49, 8²=64, 9²=81, 10²=100, 11²=121, 12²=144, 13²=169, 14²=196, 15²=225.

To find √n, just look up which perfect square n is, and read off the root from the left side of the family.`,
    story: `Rohan's teacher says: "Squaring and square roots are best friends who undo each other's work."

If squaring is locking a box (put in 5, lock it → get 25), then square root is the key that unlocks it (put in 25, unlock → get 5 back).

Rohan practises: "√49? That's 7, because 7 was the number locked in the box to give 49." He builds speed by visualising the lock-and-key relationship.`,
    bridgeQuestions: [
      {
        text: 'Find √36.',
        answer: '6',
        hint: '6 × 6 = 36. So √36 = 6.',
        check: a => a.trim() === '6'
      },
      {
        text: 'Find √100.',
        answer: '10',
        hint: '10 × 10 = 100. So √100 = 10.',
        check: a => a.trim() === '10'
      }
    ]
  },

  c2_2: {
    title: 'Let\'s try a different way — Step by Step Subtraction',
    explanation: `Let's do the repeated subtraction very slowly and carefully, with a table.

<strong>To find √16:</strong>

| Step | Start | Subtract | Result |
|------|-------|----------|--------|
| 1    | 16    | − 1      | 15     |
| 2    | 15    | − 3      | 12     |
| 3    | 12    | − 5      | 7      |
| 4    | 7     | − 7      | 0 ✓   |

We reached 0 in exactly 4 steps → √16 = 4.

<strong>The pattern of what you subtract:</strong> 1, 3, 5, 7, 9, 11... (consecutive odd numbers).
<strong>When to stop:</strong> When you reach exactly 0 (it's a perfect square!) or go negative (not a perfect square).`,
    story: `Imagine a very patient frog on a lily pad at position n. Every jump, the frog jumps a little further than before: first jump = 1 pad, second = 3 pads, third = 5 pads...

If the frog lands exactly on pad 0 after some jumps, the starting number was a perfect square! The number of jumps = the square root.

A frog starting at 25 takes 5 jumps to reach 0: lands at 24, 21, 16, 9, 0. So √25 = 5.`,
    bridgeQuestions: [
      {
        text: 'Use repeated subtraction to find √9. Show each step.',
        answer: '3',
        hint: '9−1=8, 8−3=5, 5−5=0. Reached 0 in 3 steps. √9 = 3.',
        check: a => a.trim() === '3'
      },
      {
        text: 'Try repeated subtraction on 12. Is it a perfect square?',
        answer: 'No',
        hint: '12−1=11, 11−3=8, 8−5=3, 3−7=−4. Jumped past 0! Not a perfect square.',
        check: a => /no/i.test(a)
      }
    ]
  },

  c2_3: {
    title: 'Let\'s try a different way — Prime Factorisation from Scratch',
    explanation: `Let's rebuild the prime factorisation method step by step using a very small number first.

<strong>Find √36:</strong>
Step 1: Factorise 36.
36 ÷ 2 = 18
18 ÷ 2 = 9
9 ÷ 3 = 3
3 ÷ 3 = 1
So 36 = 2 × 2 × 3 × 3 = 2² × 3²

Step 2: Form pairs.
Pair of 2s: (2, 2) → take one 2
Pair of 3s: (3, 3) → take one 3

Step 3: Multiply the ones you took: 2 × 3 = 6

√36 = 6 ✓

<strong>The rule to remember:</strong> Every prime must appear in a complete pair. Take one from each pair.`,
    story: `Imagine a twin-sorting machine at a factory. Items come in — some have twins (identical pairs), some don't.

The machine keeps one from each pair and throws the rest away. Whatever comes out of the machine is the square root.

36's items: two 2s (twins!), two 3s (twins!). Machine keeps: one 2, one 3. Output: 2×3 = 6 = √36.

If any item arrives without a twin, it fails the quality check — the number is not a perfect square.`,
    bridgeQuestions: [
      {
        text: 'Find √4 using prime factorisation. (4 = 2²)',
        answer: '2',
        hint: '4 = 2 × 2. One pair of 2s. Take one 2. √4 = 2.',
        check: a => a.trim() === '2'
      },
      {
        text: 'Find √9 using prime factorisation. (9 = 3²)',
        answer: '3',
        hint: '9 = 3 × 3. One pair of 3s. Take one 3. √9 = 3.',
        check: a => a.trim() === '3'
      }
    ]
  },

  c2_4: {
    title: 'Let\'s try a different way — Long Division Broken Down',
    explanation: `The long division method looks scary but let's break it into tiny steps using a very small example first.

<strong>Find √81:</strong>
Step 1: Group digits → 81 (one group, odd number of digits)
Step 2: Largest n where n² ≤ 81 → n = 9 (9² = 81)
Step 3: Remainder = 81 − 81 = 0

Answer: √81 = 9 ✓ (trivial case — just a reminder)

<strong>Find √196:</strong>
Step 1: Group → 1|96
Step 2: Largest n where n² ≤ 1 → n = 1 (1² = 1)
        Remainder = 1 − 1 = 0. Bring down 96 → working number = 96.
Step 3: Double quotient: 1 × 2 = 2. New divisor starts with "2_".
Step 4: Find d: (20 + d) × d ≤ 96. Try d=4: 24 × 4 = 96 ✓
Step 5: √196 = 14`,
    story: `Think of the long division method as building a number digit by digit, like slowly revealing a secret combination.

First digit: look at the leftmost group. What's the largest "start"?
Second digit: double what you found. Find what fits next.

Kiran practices on small numbers first: √144 → groups 1|44 → first digit 1 → double to 2 → find d: (20+d)×d ≤ 44 → d=2 (22×2=44) → √144 = 12. Once you see the pattern on small numbers, larger ones are just more of the same steps.`,
    bridgeQuestions: [
      {
        text: 'Find √144 using long division. (Groups: 1|44)',
        answer: '12',
        hint: 'First group: 1. n=1 (1²=1). Rem=0. Bring 44 → 44. Double: 2. Find d: (20+d)×d≤44. d=2: 22×2=44. √144=12.',
        check: a => a.trim() === '12'
      },
      {
        text: 'Find √225 using long division. (Groups: 2|25)',
        answer: '15',
        hint: 'First group: 2. n=1 (1²=1). Rem=1. Bring 25→125. Double:2. d=5: 25×5=125. √225=15.',
        check: a => a.trim() === '15'
      }
    ]
  },

  // ── SUBTOPIC 3 ─────────────────────────────────────────────────

  c3_1: {
    title: 'Let\'s try a different way — Estimating Square Roots',
    explanation: `A simpler way to think about estimating: use the perfect square "neighbours."

For any number n, ask:
→ "What perfect square is just BELOW n?" Call it a².
→ "What perfect square is just ABOVE n?" Call it b².

Then: a < √n < b.

<strong>Example — √40:</strong>
6² = 36 (just below 40)
7² = 49 (just above 40)
So: 6 < √40 < 7.

<strong>To estimate more precisely:</strong>
How far is 40 from 36? → 4 steps.
Total gap from 36 to 49 → 13 steps.
Fraction: 4/13 ≈ 0.3
So √40 ≈ 6.3.`,
    story: `Sonal is playing "closest neighbours" with a number line of perfect squares. She has flags at 1, 4, 9, 16, 25, 36, 49, 64, 81, 100...

Someone gives her the number 55. She looks at her number line: 49 is on the left, 64 is on the right. So √55 must be between 7 and 8. Since 55 is closer to 49 than to 64, √55 ≈ 7.4.

The "closest neighbours" game makes estimation feel like a simple look-up.`,
    bridgeQuestions: [
      {
        text: 'Between which two whole numbers does √20 lie?',
        answer: '4 and 5',
        hint: '4² = 16 and 5² = 25. Since 16 < 20 < 25, we have 4 < √20 < 5.',
        check: a => /4/.test(a) && /5/.test(a)
      },
      {
        text: 'Between which two whole numbers does √50 lie?',
        answer: '7 and 8',
        hint: '7² = 49 and 8² = 64. Since 49 < 50 < 64, we have 7 < √50 < 8.',
        check: a => /7/.test(a) && /8/.test(a)
      }
    ]
  },

  c3_2: {
    title: 'Let\'s try a different way — Pythagorean Triplets',
    explanation: `Let's start from the very beginning — what does a² + b² = c² actually mean?

In a right-angled triangle (the triangle with one square corner), if you draw a square on each side:
→ The square on side a has area a²
→ The square on side b has area b²
→ The square on the longest side c has area c²

The magic of Pythagoras: the two smaller squares added together exactly equal the big square. Always!

A Pythagorean triplet is just three whole numbers that satisfy this. Start with the simplest:
3² + 4² = 9 + 16 = 25 = 5². So (3, 4, 5) works.
Multiply any triplet by the same number to get a new one: (6, 8, 10), (9, 12, 15)...`,
    story: `A farmer needs to check if a corner of his field is exactly 90°. He doesn't have a protractor but he has a tape measure.

His father taught him: measure 3 m along one side, 4 m along the other, and the diagonal connecting them should be exactly 5 m. If it is, the corner is 90°!

This is the (3, 4, 5) triplet in action. The farmer has been using this rule for years without knowing it's called "Pythagoras."`,
    bridgeQuestions: [
      {
        text: 'Check: is (3, 4, 5) a Pythagorean triplet? Show 3² + 4² = 5².',
        answer: 'Yes',
        hint: '3² = 9, 4² = 16, 5² = 25. 9 + 16 = 25 ✓',
        check: a => /yes/i.test(a) || /25/.test(a)
      },
      {
        text: 'Is (6, 8, 10) a Pythagorean triplet?',
        answer: 'Yes',
        hint: '6² + 8² = 36 + 64 = 100 = 10² ✓',
        check: a => /yes/i.test(a)
      }
    ]
  },

  c3_3: {
    title: 'Let\'s try a different way — Square Root Word Problems',
    explanation: `Word problems feel hard because of the reading, not the maths. Let's slow down.

<strong>Three-step approach:</strong>
1. READ: Underline the key numbers and what you're looking for.
2. DRAW: Sketch the shape if it's geometry.
3. TRANSLATE: Write the equation.

<strong>Most common translation:</strong>
"Area of square = A" → "side = √A"
"Side of square = s" → "area = s²"

If you get confused, go back to: square root is just "finding the side when you know the area."`,
    story: `Kamla always froze at word problems. Her tutor gave her one trick: replace all the words with a picture.

"A square hall has area 625 m² — what is the side?"
Kamla draws a square, writes 625 m² inside, and draws an arrow pointing to one side with a "?" label.

Now it's obvious: side = √625 = 25 m. The picture did the thinking for her!`,
    bridgeQuestions: [
      {
        text: 'A square tile has area 49 cm². What is the length of one side?',
        answer: '7',
        hint: 'Side = √49 = 7. Because 7 × 7 = 49.',
        check: a => a.trim() === '7'
      },
      {
        text: 'A square room has side 9 m. What is its area?',
        answer: '81',
        hint: 'Area = 9² = 9 × 9 = 81 m².',
        check: a => a.trim() === '81'
      }
    ]
  },

  // ── SUBTOPIC 4 ─────────────────────────────────────────────────

  c4_1: {
    title: 'Let\'s try a different way — Cubes are 3D Squares',
    explanation: `If a square number fills a 2D grid, a cube number fills a 3D box.

2² = 4 → a 2×2 square (flat grid of 4 dots)
2³ = 8 → a 2×2×2 cube (3D box of 8 small cubes)

3² = 9 → a 3×3 square
3³ = 27 → a 3×3×3 cube

<strong>To compute n³:</strong>
Step 1: Compute n² (square it).
Step 2: Multiply by n once more.

2³: 2² = 4, then 4 × 2 = 8. ✓
3³: 3² = 9, then 9 × 3 = 27. ✓
4³: 4² = 16, then 16 × 4 = 64. ✓

<strong>Remember:</strong> (−n)³ = −(n³). The cube of a negative is always negative.`,
    story: `Naina stacks blocks for her younger sister. For squares: 3×3 = 9 blocks on the floor. For cubes: 3×3 base layer (9 blocks), plus two more identical layers on top → 9 + 9 + 9 = 27 blocks total = 3³.

She sees that 3D = "add one more dimension." Square is flat; cube is tall. And the negative cube is like a "debt" of blocks — if you owe someone −4³ = −64 blocks, you owe 64.`,
    bridgeQuestions: [
      {
        text: 'Find 2³.',
        answer: '8',
        hint: '2 × 2 = 4, then 4 × 2 = 8.',
        check: a => a.trim() === '8'
      },
      {
        text: 'Find 3³.',
        answer: '27',
        hint: '3 × 3 = 9, then 9 × 3 = 27.',
        check: a => a.trim() === '27'
      }
    ]
  },

  c4_2: {
    title: 'Let\'s try a different way — Cube Last Digit Trick',
    explanation: `The last-digit table for cubes is easy to remember if you see the pattern:

<strong>Group 1 — "Fixed" digits (same last digit in cube):</strong>
1 → 1, &nbsp; 4 → 4, &nbsp; 5 → 5, &nbsp; 6 → 6, &nbsp; 9 → 9, &nbsp; 0 → 0

<strong>Group 2 — "Swapper" pairs (they swap with each other):</strong>
2 ↔ 8 &nbsp; (if original ends in 2, cube ends in 8; if ends in 8, cube ends in 2)
3 ↔ 7 &nbsp; (if original ends in 3, cube ends in 7; if ends in 7, cube ends in 3)

That's all you need! 6 "fixed" digits and 2 "swap pairs."

<strong>Example:</strong>
∛9261: ends in 1 → cube root ends in 1 → guess 21, check 21³ = 9261 ✓`,
    story: `Manu challenges his class to a "cube root last digit" competition. He memorises just two things: the fixed digits and the swap pairs.

Someone says "5832." Last digit 2 → swap → cube root ends in 8 → guess 18. Check: 18³ = 5832 ✓. He wins before anyone else has picked up a pencil.

Someone says "15625." Last digit 5 → fixed → cube root ends in 5 → guess 25. Check: 25³ = 15625 ✓.

Two rules, instant answers.`,
    bridgeQuestions: [
      {
        text: 'A perfect cube ends in 7. What does its cube root end in?',
        answer: '3',
        hint: '3 and 7 are swap partners. Cube ending in 7 → root ending in 3.',
        check: a => a.trim() === '3'
      },
      {
        text: 'A perfect cube ends in 6. What does its cube root end in?',
        answer: '6',
        hint: '6 is a "fixed" digit — cube of a number ending in 6 also ends in 6.',
        check: a => a.trim() === '6'
      }
    ]
  },

  c4_3: {
    title: 'Let\'s try a different way — Making Perfect Cubes',
    explanation: `Let's slow down the method to its simplest form.

A number is a perfect cube when every prime in its factorisation comes in <strong>groups of exactly 3</strong>.

<strong>Quick rule:</strong>
Look at each prime's exponent. Divide by 3. Check the remainder:
→ Remainder 0: perfect (already in triplets)
→ Remainder 1: multiply by prime twice (need 2 more)
→ Remainder 2: multiply by prime once (need 1 more)

<strong>Example: 12 = 2² × 3¹</strong>
2 has exponent 2 → remainder when ÷3 is 2 → need 1 more 2
3 has exponent 1 → remainder when ÷3 is 1 → need 2 more 3s
Multiply by 2 × 3² = 2 × 9 = 18.
12 × 18 = 216 = 6³ ✓`,
    story: `Rina has a job at a packaging factory. Her task: make sure every box has cubes packed in triplet layers. Any extra items that don't complete a layer must be either thrown out or extra items ordered.

She gets a delivery of 12 items (2 twos and 1 three).
The 2s: she has a pair — needs 1 more.
The 3s: she has one — needs 2 more.
She orders 1 two and 2 threes = 2 × 9 = 18 more items.
Now she has 12 + 18 = 30... wait, let's check: 12 × 18 = 216 = 6³ ✓

Her triplets are complete!`,
    bridgeQuestions: [
      {
        text: 'Is 8 a perfect cube? (8 = 2³)',
        answer: 'Yes',
        hint: '2 appears 3 times. 3 is a multiple of 3. Every prime in triplets ✓.',
        check: a => /yes/i.test(a)
      },
      {
        text: 'What smallest number must 4 (= 2²) be multiplied by to make a perfect cube?',
        answer: '2',
        hint: '2 appears twice (remainder 2 when divided by 3). Need 1 more 2. Multiply by 2.',
        check: a => a.trim() === '2'
      }
    ]
  },

  // ── SUBTOPIC 5 ─────────────────────────────────────────────────

  c5_1: {
    title: 'Let\'s try a different way — Cube Root as Reverse Cubing',
    explanation: `Just like square root undoes squaring, cube root undoes cubing.

Cubing: 4³ = 64 (input 4, output 64)
Cube root undoes it: ∛64 = 4 (input 64, output 4)

<strong>For negative numbers:</strong>
Cubing: (−4)³ = −64
Cube root undoes it: ∛(−64) = −4

The key insight: cube root is honest about signs. If you cube a negative, you get a negative. The cube root restores it.

<strong>Simple lookup — memorise these:</strong>
∛1=1, ∛8=2, ∛27=3, ∛64=4, ∛125=5, ∛216=6, ∛343=7, ∛512=8, ∛729=9, ∛1000=10`,
    story: `Raj thinks of cube root as a "time machine." If cubing takes a number forward in time (4 → 64), then cube root takes it back (64 → 4).

The time machine works perfectly even for negative numbers! If −4 went forward to −64, then −64 goes back to −4. The sign is never lost in the journey.

He practises: ∛512 → goes back → 8. ∛(−125) → goes back → −5. Cube roots always return you to where you started.`,
    bridgeQuestions: [
      {
        text: 'Find ∛8.',
        answer: '2',
        hint: '2 × 2 × 2 = 8. So ∛8 = 2.',
        check: a => a.trim() === '2'
      },
      {
        text: 'Find ∛(−27).',
        answer: '-3',
        hint: '∛27 = 3. Since input is negative, ∛(−27) = −3.',
        check: a => a.trim() === '-3' || a.trim() === '−3'
      }
    ]
  },

  c5_2: {
    title: 'Let\'s try a different way — Triplets for Cube Roots',
    explanation: `Square root uses PAIRS. Cube root uses TRIPLETS.

If you learned prime factorisation for square roots, this is the same idea — just with groups of 3 instead of groups of 2.

<strong>Easy 4-step process:</strong>
1. Factorise the number.
2. Circle groups of 3 identical primes.
3. Take ONE prime from each circled group.
4. Multiply your choices.

<strong>With a small number first: ∛216</strong>
216 = 2 × 2 × 2 × 3 × 3 × 3
= (2, 2, 2) and (3, 3, 3)
Take one 2 and one 3: 2 × 3 = 6.
∛216 = 6 ✓`,
    story: `The "team captain" rule: arrange all prime factors into teams of 3. Each team elects one captain. The cube root is the product of all team captains.

216's team captains: captain of Team 2 (the three 2s) = 2. Captain of Team 3 (the three 3s) = 3.
Product of captains: 2 × 3 = 6 = ∛216.

If any prime doesn't have a full team of 3, the number isn't a perfect cube.`,
    bridgeQuestions: [
      {
        text: 'Find ∛27 using prime factorisation. (27 = 3³)',
        answer: '3',
        hint: '27 = 3 × 3 × 3. One triplet of 3s. Take one 3. ∛27 = 3.',
        check: a => a.trim() === '3'
      },
      {
        text: 'Find ∛64 using prime factorisation. (64 = 2⁶)',
        answer: '4',
        hint: '64 = 2⁶ = (2,2,2)(2,2,2). Two triplets. Take one from each: 2 × 2 = 4.',
        check: a => a.trim() === '4'
      }
    ]
  },

  c5_3: {
    title: 'Let\'s try a different way — Cube Root in Real Life',
    explanation: `Cube roots are the "edge finder" for 3D boxes.

<strong>The one formula you need:</strong>
If Volume = V, then Edge = ∛V.

That is literally all the maths. The challenge in word problems is translating the words into this formula.

<strong>Common translations:</strong>
"cubic container holds V litres" → edge = ∛V dm
"cube-shaped room has volume V m³" → side = ∛V
"cube has edge e" → volume = e³

<strong>Always check your units!</strong>
1000 litres = 1 m³ = 1000 dm³`,
    story: `An architect is designing a cubic meditation room. The blueprint says "volume = 343 m³." She needs the side length for the construction team.

Side = ∛343 = 7 m. (She knows 7³ = 343 from her cube table.)

She marks: 7 m wide, 7 m deep, 7 m tall. When built, the room is a perfect cube — peaceful and mathematically precise. The cube root turned a volume into a measurement she could actually use.`,
    bridgeQuestions: [
      {
        text: 'A cube has volume 27 cm³. What is the edge length?',
        answer: '3',
        hint: 'Edge = ∛27 = 3 cm (since 3³ = 27).',
        check: a => a.trim() === '3'
      },
      {
        text: 'A cube has volume 125 m³. What is the edge length?',
        answer: '5',
        hint: 'Edge = ∛125 = 5 m (since 5³ = 125).',
        check: a => a.trim() === '5'
      }
    ]
  },

  c6_1: {
    title: 'Let\'s try a different way — Volume Gives the Edge',
    explanation: `For cube problems, keep the workflow extremely short.

<strong>Step 1:</strong> If volume is given, find the edge with cube root.
<strong>Step 2:</strong> If needed, use that edge in another formula.

For a cube:
Volume = edge³
Edge = ∛Volume
Surface area = 6 × edge²

So if volume = 2744 cm³:
Edge = ∛2744 = 14 cm
Surface area = 6 × 14² = 6 × 196 = 1176 cm²

One cube root first, then everything else becomes ordinary multiplication.`,
    story: `Riya is wrapping a cube-shaped gift box, but the factory only printed its volume on the label: 216 cm³.

She first finds the edge: ∛216 = 6 cm. Now she actually knows the box size.

If she wants ribbon around one face, she can work with 6 cm. If she wants wrapping paper for all faces, she uses 6 × 6². The cube root translated a hidden 3D size into a usable edge length.`,
    bridgeQuestions: [
      {
        text: 'A cube has volume 64 cm³. What is its edge length?',
        answer: '4',
        hint: 'Edge = ∛64 = 4 cm.',
        check: a => a.trim() === '4'
      },
      {
        text: 'A cube has edge 5 cm. What is its surface area?',
        answer: '150',
        hint: 'Surface area = 6 × edge² = 6 × 25 = 150 cm².',
        check: a => a.trim() === '150'
      }
    ]
  },

  c6_2: {
    title: 'Let\'s try a different way — Add the Volumes First',
    explanation: `When cubes are combined, melted, or recast, do not compare edges first. <strong>Add or subtract volumes first.</strong>

Each cube's volume = edge³.
After combining:
New volume = sum of volumes
New edge = ∛(new volume)

Example:
Cube A edge = 3 cm → volume = 27
Cube B edge = 4 cm → volume = 64
Combined volume = 27 + 64 = 91

If the result must again be a cube, take ∛91. If the total volume is a perfect cube, the new edge will be a whole number.`,
    story: `Kabir melts two small wax cubes to make one larger cube. He almost adds the edges: 3 + 4 = 7. But that would be wrong because edge is length, while melting combines <strong>volume</strong>.

So he does it properly:
3 cm cube → 27 cm³
4 cm cube → 64 cm³
Total = 91 cm³

Now he asks the correct question: what edge has volume 91 cm³? That means he needs the cube root of 91, not the sum of the edges.`,
    bridgeQuestions: [
      {
        text: 'Two cubes have edges 2 cm and 3 cm. What is their total volume?',
        answer: '35',
        hint: '2³ = 8 and 3³ = 27. Total volume = 8 + 27 = 35 cm³.',
        check: a => a.trim() === '35'
      },
      {
        text: 'A new cube has volume 216 cm³ after recasting. What is its edge?',
        answer: '6',
        hint: 'Edge = ∛216 = 6 cm.',
        check: a => a.trim() === '6'
      }
    ]
  },

  c6_3: {
    title: 'Let\'s try a different way — Spot the Cube Clue',
    explanation: `Most word problems become easy once you identify the cube clue.

Look for words like:
<strong>cube-shaped</strong>, <strong>cubical</strong>, <strong>equal length, width, and height</strong>, <strong>stacked into one cube</strong>.

Then ask:
1. Am I given the edge? If yes, cube it.
2. Am I given the volume? If yes, take the cube root.
3. Am I combining cubes? If yes, add volumes before taking cube root.

That is the full decision tree.`,
    story: `Mina reads a question: "512 identical small cubes are stacked into one large cube." She ignores the long sentence and only keeps the important clue: stacked into one cube.

That means 512 = edge³.
So edge = ∛512 = 8.

She answers in seconds because she trained herself to spot the cube clue before doing any arithmetic.`,
    bridgeQuestions: [
      {
        text: '343 small cubes form one large cube. How many cubes are along one edge?',
        answer: '7',
        hint: 'Edge count = ∛343 = 7.',
        check: a => a.trim() === '7'
      },
      {
        text: 'A cube has edge 10 cm. What is its volume?',
        answer: '1000',
        hint: 'Volume = 10³ = 1000 cm³.',
        check: a => a.trim() === '1000'
      }
    ]
  }
};
