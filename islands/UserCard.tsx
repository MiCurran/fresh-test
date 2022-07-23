/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import {useState, useEffect} from 'preact/hooks';
import axiod from "https://deno.land/x/axiod/mod.ts";

interface IUserProps {
    userImage: string
}
export default function UserCard() {
const [user, setUser] = useState<any>(null);
const [loaded, setLoaded] = useState<boolean>(false);

useEffect(() => {
  axiod.get('https://randomuser.me/api/').then((data) => {
    setUser(data.data.results[0])
    console.log(data.data.results[0])
    setLoaded(true);
});
return () => {
    'hello'
  }
}, [])
  
  return (
    
<div class={tw`max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700`}>
    <div class={tw`flex flex-col items-center pb-10`}>
        <img class={tw`mb-3 w-24 h-24 rounded-full shadow-lg`} src={loaded && user.picture.large} alt="Bonnie image"/>
        <h5 class={tw`mb-1 text-xl font-medium text-gray-900 dark:text-white`}>{loaded && `${user?.name?.first} ${user?.name?.last}`}</h5>
        <span class={tw`text-sm text-gray-500 dark:text-gray-400`}>Visual Designer</span>
        <div class={tw`flex mt-4 space-x-3 lg:mt-6`}>
            <a href="#" class={tw`inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}>Add friend</a>
            <a href="#" class={tw`inline-flex items-center py-2 px-4 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-70`}>Message</a>
        </div>
    </div>
</div>

  );
}
