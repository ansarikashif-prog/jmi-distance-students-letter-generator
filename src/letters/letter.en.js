/**
 * src/letters/letter.en.js
 * English Letter Template
 * Context: Post-result academic support & assignment-related concerns
 * Input: studentData = { fullName, rollNumber, enrollmentNumber, phoneNumber, issueType }
 */

const englishLetter = ({ fullName, rollNumber, enrollmentNumber, phoneNumber, issueType = 'Both' }) => {
  if (!fullName || !rollNumber || !enrollmentNumber || !phoneNumber) return '';

  const booksSection = `
In addition to the above, a large number of students are still deprived of essential prescribed study material for subjects including BEG-04, BEG-05, BHD-04, and BHD-05. Even at this advanced stage of the academic cycle, complete sets of books have not been provided to many students.

The non-availability of these books has directly affected students’ ability to study course content, understand the syllabus framework, and prepare assignments in a meaningful academic manner. Expecting students to complete assignments on time without providing them with the officially prescribed study material is academically unjust and defeats the purpose of structured distance education. This situation has caused serious academic disadvantage and mental stress among students.
`;

  const assignmentSection = `
With respect to assignments, students were informed after the declaration of results that assignments for language papers were to be submitted within an extremely short and rigid timeframe. As of now, the date of 28 December has already passed, and students have been informed that submissions beyond this date would attract penalties, as communicated by the concerned faculty.

It is important to highlight that the time provided for assignment preparation was insufficient for a large section of students. Many students could not realistically complete academic assignments of required quality within such a limited period, especially after a prolonged phase of academic uncertainty.

The situation has further worsened due to the mandatory hardcopy submission requirement. Students are spread across distant regions including remote areas of Delhi, Delhi NCR, Dasna, Bijnor, Bihar, and even cities as far as Mumbai. For many students, reaching the campus itself requires two to three hours of travel one way. Several students, despite making sincere efforts to reach the college, arrived late by 20–30 minutes only to find that faculty members or coordinators were unavailable, forcing them to return without submitting assignments.

In such cases, students not only lose valuable time and financial resources but are later informed that assignments can now only be submitted with penalties. This has resulted in deep frustration and a sense of helplessness among students.

Furthermore, it has been observed that some students have been subjected to discouraging remarks for not attending offline classes. It is respectfully submitted that attendance in offline classes is not a mandatory criterion for assignment submission or award of marks in the ODL programme. Many students are unable to attend physical classes due to distance, employment, or personal constraints, and this should not result in academic or verbal discouragement.

Considering these ground realities, the existing assignment submission mechanism has unintentionally excluded a significant number of students.
`;

  let issueText = '';
  if (issueType === 'Books') issueText = booksSection;
  else if (issueType === 'Assignment') issueText = assignmentSection;
  else if (issueType === 'Both') issueText = assignmentSection + booksSection;

  return `
Respected Sir,

I, a student of the BA (ODL) programme under the Centre for Distance and Online Education, Jamia Millia Islamia, respectfully submit this representation to formally place certain pressing academic concerns on record.

At the outset, I sincerely acknowledge and appreciate the declaration of the Second Year BA (ODL) results on 18 December 2025. After an extended period of uncertainty and repeated follow-ups by students, the release of results has finally brought clarity regarding subject-wise academic standing, including pass and backlog status.

However, the declaration of results has simultaneously exposed several unresolved academic issues that now demand immediate and practical intervention, particularly concerning assignment submission and backlog preparation.

Over the past two academic years, the BA (ODL) programme has suffered from an inconsistent academic timeline. While the first year extended over approximately 15–17 months, the second year was completed within a highly compressed span of merely 7–8 months. This irregular academic structure left students unable to anticipate deadlines, plan studies effectively, or prepare themselves mentally and academically for sudden announcements.

${issueText}

These concerns are raised not in opposition, but in the sincere interest of ensuring fairness, academic integrity, and accessibility for all distance learning students.

In light of the circumstances explained above, I respectfully request your kind consideration of the following:

${issueType !== 'Books' ? `-- Extension of the assignment submission deadline without any penalty, considering the insufficient preparation time provided.
-- Permission for online submission of assignments, or the introduction of a flexible alternative to hardcopy submission, so that students residing far from the campus are not unfairly disadvantaged.` : ''}

${issueType !== 'Assignment' ? `-- Immediate resolution of pending study material distribution and assurance that all prescribed books are provided to students well in advance of academic requirements.` : ''}

My details are provided below for your reference:

- Name: ${fullName}  
- Roll Number: ${rollNumber}  
- Enrollment Number: ${enrollmentNumber}  
- Contact Number: ${phoneNumber}  

I submit this representation with due respect and sincere hope that these genuine academic concerns will be examined sympathetically and addressed in the best interest of students enrolled in the BA (ODL) programme.

Yours sincerely,
`.trim();
};

export default englishLetter;
