export function History (){
    const paraData = [ "+50 pts credited, praise by Abhay Mathur", "+70 pts credited, praise by Ayush Shinghi", "Hero bandage awarded by Laxmi N.", "TeamPlayer bandage awarded by Laxmi N.", "TeamPlayer bandage awarded by Laxmi N.", "+50 pts credited, praise by Abhay Mathur", "+70 pts credited, praise by Ayush Shinghi", "Hero bandage awarded by Laxmi N.", "TeamPlayer bandage awarded by Laxmi N.", "TeamPlayer bandage awarded by Laxmi N."]
    const dateData =  ["6 days ago", "20 days ago", "a month ago", "2 month ago", "3 month ago", "4 month ago", "5 month ago", "6 month ago", "7 month ago", "8 month ago"]
    return(
        <div className="h-[54dvh] border rounded-lg shadow-md">
            <div className="flex justify-between items-center border-b">
                <h1 className="font-semibold pl-4 p-2">History :</h1>
                <p className="text-center text-sm text-gray-600 p-2">
                    <a href="#" className="text-blue-500 hover:underline">View All {'>'}</a>
                </p>
            </div>
            <div className="overflow-y-auto border w-full h-[46dvh]">
                {
                    paraData.map((para, index) => (
                        <div key={index} className="flex justify-between p-4 border-b">
                            <p className="text-sm">{para}</p>
                            <p className="text-xs text-slate-600">{dateData[index]}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}