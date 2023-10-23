import { TeamMembers } from "../../utils/data";

const Team = () => {
  return (
    <div className=' bg-[#D4E4FB]'>
     <h1 className='font-bold text-lg lg:text-3xl text-center py-5'>Meet our Team</h1>  
     <div className="grid w-11/12 mx-auto lg:grid-cols-4 sm:grid-cols-2 gap-6 py-8 justify-center items-center">
    {TeamMembers.map((Team) => {
        const {id, name, src, title} = Team;
       return(
        <div key={id}>
            <div className="p-4 flex flex-col justify-center items-center">
            <div className="flex justify-center">
                      <img src={src} alt="" className="w-[70%] sm:w-[60%] md:w-[80%]" />
                    </div>
                    <div className="">
                        <div className="">
                        <span className="font-bold text-lg">
                          <span className="ms-1">{name}</span>
                        </span>
                        </div>
                        <div>
                        <span className="text-lg">
                          <p className="ms-1">{title}</p>
                        </span>
                      </div>
                    </div>
            </div>
        </div>
       )
    })}
        </div>
    </div>
  );
};

export default Team;
