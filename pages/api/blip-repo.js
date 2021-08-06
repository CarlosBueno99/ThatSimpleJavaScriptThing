function blipRepo(request,response){
    const apiSecret = process.env.GIT_API_SECRET;


    const takeGitResponse = awai("url do bagulho");
    const apiResponseJson = await takeGitResponse.json();
    const takeAvatar = apiResponseJson.parametro1
    const repoName = apiResponseJson.parametro2
    const repoDescription = apiResponseJson.parametro3

    response.json({
        cardImage: takeAvatar,
        carTitle: repoName,
        cardSubTitle: repoDescription
    })
}

export default blipRepo