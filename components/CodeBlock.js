import styled from 'styled-components'
import rem from 'polished/lib/helpers/rem'
import { lightGrey } from '../utils/colors'

import '../utils/prismTemplateString'
import { Editor } from 'react-live'

const CodeBlock = styled(Editor)`
  background: ${lightGrey};
  font-size: 0.8rem;
  font-family: monospace;
  pointer-events: none;

  border-radius: ${rem(3)};
  box-shadow: 1px 1px 20px rgba(20, 20, 20, 0.27);
  margin: ${rem(35)} 0;
`

export default CodeBlock
