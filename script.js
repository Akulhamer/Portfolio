const spline = document.querySelector('spline-viewer');

window.addEventListener('mousemove', (event) => {
  
    if (event.composedPath().some(el => el.tagName === 'SPLINE-VIEWER' && event.isCustom)) return;

    if (spline && spline.shadowRoot) {
        const canvas = spline.shadowRoot.querySelector('canvas');
        if (canvas) {
            
            const moveEvent = new MouseEvent('mousemove', {
                clientX: event.clientX,
                clientY: event.clientY,
                screenX: event.screenX,
                screenY: event.screenY,
                bubbles: true,
                composed: true, 
                cancelable: true
            });

            
            moveEvent.isCustom = true;

            
            canvas.dispatchEvent(moveEvent);
        }
    }
});



document.addEventListener('DOMContentLoaded', function() {
    const checkbox = document.getElementById('policyCheckbox');
    const button = document.getElementById('submitBtn');

    if (checkbox && button) {
        checkbox.addEventListener('change', function() {
            button.disabled = !this.checked;
        });
    }
});