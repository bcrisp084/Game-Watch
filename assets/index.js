var key = '15c214371ccd435bb19af0fe3e07b094'
let currentIndex = 0
const pageName = document.querySelector('.page-name')
$(document).ready(function () {
    getTrending()
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
                // console.log('searchbar:', response)
                // console.log(results)
                for (let i = 0; i < results.length; i++) {
                    // console.log(results[i].slug)
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
                    $('.container').append(div)
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


    function getTrending() {
        const queryURL = `https://api.rawg.io/api/games/lists/main?key=` + key
        $.ajax({
            url: queryURL,
            method: 'GET',
        }).then(function (response) {
            clear()
            console.log('description', response)
            const data = response.results
            console.log(data)
            for (let i = 0; i < data.length; i++) {
                const divEl = $('<div>')
                divEl.attr('class', 'card')
                const h4El = $('<h4>').text(data[i].name)
                h4El.attr('class', 'card-title')
                const picEl = $('<img>').attr('src', data[i].background_image)
                picEl.attr('class', 'image-size')
                const h5El = $('<h5>').text(data[i].released)
                h5El.attr('class', 'release-year')
                divEl.append(h4El)
                divEl.append(picEl)
                divEl.append(h5El)
                $('.container').prepend(divEl)

            }
        })
    }
    pageName.addEventListener('click', getTrending)

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

        // function getGenres() {
    //     // console.log('inside Genre')
    //     const queryURL = `https://api.rawg.io/api/genres?key=` + key
    //     $.ajax({
    //         url: queryURL,
    //         method: 'GET',
    //     }).then(function (response) {
    //         console.log('genres', response)
    //         const genreResult = response.results
    //         // for (let i = 0; i < genreResult.length; i++) {
    //         //     console.log('here', genreResult[i].games)
    //         //     const liEl = $('<li><a>').text(genreResult[i].name)
    //         //     liEl.attr('class', 'dropdown-item')
    //         //     liEl.attr('data-name', genreResult[i].name)
    //         //     $('#genres').append(liEl)
    //         //     const element = genreResult[i].games
    //         //     console.log(element)
    //         //     for (let i = 0; i < element.length; i++) {
    //         //         const newElement = element[i];
    //         //         console.log(newElement)
    //         //         const divEl = $('<div>').text(newElement.name)
    //         //         divEl.attr('class', 'card')
    //         //         const picEl = $('<img>').attr('src', genreResult[i])
    //         //         $('.container').append(divEl)

    //         //     }

    //         // }
    //         $('.dropdown-item').on('click', function (event) {
    //             clear()

    //         })
    //     })
    // }
