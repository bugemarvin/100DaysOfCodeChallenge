const panelSelector = document.querySelectorAll('.panel');

panelSelector.forEach((panel) =>{
    panel.addEventListener('click', () =>{
        removeActivePanelClass();
        panel.classList.add('active');
    });
});

function removeActivePanelClass() {
    panelSelector.forEach(panel => {
        panel.classList.remove('active');
    });
}