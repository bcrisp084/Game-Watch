var key = '15c214371ccd435bb19af0fe3e07b094'
let currentIndex = 0
const pageName = document.querySelector('.page-name')
const topRatedEl = document.querySelector('#topRated')
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
                displayCard(data)
                $('.search-bar').val('')
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
            const divEl = $('<div>')
            divEl.attr('class', 'card')
            const h4El = $('<h4>').text(info[i].name)
            h4El.attr('class', 'card-title')
            const picEl = $('<img>').attr('src', info[i].background_image)
            picEl.attr('class', 'image-size')
            const h5El = $('<h5>').text(info[i].released)
            h5El.attr('class', 'release-year')
            divEl.append(h4El)
            divEl.append(picEl)
            divEl.append(h5El)
            $('.container').append(divEl)
        }
    }

    function clear() {
        $('.container').empty()
    }


    pageName.addEventListener('click', getTrending)
    topRatedEl.addEventListener('click', topRated)

})

  // function getTrailer(slug) {
    //     console.log('inside trailer', slug)
    //     const queryURL = `https://api.rawg.io/api/games/${slug}/movies?key=` + key;
    //     $.ajax({
    //         url: queryURL,
    //         method: "GET",
    //     }).then(function (response) {
    //         console.log('trailer', response)
    //     });
    // }

        // $('.vid').mouseover(function () {
    //     $(this).get(0).play();
    // }).mouseout(function () {
    //     $(this).get(0).pause()
    //     $(this).get(0).currentTime = 0;
    //     $(this).get(0).load()
    //     console.log($(this))
    // })
