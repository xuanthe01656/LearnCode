export const LEARNER_GROUPS = [
  {
    id: "student",
    i18nKey: "learnerGroups.student",
    gradeRequired: true,
  },
  {
    id: "beginner",
    i18nKey: "learnerGroups.beginner",
    gradeRequired: false,
  },
  {
    id: "working-adult",
    i18nKey: "learnerGroups.workingAdult",
    gradeRequired: false,
  },
  {
    id: "career-switcher",
    i18nKey: "learnerGroups.careerSwitcher",
    gradeRequired: false,
  },
];

export const QUESTION_CATEGORIES = [
  "pattern",
  "logic",
  "condition",
  "algorithm",
  "decomposition",
  "system-thinking",
  "data-reasoning",
  "debugging-mindset",
];

export const PLACEMENT_CATEGORIES = [
  "input-output",
  "variable",
  "condition",
  "loop",
  "data-type",
  "list",
  "function",
  "debugging",
  "algorithm",
  "problem-solving",
  "file-data",
  "automation",
  "data-reasoning",
  "code-reading",
  "readiness",
];

export const THINKING_TEST_QUESTIONS = [
  {
    "id": "think-student-001",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkStudent001",
    "answerKey": "C",
    "category": "debugging-mindset",
    "difficulty": 1,
    "levelMin": 6,
    "levelMax": 8,
    "targetGroups": [
      "student"
    ],
    "skillTags": [
      "debugging-mindset",
      "student",
      "difficulty-1"
    ]
  },
  {
    "id": "think-student-002",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkStudent002",
    "answerKey": "D",
    "category": "decomposition",
    "difficulty": 1,
    "levelMin": 6,
    "levelMax": 8,
    "targetGroups": [
      "student"
    ],
    "skillTags": [
      "decomposition",
      "student",
      "difficulty-1"
    ]
  },
  {
    "id": "think-student-003",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkStudent003",
    "answerKey": "A",
    "category": "system-thinking",
    "difficulty": 5,
    "levelMin": 11,
    "levelMax": 12,
    "targetGroups": [
      "student"
    ],
    "skillTags": [
      "system-thinking",
      "student",
      "difficulty-5"
    ]
  },
  {
    "id": "think-student-004",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkStudent004",
    "answerKey": "D",
    "category": "decomposition",
    "difficulty": 3,
    "levelMin": 8,
    "levelMax": 10,
    "targetGroups": [
      "student"
    ],
    "skillTags": [
      "decomposition",
      "student",
      "difficulty-3"
    ]
  },
  {
    "id": "think-student-005",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkStudent005",
    "answerKey": "A",
    "category": "algorithm",
    "difficulty": 3,
    "levelMin": 10,
    "levelMax": 12,
    "targetGroups": [
      "student"
    ],
    "skillTags": [
      "algorithm",
      "student",
      "difficulty-3"
    ]
  },
  {
    "id": "think-student-006",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkStudent006",
    "answerKey": "D",
    "category": "logic",
    "difficulty": 5,
    "levelMin": 11,
    "levelMax": 12,
    "targetGroups": [
      "student"
    ],
    "skillTags": [
      "logic",
      "student",
      "difficulty-5"
    ]
  },
  {
    "id": "think-student-007",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkStudent007",
    "answerKey": "D",
    "category": "logic",
    "difficulty": 4,
    "levelMin": 9,
    "levelMax": 12,
    "targetGroups": [
      "student"
    ],
    "skillTags": [
      "logic",
      "student",
      "difficulty-4"
    ]
  },
  {
    "id": "think-student-008",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkStudent008",
    "answerKey": "C",
    "category": "debugging-mindset",
    "difficulty": 2,
    "levelMin": 6,
    "levelMax": 9,
    "targetGroups": [
      "student"
    ],
    "skillTags": [
      "debugging-mindset",
      "student",
      "difficulty-2"
    ]
  },
  {
    "id": "think-student-009",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkStudent009",
    "answerKey": "B",
    "category": "algorithm",
    "difficulty": 4,
    "levelMin": 9,
    "levelMax": 12,
    "targetGroups": [
      "student"
    ],
    "skillTags": [
      "algorithm",
      "student",
      "difficulty-4"
    ]
  },
  {
    "id": "think-student-010",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkStudent010",
    "answerKey": "D",
    "category": "condition",
    "difficulty": 1,
    "levelMin": 6,
    "levelMax": 8,
    "targetGroups": [
      "student"
    ],
    "skillTags": [
      "condition",
      "student",
      "difficulty-1",
      "visual-reasoning"
    ]
  },
  {
    "id": "think-student-011",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkStudent011",
    "answerKey": "B",
    "category": "system-thinking",
    "difficulty": 2,
    "levelMin": 8,
    "levelMax": 10,
    "targetGroups": [
      "student"
    ],
    "skillTags": [
      "system-thinking",
      "student",
      "difficulty-2"
    ]
  },
  {
    "id": "think-student-012",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkStudent012",
    "answerKey": "C",
    "category": "debugging-mindset",
    "difficulty": 2,
    "levelMin": 6,
    "levelMax": 9,
    "targetGroups": [
      "student"
    ],
    "skillTags": [
      "debugging-mindset",
      "student",
      "difficulty-2"
    ]
  },
  {
    "id": "think-student-013",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkStudent013",
    "answerKey": "B",
    "category": "condition",
    "difficulty": 4,
    "levelMin": 9,
    "levelMax": 12,
    "targetGroups": [
      "student"
    ],
    "skillTags": [
      "condition",
      "student",
      "difficulty-4"
    ]
  },
  {
    "id": "think-student-014",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkStudent014",
    "answerKey": "B",
    "category": "logic",
    "difficulty": 3,
    "levelMin": 10,
    "levelMax": 12,
    "targetGroups": [
      "student"
    ],
    "skillTags": [
      "logic",
      "student",
      "difficulty-3"
    ]
  },
  {
    "id": "think-student-015",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkStudent015",
    "answerKey": "B",
    "category": "condition",
    "difficulty": 2,
    "levelMin": 8,
    "levelMax": 10,
    "targetGroups": [
      "student"
    ],
    "skillTags": [
      "condition",
      "student",
      "difficulty-2"
    ]
  },
  {
    "id": "think-student-016",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkStudent016",
    "answerKey": "B",
    "category": "decomposition",
    "difficulty": 5,
    "levelMin": 11,
    "levelMax": 12,
    "targetGroups": [
      "student"
    ],
    "skillTags": [
      "decomposition",
      "student",
      "difficulty-5"
    ]
  },
  {
    "id": "think-student-017",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkStudent017",
    "answerKey": "C",
    "category": "logic",
    "difficulty": 1,
    "levelMin": 6,
    "levelMax": 8,
    "targetGroups": [
      "student"
    ],
    "skillTags": [
      "logic",
      "student",
      "difficulty-1"
    ]
  },
  {
    "id": "think-student-018",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkStudent018",
    "answerKey": "D",
    "category": "data-reasoning",
    "difficulty": 1,
    "levelMin": 6,
    "levelMax": 8,
    "targetGroups": [
      "student"
    ],
    "skillTags": [
      "data-reasoning",
      "student",
      "difficulty-1"
    ]
  },
  {
    "id": "think-student-019",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkStudent019",
    "answerKey": "A",
    "category": "debugging-mindset",
    "difficulty": 1,
    "levelMin": 6,
    "levelMax": 8,
    "targetGroups": [
      "student"
    ],
    "skillTags": [
      "debugging-mindset",
      "student",
      "difficulty-1"
    ]
  },
  {
    "id": "think-student-020",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkStudent020",
    "answerKey": "D",
    "category": "debugging-mindset",
    "difficulty": 3,
    "levelMin": 10,
    "levelMax": 12,
    "targetGroups": [
      "student"
    ],
    "skillTags": [
      "debugging-mindset",
      "student",
      "difficulty-3",
      "visual-reasoning"
    ]
  },
  {
    "id": "think-student-021",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkStudent021",
    "answerKey": "D",
    "category": "pattern",
    "difficulty": 2,
    "levelMin": 8,
    "levelMax": 10,
    "targetGroups": [
      "student"
    ],
    "skillTags": [
      "pattern",
      "student",
      "difficulty-2"
    ]
  },
  {
    "id": "think-student-022",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkStudent022",
    "answerKey": "B",
    "category": "debugging-mindset",
    "difficulty": 3,
    "levelMin": 8,
    "levelMax": 10,
    "targetGroups": [
      "student"
    ],
    "skillTags": [
      "debugging-mindset",
      "student",
      "difficulty-3"
    ]
  },
  {
    "id": "think-student-023",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkStudent023",
    "answerKey": "A",
    "category": "logic",
    "difficulty": 1,
    "levelMin": 6,
    "levelMax": 8,
    "targetGroups": [
      "student"
    ],
    "skillTags": [
      "logic",
      "student",
      "difficulty-1"
    ]
  },
  {
    "id": "think-student-024",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkStudent024",
    "answerKey": "B",
    "category": "debugging-mindset",
    "difficulty": 1,
    "levelMin": 6,
    "levelMax": 8,
    "targetGroups": [
      "student"
    ],
    "skillTags": [
      "debugging-mindset",
      "student",
      "difficulty-1"
    ]
  },
  {
    "id": "think-student-025",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkStudent025",
    "answerKey": "B",
    "category": "pattern",
    "difficulty": 4,
    "levelMin": 9,
    "levelMax": 12,
    "targetGroups": [
      "student"
    ],
    "skillTags": [
      "pattern",
      "student",
      "difficulty-4"
    ]
  },
  {
    "id": "think-student-026",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkStudent026",
    "answerKey": "C",
    "category": "logic",
    "difficulty": 4,
    "levelMin": 9,
    "levelMax": 12,
    "targetGroups": [
      "student"
    ],
    "skillTags": [
      "logic",
      "student",
      "difficulty-4"
    ]
  },
  {
    "id": "think-student-027",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkStudent027",
    "answerKey": "A",
    "category": "system-thinking",
    "difficulty": 1,
    "levelMin": 6,
    "levelMax": 8,
    "targetGroups": [
      "student"
    ],
    "skillTags": [
      "system-thinking",
      "student",
      "difficulty-1"
    ]
  },
  {
    "id": "think-student-028",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkStudent028",
    "answerKey": "B",
    "category": "condition",
    "difficulty": 1,
    "levelMin": 6,
    "levelMax": 8,
    "targetGroups": [
      "student"
    ],
    "skillTags": [
      "condition",
      "student",
      "difficulty-1"
    ]
  },
  {
    "id": "think-student-029",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkStudent029",
    "answerKey": "C",
    "category": "pattern",
    "difficulty": 1,
    "levelMin": 6,
    "levelMax": 8,
    "targetGroups": [
      "student"
    ],
    "skillTags": [
      "pattern",
      "student",
      "difficulty-1"
    ]
  },
  {
    "id": "think-student-030",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkStudent030",
    "answerKey": "D",
    "category": "pattern",
    "difficulty": 5,
    "levelMin": 11,
    "levelMax": 12,
    "targetGroups": [
      "student"
    ],
    "skillTags": [
      "pattern",
      "student",
      "difficulty-5",
      "visual-reasoning"
    ]
  },
  {
    "id": "think-student-031",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkStudent031",
    "answerKey": "C",
    "category": "debugging-mindset",
    "difficulty": 3,
    "levelMin": 8,
    "levelMax": 10,
    "targetGroups": [
      "student"
    ],
    "skillTags": [
      "debugging-mindset",
      "student",
      "difficulty-3"
    ]
  },
  {
    "id": "think-student-032",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkStudent032",
    "answerKey": "B",
    "category": "data-reasoning",
    "difficulty": 5,
    "levelMin": 11,
    "levelMax": 12,
    "targetGroups": [
      "student"
    ],
    "skillTags": [
      "data-reasoning",
      "student",
      "difficulty-5"
    ]
  },
  {
    "id": "think-student-033",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkStudent033",
    "answerKey": "A",
    "category": "pattern",
    "difficulty": 3,
    "levelMin": 6,
    "levelMax": 8,
    "targetGroups": [
      "student"
    ],
    "skillTags": [
      "pattern",
      "student",
      "difficulty-3"
    ]
  },
  {
    "id": "think-student-034",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkStudent034",
    "answerKey": "C",
    "category": "decomposition",
    "difficulty": 4,
    "levelMin": 9,
    "levelMax": 12,
    "targetGroups": [
      "student"
    ],
    "skillTags": [
      "decomposition",
      "student",
      "difficulty-4"
    ]
  },
  {
    "id": "think-student-035",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkStudent035",
    "answerKey": "A",
    "category": "pattern",
    "difficulty": 1,
    "levelMin": 6,
    "levelMax": 8,
    "targetGroups": [
      "student"
    ],
    "skillTags": [
      "pattern",
      "student",
      "difficulty-1"
    ]
  },
  {
    "id": "think-student-036",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkStudent036",
    "answerKey": "D",
    "category": "system-thinking",
    "difficulty": 3,
    "levelMin": 6,
    "levelMax": 8,
    "targetGroups": [
      "student"
    ],
    "skillTags": [
      "system-thinking",
      "student",
      "difficulty-3"
    ]
  },
  {
    "id": "think-student-037",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkStudent037",
    "answerKey": "A",
    "category": "system-thinking",
    "difficulty": 3,
    "levelMin": 8,
    "levelMax": 10,
    "targetGroups": [
      "student"
    ],
    "skillTags": [
      "system-thinking",
      "student",
      "difficulty-3"
    ]
  },
  {
    "id": "think-student-038",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkStudent038",
    "answerKey": "B",
    "category": "algorithm",
    "difficulty": 3,
    "levelMin": 10,
    "levelMax": 12,
    "targetGroups": [
      "student"
    ],
    "skillTags": [
      "algorithm",
      "student",
      "difficulty-3"
    ]
  },
  {
    "id": "think-student-039",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkStudent039",
    "answerKey": "C",
    "category": "condition",
    "difficulty": 3,
    "levelMin": 6,
    "levelMax": 8,
    "targetGroups": [
      "student"
    ],
    "skillTags": [
      "condition",
      "student",
      "difficulty-3"
    ]
  },
  {
    "id": "think-student-040",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkStudent040",
    "answerKey": "A",
    "category": "debugging-mindset",
    "difficulty": 4,
    "levelMin": 9,
    "levelMax": 12,
    "targetGroups": [
      "student"
    ],
    "skillTags": [
      "debugging-mindset",
      "student",
      "difficulty-4",
      "visual-reasoning"
    ]
  },
  {
    "id": "think-student-041",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkStudent041",
    "answerKey": "C",
    "category": "logic",
    "difficulty": 1,
    "levelMin": 6,
    "levelMax": 8,
    "targetGroups": [
      "student"
    ],
    "skillTags": [
      "logic",
      "student",
      "difficulty-1"
    ]
  },
  {
    "id": "think-student-042",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkStudent042",
    "answerKey": "C",
    "category": "condition",
    "difficulty": 4,
    "levelMin": 9,
    "levelMax": 12,
    "targetGroups": [
      "student"
    ],
    "skillTags": [
      "condition",
      "student",
      "difficulty-4"
    ]
  },
  {
    "id": "think-student-043",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkStudent043",
    "answerKey": "A",
    "category": "system-thinking",
    "difficulty": 1,
    "levelMin": 6,
    "levelMax": 8,
    "targetGroups": [
      "student"
    ],
    "skillTags": [
      "system-thinking",
      "student",
      "difficulty-1"
    ]
  },
  {
    "id": "think-student-044",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkStudent044",
    "answerKey": "C",
    "category": "decomposition",
    "difficulty": 2,
    "levelMin": 6,
    "levelMax": 9,
    "targetGroups": [
      "student"
    ],
    "skillTags": [
      "decomposition",
      "student",
      "difficulty-2"
    ]
  },
  {
    "id": "think-student-045",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkStudent045",
    "answerKey": "C",
    "category": "system-thinking",
    "difficulty": 1,
    "levelMin": 6,
    "levelMax": 8,
    "targetGroups": [
      "student"
    ],
    "skillTags": [
      "system-thinking",
      "student",
      "difficulty-1"
    ]
  },
  {
    "id": "think-student-046",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkStudent046",
    "answerKey": "A",
    "category": "logic",
    "difficulty": 2,
    "levelMin": 6,
    "levelMax": 9,
    "targetGroups": [
      "student"
    ],
    "skillTags": [
      "logic",
      "student",
      "difficulty-2"
    ]
  },
  {
    "id": "think-student-047",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkStudent047",
    "answerKey": "B",
    "category": "condition",
    "difficulty": 2,
    "levelMin": 8,
    "levelMax": 10,
    "targetGroups": [
      "student"
    ],
    "skillTags": [
      "condition",
      "student",
      "difficulty-2"
    ]
  },
  {
    "id": "think-student-048",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkStudent048",
    "answerKey": "A",
    "category": "decomposition",
    "difficulty": 4,
    "levelMin": 9,
    "levelMax": 12,
    "targetGroups": [
      "student"
    ],
    "skillTags": [
      "decomposition",
      "student",
      "difficulty-4"
    ]
  },
  {
    "id": "think-student-049",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkStudent049",
    "answerKey": "D",
    "category": "pattern",
    "difficulty": 2,
    "levelMin": 8,
    "levelMax": 10,
    "targetGroups": [
      "student"
    ],
    "skillTags": [
      "pattern",
      "student",
      "difficulty-2"
    ]
  },
  {
    "id": "think-student-050",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkStudent050",
    "answerKey": "D",
    "category": "data-reasoning",
    "difficulty": 1,
    "levelMin": 6,
    "levelMax": 8,
    "targetGroups": [
      "student"
    ],
    "skillTags": [
      "data-reasoning",
      "student",
      "difficulty-1",
      "visual-reasoning"
    ]
  },
  {
    "id": "think-student-051",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkStudent051",
    "answerKey": "C",
    "category": "decomposition",
    "difficulty": 3,
    "levelMin": 6,
    "levelMax": 8,
    "targetGroups": [
      "student"
    ],
    "skillTags": [
      "decomposition",
      "student",
      "difficulty-3"
    ]
  },
  {
    "id": "think-student-052",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkStudent052",
    "answerKey": "A",
    "category": "data-reasoning",
    "difficulty": 4,
    "levelMin": 9,
    "levelMax": 12,
    "targetGroups": [
      "student"
    ],
    "skillTags": [
      "data-reasoning",
      "student",
      "difficulty-4"
    ]
  },
  {
    "id": "think-student-053",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkStudent053",
    "answerKey": "A",
    "category": "condition",
    "difficulty": 3,
    "levelMin": 10,
    "levelMax": 12,
    "targetGroups": [
      "student"
    ],
    "skillTags": [
      "condition",
      "student",
      "difficulty-3"
    ]
  },
  {
    "id": "think-student-054",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkStudent054",
    "answerKey": "B",
    "category": "decomposition",
    "difficulty": 3,
    "levelMin": 6,
    "levelMax": 8,
    "targetGroups": [
      "student"
    ],
    "skillTags": [
      "decomposition",
      "student",
      "difficulty-3"
    ]
  },
  {
    "id": "think-student-055",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkStudent055",
    "answerKey": "C",
    "category": "logic",
    "difficulty": 3,
    "levelMin": 8,
    "levelMax": 10,
    "targetGroups": [
      "student"
    ],
    "skillTags": [
      "logic",
      "student",
      "difficulty-3"
    ]
  },
  {
    "id": "think-student-056",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkStudent056",
    "answerKey": "C",
    "category": "debugging-mindset",
    "difficulty": 2,
    "levelMin": 6,
    "levelMax": 9,
    "targetGroups": [
      "student"
    ],
    "skillTags": [
      "debugging-mindset",
      "student",
      "difficulty-2"
    ]
  },
  {
    "id": "think-student-057",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkStudent057",
    "answerKey": "B",
    "category": "system-thinking",
    "difficulty": 4,
    "levelMin": 9,
    "levelMax": 12,
    "targetGroups": [
      "student"
    ],
    "skillTags": [
      "system-thinking",
      "student",
      "difficulty-4"
    ]
  },
  {
    "id": "think-student-058",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkStudent058",
    "answerKey": "C",
    "category": "pattern",
    "difficulty": 4,
    "levelMin": 9,
    "levelMax": 12,
    "targetGroups": [
      "student"
    ],
    "skillTags": [
      "pattern",
      "student",
      "difficulty-4"
    ]
  },
  {
    "id": "think-student-059",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkStudent059",
    "answerKey": "A",
    "category": "algorithm",
    "difficulty": 1,
    "levelMin": 6,
    "levelMax": 8,
    "targetGroups": [
      "student"
    ],
    "skillTags": [
      "algorithm",
      "student",
      "difficulty-1"
    ]
  },
  {
    "id": "think-student-060",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkStudent060",
    "answerKey": "D",
    "category": "data-reasoning",
    "difficulty": 3,
    "levelMin": 6,
    "levelMax": 8,
    "targetGroups": [
      "student"
    ],
    "skillTags": [
      "data-reasoning",
      "student",
      "difficulty-3",
      "visual-reasoning"
    ]
  },
  {
    "id": "think-student-061",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkStudent061",
    "answerKey": "D",
    "category": "system-thinking",
    "difficulty": 2,
    "levelMin": 8,
    "levelMax": 10,
    "targetGroups": [
      "student"
    ],
    "skillTags": [
      "system-thinking",
      "student",
      "difficulty-2"
    ]
  },
  {
    "id": "think-student-062",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkStudent062",
    "answerKey": "D",
    "category": "algorithm",
    "difficulty": 1,
    "levelMin": 6,
    "levelMax": 8,
    "targetGroups": [
      "student"
    ],
    "skillTags": [
      "algorithm",
      "student",
      "difficulty-1"
    ]
  },
  {
    "id": "think-student-063",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkStudent063",
    "answerKey": "A",
    "category": "pattern",
    "difficulty": 1,
    "levelMin": 6,
    "levelMax": 8,
    "targetGroups": [
      "student"
    ],
    "skillTags": [
      "pattern",
      "student",
      "difficulty-1"
    ]
  },
  {
    "id": "think-student-064",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkStudent064",
    "answerKey": "B",
    "category": "logic",
    "difficulty": 1,
    "levelMin": 6,
    "levelMax": 8,
    "targetGroups": [
      "student"
    ],
    "skillTags": [
      "logic",
      "student",
      "difficulty-1"
    ]
  },
  {
    "id": "think-student-065",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkStudent065",
    "answerKey": "C",
    "category": "system-thinking",
    "difficulty": 5,
    "levelMin": 11,
    "levelMax": 12,
    "targetGroups": [
      "student"
    ],
    "skillTags": [
      "system-thinking",
      "student",
      "difficulty-5"
    ]
  },
  {
    "id": "think-student-066",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkStudent066",
    "answerKey": "C",
    "category": "debugging-mindset",
    "difficulty": 4,
    "levelMin": 9,
    "levelMax": 12,
    "targetGroups": [
      "student"
    ],
    "skillTags": [
      "debugging-mindset",
      "student",
      "difficulty-4"
    ]
  },
  {
    "id": "think-student-067",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkStudent067",
    "answerKey": "B",
    "category": "decomposition",
    "difficulty": 2,
    "levelMin": 8,
    "levelMax": 10,
    "targetGroups": [
      "student"
    ],
    "skillTags": [
      "decomposition",
      "student",
      "difficulty-2"
    ]
  },
  {
    "id": "think-student-068",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkStudent068",
    "answerKey": "C",
    "category": "algorithm",
    "difficulty": 2,
    "levelMin": 6,
    "levelMax": 9,
    "targetGroups": [
      "student"
    ],
    "skillTags": [
      "algorithm",
      "student",
      "difficulty-2"
    ]
  },
  {
    "id": "think-student-069",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkStudent069",
    "answerKey": "D",
    "category": "condition",
    "difficulty": 2,
    "levelMin": 8,
    "levelMax": 10,
    "targetGroups": [
      "student"
    ],
    "skillTags": [
      "condition",
      "student",
      "difficulty-2"
    ]
  },
  {
    "id": "think-student-070",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkStudent070",
    "answerKey": "B",
    "category": "logic",
    "difficulty": 3,
    "levelMin": 8,
    "levelMax": 10,
    "targetGroups": [
      "student"
    ],
    "skillTags": [
      "logic",
      "student",
      "difficulty-3",
      "visual-reasoning"
    ]
  },
  {
    "id": "think-student-071",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkStudent071",
    "answerKey": "A",
    "category": "decomposition",
    "difficulty": 1,
    "levelMin": 6,
    "levelMax": 8,
    "targetGroups": [
      "student"
    ],
    "skillTags": [
      "decomposition",
      "student",
      "difficulty-1"
    ]
  },
  {
    "id": "think-student-072",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkStudent072",
    "answerKey": "B",
    "category": "algorithm",
    "difficulty": 1,
    "levelMin": 6,
    "levelMax": 8,
    "targetGroups": [
      "student"
    ],
    "skillTags": [
      "algorithm",
      "student",
      "difficulty-1"
    ]
  },
  {
    "id": "think-student-073",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkStudent073",
    "answerKey": "A",
    "category": "system-thinking",
    "difficulty": 3,
    "levelMin": 8,
    "levelMax": 10,
    "targetGroups": [
      "student"
    ],
    "skillTags": [
      "system-thinking",
      "student",
      "difficulty-3"
    ]
  },
  {
    "id": "think-student-074",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkStudent074",
    "answerKey": "B",
    "category": "data-reasoning",
    "difficulty": 3,
    "levelMin": 10,
    "levelMax": 12,
    "targetGroups": [
      "student"
    ],
    "skillTags": [
      "data-reasoning",
      "student",
      "difficulty-3"
    ]
  },
  {
    "id": "think-student-075",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkStudent075",
    "answerKey": "A",
    "category": "decomposition",
    "difficulty": 1,
    "levelMin": 6,
    "levelMax": 8,
    "targetGroups": [
      "student"
    ],
    "skillTags": [
      "decomposition",
      "student",
      "difficulty-1"
    ]
  },
  {
    "id": "think-student-076",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkStudent076",
    "answerKey": "D",
    "category": "pattern",
    "difficulty": 3,
    "levelMin": 8,
    "levelMax": 10,
    "targetGroups": [
      "student"
    ],
    "skillTags": [
      "pattern",
      "student",
      "difficulty-3"
    ]
  },
  {
    "id": "think-student-077",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkStudent077",
    "answerKey": "C",
    "category": "algorithm",
    "difficulty": 5,
    "levelMin": 11,
    "levelMax": 12,
    "targetGroups": [
      "student"
    ],
    "skillTags": [
      "algorithm",
      "student",
      "difficulty-5"
    ]
  },
  {
    "id": "think-student-078",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkStudent078",
    "answerKey": "D",
    "category": "condition",
    "difficulty": 1,
    "levelMin": 6,
    "levelMax": 8,
    "targetGroups": [
      "student"
    ],
    "skillTags": [
      "condition",
      "student",
      "difficulty-1"
    ]
  },
  {
    "id": "think-student-079",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkStudent079",
    "answerKey": "B",
    "category": "algorithm",
    "difficulty": 2,
    "levelMin": 8,
    "levelMax": 10,
    "targetGroups": [
      "student"
    ],
    "skillTags": [
      "algorithm",
      "student",
      "difficulty-2"
    ]
  },
  {
    "id": "think-student-080",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkStudent080",
    "answerKey": "C",
    "category": "logic",
    "difficulty": 2,
    "levelMin": 6,
    "levelMax": 9,
    "targetGroups": [
      "student"
    ],
    "skillTags": [
      "logic",
      "student",
      "difficulty-2",
      "visual-reasoning"
    ]
  },
  {
    "id": "think-student-081",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkStudent081",
    "answerKey": "D",
    "category": "data-reasoning",
    "difficulty": 2,
    "levelMin": 8,
    "levelMax": 10,
    "targetGroups": [
      "student"
    ],
    "skillTags": [
      "data-reasoning",
      "student",
      "difficulty-2"
    ]
  },
  {
    "id": "think-student-082",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkStudent082",
    "answerKey": "D",
    "category": "condition",
    "difficulty": 5,
    "levelMin": 11,
    "levelMax": 12,
    "targetGroups": [
      "student"
    ],
    "skillTags": [
      "condition",
      "student",
      "difficulty-5"
    ]
  },
  {
    "id": "think-student-083",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkStudent083",
    "answerKey": "B",
    "category": "condition",
    "difficulty": 2,
    "levelMin": 8,
    "levelMax": 10,
    "targetGroups": [
      "student"
    ],
    "skillTags": [
      "condition",
      "student",
      "difficulty-2"
    ]
  },
  {
    "id": "think-student-084",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkStudent084",
    "answerKey": "C",
    "category": "system-thinking",
    "difficulty": 2,
    "levelMin": 6,
    "levelMax": 9,
    "targetGroups": [
      "student"
    ],
    "skillTags": [
      "system-thinking",
      "student",
      "difficulty-2"
    ]
  },
  {
    "id": "think-student-085",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkStudent085",
    "answerKey": "A",
    "category": "algorithm",
    "difficulty": 3,
    "levelMin": 8,
    "levelMax": 10,
    "targetGroups": [
      "student"
    ],
    "skillTags": [
      "algorithm",
      "student",
      "difficulty-3"
    ]
  },
  {
    "id": "think-student-086",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkStudent086",
    "answerKey": "A",
    "category": "data-reasoning",
    "difficulty": 2,
    "levelMin": 6,
    "levelMax": 9,
    "targetGroups": [
      "student"
    ],
    "skillTags": [
      "data-reasoning",
      "student",
      "difficulty-2"
    ]
  },
  {
    "id": "think-student-087",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkStudent087",
    "answerKey": "B",
    "category": "pattern",
    "difficulty": 2,
    "levelMin": 8,
    "levelMax": 10,
    "targetGroups": [
      "student"
    ],
    "skillTags": [
      "pattern",
      "student",
      "difficulty-2"
    ]
  },
  {
    "id": "think-student-088",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkStudent088",
    "answerKey": "C",
    "category": "data-reasoning",
    "difficulty": 2,
    "levelMin": 6,
    "levelMax": 9,
    "targetGroups": [
      "student"
    ],
    "skillTags": [
      "data-reasoning",
      "student",
      "difficulty-2"
    ]
  },
  {
    "id": "think-student-089",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkStudent089",
    "answerKey": "A",
    "category": "pattern",
    "difficulty": 3,
    "levelMin": 10,
    "levelMax": 12,
    "targetGroups": [
      "student"
    ],
    "skillTags": [
      "pattern",
      "student",
      "difficulty-3"
    ]
  },
  {
    "id": "think-student-090",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkStudent090",
    "answerKey": "D",
    "category": "debugging-mindset",
    "difficulty": 5,
    "levelMin": 11,
    "levelMax": 12,
    "targetGroups": [
      "student"
    ],
    "skillTags": [
      "debugging-mindset",
      "student",
      "difficulty-5",
      "visual-reasoning"
    ]
  },
  {
    "id": "think-student-091",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkStudent091",
    "answerKey": "D",
    "category": "data-reasoning",
    "difficulty": 4,
    "levelMin": 9,
    "levelMax": 12,
    "targetGroups": [
      "student"
    ],
    "skillTags": [
      "data-reasoning",
      "student",
      "difficulty-4"
    ]
  },
  {
    "id": "think-student-092",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkStudent092",
    "answerKey": "C",
    "category": "algorithm",
    "difficulty": 2,
    "levelMin": 6,
    "levelMax": 9,
    "targetGroups": [
      "student"
    ],
    "skillTags": [
      "algorithm",
      "student",
      "difficulty-2"
    ]
  },
  {
    "id": "think-student-093",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkStudent093",
    "answerKey": "D",
    "category": "logic",
    "difficulty": 2,
    "levelMin": 8,
    "levelMax": 10,
    "targetGroups": [
      "student"
    ],
    "skillTags": [
      "logic",
      "student",
      "difficulty-2"
    ]
  },
  {
    "id": "think-student-094",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkStudent094",
    "answerKey": "D",
    "category": "data-reasoning",
    "difficulty": 1,
    "levelMin": 6,
    "levelMax": 8,
    "targetGroups": [
      "student"
    ],
    "skillTags": [
      "data-reasoning",
      "student",
      "difficulty-1"
    ]
  },
  {
    "id": "think-student-095",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkStudent095",
    "answerKey": "C",
    "category": "algorithm",
    "difficulty": 3,
    "levelMin": 10,
    "levelMax": 12,
    "targetGroups": [
      "student"
    ],
    "skillTags": [
      "algorithm",
      "student",
      "difficulty-3"
    ]
  },
  {
    "id": "think-student-096",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkStudent096",
    "answerKey": "D",
    "category": "condition",
    "difficulty": 3,
    "levelMin": 6,
    "levelMax": 8,
    "targetGroups": [
      "student"
    ],
    "skillTags": [
      "condition",
      "student",
      "difficulty-3"
    ]
  },
  {
    "id": "think-student-097",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkStudent097",
    "answerKey": "D",
    "category": "decomposition",
    "difficulty": 2,
    "levelMin": 8,
    "levelMax": 10,
    "targetGroups": [
      "student"
    ],
    "skillTags": [
      "decomposition",
      "student",
      "difficulty-2"
    ]
  },
  {
    "id": "think-student-098",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkStudent098",
    "answerKey": "D",
    "category": "data-reasoning",
    "difficulty": 5,
    "levelMin": 11,
    "levelMax": 12,
    "targetGroups": [
      "student"
    ],
    "skillTags": [
      "data-reasoning",
      "student",
      "difficulty-5"
    ]
  },
  {
    "id": "think-student-099",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkStudent099",
    "answerKey": "C",
    "category": "data-reasoning",
    "difficulty": 3,
    "levelMin": 6,
    "levelMax": 8,
    "targetGroups": [
      "student"
    ],
    "skillTags": [
      "data-reasoning",
      "student",
      "difficulty-3"
    ]
  },
  {
    "id": "think-student-100",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkStudent100",
    "answerKey": "A",
    "category": "system-thinking",
    "difficulty": 4,
    "levelMin": 9,
    "levelMax": 12,
    "targetGroups": [
      "student"
    ],
    "skillTags": [
      "system-thinking",
      "student",
      "difficulty-4",
      "visual-reasoning"
    ]
  },
  {
    "id": "think-beginner-001",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkBeginner001",
    "answerKey": "A",
    "category": "condition",
    "difficulty": 1,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "beginner"
    ],
    "skillTags": [
      "condition",
      "beginner",
      "difficulty-1"
    ]
  },
  {
    "id": "think-beginner-002",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkBeginner002",
    "answerKey": "B",
    "category": "debugging-mindset",
    "difficulty": 1,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "beginner"
    ],
    "skillTags": [
      "debugging-mindset",
      "beginner",
      "difficulty-1"
    ]
  },
  {
    "id": "think-beginner-003",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkBeginner003",
    "answerKey": "A",
    "category": "pattern",
    "difficulty": 3,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "beginner"
    ],
    "skillTags": [
      "pattern",
      "beginner",
      "difficulty-3"
    ]
  },
  {
    "id": "think-beginner-004",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkBeginner004",
    "answerKey": "A",
    "category": "logic",
    "difficulty": 2,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "beginner"
    ],
    "skillTags": [
      "logic",
      "beginner",
      "difficulty-2"
    ]
  },
  {
    "id": "think-beginner-005",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkBeginner005",
    "answerKey": "A",
    "category": "data-reasoning",
    "difficulty": 1,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "beginner"
    ],
    "skillTags": [
      "data-reasoning",
      "beginner",
      "difficulty-1"
    ]
  },
  {
    "id": "think-beginner-006",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkBeginner006",
    "answerKey": "C",
    "category": "system-thinking",
    "difficulty": 2,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "beginner"
    ],
    "skillTags": [
      "system-thinking",
      "beginner",
      "difficulty-2"
    ]
  },
  {
    "id": "think-beginner-007",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkBeginner007",
    "answerKey": "C",
    "category": "system-thinking",
    "difficulty": 1,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "beginner"
    ],
    "skillTags": [
      "system-thinking",
      "beginner",
      "difficulty-1"
    ]
  },
  {
    "id": "think-beginner-008",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkBeginner008",
    "answerKey": "A",
    "category": "decomposition",
    "difficulty": 2,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "beginner"
    ],
    "skillTags": [
      "decomposition",
      "beginner",
      "difficulty-2"
    ]
  },
  {
    "id": "think-beginner-009",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkBeginner009",
    "answerKey": "A",
    "category": "decomposition",
    "difficulty": 1,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "beginner"
    ],
    "skillTags": [
      "decomposition",
      "beginner",
      "difficulty-1"
    ]
  },
  {
    "id": "think-beginner-010",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkBeginner010",
    "answerKey": "D",
    "category": "pattern",
    "difficulty": 3,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "beginner"
    ],
    "skillTags": [
      "pattern",
      "beginner",
      "difficulty-3",
      "visual-reasoning"
    ]
  },
  {
    "id": "think-beginner-011",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkBeginner011",
    "answerKey": "D",
    "category": "decomposition",
    "difficulty": 2,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "beginner"
    ],
    "skillTags": [
      "decomposition",
      "beginner",
      "difficulty-2"
    ]
  },
  {
    "id": "think-beginner-012",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkBeginner012",
    "answerKey": "D",
    "category": "logic",
    "difficulty": 1,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "beginner"
    ],
    "skillTags": [
      "logic",
      "beginner",
      "difficulty-1"
    ]
  },
  {
    "id": "think-beginner-013",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkBeginner013",
    "answerKey": "A",
    "category": "logic",
    "difficulty": 1,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "beginner"
    ],
    "skillTags": [
      "logic",
      "beginner",
      "difficulty-1"
    ]
  },
  {
    "id": "think-beginner-014",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkBeginner014",
    "answerKey": "C",
    "category": "pattern",
    "difficulty": 2,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "beginner"
    ],
    "skillTags": [
      "pattern",
      "beginner",
      "difficulty-2"
    ]
  },
  {
    "id": "think-beginner-015",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkBeginner015",
    "answerKey": "C",
    "category": "system-thinking",
    "difficulty": 1,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "beginner"
    ],
    "skillTags": [
      "system-thinking",
      "beginner",
      "difficulty-1"
    ]
  },
  {
    "id": "think-beginner-016",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkBeginner016",
    "answerKey": "A",
    "category": "data-reasoning",
    "difficulty": 2,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "beginner"
    ],
    "skillTags": [
      "data-reasoning",
      "beginner",
      "difficulty-2"
    ]
  },
  {
    "id": "think-beginner-017",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkBeginner017",
    "answerKey": "A",
    "category": "logic",
    "difficulty": 1,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "beginner"
    ],
    "skillTags": [
      "logic",
      "beginner",
      "difficulty-1"
    ]
  },
  {
    "id": "think-beginner-018",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkBeginner018",
    "answerKey": "C",
    "category": "decomposition",
    "difficulty": 2,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "beginner"
    ],
    "skillTags": [
      "decomposition",
      "beginner",
      "difficulty-2"
    ]
  },
  {
    "id": "think-beginner-019",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkBeginner019",
    "answerKey": "C",
    "category": "logic",
    "difficulty": 1,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "beginner"
    ],
    "skillTags": [
      "logic",
      "beginner",
      "difficulty-1"
    ]
  },
  {
    "id": "think-beginner-020",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkBeginner020",
    "answerKey": "A",
    "category": "system-thinking",
    "difficulty": 2,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "beginner"
    ],
    "skillTags": [
      "system-thinking",
      "beginner",
      "difficulty-2",
      "visual-reasoning"
    ]
  },
  {
    "id": "think-beginner-021",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkBeginner021",
    "answerKey": "B",
    "category": "condition",
    "difficulty": 2,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "beginner"
    ],
    "skillTags": [
      "condition",
      "beginner",
      "difficulty-2"
    ]
  },
  {
    "id": "think-beginner-022",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkBeginner022",
    "answerKey": "B",
    "category": "pattern",
    "difficulty": 1,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "beginner"
    ],
    "skillTags": [
      "pattern",
      "beginner",
      "difficulty-1"
    ]
  },
  {
    "id": "think-beginner-023",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkBeginner023",
    "answerKey": "A",
    "category": "system-thinking",
    "difficulty": 3,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "beginner"
    ],
    "skillTags": [
      "system-thinking",
      "beginner",
      "difficulty-3"
    ]
  },
  {
    "id": "think-beginner-024",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkBeginner024",
    "answerKey": "D",
    "category": "pattern",
    "difficulty": 1,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "beginner"
    ],
    "skillTags": [
      "pattern",
      "beginner",
      "difficulty-1"
    ]
  },
  {
    "id": "think-beginner-025",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkBeginner025",
    "answerKey": "A",
    "category": "debugging-mindset",
    "difficulty": 1,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "beginner"
    ],
    "skillTags": [
      "debugging-mindset",
      "beginner",
      "difficulty-1"
    ]
  },
  {
    "id": "think-beginner-026",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkBeginner026",
    "answerKey": "D",
    "category": "decomposition",
    "difficulty": 3,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "beginner"
    ],
    "skillTags": [
      "decomposition",
      "beginner",
      "difficulty-3"
    ]
  },
  {
    "id": "think-beginner-027",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkBeginner027",
    "answerKey": "D",
    "category": "algorithm",
    "difficulty": 2,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "beginner"
    ],
    "skillTags": [
      "algorithm",
      "beginner",
      "difficulty-2"
    ]
  },
  {
    "id": "think-beginner-028",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkBeginner028",
    "answerKey": "B",
    "category": "system-thinking",
    "difficulty": 3,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "beginner"
    ],
    "skillTags": [
      "system-thinking",
      "beginner",
      "difficulty-3"
    ]
  },
  {
    "id": "think-beginner-029",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkBeginner029",
    "answerKey": "C",
    "category": "data-reasoning",
    "difficulty": 3,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "beginner"
    ],
    "skillTags": [
      "data-reasoning",
      "beginner",
      "difficulty-3"
    ]
  },
  {
    "id": "think-beginner-030",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkBeginner030",
    "answerKey": "C",
    "category": "data-reasoning",
    "difficulty": 2,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "beginner"
    ],
    "skillTags": [
      "data-reasoning",
      "beginner",
      "difficulty-2",
      "visual-reasoning"
    ]
  },
  {
    "id": "think-beginner-031",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkBeginner031",
    "answerKey": "C",
    "category": "algorithm",
    "difficulty": 1,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "beginner"
    ],
    "skillTags": [
      "algorithm",
      "beginner",
      "difficulty-1"
    ]
  },
  {
    "id": "think-beginner-032",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkBeginner032",
    "answerKey": "B",
    "category": "debugging-mindset",
    "difficulty": 3,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "beginner"
    ],
    "skillTags": [
      "debugging-mindset",
      "beginner",
      "difficulty-3"
    ]
  },
  {
    "id": "think-beginner-033",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkBeginner033",
    "answerKey": "A",
    "category": "system-thinking",
    "difficulty": 1,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "beginner"
    ],
    "skillTags": [
      "system-thinking",
      "beginner",
      "difficulty-1"
    ]
  },
  {
    "id": "think-beginner-034",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkBeginner034",
    "answerKey": "B",
    "category": "logic",
    "difficulty": 1,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "beginner"
    ],
    "skillTags": [
      "logic",
      "beginner",
      "difficulty-1"
    ]
  },
  {
    "id": "think-beginner-035",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkBeginner035",
    "answerKey": "C",
    "category": "condition",
    "difficulty": 1,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "beginner"
    ],
    "skillTags": [
      "condition",
      "beginner",
      "difficulty-1"
    ]
  },
  {
    "id": "think-beginner-036",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkBeginner036",
    "answerKey": "D",
    "category": "system-thinking",
    "difficulty": 1,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "beginner"
    ],
    "skillTags": [
      "system-thinking",
      "beginner",
      "difficulty-1"
    ]
  },
  {
    "id": "think-beginner-037",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkBeginner037",
    "answerKey": "A",
    "category": "data-reasoning",
    "difficulty": 1,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "beginner"
    ],
    "skillTags": [
      "data-reasoning",
      "beginner",
      "difficulty-1"
    ]
  },
  {
    "id": "think-beginner-038",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkBeginner038",
    "answerKey": "C",
    "category": "logic",
    "difficulty": 2,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "beginner"
    ],
    "skillTags": [
      "logic",
      "beginner",
      "difficulty-2"
    ]
  },
  {
    "id": "think-beginner-039",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkBeginner039",
    "answerKey": "C",
    "category": "algorithm",
    "difficulty": 1,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "beginner"
    ],
    "skillTags": [
      "algorithm",
      "beginner",
      "difficulty-1"
    ]
  },
  {
    "id": "think-beginner-040",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkBeginner040",
    "answerKey": "B",
    "category": "debugging-mindset",
    "difficulty": 3,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "beginner"
    ],
    "skillTags": [
      "debugging-mindset",
      "beginner",
      "difficulty-3",
      "visual-reasoning"
    ]
  },
  {
    "id": "think-beginner-041",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkBeginner041",
    "answerKey": "C",
    "category": "algorithm",
    "difficulty": 3,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "beginner"
    ],
    "skillTags": [
      "algorithm",
      "beginner",
      "difficulty-3"
    ]
  },
  {
    "id": "think-beginner-042",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkBeginner042",
    "answerKey": "C",
    "category": "debugging-mindset",
    "difficulty": 2,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "beginner"
    ],
    "skillTags": [
      "debugging-mindset",
      "beginner",
      "difficulty-2"
    ]
  },
  {
    "id": "think-beginner-043",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkBeginner043",
    "answerKey": "A",
    "category": "system-thinking",
    "difficulty": 3,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "beginner"
    ],
    "skillTags": [
      "system-thinking",
      "beginner",
      "difficulty-3"
    ]
  },
  {
    "id": "think-beginner-044",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkBeginner044",
    "answerKey": "A",
    "category": "debugging-mindset",
    "difficulty": 2,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "beginner"
    ],
    "skillTags": [
      "debugging-mindset",
      "beginner",
      "difficulty-2"
    ]
  },
  {
    "id": "think-beginner-045",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkBeginner045",
    "answerKey": "B",
    "category": "algorithm",
    "difficulty": 2,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "beginner"
    ],
    "skillTags": [
      "algorithm",
      "beginner",
      "difficulty-2"
    ]
  },
  {
    "id": "think-beginner-046",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkBeginner046",
    "answerKey": "D",
    "category": "data-reasoning",
    "difficulty": 3,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "beginner"
    ],
    "skillTags": [
      "data-reasoning",
      "beginner",
      "difficulty-3"
    ]
  },
  {
    "id": "think-beginner-047",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkBeginner047",
    "answerKey": "A",
    "category": "system-thinking",
    "difficulty": 3,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "beginner"
    ],
    "skillTags": [
      "system-thinking",
      "beginner",
      "difficulty-3"
    ]
  },
  {
    "id": "think-beginner-048",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkBeginner048",
    "answerKey": "D",
    "category": "algorithm",
    "difficulty": 1,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "beginner"
    ],
    "skillTags": [
      "algorithm",
      "beginner",
      "difficulty-1"
    ]
  },
  {
    "id": "think-beginner-049",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkBeginner049",
    "answerKey": "B",
    "category": "logic",
    "difficulty": 2,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "beginner"
    ],
    "skillTags": [
      "logic",
      "beginner",
      "difficulty-2"
    ]
  },
  {
    "id": "think-beginner-050",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkBeginner050",
    "answerKey": "D",
    "category": "logic",
    "difficulty": 3,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "beginner"
    ],
    "skillTags": [
      "logic",
      "beginner",
      "difficulty-3",
      "visual-reasoning"
    ]
  },
  {
    "id": "think-beginner-051",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkBeginner051",
    "answerKey": "D",
    "category": "condition",
    "difficulty": 2,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "beginner"
    ],
    "skillTags": [
      "condition",
      "beginner",
      "difficulty-2"
    ]
  },
  {
    "id": "think-beginner-052",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkBeginner052",
    "answerKey": "D",
    "category": "pattern",
    "difficulty": 1,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "beginner"
    ],
    "skillTags": [
      "pattern",
      "beginner",
      "difficulty-1"
    ]
  },
  {
    "id": "think-beginner-053",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkBeginner053",
    "answerKey": "B",
    "category": "condition",
    "difficulty": 2,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "beginner"
    ],
    "skillTags": [
      "condition",
      "beginner",
      "difficulty-2"
    ]
  },
  {
    "id": "think-beginner-054",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkBeginner054",
    "answerKey": "B",
    "category": "decomposition",
    "difficulty": 1,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "beginner"
    ],
    "skillTags": [
      "decomposition",
      "beginner",
      "difficulty-1"
    ]
  },
  {
    "id": "think-beginner-055",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkBeginner055",
    "answerKey": "D",
    "category": "algorithm",
    "difficulty": 2,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "beginner"
    ],
    "skillTags": [
      "algorithm",
      "beginner",
      "difficulty-2"
    ]
  },
  {
    "id": "think-beginner-056",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkBeginner056",
    "answerKey": "B",
    "category": "condition",
    "difficulty": 3,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "beginner"
    ],
    "skillTags": [
      "condition",
      "beginner",
      "difficulty-3"
    ]
  },
  {
    "id": "think-beginner-057",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkBeginner057",
    "answerKey": "B",
    "category": "pattern",
    "difficulty": 2,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "beginner"
    ],
    "skillTags": [
      "pattern",
      "beginner",
      "difficulty-2"
    ]
  },
  {
    "id": "think-beginner-058",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkBeginner058",
    "answerKey": "C",
    "category": "data-reasoning",
    "difficulty": 2,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "beginner"
    ],
    "skillTags": [
      "data-reasoning",
      "beginner",
      "difficulty-2"
    ]
  },
  {
    "id": "think-beginner-059",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkBeginner059",
    "answerKey": "C",
    "category": "system-thinking",
    "difficulty": 1,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "beginner"
    ],
    "skillTags": [
      "system-thinking",
      "beginner",
      "difficulty-1"
    ]
  },
  {
    "id": "think-beginner-060",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkBeginner060",
    "answerKey": "B",
    "category": "logic",
    "difficulty": 3,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "beginner"
    ],
    "skillTags": [
      "logic",
      "beginner",
      "difficulty-3",
      "visual-reasoning"
    ]
  },
  {
    "id": "think-beginner-061",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkBeginner061",
    "answerKey": "C",
    "category": "pattern",
    "difficulty": 3,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "beginner"
    ],
    "skillTags": [
      "pattern",
      "beginner",
      "difficulty-3"
    ]
  },
  {
    "id": "think-beginner-062",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkBeginner062",
    "answerKey": "B",
    "category": "algorithm",
    "difficulty": 1,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "beginner"
    ],
    "skillTags": [
      "algorithm",
      "beginner",
      "difficulty-1"
    ]
  },
  {
    "id": "think-beginner-063",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkBeginner063",
    "answerKey": "A",
    "category": "decomposition",
    "difficulty": 3,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "beginner"
    ],
    "skillTags": [
      "decomposition",
      "beginner",
      "difficulty-3"
    ]
  },
  {
    "id": "think-beginner-064",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkBeginner064",
    "answerKey": "A",
    "category": "debugging-mindset",
    "difficulty": 2,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "beginner"
    ],
    "skillTags": [
      "debugging-mindset",
      "beginner",
      "difficulty-2"
    ]
  },
  {
    "id": "think-beginner-065",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkBeginner065",
    "answerKey": "C",
    "category": "algorithm",
    "difficulty": 3,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "beginner"
    ],
    "skillTags": [
      "algorithm",
      "beginner",
      "difficulty-3"
    ]
  },
  {
    "id": "think-beginner-066",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkBeginner066",
    "answerKey": "B",
    "category": "data-reasoning",
    "difficulty": 1,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "beginner"
    ],
    "skillTags": [
      "data-reasoning",
      "beginner",
      "difficulty-1"
    ]
  },
  {
    "id": "think-beginner-067",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkBeginner067",
    "answerKey": "C",
    "category": "condition",
    "difficulty": 1,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "beginner"
    ],
    "skillTags": [
      "condition",
      "beginner",
      "difficulty-1"
    ]
  },
  {
    "id": "think-beginner-068",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkBeginner068",
    "answerKey": "A",
    "category": "data-reasoning",
    "difficulty": 2,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "beginner"
    ],
    "skillTags": [
      "data-reasoning",
      "beginner",
      "difficulty-2"
    ]
  },
  {
    "id": "think-beginner-069",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkBeginner069",
    "answerKey": "C",
    "category": "condition",
    "difficulty": 3,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "beginner"
    ],
    "skillTags": [
      "condition",
      "beginner",
      "difficulty-3"
    ]
  },
  {
    "id": "think-beginner-070",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkBeginner070",
    "answerKey": "C",
    "category": "system-thinking",
    "difficulty": 2,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "beginner"
    ],
    "skillTags": [
      "system-thinking",
      "beginner",
      "difficulty-2",
      "visual-reasoning"
    ]
  },
  {
    "id": "think-beginner-071",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkBeginner071",
    "answerKey": "C",
    "category": "data-reasoning",
    "difficulty": 1,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "beginner"
    ],
    "skillTags": [
      "data-reasoning",
      "beginner",
      "difficulty-1"
    ]
  },
  {
    "id": "think-beginner-072",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkBeginner072",
    "answerKey": "D",
    "category": "decomposition",
    "difficulty": 1,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "beginner"
    ],
    "skillTags": [
      "decomposition",
      "beginner",
      "difficulty-1"
    ]
  },
  {
    "id": "think-beginner-073",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkBeginner073",
    "answerKey": "C",
    "category": "data-reasoning",
    "difficulty": 3,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "beginner"
    ],
    "skillTags": [
      "data-reasoning",
      "beginner",
      "difficulty-3"
    ]
  },
  {
    "id": "think-beginner-074",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkBeginner074",
    "answerKey": "D",
    "category": "decomposition",
    "difficulty": 3,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "beginner"
    ],
    "skillTags": [
      "decomposition",
      "beginner",
      "difficulty-3"
    ]
  },
  {
    "id": "think-beginner-075",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkBeginner075",
    "answerKey": "D",
    "category": "decomposition",
    "difficulty": 2,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "beginner"
    ],
    "skillTags": [
      "decomposition",
      "beginner",
      "difficulty-2"
    ]
  },
  {
    "id": "think-beginner-076",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkBeginner076",
    "answerKey": "A",
    "category": "debugging-mindset",
    "difficulty": 2,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "beginner"
    ],
    "skillTags": [
      "debugging-mindset",
      "beginner",
      "difficulty-2"
    ]
  },
  {
    "id": "think-beginner-077",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkBeginner077",
    "answerKey": "A",
    "category": "decomposition",
    "difficulty": 1,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "beginner"
    ],
    "skillTags": [
      "decomposition",
      "beginner",
      "difficulty-1"
    ]
  },
  {
    "id": "think-beginner-078",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkBeginner078",
    "answerKey": "B",
    "category": "debugging-mindset",
    "difficulty": 1,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "beginner"
    ],
    "skillTags": [
      "debugging-mindset",
      "beginner",
      "difficulty-1"
    ]
  },
  {
    "id": "think-beginner-079",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkBeginner079",
    "answerKey": "C",
    "category": "debugging-mindset",
    "difficulty": 1,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "beginner"
    ],
    "skillTags": [
      "debugging-mindset",
      "beginner",
      "difficulty-1"
    ]
  },
  {
    "id": "think-beginner-080",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkBeginner080",
    "answerKey": "D",
    "category": "algorithm",
    "difficulty": 1,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "beginner"
    ],
    "skillTags": [
      "algorithm",
      "beginner",
      "difficulty-1",
      "visual-reasoning"
    ]
  },
  {
    "id": "think-beginner-081",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkBeginner081",
    "answerKey": "B",
    "category": "pattern",
    "difficulty": 2,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "beginner"
    ],
    "skillTags": [
      "pattern",
      "beginner",
      "difficulty-2"
    ]
  },
  {
    "id": "think-beginner-082",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkBeginner082",
    "answerKey": "B",
    "category": "condition",
    "difficulty": 1,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "beginner"
    ],
    "skillTags": [
      "condition",
      "beginner",
      "difficulty-1"
    ]
  },
  {
    "id": "think-beginner-083",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkBeginner083",
    "answerKey": "D",
    "category": "pattern",
    "difficulty": 2,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "beginner"
    ],
    "skillTags": [
      "pattern",
      "beginner",
      "difficulty-2"
    ]
  },
  {
    "id": "think-beginner-084",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkBeginner084",
    "answerKey": "A",
    "category": "condition",
    "difficulty": 2,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "beginner"
    ],
    "skillTags": [
      "condition",
      "beginner",
      "difficulty-2"
    ]
  },
  {
    "id": "think-beginner-085",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkBeginner085",
    "answerKey": "A",
    "category": "condition",
    "difficulty": 1,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "beginner"
    ],
    "skillTags": [
      "condition",
      "beginner",
      "difficulty-1"
    ]
  },
  {
    "id": "think-beginner-086",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkBeginner086",
    "answerKey": "C",
    "category": "system-thinking",
    "difficulty": 2,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "beginner"
    ],
    "skillTags": [
      "system-thinking",
      "beginner",
      "difficulty-2"
    ]
  },
  {
    "id": "think-beginner-087",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkBeginner087",
    "answerKey": "A",
    "category": "condition",
    "difficulty": 3,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "beginner"
    ],
    "skillTags": [
      "condition",
      "beginner",
      "difficulty-3"
    ]
  },
  {
    "id": "think-beginner-088",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkBeginner088",
    "answerKey": "D",
    "category": "data-reasoning",
    "difficulty": 1,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "beginner"
    ],
    "skillTags": [
      "data-reasoning",
      "beginner",
      "difficulty-1"
    ]
  },
  {
    "id": "think-beginner-089",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkBeginner089",
    "answerKey": "A",
    "category": "pattern",
    "difficulty": 1,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "beginner"
    ],
    "skillTags": [
      "pattern",
      "beginner",
      "difficulty-1"
    ]
  },
  {
    "id": "think-beginner-090",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkBeginner090",
    "answerKey": "B",
    "category": "debugging-mindset",
    "difficulty": 1,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "beginner"
    ],
    "skillTags": [
      "debugging-mindset",
      "beginner",
      "difficulty-1",
      "visual-reasoning"
    ]
  },
  {
    "id": "think-beginner-091",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkBeginner091",
    "answerKey": "C",
    "category": "pattern",
    "difficulty": 1,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "beginner"
    ],
    "skillTags": [
      "pattern",
      "beginner",
      "difficulty-1"
    ]
  },
  {
    "id": "think-beginner-092",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkBeginner092",
    "answerKey": "D",
    "category": "decomposition",
    "difficulty": 1,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "beginner"
    ],
    "skillTags": [
      "decomposition",
      "beginner",
      "difficulty-1"
    ]
  },
  {
    "id": "think-beginner-093",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkBeginner093",
    "answerKey": "B",
    "category": "logic",
    "difficulty": 2,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "beginner"
    ],
    "skillTags": [
      "logic",
      "beginner",
      "difficulty-2"
    ]
  },
  {
    "id": "think-beginner-094",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkBeginner094",
    "answerKey": "C",
    "category": "data-reasoning",
    "difficulty": 2,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "beginner"
    ],
    "skillTags": [
      "data-reasoning",
      "beginner",
      "difficulty-2"
    ]
  },
  {
    "id": "think-beginner-095",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkBeginner095",
    "answerKey": "A",
    "category": "debugging-mindset",
    "difficulty": 3,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "beginner"
    ],
    "skillTags": [
      "debugging-mindset",
      "beginner",
      "difficulty-3"
    ]
  },
  {
    "id": "think-beginner-096",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkBeginner096",
    "answerKey": "A",
    "category": "decomposition",
    "difficulty": 2,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "beginner"
    ],
    "skillTags": [
      "decomposition",
      "beginner",
      "difficulty-2"
    ]
  },
  {
    "id": "think-beginner-097",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkBeginner097",
    "answerKey": "B",
    "category": "algorithm",
    "difficulty": 2,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "beginner"
    ],
    "skillTags": [
      "algorithm",
      "beginner",
      "difficulty-2"
    ]
  },
  {
    "id": "think-beginner-098",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkBeginner098",
    "answerKey": "D",
    "category": "algorithm",
    "difficulty": 3,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "beginner"
    ],
    "skillTags": [
      "algorithm",
      "beginner",
      "difficulty-3"
    ]
  },
  {
    "id": "think-beginner-099",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkBeginner099",
    "answerKey": "A",
    "category": "logic",
    "difficulty": 3,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "beginner"
    ],
    "skillTags": [
      "logic",
      "beginner",
      "difficulty-3"
    ]
  },
  {
    "id": "think-beginner-100",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkBeginner100",
    "answerKey": "A",
    "category": "system-thinking",
    "difficulty": 2,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "beginner"
    ],
    "skillTags": [
      "system-thinking",
      "beginner",
      "difficulty-2",
      "visual-reasoning"
    ]
  },
  {
    "id": "think-working-adult-001",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkWorkingAdult001",
    "answerKey": "B",
    "category": "pattern",
    "difficulty": 4,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "working-adult"
    ],
    "skillTags": [
      "pattern",
      "working-adult",
      "difficulty-4"
    ]
  },
  {
    "id": "think-working-adult-002",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkWorkingAdult002",
    "answerKey": "C",
    "category": "data-reasoning",
    "difficulty": 4,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "working-adult"
    ],
    "skillTags": [
      "data-reasoning",
      "working-adult",
      "difficulty-4"
    ]
  },
  {
    "id": "think-working-adult-003",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkWorkingAdult003",
    "answerKey": "D",
    "category": "system-thinking",
    "difficulty": 4,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "working-adult"
    ],
    "skillTags": [
      "system-thinking",
      "working-adult",
      "difficulty-4"
    ]
  },
  {
    "id": "think-working-adult-004",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkWorkingAdult004",
    "answerKey": "D",
    "category": "decomposition",
    "difficulty": 3,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "working-adult"
    ],
    "skillTags": [
      "decomposition",
      "working-adult",
      "difficulty-3"
    ]
  },
  {
    "id": "think-working-adult-005",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkWorkingAdult005",
    "answerKey": "B",
    "category": "pattern",
    "difficulty": 4,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "working-adult"
    ],
    "skillTags": [
      "pattern",
      "working-adult",
      "difficulty-4"
    ]
  },
  {
    "id": "think-working-adult-006",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkWorkingAdult006",
    "answerKey": "B",
    "category": "data-reasoning",
    "difficulty": 3,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "working-adult"
    ],
    "skillTags": [
      "data-reasoning",
      "working-adult",
      "difficulty-3"
    ]
  },
  {
    "id": "think-working-adult-007",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkWorkingAdult007",
    "answerKey": "C",
    "category": "algorithm",
    "difficulty": 3,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "working-adult"
    ],
    "skillTags": [
      "algorithm",
      "working-adult",
      "difficulty-3"
    ]
  },
  {
    "id": "think-working-adult-008",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkWorkingAdult008",
    "answerKey": "C",
    "category": "decomposition",
    "difficulty": 2,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "working-adult"
    ],
    "skillTags": [
      "decomposition",
      "working-adult",
      "difficulty-2"
    ]
  },
  {
    "id": "think-working-adult-009",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkWorkingAdult009",
    "answerKey": "B",
    "category": "algorithm",
    "difficulty": 4,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "working-adult"
    ],
    "skillTags": [
      "algorithm",
      "working-adult",
      "difficulty-4"
    ]
  },
  {
    "id": "think-working-adult-010",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkWorkingAdult010",
    "answerKey": "B",
    "category": "debugging-mindset",
    "difficulty": 3,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "working-adult"
    ],
    "skillTags": [
      "debugging-mindset",
      "working-adult",
      "difficulty-3",
      "visual-reasoning"
    ]
  },
  {
    "id": "think-working-adult-011",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkWorkingAdult011",
    "answerKey": "D",
    "category": "decomposition",
    "difficulty": 4,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "working-adult"
    ],
    "skillTags": [
      "decomposition",
      "working-adult",
      "difficulty-4"
    ]
  },
  {
    "id": "think-working-adult-012",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkWorkingAdult012",
    "answerKey": "A",
    "category": "logic",
    "difficulty": 4,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "working-adult"
    ],
    "skillTags": [
      "logic",
      "working-adult",
      "difficulty-4"
    ]
  },
  {
    "id": "think-working-adult-013",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkWorkingAdult013",
    "answerKey": "A",
    "category": "logic",
    "difficulty": 3,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "working-adult"
    ],
    "skillTags": [
      "logic",
      "working-adult",
      "difficulty-3"
    ]
  },
  {
    "id": "think-working-adult-014",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkWorkingAdult014",
    "answerKey": "A",
    "category": "pattern",
    "difficulty": 2,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "working-adult"
    ],
    "skillTags": [
      "pattern",
      "working-adult",
      "difficulty-2"
    ]
  },
  {
    "id": "think-working-adult-015",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkWorkingAdult015",
    "answerKey": "B",
    "category": "pattern",
    "difficulty": 2,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "working-adult"
    ],
    "skillTags": [
      "pattern",
      "working-adult",
      "difficulty-2"
    ]
  },
  {
    "id": "think-working-adult-016",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkWorkingAdult016",
    "answerKey": "C",
    "category": "system-thinking",
    "difficulty": 2,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "working-adult"
    ],
    "skillTags": [
      "system-thinking",
      "working-adult",
      "difficulty-2"
    ]
  },
  {
    "id": "think-working-adult-017",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkWorkingAdult017",
    "answerKey": "B",
    "category": "decomposition",
    "difficulty": 4,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "working-adult"
    ],
    "skillTags": [
      "decomposition",
      "working-adult",
      "difficulty-4"
    ]
  },
  {
    "id": "think-working-adult-018",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkWorkingAdult018",
    "answerKey": "A",
    "category": "data-reasoning",
    "difficulty": 2,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "working-adult"
    ],
    "skillTags": [
      "data-reasoning",
      "working-adult",
      "difficulty-2"
    ]
  },
  {
    "id": "think-working-adult-019",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkWorkingAdult019",
    "answerKey": "B",
    "category": "condition",
    "difficulty": 2,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "working-adult"
    ],
    "skillTags": [
      "condition",
      "working-adult",
      "difficulty-2"
    ]
  },
  {
    "id": "think-working-adult-020",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkWorkingAdult020",
    "answerKey": "C",
    "category": "debugging-mindset",
    "difficulty": 2,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "working-adult"
    ],
    "skillTags": [
      "debugging-mindset",
      "working-adult",
      "difficulty-2",
      "visual-reasoning"
    ]
  },
  {
    "id": "think-working-adult-021",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkWorkingAdult021",
    "answerKey": "B",
    "category": "system-thinking",
    "difficulty": 4,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "working-adult"
    ],
    "skillTags": [
      "system-thinking",
      "working-adult",
      "difficulty-4"
    ]
  },
  {
    "id": "think-working-adult-022",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkWorkingAdult022",
    "answerKey": "C",
    "category": "data-reasoning",
    "difficulty": 4,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "working-adult"
    ],
    "skillTags": [
      "data-reasoning",
      "working-adult",
      "difficulty-4"
    ]
  },
  {
    "id": "think-working-adult-023",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkWorkingAdult023",
    "answerKey": "C",
    "category": "pattern",
    "difficulty": 3,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "working-adult"
    ],
    "skillTags": [
      "pattern",
      "working-adult",
      "difficulty-3"
    ]
  },
  {
    "id": "think-working-adult-024",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkWorkingAdult024",
    "answerKey": "C",
    "category": "condition",
    "difficulty": 2,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "working-adult"
    ],
    "skillTags": [
      "condition",
      "working-adult",
      "difficulty-2"
    ]
  },
  {
    "id": "think-working-adult-025",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkWorkingAdult025",
    "answerKey": "D",
    "category": "algorithm",
    "difficulty": 2,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "working-adult"
    ],
    "skillTags": [
      "algorithm",
      "working-adult",
      "difficulty-2"
    ]
  },
  {
    "id": "think-working-adult-026",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkWorkingAdult026",
    "answerKey": "B",
    "category": "decomposition",
    "difficulty": 3,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "working-adult"
    ],
    "skillTags": [
      "decomposition",
      "working-adult",
      "difficulty-3"
    ]
  },
  {
    "id": "think-working-adult-027",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkWorkingAdult027",
    "answerKey": "C",
    "category": "debugging-mindset",
    "difficulty": 3,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "working-adult"
    ],
    "skillTags": [
      "debugging-mindset",
      "working-adult",
      "difficulty-3"
    ]
  },
  {
    "id": "think-working-adult-028",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkWorkingAdult028",
    "answerKey": "A",
    "category": "algorithm",
    "difficulty": 4,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "working-adult"
    ],
    "skillTags": [
      "algorithm",
      "working-adult",
      "difficulty-4"
    ]
  },
  {
    "id": "think-working-adult-029",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkWorkingAdult029",
    "answerKey": "A",
    "category": "logic",
    "difficulty": 3,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "working-adult"
    ],
    "skillTags": [
      "logic",
      "working-adult",
      "difficulty-3"
    ]
  },
  {
    "id": "think-working-adult-030",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkWorkingAdult030",
    "answerKey": "A",
    "category": "debugging-mindset",
    "difficulty": 2,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "working-adult"
    ],
    "skillTags": [
      "debugging-mindset",
      "working-adult",
      "difficulty-2",
      "visual-reasoning"
    ]
  },
  {
    "id": "think-working-adult-031",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkWorkingAdult031",
    "answerKey": "B",
    "category": "algorithm",
    "difficulty": 2,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "working-adult"
    ],
    "skillTags": [
      "algorithm",
      "working-adult",
      "difficulty-2"
    ]
  },
  {
    "id": "think-working-adult-032",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkWorkingAdult032",
    "answerKey": "C",
    "category": "data-reasoning",
    "difficulty": 2,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "working-adult"
    ],
    "skillTags": [
      "data-reasoning",
      "working-adult",
      "difficulty-2"
    ]
  },
  {
    "id": "think-working-adult-033",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkWorkingAdult033",
    "answerKey": "A",
    "category": "pattern",
    "difficulty": 3,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "working-adult"
    ],
    "skillTags": [
      "pattern",
      "working-adult",
      "difficulty-3"
    ]
  },
  {
    "id": "think-working-adult-034",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkWorkingAdult034",
    "answerKey": "B",
    "category": "algorithm",
    "difficulty": 3,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "working-adult"
    ],
    "skillTags": [
      "algorithm",
      "working-adult",
      "difficulty-3"
    ]
  },
  {
    "id": "think-working-adult-035",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkWorkingAdult035",
    "answerKey": "B",
    "category": "system-thinking",
    "difficulty": 2,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "working-adult"
    ],
    "skillTags": [
      "system-thinking",
      "working-adult",
      "difficulty-2"
    ]
  },
  {
    "id": "think-working-adult-036",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkWorkingAdult036",
    "answerKey": "D",
    "category": "data-reasoning",
    "difficulty": 3,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "working-adult"
    ],
    "skillTags": [
      "data-reasoning",
      "working-adult",
      "difficulty-3"
    ]
  },
  {
    "id": "think-working-adult-037",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkWorkingAdult037",
    "answerKey": "B",
    "category": "data-reasoning",
    "difficulty": 4,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "working-adult"
    ],
    "skillTags": [
      "data-reasoning",
      "working-adult",
      "difficulty-4"
    ]
  },
  {
    "id": "think-working-adult-038",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkWorkingAdult038",
    "answerKey": "B",
    "category": "system-thinking",
    "difficulty": 3,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "working-adult"
    ],
    "skillTags": [
      "system-thinking",
      "working-adult",
      "difficulty-3"
    ]
  },
  {
    "id": "think-working-adult-039",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkWorkingAdult039",
    "answerKey": "C",
    "category": "data-reasoning",
    "difficulty": 3,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "working-adult"
    ],
    "skillTags": [
      "data-reasoning",
      "working-adult",
      "difficulty-3"
    ]
  },
  {
    "id": "think-working-adult-040",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkWorkingAdult040",
    "answerKey": "C",
    "category": "debugging-mindset",
    "difficulty": 2,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "working-adult"
    ],
    "skillTags": [
      "debugging-mindset",
      "working-adult",
      "difficulty-2",
      "visual-reasoning"
    ]
  },
  {
    "id": "think-working-adult-041",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkWorkingAdult041",
    "answerKey": "B",
    "category": "debugging-mindset",
    "difficulty": 4,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "working-adult"
    ],
    "skillTags": [
      "debugging-mindset",
      "working-adult",
      "difficulty-4"
    ]
  },
  {
    "id": "think-working-adult-042",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkWorkingAdult042",
    "answerKey": "A",
    "category": "system-thinking",
    "difficulty": 2,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "working-adult"
    ],
    "skillTags": [
      "system-thinking",
      "working-adult",
      "difficulty-2"
    ]
  },
  {
    "id": "think-working-adult-043",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkWorkingAdult043",
    "answerKey": "C",
    "category": "pattern",
    "difficulty": 3,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "working-adult"
    ],
    "skillTags": [
      "pattern",
      "working-adult",
      "difficulty-3"
    ]
  },
  {
    "id": "think-working-adult-044",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkWorkingAdult044",
    "answerKey": "A",
    "category": "decomposition",
    "difficulty": 4,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "working-adult"
    ],
    "skillTags": [
      "decomposition",
      "working-adult",
      "difficulty-4"
    ]
  },
  {
    "id": "think-working-adult-045",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkWorkingAdult045",
    "answerKey": "D",
    "category": "data-reasoning",
    "difficulty": 2,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "working-adult"
    ],
    "skillTags": [
      "data-reasoning",
      "working-adult",
      "difficulty-2"
    ]
  },
  {
    "id": "think-working-adult-046",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkWorkingAdult046",
    "answerKey": "C",
    "category": "logic",
    "difficulty": 4,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "working-adult"
    ],
    "skillTags": [
      "logic",
      "working-adult",
      "difficulty-4"
    ]
  },
  {
    "id": "think-working-adult-047",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkWorkingAdult047",
    "answerKey": "D",
    "category": "debugging-mindset",
    "difficulty": 4,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "working-adult"
    ],
    "skillTags": [
      "debugging-mindset",
      "working-adult",
      "difficulty-4"
    ]
  },
  {
    "id": "think-working-adult-048",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkWorkingAdult048",
    "answerKey": "D",
    "category": "decomposition",
    "difficulty": 3,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "working-adult"
    ],
    "skillTags": [
      "decomposition",
      "working-adult",
      "difficulty-3"
    ]
  },
  {
    "id": "think-working-adult-049",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkWorkingAdult049",
    "answerKey": "A",
    "category": "condition",
    "difficulty": 3,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "working-adult"
    ],
    "skillTags": [
      "condition",
      "working-adult",
      "difficulty-3"
    ]
  },
  {
    "id": "think-working-adult-050",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkWorkingAdult050",
    "answerKey": "B",
    "category": "logic",
    "difficulty": 3,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "working-adult"
    ],
    "skillTags": [
      "logic",
      "working-adult",
      "difficulty-3",
      "visual-reasoning"
    ]
  },
  {
    "id": "think-working-adult-051",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkWorkingAdult051",
    "answerKey": "C",
    "category": "condition",
    "difficulty": 3,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "working-adult"
    ],
    "skillTags": [
      "condition",
      "working-adult",
      "difficulty-3"
    ]
  },
  {
    "id": "think-working-adult-052",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkWorkingAdult052",
    "answerKey": "C",
    "category": "pattern",
    "difficulty": 2,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "working-adult"
    ],
    "skillTags": [
      "pattern",
      "working-adult",
      "difficulty-2"
    ]
  },
  {
    "id": "think-working-adult-053",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkWorkingAdult053",
    "answerKey": "B",
    "category": "debugging-mindset",
    "difficulty": 4,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "working-adult"
    ],
    "skillTags": [
      "debugging-mindset",
      "working-adult",
      "difficulty-4"
    ]
  },
  {
    "id": "think-working-adult-054",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkWorkingAdult054",
    "answerKey": "C",
    "category": "system-thinking",
    "difficulty": 4,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "working-adult"
    ],
    "skillTags": [
      "system-thinking",
      "working-adult",
      "difficulty-4"
    ]
  },
  {
    "id": "think-working-adult-055",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkWorkingAdult055",
    "answerKey": "D",
    "category": "logic",
    "difficulty": 4,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "working-adult"
    ],
    "skillTags": [
      "logic",
      "working-adult",
      "difficulty-4"
    ]
  },
  {
    "id": "think-working-adult-056",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkWorkingAdult056",
    "answerKey": "D",
    "category": "condition",
    "difficulty": 3,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "working-adult"
    ],
    "skillTags": [
      "condition",
      "working-adult",
      "difficulty-3"
    ]
  },
  {
    "id": "think-working-adult-057",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkWorkingAdult057",
    "answerKey": "D",
    "category": "logic",
    "difficulty": 2,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "working-adult"
    ],
    "skillTags": [
      "logic",
      "working-adult",
      "difficulty-2"
    ]
  },
  {
    "id": "think-working-adult-058",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkWorkingAdult058",
    "answerKey": "C",
    "category": "condition",
    "difficulty": 4,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "working-adult"
    ],
    "skillTags": [
      "condition",
      "working-adult",
      "difficulty-4"
    ]
  },
  {
    "id": "think-working-adult-059",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkWorkingAdult059",
    "answerKey": "C",
    "category": "logic",
    "difficulty": 3,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "working-adult"
    ],
    "skillTags": [
      "logic",
      "working-adult",
      "difficulty-3"
    ]
  },
  {
    "id": "think-working-adult-060",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkWorkingAdult060",
    "answerKey": "C",
    "category": "logic",
    "difficulty": 2,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "working-adult"
    ],
    "skillTags": [
      "logic",
      "working-adult",
      "difficulty-2",
      "visual-reasoning"
    ]
  },
  {
    "id": "think-working-adult-061",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkWorkingAdult061",
    "answerKey": "B",
    "category": "condition",
    "difficulty": 4,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "working-adult"
    ],
    "skillTags": [
      "condition",
      "working-adult",
      "difficulty-4"
    ]
  },
  {
    "id": "think-working-adult-062",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkWorkingAdult062",
    "answerKey": "B",
    "category": "debugging-mindset",
    "difficulty": 3,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "working-adult"
    ],
    "skillTags": [
      "debugging-mindset",
      "working-adult",
      "difficulty-3"
    ]
  },
  {
    "id": "think-working-adult-063",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkWorkingAdult063",
    "answerKey": "D",
    "category": "pattern",
    "difficulty": 4,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "working-adult"
    ],
    "skillTags": [
      "pattern",
      "working-adult",
      "difficulty-4"
    ]
  },
  {
    "id": "think-working-adult-064",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkWorkingAdult064",
    "answerKey": "A",
    "category": "pattern",
    "difficulty": 4,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "working-adult"
    ],
    "skillTags": [
      "pattern",
      "working-adult",
      "difficulty-4"
    ]
  },
  {
    "id": "think-working-adult-065",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkWorkingAdult065",
    "answerKey": "D",
    "category": "decomposition",
    "difficulty": 2,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "working-adult"
    ],
    "skillTags": [
      "decomposition",
      "working-adult",
      "difficulty-2"
    ]
  },
  {
    "id": "think-working-adult-066",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkWorkingAdult066",
    "answerKey": "A",
    "category": "system-thinking",
    "difficulty": 2,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "working-adult"
    ],
    "skillTags": [
      "system-thinking",
      "working-adult",
      "difficulty-2"
    ]
  },
  {
    "id": "think-working-adult-067",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkWorkingAdult067",
    "answerKey": "D",
    "category": "condition",
    "difficulty": 4,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "working-adult"
    ],
    "skillTags": [
      "condition",
      "working-adult",
      "difficulty-4"
    ]
  },
  {
    "id": "think-working-adult-068",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkWorkingAdult068",
    "answerKey": "C",
    "category": "logic",
    "difficulty": 2,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "working-adult"
    ],
    "skillTags": [
      "logic",
      "working-adult",
      "difficulty-2"
    ]
  },
  {
    "id": "think-working-adult-069",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkWorkingAdult069",
    "answerKey": "D",
    "category": "algorithm",
    "difficulty": 2,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "working-adult"
    ],
    "skillTags": [
      "algorithm",
      "working-adult",
      "difficulty-2"
    ]
  },
  {
    "id": "think-working-adult-070",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkWorkingAdult070",
    "answerKey": "B",
    "category": "logic",
    "difficulty": 3,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "working-adult"
    ],
    "skillTags": [
      "logic",
      "working-adult",
      "difficulty-3",
      "visual-reasoning"
    ]
  },
  {
    "id": "think-working-adult-071",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkWorkingAdult071",
    "answerKey": "C",
    "category": "algorithm",
    "difficulty": 3,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "working-adult"
    ],
    "skillTags": [
      "algorithm",
      "working-adult",
      "difficulty-3"
    ]
  },
  {
    "id": "think-working-adult-072",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkWorkingAdult072",
    "answerKey": "C",
    "category": "logic",
    "difficulty": 2,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "working-adult"
    ],
    "skillTags": [
      "logic",
      "working-adult",
      "difficulty-2"
    ]
  },
  {
    "id": "think-working-adult-073",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkWorkingAdult073",
    "answerKey": "A",
    "category": "algorithm",
    "difficulty": 3,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "working-adult"
    ],
    "skillTags": [
      "algorithm",
      "working-adult",
      "difficulty-3"
    ]
  },
  {
    "id": "think-working-adult-074",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkWorkingAdult074",
    "answerKey": "C",
    "category": "system-thinking",
    "difficulty": 4,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "working-adult"
    ],
    "skillTags": [
      "system-thinking",
      "working-adult",
      "difficulty-4"
    ]
  },
  {
    "id": "think-working-adult-075",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkWorkingAdult075",
    "answerKey": "C",
    "category": "pattern",
    "difficulty": 3,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "working-adult"
    ],
    "skillTags": [
      "pattern",
      "working-adult",
      "difficulty-3"
    ]
  },
  {
    "id": "think-working-adult-076",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkWorkingAdult076",
    "answerKey": "C",
    "category": "pattern",
    "difficulty": 2,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "working-adult"
    ],
    "skillTags": [
      "pattern",
      "working-adult",
      "difficulty-2"
    ]
  },
  {
    "id": "think-working-adult-077",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkWorkingAdult077",
    "answerKey": "D",
    "category": "algorithm",
    "difficulty": 2,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "working-adult"
    ],
    "skillTags": [
      "algorithm",
      "working-adult",
      "difficulty-2"
    ]
  },
  {
    "id": "think-working-adult-078",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkWorkingAdult078",
    "answerKey": "B",
    "category": "debugging-mindset",
    "difficulty": 3,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "working-adult"
    ],
    "skillTags": [
      "debugging-mindset",
      "working-adult",
      "difficulty-3"
    ]
  },
  {
    "id": "think-working-adult-079",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkWorkingAdult079",
    "answerKey": "B",
    "category": "condition",
    "difficulty": 2,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "working-adult"
    ],
    "skillTags": [
      "condition",
      "working-adult",
      "difficulty-2"
    ]
  },
  {
    "id": "think-working-adult-080",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkWorkingAdult080",
    "answerKey": "D",
    "category": "debugging-mindset",
    "difficulty": 3,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "working-adult"
    ],
    "skillTags": [
      "debugging-mindset",
      "working-adult",
      "difficulty-3",
      "visual-reasoning"
    ]
  },
  {
    "id": "think-working-adult-081",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkWorkingAdult081",
    "answerKey": "A",
    "category": "decomposition",
    "difficulty": 3,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "working-adult"
    ],
    "skillTags": [
      "decomposition",
      "working-adult",
      "difficulty-3"
    ]
  },
  {
    "id": "think-working-adult-082",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkWorkingAdult082",
    "answerKey": "C",
    "category": "algorithm",
    "difficulty": 4,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "working-adult"
    ],
    "skillTags": [
      "algorithm",
      "working-adult",
      "difficulty-4"
    ]
  },
  {
    "id": "think-working-adult-083",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkWorkingAdult083",
    "answerKey": "B",
    "category": "decomposition",
    "difficulty": 2,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "working-adult"
    ],
    "skillTags": [
      "decomposition",
      "working-adult",
      "difficulty-2"
    ]
  },
  {
    "id": "think-working-adult-084",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkWorkingAdult084",
    "answerKey": "D",
    "category": "data-reasoning",
    "difficulty": 3,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "working-adult"
    ],
    "skillTags": [
      "data-reasoning",
      "working-adult",
      "difficulty-3"
    ]
  },
  {
    "id": "think-working-adult-085",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkWorkingAdult085",
    "answerKey": "A",
    "category": "system-thinking",
    "difficulty": 3,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "working-adult"
    ],
    "skillTags": [
      "system-thinking",
      "working-adult",
      "difficulty-3"
    ]
  },
  {
    "id": "think-working-adult-086",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkWorkingAdult086",
    "answerKey": "A",
    "category": "condition",
    "difficulty": 2,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "working-adult"
    ],
    "skillTags": [
      "condition",
      "working-adult",
      "difficulty-2"
    ]
  },
  {
    "id": "think-working-adult-087",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkWorkingAdult087",
    "answerKey": "B",
    "category": "decomposition",
    "difficulty": 2,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "working-adult"
    ],
    "skillTags": [
      "decomposition",
      "working-adult",
      "difficulty-2"
    ]
  },
  {
    "id": "think-working-adult-088",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkWorkingAdult088",
    "answerKey": "C",
    "category": "debugging-mindset",
    "difficulty": 2,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "working-adult"
    ],
    "skillTags": [
      "debugging-mindset",
      "working-adult",
      "difficulty-2"
    ]
  },
  {
    "id": "think-working-adult-089",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkWorkingAdult089",
    "answerKey": "A",
    "category": "condition",
    "difficulty": 3,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "working-adult"
    ],
    "skillTags": [
      "condition",
      "working-adult",
      "difficulty-3"
    ]
  },
  {
    "id": "think-working-adult-090",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkWorkingAdult090",
    "answerKey": "A",
    "category": "data-reasoning",
    "difficulty": 2,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "working-adult"
    ],
    "skillTags": [
      "data-reasoning",
      "working-adult",
      "difficulty-2",
      "visual-reasoning"
    ]
  },
  {
    "id": "think-working-adult-091",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkWorkingAdult091",
    "answerKey": "B",
    "category": "data-reasoning",
    "difficulty": 2,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "working-adult"
    ],
    "skillTags": [
      "data-reasoning",
      "working-adult",
      "difficulty-2"
    ]
  },
  {
    "id": "think-working-adult-092",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkWorkingAdult092",
    "answerKey": "D",
    "category": "system-thinking",
    "difficulty": 3,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "working-adult"
    ],
    "skillTags": [
      "system-thinking",
      "working-adult",
      "difficulty-3"
    ]
  },
  {
    "id": "think-working-adult-093",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkWorkingAdult093",
    "answerKey": "B",
    "category": "algorithm",
    "difficulty": 4,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "working-adult"
    ],
    "skillTags": [
      "algorithm",
      "working-adult",
      "difficulty-4"
    ]
  },
  {
    "id": "think-working-adult-094",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkWorkingAdult094",
    "answerKey": "A",
    "category": "debugging-mindset",
    "difficulty": 2,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "working-adult"
    ],
    "skillTags": [
      "debugging-mindset",
      "working-adult",
      "difficulty-2"
    ]
  },
  {
    "id": "think-working-adult-095",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkWorkingAdult095",
    "answerKey": "D",
    "category": "logic",
    "difficulty": 4,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "working-adult"
    ],
    "skillTags": [
      "logic",
      "working-adult",
      "difficulty-4"
    ]
  },
  {
    "id": "think-working-adult-096",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkWorkingAdult096",
    "answerKey": "A",
    "category": "condition",
    "difficulty": 4,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "working-adult"
    ],
    "skillTags": [
      "condition",
      "working-adult",
      "difficulty-4"
    ]
  },
  {
    "id": "think-working-adult-097",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkWorkingAdult097",
    "answerKey": "A",
    "category": "system-thinking",
    "difficulty": 3,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "working-adult"
    ],
    "skillTags": [
      "system-thinking",
      "working-adult",
      "difficulty-3"
    ]
  },
  {
    "id": "think-working-adult-098",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkWorkingAdult098",
    "answerKey": "A",
    "category": "pattern",
    "difficulty": 2,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "working-adult"
    ],
    "skillTags": [
      "pattern",
      "working-adult",
      "difficulty-2"
    ]
  },
  {
    "id": "think-working-adult-099",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkWorkingAdult099",
    "answerKey": "C",
    "category": "pattern",
    "difficulty": 3,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "working-adult"
    ],
    "skillTags": [
      "pattern",
      "working-adult",
      "difficulty-3"
    ]
  },
  {
    "id": "think-working-adult-100",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkWorkingAdult100",
    "answerKey": "A",
    "category": "decomposition",
    "difficulty": 4,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "working-adult"
    ],
    "skillTags": [
      "decomposition",
      "working-adult",
      "difficulty-4",
      "visual-reasoning"
    ]
  },
  {
    "id": "think-career-switcher-001",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkCareerSwitcher001",
    "answerKey": "C",
    "category": "algorithm",
    "difficulty": 3,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "career-switcher"
    ],
    "skillTags": [
      "algorithm",
      "career-switcher",
      "difficulty-3"
    ]
  },
  {
    "id": "think-career-switcher-002",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkCareerSwitcher002",
    "answerKey": "B",
    "category": "algorithm",
    "difficulty": 5,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "career-switcher"
    ],
    "skillTags": [
      "algorithm",
      "career-switcher",
      "difficulty-5"
    ]
  },
  {
    "id": "think-career-switcher-003",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkCareerSwitcher003",
    "answerKey": "B",
    "category": "algorithm",
    "difficulty": 4,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "career-switcher"
    ],
    "skillTags": [
      "algorithm",
      "career-switcher",
      "difficulty-4"
    ]
  },
  {
    "id": "think-career-switcher-004",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkCareerSwitcher004",
    "answerKey": "D",
    "category": "condition",
    "difficulty": 5,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "career-switcher"
    ],
    "skillTags": [
      "condition",
      "career-switcher",
      "difficulty-5"
    ]
  },
  {
    "id": "think-career-switcher-005",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkCareerSwitcher005",
    "answerKey": "A",
    "category": "pattern",
    "difficulty": 5,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "career-switcher"
    ],
    "skillTags": [
      "pattern",
      "career-switcher",
      "difficulty-5"
    ]
  },
  {
    "id": "think-career-switcher-006",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkCareerSwitcher006",
    "answerKey": "A",
    "category": "data-reasoning",
    "difficulty": 4,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "career-switcher"
    ],
    "skillTags": [
      "data-reasoning",
      "career-switcher",
      "difficulty-4"
    ]
  },
  {
    "id": "think-career-switcher-007",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkCareerSwitcher007",
    "answerKey": "A",
    "category": "decomposition",
    "difficulty": 3,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "career-switcher"
    ],
    "skillTags": [
      "decomposition",
      "career-switcher",
      "difficulty-3"
    ]
  },
  {
    "id": "think-career-switcher-008",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkCareerSwitcher008",
    "answerKey": "C",
    "category": "algorithm",
    "difficulty": 4,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "career-switcher"
    ],
    "skillTags": [
      "algorithm",
      "career-switcher",
      "difficulty-4"
    ]
  },
  {
    "id": "think-career-switcher-009",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkCareerSwitcher009",
    "answerKey": "A",
    "category": "data-reasoning",
    "difficulty": 5,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "career-switcher"
    ],
    "skillTags": [
      "data-reasoning",
      "career-switcher",
      "difficulty-5"
    ]
  },
  {
    "id": "think-career-switcher-010",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkCareerSwitcher010",
    "answerKey": "B",
    "category": "system-thinking",
    "difficulty": 5,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "career-switcher"
    ],
    "skillTags": [
      "system-thinking",
      "career-switcher",
      "difficulty-5",
      "visual-reasoning"
    ]
  },
  {
    "id": "think-career-switcher-011",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkCareerSwitcher011",
    "answerKey": "A",
    "category": "algorithm",
    "difficulty": 3,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "career-switcher"
    ],
    "skillTags": [
      "algorithm",
      "career-switcher",
      "difficulty-3"
    ]
  },
  {
    "id": "think-career-switcher-012",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkCareerSwitcher012",
    "answerKey": "B",
    "category": "algorithm",
    "difficulty": 3,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "career-switcher"
    ],
    "skillTags": [
      "algorithm",
      "career-switcher",
      "difficulty-3"
    ]
  },
  {
    "id": "think-career-switcher-013",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkCareerSwitcher013",
    "answerKey": "D",
    "category": "data-reasoning",
    "difficulty": 4,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "career-switcher"
    ],
    "skillTags": [
      "data-reasoning",
      "career-switcher",
      "difficulty-4"
    ]
  },
  {
    "id": "think-career-switcher-014",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkCareerSwitcher014",
    "answerKey": "B",
    "category": "algorithm",
    "difficulty": 5,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "career-switcher"
    ],
    "skillTags": [
      "algorithm",
      "career-switcher",
      "difficulty-5"
    ]
  },
  {
    "id": "think-career-switcher-015",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkCareerSwitcher015",
    "answerKey": "A",
    "category": "condition",
    "difficulty": 3,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "career-switcher"
    ],
    "skillTags": [
      "condition",
      "career-switcher",
      "difficulty-3"
    ]
  },
  {
    "id": "think-career-switcher-016",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkCareerSwitcher016",
    "answerKey": "B",
    "category": "decomposition",
    "difficulty": 3,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "career-switcher"
    ],
    "skillTags": [
      "decomposition",
      "career-switcher",
      "difficulty-3"
    ]
  },
  {
    "id": "think-career-switcher-017",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkCareerSwitcher017",
    "answerKey": "D",
    "category": "debugging-mindset",
    "difficulty": 4,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "career-switcher"
    ],
    "skillTags": [
      "debugging-mindset",
      "career-switcher",
      "difficulty-4"
    ]
  },
  {
    "id": "think-career-switcher-018",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkCareerSwitcher018",
    "answerKey": "B",
    "category": "system-thinking",
    "difficulty": 5,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "career-switcher"
    ],
    "skillTags": [
      "system-thinking",
      "career-switcher",
      "difficulty-5"
    ]
  },
  {
    "id": "think-career-switcher-019",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkCareerSwitcher019",
    "answerKey": "C",
    "category": "pattern",
    "difficulty": 5,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "career-switcher"
    ],
    "skillTags": [
      "pattern",
      "career-switcher",
      "difficulty-5"
    ]
  },
  {
    "id": "think-career-switcher-020",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkCareerSwitcher020",
    "answerKey": "B",
    "category": "decomposition",
    "difficulty": 3,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "career-switcher"
    ],
    "skillTags": [
      "decomposition",
      "career-switcher",
      "difficulty-3",
      "visual-reasoning"
    ]
  },
  {
    "id": "think-career-switcher-021",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkCareerSwitcher021",
    "answerKey": "C",
    "category": "debugging-mindset",
    "difficulty": 3,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "career-switcher"
    ],
    "skillTags": [
      "debugging-mindset",
      "career-switcher",
      "difficulty-3"
    ]
  },
  {
    "id": "think-career-switcher-022",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkCareerSwitcher022",
    "answerKey": "A",
    "category": "decomposition",
    "difficulty": 4,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "career-switcher"
    ],
    "skillTags": [
      "decomposition",
      "career-switcher",
      "difficulty-4"
    ]
  },
  {
    "id": "think-career-switcher-023",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkCareerSwitcher023",
    "answerKey": "C",
    "category": "decomposition",
    "difficulty": 5,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "career-switcher"
    ],
    "skillTags": [
      "decomposition",
      "career-switcher",
      "difficulty-5"
    ]
  },
  {
    "id": "think-career-switcher-024",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkCareerSwitcher024",
    "answerKey": "C",
    "category": "system-thinking",
    "difficulty": 4,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "career-switcher"
    ],
    "skillTags": [
      "system-thinking",
      "career-switcher",
      "difficulty-4"
    ]
  },
  {
    "id": "think-career-switcher-025",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkCareerSwitcher025",
    "answerKey": "D",
    "category": "algorithm",
    "difficulty": 4,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "career-switcher"
    ],
    "skillTags": [
      "algorithm",
      "career-switcher",
      "difficulty-4"
    ]
  },
  {
    "id": "think-career-switcher-026",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkCareerSwitcher026",
    "answerKey": "B",
    "category": "pattern",
    "difficulty": 5,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "career-switcher"
    ],
    "skillTags": [
      "pattern",
      "career-switcher",
      "difficulty-5"
    ]
  },
  {
    "id": "think-career-switcher-027",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkCareerSwitcher027",
    "answerKey": "B",
    "category": "debugging-mindset",
    "difficulty": 4,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "career-switcher"
    ],
    "skillTags": [
      "debugging-mindset",
      "career-switcher",
      "difficulty-4"
    ]
  },
  {
    "id": "think-career-switcher-028",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkCareerSwitcher028",
    "answerKey": "D",
    "category": "debugging-mindset",
    "difficulty": 5,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "career-switcher"
    ],
    "skillTags": [
      "debugging-mindset",
      "career-switcher",
      "difficulty-5"
    ]
  },
  {
    "id": "think-career-switcher-029",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkCareerSwitcher029",
    "answerKey": "C",
    "category": "system-thinking",
    "difficulty": 3,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "career-switcher"
    ],
    "skillTags": [
      "system-thinking",
      "career-switcher",
      "difficulty-3"
    ]
  },
  {
    "id": "think-career-switcher-030",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkCareerSwitcher030",
    "answerKey": "A",
    "category": "debugging-mindset",
    "difficulty": 4,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "career-switcher"
    ],
    "skillTags": [
      "debugging-mindset",
      "career-switcher",
      "difficulty-4",
      "visual-reasoning"
    ]
  },
  {
    "id": "think-career-switcher-031",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkCareerSwitcher031",
    "answerKey": "B",
    "category": "condition",
    "difficulty": 4,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "career-switcher"
    ],
    "skillTags": [
      "condition",
      "career-switcher",
      "difficulty-4"
    ]
  },
  {
    "id": "think-career-switcher-032",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkCareerSwitcher032",
    "answerKey": "D",
    "category": "condition",
    "difficulty": 5,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "career-switcher"
    ],
    "skillTags": [
      "condition",
      "career-switcher",
      "difficulty-5"
    ]
  },
  {
    "id": "think-career-switcher-033",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkCareerSwitcher033",
    "answerKey": "C",
    "category": "system-thinking",
    "difficulty": 3,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "career-switcher"
    ],
    "skillTags": [
      "system-thinking",
      "career-switcher",
      "difficulty-3"
    ]
  },
  {
    "id": "think-career-switcher-034",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkCareerSwitcher034",
    "answerKey": "D",
    "category": "system-thinking",
    "difficulty": 3,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "career-switcher"
    ],
    "skillTags": [
      "system-thinking",
      "career-switcher",
      "difficulty-3"
    ]
  },
  {
    "id": "think-career-switcher-035",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkCareerSwitcher035",
    "answerKey": "A",
    "category": "logic",
    "difficulty": 3,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "career-switcher"
    ],
    "skillTags": [
      "logic",
      "career-switcher",
      "difficulty-3"
    ]
  },
  {
    "id": "think-career-switcher-036",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkCareerSwitcher036",
    "answerKey": "C",
    "category": "pattern",
    "difficulty": 4,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "career-switcher"
    ],
    "skillTags": [
      "pattern",
      "career-switcher",
      "difficulty-4"
    ]
  },
  {
    "id": "think-career-switcher-037",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkCareerSwitcher037",
    "answerKey": "C",
    "category": "pattern",
    "difficulty": 3,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "career-switcher"
    ],
    "skillTags": [
      "pattern",
      "career-switcher",
      "difficulty-3"
    ]
  },
  {
    "id": "think-career-switcher-038",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkCareerSwitcher038",
    "answerKey": "D",
    "category": "pattern",
    "difficulty": 3,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "career-switcher"
    ],
    "skillTags": [
      "pattern",
      "career-switcher",
      "difficulty-3"
    ]
  },
  {
    "id": "think-career-switcher-039",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkCareerSwitcher039",
    "answerKey": "C",
    "category": "debugging-mindset",
    "difficulty": 5,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "career-switcher"
    ],
    "skillTags": [
      "debugging-mindset",
      "career-switcher",
      "difficulty-5"
    ]
  },
  {
    "id": "think-career-switcher-040",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkCareerSwitcher040",
    "answerKey": "C",
    "category": "pattern",
    "difficulty": 4,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "career-switcher"
    ],
    "skillTags": [
      "pattern",
      "career-switcher",
      "difficulty-4",
      "visual-reasoning"
    ]
  },
  {
    "id": "think-career-switcher-041",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkCareerSwitcher041",
    "answerKey": "D",
    "category": "decomposition",
    "difficulty": 4,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "career-switcher"
    ],
    "skillTags": [
      "decomposition",
      "career-switcher",
      "difficulty-4"
    ]
  },
  {
    "id": "think-career-switcher-042",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkCareerSwitcher042",
    "answerKey": "B",
    "category": "logic",
    "difficulty": 5,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "career-switcher"
    ],
    "skillTags": [
      "logic",
      "career-switcher",
      "difficulty-5"
    ]
  },
  {
    "id": "think-career-switcher-043",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkCareerSwitcher043",
    "answerKey": "A",
    "category": "data-reasoning",
    "difficulty": 3,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "career-switcher"
    ],
    "skillTags": [
      "data-reasoning",
      "career-switcher",
      "difficulty-3"
    ]
  },
  {
    "id": "think-career-switcher-044",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkCareerSwitcher044",
    "answerKey": "D",
    "category": "system-thinking",
    "difficulty": 5,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "career-switcher"
    ],
    "skillTags": [
      "system-thinking",
      "career-switcher",
      "difficulty-5"
    ]
  },
  {
    "id": "think-career-switcher-045",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkCareerSwitcher045",
    "answerKey": "D",
    "category": "condition",
    "difficulty": 4,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "career-switcher"
    ],
    "skillTags": [
      "condition",
      "career-switcher",
      "difficulty-4"
    ]
  },
  {
    "id": "think-career-switcher-046",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkCareerSwitcher046",
    "answerKey": "D",
    "category": "algorithm",
    "difficulty": 3,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "career-switcher"
    ],
    "skillTags": [
      "algorithm",
      "career-switcher",
      "difficulty-3"
    ]
  },
  {
    "id": "think-career-switcher-047",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkCareerSwitcher047",
    "answerKey": "B",
    "category": "condition",
    "difficulty": 4,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "career-switcher"
    ],
    "skillTags": [
      "condition",
      "career-switcher",
      "difficulty-4"
    ]
  },
  {
    "id": "think-career-switcher-048",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkCareerSwitcher048",
    "answerKey": "B",
    "category": "logic",
    "difficulty": 3,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "career-switcher"
    ],
    "skillTags": [
      "logic",
      "career-switcher",
      "difficulty-3"
    ]
  },
  {
    "id": "think-career-switcher-049",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkCareerSwitcher049",
    "answerKey": "C",
    "category": "condition",
    "difficulty": 3,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "career-switcher"
    ],
    "skillTags": [
      "condition",
      "career-switcher",
      "difficulty-3"
    ]
  },
  {
    "id": "think-career-switcher-050",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkCareerSwitcher050",
    "answerKey": "A",
    "category": "debugging-mindset",
    "difficulty": 4,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "career-switcher"
    ],
    "skillTags": [
      "debugging-mindset",
      "career-switcher",
      "difficulty-4",
      "visual-reasoning"
    ]
  },
  {
    "id": "think-career-switcher-051",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkCareerSwitcher051",
    "answerKey": "B",
    "category": "system-thinking",
    "difficulty": 4,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "career-switcher"
    ],
    "skillTags": [
      "system-thinking",
      "career-switcher",
      "difficulty-4"
    ]
  },
  {
    "id": "think-career-switcher-052",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkCareerSwitcher052",
    "answerKey": "C",
    "category": "system-thinking",
    "difficulty": 4,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "career-switcher"
    ],
    "skillTags": [
      "system-thinking",
      "career-switcher",
      "difficulty-4"
    ]
  },
  {
    "id": "think-career-switcher-053",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkCareerSwitcher053",
    "answerKey": "D",
    "category": "data-reasoning",
    "difficulty": 4,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "career-switcher"
    ],
    "skillTags": [
      "data-reasoning",
      "career-switcher",
      "difficulty-4"
    ]
  },
  {
    "id": "think-career-switcher-054",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkCareerSwitcher054",
    "answerKey": "B",
    "category": "decomposition",
    "difficulty": 5,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "career-switcher"
    ],
    "skillTags": [
      "decomposition",
      "career-switcher",
      "difficulty-5"
    ]
  },
  {
    "id": "think-career-switcher-055",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkCareerSwitcher055",
    "answerKey": "B",
    "category": "condition",
    "difficulty": 4,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "career-switcher"
    ],
    "skillTags": [
      "condition",
      "career-switcher",
      "difficulty-4"
    ]
  },
  {
    "id": "think-career-switcher-056",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkCareerSwitcher056",
    "answerKey": "B",
    "category": "logic",
    "difficulty": 3,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "career-switcher"
    ],
    "skillTags": [
      "logic",
      "career-switcher",
      "difficulty-3"
    ]
  },
  {
    "id": "think-career-switcher-057",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkCareerSwitcher057",
    "answerKey": "C",
    "category": "data-reasoning",
    "difficulty": 3,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "career-switcher"
    ],
    "skillTags": [
      "data-reasoning",
      "career-switcher",
      "difficulty-3"
    ]
  },
  {
    "id": "think-career-switcher-058",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkCareerSwitcher058",
    "answerKey": "A",
    "category": "system-thinking",
    "difficulty": 4,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "career-switcher"
    ],
    "skillTags": [
      "system-thinking",
      "career-switcher",
      "difficulty-4"
    ]
  },
  {
    "id": "think-career-switcher-059",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkCareerSwitcher059",
    "answerKey": "C",
    "category": "data-reasoning",
    "difficulty": 5,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "career-switcher"
    ],
    "skillTags": [
      "data-reasoning",
      "career-switcher",
      "difficulty-5"
    ]
  },
  {
    "id": "think-career-switcher-060",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkCareerSwitcher060",
    "answerKey": "D",
    "category": "decomposition",
    "difficulty": 5,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "career-switcher"
    ],
    "skillTags": [
      "decomposition",
      "career-switcher",
      "difficulty-5",
      "visual-reasoning"
    ]
  },
  {
    "id": "think-career-switcher-061",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkCareerSwitcher061",
    "answerKey": "D",
    "category": "logic",
    "difficulty": 4,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "career-switcher"
    ],
    "skillTags": [
      "logic",
      "career-switcher",
      "difficulty-4"
    ]
  },
  {
    "id": "think-career-switcher-062",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkCareerSwitcher062",
    "answerKey": "D",
    "category": "system-thinking",
    "difficulty": 3,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "career-switcher"
    ],
    "skillTags": [
      "system-thinking",
      "career-switcher",
      "difficulty-3"
    ]
  },
  {
    "id": "think-career-switcher-063",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkCareerSwitcher063",
    "answerKey": "B",
    "category": "pattern",
    "difficulty": 4,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "career-switcher"
    ],
    "skillTags": [
      "pattern",
      "career-switcher",
      "difficulty-4"
    ]
  },
  {
    "id": "think-career-switcher-064",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkCareerSwitcher064",
    "answerKey": "C",
    "category": "logic",
    "difficulty": 4,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "career-switcher"
    ],
    "skillTags": [
      "logic",
      "career-switcher",
      "difficulty-4"
    ]
  },
  {
    "id": "think-career-switcher-065",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkCareerSwitcher065",
    "answerKey": "D",
    "category": "decomposition",
    "difficulty": 4,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "career-switcher"
    ],
    "skillTags": [
      "decomposition",
      "career-switcher",
      "difficulty-4"
    ]
  },
  {
    "id": "think-career-switcher-066",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkCareerSwitcher066",
    "answerKey": "A",
    "category": "condition",
    "difficulty": 4,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "career-switcher"
    ],
    "skillTags": [
      "condition",
      "career-switcher",
      "difficulty-4"
    ]
  },
  {
    "id": "think-career-switcher-067",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkCareerSwitcher067",
    "answerKey": "B",
    "category": "decomposition",
    "difficulty": 4,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "career-switcher"
    ],
    "skillTags": [
      "decomposition",
      "career-switcher",
      "difficulty-4"
    ]
  },
  {
    "id": "think-career-switcher-068",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkCareerSwitcher068",
    "answerKey": "C",
    "category": "algorithm",
    "difficulty": 4,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "career-switcher"
    ],
    "skillTags": [
      "algorithm",
      "career-switcher",
      "difficulty-4"
    ]
  },
  {
    "id": "think-career-switcher-069",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkCareerSwitcher069",
    "answerKey": "A",
    "category": "data-reasoning",
    "difficulty": 5,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "career-switcher"
    ],
    "skillTags": [
      "data-reasoning",
      "career-switcher",
      "difficulty-5"
    ]
  },
  {
    "id": "think-career-switcher-070",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkCareerSwitcher070",
    "answerKey": "A",
    "category": "decomposition",
    "difficulty": 4,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "career-switcher"
    ],
    "skillTags": [
      "decomposition",
      "career-switcher",
      "difficulty-4",
      "visual-reasoning"
    ]
  },
  {
    "id": "think-career-switcher-071",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkCareerSwitcher071",
    "answerKey": "C",
    "category": "decomposition",
    "difficulty": 5,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "career-switcher"
    ],
    "skillTags": [
      "decomposition",
      "career-switcher",
      "difficulty-5"
    ]
  },
  {
    "id": "think-career-switcher-072",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkCareerSwitcher072",
    "answerKey": "D",
    "category": "system-thinking",
    "difficulty": 5,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "career-switcher"
    ],
    "skillTags": [
      "system-thinking",
      "career-switcher",
      "difficulty-5"
    ]
  },
  {
    "id": "think-career-switcher-073",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkCareerSwitcher073",
    "answerKey": "C",
    "category": "condition",
    "difficulty": 3,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "career-switcher"
    ],
    "skillTags": [
      "condition",
      "career-switcher",
      "difficulty-3"
    ]
  },
  {
    "id": "think-career-switcher-074",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkCareerSwitcher074",
    "answerKey": "D",
    "category": "condition",
    "difficulty": 3,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "career-switcher"
    ],
    "skillTags": [
      "condition",
      "career-switcher",
      "difficulty-3"
    ]
  },
  {
    "id": "think-career-switcher-075",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkCareerSwitcher075",
    "answerKey": "C",
    "category": "logic",
    "difficulty": 5,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "career-switcher"
    ],
    "skillTags": [
      "logic",
      "career-switcher",
      "difficulty-5"
    ]
  },
  {
    "id": "think-career-switcher-076",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkCareerSwitcher076",
    "answerKey": "C",
    "category": "logic",
    "difficulty": 4,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "career-switcher"
    ],
    "skillTags": [
      "logic",
      "career-switcher",
      "difficulty-4"
    ]
  },
  {
    "id": "think-career-switcher-077",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkCareerSwitcher077",
    "answerKey": "C",
    "category": "data-reasoning",
    "difficulty": 3,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "career-switcher"
    ],
    "skillTags": [
      "data-reasoning",
      "career-switcher",
      "difficulty-3"
    ]
  },
  {
    "id": "think-career-switcher-078",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkCareerSwitcher078",
    "answerKey": "B",
    "category": "logic",
    "difficulty": 5,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "career-switcher"
    ],
    "skillTags": [
      "logic",
      "career-switcher",
      "difficulty-5"
    ]
  },
  {
    "id": "think-career-switcher-079",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkCareerSwitcher079",
    "answerKey": "A",
    "category": "condition",
    "difficulty": 3,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "career-switcher"
    ],
    "skillTags": [
      "condition",
      "career-switcher",
      "difficulty-3"
    ]
  },
  {
    "id": "think-career-switcher-080",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkCareerSwitcher080",
    "answerKey": "D",
    "category": "data-reasoning",
    "difficulty": 5,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "career-switcher"
    ],
    "skillTags": [
      "data-reasoning",
      "career-switcher",
      "difficulty-5",
      "visual-reasoning"
    ]
  },
  {
    "id": "think-career-switcher-081",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkCareerSwitcher081",
    "answerKey": "A",
    "category": "condition",
    "difficulty": 5,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "career-switcher"
    ],
    "skillTags": [
      "condition",
      "career-switcher",
      "difficulty-5"
    ]
  },
  {
    "id": "think-career-switcher-082",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkCareerSwitcher082",
    "answerKey": "D",
    "category": "debugging-mindset",
    "difficulty": 3,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "career-switcher"
    ],
    "skillTags": [
      "debugging-mindset",
      "career-switcher",
      "difficulty-3"
    ]
  },
  {
    "id": "think-career-switcher-083",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkCareerSwitcher083",
    "answerKey": "C",
    "category": "pattern",
    "difficulty": 5,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "career-switcher"
    ],
    "skillTags": [
      "pattern",
      "career-switcher",
      "difficulty-5"
    ]
  },
  {
    "id": "think-career-switcher-084",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkCareerSwitcher084",
    "answerKey": "B",
    "category": "pattern",
    "difficulty": 3,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "career-switcher"
    ],
    "skillTags": [
      "pattern",
      "career-switcher",
      "difficulty-3"
    ]
  },
  {
    "id": "think-career-switcher-085",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkCareerSwitcher085",
    "answerKey": "C",
    "category": "logic",
    "difficulty": 3,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "career-switcher"
    ],
    "skillTags": [
      "logic",
      "career-switcher",
      "difficulty-3"
    ]
  },
  {
    "id": "think-career-switcher-086",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkCareerSwitcher086",
    "answerKey": "D",
    "category": "decomposition",
    "difficulty": 3,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "career-switcher"
    ],
    "skillTags": [
      "decomposition",
      "career-switcher",
      "difficulty-3"
    ]
  },
  {
    "id": "think-career-switcher-087",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkCareerSwitcher087",
    "answerKey": "C",
    "category": "algorithm",
    "difficulty": 5,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "career-switcher"
    ],
    "skillTags": [
      "algorithm",
      "career-switcher",
      "difficulty-5"
    ]
  },
  {
    "id": "think-career-switcher-088",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkCareerSwitcher088",
    "answerKey": "B",
    "category": "data-reasoning",
    "difficulty": 3,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "career-switcher"
    ],
    "skillTags": [
      "data-reasoning",
      "career-switcher",
      "difficulty-3"
    ]
  },
  {
    "id": "think-career-switcher-089",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkCareerSwitcher089",
    "answerKey": "D",
    "category": "data-reasoning",
    "difficulty": 4,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "career-switcher"
    ],
    "skillTags": [
      "data-reasoning",
      "career-switcher",
      "difficulty-4"
    ]
  },
  {
    "id": "think-career-switcher-090",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkCareerSwitcher090",
    "answerKey": "A",
    "category": "logic",
    "difficulty": 4,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "career-switcher"
    ],
    "skillTags": [
      "logic",
      "career-switcher",
      "difficulty-4",
      "visual-reasoning"
    ]
  },
  {
    "id": "think-career-switcher-091",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkCareerSwitcher091",
    "answerKey": "A",
    "category": "debugging-mindset",
    "difficulty": 3,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "career-switcher"
    ],
    "skillTags": [
      "debugging-mindset",
      "career-switcher",
      "difficulty-3"
    ]
  },
  {
    "id": "think-career-switcher-092",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkCareerSwitcher092",
    "answerKey": "D",
    "category": "algorithm",
    "difficulty": 5,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "career-switcher"
    ],
    "skillTags": [
      "algorithm",
      "career-switcher",
      "difficulty-5"
    ]
  },
  {
    "id": "think-career-switcher-093",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkCareerSwitcher093",
    "answerKey": "A",
    "category": "debugging-mindset",
    "difficulty": 5,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "career-switcher"
    ],
    "skillTags": [
      "debugging-mindset",
      "career-switcher",
      "difficulty-5"
    ]
  },
  {
    "id": "think-career-switcher-094",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkCareerSwitcher094",
    "answerKey": "D",
    "category": "logic",
    "difficulty": 3,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "career-switcher"
    ],
    "skillTags": [
      "logic",
      "career-switcher",
      "difficulty-3"
    ]
  },
  {
    "id": "think-career-switcher-095",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkCareerSwitcher095",
    "answerKey": "B",
    "category": "pattern",
    "difficulty": 4,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "career-switcher"
    ],
    "skillTags": [
      "pattern",
      "career-switcher",
      "difficulty-4"
    ]
  },
  {
    "id": "think-career-switcher-096",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkCareerSwitcher096",
    "answerKey": "B",
    "category": "debugging-mindset",
    "difficulty": 3,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "career-switcher"
    ],
    "skillTags": [
      "debugging-mindset",
      "career-switcher",
      "difficulty-3"
    ]
  },
  {
    "id": "think-career-switcher-097",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkCareerSwitcher097",
    "answerKey": "D",
    "category": "algorithm",
    "difficulty": 4,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "career-switcher"
    ],
    "skillTags": [
      "algorithm",
      "career-switcher",
      "difficulty-4"
    ]
  },
  {
    "id": "think-career-switcher-098",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkCareerSwitcher098",
    "answerKey": "D",
    "category": "algorithm",
    "difficulty": 3,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "career-switcher"
    ],
    "skillTags": [
      "algorithm",
      "career-switcher",
      "difficulty-3"
    ]
  },
  {
    "id": "think-career-switcher-099",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkCareerSwitcher099",
    "answerKey": "A",
    "category": "pattern",
    "difficulty": 3,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "career-switcher"
    ],
    "skillTags": [
      "pattern",
      "career-switcher",
      "difficulty-3"
    ]
  },
  {
    "id": "think-career-switcher-100",
    "assessmentType": "thinking",
    "i18nKey": "thinking.questions.thinkCareerSwitcher100",
    "answerKey": "D",
    "category": "debugging-mindset",
    "difficulty": 5,
    "levelMin": 6,
    "levelMax": 12,
    "targetGroups": [
      "career-switcher"
    ],
    "skillTags": [
      "debugging-mindset",
      "career-switcher",
      "difficulty-5",
      "visual-reasoning"
    ]
  }
];

