export const BANK = [
  { q: 'Which of the following is Renata PLC’s brand of Hydroxyurea capsules?',
    o: ['Ledomide', 'Hemova', 'Tyrokin', 'Niloren'], a: 1 },
  { q: 'Which of the following is the only bioequivalent Imatinib brand in Bangladesh?',
    o: ['Dasaren', 'Niloren', 'Tyrokin', 'Venclaxta'], a: 2 },
  { q: 'Which of the following strengths is R-Pag available in?',
    o: ['50 mg', '25 mg', '12.5 mg', 'All of the above'], a: 3 },
  { q: 'Which of the following Renata PLC brands has successfully met the f₂ similarity with Revolade in comparative dissolution testing?',
    o: ['Tyrokin', 'R-Pag', 'Ledomide', 'Dasaren'], a: 1 },
];

export const TOTAL = 3;

export const BRANDS = [
  ['Rosimer', '#7a3a8f'], ['Tyrokin', '#ef2b3a'], ['Sofenib', '#1a7f88'],
  ['Pazoren', '#00b4b0'], ['Paltab', '#a878c8'], ['R-Pag', '#ee2a2a'],
];

export const shuffle = (a) => {
  a = [...a];
  for (let i = a.length - 1; i > 0; i--) { const j = (Math.random() * (i + 1)) | 0; [a[i], a[j]] = [a[j], a[i]]; }
  return a;
};
