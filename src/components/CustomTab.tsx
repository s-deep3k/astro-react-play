export const CustTab =()=>{
    return(
        <div className="bg-teal-100 flex justify-center items-center py-12">
            <div className="max-w-md flex flex-col gap-y-2 w-full">
                <div className="bg-teal-400 p-1 rounded-xl flex justify-between items-center gap-x-2 font-bold text-white">
                    <button className="outline-none w-full p-2 hover:bg-teal-300 rounded-xl text-center focus:bg-teal-700"> Products</button>
                    <button className="outline-none w-full p-2 hover:bg-teal-300 rounded-xl text-center focus:bg-teal-700"> Shots</button>
                </div>
                <div>Respective Content</div>
            </div>
        </div>
    )
}