export const PLACEMENT_TEST_QUESTIONS = [
  {
    "id": "place-py-student-001",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyStudent001",
    "answerKey": "C",
    "category": "input-output",
    "difficulty": 1,
    "targetGroups": [
      "student"
    ],
    "skillTags": [
      "input-output",
      "program-flow",
      "student"
    ]
  },
  {
    "id": "place-py-student-002",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyStudent002",
    "answerKey": "A",
    "category": "input-output",
    "difficulty": 1,
    "targetGroups": [
      "student"
    ],
    "skillTags": [
      "input-output",
      "program-flow",
      "student"
    ]
  },
  {
    "id": "place-py-student-003",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyStudent003",
    "answerKey": "C",
    "category": "input-output",
    "difficulty": 1,
    "targetGroups": [
      "student"
    ],
    "skillTags": [
      "input-output",
      "program-flow",
      "student"
    ]
  },
  {
    "id": "place-py-student-004",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyStudent004",
    "answerKey": "B",
    "category": "input-output",
    "difficulty": 2,
    "targetGroups": [
      "student"
    ],
    "skillTags": [
      "input-output",
      "program-flow",
      "student"
    ]
  },
  {
    "id": "place-py-student-005",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyStudent005",
    "answerKey": "B",
    "category": "input-output",
    "difficulty": 2,
    "targetGroups": [
      "student"
    ],
    "skillTags": [
      "input-output",
      "program-flow",
      "student"
    ]
  },
  {
    "id": "place-py-student-006",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyStudent006",
    "answerKey": "D",
    "category": "input-output",
    "difficulty": 3,
    "targetGroups": [
      "student"
    ],
    "skillTags": [
      "input-output",
      "program-flow",
      "student"
    ]
  },
  {
    "id": "place-py-student-007",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyStudent007",
    "answerKey": "C",
    "category": "input-output",
    "difficulty": 4,
    "targetGroups": [
      "student"
    ],
    "skillTags": [
      "input-output",
      "program-flow",
      "student"
    ]
  },
  {
    "id": "place-py-student-008",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyStudent008",
    "answerKey": "D",
    "category": "variable",
    "difficulty": 1,
    "targetGroups": [
      "student"
    ],
    "skillTags": [
      "variable",
      "assignment",
      "student"
    ]
  },
  {
    "id": "place-py-student-009",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyStudent009",
    "answerKey": "D",
    "category": "variable",
    "difficulty": 1,
    "targetGroups": [
      "student"
    ],
    "skillTags": [
      "variable",
      "assignment",
      "student"
    ]
  },
  {
    "id": "place-py-student-010",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyStudent010",
    "answerKey": "A",
    "category": "variable",
    "difficulty": 1,
    "targetGroups": [
      "student"
    ],
    "skillTags": [
      "variable",
      "assignment",
      "student"
    ]
  },
  {
    "id": "place-py-student-011",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyStudent011",
    "answerKey": "B",
    "category": "variable",
    "difficulty": 2,
    "targetGroups": [
      "student"
    ],
    "skillTags": [
      "variable",
      "assignment",
      "student"
    ]
  },
  {
    "id": "place-py-student-012",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyStudent012",
    "answerKey": "A",
    "category": "variable",
    "difficulty": 2,
    "targetGroups": [
      "student"
    ],
    "skillTags": [
      "variable",
      "assignment",
      "student"
    ]
  },
  {
    "id": "place-py-student-013",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyStudent013",
    "answerKey": "A",
    "category": "variable",
    "difficulty": 3,
    "targetGroups": [
      "student"
    ],
    "skillTags": [
      "variable",
      "assignment",
      "student"
    ]
  },
  {
    "id": "place-py-student-014",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyStudent014",
    "answerKey": "B",
    "category": "variable",
    "difficulty": 4,
    "targetGroups": [
      "student"
    ],
    "skillTags": [
      "variable",
      "assignment",
      "student"
    ]
  },
  {
    "id": "place-py-student-015",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyStudent015",
    "answerKey": "B",
    "category": "condition",
    "difficulty": 1,
    "targetGroups": [
      "student"
    ],
    "skillTags": [
      "condition",
      "comparison",
      "student"
    ]
  },
  {
    "id": "place-py-student-016",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyStudent016",
    "answerKey": "A",
    "category": "condition",
    "difficulty": 1,
    "targetGroups": [
      "student"
    ],
    "skillTags": [
      "condition",
      "comparison",
      "student"
    ]
  },
  {
    "id": "place-py-student-017",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyStudent017",
    "answerKey": "D",
    "category": "condition",
    "difficulty": 1,
    "targetGroups": [
      "student"
    ],
    "skillTags": [
      "condition",
      "comparison",
      "student"
    ]
  },
  {
    "id": "place-py-student-018",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyStudent018",
    "answerKey": "B",
    "category": "condition",
    "difficulty": 2,
    "targetGroups": [
      "student"
    ],
    "skillTags": [
      "condition",
      "comparison",
      "student"
    ]
  },
  {
    "id": "place-py-student-019",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyStudent019",
    "answerKey": "A",
    "category": "condition",
    "difficulty": 2,
    "targetGroups": [
      "student"
    ],
    "skillTags": [
      "condition",
      "comparison",
      "student"
    ]
  },
  {
    "id": "place-py-student-020",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyStudent020",
    "answerKey": "C",
    "category": "condition",
    "difficulty": 3,
    "targetGroups": [
      "student"
    ],
    "skillTags": [
      "condition",
      "comparison",
      "student"
    ]
  },
  {
    "id": "place-py-student-021",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyStudent021",
    "answerKey": "B",
    "category": "condition",
    "difficulty": 4,
    "targetGroups": [
      "student"
    ],
    "skillTags": [
      "condition",
      "comparison",
      "student"
    ]
  },
  {
    "id": "place-py-student-022",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyStudent022",
    "answerKey": "A",
    "category": "loop",
    "difficulty": 1,
    "targetGroups": [
      "student"
    ],
    "skillTags": [
      "loop",
      "repetition",
      "student"
    ]
  },
  {
    "id": "place-py-student-023",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyStudent023",
    "answerKey": "D",
    "category": "loop",
    "difficulty": 1,
    "targetGroups": [
      "student"
    ],
    "skillTags": [
      "loop",
      "repetition",
      "student"
    ]
  },
  {
    "id": "place-py-student-024",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyStudent024",
    "answerKey": "B",
    "category": "loop",
    "difficulty": 1,
    "targetGroups": [
      "student"
    ],
    "skillTags": [
      "loop",
      "repetition",
      "student"
    ]
  },
  {
    "id": "place-py-student-025",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyStudent025",
    "answerKey": "C",
    "category": "loop",
    "difficulty": 2,
    "targetGroups": [
      "student"
    ],
    "skillTags": [
      "loop",
      "repetition",
      "student"
    ]
  },
  {
    "id": "place-py-student-026",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyStudent026",
    "answerKey": "B",
    "category": "loop",
    "difficulty": 2,
    "targetGroups": [
      "student"
    ],
    "skillTags": [
      "loop",
      "repetition",
      "student"
    ]
  },
  {
    "id": "place-py-student-027",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyStudent027",
    "answerKey": "C",
    "category": "loop",
    "difficulty": 3,
    "targetGroups": [
      "student"
    ],
    "skillTags": [
      "loop",
      "repetition",
      "student"
    ]
  },
  {
    "id": "place-py-student-028",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyStudent028",
    "answerKey": "B",
    "category": "loop",
    "difficulty": 4,
    "targetGroups": [
      "student"
    ],
    "skillTags": [
      "loop",
      "repetition",
      "student"
    ]
  },
  {
    "id": "place-py-student-029",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyStudent029",
    "answerKey": "B",
    "category": "data-type",
    "difficulty": 1,
    "targetGroups": [
      "student"
    ],
    "skillTags": [
      "data-type",
      "type-conversion",
      "student"
    ]
  },
  {
    "id": "place-py-student-030",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyStudent030",
    "answerKey": "A",
    "category": "data-type",
    "difficulty": 1,
    "targetGroups": [
      "student"
    ],
    "skillTags": [
      "data-type",
      "type-conversion",
      "student"
    ]
  },
  {
    "id": "place-py-student-031",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyStudent031",
    "answerKey": "C",
    "category": "data-type",
    "difficulty": 1,
    "targetGroups": [
      "student"
    ],
    "skillTags": [
      "data-type",
      "type-conversion",
      "student"
    ]
  },
  {
    "id": "place-py-student-032",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyStudent032",
    "answerKey": "B",
    "category": "data-type",
    "difficulty": 2,
    "targetGroups": [
      "student"
    ],
    "skillTags": [
      "data-type",
      "type-conversion",
      "student"
    ]
  },
  {
    "id": "place-py-student-033",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyStudent033",
    "answerKey": "B",
    "category": "data-type",
    "difficulty": 2,
    "targetGroups": [
      "student"
    ],
    "skillTags": [
      "data-type",
      "type-conversion",
      "student"
    ]
  },
  {
    "id": "place-py-student-034",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyStudent034",
    "answerKey": "A",
    "category": "data-type",
    "difficulty": 3,
    "targetGroups": [
      "student"
    ],
    "skillTags": [
      "data-type",
      "type-conversion",
      "student"
    ]
  },
  {
    "id": "place-py-student-035",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyStudent035",
    "answerKey": "C",
    "category": "data-type",
    "difficulty": 4,
    "targetGroups": [
      "student"
    ],
    "skillTags": [
      "data-type",
      "type-conversion",
      "student"
    ]
  },
  {
    "id": "place-py-student-036",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyStudent036",
    "answerKey": "B",
    "category": "list",
    "difficulty": 1,
    "targetGroups": [
      "student"
    ],
    "skillTags": [
      "list",
      "collection",
      "student"
    ]
  },
  {
    "id": "place-py-student-037",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyStudent037",
    "answerKey": "B",
    "category": "list",
    "difficulty": 1,
    "targetGroups": [
      "student"
    ],
    "skillTags": [
      "list",
      "collection",
      "student"
    ]
  },
  {
    "id": "place-py-student-038",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyStudent038",
    "answerKey": "B",
    "category": "list",
    "difficulty": 1,
    "targetGroups": [
      "student"
    ],
    "skillTags": [
      "list",
      "collection",
      "student"
    ]
  },
  {
    "id": "place-py-student-039",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyStudent039",
    "answerKey": "A",
    "category": "list",
    "difficulty": 2,
    "targetGroups": [
      "student"
    ],
    "skillTags": [
      "list",
      "collection",
      "student"
    ]
  },
  {
    "id": "place-py-student-040",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyStudent040",
    "answerKey": "C",
    "category": "list",
    "difficulty": 2,
    "targetGroups": [
      "student"
    ],
    "skillTags": [
      "list",
      "collection",
      "student"
    ]
  },
  {
    "id": "place-py-student-041",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyStudent041",
    "answerKey": "B",
    "category": "list",
    "difficulty": 3,
    "targetGroups": [
      "student"
    ],
    "skillTags": [
      "list",
      "collection",
      "student"
    ]
  },
  {
    "id": "place-py-student-042",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyStudent042",
    "answerKey": "D",
    "category": "list",
    "difficulty": 4,
    "targetGroups": [
      "student"
    ],
    "skillTags": [
      "list",
      "collection",
      "student"
    ]
  },
  {
    "id": "place-py-student-043",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyStudent043",
    "answerKey": "D",
    "category": "function",
    "difficulty": 1,
    "targetGroups": [
      "student"
    ],
    "skillTags": [
      "function",
      "reuse",
      "student"
    ]
  },
  {
    "id": "place-py-student-044",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyStudent044",
    "answerKey": "C",
    "category": "function",
    "difficulty": 1,
    "targetGroups": [
      "student"
    ],
    "skillTags": [
      "function",
      "reuse",
      "student"
    ]
  },
  {
    "id": "place-py-student-045",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyStudent045",
    "answerKey": "A",
    "category": "function",
    "difficulty": 1,
    "targetGroups": [
      "student"
    ],
    "skillTags": [
      "function",
      "reuse",
      "student"
    ]
  },
  {
    "id": "place-py-student-046",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyStudent046",
    "answerKey": "B",
    "category": "function",
    "difficulty": 2,
    "targetGroups": [
      "student"
    ],
    "skillTags": [
      "function",
      "reuse",
      "student"
    ]
  },
  {
    "id": "place-py-student-047",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyStudent047",
    "answerKey": "A",
    "category": "function",
    "difficulty": 2,
    "targetGroups": [
      "student"
    ],
    "skillTags": [
      "function",
      "reuse",
      "student"
    ]
  },
  {
    "id": "place-py-student-048",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyStudent048",
    "answerKey": "C",
    "category": "function",
    "difficulty": 3,
    "targetGroups": [
      "student"
    ],
    "skillTags": [
      "function",
      "reuse",
      "student"
    ]
  },
  {
    "id": "place-py-student-049",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyStudent049",
    "answerKey": "A",
    "category": "function",
    "difficulty": 4,
    "targetGroups": [
      "student"
    ],
    "skillTags": [
      "function",
      "reuse",
      "student"
    ]
  },
  {
    "id": "place-py-student-050",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyStudent050",
    "answerKey": "D",
    "category": "debugging",
    "difficulty": 1,
    "targetGroups": [
      "student"
    ],
    "skillTags": [
      "debugging",
      "trace",
      "student"
    ]
  },
  {
    "id": "place-py-student-051",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyStudent051",
    "answerKey": "A",
    "category": "debugging",
    "difficulty": 1,
    "targetGroups": [
      "student"
    ],
    "skillTags": [
      "debugging",
      "trace",
      "student"
    ]
  },
  {
    "id": "place-py-student-052",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyStudent052",
    "answerKey": "A",
    "category": "debugging",
    "difficulty": 1,
    "targetGroups": [
      "student"
    ],
    "skillTags": [
      "debugging",
      "trace",
      "student"
    ]
  },
  {
    "id": "place-py-student-053",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyStudent053",
    "answerKey": "C",
    "category": "debugging",
    "difficulty": 2,
    "targetGroups": [
      "student"
    ],
    "skillTags": [
      "debugging",
      "trace",
      "student"
    ]
  },
  {
    "id": "place-py-student-054",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyStudent054",
    "answerKey": "C",
    "category": "debugging",
    "difficulty": 2,
    "targetGroups": [
      "student"
    ],
    "skillTags": [
      "debugging",
      "trace",
      "student"
    ]
  },
  {
    "id": "place-py-student-055",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyStudent055",
    "answerKey": "B",
    "category": "debugging",
    "difficulty": 3,
    "targetGroups": [
      "student"
    ],
    "skillTags": [
      "debugging",
      "trace",
      "student"
    ]
  },
  {
    "id": "place-py-student-056",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyStudent056",
    "answerKey": "B",
    "category": "debugging",
    "difficulty": 4,
    "targetGroups": [
      "student"
    ],
    "skillTags": [
      "debugging",
      "trace",
      "student"
    ]
  },
  {
    "id": "place-py-student-057",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyStudent057",
    "answerKey": "D",
    "category": "algorithm",
    "difficulty": 1,
    "targetGroups": [
      "student"
    ],
    "skillTags": [
      "algorithm",
      "step-order",
      "student"
    ]
  },
  {
    "id": "place-py-student-058",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyStudent058",
    "answerKey": "D",
    "category": "algorithm",
    "difficulty": 1,
    "targetGroups": [
      "student"
    ],
    "skillTags": [
      "algorithm",
      "step-order",
      "student"
    ]
  },
  {
    "id": "place-py-student-059",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyStudent059",
    "answerKey": "A",
    "category": "algorithm",
    "difficulty": 1,
    "targetGroups": [
      "student"
    ],
    "skillTags": [
      "algorithm",
      "step-order",
      "student"
    ]
  },
  {
    "id": "place-py-student-060",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyStudent060",
    "answerKey": "D",
    "category": "algorithm",
    "difficulty": 2,
    "targetGroups": [
      "student"
    ],
    "skillTags": [
      "algorithm",
      "step-order",
      "student"
    ]
  },
  {
    "id": "place-py-student-061",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyStudent061",
    "answerKey": "D",
    "category": "algorithm",
    "difficulty": 2,
    "targetGroups": [
      "student"
    ],
    "skillTags": [
      "algorithm",
      "step-order",
      "student"
    ]
  },
  {
    "id": "place-py-student-062",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyStudent062",
    "answerKey": "A",
    "category": "algorithm",
    "difficulty": 3,
    "targetGroups": [
      "student"
    ],
    "skillTags": [
      "algorithm",
      "step-order",
      "student"
    ]
  },
  {
    "id": "place-py-student-063",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyStudent063",
    "answerKey": "A",
    "category": "algorithm",
    "difficulty": 4,
    "targetGroups": [
      "student"
    ],
    "skillTags": [
      "algorithm",
      "step-order",
      "student"
    ]
  },
  {
    "id": "place-py-student-064",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyStudent064",
    "answerKey": "B",
    "category": "problem-solving",
    "difficulty": 1,
    "targetGroups": [
      "student"
    ],
    "skillTags": [
      "problem-solving",
      "decomposition",
      "student"
    ]
  },
  {
    "id": "place-py-student-065",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyStudent065",
    "answerKey": "A",
    "category": "problem-solving",
    "difficulty": 1,
    "targetGroups": [
      "student"
    ],
    "skillTags": [
      "problem-solving",
      "decomposition",
      "student"
    ]
  },
  {
    "id": "place-py-student-066",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyStudent066",
    "answerKey": "B",
    "category": "problem-solving",
    "difficulty": 1,
    "targetGroups": [
      "student"
    ],
    "skillTags": [
      "problem-solving",
      "decomposition",
      "student"
    ]
  },
  {
    "id": "place-py-student-067",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyStudent067",
    "answerKey": "C",
    "category": "problem-solving",
    "difficulty": 2,
    "targetGroups": [
      "student"
    ],
    "skillTags": [
      "problem-solving",
      "decomposition",
      "student"
    ]
  },
  {
    "id": "place-py-student-068",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyStudent068",
    "answerKey": "A",
    "category": "problem-solving",
    "difficulty": 2,
    "targetGroups": [
      "student"
    ],
    "skillTags": [
      "problem-solving",
      "decomposition",
      "student"
    ]
  },
  {
    "id": "place-py-student-069",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyStudent069",
    "answerKey": "D",
    "category": "problem-solving",
    "difficulty": 3,
    "targetGroups": [
      "student"
    ],
    "skillTags": [
      "problem-solving",
      "decomposition",
      "student"
    ]
  },
  {
    "id": "place-py-student-070",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyStudent070",
    "answerKey": "C",
    "category": "problem-solving",
    "difficulty": 4,
    "targetGroups": [
      "student"
    ],
    "skillTags": [
      "problem-solving",
      "decomposition",
      "student"
    ]
  },
  {
    "id": "place-py-student-071",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyStudent071",
    "answerKey": "B",
    "category": "file-data",
    "difficulty": 1,
    "targetGroups": [
      "student"
    ],
    "skillTags": [
      "file",
      "data-processing",
      "student"
    ]
  },
  {
    "id": "place-py-student-072",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyStudent072",
    "answerKey": "C",
    "category": "file-data",
    "difficulty": 1,
    "targetGroups": [
      "student"
    ],
    "skillTags": [
      "file",
      "data-processing",
      "student"
    ]
  },
  {
    "id": "place-py-student-073",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyStudent073",
    "answerKey": "D",
    "category": "file-data",
    "difficulty": 2,
    "targetGroups": [
      "student"
    ],
    "skillTags": [
      "file",
      "data-processing",
      "student"
    ]
  },
  {
    "id": "place-py-student-074",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyStudent074",
    "answerKey": "C",
    "category": "file-data",
    "difficulty": 2,
    "targetGroups": [
      "student"
    ],
    "skillTags": [
      "file",
      "data-processing",
      "student"
    ]
  },
  {
    "id": "place-py-student-075",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyStudent075",
    "answerKey": "B",
    "category": "file-data",
    "difficulty": 3,
    "targetGroups": [
      "student"
    ],
    "skillTags": [
      "file",
      "data-processing",
      "student"
    ]
  },
  {
    "id": "place-py-student-076",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyStudent076",
    "answerKey": "A",
    "category": "file-data",
    "difficulty": 4,
    "targetGroups": [
      "student"
    ],
    "skillTags": [
      "file",
      "data-processing",
      "student"
    ]
  },
  {
    "id": "place-py-student-077",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyStudent077",
    "answerKey": "B",
    "category": "automation",
    "difficulty": 1,
    "targetGroups": [
      "student"
    ],
    "skillTags": [
      "automation",
      "workflow",
      "student"
    ]
  },
  {
    "id": "place-py-student-078",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyStudent078",
    "answerKey": "D",
    "category": "automation",
    "difficulty": 1,
    "targetGroups": [
      "student"
    ],
    "skillTags": [
      "automation",
      "workflow",
      "student"
    ]
  },
  {
    "id": "place-py-student-079",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyStudent079",
    "answerKey": "B",
    "category": "automation",
    "difficulty": 2,
    "targetGroups": [
      "student"
    ],
    "skillTags": [
      "automation",
      "workflow",
      "student"
    ]
  },
  {
    "id": "place-py-student-080",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyStudent080",
    "answerKey": "A",
    "category": "automation",
    "difficulty": 2,
    "targetGroups": [
      "student"
    ],
    "skillTags": [
      "automation",
      "workflow",
      "student"
    ]
  },
  {
    "id": "place-py-student-081",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyStudent081",
    "answerKey": "C",
    "category": "automation",
    "difficulty": 3,
    "targetGroups": [
      "student"
    ],
    "skillTags": [
      "automation",
      "workflow",
      "student"
    ]
  },
  {
    "id": "place-py-student-082",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyStudent082",
    "answerKey": "D",
    "category": "automation",
    "difficulty": 4,
    "targetGroups": [
      "student"
    ],
    "skillTags": [
      "automation",
      "workflow",
      "student"
    ]
  },
  {
    "id": "place-py-student-083",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyStudent083",
    "answerKey": "B",
    "category": "data-reasoning",
    "difficulty": 1,
    "targetGroups": [
      "student"
    ],
    "skillTags": [
      "data",
      "table-reading",
      "student"
    ]
  },
  {
    "id": "place-py-student-084",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyStudent084",
    "answerKey": "A",
    "category": "data-reasoning",
    "difficulty": 1,
    "targetGroups": [
      "student"
    ],
    "skillTags": [
      "data",
      "table-reading",
      "student"
    ]
  },
  {
    "id": "place-py-student-085",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyStudent085",
    "answerKey": "B",
    "category": "data-reasoning",
    "difficulty": 2,
    "targetGroups": [
      "student"
    ],
    "skillTags": [
      "data",
      "table-reading",
      "student"
    ]
  },
  {
    "id": "place-py-student-086",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyStudent086",
    "answerKey": "C",
    "category": "data-reasoning",
    "difficulty": 2,
    "targetGroups": [
      "student"
    ],
    "skillTags": [
      "data",
      "table-reading",
      "student"
    ]
  },
  {
    "id": "place-py-student-087",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyStudent087",
    "answerKey": "C",
    "category": "data-reasoning",
    "difficulty": 3,
    "targetGroups": [
      "student"
    ],
    "skillTags": [
      "data",
      "table-reading",
      "student"
    ]
  },
  {
    "id": "place-py-student-088",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyStudent088",
    "answerKey": "A",
    "category": "data-reasoning",
    "difficulty": 4,
    "targetGroups": [
      "student"
    ],
    "skillTags": [
      "data",
      "table-reading",
      "student"
    ]
  },
  {
    "id": "place-py-student-089",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyStudent089",
    "answerKey": "C",
    "category": "code-reading",
    "difficulty": 1,
    "targetGroups": [
      "student"
    ],
    "skillTags": [
      "code-reading",
      "execution-order",
      "student"
    ]
  },
  {
    "id": "place-py-student-090",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyStudent090",
    "answerKey": "C",
    "category": "code-reading",
    "difficulty": 1,
    "targetGroups": [
      "student"
    ],
    "skillTags": [
      "code-reading",
      "execution-order",
      "student"
    ]
  },
  {
    "id": "place-py-student-091",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyStudent091",
    "answerKey": "A",
    "category": "code-reading",
    "difficulty": 2,
    "targetGroups": [
      "student"
    ],
    "skillTags": [
      "code-reading",
      "execution-order",
      "student"
    ]
  },
  {
    "id": "place-py-student-092",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyStudent092",
    "answerKey": "B",
    "category": "code-reading",
    "difficulty": 2,
    "targetGroups": [
      "student"
    ],
    "skillTags": [
      "code-reading",
      "execution-order",
      "student"
    ]
  },
  {
    "id": "place-py-student-093",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyStudent093",
    "answerKey": "C",
    "category": "code-reading",
    "difficulty": 3,
    "targetGroups": [
      "student"
    ],
    "skillTags": [
      "code-reading",
      "execution-order",
      "student"
    ]
  },
  {
    "id": "place-py-student-094",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyStudent094",
    "answerKey": "A",
    "category": "code-reading",
    "difficulty": 4,
    "targetGroups": [
      "student"
    ],
    "skillTags": [
      "code-reading",
      "execution-order",
      "student"
    ]
  },
  {
    "id": "place-py-student-095",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyStudent095",
    "answerKey": "C",
    "category": "readiness",
    "difficulty": 1,
    "targetGroups": [
      "student"
    ],
    "skillTags": [
      "learning-readiness",
      "study-habit",
      "student"
    ]
  },
  {
    "id": "place-py-student-096",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyStudent096",
    "answerKey": "B",
    "category": "readiness",
    "difficulty": 1,
    "targetGroups": [
      "student"
    ],
    "skillTags": [
      "learning-readiness",
      "study-habit",
      "student"
    ]
  },
  {
    "id": "place-py-student-097",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyStudent097",
    "answerKey": "A",
    "category": "readiness",
    "difficulty": 2,
    "targetGroups": [
      "student"
    ],
    "skillTags": [
      "learning-readiness",
      "study-habit",
      "student"
    ]
  },
  {
    "id": "place-py-student-098",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyStudent098",
    "answerKey": "C",
    "category": "readiness",
    "difficulty": 2,
    "targetGroups": [
      "student"
    ],
    "skillTags": [
      "learning-readiness",
      "study-habit",
      "student"
    ]
  },
  {
    "id": "place-py-student-099",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyStudent099",
    "answerKey": "D",
    "category": "readiness",
    "difficulty": 3,
    "targetGroups": [
      "student"
    ],
    "skillTags": [
      "learning-readiness",
      "study-habit",
      "student"
    ]
  },
  {
    "id": "place-py-student-100",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyStudent100",
    "answerKey": "A",
    "category": "readiness",
    "difficulty": 4,
    "targetGroups": [
      "student"
    ],
    "skillTags": [
      "learning-readiness",
      "study-habit",
      "student"
    ]
  },
  {
    "id": "place-py-beginner-001",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyBeginner001",
    "answerKey": "B",
    "category": "input-output",
    "difficulty": 1,
    "targetGroups": [
      "beginner"
    ],
    "skillTags": [
      "input-output",
      "program-flow",
      "beginner"
    ]
  },
  {
    "id": "place-py-beginner-002",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyBeginner002",
    "answerKey": "A",
    "category": "input-output",
    "difficulty": 1,
    "targetGroups": [
      "beginner"
    ],
    "skillTags": [
      "input-output",
      "program-flow",
      "beginner"
    ]
  },
  {
    "id": "place-py-beginner-003",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyBeginner003",
    "answerKey": "D",
    "category": "input-output",
    "difficulty": 1,
    "targetGroups": [
      "beginner"
    ],
    "skillTags": [
      "input-output",
      "program-flow",
      "beginner"
    ]
  },
  {
    "id": "place-py-beginner-004",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyBeginner004",
    "answerKey": "C",
    "category": "input-output",
    "difficulty": 2,
    "targetGroups": [
      "beginner"
    ],
    "skillTags": [
      "input-output",
      "program-flow",
      "beginner"
    ]
  },
  {
    "id": "place-py-beginner-005",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyBeginner005",
    "answerKey": "A",
    "category": "input-output",
    "difficulty": 2,
    "targetGroups": [
      "beginner"
    ],
    "skillTags": [
      "input-output",
      "program-flow",
      "beginner"
    ]
  },
  {
    "id": "place-py-beginner-006",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyBeginner006",
    "answerKey": "A",
    "category": "input-output",
    "difficulty": 3,
    "targetGroups": [
      "beginner"
    ],
    "skillTags": [
      "input-output",
      "program-flow",
      "beginner"
    ]
  },
  {
    "id": "place-py-beginner-007",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyBeginner007",
    "answerKey": "D",
    "category": "input-output",
    "difficulty": 4,
    "targetGroups": [
      "beginner"
    ],
    "skillTags": [
      "input-output",
      "program-flow",
      "beginner"
    ]
  },
  {
    "id": "place-py-beginner-008",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyBeginner008",
    "answerKey": "A",
    "category": "variable",
    "difficulty": 1,
    "targetGroups": [
      "beginner"
    ],
    "skillTags": [
      "variable",
      "assignment",
      "beginner"
    ]
  },
  {
    "id": "place-py-beginner-009",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyBeginner009",
    "answerKey": "A",
    "category": "variable",
    "difficulty": 1,
    "targetGroups": [
      "beginner"
    ],
    "skillTags": [
      "variable",
      "assignment",
      "beginner"
    ]
  },
  {
    "id": "place-py-beginner-010",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyBeginner010",
    "answerKey": "C",
    "category": "variable",
    "difficulty": 1,
    "targetGroups": [
      "beginner"
    ],
    "skillTags": [
      "variable",
      "assignment",
      "beginner"
    ]
  },
  {
    "id": "place-py-beginner-011",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyBeginner011",
    "answerKey": "C",
    "category": "variable",
    "difficulty": 2,
    "targetGroups": [
      "beginner"
    ],
    "skillTags": [
      "variable",
      "assignment",
      "beginner"
    ]
  },
  {
    "id": "place-py-beginner-012",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyBeginner012",
    "answerKey": "B",
    "category": "variable",
    "difficulty": 2,
    "targetGroups": [
      "beginner"
    ],
    "skillTags": [
      "variable",
      "assignment",
      "beginner"
    ]
  },
  {
    "id": "place-py-beginner-013",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyBeginner013",
    "answerKey": "C",
    "category": "variable",
    "difficulty": 3,
    "targetGroups": [
      "beginner"
    ],
    "skillTags": [
      "variable",
      "assignment",
      "beginner"
    ]
  },
  {
    "id": "place-py-beginner-014",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyBeginner014",
    "answerKey": "C",
    "category": "variable",
    "difficulty": 4,
    "targetGroups": [
      "beginner"
    ],
    "skillTags": [
      "variable",
      "assignment",
      "beginner"
    ]
  },
  {
    "id": "place-py-beginner-015",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyBeginner015",
    "answerKey": "A",
    "category": "condition",
    "difficulty": 1,
    "targetGroups": [
      "beginner"
    ],
    "skillTags": [
      "condition",
      "comparison",
      "beginner"
    ]
  },
  {
    "id": "place-py-beginner-016",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyBeginner016",
    "answerKey": "D",
    "category": "condition",
    "difficulty": 1,
    "targetGroups": [
      "beginner"
    ],
    "skillTags": [
      "condition",
      "comparison",
      "beginner"
    ]
  },
  {
    "id": "place-py-beginner-017",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyBeginner017",
    "answerKey": "B",
    "category": "condition",
    "difficulty": 1,
    "targetGroups": [
      "beginner"
    ],
    "skillTags": [
      "condition",
      "comparison",
      "beginner"
    ]
  },
  {
    "id": "place-py-beginner-018",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyBeginner018",
    "answerKey": "D",
    "category": "condition",
    "difficulty": 2,
    "targetGroups": [
      "beginner"
    ],
    "skillTags": [
      "condition",
      "comparison",
      "beginner"
    ]
  },
  {
    "id": "place-py-beginner-019",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyBeginner019",
    "answerKey": "B",
    "category": "condition",
    "difficulty": 2,
    "targetGroups": [
      "beginner"
    ],
    "skillTags": [
      "condition",
      "comparison",
      "beginner"
    ]
  },
  {
    "id": "place-py-beginner-020",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyBeginner020",
    "answerKey": "B",
    "category": "condition",
    "difficulty": 3,
    "targetGroups": [
      "beginner"
    ],
    "skillTags": [
      "condition",
      "comparison",
      "beginner"
    ]
  },
  {
    "id": "place-py-beginner-021",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyBeginner021",
    "answerKey": "C",
    "category": "condition",
    "difficulty": 4,
    "targetGroups": [
      "beginner"
    ],
    "skillTags": [
      "condition",
      "comparison",
      "beginner"
    ]
  },
  {
    "id": "place-py-beginner-022",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyBeginner022",
    "answerKey": "C",
    "category": "loop",
    "difficulty": 1,
    "targetGroups": [
      "beginner"
    ],
    "skillTags": [
      "loop",
      "repetition",
      "beginner"
    ]
  },
  {
    "id": "place-py-beginner-023",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyBeginner023",
    "answerKey": "C",
    "category": "loop",
    "difficulty": 1,
    "targetGroups": [
      "beginner"
    ],
    "skillTags": [
      "loop",
      "repetition",
      "beginner"
    ]
  },
  {
    "id": "place-py-beginner-024",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyBeginner024",
    "answerKey": "A",
    "category": "loop",
    "difficulty": 1,
    "targetGroups": [
      "beginner"
    ],
    "skillTags": [
      "loop",
      "repetition",
      "beginner"
    ]
  },
  {
    "id": "place-py-beginner-025",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyBeginner025",
    "answerKey": "B",
    "category": "loop",
    "difficulty": 2,
    "targetGroups": [
      "beginner"
    ],
    "skillTags": [
      "loop",
      "repetition",
      "beginner"
    ]
  },
  {
    "id": "place-py-beginner-026",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyBeginner026",
    "answerKey": "B",
    "category": "loop",
    "difficulty": 2,
    "targetGroups": [
      "beginner"
    ],
    "skillTags": [
      "loop",
      "repetition",
      "beginner"
    ]
  },
  {
    "id": "place-py-beginner-027",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyBeginner027",
    "answerKey": "C",
    "category": "loop",
    "difficulty": 3,
    "targetGroups": [
      "beginner"
    ],
    "skillTags": [
      "loop",
      "repetition",
      "beginner"
    ]
  },
  {
    "id": "place-py-beginner-028",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyBeginner028",
    "answerKey": "B",
    "category": "loop",
    "difficulty": 4,
    "targetGroups": [
      "beginner"
    ],
    "skillTags": [
      "loop",
      "repetition",
      "beginner"
    ]
  },
  {
    "id": "place-py-beginner-029",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyBeginner029",
    "answerKey": "A",
    "category": "data-type",
    "difficulty": 1,
    "targetGroups": [
      "beginner"
    ],
    "skillTags": [
      "data-type",
      "type-conversion",
      "beginner"
    ]
  },
  {
    "id": "place-py-beginner-030",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyBeginner030",
    "answerKey": "C",
    "category": "data-type",
    "difficulty": 1,
    "targetGroups": [
      "beginner"
    ],
    "skillTags": [
      "data-type",
      "type-conversion",
      "beginner"
    ]
  },
  {
    "id": "place-py-beginner-031",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyBeginner031",
    "answerKey": "B",
    "category": "data-type",
    "difficulty": 1,
    "targetGroups": [
      "beginner"
    ],
    "skillTags": [
      "data-type",
      "type-conversion",
      "beginner"
    ]
  },
  {
    "id": "place-py-beginner-032",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyBeginner032",
    "answerKey": "D",
    "category": "data-type",
    "difficulty": 2,
    "targetGroups": [
      "beginner"
    ],
    "skillTags": [
      "data-type",
      "type-conversion",
      "beginner"
    ]
  },
  {
    "id": "place-py-beginner-033",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyBeginner033",
    "answerKey": "C",
    "category": "data-type",
    "difficulty": 2,
    "targetGroups": [
      "beginner"
    ],
    "skillTags": [
      "data-type",
      "type-conversion",
      "beginner"
    ]
  },
  {
    "id": "place-py-beginner-034",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyBeginner034",
    "answerKey": "C",
    "category": "data-type",
    "difficulty": 3,
    "targetGroups": [
      "beginner"
    ],
    "skillTags": [
      "data-type",
      "type-conversion",
      "beginner"
    ]
  },
  {
    "id": "place-py-beginner-035",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyBeginner035",
    "answerKey": "C",
    "category": "data-type",
    "difficulty": 4,
    "targetGroups": [
      "beginner"
    ],
    "skillTags": [
      "data-type",
      "type-conversion",
      "beginner"
    ]
  },
  {
    "id": "place-py-beginner-036",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyBeginner036",
    "answerKey": "D",
    "category": "list",
    "difficulty": 1,
    "targetGroups": [
      "beginner"
    ],
    "skillTags": [
      "list",
      "collection",
      "beginner"
    ]
  },
  {
    "id": "place-py-beginner-037",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyBeginner037",
    "answerKey": "B",
    "category": "list",
    "difficulty": 1,
    "targetGroups": [
      "beginner"
    ],
    "skillTags": [
      "list",
      "collection",
      "beginner"
    ]
  },
  {
    "id": "place-py-beginner-038",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyBeginner038",
    "answerKey": "A",
    "category": "list",
    "difficulty": 1,
    "targetGroups": [
      "beginner"
    ],
    "skillTags": [
      "list",
      "collection",
      "beginner"
    ]
  },
  {
    "id": "place-py-beginner-039",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyBeginner039",
    "answerKey": "C",
    "category": "list",
    "difficulty": 2,
    "targetGroups": [
      "beginner"
    ],
    "skillTags": [
      "list",
      "collection",
      "beginner"
    ]
  },
  {
    "id": "place-py-beginner-040",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyBeginner040",
    "answerKey": "B",
    "category": "list",
    "difficulty": 2,
    "targetGroups": [
      "beginner"
    ],
    "skillTags": [
      "list",
      "collection",
      "beginner"
    ]
  },
  {
    "id": "place-py-beginner-041",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyBeginner041",
    "answerKey": "D",
    "category": "list",
    "difficulty": 3,
    "targetGroups": [
      "beginner"
    ],
    "skillTags": [
      "list",
      "collection",
      "beginner"
    ]
  },
  {
    "id": "place-py-beginner-042",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyBeginner042",
    "answerKey": "C",
    "category": "list",
    "difficulty": 4,
    "targetGroups": [
      "beginner"
    ],
    "skillTags": [
      "list",
      "collection",
      "beginner"
    ]
  },
  {
    "id": "place-py-beginner-043",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyBeginner043",
    "answerKey": "A",
    "category": "function",
    "difficulty": 1,
    "targetGroups": [
      "beginner"
    ],
    "skillTags": [
      "function",
      "reuse",
      "beginner"
    ]
  },
  {
    "id": "place-py-beginner-044",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyBeginner044",
    "answerKey": "D",
    "category": "function",
    "difficulty": 1,
    "targetGroups": [
      "beginner"
    ],
    "skillTags": [
      "function",
      "reuse",
      "beginner"
    ]
  },
  {
    "id": "place-py-beginner-045",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyBeginner045",
    "answerKey": "A",
    "category": "function",
    "difficulty": 1,
    "targetGroups": [
      "beginner"
    ],
    "skillTags": [
      "function",
      "reuse",
      "beginner"
    ]
  },
  {
    "id": "place-py-beginner-046",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyBeginner046",
    "answerKey": "A",
    "category": "function",
    "difficulty": 2,
    "targetGroups": [
      "beginner"
    ],
    "skillTags": [
      "function",
      "reuse",
      "beginner"
    ]
  },
  {
    "id": "place-py-beginner-047",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyBeginner047",
    "answerKey": "C",
    "category": "function",
    "difficulty": 2,
    "targetGroups": [
      "beginner"
    ],
    "skillTags": [
      "function",
      "reuse",
      "beginner"
    ]
  },
  {
    "id": "place-py-beginner-048",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyBeginner048",
    "answerKey": "A",
    "category": "function",
    "difficulty": 3,
    "targetGroups": [
      "beginner"
    ],
    "skillTags": [
      "function",
      "reuse",
      "beginner"
    ]
  },
  {
    "id": "place-py-beginner-049",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyBeginner049",
    "answerKey": "A",
    "category": "function",
    "difficulty": 4,
    "targetGroups": [
      "beginner"
    ],
    "skillTags": [
      "function",
      "reuse",
      "beginner"
    ]
  },
  {
    "id": "place-py-beginner-050",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyBeginner050",
    "answerKey": "C",
    "category": "debugging",
    "difficulty": 1,
    "targetGroups": [
      "beginner"
    ],
    "skillTags": [
      "debugging",
      "trace",
      "beginner"
    ]
  },
  {
    "id": "place-py-beginner-051",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyBeginner051",
    "answerKey": "C",
    "category": "debugging",
    "difficulty": 1,
    "targetGroups": [
      "beginner"
    ],
    "skillTags": [
      "debugging",
      "trace",
      "beginner"
    ]
  },
  {
    "id": "place-py-beginner-052",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyBeginner052",
    "answerKey": "B",
    "category": "debugging",
    "difficulty": 1,
    "targetGroups": [
      "beginner"
    ],
    "skillTags": [
      "debugging",
      "trace",
      "beginner"
    ]
  },
  {
    "id": "place-py-beginner-053",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyBeginner053",
    "answerKey": "D",
    "category": "debugging",
    "difficulty": 2,
    "targetGroups": [
      "beginner"
    ],
    "skillTags": [
      "debugging",
      "trace",
      "beginner"
    ]
  },
  {
    "id": "place-py-beginner-054",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyBeginner054",
    "answerKey": "C",
    "category": "debugging",
    "difficulty": 2,
    "targetGroups": [
      "beginner"
    ],
    "skillTags": [
      "debugging",
      "trace",
      "beginner"
    ]
  },
  {
    "id": "place-py-beginner-055",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyBeginner055",
    "answerKey": "D",
    "category": "debugging",
    "difficulty": 3,
    "targetGroups": [
      "beginner"
    ],
    "skillTags": [
      "debugging",
      "trace",
      "beginner"
    ]
  },
  {
    "id": "place-py-beginner-056",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyBeginner056",
    "answerKey": "A",
    "category": "debugging",
    "difficulty": 4,
    "targetGroups": [
      "beginner"
    ],
    "skillTags": [
      "debugging",
      "trace",
      "beginner"
    ]
  },
  {
    "id": "place-py-beginner-057",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyBeginner057",
    "answerKey": "A",
    "category": "algorithm",
    "difficulty": 1,
    "targetGroups": [
      "beginner"
    ],
    "skillTags": [
      "algorithm",
      "step-order",
      "beginner"
    ]
  },
  {
    "id": "place-py-beginner-058",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyBeginner058",
    "answerKey": "D",
    "category": "algorithm",
    "difficulty": 1,
    "targetGroups": [
      "beginner"
    ],
    "skillTags": [
      "algorithm",
      "step-order",
      "beginner"
    ]
  },
  {
    "id": "place-py-beginner-059",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyBeginner059",
    "answerKey": "B",
    "category": "algorithm",
    "difficulty": 1,
    "targetGroups": [
      "beginner"
    ],
    "skillTags": [
      "algorithm",
      "step-order",
      "beginner"
    ]
  },
  {
    "id": "place-py-beginner-060",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyBeginner060",
    "answerKey": "B",
    "category": "algorithm",
    "difficulty": 2,
    "targetGroups": [
      "beginner"
    ],
    "skillTags": [
      "algorithm",
      "step-order",
      "beginner"
    ]
  },
  {
    "id": "place-py-beginner-061",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyBeginner061",
    "answerKey": "B",
    "category": "algorithm",
    "difficulty": 2,
    "targetGroups": [
      "beginner"
    ],
    "skillTags": [
      "algorithm",
      "step-order",
      "beginner"
    ]
  },
  {
    "id": "place-py-beginner-062",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyBeginner062",
    "answerKey": "C",
    "category": "algorithm",
    "difficulty": 3,
    "targetGroups": [
      "beginner"
    ],
    "skillTags": [
      "algorithm",
      "step-order",
      "beginner"
    ]
  },
  {
    "id": "place-py-beginner-063",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyBeginner063",
    "answerKey": "A",
    "category": "algorithm",
    "difficulty": 4,
    "targetGroups": [
      "beginner"
    ],
    "skillTags": [
      "algorithm",
      "step-order",
      "beginner"
    ]
  },
  {
    "id": "place-py-beginner-064",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyBeginner064",
    "answerKey": "B",
    "category": "problem-solving",
    "difficulty": 1,
    "targetGroups": [
      "beginner"
    ],
    "skillTags": [
      "problem-solving",
      "decomposition",
      "beginner"
    ]
  },
  {
    "id": "place-py-beginner-065",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyBeginner065",
    "answerKey": "C",
    "category": "problem-solving",
    "difficulty": 1,
    "targetGroups": [
      "beginner"
    ],
    "skillTags": [
      "problem-solving",
      "decomposition",
      "beginner"
    ]
  },
  {
    "id": "place-py-beginner-066",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyBeginner066",
    "answerKey": "A",
    "category": "problem-solving",
    "difficulty": 1,
    "targetGroups": [
      "beginner"
    ],
    "skillTags": [
      "problem-solving",
      "decomposition",
      "beginner"
    ]
  },
  {
    "id": "place-py-beginner-067",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyBeginner067",
    "answerKey": "A",
    "category": "problem-solving",
    "difficulty": 2,
    "targetGroups": [
      "beginner"
    ],
    "skillTags": [
      "problem-solving",
      "decomposition",
      "beginner"
    ]
  },
  {
    "id": "place-py-beginner-068",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyBeginner068",
    "answerKey": "B",
    "category": "problem-solving",
    "difficulty": 2,
    "targetGroups": [
      "beginner"
    ],
    "skillTags": [
      "problem-solving",
      "decomposition",
      "beginner"
    ]
  },
  {
    "id": "place-py-beginner-069",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyBeginner069",
    "answerKey": "D",
    "category": "problem-solving",
    "difficulty": 3,
    "targetGroups": [
      "beginner"
    ],
    "skillTags": [
      "problem-solving",
      "decomposition",
      "beginner"
    ]
  },
  {
    "id": "place-py-beginner-070",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyBeginner070",
    "answerKey": "A",
    "category": "problem-solving",
    "difficulty": 4,
    "targetGroups": [
      "beginner"
    ],
    "skillTags": [
      "problem-solving",
      "decomposition",
      "beginner"
    ]
  },
  {
    "id": "place-py-beginner-071",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyBeginner071",
    "answerKey": "B",
    "category": "file-data",
    "difficulty": 1,
    "targetGroups": [
      "beginner"
    ],
    "skillTags": [
      "file",
      "data-processing",
      "beginner"
    ]
  },
  {
    "id": "place-py-beginner-072",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyBeginner072",
    "answerKey": "D",
    "category": "file-data",
    "difficulty": 1,
    "targetGroups": [
      "beginner"
    ],
    "skillTags": [
      "file",
      "data-processing",
      "beginner"
    ]
  },
  {
    "id": "place-py-beginner-073",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyBeginner073",
    "answerKey": "B",
    "category": "file-data",
    "difficulty": 2,
    "targetGroups": [
      "beginner"
    ],
    "skillTags": [
      "file",
      "data-processing",
      "beginner"
    ]
  },
  {
    "id": "place-py-beginner-074",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyBeginner074",
    "answerKey": "D",
    "category": "file-data",
    "difficulty": 2,
    "targetGroups": [
      "beginner"
    ],
    "skillTags": [
      "file",
      "data-processing",
      "beginner"
    ]
  },
  {
    "id": "place-py-beginner-075",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyBeginner075",
    "answerKey": "D",
    "category": "file-data",
    "difficulty": 3,
    "targetGroups": [
      "beginner"
    ],
    "skillTags": [
      "file",
      "data-processing",
      "beginner"
    ]
  },
  {
    "id": "place-py-beginner-076",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyBeginner076",
    "answerKey": "D",
    "category": "file-data",
    "difficulty": 4,
    "targetGroups": [
      "beginner"
    ],
    "skillTags": [
      "file",
      "data-processing",
      "beginner"
    ]
  },
  {
    "id": "place-py-beginner-077",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyBeginner077",
    "answerKey": "D",
    "category": "automation",
    "difficulty": 1,
    "targetGroups": [
      "beginner"
    ],
    "skillTags": [
      "automation",
      "workflow",
      "beginner"
    ]
  },
  {
    "id": "place-py-beginner-078",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyBeginner078",
    "answerKey": "D",
    "category": "automation",
    "difficulty": 1,
    "targetGroups": [
      "beginner"
    ],
    "skillTags": [
      "automation",
      "workflow",
      "beginner"
    ]
  },
  {
    "id": "place-py-beginner-079",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyBeginner079",
    "answerKey": "B",
    "category": "automation",
    "difficulty": 2,
    "targetGroups": [
      "beginner"
    ],
    "skillTags": [
      "automation",
      "workflow",
      "beginner"
    ]
  },
  {
    "id": "place-py-beginner-080",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyBeginner080",
    "answerKey": "C",
    "category": "automation",
    "difficulty": 2,
    "targetGroups": [
      "beginner"
    ],
    "skillTags": [
      "automation",
      "workflow",
      "beginner"
    ]
  },
  {
    "id": "place-py-beginner-081",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyBeginner081",
    "answerKey": "A",
    "category": "automation",
    "difficulty": 3,
    "targetGroups": [
      "beginner"
    ],
    "skillTags": [
      "automation",
      "workflow",
      "beginner"
    ]
  },
  {
    "id": "place-py-beginner-082",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyBeginner082",
    "answerKey": "C",
    "category": "automation",
    "difficulty": 4,
    "targetGroups": [
      "beginner"
    ],
    "skillTags": [
      "automation",
      "workflow",
      "beginner"
    ]
  },
  {
    "id": "place-py-beginner-083",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyBeginner083",
    "answerKey": "B",
    "category": "data-reasoning",
    "difficulty": 1,
    "targetGroups": [
      "beginner"
    ],
    "skillTags": [
      "data",
      "table-reading",
      "beginner"
    ]
  },
  {
    "id": "place-py-beginner-084",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyBeginner084",
    "answerKey": "D",
    "category": "data-reasoning",
    "difficulty": 1,
    "targetGroups": [
      "beginner"
    ],
    "skillTags": [
      "data",
      "table-reading",
      "beginner"
    ]
  },
  {
    "id": "place-py-beginner-085",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyBeginner085",
    "answerKey": "D",
    "category": "data-reasoning",
    "difficulty": 2,
    "targetGroups": [
      "beginner"
    ],
    "skillTags": [
      "data",
      "table-reading",
      "beginner"
    ]
  },
  {
    "id": "place-py-beginner-086",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyBeginner086",
    "answerKey": "A",
    "category": "data-reasoning",
    "difficulty": 2,
    "targetGroups": [
      "beginner"
    ],
    "skillTags": [
      "data",
      "table-reading",
      "beginner"
    ]
  },
  {
    "id": "place-py-beginner-087",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyBeginner087",
    "answerKey": "C",
    "category": "data-reasoning",
    "difficulty": 3,
    "targetGroups": [
      "beginner"
    ],
    "skillTags": [
      "data",
      "table-reading",
      "beginner"
    ]
  },
  {
    "id": "place-py-beginner-088",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyBeginner088",
    "answerKey": "B",
    "category": "data-reasoning",
    "difficulty": 4,
    "targetGroups": [
      "beginner"
    ],
    "skillTags": [
      "data",
      "table-reading",
      "beginner"
    ]
  },
  {
    "id": "place-py-beginner-089",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyBeginner089",
    "answerKey": "C",
    "category": "code-reading",
    "difficulty": 1,
    "targetGroups": [
      "beginner"
    ],
    "skillTags": [
      "code-reading",
      "execution-order",
      "beginner"
    ]
  },
  {
    "id": "place-py-beginner-090",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyBeginner090",
    "answerKey": "D",
    "category": "code-reading",
    "difficulty": 1,
    "targetGroups": [
      "beginner"
    ],
    "skillTags": [
      "code-reading",
      "execution-order",
      "beginner"
    ]
  },
  {
    "id": "place-py-beginner-091",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyBeginner091",
    "answerKey": "B",
    "category": "code-reading",
    "difficulty": 2,
    "targetGroups": [
      "beginner"
    ],
    "skillTags": [
      "code-reading",
      "execution-order",
      "beginner"
    ]
  },
  {
    "id": "place-py-beginner-092",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyBeginner092",
    "answerKey": "C",
    "category": "code-reading",
    "difficulty": 2,
    "targetGroups": [
      "beginner"
    ],
    "skillTags": [
      "code-reading",
      "execution-order",
      "beginner"
    ]
  },
  {
    "id": "place-py-beginner-093",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyBeginner093",
    "answerKey": "D",
    "category": "code-reading",
    "difficulty": 3,
    "targetGroups": [
      "beginner"
    ],
    "skillTags": [
      "code-reading",
      "execution-order",
      "beginner"
    ]
  },
  {
    "id": "place-py-beginner-094",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyBeginner094",
    "answerKey": "D",
    "category": "code-reading",
    "difficulty": 4,
    "targetGroups": [
      "beginner"
    ],
    "skillTags": [
      "code-reading",
      "execution-order",
      "beginner"
    ]
  },
  {
    "id": "place-py-beginner-095",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyBeginner095",
    "answerKey": "A",
    "category": "readiness",
    "difficulty": 1,
    "targetGroups": [
      "beginner"
    ],
    "skillTags": [
      "learning-readiness",
      "study-habit",
      "beginner"
    ]
  },
  {
    "id": "place-py-beginner-096",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyBeginner096",
    "answerKey": "D",
    "category": "readiness",
    "difficulty": 1,
    "targetGroups": [
      "beginner"
    ],
    "skillTags": [
      "learning-readiness",
      "study-habit",
      "beginner"
    ]
  },
  {
    "id": "place-py-beginner-097",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyBeginner097",
    "answerKey": "D",
    "category": "readiness",
    "difficulty": 2,
    "targetGroups": [
      "beginner"
    ],
    "skillTags": [
      "learning-readiness",
      "study-habit",
      "beginner"
    ]
  },
  {
    "id": "place-py-beginner-098",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyBeginner098",
    "answerKey": "C",
    "category": "readiness",
    "difficulty": 2,
    "targetGroups": [
      "beginner"
    ],
    "skillTags": [
      "learning-readiness",
      "study-habit",
      "beginner"
    ]
  },
  {
    "id": "place-py-beginner-099",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyBeginner099",
    "answerKey": "C",
    "category": "readiness",
    "difficulty": 3,
    "targetGroups": [
      "beginner"
    ],
    "skillTags": [
      "learning-readiness",
      "study-habit",
      "beginner"
    ]
  },
  {
    "id": "place-py-beginner-100",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyBeginner100",
    "answerKey": "B",
    "category": "readiness",
    "difficulty": 4,
    "targetGroups": [
      "beginner"
    ],
    "skillTags": [
      "learning-readiness",
      "study-habit",
      "beginner"
    ]
  },
  {
    "id": "place-py-working-adult-001",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyWorkingAdult001",
    "answerKey": "B",
    "category": "input-output",
    "difficulty": 1,
    "targetGroups": [
      "working-adult"
    ],
    "skillTags": [
      "input-output",
      "program-flow",
      "working-adult"
    ]
  },
  {
    "id": "place-py-working-adult-002",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyWorkingAdult002",
    "answerKey": "A",
    "category": "input-output",
    "difficulty": 1,
    "targetGroups": [
      "working-adult"
    ],
    "skillTags": [
      "input-output",
      "program-flow",
      "working-adult"
    ]
  },
  {
    "id": "place-py-working-adult-003",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyWorkingAdult003",
    "answerKey": "A",
    "category": "input-output",
    "difficulty": 1,
    "targetGroups": [
      "working-adult"
    ],
    "skillTags": [
      "input-output",
      "program-flow",
      "working-adult"
    ]
  },
  {
    "id": "place-py-working-adult-004",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyWorkingAdult004",
    "answerKey": "A",
    "category": "input-output",
    "difficulty": 2,
    "targetGroups": [
      "working-adult"
    ],
    "skillTags": [
      "input-output",
      "program-flow",
      "working-adult"
    ]
  },
  {
    "id": "place-py-working-adult-005",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyWorkingAdult005",
    "answerKey": "A",
    "category": "input-output",
    "difficulty": 2,
    "targetGroups": [
      "working-adult"
    ],
    "skillTags": [
      "input-output",
      "program-flow",
      "working-adult"
    ]
  },
  {
    "id": "place-py-working-adult-006",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyWorkingAdult006",
    "answerKey": "D",
    "category": "input-output",
    "difficulty": 3,
    "targetGroups": [
      "working-adult"
    ],
    "skillTags": [
      "input-output",
      "program-flow",
      "working-adult"
    ]
  },
  {
    "id": "place-py-working-adult-007",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyWorkingAdult007",
    "answerKey": "B",
    "category": "input-output",
    "difficulty": 4,
    "targetGroups": [
      "working-adult"
    ],
    "skillTags": [
      "input-output",
      "program-flow",
      "working-adult"
    ]
  },
  {
    "id": "place-py-working-adult-008",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyWorkingAdult008",
    "answerKey": "A",
    "category": "variable",
    "difficulty": 1,
    "targetGroups": [
      "working-adult"
    ],
    "skillTags": [
      "variable",
      "assignment",
      "working-adult"
    ]
  },
  {
    "id": "place-py-working-adult-009",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyWorkingAdult009",
    "answerKey": "D",
    "category": "variable",
    "difficulty": 1,
    "targetGroups": [
      "working-adult"
    ],
    "skillTags": [
      "variable",
      "assignment",
      "working-adult"
    ]
  },
  {
    "id": "place-py-working-adult-010",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyWorkingAdult010",
    "answerKey": "A",
    "category": "variable",
    "difficulty": 1,
    "targetGroups": [
      "working-adult"
    ],
    "skillTags": [
      "variable",
      "assignment",
      "working-adult"
    ]
  },
  {
    "id": "place-py-working-adult-011",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyWorkingAdult011",
    "answerKey": "B",
    "category": "variable",
    "difficulty": 2,
    "targetGroups": [
      "working-adult"
    ],
    "skillTags": [
      "variable",
      "assignment",
      "working-adult"
    ]
  },
  {
    "id": "place-py-working-adult-012",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyWorkingAdult012",
    "answerKey": "C",
    "category": "variable",
    "difficulty": 2,
    "targetGroups": [
      "working-adult"
    ],
    "skillTags": [
      "variable",
      "assignment",
      "working-adult"
    ]
  },
  {
    "id": "place-py-working-adult-013",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyWorkingAdult013",
    "answerKey": "D",
    "category": "variable",
    "difficulty": 3,
    "targetGroups": [
      "working-adult"
    ],
    "skillTags": [
      "variable",
      "assignment",
      "working-adult"
    ]
  },
  {
    "id": "place-py-working-adult-014",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyWorkingAdult014",
    "answerKey": "B",
    "category": "variable",
    "difficulty": 4,
    "targetGroups": [
      "working-adult"
    ],
    "skillTags": [
      "variable",
      "assignment",
      "working-adult"
    ]
  },
  {
    "id": "place-py-working-adult-015",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyWorkingAdult015",
    "answerKey": "B",
    "category": "condition",
    "difficulty": 1,
    "targetGroups": [
      "working-adult"
    ],
    "skillTags": [
      "condition",
      "comparison",
      "working-adult"
    ]
  },
  {
    "id": "place-py-working-adult-016",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyWorkingAdult016",
    "answerKey": "A",
    "category": "condition",
    "difficulty": 1,
    "targetGroups": [
      "working-adult"
    ],
    "skillTags": [
      "condition",
      "comparison",
      "working-adult"
    ]
  },
  {
    "id": "place-py-working-adult-017",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyWorkingAdult017",
    "answerKey": "B",
    "category": "condition",
    "difficulty": 1,
    "targetGroups": [
      "working-adult"
    ],
    "skillTags": [
      "condition",
      "comparison",
      "working-adult"
    ]
  },
  {
    "id": "place-py-working-adult-018",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyWorkingAdult018",
    "answerKey": "D",
    "category": "condition",
    "difficulty": 2,
    "targetGroups": [
      "working-adult"
    ],
    "skillTags": [
      "condition",
      "comparison",
      "working-adult"
    ]
  },
  {
    "id": "place-py-working-adult-019",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyWorkingAdult019",
    "answerKey": "D",
    "category": "condition",
    "difficulty": 2,
    "targetGroups": [
      "working-adult"
    ],
    "skillTags": [
      "condition",
      "comparison",
      "working-adult"
    ]
  },
  {
    "id": "place-py-working-adult-020",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyWorkingAdult020",
    "answerKey": "C",
    "category": "condition",
    "difficulty": 3,
    "targetGroups": [
      "working-adult"
    ],
    "skillTags": [
      "condition",
      "comparison",
      "working-adult"
    ]
  },
  {
    "id": "place-py-working-adult-021",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyWorkingAdult021",
    "answerKey": "D",
    "category": "condition",
    "difficulty": 4,
    "targetGroups": [
      "working-adult"
    ],
    "skillTags": [
      "condition",
      "comparison",
      "working-adult"
    ]
  },
  {
    "id": "place-py-working-adult-022",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyWorkingAdult022",
    "answerKey": "D",
    "category": "loop",
    "difficulty": 1,
    "targetGroups": [
      "working-adult"
    ],
    "skillTags": [
      "loop",
      "repetition",
      "working-adult"
    ]
  },
  {
    "id": "place-py-working-adult-023",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyWorkingAdult023",
    "answerKey": "B",
    "category": "loop",
    "difficulty": 1,
    "targetGroups": [
      "working-adult"
    ],
    "skillTags": [
      "loop",
      "repetition",
      "working-adult"
    ]
  },
  {
    "id": "place-py-working-adult-024",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyWorkingAdult024",
    "answerKey": "B",
    "category": "loop",
    "difficulty": 1,
    "targetGroups": [
      "working-adult"
    ],
    "skillTags": [
      "loop",
      "repetition",
      "working-adult"
    ]
  },
  {
    "id": "place-py-working-adult-025",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyWorkingAdult025",
    "answerKey": "C",
    "category": "loop",
    "difficulty": 2,
    "targetGroups": [
      "working-adult"
    ],
    "skillTags": [
      "loop",
      "repetition",
      "working-adult"
    ]
  },
  {
    "id": "place-py-working-adult-026",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyWorkingAdult026",
    "answerKey": "B",
    "category": "loop",
    "difficulty": 2,
    "targetGroups": [
      "working-adult"
    ],
    "skillTags": [
      "loop",
      "repetition",
      "working-adult"
    ]
  },
  {
    "id": "place-py-working-adult-027",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyWorkingAdult027",
    "answerKey": "B",
    "category": "loop",
    "difficulty": 3,
    "targetGroups": [
      "working-adult"
    ],
    "skillTags": [
      "loop",
      "repetition",
      "working-adult"
    ]
  },
  {
    "id": "place-py-working-adult-028",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyWorkingAdult028",
    "answerKey": "A",
    "category": "loop",
    "difficulty": 4,
    "targetGroups": [
      "working-adult"
    ],
    "skillTags": [
      "loop",
      "repetition",
      "working-adult"
    ]
  },
  {
    "id": "place-py-working-adult-029",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyWorkingAdult029",
    "answerKey": "D",
    "category": "data-type",
    "difficulty": 1,
    "targetGroups": [
      "working-adult"
    ],
    "skillTags": [
      "data-type",
      "type-conversion",
      "working-adult"
    ]
  },
  {
    "id": "place-py-working-adult-030",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyWorkingAdult030",
    "answerKey": "D",
    "category": "data-type",
    "difficulty": 1,
    "targetGroups": [
      "working-adult"
    ],
    "skillTags": [
      "data-type",
      "type-conversion",
      "working-adult"
    ]
  },
  {
    "id": "place-py-working-adult-031",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyWorkingAdult031",
    "answerKey": "C",
    "category": "data-type",
    "difficulty": 1,
    "targetGroups": [
      "working-adult"
    ],
    "skillTags": [
      "data-type",
      "type-conversion",
      "working-adult"
    ]
  },
  {
    "id": "place-py-working-adult-032",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyWorkingAdult032",
    "answerKey": "B",
    "category": "data-type",
    "difficulty": 2,
    "targetGroups": [
      "working-adult"
    ],
    "skillTags": [
      "data-type",
      "type-conversion",
      "working-adult"
    ]
  },
  {
    "id": "place-py-working-adult-033",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyWorkingAdult033",
    "answerKey": "D",
    "category": "data-type",
    "difficulty": 2,
    "targetGroups": [
      "working-adult"
    ],
    "skillTags": [
      "data-type",
      "type-conversion",
      "working-adult"
    ]
  },
  {
    "id": "place-py-working-adult-034",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyWorkingAdult034",
    "answerKey": "C",
    "category": "data-type",
    "difficulty": 3,
    "targetGroups": [
      "working-adult"
    ],
    "skillTags": [
      "data-type",
      "type-conversion",
      "working-adult"
    ]
  },
  {
    "id": "place-py-working-adult-035",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyWorkingAdult035",
    "answerKey": "A",
    "category": "data-type",
    "difficulty": 4,
    "targetGroups": [
      "working-adult"
    ],
    "skillTags": [
      "data-type",
      "type-conversion",
      "working-adult"
    ]
  },
  {
    "id": "place-py-working-adult-036",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyWorkingAdult036",
    "answerKey": "D",
    "category": "list",
    "difficulty": 1,
    "targetGroups": [
      "working-adult"
    ],
    "skillTags": [
      "list",
      "collection",
      "working-adult"
    ]
  },
  {
    "id": "place-py-working-adult-037",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyWorkingAdult037",
    "answerKey": "A",
    "category": "list",
    "difficulty": 1,
    "targetGroups": [
      "working-adult"
    ],
    "skillTags": [
      "list",
      "collection",
      "working-adult"
    ]
  },
  {
    "id": "place-py-working-adult-038",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyWorkingAdult038",
    "answerKey": "A",
    "category": "list",
    "difficulty": 1,
    "targetGroups": [
      "working-adult"
    ],
    "skillTags": [
      "list",
      "collection",
      "working-adult"
    ]
  },
  {
    "id": "place-py-working-adult-039",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyWorkingAdult039",
    "answerKey": "B",
    "category": "list",
    "difficulty": 2,
    "targetGroups": [
      "working-adult"
    ],
    "skillTags": [
      "list",
      "collection",
      "working-adult"
    ]
  },
  {
    "id": "place-py-working-adult-040",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyWorkingAdult040",
    "answerKey": "C",
    "category": "list",
    "difficulty": 2,
    "targetGroups": [
      "working-adult"
    ],
    "skillTags": [
      "list",
      "collection",
      "working-adult"
    ]
  },
  {
    "id": "place-py-working-adult-041",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyWorkingAdult041",
    "answerKey": "D",
    "category": "list",
    "difficulty": 3,
    "targetGroups": [
      "working-adult"
    ],
    "skillTags": [
      "list",
      "collection",
      "working-adult"
    ]
  },
  {
    "id": "place-py-working-adult-042",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyWorkingAdult042",
    "answerKey": "C",
    "category": "list",
    "difficulty": 4,
    "targetGroups": [
      "working-adult"
    ],
    "skillTags": [
      "list",
      "collection",
      "working-adult"
    ]
  },
  {
    "id": "place-py-working-adult-043",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyWorkingAdult043",
    "answerKey": "C",
    "category": "function",
    "difficulty": 1,
    "targetGroups": [
      "working-adult"
    ],
    "skillTags": [
      "function",
      "reuse",
      "working-adult"
    ]
  },
  {
    "id": "place-py-working-adult-044",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyWorkingAdult044",
    "answerKey": "B",
    "category": "function",
    "difficulty": 1,
    "targetGroups": [
      "working-adult"
    ],
    "skillTags": [
      "function",
      "reuse",
      "working-adult"
    ]
  },
  {
    "id": "place-py-working-adult-045",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyWorkingAdult045",
    "answerKey": "B",
    "category": "function",
    "difficulty": 1,
    "targetGroups": [
      "working-adult"
    ],
    "skillTags": [
      "function",
      "reuse",
      "working-adult"
    ]
  },
  {
    "id": "place-py-working-adult-046",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyWorkingAdult046",
    "answerKey": "A",
    "category": "function",
    "difficulty": 2,
    "targetGroups": [
      "working-adult"
    ],
    "skillTags": [
      "function",
      "reuse",
      "working-adult"
    ]
  },
  {
    "id": "place-py-working-adult-047",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyWorkingAdult047",
    "answerKey": "B",
    "category": "function",
    "difficulty": 2,
    "targetGroups": [
      "working-adult"
    ],
    "skillTags": [
      "function",
      "reuse",
      "working-adult"
    ]
  },
  {
    "id": "place-py-working-adult-048",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyWorkingAdult048",
    "answerKey": "A",
    "category": "function",
    "difficulty": 3,
    "targetGroups": [
      "working-adult"
    ],
    "skillTags": [
      "function",
      "reuse",
      "working-adult"
    ]
  },
  {
    "id": "place-py-working-adult-049",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyWorkingAdult049",
    "answerKey": "D",
    "category": "function",
    "difficulty": 4,
    "targetGroups": [
      "working-adult"
    ],
    "skillTags": [
      "function",
      "reuse",
      "working-adult"
    ]
  },
  {
    "id": "place-py-working-adult-050",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyWorkingAdult050",
    "answerKey": "D",
    "category": "debugging",
    "difficulty": 1,
    "targetGroups": [
      "working-adult"
    ],
    "skillTags": [
      "debugging",
      "trace",
      "working-adult"
    ]
  },
  {
    "id": "place-py-working-adult-051",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyWorkingAdult051",
    "answerKey": "A",
    "category": "debugging",
    "difficulty": 1,
    "targetGroups": [
      "working-adult"
    ],
    "skillTags": [
      "debugging",
      "trace",
      "working-adult"
    ]
  },
  {
    "id": "place-py-working-adult-052",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyWorkingAdult052",
    "answerKey": "D",
    "category": "debugging",
    "difficulty": 1,
    "targetGroups": [
      "working-adult"
    ],
    "skillTags": [
      "debugging",
      "trace",
      "working-adult"
    ]
  },
  {
    "id": "place-py-working-adult-053",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyWorkingAdult053",
    "answerKey": "B",
    "category": "debugging",
    "difficulty": 2,
    "targetGroups": [
      "working-adult"
    ],
    "skillTags": [
      "debugging",
      "trace",
      "working-adult"
    ]
  },
  {
    "id": "place-py-working-adult-054",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyWorkingAdult054",
    "answerKey": "A",
    "category": "debugging",
    "difficulty": 2,
    "targetGroups": [
      "working-adult"
    ],
    "skillTags": [
      "debugging",
      "trace",
      "working-adult"
    ]
  },
  {
    "id": "place-py-working-adult-055",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyWorkingAdult055",
    "answerKey": "C",
    "category": "debugging",
    "difficulty": 3,
    "targetGroups": [
      "working-adult"
    ],
    "skillTags": [
      "debugging",
      "trace",
      "working-adult"
    ]
  },
  {
    "id": "place-py-working-adult-056",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyWorkingAdult056",
    "answerKey": "C",
    "category": "debugging",
    "difficulty": 4,
    "targetGroups": [
      "working-adult"
    ],
    "skillTags": [
      "debugging",
      "trace",
      "working-adult"
    ]
  },
  {
    "id": "place-py-working-adult-057",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyWorkingAdult057",
    "answerKey": "A",
    "category": "algorithm",
    "difficulty": 1,
    "targetGroups": [
      "working-adult"
    ],
    "skillTags": [
      "algorithm",
      "step-order",
      "working-adult"
    ]
  },
  {
    "id": "place-py-working-adult-058",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyWorkingAdult058",
    "answerKey": "B",
    "category": "algorithm",
    "difficulty": 1,
    "targetGroups": [
      "working-adult"
    ],
    "skillTags": [
      "algorithm",
      "step-order",
      "working-adult"
    ]
  },
  {
    "id": "place-py-working-adult-059",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyWorkingAdult059",
    "answerKey": "C",
    "category": "algorithm",
    "difficulty": 1,
    "targetGroups": [
      "working-adult"
    ],
    "skillTags": [
      "algorithm",
      "step-order",
      "working-adult"
    ]
  },
  {
    "id": "place-py-working-adult-060",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyWorkingAdult060",
    "answerKey": "B",
    "category": "algorithm",
    "difficulty": 2,
    "targetGroups": [
      "working-adult"
    ],
    "skillTags": [
      "algorithm",
      "step-order",
      "working-adult"
    ]
  },
  {
    "id": "place-py-working-adult-061",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyWorkingAdult061",
    "answerKey": "C",
    "category": "algorithm",
    "difficulty": 2,
    "targetGroups": [
      "working-adult"
    ],
    "skillTags": [
      "algorithm",
      "step-order",
      "working-adult"
    ]
  },
  {
    "id": "place-py-working-adult-062",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyWorkingAdult062",
    "answerKey": "C",
    "category": "algorithm",
    "difficulty": 3,
    "targetGroups": [
      "working-adult"
    ],
    "skillTags": [
      "algorithm",
      "step-order",
      "working-adult"
    ]
  },
  {
    "id": "place-py-working-adult-063",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyWorkingAdult063",
    "answerKey": "B",
    "category": "algorithm",
    "difficulty": 4,
    "targetGroups": [
      "working-adult"
    ],
    "skillTags": [
      "algorithm",
      "step-order",
      "working-adult"
    ]
  },
  {
    "id": "place-py-working-adult-064",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyWorkingAdult064",
    "answerKey": "A",
    "category": "problem-solving",
    "difficulty": 1,
    "targetGroups": [
      "working-adult"
    ],
    "skillTags": [
      "problem-solving",
      "decomposition",
      "working-adult"
    ]
  },
  {
    "id": "place-py-working-adult-065",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyWorkingAdult065",
    "answerKey": "C",
    "category": "problem-solving",
    "difficulty": 1,
    "targetGroups": [
      "working-adult"
    ],
    "skillTags": [
      "problem-solving",
      "decomposition",
      "working-adult"
    ]
  },
  {
    "id": "place-py-working-adult-066",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyWorkingAdult066",
    "answerKey": "B",
    "category": "problem-solving",
    "difficulty": 1,
    "targetGroups": [
      "working-adult"
    ],
    "skillTags": [
      "problem-solving",
      "decomposition",
      "working-adult"
    ]
  },
  {
    "id": "place-py-working-adult-067",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyWorkingAdult067",
    "answerKey": "D",
    "category": "problem-solving",
    "difficulty": 2,
    "targetGroups": [
      "working-adult"
    ],
    "skillTags": [
      "problem-solving",
      "decomposition",
      "working-adult"
    ]
  },
  {
    "id": "place-py-working-adult-068",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyWorkingAdult068",
    "answerKey": "C",
    "category": "problem-solving",
    "difficulty": 2,
    "targetGroups": [
      "working-adult"
    ],
    "skillTags": [
      "problem-solving",
      "decomposition",
      "working-adult"
    ]
  },
  {
    "id": "place-py-working-adult-069",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyWorkingAdult069",
    "answerKey": "A",
    "category": "problem-solving",
    "difficulty": 3,
    "targetGroups": [
      "working-adult"
    ],
    "skillTags": [
      "problem-solving",
      "decomposition",
      "working-adult"
    ]
  },
  {
    "id": "place-py-working-adult-070",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyWorkingAdult070",
    "answerKey": "A",
    "category": "problem-solving",
    "difficulty": 4,
    "targetGroups": [
      "working-adult"
    ],
    "skillTags": [
      "problem-solving",
      "decomposition",
      "working-adult"
    ]
  },
  {
    "id": "place-py-working-adult-071",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyWorkingAdult071",
    "answerKey": "B",
    "category": "file-data",
    "difficulty": 1,
    "targetGroups": [
      "working-adult"
    ],
    "skillTags": [
      "file",
      "data-processing",
      "working-adult"
    ]
  },
  {
    "id": "place-py-working-adult-072",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyWorkingAdult072",
    "answerKey": "C",
    "category": "file-data",
    "difficulty": 1,
    "targetGroups": [
      "working-adult"
    ],
    "skillTags": [
      "file",
      "data-processing",
      "working-adult"
    ]
  },
  {
    "id": "place-py-working-adult-073",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyWorkingAdult073",
    "answerKey": "C",
    "category": "file-data",
    "difficulty": 2,
    "targetGroups": [
      "working-adult"
    ],
    "skillTags": [
      "file",
      "data-processing",
      "working-adult"
    ]
  },
  {
    "id": "place-py-working-adult-074",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyWorkingAdult074",
    "answerKey": "A",
    "category": "file-data",
    "difficulty": 2,
    "targetGroups": [
      "working-adult"
    ],
    "skillTags": [
      "file",
      "data-processing",
      "working-adult"
    ]
  },
  {
    "id": "place-py-working-adult-075",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyWorkingAdult075",
    "answerKey": "B",
    "category": "file-data",
    "difficulty": 3,
    "targetGroups": [
      "working-adult"
    ],
    "skillTags": [
      "file",
      "data-processing",
      "working-adult"
    ]
  },
  {
    "id": "place-py-working-adult-076",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyWorkingAdult076",
    "answerKey": "A",
    "category": "file-data",
    "difficulty": 4,
    "targetGroups": [
      "working-adult"
    ],
    "skillTags": [
      "file",
      "data-processing",
      "working-adult"
    ]
  },
  {
    "id": "place-py-working-adult-077",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyWorkingAdult077",
    "answerKey": "A",
    "category": "automation",
    "difficulty": 1,
    "targetGroups": [
      "working-adult"
    ],
    "skillTags": [
      "automation",
      "workflow",
      "working-adult"
    ]
  },
  {
    "id": "place-py-working-adult-078",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyWorkingAdult078",
    "answerKey": "D",
    "category": "automation",
    "difficulty": 1,
    "targetGroups": [
      "working-adult"
    ],
    "skillTags": [
      "automation",
      "workflow",
      "working-adult"
    ]
  },
  {
    "id": "place-py-working-adult-079",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyWorkingAdult079",
    "answerKey": "A",
    "category": "automation",
    "difficulty": 2,
    "targetGroups": [
      "working-adult"
    ],
    "skillTags": [
      "automation",
      "workflow",
      "working-adult"
    ]
  },
  {
    "id": "place-py-working-adult-080",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyWorkingAdult080",
    "answerKey": "B",
    "category": "automation",
    "difficulty": 2,
    "targetGroups": [
      "working-adult"
    ],
    "skillTags": [
      "automation",
      "workflow",
      "working-adult"
    ]
  },
  {
    "id": "place-py-working-adult-081",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyWorkingAdult081",
    "answerKey": "C",
    "category": "automation",
    "difficulty": 3,
    "targetGroups": [
      "working-adult"
    ],
    "skillTags": [
      "automation",
      "workflow",
      "working-adult"
    ]
  },
  {
    "id": "place-py-working-adult-082",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyWorkingAdult082",
    "answerKey": "B",
    "category": "automation",
    "difficulty": 4,
    "targetGroups": [
      "working-adult"
    ],
    "skillTags": [
      "automation",
      "workflow",
      "working-adult"
    ]
  },
  {
    "id": "place-py-working-adult-083",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyWorkingAdult083",
    "answerKey": "C",
    "category": "data-reasoning",
    "difficulty": 1,
    "targetGroups": [
      "working-adult"
    ],
    "skillTags": [
      "data",
      "table-reading",
      "working-adult"
    ]
  },
  {
    "id": "place-py-working-adult-084",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyWorkingAdult084",
    "answerKey": "B",
    "category": "data-reasoning",
    "difficulty": 1,
    "targetGroups": [
      "working-adult"
    ],
    "skillTags": [
      "data",
      "table-reading",
      "working-adult"
    ]
  },
  {
    "id": "place-py-working-adult-085",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyWorkingAdult085",
    "answerKey": "C",
    "category": "data-reasoning",
    "difficulty": 2,
    "targetGroups": [
      "working-adult"
    ],
    "skillTags": [
      "data",
      "table-reading",
      "working-adult"
    ]
  },
  {
    "id": "place-py-working-adult-086",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyWorkingAdult086",
    "answerKey": "C",
    "category": "data-reasoning",
    "difficulty": 2,
    "targetGroups": [
      "working-adult"
    ],
    "skillTags": [
      "data",
      "table-reading",
      "working-adult"
    ]
  },
  {
    "id": "place-py-working-adult-087",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyWorkingAdult087",
    "answerKey": "C",
    "category": "data-reasoning",
    "difficulty": 3,
    "targetGroups": [
      "working-adult"
    ],
    "skillTags": [
      "data",
      "table-reading",
      "working-adult"
    ]
  },
  {
    "id": "place-py-working-adult-088",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyWorkingAdult088",
    "answerKey": "C",
    "category": "data-reasoning",
    "difficulty": 4,
    "targetGroups": [
      "working-adult"
    ],
    "skillTags": [
      "data",
      "table-reading",
      "working-adult"
    ]
  },
  {
    "id": "place-py-working-adult-089",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyWorkingAdult089",
    "answerKey": "D",
    "category": "code-reading",
    "difficulty": 1,
    "targetGroups": [
      "working-adult"
    ],
    "skillTags": [
      "code-reading",
      "execution-order",
      "working-adult"
    ]
  },
  {
    "id": "place-py-working-adult-090",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyWorkingAdult090",
    "answerKey": "B",
    "category": "code-reading",
    "difficulty": 1,
    "targetGroups": [
      "working-adult"
    ],
    "skillTags": [
      "code-reading",
      "execution-order",
      "working-adult"
    ]
  },
  {
    "id": "place-py-working-adult-091",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyWorkingAdult091",
    "answerKey": "A",
    "category": "code-reading",
    "difficulty": 2,
    "targetGroups": [
      "working-adult"
    ],
    "skillTags": [
      "code-reading",
      "execution-order",
      "working-adult"
    ]
  },
  {
    "id": "place-py-working-adult-092",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyWorkingAdult092",
    "answerKey": "D",
    "category": "code-reading",
    "difficulty": 2,
    "targetGroups": [
      "working-adult"
    ],
    "skillTags": [
      "code-reading",
      "execution-order",
      "working-adult"
    ]
  },
  {
    "id": "place-py-working-adult-093",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyWorkingAdult093",
    "answerKey": "A",
    "category": "code-reading",
    "difficulty": 3,
    "targetGroups": [
      "working-adult"
    ],
    "skillTags": [
      "code-reading",
      "execution-order",
      "working-adult"
    ]
  },
  {
    "id": "place-py-working-adult-094",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyWorkingAdult094",
    "answerKey": "B",
    "category": "code-reading",
    "difficulty": 4,
    "targetGroups": [
      "working-adult"
    ],
    "skillTags": [
      "code-reading",
      "execution-order",
      "working-adult"
    ]
  },
  {
    "id": "place-py-working-adult-095",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyWorkingAdult095",
    "answerKey": "D",
    "category": "readiness",
    "difficulty": 1,
    "targetGroups": [
      "working-adult"
    ],
    "skillTags": [
      "learning-readiness",
      "study-habit",
      "working-adult"
    ]
  },
  {
    "id": "place-py-working-adult-096",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyWorkingAdult096",
    "answerKey": "B",
    "category": "readiness",
    "difficulty": 1,
    "targetGroups": [
      "working-adult"
    ],
    "skillTags": [
      "learning-readiness",
      "study-habit",
      "working-adult"
    ]
  },
  {
    "id": "place-py-working-adult-097",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyWorkingAdult097",
    "answerKey": "C",
    "category": "readiness",
    "difficulty": 2,
    "targetGroups": [
      "working-adult"
    ],
    "skillTags": [
      "learning-readiness",
      "study-habit",
      "working-adult"
    ]
  },
  {
    "id": "place-py-working-adult-098",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyWorkingAdult098",
    "answerKey": "C",
    "category": "readiness",
    "difficulty": 2,
    "targetGroups": [
      "working-adult"
    ],
    "skillTags": [
      "learning-readiness",
      "study-habit",
      "working-adult"
    ]
  },
  {
    "id": "place-py-working-adult-099",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyWorkingAdult099",
    "answerKey": "A",
    "category": "readiness",
    "difficulty": 3,
    "targetGroups": [
      "working-adult"
    ],
    "skillTags": [
      "learning-readiness",
      "study-habit",
      "working-adult"
    ]
  },
  {
    "id": "place-py-working-adult-100",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyWorkingAdult100",
    "answerKey": "A",
    "category": "readiness",
    "difficulty": 4,
    "targetGroups": [
      "working-adult"
    ],
    "skillTags": [
      "learning-readiness",
      "study-habit",
      "working-adult"
    ]
  },
  {
    "id": "place-py-career-switcher-001",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyCareerSwitcher001",
    "answerKey": "D",
    "category": "input-output",
    "difficulty": 1,
    "targetGroups": [
      "career-switcher"
    ],
    "skillTags": [
      "input-output",
      "program-flow",
      "career-switcher"
    ]
  },
  {
    "id": "place-py-career-switcher-002",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyCareerSwitcher002",
    "answerKey": "A",
    "category": "input-output",
    "difficulty": 1,
    "targetGroups": [
      "career-switcher"
    ],
    "skillTags": [
      "input-output",
      "program-flow",
      "career-switcher"
    ]
  },
  {
    "id": "place-py-career-switcher-003",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyCareerSwitcher003",
    "answerKey": "C",
    "category": "input-output",
    "difficulty": 1,
    "targetGroups": [
      "career-switcher"
    ],
    "skillTags": [
      "input-output",
      "program-flow",
      "career-switcher"
    ]
  },
  {
    "id": "place-py-career-switcher-004",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyCareerSwitcher004",
    "answerKey": "B",
    "category": "input-output",
    "difficulty": 2,
    "targetGroups": [
      "career-switcher"
    ],
    "skillTags": [
      "input-output",
      "program-flow",
      "career-switcher"
    ]
  },
  {
    "id": "place-py-career-switcher-005",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyCareerSwitcher005",
    "answerKey": "C",
    "category": "input-output",
    "difficulty": 2,
    "targetGroups": [
      "career-switcher"
    ],
    "skillTags": [
      "input-output",
      "program-flow",
      "career-switcher"
    ]
  },
  {
    "id": "place-py-career-switcher-006",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyCareerSwitcher006",
    "answerKey": "C",
    "category": "input-output",
    "difficulty": 3,
    "targetGroups": [
      "career-switcher"
    ],
    "skillTags": [
      "input-output",
      "program-flow",
      "career-switcher"
    ]
  },
  {
    "id": "place-py-career-switcher-007",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyCareerSwitcher007",
    "answerKey": "D",
    "category": "input-output",
    "difficulty": 4,
    "targetGroups": [
      "career-switcher"
    ],
    "skillTags": [
      "input-output",
      "program-flow",
      "career-switcher"
    ]
  },
  {
    "id": "place-py-career-switcher-008",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyCareerSwitcher008",
    "answerKey": "A",
    "category": "variable",
    "difficulty": 1,
    "targetGroups": [
      "career-switcher"
    ],
    "skillTags": [
      "variable",
      "assignment",
      "career-switcher"
    ]
  },
  {
    "id": "place-py-career-switcher-009",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyCareerSwitcher009",
    "answerKey": "B",
    "category": "variable",
    "difficulty": 1,
    "targetGroups": [
      "career-switcher"
    ],
    "skillTags": [
      "variable",
      "assignment",
      "career-switcher"
    ]
  },
  {
    "id": "place-py-career-switcher-010",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyCareerSwitcher010",
    "answerKey": "D",
    "category": "variable",
    "difficulty": 1,
    "targetGroups": [
      "career-switcher"
    ],
    "skillTags": [
      "variable",
      "assignment",
      "career-switcher"
    ]
  },
  {
    "id": "place-py-career-switcher-011",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyCareerSwitcher011",
    "answerKey": "B",
    "category": "variable",
    "difficulty": 2,
    "targetGroups": [
      "career-switcher"
    ],
    "skillTags": [
      "variable",
      "assignment",
      "career-switcher"
    ]
  },
  {
    "id": "place-py-career-switcher-012",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyCareerSwitcher012",
    "answerKey": "C",
    "category": "variable",
    "difficulty": 2,
    "targetGroups": [
      "career-switcher"
    ],
    "skillTags": [
      "variable",
      "assignment",
      "career-switcher"
    ]
  },
  {
    "id": "place-py-career-switcher-013",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyCareerSwitcher013",
    "answerKey": "A",
    "category": "variable",
    "difficulty": 3,
    "targetGroups": [
      "career-switcher"
    ],
    "skillTags": [
      "variable",
      "assignment",
      "career-switcher"
    ]
  },
  {
    "id": "place-py-career-switcher-014",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyCareerSwitcher014",
    "answerKey": "D",
    "category": "variable",
    "difficulty": 4,
    "targetGroups": [
      "career-switcher"
    ],
    "skillTags": [
      "variable",
      "assignment",
      "career-switcher"
    ]
  },
  {
    "id": "place-py-career-switcher-015",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyCareerSwitcher015",
    "answerKey": "B",
    "category": "condition",
    "difficulty": 1,
    "targetGroups": [
      "career-switcher"
    ],
    "skillTags": [
      "condition",
      "comparison",
      "career-switcher"
    ]
  },
  {
    "id": "place-py-career-switcher-016",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyCareerSwitcher016",
    "answerKey": "C",
    "category": "condition",
    "difficulty": 1,
    "targetGroups": [
      "career-switcher"
    ],
    "skillTags": [
      "condition",
      "comparison",
      "career-switcher"
    ]
  },
  {
    "id": "place-py-career-switcher-017",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyCareerSwitcher017",
    "answerKey": "A",
    "category": "condition",
    "difficulty": 1,
    "targetGroups": [
      "career-switcher"
    ],
    "skillTags": [
      "condition",
      "comparison",
      "career-switcher"
    ]
  },
  {
    "id": "place-py-career-switcher-018",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyCareerSwitcher018",
    "answerKey": "C",
    "category": "condition",
    "difficulty": 2,
    "targetGroups": [
      "career-switcher"
    ],
    "skillTags": [
      "condition",
      "comparison",
      "career-switcher"
    ]
  },
  {
    "id": "place-py-career-switcher-019",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyCareerSwitcher019",
    "answerKey": "D",
    "category": "condition",
    "difficulty": 2,
    "targetGroups": [
      "career-switcher"
    ],
    "skillTags": [
      "condition",
      "comparison",
      "career-switcher"
    ]
  },
  {
    "id": "place-py-career-switcher-020",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyCareerSwitcher020",
    "answerKey": "D",
    "category": "condition",
    "difficulty": 3,
    "targetGroups": [
      "career-switcher"
    ],
    "skillTags": [
      "condition",
      "comparison",
      "career-switcher"
    ]
  },
  {
    "id": "place-py-career-switcher-021",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyCareerSwitcher021",
    "answerKey": "B",
    "category": "condition",
    "difficulty": 4,
    "targetGroups": [
      "career-switcher"
    ],
    "skillTags": [
      "condition",
      "comparison",
      "career-switcher"
    ]
  },
  {
    "id": "place-py-career-switcher-022",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyCareerSwitcher022",
    "answerKey": "B",
    "category": "loop",
    "difficulty": 1,
    "targetGroups": [
      "career-switcher"
    ],
    "skillTags": [
      "loop",
      "repetition",
      "career-switcher"
    ]
  },
  {
    "id": "place-py-career-switcher-023",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyCareerSwitcher023",
    "answerKey": "A",
    "category": "loop",
    "difficulty": 1,
    "targetGroups": [
      "career-switcher"
    ],
    "skillTags": [
      "loop",
      "repetition",
      "career-switcher"
    ]
  },
  {
    "id": "place-py-career-switcher-024",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyCareerSwitcher024",
    "answerKey": "B",
    "category": "loop",
    "difficulty": 1,
    "targetGroups": [
      "career-switcher"
    ],
    "skillTags": [
      "loop",
      "repetition",
      "career-switcher"
    ]
  },
  {
    "id": "place-py-career-switcher-025",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyCareerSwitcher025",
    "answerKey": "D",
    "category": "loop",
    "difficulty": 2,
    "targetGroups": [
      "career-switcher"
    ],
    "skillTags": [
      "loop",
      "repetition",
      "career-switcher"
    ]
  },
  {
    "id": "place-py-career-switcher-026",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyCareerSwitcher026",
    "answerKey": "A",
    "category": "loop",
    "difficulty": 2,
    "targetGroups": [
      "career-switcher"
    ],
    "skillTags": [
      "loop",
      "repetition",
      "career-switcher"
    ]
  },
  {
    "id": "place-py-career-switcher-027",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyCareerSwitcher027",
    "answerKey": "C",
    "category": "loop",
    "difficulty": 3,
    "targetGroups": [
      "career-switcher"
    ],
    "skillTags": [
      "loop",
      "repetition",
      "career-switcher"
    ]
  },
  {
    "id": "place-py-career-switcher-028",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyCareerSwitcher028",
    "answerKey": "C",
    "category": "loop",
    "difficulty": 4,
    "targetGroups": [
      "career-switcher"
    ],
    "skillTags": [
      "loop",
      "repetition",
      "career-switcher"
    ]
  },
  {
    "id": "place-py-career-switcher-029",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyCareerSwitcher029",
    "answerKey": "D",
    "category": "data-type",
    "difficulty": 1,
    "targetGroups": [
      "career-switcher"
    ],
    "skillTags": [
      "data-type",
      "type-conversion",
      "career-switcher"
    ]
  },
  {
    "id": "place-py-career-switcher-030",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyCareerSwitcher030",
    "answerKey": "D",
    "category": "data-type",
    "difficulty": 1,
    "targetGroups": [
      "career-switcher"
    ],
    "skillTags": [
      "data-type",
      "type-conversion",
      "career-switcher"
    ]
  },
  {
    "id": "place-py-career-switcher-031",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyCareerSwitcher031",
    "answerKey": "D",
    "category": "data-type",
    "difficulty": 1,
    "targetGroups": [
      "career-switcher"
    ],
    "skillTags": [
      "data-type",
      "type-conversion",
      "career-switcher"
    ]
  },
  {
    "id": "place-py-career-switcher-032",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyCareerSwitcher032",
    "answerKey": "B",
    "category": "data-type",
    "difficulty": 2,
    "targetGroups": [
      "career-switcher"
    ],
    "skillTags": [
      "data-type",
      "type-conversion",
      "career-switcher"
    ]
  },
  {
    "id": "place-py-career-switcher-033",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyCareerSwitcher033",
    "answerKey": "D",
    "category": "data-type",
    "difficulty": 2,
    "targetGroups": [
      "career-switcher"
    ],
    "skillTags": [
      "data-type",
      "type-conversion",
      "career-switcher"
    ]
  },
  {
    "id": "place-py-career-switcher-034",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyCareerSwitcher034",
    "answerKey": "C",
    "category": "data-type",
    "difficulty": 3,
    "targetGroups": [
      "career-switcher"
    ],
    "skillTags": [
      "data-type",
      "type-conversion",
      "career-switcher"
    ]
  },
  {
    "id": "place-py-career-switcher-035",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyCareerSwitcher035",
    "answerKey": "B",
    "category": "data-type",
    "difficulty": 4,
    "targetGroups": [
      "career-switcher"
    ],
    "skillTags": [
      "data-type",
      "type-conversion",
      "career-switcher"
    ]
  },
  {
    "id": "place-py-career-switcher-036",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyCareerSwitcher036",
    "answerKey": "A",
    "category": "list",
    "difficulty": 1,
    "targetGroups": [
      "career-switcher"
    ],
    "skillTags": [
      "list",
      "collection",
      "career-switcher"
    ]
  },
  {
    "id": "place-py-career-switcher-037",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyCareerSwitcher037",
    "answerKey": "D",
    "category": "list",
    "difficulty": 1,
    "targetGroups": [
      "career-switcher"
    ],
    "skillTags": [
      "list",
      "collection",
      "career-switcher"
    ]
  },
  {
    "id": "place-py-career-switcher-038",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyCareerSwitcher038",
    "answerKey": "D",
    "category": "list",
    "difficulty": 1,
    "targetGroups": [
      "career-switcher"
    ],
    "skillTags": [
      "list",
      "collection",
      "career-switcher"
    ]
  },
  {
    "id": "place-py-career-switcher-039",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyCareerSwitcher039",
    "answerKey": "C",
    "category": "list",
    "difficulty": 2,
    "targetGroups": [
      "career-switcher"
    ],
    "skillTags": [
      "list",
      "collection",
      "career-switcher"
    ]
  },
  {
    "id": "place-py-career-switcher-040",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyCareerSwitcher040",
    "answerKey": "A",
    "category": "list",
    "difficulty": 2,
    "targetGroups": [
      "career-switcher"
    ],
    "skillTags": [
      "list",
      "collection",
      "career-switcher"
    ]
  },
  {
    "id": "place-py-career-switcher-041",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyCareerSwitcher041",
    "answerKey": "D",
    "category": "list",
    "difficulty": 3,
    "targetGroups": [
      "career-switcher"
    ],
    "skillTags": [
      "list",
      "collection",
      "career-switcher"
    ]
  },
  {
    "id": "place-py-career-switcher-042",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyCareerSwitcher042",
    "answerKey": "A",
    "category": "list",
    "difficulty": 4,
    "targetGroups": [
      "career-switcher"
    ],
    "skillTags": [
      "list",
      "collection",
      "career-switcher"
    ]
  },
  {
    "id": "place-py-career-switcher-043",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyCareerSwitcher043",
    "answerKey": "C",
    "category": "function",
    "difficulty": 1,
    "targetGroups": [
      "career-switcher"
    ],
    "skillTags": [
      "function",
      "reuse",
      "career-switcher"
    ]
  },
  {
    "id": "place-py-career-switcher-044",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyCareerSwitcher044",
    "answerKey": "C",
    "category": "function",
    "difficulty": 1,
    "targetGroups": [
      "career-switcher"
    ],
    "skillTags": [
      "function",
      "reuse",
      "career-switcher"
    ]
  },
  {
    "id": "place-py-career-switcher-045",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyCareerSwitcher045",
    "answerKey": "D",
    "category": "function",
    "difficulty": 1,
    "targetGroups": [
      "career-switcher"
    ],
    "skillTags": [
      "function",
      "reuse",
      "career-switcher"
    ]
  },
  {
    "id": "place-py-career-switcher-046",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyCareerSwitcher046",
    "answerKey": "C",
    "category": "function",
    "difficulty": 2,
    "targetGroups": [
      "career-switcher"
    ],
    "skillTags": [
      "function",
      "reuse",
      "career-switcher"
    ]
  },
  {
    "id": "place-py-career-switcher-047",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyCareerSwitcher047",
    "answerKey": "C",
    "category": "function",
    "difficulty": 2,
    "targetGroups": [
      "career-switcher"
    ],
    "skillTags": [
      "function",
      "reuse",
      "career-switcher"
    ]
  },
  {
    "id": "place-py-career-switcher-048",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyCareerSwitcher048",
    "answerKey": "D",
    "category": "function",
    "difficulty": 3,
    "targetGroups": [
      "career-switcher"
    ],
    "skillTags": [
      "function",
      "reuse",
      "career-switcher"
    ]
  },
  {
    "id": "place-py-career-switcher-049",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyCareerSwitcher049",
    "answerKey": "B",
    "category": "function",
    "difficulty": 4,
    "targetGroups": [
      "career-switcher"
    ],
    "skillTags": [
      "function",
      "reuse",
      "career-switcher"
    ]
  },
  {
    "id": "place-py-career-switcher-050",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyCareerSwitcher050",
    "answerKey": "C",
    "category": "debugging",
    "difficulty": 1,
    "targetGroups": [
      "career-switcher"
    ],
    "skillTags": [
      "debugging",
      "trace",
      "career-switcher"
    ]
  },
  {
    "id": "place-py-career-switcher-051",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyCareerSwitcher051",
    "answerKey": "A",
    "category": "debugging",
    "difficulty": 1,
    "targetGroups": [
      "career-switcher"
    ],
    "skillTags": [
      "debugging",
      "trace",
      "career-switcher"
    ]
  },
  {
    "id": "place-py-career-switcher-052",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyCareerSwitcher052",
    "answerKey": "A",
    "category": "debugging",
    "difficulty": 1,
    "targetGroups": [
      "career-switcher"
    ],
    "skillTags": [
      "debugging",
      "trace",
      "career-switcher"
    ]
  },
  {
    "id": "place-py-career-switcher-053",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyCareerSwitcher053",
    "answerKey": "B",
    "category": "debugging",
    "difficulty": 2,
    "targetGroups": [
      "career-switcher"
    ],
    "skillTags": [
      "debugging",
      "trace",
      "career-switcher"
    ]
  },
  {
    "id": "place-py-career-switcher-054",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyCareerSwitcher054",
    "answerKey": "B",
    "category": "debugging",
    "difficulty": 2,
    "targetGroups": [
      "career-switcher"
    ],
    "skillTags": [
      "debugging",
      "trace",
      "career-switcher"
    ]
  },
  {
    "id": "place-py-career-switcher-055",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyCareerSwitcher055",
    "answerKey": "A",
    "category": "debugging",
    "difficulty": 3,
    "targetGroups": [
      "career-switcher"
    ],
    "skillTags": [
      "debugging",
      "trace",
      "career-switcher"
    ]
  },
  {
    "id": "place-py-career-switcher-056",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyCareerSwitcher056",
    "answerKey": "A",
    "category": "debugging",
    "difficulty": 4,
    "targetGroups": [
      "career-switcher"
    ],
    "skillTags": [
      "debugging",
      "trace",
      "career-switcher"
    ]
  },
  {
    "id": "place-py-career-switcher-057",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyCareerSwitcher057",
    "answerKey": "B",
    "category": "algorithm",
    "difficulty": 1,
    "targetGroups": [
      "career-switcher"
    ],
    "skillTags": [
      "algorithm",
      "step-order",
      "career-switcher"
    ]
  },
  {
    "id": "place-py-career-switcher-058",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyCareerSwitcher058",
    "answerKey": "C",
    "category": "algorithm",
    "difficulty": 1,
    "targetGroups": [
      "career-switcher"
    ],
    "skillTags": [
      "algorithm",
      "step-order",
      "career-switcher"
    ]
  },
  {
    "id": "place-py-career-switcher-059",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyCareerSwitcher059",
    "answerKey": "B",
    "category": "algorithm",
    "difficulty": 1,
    "targetGroups": [
      "career-switcher"
    ],
    "skillTags": [
      "algorithm",
      "step-order",
      "career-switcher"
    ]
  },
  {
    "id": "place-py-career-switcher-060",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyCareerSwitcher060",
    "answerKey": "D",
    "category": "algorithm",
    "difficulty": 2,
    "targetGroups": [
      "career-switcher"
    ],
    "skillTags": [
      "algorithm",
      "step-order",
      "career-switcher"
    ]
  },
  {
    "id": "place-py-career-switcher-061",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyCareerSwitcher061",
    "answerKey": "A",
    "category": "algorithm",
    "difficulty": 2,
    "targetGroups": [
      "career-switcher"
    ],
    "skillTags": [
      "algorithm",
      "step-order",
      "career-switcher"
    ]
  },
  {
    "id": "place-py-career-switcher-062",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyCareerSwitcher062",
    "answerKey": "A",
    "category": "algorithm",
    "difficulty": 3,
    "targetGroups": [
      "career-switcher"
    ],
    "skillTags": [
      "algorithm",
      "step-order",
      "career-switcher"
    ]
  },
  {
    "id": "place-py-career-switcher-063",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyCareerSwitcher063",
    "answerKey": "D",
    "category": "algorithm",
    "difficulty": 4,
    "targetGroups": [
      "career-switcher"
    ],
    "skillTags": [
      "algorithm",
      "step-order",
      "career-switcher"
    ]
  },
  {
    "id": "place-py-career-switcher-064",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyCareerSwitcher064",
    "answerKey": "A",
    "category": "problem-solving",
    "difficulty": 1,
    "targetGroups": [
      "career-switcher"
    ],
    "skillTags": [
      "problem-solving",
      "decomposition",
      "career-switcher"
    ]
  },
  {
    "id": "place-py-career-switcher-065",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyCareerSwitcher065",
    "answerKey": "A",
    "category": "problem-solving",
    "difficulty": 1,
    "targetGroups": [
      "career-switcher"
    ],
    "skillTags": [
      "problem-solving",
      "decomposition",
      "career-switcher"
    ]
  },
  {
    "id": "place-py-career-switcher-066",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyCareerSwitcher066",
    "answerKey": "A",
    "category": "problem-solving",
    "difficulty": 1,
    "targetGroups": [
      "career-switcher"
    ],
    "skillTags": [
      "problem-solving",
      "decomposition",
      "career-switcher"
    ]
  },
  {
    "id": "place-py-career-switcher-067",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyCareerSwitcher067",
    "answerKey": "D",
    "category": "problem-solving",
    "difficulty": 2,
    "targetGroups": [
      "career-switcher"
    ],
    "skillTags": [
      "problem-solving",
      "decomposition",
      "career-switcher"
    ]
  },
  {
    "id": "place-py-career-switcher-068",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyCareerSwitcher068",
    "answerKey": "B",
    "category": "problem-solving",
    "difficulty": 2,
    "targetGroups": [
      "career-switcher"
    ],
    "skillTags": [
      "problem-solving",
      "decomposition",
      "career-switcher"
    ]
  },
  {
    "id": "place-py-career-switcher-069",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyCareerSwitcher069",
    "answerKey": "A",
    "category": "problem-solving",
    "difficulty": 3,
    "targetGroups": [
      "career-switcher"
    ],
    "skillTags": [
      "problem-solving",
      "decomposition",
      "career-switcher"
    ]
  },
  {
    "id": "place-py-career-switcher-070",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyCareerSwitcher070",
    "answerKey": "B",
    "category": "problem-solving",
    "difficulty": 4,
    "targetGroups": [
      "career-switcher"
    ],
    "skillTags": [
      "problem-solving",
      "decomposition",
      "career-switcher"
    ]
  },
  {
    "id": "place-py-career-switcher-071",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyCareerSwitcher071",
    "answerKey": "A",
    "category": "file-data",
    "difficulty": 1,
    "targetGroups": [
      "career-switcher"
    ],
    "skillTags": [
      "file",
      "data-processing",
      "career-switcher"
    ]
  },
  {
    "id": "place-py-career-switcher-072",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyCareerSwitcher072",
    "answerKey": "D",
    "category": "file-data",
    "difficulty": 1,
    "targetGroups": [
      "career-switcher"
    ],
    "skillTags": [
      "file",
      "data-processing",
      "career-switcher"
    ]
  },
  {
    "id": "place-py-career-switcher-073",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyCareerSwitcher073",
    "answerKey": "C",
    "category": "file-data",
    "difficulty": 2,
    "targetGroups": [
      "career-switcher"
    ],
    "skillTags": [
      "file",
      "data-processing",
      "career-switcher"
    ]
  },
  {
    "id": "place-py-career-switcher-074",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyCareerSwitcher074",
    "answerKey": "A",
    "category": "file-data",
    "difficulty": 2,
    "targetGroups": [
      "career-switcher"
    ],
    "skillTags": [
      "file",
      "data-processing",
      "career-switcher"
    ]
  },
  {
    "id": "place-py-career-switcher-075",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyCareerSwitcher075",
    "answerKey": "D",
    "category": "file-data",
    "difficulty": 3,
    "targetGroups": [
      "career-switcher"
    ],
    "skillTags": [
      "file",
      "data-processing",
      "career-switcher"
    ]
  },
  {
    "id": "place-py-career-switcher-076",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyCareerSwitcher076",
    "answerKey": "A",
    "category": "file-data",
    "difficulty": 4,
    "targetGroups": [
      "career-switcher"
    ],
    "skillTags": [
      "file",
      "data-processing",
      "career-switcher"
    ]
  },
  {
    "id": "place-py-career-switcher-077",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyCareerSwitcher077",
    "answerKey": "D",
    "category": "automation",
    "difficulty": 1,
    "targetGroups": [
      "career-switcher"
    ],
    "skillTags": [
      "automation",
      "workflow",
      "career-switcher"
    ]
  },
  {
    "id": "place-py-career-switcher-078",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyCareerSwitcher078",
    "answerKey": "C",
    "category": "automation",
    "difficulty": 1,
    "targetGroups": [
      "career-switcher"
    ],
    "skillTags": [
      "automation",
      "workflow",
      "career-switcher"
    ]
  },
  {
    "id": "place-py-career-switcher-079",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyCareerSwitcher079",
    "answerKey": "A",
    "category": "automation",
    "difficulty": 2,
    "targetGroups": [
      "career-switcher"
    ],
    "skillTags": [
      "automation",
      "workflow",
      "career-switcher"
    ]
  },
  {
    "id": "place-py-career-switcher-080",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyCareerSwitcher080",
    "answerKey": "B",
    "category": "automation",
    "difficulty": 2,
    "targetGroups": [
      "career-switcher"
    ],
    "skillTags": [
      "automation",
      "workflow",
      "career-switcher"
    ]
  },
  {
    "id": "place-py-career-switcher-081",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyCareerSwitcher081",
    "answerKey": "B",
    "category": "automation",
    "difficulty": 3,
    "targetGroups": [
      "career-switcher"
    ],
    "skillTags": [
      "automation",
      "workflow",
      "career-switcher"
    ]
  },
  {
    "id": "place-py-career-switcher-082",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyCareerSwitcher082",
    "answerKey": "B",
    "category": "automation",
    "difficulty": 4,
    "targetGroups": [
      "career-switcher"
    ],
    "skillTags": [
      "automation",
      "workflow",
      "career-switcher"
    ]
  },
  {
    "id": "place-py-career-switcher-083",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyCareerSwitcher083",
    "answerKey": "B",
    "category": "data-reasoning",
    "difficulty": 1,
    "targetGroups": [
      "career-switcher"
    ],
    "skillTags": [
      "data",
      "table-reading",
      "career-switcher"
    ]
  },
  {
    "id": "place-py-career-switcher-084",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyCareerSwitcher084",
    "answerKey": "B",
    "category": "data-reasoning",
    "difficulty": 1,
    "targetGroups": [
      "career-switcher"
    ],
    "skillTags": [
      "data",
      "table-reading",
      "career-switcher"
    ]
  },
  {
    "id": "place-py-career-switcher-085",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyCareerSwitcher085",
    "answerKey": "B",
    "category": "data-reasoning",
    "difficulty": 2,
    "targetGroups": [
      "career-switcher"
    ],
    "skillTags": [
      "data",
      "table-reading",
      "career-switcher"
    ]
  },
  {
    "id": "place-py-career-switcher-086",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyCareerSwitcher086",
    "answerKey": "D",
    "category": "data-reasoning",
    "difficulty": 2,
    "targetGroups": [
      "career-switcher"
    ],
    "skillTags": [
      "data",
      "table-reading",
      "career-switcher"
    ]
  },
  {
    "id": "place-py-career-switcher-087",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyCareerSwitcher087",
    "answerKey": "B",
    "category": "data-reasoning",
    "difficulty": 3,
    "targetGroups": [
      "career-switcher"
    ],
    "skillTags": [
      "data",
      "table-reading",
      "career-switcher"
    ]
  },
  {
    "id": "place-py-career-switcher-088",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyCareerSwitcher088",
    "answerKey": "C",
    "category": "data-reasoning",
    "difficulty": 4,
    "targetGroups": [
      "career-switcher"
    ],
    "skillTags": [
      "data",
      "table-reading",
      "career-switcher"
    ]
  },
  {
    "id": "place-py-career-switcher-089",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyCareerSwitcher089",
    "answerKey": "D",
    "category": "code-reading",
    "difficulty": 1,
    "targetGroups": [
      "career-switcher"
    ],
    "skillTags": [
      "code-reading",
      "execution-order",
      "career-switcher"
    ]
  },
  {
    "id": "place-py-career-switcher-090",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyCareerSwitcher090",
    "answerKey": "C",
    "category": "code-reading",
    "difficulty": 1,
    "targetGroups": [
      "career-switcher"
    ],
    "skillTags": [
      "code-reading",
      "execution-order",
      "career-switcher"
    ]
  },
  {
    "id": "place-py-career-switcher-091",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyCareerSwitcher091",
    "answerKey": "A",
    "category": "code-reading",
    "difficulty": 2,
    "targetGroups": [
      "career-switcher"
    ],
    "skillTags": [
      "code-reading",
      "execution-order",
      "career-switcher"
    ]
  },
  {
    "id": "place-py-career-switcher-092",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyCareerSwitcher092",
    "answerKey": "A",
    "category": "code-reading",
    "difficulty": 2,
    "targetGroups": [
      "career-switcher"
    ],
    "skillTags": [
      "code-reading",
      "execution-order",
      "career-switcher"
    ]
  },
  {
    "id": "place-py-career-switcher-093",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyCareerSwitcher093",
    "answerKey": "B",
    "category": "code-reading",
    "difficulty": 3,
    "targetGroups": [
      "career-switcher"
    ],
    "skillTags": [
      "code-reading",
      "execution-order",
      "career-switcher"
    ]
  },
  {
    "id": "place-py-career-switcher-094",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyCareerSwitcher094",
    "answerKey": "C",
    "category": "code-reading",
    "difficulty": 4,
    "targetGroups": [
      "career-switcher"
    ],
    "skillTags": [
      "code-reading",
      "execution-order",
      "career-switcher"
    ]
  },
  {
    "id": "place-py-career-switcher-095",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyCareerSwitcher095",
    "answerKey": "C",
    "category": "readiness",
    "difficulty": 1,
    "targetGroups": [
      "career-switcher"
    ],
    "skillTags": [
      "learning-readiness",
      "study-habit",
      "career-switcher"
    ]
  },
  {
    "id": "place-py-career-switcher-096",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyCareerSwitcher096",
    "answerKey": "B",
    "category": "readiness",
    "difficulty": 1,
    "targetGroups": [
      "career-switcher"
    ],
    "skillTags": [
      "learning-readiness",
      "study-habit",
      "career-switcher"
    ]
  },
  {
    "id": "place-py-career-switcher-097",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyCareerSwitcher097",
    "answerKey": "B",
    "category": "readiness",
    "difficulty": 2,
    "targetGroups": [
      "career-switcher"
    ],
    "skillTags": [
      "learning-readiness",
      "study-habit",
      "career-switcher"
    ]
  },
  {
    "id": "place-py-career-switcher-098",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyCareerSwitcher098",
    "answerKey": "C",
    "category": "readiness",
    "difficulty": 2,
    "targetGroups": [
      "career-switcher"
    ],
    "skillTags": [
      "learning-readiness",
      "study-habit",
      "career-switcher"
    ]
  },
  {
    "id": "place-py-career-switcher-099",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyCareerSwitcher099",
    "answerKey": "B",
    "category": "readiness",
    "difficulty": 3,
    "targetGroups": [
      "career-switcher"
    ],
    "skillTags": [
      "learning-readiness",
      "study-habit",
      "career-switcher"
    ]
  },
  {
    "id": "place-py-career-switcher-100",
    "assessmentType": "placement",
    "courseId": "python-foundation",
    "i18nKey": "questions.pythonFoundation.placePyCareerSwitcher100",
    "answerKey": "A",
    "category": "readiness",
    "difficulty": 4,
    "targetGroups": [
      "career-switcher"
    ],
    "skillTags": [
      "learning-readiness",
      "study-habit",
      "career-switcher"
    ]
  }
];
