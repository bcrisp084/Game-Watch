
var key = '15c214371ccd435bb19af0fe3e07b094'
$(document).ready(function () {


    $('.search-bar').on('keydown', function (event) {
        let gameSearch = $('.search-bar').val();
        console.log('search', gameSearch)
        console.log(event.key)
        const queryURL = 'https://api.rawg.io/api/games?key=' + key + '&search=' + gameSearch + '&page=1'
        $.ajax({
            url: queryURL,
            method: 'GET'
        }).then(function (response) {
            const results = response.results
            if (event.key === 'Enter') {
                console.log('searchbar:', response)
                console.log(results)
                for (let i = 0; i < results.length; i++) {
                    const div = $('<div>')
                    div.attr('class', 'card')
                    const h5El = $('<h5>').text(results[i].name)
                    h5El.attr('class', 'card-title')
                    const imgEl = $('<img>')
                    imgEl.attr('src', results[i].background_image)
                    imgEl.attr('class', 'image-size')
                    const platforms = results[i].parent_platforms
                    console.log('platforms', platforms)
                    for (let i = 0; i < platforms.length; i++) {
                        const platFormsArray = platforms[i]
                        const platformDiv = $('<h6>').text(results[i], platFormsArray[i])
                        div.append(h5El)
                        div.append(imgEl)
                        imgEl.append(platformDiv)
                        $('.container').prepend(div)
                    }

                }
            }

        })

    })






    // $('.vid').mouseover(function () {
    //     $(this).get(0).play();
    // }).mouseout(function () {
    //     $(this).get(0).pause()
    //     $(this).get(0).currentTime = 0;
    //     $(this).get(0).load()
    //     console.log($(this))
    // })


    // function getTrailer() {
    //     const queryURL = 'https://api.rawg.io/api/games/' + "grand-theft-auto-v" + '/movies?key=' + key;
    //     $.ajax({
    //         url: queryURL,
    //         method: "GET",
    //     }).then(function (response) {
    //         console.log('trailer', response)
    //         $('.card-title').text(response.results[0].name)

    //     });
    // }

    // function gameInfo() {
    //     const queryURL = 'https://api.rawg.io/api/games?key=' + key + '&search=grand-theft-auto-v&search_exact'
    //     $.ajax({
    //         url: queryURL,
    //         method: 'GET',
    //     }).then(function (data) {
    //         console.log('gameinfo', data)
    //         $('.card-subtitle').text('Rating ' + data.results[0].rating + " 🎯")
    //     })
    // }

    // function getDescription() {
    //     const queryURL = 'https://api.rawg.io/api/games/' + 3498 + '?key=' + key + '&search_exact'
    //     $.ajax({
    //         url: queryURL,
    //         method: 'GET',
    //     }).then(function (response) {
    //         console.log('description', response)
    //     })
    // }
    // getTrailer()
    // gameInfo()
    // getDescription()
})

