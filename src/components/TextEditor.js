import React, { useState } from 'react';

function TextEditor() {
  const [text, setText] = useState('');

  return (
    <div className="text-editor">
      <textarea 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
        placeholder="Edit your text here..."
      ></textarea>
    </div>
  );
}

export default TextEditor;
