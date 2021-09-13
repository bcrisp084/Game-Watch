function getRequest() {
    var queryURL = 'https://api.rawg.io/api/games/' + "grand-theft-auto-v" + '/movies?';
    $.ajax({
        url: queryURL,
        method: "GET",
    }).then(function (response) {
        console.log(response)
        // var videoEl = $('<video>')
        // var responseVid = response.results[1].data[480]
        // videoEl.attr('src', responseVid)
        // videoEl.attr('type', 'video/mp4')
        // videoEl.attr('autoplay')
        // $('.video-div').append(videoEl)
        // console.log('response', response.count);
        // console.log(response.results[0].name)
        // $(".main-card").text(response.results[0].name);
        // var source = response.results[0].background_image
        // var imageEl = $('<img>')
        // imageEl.attr('class', 'game-image')
        // imageEl.attr('src', source)
        // $('.main-card').append(imageEl)
    });
}
$('.vid').mouseover(function () {
    $(this).get(0).play();
}).mouseout(function () {
    $(this).get(0).pause()
    $(this).get(0).currentTime = 0;
})
getRequest()
