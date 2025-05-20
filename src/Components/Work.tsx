import Githubchart from "./ui/Githubchart";

export default function Work(){
    return(
    <>
    <div>
    <blockquote className="mt-6 border-l-2 pl-6 italic">
      
    </blockquote>
    <div className="my-6 px-4 py-10">
        <blockquote className="mt-6 border-l-2 pl-6 italic text-lg max-w-2xl mx-auto">
          "Doubt is only removed by action. If you're not working then that's where doubt comes in"<br/>
      -Conor McGregor
        </blockquote>
      </div>
      <div>
     <Githubchart/>
      <p className="text-center leading-7 [&:not(:first-child)]:mt-6">
     deployed most of my work on github must go through it @
     <a className="hover:underline" href="https://github.com/leanwithkumar">leanwithkumar

     </a>
    </p>

      </div>
    </div>
    </>
    )
}