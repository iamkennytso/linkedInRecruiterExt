window.onload = function(){
  const hideIds = ['highlights', 'featured', 'content_collections']
  hideIds.forEach(id => {
    const hideElement = setInterval(function() {
      const idDiv = document.querySelector(`#${id}`)
      if (idDiv) {
        const idContainer = idDiv.parentElement
        if (idContainer) {
          idContainer.style.display = 'none'
        }
        clearInterval(hideElement);
      }
    }, 500)
  })
}