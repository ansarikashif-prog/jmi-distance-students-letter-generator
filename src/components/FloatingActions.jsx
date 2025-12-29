import React, { useEffect, useRef, useState } from 'react';

/**
 * FloatingActions Component
 * Fly → dock buttons for Download & Send Assignment Request
 * 
 * Props:
 * - onDownload: function to trigger PDF generation
 * - onSendMail: function to trigger mailto with full body
 * - isGenerating: boolean, disables download while PDF is generating
 * - previewEndRef: optional ref to end of preview content for intersection observer
 */
const FloatingActions = ({
  onDownload,
  onSendMail,
  isGenerating,
  previewEndRef
}) => {
  const sentinelRef = useRef(null);
  const [isDocked, setIsDocked] = useState(false);

  // =====================================
  // INTERSECTION OBSERVER (FLY → DOCK)
  // =====================================
  useEffect(() => {
    const sentinel = previewEndRef?.current || sentinelRef.current;
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsDocked(entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0.1
      }
    );

    observer.observe(sentinel);

    return () => observer.disconnect();
  }, [previewEndRef]);

  // =====================================
  // RENDER
  // =====================================
  return (
    <>
      <div
        className={`floating-actions ${isDocked ? 'docked' : 'floating'}`}
        aria-label="Assignment actions"
      >
        <button
          type="button"
          className="action-btn download"
          onClick={onDownload}
          aria-label="Download assignment letter PDF"
          disabled={isGenerating}
        >
          {isGenerating ? 'Generating…' : 'Download PDF'}
        </button>

        <button
          type="button"
          className="action-btn mail"
          onClick={onSendMail}
          aria-label="Send assignment-related request email"
        >
          Send Request
        </button>
      </div>

      {/* Sentinel element used only if previewEndRef is not provided */}
      {!previewEndRef && (
        <div
          ref={sentinelRef}
          className="actions-sentinel"
          aria-hidden="true"
        />
      )}
    </>
  );
};

export default FloatingActions;
