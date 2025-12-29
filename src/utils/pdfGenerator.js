import jsPDF from "jspdf";

/**
 * Generate PDF from letter content (Secondary option)
 *
 * @param {Object} params
 * @param {Object} params.studentData - { fullName, rollNumber, enrollmentNumber, phoneNumber }
 * @param {string} params.letterContent - Full letter text
 */
export const generatePDF = ({ studentData, letterContent }) => {
  if (!studentData || !letterContent) return;

  const doc = new jsPDF({ unit: "pt", format: "a4" });
  const margin = 50;
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const lineHeight = 16;
  let y = margin;

  // ===============================
  // FONT SETTINGS
  // ===============================
  doc.setFont("Times");
  doc.setFontSize(12);
  doc.setTextColor(17, 24, 39);

  // ===============================
  // HEADER BLOCK
  // ===============================
  const header = `Student Name: ${studentData.fullName || ""}
Roll Number: ${studentData.rollNumber || ""}
Enrollment Number: ${studentData.enrollmentNumber || ""}
Phone: ${studentData.phoneNumber || ""}

--------------------------------------------------
`;

  const fullText = header + letterContent;

  // ===============================
  // TEXT FLOW WITH AUTO PAGINATION
  // ===============================
  const lines = doc.splitTextToSize(fullText, pageWidth - margin * 2);

  lines.forEach((line) => {
    if (y + lineHeight > pageHeight - margin) {
      doc.addPage();
      y = margin;
    }
    doc.text(line, margin, y);
    y += lineHeight;
  });

  // ===============================
  // FOOTER WITH TIMESTAMP
  // ===============================
  const timestamp = new Date().toLocaleString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  const totalPages = doc.getNumberOfPages();
  for (let i = 1; i <= totalPages; i++) {
    doc.setPage(i);
    doc.setFontSize(9);
    doc.setTextColor(107, 114, 128);
    doc.text(`Generated on: ${timestamp}`, margin, pageHeight - 20);
  }

  // ===============================
  // SAFE FILE NAME
  // ===============================
  const baseName = studentData.fullName?.trim() || "student";
  const safeName = baseName.replace(/[^a-zA-Z0-9]/g, "_").toLowerCase();

  doc.save(`letter_${safeName}.pdf`);
};
