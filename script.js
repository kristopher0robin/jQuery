main()

function main() {
    const collection = $('.class1')

    collection.on('click', function () {
        console.log('Hello world!')
        collection.html('<strong>)))</strong>')
        collection.off('click', arguments.callee)
    })
    //collection.off('click', clickHandler)
}

function clickHandler () {
        console.log('click by me')
}