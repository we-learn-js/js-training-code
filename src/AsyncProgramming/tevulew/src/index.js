var getUsers = function(callback, limit) {
  $.get('//jsonplaceholder.typicode.com/users').done(function(response) {
    callback(response.slice(0, limit))
  })
}

var getUserAlbums = function(userId, callback, limit) {
  $.get('//jsonplaceholder.typicode.com/albums?userId=' + userId).done(function(
    response
  ) {
    callback(response.slice(0, limit))
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
  var result = []
  var albumsLeftToProcess = 0
  getUsers(function(users) {
    users.forEach(function(user) {
      getUserAlbums(
        user.id,
        function(albums) {
          albums.forEach(function(album) {
            albumsLeftToProcess++
            getAlbumPhotos(
              album.id,
              function(photos) {
                photos.forEach(function(photo) {
                  result.push(photo)
                })
                --albumsLeftToProcess || callback(result)
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
