var getOneUser = function() {
  return new Promise(function(resolve) {
    $.get('//jsonplaceholder.typicode.com/users/').done(users =>
      resolve(users[0])
    )
  })
}

var getUserAlbum = function(userId) {
  return new Promise(function(resolve) {
    $.get('//jsonplaceholder.typicode.com/albums?userId' + userId).done(
      albums => resolve(albums[0])
    )
  })
}

var getAlbumPhotos = function(albumId) {
  return new Promise(function(resolve) {
    $.get('//jsonplaceholder.typicode.com/photos?albumId=' + albumId).done(
      resolve
    )
  })
}

var printUserFirstPhotos = function() {
  // YOUR CODE GOES HERE
}

printUserFirstPhotos() // 50
