import { Button } from "@/components/ui/button";
import ProfileCard from "@/app/components/profilecard";
import { employees } from "@/app/constants/constant";
export default function Praise(){
    return (
        <div className="w-full p-10">
            <form action="">
                <Button> <span className="text-xl">+</span>Add Employee</Button>
                <div className="flex p-4 gap-4 flex-wrap h-64 overflow-y-auto">
                    {
                        employees.map((employee, index) => (
                            <ProfileCard
                                key={index}
                                name={employee.name}
                                title={employee.title}
                                level={employee.level}
                                imageUrl={employee.imageUrl}
                            />
                        ))
                    }
                </div>
            </form>
        </div>
    );
}