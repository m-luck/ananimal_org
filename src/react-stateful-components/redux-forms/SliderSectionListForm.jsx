import React from 'react'
import { Field, reduxForm } from 'redux-form'
import {
    StyledInput,
    StyledSliderSection,
    StyledButton,
    StyledTextArea,
} from '../../react-presentational-components/styled-presentational-components.jsx'
import {
    explanations,
    sliderConfigs,
    SLIDERS_FORM_KEY,
    sliderSectionListFormInitialValues,
} from '../../constants.js'
import selectors from '../../selectors/selectors.js'
import { connect } from 'react-redux'
import { onSubmitSliderSectionListForm } from '../../redux/action-creators.js'

const UnconnectedSliderSectionList = props => {
    const {
        className,
        handleSubmit,
    } = props

    selectors.setIP(props.change)

    return (
        <div className={className}>
            <h1>
                <span className="grad">A\N\A\N\I\M\A\L</span>
                &emsp; The Organizations This World Wants &amp; Needs</h1>
            <div>
                <StyledSliderSection desc={explanations.ls} acronym="LS" sectionTitle="Ananimal Lifespaces 🏘️"/>
                <StyledSliderSection desc={explanations.aavg} acronym="AVG" sectionTitle="Ananimal Vegetal Force 🥬"/>
                <StyledSliderSection desc={explanations.amax} acronym="MAX" sectionTitle="Ananimal Maximization Force ⚔️"/>
                <StyledSliderSection desc={explanations.imm} acronym="IMM" sectionTitle="Ananimal Immersions & Productions 🌌"/>
                <StyledSliderSection desc={explanations.lax} acronym="LAX" sectionTitle="Ananimal Luxury Art Fund 💎"/>
                <StyledSliderSection desc={explanations.amin} acronym="MIN" sectionTitle="Ananimal Minimization Force 🛡️"/>
                <StyledSliderSection desc={explanations.uxu} acronym="UXU" sectionTitle="Rustbelt Luxury 👕"/>
                <StyledSliderSection desc={explanations.blnc} acronym="BLNC" sectionTitle="B14N Consulting Services 🔖"/>
            </div>
            <div style={{textAlign: "center"}}>
                <Field
                    component={StyledInput}
                    name="email"
                    key="email"
                    onChange={null}
                    placeholder="Type your email to join the mailing list..."
                />
                <Field
                    component={StyledTextArea}
                    name="comment"
                    key="comment"
                    onChange={null}
                    placeholder="Type any other information you'd like to include..."
                />
                <StyledButton onClick={() =>
                    {
                        handleSubmit()
                        props.change('email', 'Submitted!')
                        props.change('comment', 'This is just the beginning.')
                    }
                }>Join ▶</StyledButton>
            </div>
        </div>
    )
}

const SliderSectionListForm = reduxForm({
    form: SLIDERS_FORM_KEY,
    onSubmit: onSubmitSliderSectionListForm,
  })(UnconnectedSliderSectionList)

export default connect(null)(SliderSectionListForm)
