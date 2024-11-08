import React from 'react'

const WhatiDo = () => {
  return (
    <div>
        {/* What i do */}
        <div className="py-10">
            <h1 className='text-4xl border-l-4 pl-3 mb-5 font-bold font-poptwo text-slate-800 dark:text-slate-200 border-slate-800 dark:border-slate-200'>What i do </h1>
            <p className='text-lg font-poptwo pr-[10%] font-medium text-slate-800 dark:text-slate-200'>I have more than 10 years' experience building software for clients all over the world. Below is a quick overview of my    main technical skill sets and technologies I use. Want to find out more about my experience? Check out my  
                <span className='text-green-500 px-2 cursor-pointer'>online resume</span> and 
                <span className='text-green-500 px-2 cursor-pointer'>project portfolio.</span>
            </p>
        </div>
        {/* Skills */}
    <div className="w-full flex justify-center items-center sm:p-5">
        <div className="flex flex-col gap-3 justify-center items-center flex-wrap md:gap-10 sm:flex-row">
           {/* HTML CSS Tailwind */}
            <div className="shadow w-full sm:w-[350px] duration-300 ease-in-out py-10 p-5 border-2 border-slate-300 bg-slate-200 hover:bg-slate-50 hover:border-yellow-400 dark:bg-slate-700 dark:hover:bg-slate-900 mb-3">
                <div className="flex gap-3 mb-3 ">
                    <img className='w-9 h-9 p-1 rounded-full bg-slate-50' src="https://cdn4.iconfinder.com/data/icons/flat-brand-logo-2/512/html5-512.png" alt="" />
                    <img className='w-9 h-9 p-1 rounded-full bg-slate-50' src="https://raw.githubusercontent.com/github/explore/6c6508f34230f0ac0d49e847a326429eefbfc030/topics/css/css.png" alt="" />
                    <img className='w-9 h-9 p-1 rounded-full bg-slate-50' src="https://www.svgrepo.com/show/374118/tailwind.svg" alt="" />
                </div>
                <h3 className='text-xl font-bold font-poptwo text-slate-800 dark:text-slate-200 mb-3'>HTML, CSS, Tailwind</h3>
                <p className='text-lg font-semibold font-poptwo text-slate-800 dark:text-slate-200 mb-3'>List skills and technologies here. Customize as needed. Built on HTML5, Sass, and Bootstrap 5.</p>
            </div>
           {/* Javascript */}
            <div className="shadow w-full sm:w-[350px] duration-300 ease-in-out py-10 p-5 border-2 border-slate-300 bg-slate-200 hover:bg-slate-50 hover:border-yellow-400 dark:bg-slate-700 dark:hover:bg-slate-900 mb-3">
                <div className="flex gap-3 mb-3 ">
                    <img className='w-9 h-9 p-1 rounded-full bg-slate-50' src="https://static-00.iconduck.com/assets.00/javascript-js-icon-2048x2048-nyxvtvk0.png" alt="" />
                </div>
                <h3 className='text-xl font-bold font-poptwo text-slate-800 dark:text-slate-200 mb-3'>Javascript</h3>
                <p className='text-lg font-semibold font-poptwo text-slate-800 dark:text-slate-200 mb-3'>List skills and technologies here. Customize as needed. Built on HTML5, Sass, and Bootstrap 5.</p>
            </div>
           {/* React */}
            <div className="shadow w-full sm:w-[350px] duration-300 ease-in-out py-10 p-5 border-2 border-slate-300 bg-slate-200 hover:bg-slate-50 hover:border-yellow-400 dark:bg-slate-700 dark:hover:bg-slate-900 mb-3">
                <div className="flex gap-3 mb-3 ">
                    <img className='w-9 h-9 p-1 rounded-full bg-slate-50' src="https://w7.pngwing.com/pngs/79/518/png-transparent-js-react-js-logo-react-react-native-logos-icon-thumbnail.png" alt="" />
                </div>
                <h3 className='text-xl font-bold font-poptwo text-slate-800 dark:text-slate-200 mb-3'>React</h3>
                <p className='text-lg font-semibold font-poptwo text-slate-800 dark:text-slate-200 mb-3'>List skills and technologies here. Customize as needed. Built on HTML5, Sass, and Bootstrap 5.</p>
            </div>
            {/* Next.js */}
            <div className="shadow w-full sm:w-[350px] duration-300 ease-in-out py-10 p-5 border-2 border-slate-300 bg-slate-200 hover:bg-slate-50 hover:border-yellow-400 dark:bg-slate-700 dark:hover:bg-slate-900 mb-3">
                <div className="flex gap-3 mb-3 ">
                    <img className='w-9 h-9 p-1 rounded-full bg-slate-50' src="https://static-00.iconduck.com/assets.00/next-js-icon-512x512-zuauazrk.png" alt="" />
                </div>
                <h3 className='text-xl font-bold font-poptwo text-slate-800 dark:text-slate-200 mb-3'>Next . Js</h3>
                <p className='text-lg font-semibold font-poptwo text-slate-800 dark:text-slate-200 mb-3'>List skills and technologies here. Customize as needed. Built on HTML5, Sass, and Bootstrap 5.</p>
            </div>
            {/* node.js */}
            <div className="shadow w-full sm:w-[350px] duration-300 ease-in-out py-10 p-5 border-2 border-slate-300 bg-slate-200 hover:bg-slate-50 hover:border-yellow-400 dark:bg-slate-700 dark:hover:bg-slate-900 mb-3">
                <div className="flex gap-3 mb-3 ">
                    <img className='w-9 h-9 p-1 rounded-full bg-slate-50' src="https://img.favpng.com/6/12/25/node-js-javascript-express-js-npm-react-png-favpng-wq9iQPufDEPeEmaa7SD7eT2fM_t.jpg" alt="" />
                </div>
                <h3 className='text-xl font-bold font-poptwo text-slate-800 dark:text-slate-200 mb-3'>Node . Js</h3>
                <p className='text-lg font-semibold font-poptwo text-slate-800 dark:text-slate-200 mb-3'>List skills and technologies here. Customize as needed. Built on HTML5, Sass, and Bootstrap 5.</p>
            </div>
            {/* Express */}
            <div className="shadow w-full sm:w-[350px] duration-300 ease-in-out py-10 p-5 border-2 border-slate-300 bg-slate-200 hover:bg-slate-50 hover:border-yellow-400 dark:bg-slate-700 dark:hover:bg-slate-900 mb-3">
                <div className="flex gap-3 mb-3 ">
                    <img className='w-9 h-9 p-1 rounded-full bg-slate-50' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnDneBGnQL7E9hZDwztRO1GfQcCj1FqRrhBw&s" alt="" />
                </div>
                <h3 className='text-xl font-bold font-poptwo text-slate-800 dark:text-slate-200 mb-3'>Express . Js</h3>
                <p className='text-lg font-semibold font-poptwo text-slate-800 dark:text-slate-200 mb-3'>List skills and technologies here. Customize as needed. Built on HTML5, Sass, and Bootstrap 5.</p>
            </div>
            {/* Socket.io */}
            <div className="shadow w-full sm:w-[350px] duration-300 ease-in-out py-10 p-5 border-2 border-slate-300 bg-slate-200 hover:bg-slate-50 hover:border-yellow-400 dark:bg-slate-700 dark:hover:bg-slate-900 mb-3">
                <div className="flex gap-3 mb-3 ">
                    <img className='w-9 h-9 p-1 rounded-full bg-slate-50' src="https://static-00.iconduck.com/assets.00/socket-io-icon-512x512-8untkuqg.png" alt="" />
                </div>
                <h3 className='text-xl font-bold font-poptwo text-slate-800 dark:text-slate-200 mb-3'>Socket . io</h3>
                <p className='text-lg font-semibold font-poptwo text-slate-800 dark:text-slate-200 mb-3'>List skills and technologies here. Customize as needed. Built on HTML5, Sass, and Bootstrap 5.</p>
            </div>
            {/* Mongo DB */}
            <div className="shadow w-full sm:w-[350px] duration-300 ease-in-out py-10 p-5 border-2 border-slate-300 bg-slate-200 hover:bg-slate-50 hover:border-yellow-400 dark:bg-slate-700 dark:hover:bg-slate-900 mb-3">
                <div className="flex gap-3 mb-3 ">
                    <img className='w-9 h-9 p-1 rounded-full bg-slate-50' src="https://w7.pngwing.com/pngs/115/190/png-transparent-mongodb-original-logo-icon-thumbnail.png" alt="" />
                </div>
                <h3 className='text-xl font-bold font-poptwo text-slate-800 dark:text-slate-200 mb-3'>Mongo DB</h3>
                <p className='text-lg font-semibold font-poptwo text-slate-800 dark:text-slate-200 mb-3'>List skills and technologies here. Customize as needed. Built on HTML5, Sass, and Bootstrap 5.</p>
            </div>

        </div>
    </div>    

    </div>
  )
}

export default WhatiDo
