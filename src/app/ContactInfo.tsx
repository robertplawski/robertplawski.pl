"use client"
import {ReactElement, useEffect, useState} from "react";

type ContactInfoProps = {
    icon: ReactElement,
    label: string,
    href?: string,
    value: string,
    fallback?: string,
}

export const ContactInfo = ({
                                label,
                                icon,
                                href,
                                value,
                                fallback
                            }: ContactInfoProps) => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return <a className={"flex flex-row gap-2 items-center"} title={label}
              href={href}> {icon} {mounted ? value : (fallback || value)} </ a>

};