/* 

    /register -> POST -> username, password, profileImage
    /login -> POST -> username, password
    /users -> GET -> all users list
    

    /video -> POST -> caption, video
    /video -> GET  -> all vides
    /video -> PUT  -> videoId, caption
    /video -> DELETE -> videoId


    /register POST
    {
        "username": "admin",
        "password": "admin",
        "profileImage": file,
    }

    /login POST
    {
        "username": "admin",
        "password": "admin"
    }


    /video POST
    {
        "video": file (mp4!),
        "caption": "birinchi dars"
    }

    /video PUT
    {
        "videoId": 1,
        "caption": 'hhkhjhlkj',
    }

     /video DELETE //Also delete video required userId with Creating!
    {
        "videoId": 1,
    }
*/