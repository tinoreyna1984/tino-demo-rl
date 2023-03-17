import Link from "next/link";

export default function MenuLink({dir, text}) {
    return (
        <>
            <Link className='text-white text-xl pl-14 md:text-lg md:pl-0' href={dir}>
                <span className='link link-underline link-underline-black'>
                    {text}
                </span>
            </Link>
        </>
    );
}