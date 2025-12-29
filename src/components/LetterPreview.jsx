import React, { useEffect, useRef } from 'react';

/**
 * LetterPreview Component
 * Editable preview of the letter content.
 * Synchronizes with parent state and allows live editing.
 * Suitable for both English and Hindi letter templates.
 */
const LetterPreview = ({ content, onChange }) => {
  const editableRef = useRef(null);
  const isUserEditingRef = useRef(false);

  // ===============================
  // SYNC CONTENT INTO EDITABLE AREA
  // ===============================
  useEffect(() => {
    const el = editableRef.current;
    if (!el) return;

    // Avoid overwriting while user is actively typing
    if (isUserEditingRef.current) return;

    if (el.innerText !== content) {
      el.innerText = content;
    }
  }, [content]);

  // ===============================
  // HANDLE USER INPUT
  // ===============================
  const handleInput = () => {
    if (!editableRef.current) return;

    isUserEditingRef.current = true;
    const updatedText = editableRef.current.innerText;

    // Pass updated text to parent
    onChange(updatedText);

    // Reset editing flag after React state sync
    queueMicrotask(() => {
      isUserEditingRef.current = false;
    });
  };

  // ===============================
  // RENDER
  // ===============================
  return (
    <article className="letter-preview">
      <div
        ref={editableRef}
        className="letter-body"
        contentEditable
        suppressContentEditableWarning
        onInput={handleInput}
        spellCheck={false}
        role="textbox"
        aria-multiline="true"
        aria-label="Editable letter preview"
        tabIndex={0}
        style={{ whiteSpace: 'pre-wrap', outline: 'none' }}
      />
    </article>
  );
};

export default LetterPreview;
