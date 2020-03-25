import React from 'react'
import ReactMarkdown from 'react-markdown/with-html'
import styled from 'styled-components'
import { Card, CardContent, CardHeader, Chip } from '@material-ui/core'
import CodeHighlighter from '@/components/CodeHighlighter'
import { WordState } from '@/modules/word'

interface Props {
  word: WordState
}

const Word: React.FC<Props> = p => (
  <Card>
    <CardHeader title={<h3>{p.word.id}</h3>} data-test="id" />
    <CardContent data-test="titles">
      {p.word.titles.map(t => (
        <TitlesSpan key={t}>
          <Chip label={t} />
        </TitlesSpan>
      ))}
    </CardContent>
    <CardContent data-test="description">
      <ReactMarkdown
        source={p.word.description}
        renderers={{ code: CodeHighlighter }}
        escapeHtml={false}
      />
    </CardContent>
  </Card>
)

const TitlesSpan = styled.span`
  margin-right: 5px;
`

export default Word
