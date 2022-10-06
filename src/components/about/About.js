import React from 'react';
import Style from './About.module.scss';
import Terminal from "./Terminal";
import {Box} from "@mui/material";
import {info} from "../../info/Info";


export default function About() {

    function aboutMeText() {
        return <>
            <p>{info.bio}</p>
        </>;
    }

    function skillsText() {
        return <>
                <p><span className={Style.pink}>Mes compétences</span> :</p>
            <span style={{color: info.baseColor}}> <u>Je Maitrise</u></span>
            <ul className={Style.skills}>
                {info.skills.proficientWith.map((proficiency, index) => <li key={index}>{proficiency}</li>)}
            </ul>
            <span style={{color: info.baseColor}}> <u>J'ai déjà utilisé</u></span>
            <ul className={Style.skills}>
                {info.skills.exposedTo.map((skill, index) => <li key={index}>{skill}</li>)}
            </ul>
        </>;
    }

    function miscText() {
        return <>
            <p><span className={Style.pink}>Mes passions</span> :</p>
            <ul>
                {info.hobbies.map((hobby, index) => (
                    <li key={index}><Box component={'span'} mr={'0.7rem'}>{hobby.emoji}</Box>{hobby.label}</li>
                ))}
            </ul>
        </>;
    }

    return (
        <Box display={'flex'} flexDirection={'column'} alignItems={'center'} mt={'2.6rem'}>
            <Terminal text={aboutMeText()}/>
            <Terminal text={skillsText()}/>
            <Terminal text={miscText()}/>
        </Box>
    )
}