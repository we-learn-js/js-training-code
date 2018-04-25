var getUsers = function(callback, limit) {
  $.get('//jsonplaceholder.typicode.com/users').done(function(response) {
    callback(response.slice(0, limit))
  })
}

var getUserAlbums = function(userId, callback, limit) {
  $.get('//jsonplaceholder.typicode.com/albums?userId=' + userId).done(function(
    response
  ) {
    //callback(response.slice(0, limit))
    setTimeout(function() {
      console.log('User Albums', userId)
      callback(response.slice(0, limit))
    }, userId * 1000)
  })
}

var getAlbumPhotos = function(albumId, callback, limit) {
  $.get('//jsonplaceholder.typicode.com/photos?albumId=' + albumId).done(
    function(response) {
      callback(response.slice(0, limit))
    }
  )
}

function getUsersPhotos(callback, limit) {
  let allPhotos = []
  let albumsLeft = 0
  let usersLeft = 0
  getUsers(function(users) {
    users.forEach(function({id}) {
      usersLeft++
      getUserAlbums(
        id,
        function(albums) {
          usersLeft--
          albums.forEach(function({id}) {
            albumsLeft++
            getAlbumPhotos(
              id,
              function(photos) {
                allPhotos.push(...photos)
                albumsLeft--
                if (!albumsLeft && !usersLeft) {
                  callback(allPhotos)
                }
              },
              limit
            )
          })
        },
        limit
      )
    })
  }, limit)
}

getUsersPhotos(function(photos) {
  console.log('Number of photos: ' + photos.length)
}, 6) // OUTPUT : "Number of photos: 216"
