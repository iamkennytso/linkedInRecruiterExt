window.onload = function() {
  const heroBanner = document.querySelector('.profile-background-image')
  if (heroBanner) {
    heroBanner.style.display = 'none';
  }

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

  document.addEventListener('keyup', (e) => {
    const { ctrlKey, shiftKey, key } = e
    if (ctrlKey && shiftKey && key === 'C') {
      const connectButton = document.querySelector('[aria-label^="Invite"]')
      const aria = connectButton.getAttribute('aria-label')
      const [_, firstName] = aria.split(' ')
      connectButton.click()
      const randTime = Math.random() * (500 - 200) + 200
      setTimeout(() => {
        const addANoteButton = document.querySelector('[aria-label="Add a note"]')
        if (addANoteButton) {
          addANoteButton.click()
        }

        setTimeout(() => {
          (async () => {
            clipboardData = await navigator.clipboard.readText()
            const textArea = document.querySelector('#custom-message')
            textArea.value = 'Hi ' + firstName + ',\n\n' + clipboardData
          })()
        }, 500)
      }, randTime)
    }
  });
}
