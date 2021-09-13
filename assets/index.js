var key = '15c214371ccd435bb19af0fe3e07b094'
$(document).ready(function () {
    $('.vid').mouseover(function () {
        $(this).get(0).play();
    }).mouseout(function () {
        $(this).get(0).pause()
        $(this).get(0).currentTime = 0;
        $(this).get(0).load()
    })

    function getTrailer() {
        const queryURL = 'https://api.rawg.io/api/games/' + "grand-theft-auto-v" + '/movies?key=' + key;
        $.ajax({
            url: queryURL,
            method: "GET",
        }).then(function (response) {
            console.log('trailer', response)
            $('.card-title').text(response.results[0].name)

        });
    }

    function gameInfo() {
        const queryURL = 'https://api.rawg.io/api/games?key=' + key + '&search=grand-theft-auto-v&search_exact'
        $.ajax({
            url: queryURL,
            method: 'GET',
        }).then(function (data) {
            console.log('gameinfo', data)
            $('.card-subtitle').text('Rating ' + data.results[0].rating + " 🎯")
        })
    }

    function getDescription() {
        const queryURL = 'https://api.rawg.io/api/games/' + 3498 + '?key=' + key + '&search_exact'
        $.ajax({
            url: queryURL,
            method: 'GET',
        }).then(function (response) {
            console.log('description', response)
        })
    }
    getTrailer()
    gameInfo()
    getDescription()
})
