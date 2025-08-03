import React from 'react';

export default function WordCounter({ text }) {
  // Calculate word count whenever text changes
  const wordCount = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;

  return (
    <div className="mt-3">
      <p>
        <strong>{wordCount}</strong> words in the text
      </p>
    </div>
  );
}
