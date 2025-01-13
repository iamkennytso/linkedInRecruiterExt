window.onload = function() {
  document.addEventListener('keyup', (e) => {
    const { ctrlKey, shiftKey, key } = e
    if (ctrlKey && shiftKey && key === 'C') {
      window.scrollTo(0, document.body.scrollHeight);
      const list = document.querySelector('ul[role="list"]')
      const children = list.children
      for (const child of children) {
        const a = child.querySelector('a')
        const [url] = a.getAttribute('href').split('?')
        window.open(url, '_blank')
      }
    }
  });
}
