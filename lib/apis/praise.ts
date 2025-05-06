import { User } from "@/app/constants/constant";

async function sendPraise(userId: string, points: number) {
    console.log("Sending praise to user:", userId, points);
    await fetch(`http://localhost:8000/emp/praisepts?user_id=${userId}&points=${points}`, {
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

export async function getPraise(emp: User[], points: number) {
    for (let i = 0; i < emp.length; i++) {
        const userId = emp[i].id;
        await sendPraise(userId, points);
    }
}