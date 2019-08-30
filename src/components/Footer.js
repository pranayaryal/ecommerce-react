import React from 'react';

import FooterLinks from './FooterLinks';

const Footer = () => {
    return (
        <footer>
            <section className="callout">
                <h2>"The surprising styles of Skyline Ivy are advanced for all seasons"</h2>
                <p>Hansel Anderson</p>
            </section>
            <FooterLinks />
            <div className="sarahstuff">
                <p className="sarahlink">
                    This project is <a href="https://github.com/sdras/ecommerce-netlify">open source on github</a>,
                       hosted with <a href="https://bit.ly/2G29YwK">Netlify</a>, and made with love by Sarah Drasner
                        <a href="https://twitter.com/sarah_edo" >@sarah_edo (twitter)</a> &
                        <a href="https://github.com/sdras">@sdras (github)</a>
                </p>
            </div>
        </footer>
    );
}

export default Footer;
