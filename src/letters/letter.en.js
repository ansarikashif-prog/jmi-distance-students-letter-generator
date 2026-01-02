/**
 * src/letters/letter.en.js
 * English Letter Template
 * Context: Academic support with primary focus on Offline Classes
 * Input: studentData = { fullName, rollNumber, enrollmentNumber, phoneNumber, issueType }
 */

const englishLetter = ({ fullName, rollNumber, enrollmentNumber, phoneNumber, issueType = 'All' }) => {
  if (!fullName || !rollNumber || !enrollmentNumber || !phoneNumber) return '';

  const offlineSection = `
At the time of admission, I explicitly opted for the OFFLINE mode of the BA (ODL) programme. The clear and logical implication of this choice was that counselling sessions, academic discussions, and programme-related interactions would be conducted in physical mode at the Learner Support Centre. This understanding was not based on personal assumption, but is explicitly documented in the Programme Guide itself.

As per the Programme Guide, counselling sessions are normally conducted at the centre, within the prescribed weekend academic schedule, with the specific purpose of addressing students’ subject-related academic difficulties. While counselling sessions are not described as conventional classroom teaching, their physical conduct at the centre is clearly envisaged as an integral part of the programme structure, rather than an optional or discretionary administrative arrangement.

Despite this documented framework, all counselling sessions over the past two academic years have been conducted entirely in online mode, even though I had opted for the offline mode at the time of admission. During this period, no formal consent was sought from students, nor was any justified exception—consistent with the Programme Guide—formally communicated.

As a result, the academic and institutional meaning of the offline mode has been substantially diluted in practice. The distinction between offline and online modes has been reduced to nomenclature alone, while the actual delivery mechanism has remained uniformly online.

In the current academic year, which is my third year, no fundamental corrective change has been implemented. Instead, a 60:40 hybrid ratio has been introduced as an administrative decision, without any clear academic or regulatory basis cited in the Programme Guide. Under this hybrid arrangement, limited offline sessions have been provided only for a few selected language subjects, while counselling for other theory papers continues to be conducted exclusively online.

Such selective and partial offline arrangements do not fulfil the core academic purpose of the offline mode. Rather, they create the impression that offline counselling is being offered as a concession or favour, instead of being treated as a promised and documented academic mode of delivery.

It is respectfully clarified that offline counselling does not imply mandatory attendance or compulsory physical presence for all students. The essence of offline mode lies in the mode of delivery itself—namely, that counselling sessions are conducted offline—so that students who wish to attend physically at the centre are genuinely provided that opportunity, as envisaged in the Programme Guide.

Predominantly online or hybrid models fail to meet this basic expectation, particularly after two consecutive academic years of complete online delivery. Consequently, the present arrangement appears inconsistent with both the spirit of the Programme Guide and the informed decision made by students at the time of admission.

Accordingly, the demand is clear and unambiguous: for students who opted for offline mode, counselling sessions must be conducted 100% in offline mode—without arbitrary ratios, without restricting offline sessions to selective subjects, and without imposing hybrid models without student consent. This is not an additional facility or an extraordinary request, but the academic arrangement that was explicitly understood, documented, and expected at the time of admission, and which has not yet been consistently implemented.
`;

  const booksSection = `
In addition to the above, a significant number of students continue to face difficulties due to the delayed or incomplete availability of prescribed study material, particularly for courses such as BEG-04, BEG-05, BHD-04, and BHD-05.

The absence of timely and complete study material has adversely affected students’ ability to plan and prepare academically in a structured manner. Since self-study material forms the backbone of the ODL framework, any delay in its availability directly undermines the effectiveness of the programme.
`;

  const assignmentSection = `
With regard to assignments, students were informed of submission requirements only after the declaration of results, and within an extremely limited preparation timeframe. The rigid deadlines, coupled with mandatory hardcopy submission, have posed serious practical challenges, especially for students residing far from the campus.

Despite sincere efforts, many students were unable to submit assignments due to travel constraints, administrative unavailability, or lack of adequate academic guidance. Imposing penalties under such circumstances has resulted in considerable academic stress and insecurity among students.
`;

  let issueText = '';
  if (issueType === 'OfflineClasses') issueText = offlineSection;
  else if (issueType === 'Books') issueText = booksSection;
  else if (issueType === 'Assignment') issueText = assignmentSection;
  else if (issueType === 'All') issueText = offlineSection + assignmentSection + booksSection;

  return `
Respected Sir,

I, a student of the BA (ODL) programme under the Centre for Distance and Online Education, Jamia Millia Islamia, respectfully submit this representation to formally place certain important academic concerns on record.

At the outset, I sincerely acknowledge the declaration of the Second Year BA (ODL) results on 18 December 2025. The release of results has provided long-awaited clarity to students regarding their academic standing.

However, the post-result phase has brought to light deeper structural issues within the programme, the most serious of which pertains to offline academic support for ODL students—an aspect that was clearly understood at the time of admission but has not been consistently implemented in practice.

${issueText}

These concerns are raised not in opposition, but in the interest of academic fairness, accessibility, and the credible and effective functioning of the BA (ODL) programme.

In light of the above, I respectfully request your kind consideration of the following:

${issueType === 'OfflineClasses' || issueType === 'All' ? `-- Counselling sessions for students who opted for offline mode should be conducted entirely in offline mode, without arbitrary hybrid ratios.
-- A subject-wise, clearly structured, and well-communicated offline counselling schedule should be established.
-- Formal clarification should be issued that non-attendance of offline counselling sessions does not result in academic disadvantage where attendance is not mandatory.` : ''}

${issueType === 'Assignment' || issueType === 'All' ? `-- Assignment submission deadlines should be extended without penalty, and flexible or online submission options should be provided.` : ''}

${issueType === 'Books' || issueType === 'All' ? `-- Immediate resolution of pending study material distribution and assurance of timely availability of all prescribed books.` : ''}

My details are provided below for your reference:

- Name: ${fullName}  
- Roll Number: ${rollNumber}  
- Enrollment Number: ${enrollmentNumber}  
- Contact Number: ${phoneNumber}  

I submit this representation with sincere hope that these genuine academic concerns will be examined sympathetically and addressed in the best interest of students.

Yours sincerely,
`.trim();
};

export default englishLetter;
