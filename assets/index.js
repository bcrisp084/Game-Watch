var key = '15c214371ccd435bb19af0fe3e07b094'

$(document).ready(function () {
    getTrending()
    $('.search-bar').on('keydown', function (event) {
        let gameSearch = $('.search-bar').val().trim();
        const queryURL = 'https://api.rawg.io/api/games?key=' + key + '&search=' + gameSearch + '&page=1&page_size=80'
        $.ajax({
            url: queryURL,
            method: 'GET'
        }).then(function (response) {
            if (event.key === 'Enter') {
                clear()
                const data = response.results
                console.log('data', data)
                displayCard(data)
                $('.search-bar').val('')
                for (let i = 0; i < data.length; i++) {
                    const element = data[i].id;
                    console.log('element', element)
                    getTrailer(element)
                }


            }
        })
    })

    function getTrending() {
        const queryURL = `https://api.rawg.io/api/games/lists/main?key=` + key + `&ordering=relevance&discover=true&page_size=40`
        $.ajax({
            url: queryURL,
            method: 'GET',
        }).then(function (response) {
            clear()
            const data = response.results
            displayCard(data)


        })
    }

    function topRated() {
        const queryURL = `https://api.rawg.io/api/games?key=` + key + `&ordering=added&page_size=40`
        $.ajax({
            url: queryURL,
            method: 'GET',
        }).then(function (response) {
            clear()
            const data = response.results
            displayCard(data)
        })
    }

    function displayCard(info) {
        for (let i = 0; i < info.length; i++) {
            const divEl = $('<div>').addClass('card')
            const h4El = $('<h4>').text(info[i].name).addClass('card-title')
            const picEl = $('<img>').attr('src', info[i].background_image).addClass('image-size')
            const h5El = $('<h5>').text(`Release Date: ${info[i].released}`).addClass('release-year')
            divEl.append(h4El, picEl, h5El)
            $('.container').append(divEl)
        }
    }

    function clear() {
        $('.container').empty()
    }


    $('.page-name').on('click', getTrending)
    $('#topRated').on('click', topRated)

})

function getTrailer(id) {
    console.log('inside trailer', id)
    const queryURL = `https://api.rawg.io/api/games/${id}/movies?key=` + key;
    $.ajax({
        url: queryURL,
        method: "GET",
    }).then(function (response) {
        console.log('trailer', response)
    });
}

        // $('.vid').mouseover(function () {
    //     $(this).get(0).play();
    // }).mouseout(function () {
    //     $(this).get(0).pause()
    //     $(this).get(0).currentTime = 0;
    //     $(this).get(0).load()
    //     console.log($(this))
    // })
