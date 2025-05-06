import { User } from "@/app/constants/constant";
import { string } from "prop-types";

async function sendPraise(userId: string, points: Number) {
    console.log("Sending praise to user:", userId, points);
    const res = await fetch(`http://localhost:8000/emp/praisepts?user_id=${userId}&points=${points}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .catch((error) => {
        console.error('Error:', error);
    }
    );
    return "success";
}

export async function getPraise(emp: User[], points: Number) {
    for (let i = 0; i < emp.length; i++) {
        const userId = emp[i].id;
        await sendPraise(userId, points);
    }
}