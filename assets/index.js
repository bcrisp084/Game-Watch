var key = '15c214371ccd435bb19af0fe3e07b094'
$(document).ready(function () {

    $('.search-bar').on('keydown', function (event) {
        let gameSearch = $('.search-bar').val().trim();
        // console.log('search', gameSearch)
        // console.log(event.key)
        const queryURL = 'https://api.rawg.io/api/games?key=' + key + '&search=' + gameSearch + '&page=1&page_size=80'
        $.ajax({
            url: queryURL,
            method: 'GET'
        }).then(function (response) {
            const results = response.results
            if (event.key === 'Enter') {
                clear()
                console.log('searchbar:', response)
                console.log(results)
                for (let i = 0; i < results.length; i++) {
                    console.log(results[i].slug)
                    const div = $('<div>')
                    div.attr('class', 'card')
                    const h5El = $('<h5>').text(results[i].name)
                    h5El.attr('class', 'card-title')
                    const imgEl = $('<img>')
                    imgEl.attr('src', results[i].background_image)
                    imgEl.attr('class', 'image-size')
                    const h6El = $('<h6>').text(`Release Date: ${results[i].released}`)
                    h6El.attr('class', 'release-year')
                    div.append(h5El)
                    div.append(imgEl)
                    div.append(h6El)
                    $('.container').prepend(div)
                    // getTrailer(results[i].slug)
                    // getDescription(results[i].slug)

                }
                $('.search-bar').val('')
            }

        })
    })

    function clear() {
        $('.container').empty()
    }

    function getGenres() {
        console.log('inside Genre')
        const queryURL = `https://api.rawg.io/api/genres?key=` + key
        $.ajax({
            url: queryURL,
            method: 'GET',
        }).then(function (response) {
            console.log('genres', response)
            const genreResult = response.results
            for (let i = 0; i < genreResult.length; i++) {
                const liEl = $('<li><a>').text(genreResult[i].name)
                liEl.attr('class', 'dropdown-item')
                $('#genres').append(liEl)
            }
            $('.dropdown-item').on('click', function (event) {
                console.log(event)

            })
        })
    }
    getGenres()

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

    // function getDescription(slug) {
    //     console.log('inside description', slug)
    //     const queryURL = `https://api.rawg.io/api/games/${slug}?key=` + key + `&search_exact`
    //     $.ajax({
    //         url: queryURL,
    //         method: 'GET',
    //     }).then(function (response) {
    //         console.log('description', response)
    //         // const h6El = $('<h6>').text(response.released)
    //         // $('.card').append(h6El)
    //     })
    // }


    // $('.vid').mouseover(function () {
    //     $(this).get(0).play();
    // }).mouseout(function () {
    //     $(this).get(0).pause()
    //     $(this).get(0).currentTime = 0;
    //     $(this).get(0).load()
    //     console.log($(this))
    // })


})

