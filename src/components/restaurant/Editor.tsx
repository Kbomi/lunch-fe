import { useEffect, useState } from 'react'
import { Editor } from '@tinymce/tinymce-react'
import { tinymce_editor_key } from '../../constants/config'
import styled from '@emotion/styled'

interface EditorProps {
  viewMode?: boolean
  config?: any
}

const StyledEditorWrap = styled.div`
  .tox .tox-tbtn__select-chevron svg {
    height: 16px;
    padding-top: 2px;
  }
`

export const EditorComponent = ({
  viewMode = false,
  config = {},
}: EditorProps) => {
  const [content, setContent] = useState('')

  useEffect(() => {
    console.log('content:', content)
  }, [content])

  return (
    <StyledEditorWrap>
      <Editor
        id="tinyEditor"
        apiKey={tinymce_editor_key}
        init={{
          plugins:
            'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed linkchecker a11ychecker tinymcespellchecker permanentpen powerpaste advtable advcode editimage tinycomments tableofcontents footnotes mergetags autocorrect typography inlinecss',
          toolbar:
            'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
          tinycomments_mode: 'embedded',
          tinycomments_author: 'Author name',
          mergetags_list: [
            { value: 'First.Name', title: 'First Name' },
            { value: 'Email', title: 'Email' },
          ],
        }}
        value={content}
        onEditorChange={(text: string) => setContent(text)}
      />
    </StyledEditorWrap>
  )
}

export default EditorComponent
