let BASE_URL = "https://alex-y-travis.poweredbyjourney.com";

export async function sendSubscriptionRequest(body) {
    console.log('host name:', window.location.hostname);
    if (window.location.hostname === 'localhost') {
        BASE_URL = "https://alex-y-travis-testing.poweredbyjourney.com";
    }
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
    return signupRequest;
}
