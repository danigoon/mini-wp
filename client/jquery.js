
function changeDisplay(change, elements) {
    if (Array.isArray(elements)) {
        elements.forEach(el => {
            if (change) {
                $(el).show()
            }else {
                $(el).hide()
            }
        })
    }else {
        if (change) {
            $(elements).show()
        }else {
            $(elements).hide()
        }
    }
}



$(document).ready(function() {
    changeDisplay(true, '#card-list-articles')
    changeDisplay(false, '#form-article')
    $('#btn-create-article').click(function(e){
        e.preventDefault()
        changeDisplay(true, '#form-article')
        changeDisplay(false, '#card-list-articles')
    })

    $('#btn-show-articles').click(function(e) {
        e.preventDefault()
        changeDisplay(true, '#card-list-articles')
        changeDisplay(false, '#form-article')
    })
})