const BASE_URL = "https://alex-y-travis-testing.poweredbyjourney.com";

export async function sendSubscriptionRequest(body) {
    let signupRequest = await fetch(`${BASE_URL}/subscribe`, {
        method: 'POST',
        headers: {
            "Authorization": process.env.TOKEN,
            "Content-Type": "Application/json",
            "Access-Control-Allow-Origin": "*"
        },
        body: JSON.stringify(body)
    })

    await signupRequest.json();
    console.log(signupRequest);
}
