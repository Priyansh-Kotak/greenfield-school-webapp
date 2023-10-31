import ArticleHeading from "@/src/components/ArticleHeading";
import type { NextPageProps } from "@/src/types";
import { setStaticParamsLocale } from "next-international/server";
import type { FC } from "react";
import ArticlePage from "../../../_components/ArticlePage";
import Syllabus from "../_components/Syllabus";
import { classesInSchool } from "../page";

const syllabus = {
  i: {
    english: [
      "Writing a few lines on normal daily routine of a child like 'My School', 'My Pet', 'My Self', etc. Picture Comprehension, Make Sentences",
      "Rhyming words, concept of 'in', 'on', 'under', 'behind', 'near', one/many, (with 's' only) opposite concept of 'a', 'an', action words, naming words, this/that, is/are, these/those, describing words, unscramble the letters to make a word (3 & 4 letter words only - Sight words and Phonics)",
    ],
    mathematics: [
      "Counting and writing numbers from 1 to 100. After number (1- 100), Before numbers (100-1), In between numbers (1-100)",
      "Number names 1 to 100, Greater than and lesser than (1-100), Single digit addition and subtraction. Count and write, Shapes (Flat Shapes), Ascending Descending order, Expansion and Mental sums",
    ],
  },
  ii: {
    english: [
      "Naming words, one and many (s/es), use of capital letters and full stop, doing words (action words). Describing words",
      "Articles a/an, use of he, she, they, it, is, are, my, am, was, were, this/these, that/those",
      "Rhyming words, opposite, prepositions Picture reading. make sentences, unscramble the letters to make words (4 + 5 letters only)",
      "Picture Comprehension",
    ],

    maths: [
      "Number name (1 to 500) in HTO pattern Put sign <, > or = (1-500)",
      "Before (1-500), after (1-500) and in between, odd and even numbers (till 1- 100)",
      "Ascending (1500)/ descending (1-500) order, addition double digit / subtraction double digit without borrowing or carry over, tens and ones. Place value (HTO) Skip counting (in 2, 5, 10)",
      "Mental Maths",
      "Shapes (flat and solid) & Time (hourly)",
    ],
    hindi: [
      "व्यंजन(क), मात्राएँ (आ-ङ)",
      "चित्रों को पहचान कर उनका नाम food all",
      "दिए गए खाली स्थानों में उचित शब्द भरना, मात्राओं का ज्ञान, बारह खड़ी पूर्ण करना",
      "शब्दों को लिखना एवं पूर्ण करना, एक और अनेक शब्द, विलोम शब्द",
      "फूलों के नाम, फलों के नाम, जानवरों के नाम, रंगों के नाम",
      "रिक्त स्थान में उचित शब्द लिख कर वाक्य की पूर्ति",
      "वाक्य रचना",
      "हिन्दी की गिनती 1-10 तक",
    ],
  },
  iii: {
    english: [
      "Naming words, describing words, action words, sentence construction",
      "Use of is/are/am/was/were/has/have/had",
      "Use of capital letters, full stop and question mark, pronouns (he, she, it, they, his, her, them)",
      "Articles (a, an) singular / plural, homophones, rhyming words, preposition, opposites, gender",
      "Comprehension, picture comprehension Paragraph writing",
    ],
    maths: [
      "Numbers upto 999, number name, before & after, expansion (short or compact form) greater than, less than, skip counting, place/face value",
      "Simple carry over 3 digit addition",
      "Addition word problem",
      "Subtraction word problem",
      "Multiplication by 1 digit number, multiplication table from 2-10, time",
      "Geometry Basic shapes(2D)",
      "Simple borrowing 3 digit subtraction",
      "Mental Maths",
    ],
    hindi: [
      "अक्षर माला, विपरीत शब्द, एक और अनेक, लिंग बदलें, वचन बदलें, शब्द शुद्ध करें, 120 तक की गिनती, समान अर्थ वाले शब्द, वाक्य रचना",
    ],
  },
  iv: {
    english: [
      "Articles, Nouns, Singular and Plural, Pronouns, Adjectives, Verbs, Tenses, Adverb,Punctuation, Preposition, Conjunction, Gender, Opposites",
      "Composition, Comprehension, Sentence Construction, Vocabulary, Paragraph writing",
    ],
    hindi: [
      "संज्ञा, लिंग, वचन, सर्वनाम, विशेषण, facial शब्द, पर्यायवाची शब्द, अपठित गद्यांश, अशुद्ध शब्दों व वाक्यों को शुद्ध करना, अनुच्छेद लेखन",
    ],
    maths: [
      "Number upto 9999, place and face value, ascending and descending order, expanded form.Addition (4 digit no, simple carry over), Subtraction (4 digit no, borrowing), Multiplication ( By single digit and double digit), Division (Single digit division) Table 2-10",
      "Word Problems on all operations Metric System",
      "Geometry: Basic shapes (Plane and Solid) drawing and measuring of line segment",
    ],
  },
  v: {
    english: [
      "Composition, Comprehension",
      "Parts of Speech, Nouns, Pronouns, Verbs, Adverbs,",
      "Adjectives",
      "(Simple/Continuous)",
      "Tenses",
      "Noun, Numbers and Gender, Articles, Punctuation",
      "Agreement of verb with subject, Subject- Predicate",
      "Construction of sentences",
      "Vocabulary",
    ],
    evs: [
      "Plant life",
      "How plants make food and process of photosynthesis",
      "Parts of a plant and their function",
      "Uses of plants",
      "Animal life",
      "Care of Animals",
      "Birds - Nests, Beaks, Claws",
      "Food-Nutrients, Sources of nutrients",
      "Water",
      "Sources of water",
      "Uses of water",
    ],

    maths: [
      "Number system (upto ten lakhs): notation, expanded form, places value, ascending and descending order",
      "Addition, Subtraction (5 digit numbers) Multiplication (3 to 4 digit numbers), Division (4 to 5 digit numbers by 2 digit numbers). Problems on the four operations",
      "Fractions Kinds of fraction, comparison, addition and subtraction of like fractions",
      "Time: 12 hour time, 24 hours time, calendar time",
      "Length weight and capacity conversion, addition, subtraction, word problems",
      "Money conversion, addition, subtraction, bill sums, word problem",
      "Area of Square and Rectangle, Perimeter",
      "Circle Parts of a circle",
      "Patterns: Number, shapes, letters of the alphabet",
      "Representation: Bar graph, Pictograph",
    ],
    hindi: [
      "अपठित गद्यांश, अनुच्छेद लेखन, शब्दों का वाक्यों में प्रयोग, लिंग, वचन, अशुद्ध वाक्यों का संशोधन, विपरीतार्थक शब्द, पत्र लेखन, मुहावरे",
      "वाक्यों में शब्दों को कमपूर्वक लिखना, रिक्त स्थानों की उचित शब्दों द्वारा पूर्ति",
    ],
  },
  vi: {
    english: [
      "Composition, Comprehension",
      "Parts of Speech, Articles, Punctuation (Contracted form, possessive form)",
      "The Sentence, Tense. Use of the apostrophe",
      "Singular & Plural form / Genders, Sentence construction. Agreement of the verb with the subject",
      "Vocabulary, Synonyms, Antonyms, Homonyms, Homophones",
    ],
    maths: [
      "Number System Indian System (upto ten crores) International system (up to ten millions) Place Value and Face Value, expanded form, Predecessor and Successor, Ascending and Descending order",
      "Factors and Multiples Prime number, Composite number, Test of Divisibility, Prime factorization, H.C.F. and L.C.M",
      "Fraction Proper, Improper, Mixed Fractions, Addition and Subtraction of fractions",
      "Decimals Conversion, Place value, Addition and Subtraction of decimals",
      "Problem Sums Four Operations: Statement problems",
      "Geometry Line, line segment, Ray, Angles (acute, obtuse, right, straight) Circles. Area and Perimeter of square and rectangle",
    ],
    "EVS - Science": [
      "Animals",
      "The Human Skeletal System",
      "Nervous System",
      "How do plants reproduce?",
      "Matter",
      "Health and Diseases",
      "Force",
      "Energy",
      "Air and Water",
      "The solar system",
      "Natural Disaster",
      "Saving the Environment",
    ],
    hindi: [
      "अपठित गद्यांश, अनुच्छेद लेखन, गद्यांश से लिए गए शब्दों का निजी वाक्यों में प्रयोग, शब्दार्थ, वाक्य रचना, लिंग, वचन, पत्र लेखन (औपचारिक और अनौपचारिक ), मुहावरे अशुद्ध वाक्यों का संशोधन, विपरीतार्थक शब्द, पर्यायवाची शब्द रिक्त स्थानों की उचित शब्दों द्वारा पूर्ति",
    ],
  },
  vii: {
    english: [
      "Composition, Comprehension, Letter writing.  Direct/Indirect Speech, Use of Apostrophe, Genders, Parts of Speech, Articles, Punctuation. Sentence Construction, Vocabulary, Word building",
    ],
    maths: [
      "Knowing our numbers",
      "Prime and composite numbers, L.C.M. & H.C.F. (Two, more than two numbers) problem",
      "Integers",
      "Fractions BODMAS, word problems, Decimal fractions changing decimal to fraction and fraction to decimal, place value, four operations, metric system",
      "Unitary Method (direct)",
      "Perimeter and area of square and rectangle",
      'Algebra: Like and Unlike terms, "x to the power of" substitution, Simple equations, Addition and Subtraction',
      "Geometry Types of angles (acute, right, obtuse, straight, reflex), (clock face), parallel lines and properties missing angles (about a point, on a line, in a triangle) types of triangles (scalene, isosceles, equilateral)",
    ],
    hindi: [
      "अपठित गद्यांश, अनुच्छेद लेखन, शुद्ध वाक्य रचना, विराम चिहन, संज्ञा, सर्वनाम, विशेषण, किया, किया विशेषण, पत्र लेखन ( औपचारिक व अनौपचारिक )",
      "लिंग, वचन, अनेक शब्दों के लिए एक शब्द पर्यायवाची शब्द, विपरीतार्थक शब्द, उपसर्ग प्रत्यय",
    ],
    science: [
      "Separation of substances",
      "Changes around us",
      "Habitat of living organisms. Components",
      "of food-vitamins, minerals, proteins, carbohydrates, fats, under & over nutrition, balanced diet",
      "Human skeleton - Bone, cartilage, tendon, ligament, joints",
      "Motion and measurement of distances",
      "Light, shadows and Reflection",
      "Electricity and circuits",
      "Fun with magnets",
    ],
  },
  viii: {
    english: [
      "Comprehension, Composition, Letter Writing. Parts of Speech, Reported Speech, Subject-Verb Agreement, Active-Passive Voice",
      "Vocabulary, Sentence Construction, Idiomatic Expressions",
      "Tenses",
      "Modals",
      "Determiners",
    ],
    maths: [
      "Square and square root",
      "Cubes and cube root",
      "Rational Numbers",
      "Comparing Quantities",
      "Algebraic Identities & Algebraic Expression. Factorisation",
      "Linear Equation in one variable & Word problems",
      "Direct and Indirect variations",
      "Mensuration",
      "Area of Circle, Trapezium, Rhombus. b. Surface Area & Volume of solids (Cuboid, Cube, Cylinder)",
    ],
    hindi: [
      "अनुच्छेद लेखन, कारक, पर्यायवाची शब्द, विपरीतार्थक शब्द, उपसर्ग प्रत्यय, मुहावरे, औपचारिक एवं अनौपचारिक पत्र",
    ],
    science: [
      "Combustion & Flame",
      "Coal & Petroleum",
      "Synthetic fibres & Plastics",
      "Metals and Non-metals",
      "Force and Pressure",
      "Friction",
      "Sound",
      "Light",
      "Stars and the Solar System",
      "Cells - All structure, differences between",
      "Prokaryotic & Eukaryotic, animal & plant cells. Cells organelles Plastids, Nucleus, Vacuole. Cytoplasm & protoplasm",
      "Common agricultural practices difference between Rabi & Kharif crops, difference between manure & fertilizer",
      "Common foods obtained from animals. Reproduction in animals",
      "Adolescence",
      "Conservation of plants & animals",
    ],
  },
  ix: {
    english: [
      "Composition, Comprehension, Letter Writing",
      "Parts of speech, Direct/Indirect speech, Use of apostrophe, Genders",
      "Sentence Construction, Vocabulary, Idiomatic",
      "Expressions Tenses",
      "Voice",
    ],
    maths: [
      "Fractions, decimals",
      "Arithmetic Simple Interest, Percentage, Profit and Loss, Ratio",
      "Algebra fundamental operation, exponents, simple linear equations",
      "Geometry: Parallel lines and angles associated with them, concept of lines and angles, triangles, Pythagoras theorem (application), Perimeter and area of square, rectangle, triangle",
    ],
    hindi: [
      "अनुच्छेद लेखन, वाक्य रचना, शब्द विचार, शब्दों के भेद",
      "लिंग, वचन, कारक, अनेक शब्दों के लिए",
      "एक शब्द, समानार्थक शब्द, विपरीतार्थक शब्द उपसर्ग प्रत्यय, मुहावरे",
      "अपठित गद्यांश",
      "पत्र लेखन ( औपचारिक, अनौपचारिक)",
    ],
    science: [
      "Acids, Bases and Salts",
      "Physical and Chemical changes",
      "Heat",
      "Motion and Time",
      "Electric current and its effect",
      "Light",
      "Nutrition in plants, Photosynthesis, Saprotropism, insectivorous plants",
      "Nutrition in animals-humans, herbivores,",
      "Amoeba",
      "Human Respiratory system",
      "Respiration in insects",
      "Respiration in plants",
      "Transport in plants",
      "Human circulatory, excretory system. Differences between asexual and sexual reproduction",
      "Adaptation of animals to deserts, Polar Regions & dense tropical forests",
    ],
  },
  x: {
    english: [
      "Comprehension, Composition, Letter Writing",
      "Parts of Speech, Reported Speech, Subject-Verb Agreement, Active-Passive Voice",
      "Vocabulary, Sentence Construction, Idiomatic Expressions",
      "Tenses",
      "Modals",
      "Determiners",
    ],
    science: [
      "Why do we fall ill?",
      "Atoms and molecules",
      "Structure of the atom",
      "Gravitation, Universal Law of Gravitation, Force of",
      "Gravitation of the earth (gravity), Acceleration due to Gravity; Mass and Weight; Free fall",
      "Work, energy and power: Work done by a Force, Energy, power; Kinetic and Potential energy; Law of conservation of energy",
    ],
    maths: [
      "Number System",
      "Polynomials",
      "Quadrilaterals",
      "Lines and Angles",
      "Circles",
      "Surface area and Volume",
    ],
    hindi: [
      "अनुच्छेद लेखन, कारक, पर्यायवाची शब्द, विपरीतार्थक शब्द, उपसर्ग प्रत्यय, मुहावरे",
      "औपचारिक एवं अनौपचारिक पत्र लेखन अपठित गद्यांश, वाक्य शुद्धीकरण",
    ],
  },
  xi: {
    mathematics: [
      "Real Numbers",
      "Polynomials",
      "Pair of Linear Equations in two variables 4) Quadratic Equation",
      "Arithmetic Progression",
      "Triangles",
      "Trigonometry (full- including heights and distances)",
    ],
    physics: [
      "Electricity (Ohm's Law, Resistance and factors effecting Resistance, Resistivity, Combination of Resistances Series and Parallel. Heating effect of Current and Electric Power and Energy)",
      "Reflection (Reflection in Spherical Mirrors) ",
      "Refraction (Refractive Index,Glass slab and Lens)",
    ],
    chemistry: ["Chemical reactions and equations", "Acids, bases and salts"],
    biology: [
      "Life processes (Class 10)",
      "How do organisms reproduce (Asexual mode of reproduction) (Class 10)",
      "Control & Coordination (Class 10)",
    ],
    economics: [
      "What Development Promises - Different people different goals",
      "National Development",
      "How to compare different countries or states? Income and other criteria, Public Facilities",
      "Sectors in terms of ownership: Public and Private Sectors",
      "Money as a medium of exchange",
      "Modern forms of money",
      "Loan activities of Banks",
      "Terms of credit",
    ],
    "History (for Humanities)": [
      "The rise of Nationalism in Europe",
      "Nationalism in India",
      "Age of Industrialisation",
      "Print Culture and the Modern World",
    ],
    "Geography (for Humanities)": [
      "Resource and Development",
      "Agriculture",
      "Manufacturing Industries",
      "Lifelines of National Economy",
      "Water Resources",
    ],
    "English (for Commerce and Humanities)": [
      "Comprehension (short questions and vocabulary test)",
      "Composition (Paragraph Writing, Article)",
      "Grammar (Determiners, Modals, Subject- Verb Agreement, Tenses, Active and Passive Voice, Reported Speech)",
    ],
    "General Awareness": [
      "Questions regarding current affairs",
      "Abbreviations of different international and business organisations",
      "Questions on commercial mathematics like percentage and profit and loss",
      "Basic economic concepts on class IX-X syllabus",
    ],
  },
};

export const generateStaticParams = () => {
  return classesInSchool.map(c => ({
    className: c,
  }));
};

const SyllabusPage: FC<
  NextPageProps & { params: { className: (typeof classesInSchool)[number] } }
> = ({ params: { locale, className } }) => {
  setStaticParamsLocale(locale);

  return (
    <ArticlePage linkType="admission" selected={{ translationKey: "syllabus" }}>
      <ArticleHeading>Class {className.toUpperCase()} Syllabus</ArticleHeading>
      <Syllabus syllabus={syllabus[className]} />
    </ArticlePage>
  );
};

export default SyllabusPage;
