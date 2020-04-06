import styled from 'styled-components'
import SliderSectionListForm from './redux-forms/SliderSectionListForm.jsx'
import { colors } from '../constants.js'

export const StyledSliderSectionListForm = styled(SliderSectionListForm)`
    h1 { font-size: 1em;}
    .grad {
        font-size: 1.5em;
        background: linear-gradient(12deg, ${colors.softWhite} 0%, ${colors.pink} 30%, ${colors.softWhite} 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    padding: 7vh;
    margin: auto;
    position: relative;
    width: 91vw;
    background-color: ${colors.brightBlack};
    opacity: 0.8;
    border-radius: 2px;
`
