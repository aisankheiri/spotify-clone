"use client";

import qs from "query-string";
import { useRouter } from "next/navigation";
import { useState ,useEffect} from "react";

import useDebounce from "@/hooks/useDebounce";
import Input from "./Input";
const SearchInput = () => {
    const router = useRouter();
    const [value,setValue] = useState<string>("");
    const debouncedVAlue = useDebounce<string>(value,500);

    useEffect(()=>{
        const query = {
            title: debouncedVAlue,
        };

        const url = qs.stringifyUrl({
            url: '/search',
            query: query
        })

        router.push(url);

    },[ debouncedVAlue , router ]);

  return (
    <div>
        <Input
        placeholder="What do you want to listen to?"
        value={value}
        onChange={(e)=> setValue(e.target.value)}
        />
      
    </div>
  )
}

export default SearchInput