import React from 'react'
import styled from 'styled-components'

import FormInput from './FormInput.jsx'
import FormTextArea from './FormTextArea.jsx'
import SimpleSlider from './SimpleSlider.jsx'
import SliderSection from './SliderSection.jsx'

import { colors } from '../constants.js'
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const sliderColors = createMuiTheme({
    overrides:{
        MuiSlider: {
            thumb:{
                color: colors.green,
                height: '20px',
                width: '20px',
            },
            track: {
                color: colors.orange,
                height: '10px',
            },
            rail: {
                color: colors.blue,
                height: '10px',
                backgroundSize: '100vw',
                backgroundImage: `linear-gradient(to left, ${colors.orange} 0%, ${colors.pink} 30%, ${colors.blue} 100%)`,
                borderRadius: '20px'
            },
            mark: {
                height: '15px',
                width: '3px',
                color: 'white'
            },
            markLabel: {
                color: colors.blue,
                textAlign: 'center',
                transform: 'translate(-50%, 100%) rotate(15deg)',
                fontSize: '0.7em'

            },
            markLabelActive: {
                color: colors.orange,
                fontSize: '0.9em'
            }
        }
    }
});

const SimpleSliderWithMUITheme = (props) => {
    return (
        <ThemeProvider theme={sliderColors}>
            <SimpleSlider {...props}/>
        </ThemeProvider>
    )
}
export const StyledSimpleSlider = styled(SimpleSliderWithMUITheme)`
`

export const StyledSliderSection = styled(SliderSection)`
    color: ${colors.softWhite};
    .acronym {
        background: linear-gradient(12deg, ${colors.softWhite} 0%, ${colors.pink} 30%, ${colors.softWhite} 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    margin: 0px 2em 3em 2em;
    padding: 0 0 5vh 16vw;
    border: dashed;
    border-color: ${colors.pink};
    border-width: 0px 0px 1px 0px;
`

export const StyledInput = styled(FormInput)`
    input {
        display: block;
        margin: 2vh auto 2vh auto;
        border-radius: 2px;
        width: 40vw;
        height: 3vw;
        padding: 0.2em 1em 0.2em 1em;
        font-size: 1.0em;
        font-family: monospace;
        border: none;
        outline: none;
        opacity: 0.7;
        text-align: center;
    }
`
export const StyledTextArea = styled(FormTextArea)`
    textarea {
        display: block;
        margin: 2vh auto 6vh auto;
        border-radius: 2px;
        width: 40vw;
        height: 5vw;
        padding: 2em 1em 0.2em 1em;
        font-size: 1.0em;
        font-family: monospace;
        border: none;
        outline: none;
        opacity: 0.7;
        word-wrap: break-word;
        text-align: center;
    }
`

export const StyledButton = styled.button`
    width: 20vw;
    height: 7vw;
    background-image: linear-gradient(45deg, ${colors.nightBlue} 0%, ${colors.brightBlack} 30%, ${colors.blue} 100%);
    background-size: 30vw;
    border: none;
    border-radius: 3px;
    transition: background 0.5s ease-out;
    font-size: 20px;
    font-family: monospace;
    color: ${colors.softWhite};
    cursor: pointer;
    :hover {
        background-position: -10vw;
    }
    :focus {
        outline: none;
    }
`
