/**
 * Adds screen reader accessibility to menus. Updates the aria attributes of the menu trigger button. Trigger button element must possess the following aria attributes; aria-expanded and aria-label.
 * @param {string} triggerId The id of the trigger button that toggles the menu.
 * @param {string} ariaLabel The aria-label to be updated.
 */
export function updateMenuTriggerAriaAttributes(triggerId, ariaLabel) {
    var triggerButton = document.querySelector("#".concat(triggerId));
    var currentAriaExpandedState = triggerButton.getAttribute('aria-expanded');
    function triggerOpen(ariaLabel) {
        triggerButton.setAttribute('aria-expanded', 'true');
        triggerButton.setAttribute('aria-label', ariaLabel);
    }
    function triggerClose(ariaLabel) {
        triggerButton.setAttribute('aria-expanded', 'false');
        triggerButton.setAttribute('aria-label', ariaLabel);
    }
    (currentAriaExpandedState === 'false') ?
        triggerOpen(ariaLabel) :
        triggerClose(ariaLabel);
}
