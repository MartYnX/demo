'use client'

import './resume.scss'
import { useEffect } from 'react';
import $ from 'jquery';
import 'font-awesome/css/font-awesome.min.css';
import data from './resume.json';


export default function Resume() {

    useEffect(() => {
        // Code JavaScript à exécuter après le rendu
        (function () {
            $('.skills-prog li').find('.skills-bar').each(function (i) {
                const $bar = $(this).find('.bar');
                const percent = $(this).parent().data('percent');

                if (percent) {
                    $bar.delay(i * 150).animate({
                        width: percent + '%'
                    }, 1000, 'linear', function () {
                        $(this).css({
                            'transition-duration': '.5s'
                        });
                    });
                }
            });

            $('.skills-soft li').find('svg').each(function (i) {
                const circle = $(this).children('.cbar');
                const r = circle.attr('r');
                const percent = $(this).parent().data('percent');

                if (r && percent) {
                    const c = Math.PI * (parseFloat(r) * 2);
                    const cbar = ((100 - percent) / 100) * c;

                    circle.css({
                        'stroke-dashoffset': c,
                        'stroke-dasharray': c
                    });

                    circle.delay(i * 150).animate({
                        strokeDashoffset: cbar
                    }, 1000, 'linear', function () {
                        $(this).css({
                            'transition-duration': '.3s'
                        });
                    });

                    $(this).siblings('small').prop('Counter', 0).delay(i * 150).animate({
                        Counter: percent
                    }, {
                        duration: 1000,
                        step: function (now) {
                            $(this).text(Math.ceil(now) + '%');
                        }
                    });
                }
            });
        })();
    }, []);

    return (

        <div className="resume">
            <div className="base">
                <div className="profile">
                    <div className="photo"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/764024/profile/profile-512.jpg" /></div>
                    <div className="info">
                        <h4 className="name">{data.name}</h4>
                        <small className="job">{data.job}</small>
                    </div>
                </div>
                <div className="about">
                    <h3>About me</h3>
                    {data.about}
                </div>
                <div className="contact">
                    <h3>Contact</h3>
                    {Object.entries(data.contact).map(([key, { icon, value, classname }]) => (
                        <div key={key} className={classname}>
                            <i className={`fa ${icon}`}></i><span>{value}</span>
                        </div>
                    ))}
                </div>
                <div className="follow">
                    <h3>Follow</h3>
                    <div className="box">
                        {data.follow.map((social, index) => (
                            <a key={index} href={social.link} target="_blank" rel="noopener noreferrer">
                                <i className={`fa ${social.icon}`}></i>
                            </a>
                        ))}
                    </div>
                </div>
                <div className="func">
                    <div className="work">
                        <h3><i className="fa fa-briefcase"></i>Work Exrerience</h3>
                        <ul>
                            {data.workExperience.map((job, index) => (
                                <li key={index}>
                                    <span>{job.title}</span><small>{job.date}</small>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="edu">
                        <h3><i className="fa fa-graduation-cap"></i>Education</h3>
                        <ul>
                            {data.education.map((edu, index) => (
                                <li key={index}>
                                    <span>{edu.degree}</span><small>{edu.date}</small>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="skills-prog">
                        <h3><i className="fa fa-code"></i>Programming Skills</h3>
                        <ul>
                            {data.skillsProgramming.map((skill, index) => (
                                <li key={index} data-percent={skill.percent}>
                                    <span>{skill.name}</span>
                                    <div className="skills-bar">
                                        <div className="bar"></div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="skills-soft">
                        <h3><i className="fa fa-th-list"></i>Software Skills</h3>
                        <ul>
                            {data.skillsSoftware.map((software, index) => (
                                <li key={index} data-percent={software.percent}>
                                    {/* SVG for circular progress */}
                                    <svg viewBox="0 0 100 100">
                                        <circle cx="50" cy="50" r="45"></circle>
                                        <circle className="cbar" cx="50" cy="50" r="45"></circle>
                                    </svg><span>{software.name}</span><small></small>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="interests">
                        <h3><i className="fa fa-star"></i>Interests</h3>
                        <div className="interests-items">
                            {data.interests.map((interest, index) => (
                                <div key={index} className={interest.name.toLowerCase()}>
                                    {interest.icon &&
                                        (<i className={`fa ${interest.icon}`}></i>)}
                                    <span>{interest.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}