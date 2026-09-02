document.addEventListener('DOMContentLoaded', () => {
  const dlg = document.getElementById('alertDialog');
  const ok = document.getElementById('okBtn');
  const cancel = document.getElementById('cancelBtn');

  // Open as modal
  if (dlg && typeof dlg.showModal === 'function') {
    // small delay to simulate page load
    setTimeout(() => dlg.showModal(), 300);
  } else if (dlg) {
    // Fallback: show non-modal if <dialog> not fully supported
    dlg.setAttribute('open', '');
  }

  const closeIt = () => dlg.close();

  ok.addEventListener('click', closeIt);
  cancel.addEventListener('click', closeIt);

  // Close on ESC as well (handled by browser for modal dialogs, but keep fallback)
  dlg.addEventListener('cancel', (e) => {
    e.preventDefault(); // keep consistent close behavior
    dlg.close();
  });
});