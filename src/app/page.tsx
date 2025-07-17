import {ContactInfo} from "@/app/ContactInfo";
import {MdEmail, MdPhone} from "react-icons/md";
import {BsGithub, BsLinkedin} from "react-icons/bs";
import {FaBluesky, FaLocationPin} from "react-icons/fa6";
import {BiLogoJavascript, BiLogoPhp, BiLogoReact, BiLogoTypescript, BiLogoWordpress} from "react-icons/bi";
import {DiLinux} from "react-icons/di";
import {TbSql} from "react-icons/tb";
import {CurrentYear} from "@/app/CurrentYear";
import {NavBar} from "@/app/NavBar";

export default function Home() {
    return (
        <div
            className="font-sans max-w-screen flex justify-center items-center flex-col gap-8 min-h-screen p-8 pb-20 gap-0 lg:p-20">
            {/*<NavBar/>*/}
            <main
                className="grid grid-cols-1 border-neutral-700  lg:grid-cols-[1fr_auto] items-center gap-[32px] lg:gap-[48px] row-start-1 justify-center ">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
                    Robert Pławski<br/> web developer<br/>
                </h1>
                <div className={"flex flex-col row-span-2 gap-2 text-xl"}>
                    <ContactInfo icon={<FaLocationPin/>} label={"Robert's location"} value={"Opole, Poland"}/>
                    <ContactInfo icon={<MdEmail/>} label={"Robert's email address"} href={"mailto:dev@robertplawski.pl"}
                                 value={"dev@robertplawski.pl"}
                                 fallback={"spm@robertplawski.pl"}/>
                    <ContactInfo icon={<MdPhone/>} label={"Robert's phone number"} href={"tel:+48660206188"}
                                 value={"+48 660 206 188"}
                                 fallback={"+48 ___ ___ ___"}/>
                    <ContactInfo icon={<BsGithub/>} label={"Robert's Github account"}
                                 href={"https://github.com/robertplawski"}
                                 value={"robertplawski"}/>
                    <ContactInfo icon={<BsLinkedin/>} label={"Robert's LinkedIn account"}
                                 value={"Robert Pławski"}
                                 href={"https://linkedin.com/in/robertplawski"}/>
                    <ContactInfo icon={<FaBluesky/>} label={"Robert's Bluesky account"}
                                 value={"@robertplawski.pl"}
                                 href={"https://bsky.app/profile/robertplawski.pl"}/>
                </div>

                <div className={"flex text-4xl flex-row gap-2 justify-between "}>
                    <BiLogoJavascript/>
                    <BiLogoTypescript/>
                    <BiLogoReact/>
                    <BiLogoWordpress/>
                    <BiLogoPhp/>
                    <TbSql/>
                    <DiLinux/>
                </div>
            </main>
            <footer
                className={"text-md font-normal text-neutral-600 tracking-normal text-center lg:tracking-widest "}>
                robertplawski.pl,
                all
                rights
                reserved &copy;<CurrentYear/></footer>
        </div>
    );
}
