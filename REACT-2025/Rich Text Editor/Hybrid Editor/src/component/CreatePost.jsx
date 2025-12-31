import { useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import MdEditor from "react-markdown-editor-lite";
import MarkdownIt from "markdown-it";
import DOMPurify from "dompurify";
import "react-markdown-editor-lite/lib/index.css";
import { FiEdit, FiCode } from "react-icons/fi";

const mdParser = new MarkdownIt();

export const CreatePost = () => {
  const [mode, setMode] = useState('visual');
  const [html, setHtml] = useState('');
  const [markdown, setMarkdown] = useState('');

  // Visual → Markdown
  const handleVisualChange = (content) => {
    setHtml(content); 
  }

  // Markdown → Visual
  const handleMarkdownChange = ({ text }) => {
    setMarkdown(text);
    setHtml(mdParser.render(text));
  };



  return (
      <div className="bg-gray-900 text-white p-6 rounded-xl space-y-4">
         {/* Mode Switch */}
          <div className="flex gap-2">
        <button
          onClick={() => setMode("visual")}
          className={`px-4 py-2 rounded-lg flex items-center gap-2 ${
            mode === "visual" ? "bg-blue-600" : "bg-gray-700"
          }`}
        >
          <FiEdit /> Visual
        </button>

        <button
          onClick={() => setMode("markdown")}
          className={`px-4 py-2 rounded-lg flex items-center gap-2 ${
            mode === "markdown" ? "bg-blue-600" : "bg-gray-700"
          }`}
        >
          <FiCode /> Markdown
        </button>
      </div>
      {/* Editors */}
      { mode === "visual" ? (
        <Editor 
        apiKey={import.meta.env.VITE_TINYMCE_API_KEY}
        value={html}
        onEditorChange={handleVisualChange}
        init={{
          height: 400,
          skin: "oxide-dark",
          content_css: "dark",
          menubar: false,
        plugins: [
          // Core editing features
          'anchor', 'autolink', 'charmap', 'codesample', 'emoticons', 'link', 'lists', 'media', 'searchreplace', 'table', 'visualblocks', 'wordcount',
          // Your account includes a free trial of TinyMCE premium features
          // Try the most popular premium features until Jan 14, 2026:
          'checklist', 'mediaembed', 'casechange', 'formatpainter', 'pageembed', 'a11ychecker', 'tinymcespellchecker', 'permanentpen', 'powerpaste', 'advtable', 'advcode', 'advtemplate', 'ai', 'uploadcare', 'mentions', 'tinycomments', 'tableofcontents', 'footnotes', 'mergetags', 'autocorrect', 'typography', 'inlinecss', 'markdown','importword', 'exportword', 'exportpdf'
        ],
        toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography uploadcare | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
        tinycomments_mode: 'embedded',
        tinycomments_author: 'Nasim Reja',
        mergetags_list: [
          { value: 'First.Name', title: 'First Name' },
          { value: 'Email', title: 'Email' },
        ],
        ai_request: (request, respondWith) => respondWith.string(() => Promise.reject('See docs to implement AI Assistant')),
        uploadcare_public_key: import.meta.env.VITE_TINYMCE_PUBLIC_KEY,
      }}
        />
      ):(
        <MdEditor
        style={{ height: "400px"}}
        value={markdown}
        renderHTML={(text) => DOMPurify.sanitize(mdParser.render(text))}
        onChange={handleMarkdownChange}
        />
      )}
       {/* Preview */}
      <div className="bg-gray-800 p-4 rounded-lg">
        <h3 className="text-lg mb-2 text-gray-300">Live Preview</h3>
        <div
          className="prose prose-invert max-w-none"
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(html),

          }}
        />
      </div>
      </div>
  )
}