let BASE_URL = "https://alex-y-travis.poweredbyjourney.com";

if (window.location.hostname === 'localhost') {
    BASE_URL = "https://alex-y-travis-testing.poweredbyjourney.com";
}

export async function sendSubscriptionRequest(body) {
    console.log('host name:', window.location.hostname);
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

export async function updateAnalytics(body) {
    console.log('host name:', window.location.hostname);
    let analyticsRequest = await fetch(`${BASE_URL}/analytics`, {
        method: 'POST',
        headers: {
            "Authorization": process.env.TOKEN,
            "Content-Type": "Application/json",
            "Access-Control-Allow-Origin": "*"
        },
        body: JSON.stringify(body)
    })

    await analyticsRequest.json();
    return analyticsRequest;
}
