import React, {ReactNode} from 'react'
import { ContentWindow, ContentStack } from './styles'
import { CssVarsProvider } from '@mui/joy/styles';

interface Props {
  children?: ReactNode
}

export default function PageLayout({children}: Props) {
  return (
    <CssVarsProvider>
        <ContentWindow>
            { children }
        </ContentWindow>
    </CssVarsProvider>
  )
}