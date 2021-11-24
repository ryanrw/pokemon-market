import Image from "next/image"

import searchIcon from "../../public/icons/search.png"
import { SearchBarProps } from "./type"

export function SearchBar({ className }: SearchBarProps) {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute inset-y-0 left-0 flex items-center pl-4">
        <Image src={searchIcon} width={20} height={20} alt="search icon" />
      </div>
      <input
        className="bg-transparent p-4 pl-12 border rounded border-solid outline-none border-white-darker focus:border-white focus:text-white"
        placeholder="Search by Name"
      />
    </div>
  )
}
