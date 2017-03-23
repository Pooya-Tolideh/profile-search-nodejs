function extractInfo(profile) {
    return {
            avatarUrl : profile.gravatar_url,
            username : profile.profile_name,
            badges : profile.badges.length,
            javascriptPoints : profile.points.Java
        }
}

module.exports = extractInfo;