window.onload = function() {
  const heroBanner = document.querySelector('.profile-background-image')
  heroBanner.style.display = 'none';

  setTimeout(() => {
    const premiumAd = document.querySelector('.pv-top-card__premium-feature-banner');
    if (premiumAd) {
      premiumAd.style.display = 'none';
    }
  }, 1500)

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

  const expandList = ['experience', 'about']
  expandList.forEach(id => {
    setInterval(function() {
      const idDiv = document.querySelector(`#${id}`)
      if (idDiv) {
        setTimeout(() => {
          const idContainer = idDiv.parentElement
          const buttons = idContainer.querySelectorAll('button')
          buttons.forEach(button => button.click())
        }, 500)
      }
    })
  })

}
