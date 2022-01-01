import React from "react";
import { mdiGithub, mdiLinkedin, mdiTwitter } from "@mdi/js";
import SocialLink from "./SocialLink";

const Footer = () => {
    return (
        <footer className="flex flex-col sm:flex-row items-center min-w-full justify-around">
            <div
                className="py-3 flex flex-row flex-wrap justify-center"
            >
                <SocialLink
                    to="https://github.com/jasonpkovalski"
                    iconPath={mdiGithub}
                />
                <SocialLink
                    to="https://www.linkedin.com/in/jasonkovalski"
                    iconPath={mdiLinkedin}
                />
                <SocialLink
                    to="https://twitter.com/grim_ssbu"
                    iconPath={mdiTwitter}
                />
            </div>
        </footer>
    );
}

export default Footer