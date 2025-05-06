import React from 'react';
import FmCircle from "@/components/common/circle/circle.component";
import AppStoreImg from "@/assets/icons/app-store.svg"
import GooglePlayImg from "@/assets/icons/google-play.svg"
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo-white.svg";
import FacebookIcon from "@/assets/icons/facebook.svg";
import TwitterIcon from "@/assets/icons/twitter.svg";
import InstagramIcon from "@/assets/icons/instagram.svg";
import FmStack from "@/components/common/stack/stack.component";
import FmLink from "@/components/common/link/link.component";

const Footer = () => {
    return (
        <footer>
            <div className="bg-dark-navy relative overflow-hidden mt-[200px]">
                <div className='flex flex-col justify-center gap-10 md:flex-row md:justify-between
                                items-center sm:px-[155px] py-[62px] md:px-[165px] md:py-[102px]'>
                    <h2 className='text-h2 text-white max-w-[415px] text-center md:text-left'>
                        Sign up and Scoot off today
                    </h2>

                    <div className='flex flex-row gap-[18px]'>
                        <Image src={AppStoreImg} alt='app-store' className='w-[156px] h-[56px]'/>
                        <Image src={GooglePlayImg}
                               alt='google-play'
                               className='w-[156px] h-[56px]'/>
                    </div>
                </div>


                <div className="flex flex-row gap-14 absolute top-0 lg:top-[150px] lg:-right-[230px]">
                    <FmCircle size='lg' color='grey-transparent'/>
                    <FmCircle size='lg' color='grey-transparent'/>
                    <FmCircle size='lg' color='grey-transparent' variant='filled'/>
                </div>
            </div>


            <div className='w-full bg-steel py-[22px] lg:px-[165px] px-[39px]'>
                <div className='flex flex-col md:flex-row gap-[85px] items-center md:justify-between'>
                    <div className="flex flex-col md:flex-row items-center gap-[41px] md:gap-[58px]">
                        <Link href='/'>
                            <Image src={logo} alt="logo" width={107} height={28} className='fill-white'/>
                        </Link>

                        <div className='flex flex-col md:flex-row gap-4 md:gap-8 items-center'>
                            <FmLink href='/about'>About</FmLink>
                            <FmLink href='/locations'>Location</FmLink>
                            <FmLink href='/careers'>Careers</FmLink>
                        </div>
                    </div>

                    <div className="flex flex-row gap-8">
                        <Image src={FacebookIcon} alt='facebook' />
                        <Image src={TwitterIcon} alt='twitter' />
                        <Image src={InstagramIcon} alt='instagram' />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;