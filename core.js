(() => {
    const $ = function $ (selector) {
        const elements = document.querySelectorAll(selector)

        const obj = {}

        obj.hidden = () => {
            for (const element of elements) {
                element.style.display = 'none'
            }

            return obj
        }

        obj.show = () => {
            for (const element of elements) {
                element.style.display = ''
            }

            return obj
        }

        obj.toggle = () => {
            for (const element of elements) {
                if (element.style.display === 'none') {
                    element.style.display = ''
                } else {
                    element.style.display = 'none'
                }
            }

            return obj
        }

        obj.addClass = className => {
            for (const element of elements) {
                element.classList.add(className)
            }

            return obj
        }

        obj.removeClass = className => {
            for (const element of elements) {
                element.classList.remove(className)
            }

            return obj
        }

        obj.toggleClass = className => {
            for (const element of elements) {
            const classes = Array.from(element.classList)
                
                if (classes.includes(className)) {
                    element.classList.remove(className)
                } else {
                    element.classList.add(className)
                }
            }

            return obj
        }

        obj.on = (eventName, handler) => {
            for (const element of elements) {
                element.addEventListener(eventName, handler)
            }

            return obj
        }

        obj.off = (eventName, handler) => {
            for(const element of elements) {
                element.removeEventListener(eventName, handler)
            }

            return obj
        }

        obj.html = content => {
            for (const element of elements) {
                element.innerHTML = content
            }

            return obj
        }

        return obj
    }

    window.$ = $
})()