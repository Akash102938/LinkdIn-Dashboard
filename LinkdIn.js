
  // Minimal JS for small interactions in prototype
  document.querySelectorAll('.icon-btn').forEach(btn=>{
    btn.addEventListener('click',()=>{
      alert('Prototype: ' + btn.getAttribute('aria-label'))
    })
  })

  // Keyboard accessibility: Enter on create-post input opens a fake modal (alert)
  document.querySelector('.create-post .input').addEventListener('keydown', e=>{
    if(e.key === 'Enter'){
      e.preventDefault();
      alert('Create post — prototype action')
    }
  })