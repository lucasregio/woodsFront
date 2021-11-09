
import perfil from "../../resources/images/perfil.png";
export default function Perfil() {
    return(
        <div className='bg-gradient-to-b from-yellow-500 flex p-4 mt-4 ml-4 mr-4 mb-4 overflow-hidden rounded-2xl h-full'>
            <div>
                <img className='rounded-full mt-4 ml-4' src={perfil} alt="Perfil" />
            </div>
            <div className="lg:flex ml-20 flex flex-col ">    
                
                <label className='font-medium' >Name</label>
                <input type="text" className="p-2 my-2 w-80 rounded-2xl"/>

                <label className='font-medium'>E-mail</label>
                <input type="text" className="p-2 my-2 w-80 rounded-2xl"/>

                <label className='font-medium'>CPF/CNPJ</label>
                <input type="text" className='p-2 my-2 w-80 rounded-2xl'/>

                <label className='font-medium'>Phone</label>
                <input type="text"className='p-2 my-2 w-80 rounded-2xl'/>
                <div className=" lg:items-center ml-5 flex flex-col ">
                    <button 
                        className=' bg-green-500 p-2 my-2 w-40 active:bg-gray-500 rounded-2xl'
                    >Save</button>
                </div>
                
            </div>
        </div>
    );
}