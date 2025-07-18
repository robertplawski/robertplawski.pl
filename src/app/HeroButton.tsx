import {PropsWithChildren} from "react";

interface HeroButtonProps extends PropsWithChildren {
    href?: string;
    variant: "hero" | "secondary";
}

export const HeroButton = ({href, variant, children}: HeroButtonProps) => {
    return (
        <a href={href}
           className={`cursor-pointer p-3 px-4   text-center rounded-full ${variant == 'hero' ? " bg-white  text-black" : (variant == "secondary") ? ' text-white border-white border-[1px]' : ''}`
           }>
            {children}
        </a>
    );
};