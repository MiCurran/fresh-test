/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import {useState, useEffect} from 'preact/hooks';
import axiod from "https://deno.land/x/axiod/mod.ts";

export default function UserCard() {
const [user, setUser] = useState<any>(null);
const [loaded, setLoaded] = useState<boolean>(false);
const [hovered, setHovered] = useState<boolean>(false);

const getAdvice = () => {
  setLoaded(false);
  axiod.get('https://api.adviceslip.com/advice').then((data) => {
    setUser(data.data.slip.advice)
    console.log(data.data.slip.advice)
    setLoaded(true);
});
};

useEffect(() => {
  setLoaded(false);
  axiod.get('https://api.adviceslip.com/advice').then((data) => {
    setUser(data.data.slip.advice)
    console.log(data.data.slip.advice)
    setLoaded(true);
});
return () => {
    true
  }
}, [])
  
  return (
    
<div class={tw`w-2xl max-w-2xl rounded-lg shadow-md `}
style={{backgroundColor: 'hsl(217, 19%, 24%)'}}
>
    <div class={tw`flex flex-col items-center p-10 font-Manrope text-center`}
    style={{color: 'hsl(193, 38%, 86%)', fontSize: '2.5rem',}}
    >
        <p class={tw`text-lg font-bold font-sans`} style={{color: 'hsl(150, 100%, 66%)'}}>Fresh Advice</p>
        {loaded
          ? <p style={{fontWeight: 800}}>"{user}"</p>
          : <p>loading...</p>
        }
                <div class={tw`flex mt-4 space-x-3 lg:mt-6`}>
        <img
        src="/patternDivider.svg"
        height="100px"
        alt="a line with a quotation mark in the center"
      />
      </div>
        <div class={tw`flex mt-4 space-x-3 lg:mt-6`}>
            <button
              onClick={getAdvice}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              style={
                hovered === true
                ? {boxShadow: `0 5px 50px 2px hsl(150, 100%, 66%)`, backgroundColor: 'hsl(150, 100%, 66%)'}
                : {backgroundColor: 'hsl(150, 100%, 66%)'}
              }
              href="#" class={tw`inline-flex items-center p-5 text-sm font-medium text-center text-white rounded-full`}>
                <img
        src="/iconDice.svg"
        height="100px"
        alt="Icon of a die"
      />
            </button>
        </div>
    </div>
</div>

  );
}


/* ### Primary

- Light Cyan: hsl(193, 38%, 86%)
- Neon Green: hsl(150, 100%, 66%)

### Neutral

- Grayish Blue: hsl(217, 19%, 38%)
- Dark Grayish Blue: hsl(217, 19%, 24%)
- Dark Blue: hsl(218, 23%, 16%) */