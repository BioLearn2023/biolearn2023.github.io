/* eslint-disable @next/next/no-img-element */
import React from "react"
import Image from 'next/image'
import { useRouter } from "next/router";
export default function Eucariota() {
    const router = useRouter();
    return(
        <>
        <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
    >
        <div
            className="relative left-[calc(50%-20rem)] aspect-[1155/678] w-[27.125rem] -translate-x-1 rotate-[30deg] bg-gradient-to-tr from-green-500 to-green-500 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
                clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
            }} />
        </div><div
            className="absolute inset-x-0 -top-70 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-100"
            aria-hidden="true"
    >
            <div
                className="relative left-[calc(50%-11rem)] aspect-[650/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-emerald-300 to-green-900 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                style={{
                    clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
                }} />
        </div><div
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
        >
            <div
                className="relative right-[calc(0%+11rem)] aspect-[600/600] w-[36.125rem] -translate-x-1/2  rotate-[30deg] bg-gradient-to-tr from-lime-600 to-emerald-950 opacity-30 sm:left-[calc(50%+15rem)] sm:w-[72.1875rem]"
                style={{
                    clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
                }} />
        </div>
        <div
        className="absolute inset-x-0 mt-[69rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
    >
        <div
            className="relative left-[calc(50%-20rem)] aspect-[1200/1000] w-[27.125rem] -translate-x-1 rotate-[30deg] bg-gradient-to-tr from-lime-300 to-green-400 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
                clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 12.1%, 80.7% 52%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
            }} />
        </div>

        <div className=" py-24 sm:py-12">
            <div className="mx-auto max-w-7xl px-6 lg:px-2">
                <div className="mx-auto max-w-7xl lg:mx-0">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl text-center text-emerald-900">Celula eucariotă</h2>
                    <div className="mx-auto mt-10 max-w-2x1 gap-x-8 gap-y-6 border-t border-green-900 pt-10 sm:mt-10 sm:pt-10 lg:mx-0 lg:max-w-none"></div>

                    <div className="mt-0 text-lg text-grey-600">
                        <span className="underline decoration-wavy text-[#65a30d] font-extrabold">Localizare: </span> O regăsim la 4 regnuri: Protista, Fungi, Plante și Animale. <br/>
                        <span className="underline decoration-wavy text-[#65a30d] font-extrabold">Componente:</span> <br/>
                        - membrană celulară <br/>
                        - citoplasmă <br/>
                        - nucleu <br/>
                    </div>

                    <div className="mx-auto mt-10 max-w-2x1 gap-x-8 gap-y-6 border-t border-green-900 pt-10 sm:mt-10 sm:pt-10 lg:mx-0 lg:max-w-none"></div>

                    <div className="mt-0 text-lg text-grey-600">
                        Celula eucariotă se împarte în: <br/>
                        <span className="underline decoration-wavy text-[#65a30d] font-extrabold">Celula vegetală: </span>perete celular, plastide, vacuole mari și permanente. <br/>
                        <span className="underline decoration-wavy text-[#65a30d] font-extrabold">Celula animală: </span>nu are perete celular, nu are plastide, vacuole mici și temporare. <br/>
                        <div className="flex justify-end -mt-32">
                            <img src="/images/celula-vegetala.png" width={250} height={250} alt="Picture of the author" className="rounded-lg"/>
                            <img src="/images/celula-animala.png" width={450} height={250} alt="Picture of the author" className="rounded-lg"/>
                        </div>
                    </div>

                    <div className="mx-auto mt-10 max-w-2x1 gap-x-8 gap-y-6 border-t border-green-900 pt-10 sm:mt-10 sm:pt-10 lg:mx-0 lg:max-w-none"></div>

                    <div className="mt-0 text-lg text-grey-600">
                        <span className="underline decoration-wavy text-[#65a30d] font-extrabold">Clasificarea organitelor:</span> <br/>
                        - cu membrană dublă: nucleu, plastide, mitocondrii <br/>
                        - cu membrană simplă: restul organitelor <br/>
                        - fără membrană: ribozomi, centrozomi <br/>
                    </div>

                    <div className="mx-auto mt-10 max-w-2x1 gap-x-8 gap-y-6 border-t border-green-900 pt-10 sm:mt-10 sm:pt-10 lg:mx-0 lg:max-w-none"></div>

                    <div className="mt-0 text-lg text-grey-600">
                        <span className="underline decoration-wavy text-[#65a30d] font-extrabold">Componente arevii:</span> <br/>
                        Protoplastul reprezintă centrul celulei eucariote. <br/>
                        Componente arevii: perete celular, vacuole, incluziuni ergastice. <br/>
                        <span className="underline decoration-wavy text-[#65a30d] font-extrabold">Componente vii (protoplasmatice):</span> <br/>
                        - restul 
                    </div>
                    
                    <div className="mx-auto mt-10 max-w-2x1 gap-x-8 gap-y-6 border-t border-green-900 pt-10 sm:mt-10 sm:pt-10 lg:mx-0 lg:max-w-none"></div>

                    <div className="mt-0 text-lg text-grey-600">
                        Celulele eucariote, vegetale și animale, sunt celule tipice care au o structură similară, însă prezintă anumite particularități. <br/>
                        <span className="underline decoration-wavy text-[#65a30d] font-extrabold"> Celula eucariotă vegetală </span> conține plastide, una sau mai multe vacuole permanente și un perete celular de natură celulozică. <br/>
                        <span className="underline decoration-wavy text-[#65a30d] font-extrabold">Celula eucariotă animală:</span> <br/>
                        - este lipsită de plastide <br/>
                        - are o formațiune numită centrozom <br/>
                        - vacuolele sunt structuri temporare, și atunci când există au dimensiuni foarte mici <br/>
                    </div>

                    <div className="mx-auto mt-10 max-w-2x1 gap-x-8 gap-y-6 border-t border-green-900 pt-10 sm:mt-10 sm:pt-10 lg:mx-0 lg:max-w-none"></div>

                    <div className="mt-0 text-lg text-grey-600">
                        Celulele eucariote vegetale și animale sunt foarte diferite ca mărime, formă și funcțiune. <br/>
                    </div>
                </div>
            </div>
        </div>
        
        <div className="flex justify-center">
        <span onClick={()=> void router.push('/9/procariota')} className="inline-flex items-center px-4 py-2 mr-3 mb-8 text-sm font-medium text-lime-500 bg-white border border-lime-500 rounded-lg hover:bg-lime-500 hover:text-white dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
        <svg aria-hidden="true" className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd"></path></svg>
        Lecția anterioară
        </span>
        <span onClick={()=> void router.push('/9/perete')} className="inline-flex items-center px-4 py-2 mb-8 text-sm font-medium text-lime-500 bg-white border border-lime-500 rounded-lg hover:bg-lime-500 hover:text-white dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
        Următoarea lecție
        <svg aria-hidden="true" className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </span>
        </div>
                   

        </>
    )
}
