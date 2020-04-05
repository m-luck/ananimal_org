import React from 'react'
import { StyledSimpleSlider } from './styled-presentational-components.jsx'
import {
    DEFAULT_MAX,
    DEFAULT_MID,
    DEFAULT_MIN,
} from '../constants.js'

const SliderSection = props => {

    const {
        acronym,
        className,
        desc,
        input, // If passed in from Redux Form Field
        marks = [],
        max = DEFAULT_MAX,
        min = DEFAULT_MIN,
        sectionTitle,
    } = props

    return (
        <div className={className}>
            <h3>
                <span className="acronym">{acronym}</span>
                &emsp;
                {sectionTitle.toUpperCase()}
            </h3>
            <p>{desc.mission}</p>
            <p>{desc.description}</p>
        </div>
    )
}

export default SliderSection
