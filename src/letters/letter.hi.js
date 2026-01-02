/**
 * src/letters/letter.hi.js
 * Hinglish Letter Template
 * Context: Academic support with primary focus on Offline Classes
 * Input: studentData = { fullName, rollNumber, enrollmentNumber, phoneNumber, issueType }
 * Tone: Respectful, firm, student-centric (Hinglish)
 */

const hindiLetter = ({ fullName, rollNumber, enrollmentNumber, phoneNumber, issueType = 'All' }) => {
  if (!fullName || !rollNumber || !enrollmentNumber || !phoneNumber) return '';

  const offlineSection = `
Admission ke waqt maine BA (ODL) programme ke liye explicitly OFFLINE mode opt kiya tha. Iska seedha aur logical matlab yeh tha ke counselling sessions, academic discussions aur programme-related interactions Learner Support Centre par physical mode mein conduct kiye jaayenge. Yeh koi personal assumption nahi thi, balki iska clear reference khud Programme Guide mein maujood hai.

Programme Guide ke mutabiq counselling sessions normally centre par hote hain, weekend ke academic schedule ke andar conduct kiye jaate hain, aur inka purpose students ke subject-related academic doubts clear karna hota hai. Yeh bhi clearly mention hai ke counselling sessions conventional classroom teaching nahi hote, lekin phir bhi unka physical presence ke saath centre par hona programme structure ka ek integral hissa hai, na ke koi optional administrative choice.

Is documented position ke bawajood, pichhle do academic saalon mein mere programme ke saare counselling sessions 100% online mode mein conduct kiye gaye, jabki maine admission ke time offline mode select kiya tha. Is poore duration mein na to students se koi consent liya gaya aur na hi Programme Guide ke framework ke mutabiq kisi justified exception ko formally communicate kiya gaya.

Is wajah se offline mode ka jo academic aur institutional meaning hai, woh practically dilute ho gaya. Offline aur online mode ke beech ka farq sirf naam tak limited reh gaya, jabki actual delivery structure poori tarah online hi raha.

Maujooda academic year, jo mera third year hai, usmein bhi situation mein koi fundamental correction nahi hui. Is baar ek 60:40 ka hybrid ratio introduce kiya gaya, jo ek administrative decision ke taur par impose kiya gaya hai, jabki iska koi clear academic ya regulatory basis Programme Guide mein mention nahi hai. Is hybrid model ke tehat sirf kuch selected language subjects ke liye limited offline sessions arrange kiye gaye hain, jabki baaki theory papers ke counselling sessions abhi bhi online hi rakhe gaye hain.

Is tarah ka selective offline arrangement offline mode ke core academic purpose ko satisfy nahi karta. Balki yeh impression deta hai ke offline counselling sessions ko ek favour ya concession ke taur par treat kiya ja raha hai, na ke ek promised aur documented academic mode ke taur par.

Mere liye offline counselling ka matlab yeh nahi hai ke attendance mandatory ho ya har student par physical presence impose ki jaaye. Offline mode ka matlab yeh hai ke counselling sessions ka mode offline ho, jaisa ke Programme Guide mein envisaged hai, taaki jo students centre par physically attend karna chahte hain, unke liye yeh facility actually available ho.

Hybrid ya predominantly online models is basic expectation ko fulfill nahi karte, khaaskar jab pichhle do academic saalon se already complete online delivery ho chuki ho. Is wajah se current arrangement na sirf Programme Guide ke spirit ke khilaaf lagta hai, balki offline mode opt karne ke mere admission-time decision ko bhi effectively undermine karta hai.

Isi liye meri demand bilkul clear aur unambiguous hai: offline mode opt karne wale students ke liye counselling sessions 100% offline mode mein conduct kiye jaayen — bina kisi arbitrary ratio ke, bina selective subjects tak limited kiye hue, aur bina student consent ke impose kiye gaye hybrid models ke. Yeh koi additional facility ya extraordinary request nahi hai, balki wahi academic arrangement hai jo admission ke waqt explicitly understood aur documented tha, aur jiska consistent implementation abhi tak nahi hua hai.
`;

  const booksSection = `
Iske alawa, kaafi students ko abhi tak prescribed study material properly receive nahi hua hai, khaaskar BEG-04, BEG-05, BHD-04 aur BHD-05 jaise subjects ke liye.

Books ki delayed ya incomplete availability ki wajah se students apni studies ko systematically plan nahi kar pa rahe hain. ODL programme ka foundation hi self-study material par based hota hai, aur jab wahi timely available na ho, toh poora academic structure weak ho jaata hai.
`;

  const assignmentSection = `
Assignments ke context mein bhi kaafi practical difficulties saamne aayi hain. Results declare hone ke baad hi assignments ki information di gayi, woh bhi extremely short timeframe ke saath. Hardcopy submission ko mandatory banana, especially un students ke liye jo door-daraz areas mein rehte hain, ek serious challenge ban gaya.

Kaafi students ne genuine efforts ke bawajood assignments submit nahi kar paaye, ya toh travel issues ki wajah se ya phir administrative coordination ke lack ki wajah se. Aisi situations mein penalty impose karna students ke liye academic aur mental stress ka cause ban raha hai.
`;

  let issueText = '';
  if (issueType === 'OfflineClasses') issueText = offlineSection;
  else if (issueType === 'Books') issueText = booksSection;
  else if (issueType === 'Assignment') issueText = assignmentSection;
  else if (issueType === 'All') issueText = offlineSection + assignmentSection + booksSection;

  return `
Respected Sir,

Main Centre for Distance and Online Education, Jamia Millia Islamia ke under BA (ODL) programme ka ek student hoon, aur poore respect ke saath yeh representation submit kar raha hoon taaki kuch important academic concerns formally record par laaye jaa saken.

Sabse pehle, Second Year BA (ODL) ke results 18 December 2025 ko declare hone ke liye main sincerely acknowledge karta hoon. Results ke baad students ko apni academic standing ke baare mein clarity mili hai, jo kaafi time se pending thi.

Lekin post-result phase mein kuch deeper structural issues clearly highlight ho gaye hain, jismein sabse zyada serious concern offline academic support ko lekar hai, jo ODL students ke liye admission ke waqt samjha gaya tha, lekin ground level par consistently implement nahi ho paaya hai.

${issueText}

Yeh saare concerns kisi bhi tarah ke opposition ke liye nahi, balki academic fairness, accessibility aur BA (ODL) programme ke smooth aur credible functioning ke interest mein raise kiye ja rahe hain.

Is context mein, main aapse respectfully request karta hoon ke neeche diye gaye points par kind consideration di jaaye:

${issueType === 'OfflineClasses' || issueType === 'All' ? `-- Offline mode opt karne wale BA (ODL) students ke liye counselling sessions 100% offline mode mein conduct kiye jaayen, bina kisi arbitrary hybrid ratio ke.
-- Offline classes ke liye proper prior notice, subject-wise schedule aur transparency ensure ki jaaye.
-- Yeh formally clarify kiya jaaye ke offline classes attend na kar paane ki wajah se students ko academically disadvantage na kiya jaaye, jab attendance mandatory nahi hai.` : ''}

${issueType === 'Assignment' || issueType === 'All' ? `-- Assignment submission deadlines bina penalty ke extend ki jaayen aur online ya flexible submission options provide kiye jaayen.` : ''}

${issueType === 'Books' || issueType === 'All' ? `-- Pending study material distribution ka immediate solution nikala jaaye aur future mein books ki timely availability ensure ki jaaye.` : ''}

Mere details aapke reference ke liye neeche mention kiye ja rahe hain:

- Name: ${fullName}  
- Roll Number: ${rollNumber}  
- Enrollment Number: ${enrollmentNumber}  
- Contact Number: ${phoneNumber}  

Main sincerely hope karta hoon ke in genuine academic issues ko sympathetically examine karke students ke best interest mein appropriate aur timely steps liye jaayenge.

Yours sincerely,  
${fullName}
`.trim();
};

export default hindiLetter;
