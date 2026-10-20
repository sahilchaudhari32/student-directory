

import studentData from "../data/studentData";
import Link from "next/link";


function Student() {
    const arr = studentData ; 

    return (
        <>
            <div className="w-[100vw] h-[15vw] ">
                <div className="w-[100%] text-[2vw] pl-[10vw] mt-[2vw] flex items-center font-bold h-[25%] ">
                    Students
                </div>
                <div className="w-[100%] text-[1vw] pl-[10vw] flex items-center text-gray-700 h-[20%] ">
                    Lorem ipsum dolor sit amet.
                </div>

                <div className="w-[100%] flex justify-center h-[30%] ">
                    <div className="w-[80%] justify-center items-center flex h-[100%]">
                        <p className="text-gray-700 font-bold">
                            Search:
                        </p>
                        <input type="text" placeholder="Search Any thing..." className="w-[50%] ml-[1vw] h-[70%] border p-[1vw] text-[1vw] font-bold" />
                        <div className="w-[40%] flex justify-center items-center h-[70%] ml-[5vw] ">
                            <p className="text-gray-700 font-bold">

                                Department:
                            </p>
                            <select name="" className="ml-[1vw] w-[50%] p-[0.5vw] rounded-[1vw] h-[90%] border" id="">
                                <option value="">All department</option>
                                <option value="">cse</option>
                                <option value="">be</option>
                                <option value="">qwer</option>
                                <option value="">asdf</option>
                                <option value="">zxcv</option>
                            </select>
                        </div>
                    </div>
                </div>








            </div>
            <div className="w-[100vw] pl-[4vw] flex gap-[2vw] p-[1vw] flex-wrap">
                {
                    arr.map((e) => {
                        return (
                            <div key={e.id} className="w-[30%] p-[0.5vw] h-[17vw] rounded-[1vw] border shadow-xs">
                                <div className="w-[100%] flex items-center justify-between px-[1.5vw] h-[30%]">
                                    <div className={`w-[2.8vw] h-[2.8vw] ${e.bgColor || "bg-blue-100"} ${e.textColor || "text-blue-700"} flex justify-center items-center font-bold text-[1.1vw] rounded-[0.5vw]`}>
                                        {e.initials}
                                    </div>
                                    <div className="px-[0.8vw] py-[0.2vw] text-[0.85vw] text-gray-500 rounded flex items-center justify-center border border-gray-200">
                                        {e.studentId}
                                    </div>
                                </div>
                                <div className="w-[100%] font-bold text-[1.2vw] flex pl-[1.5vw] items-center h-[20%]">
                                    {e.name}
                                </div>
                                <div className="w-[100%] gap-[1vw] flex pl-[1.5vw] items-center h-[20%]">
                                    <div className={`px-[0.8vw] py-[0.3vw] rounded border ${e.deptBorder || "border-blue-200"} ${e.deptBg || "bg-blue-50"} ${e.deptText || "text-blue-700"} text-[0.9vw] font-medium flex items-center justify-center`}>
                                        {e.department}
                                    </div>
                                    <div className="text-[0.9vw] text-gray-500 flex items-center font-medium">
                                        {e.studyYear}
                                    </div>
                                </div>
                                <Link className="w-[100%] flex items-center pl-[1.5vw] border-t font-semibold text-blue-600 hover:text-blue-700 mt-[1vw] h-[20%] text-[1vw]" href={`/studentData/${e.id}`}>
                                    {"View profile →"}
                                </Link>
                            </div>
                        )
                    })
                }
            </div>






        </>
    )
}


export default Student; 