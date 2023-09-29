
import React from 'react'
import Layout from '@theme/Layout'
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Editor from '@site/src/components/editor'; 

const json = {"type":"doc","content":[{"type":"paragraph"},{"type":"paragraph"},{"type":"heading","attrs":{"level":1},"content":[{"type":"text","text":"Andrew is so cool"}]}]}


export default function Hello() {
  return (
    <Layout title="Hello" description="Hello React Page">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '5vh',
          fontSize: '20px',
        }}
      >      
      </div>
      <Editor data={json} />
    </Layout>
  )
}

          