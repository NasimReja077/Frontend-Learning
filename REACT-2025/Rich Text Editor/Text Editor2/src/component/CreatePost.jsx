import { useState } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import Link from "@tiptap/extension-link";
import TextAlign from "@tiptap/extension-text-align";
import TaskList from "@tiptap/extension-task-list";
import TaskItem from "@tiptap/extension-task-item";
import Placeholder from "@tiptap/extension-placeholder";
import CharacterCount from "@tiptap/extension-character-count";
import HorizontalRule from "@tiptap/extension-horizontal-rule";
import {Table} from "@tiptap/extension-table";
import TableRow from "@tiptap/extension-table-row";
import TableCell from "@tiptap/extension-table-cell";
import TableHeader from "@tiptap/extension-table-header";
import DOMPurify from "dompurify";

import {
  FiBold, FiItalic, FiUnderline,
  FiList, FiCode, FiLink,
  FiAlignLeft, FiAlignCenter, FiAlignRight, FiAlignJustify,
  FiRotateCcw, FiRotateCw,
  FiSave, FiSend, FiRefreshCw,
  FiMinus
} from "react-icons/fi";
import { FaStrikethrough } from "react-icons/fa";

export const CreatePost = () => {
  const [title, setTitle] = useState("");

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: { levels: [1, 2, 3] }
      }),
      Underline,
      HorizontalRule,
      Link.configure({
        autolink: true,
        openOnClick: false,
        HTMLAttributes: {
          target: "_blank",
          rel: "noopener noreferrer"
        }
      }),
      TextAlign.configure({
        types: ["heading", "paragraph"]
      }),
      TaskList,
      TaskItem.configure({ nested: true }),
      Table.configure({ resizable: true }),
      TableRow,
      TableHeader,
      TableCell,
      Placeholder.configure({
        placeholder: "Write your post content here..."
      }),
      CharacterCount
    ],
    content: ""
  });

  if (!editor) return null;

  const html = DOMPurify.sanitize(editor.getHTML());

  const words = editor.storage.characterCount.words();
  const chars = editor.storage.characterCount.characters();
  const readingTime = Math.ceil(words / 200); // 200 WPM

  const clearFormatting = () => {
    editor.chain().focus().unsetAllMarks().clearNodes().run();
  };

  return (
    <div className="min-h-screen bg-gray-900 py-8 px-4 flex justify-center">
      <div className="w-full max-w-5xl bg-gray-800 rounded-xl p-6 space-y-6">

        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Post title"
          className="w-full bg-gray-900 text-white px-4 py-3 rounded-lg outline-none"
        />

        {/* Toolbar */}
        <div className="flex flex-wrap gap-2 bg-gray-900 border border-gray-700 p-2 rounded-lg">
          <Btn onClick={() => editor.chain().focus().toggleBold().run()} active={editor.isActive("bold")}><FiBold /></Btn>
          <Btn onClick={() => editor.chain().focus().toggleItalic().run()} active={editor.isActive("italic")}><FiItalic /></Btn>
          <Btn onClick={() => editor.chain().focus().toggleUnderline().run()} active={editor.isActive("underline")}><FiUnderline /></Btn>
          <Btn onClick={() => editor.chain().focus().toggleStrike().run()} active={editor.isActive("strike")}><FaStrikethrough /></Btn>
          <Btn onClick={() => editor.chain().focus().toggleCode().run()}><FiCode /></Btn>

          <Btn onClick={() => editor.chain().focus().toggleBulletList().run()}><FiList /></Btn>
          <Btn onClick={() => editor.chain().focus().toggleOrderedList().run()}>1.</Btn>

          <Btn onClick={() => editor.chain().focus().setTextAlign("left").run()}><FiAlignLeft /></Btn>
          <Btn onClick={() => editor.chain().focus().setTextAlign("center").run()}><FiAlignCenter /></Btn>
          <Btn onClick={() => editor.chain().focus().setTextAlign("right").run()}><FiAlignRight /></Btn>
          <Btn onClick={() => editor.chain().focus().setTextAlign("justify").run()}><FiAlignJustify /></Btn>

          <Btn onClick={() => {
            const url = prompt("Enter URL");
            if (url) editor.chain().focus().setLink({ href: url }).run();
          }}><FiLink /></Btn>

          <Btn onClick={() => editor.chain().focus().setHorizontalRule().run()}><FiMinus /></Btn>

          <Btn onClick={clearFormatting}>Tx</Btn>

          <Btn onClick={() => editor.chain().focus().undo().run()}><FiRotateCcw /></Btn>
          <Btn onClick={() => editor.chain().focus().redo().run()}><FiRotateCw /></Btn>
        </div>

        {/* Editor */}
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4 min-h-[250px]">
          <EditorContent editor={editor} className="prose prose-invert max-w-none" />
        </div>

        {/* Stats */}
        <div className="flex justify-between text-sm text-gray-400">
          <span>{words} words · {chars} characters</span>
          <span>⏱ {readingTime} min read</span>
        </div>

        {/* Preview */}
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <div
            className="prose prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-3">
          <button className="bg-gray-700 px-4 py-2 rounded-lg text-white"><FiSave /> Draft</button>
          <button className="bg-red-600 px-4 py-2 rounded-lg text-white"><FiRefreshCw /> Reset</button>
          <button className="bg-blue-600 px-5 py-2 rounded-lg text-white"><FiSend /> Publish</button>
        </div>
      </div>
    </div>
  );
};

const Btn = ({ onClick, active, children }) => (
  <button
    onClick={onClick}
    className={`p-2 rounded border ${
      active ? "bg-blue-600 text-white" : "bg-gray-800 text-gray-300 hover:bg-gray-700"
    }`}
  >
    {children}
  </button>
);