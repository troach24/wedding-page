const BASE_URL = "https://alex-y-travis-testing.poweredbyjourney.com";

async function get() {
    let signupRequest = await fetch(`${BASE_URL}/subscribe`, {
        headers: {
            "Authorization": process.env.TOKEN,
            "Content-Type": "Application/json",
            "Access-Control-Allow-Origin": "*"
        }
    })

    await signupRequest.json();
    console.log(signupRequest);
}

module.exports = {
    get: get
}
