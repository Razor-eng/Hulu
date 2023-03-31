import Image from "next/image";
import HeaderItem from "./HeaderItem";
import { HomeIcon, BoltIcon, MagnifyingGlassIcon, UserIcon, CheckBadgeIcon, SwatchIcon } from "@heroicons/react/24/outline"

export default function Header() {
    return (
        <header className="flex flex-col sm:flex-row m-0 justify-between items-center h-auto ">
            <Image className="object-contain" src="/logo.png" alt="HULU" width={200} height={100} />
            <div className="flex flex-grow justify-evenly max-w-2xl">
                <HeaderItem title='HOME' Icon={HomeIcon} />
                <HeaderItem title='TRENDING' Icon={BoltIcon} />
                <HeaderItem title='VERIFIED' Icon={CheckBadgeIcon} />
                <HeaderItem title='COLLECTIONS' Icon={SwatchIcon} />
                <HeaderItem title='SEARCH' Icon={MagnifyingGlassIcon} />
                <HeaderItem title='ACCOUNT' Icon={UserIcon} />
            </div>
        </header>
    )
}
