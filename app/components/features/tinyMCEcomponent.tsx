import { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';

/* import { v4 as uuidv4 } from 'uuid';
const editorId = `tiny-react_${uuidv4()}`; */

export default function tinyMCEEditor() {
  return (
    <Editor
      /* id={editorId} */
      textareaName='content'
      apiKey='plfenpu7wttl1d47w3pbc051bjzt3ig7zh6dsmdbnbyc18su'
      init={{
        
        plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed linkchecker a11ychecker tinymcespellchecker permanentpen powerpaste advtable advcode editimage advtemplate ai mentions tinycomments tableofcontents footnotes mergetags autocorrect typography inlinecss',
        toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
        tinycomments_mode: 'embedded',
        tinycomments_author: 'Author name',
        mergetags_list: [
          { value: 'First.Name', title: 'First Name' },
          { value: 'Email', title: 'Email' },
        ],
        ai_request: (request, respondWith) => respondWith.string(() => Promise.reject("See docs to implement AI Assistant")),
      }}
      initialValue="Welcome to TinyMCE!"
    />
  );
}
