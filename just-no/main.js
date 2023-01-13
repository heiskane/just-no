
function purge_elements_by_class(class_name) {
    let consent_banners = document.getElementsByClassName(class_name)

    for (let i = 0; i < consent_banners.length; i++) {
        consent_banners[i].parentNode.removeChild(consent_banners[i])
    }

}

function purge_elements_by_id(element_id) {
    let consent_box = document.getElementById(element_id)

    if (!consent_box) {
        return
    }

    consent_box.parentNode.removeChild(consent_box)
}

const BANNED_CLASSES = ["js-consent-banner", "consent-banner"]
const BANNED_IDS = ["CybotCookiebotDialog"]

window.addEventListener("load", () => {
    for (let i = 0; i < BANNED_CLASSES.length; i++) {
        purge_elements_by_class(BANNED_CLASSES[i])
    }

    for (let i = 0; i < BANNED_IDS.length; i++) {
        purge_elements_by_id(BANNED_IDS[i])
    }
});
