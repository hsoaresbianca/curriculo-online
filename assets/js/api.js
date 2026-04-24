
async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/hsoaresbianca/curriculo-online/main/data/profile.json';
    const response = await fetch(url)
    const profileData = await response.json()
    return profileData
}