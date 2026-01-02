// ===============================
// FIRESTORE LOGGING SERVICE
// ===============================
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "./firebaseConfig";

/**
 * Log student activity to Firestore
 * Lightweight, privacy-safe, non-blocking
 *
 * @param {Object} logData
 * @param {Object} logData.studentData
 * @param {string} logData.language
 * @param {'pdf_download' | 'send_mail'} logData.action
 * @param {'OfflineClasses' |'Books' | 'Assignment' | 'All'} logData.issueType
 */
export const logStudentActivity = (logData = {}) => {
  try {
    if (!logData.studentData) return;

    const {
      studentData,
      language = "en",
      action = "unknown",
      issueType = "OfflineClasses" // default to Both if not specified
    } = logData;

    // Human-readable date & time (India-friendly)
    const readableDateTime = new Date().toLocaleString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true
    });

    // Fire-and-forget logging
    addDoc(collection(db, "studentLogs"), {
      student: {
        fullName: studentData.fullName || "",
        rollNumber: studentData.rollNumber || "",
        enrollmentNumber: studentData.enrollmentNumber || "",
        phoneNumber: studentData.phoneNumber || ""
      },
      language,
      action,
      issueType,  // New field to track user-selected issue

      // Time fields
      createdAt: serverTimestamp(),          // for sorting / querying
      createdAtReadable: readableDateTime,   // for humans
    }).catch(() => {
      // Silent fail — logging must never affect UX
    });

  } catch {
    // Absolute safety net
  }
};
