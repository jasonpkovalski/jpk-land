import React, { ReactElement } from "react";
import { Icon } from "@mdi/react";

const ICON_COLOR = "white";
const ICON_SIZE = 1;

interface Props {
    to: string;
    iconPath: string;
    color?: string;
    size?: number;
}

export default function SocialLink({
    to,
    iconPath,
    color = ICON_COLOR,
    size = ICON_SIZE,
}: Props): ReactElement {
    return (
        <a
            href={to}
            target="_blank"
            className="rounded-full ease-in-out duration-700 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-400 px-2 py-2 mx-2 my-2"
        >
            <Icon path={iconPath} color={color} size={size} />
        </a>
    );
}