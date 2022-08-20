import React from 'react';
import { ExternalLink } from 'react-external-link';
import images from '../data/imagesData.js';


import { AiFillGithub } from "@react-icons/all-files/ai/AiFillGithub";
import { AiOutlineGlobal } from "@react-icons/all-files/ai/AiOutlineGlobal";

function ProjectCard({ titel, text, github, website, image }) {
    return (
        <div className='Project-Card'>
            <div className='Project-Pic'>
                <img src={images[image]} alt="Project Bild" />
            </div>
            <div className='Project-Info'>
                <h2>{titel}</h2>
                <hr />
                <p>
                    {text}
                </p>
                <div className='Project-Icon-Container'>
                    <ExternalLink href={github}><AiFillGithub className='Project-Icon' /></ExternalLink>
                    <ExternalLink href={website}><AiOutlineGlobal className='Project-Icon' /></ExternalLink>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard