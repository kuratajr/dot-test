/*jslint browser: true, unused: false */

/**
 * Assigns an event handler that is only executed once, then removed.
 * @param {Object}   subject      Observable subject.
 * @param {String}   eventName    Event name.
 * @param {Function} eventHandler Event handler.
 */
function addEventHandlerCalledOnce(subject, eventName, eventHandler) {
    'use strict';

    function eventHandlerCalledOnce() {
        // Unsubscribe self:
        subject.removeEventListener(eventName, eventHandlerCalledOnce);
        // This is going to happen only once:
        eventHandler();
    }

    // Validate subject for correctness to avoid cryptic error later:
    if (!subject || typeof subject !== 'object' ||
        typeof subject.addEventListener !== 'function') {
        throw new TypeError('Unable to assign a eventHandler called once.' +
            ' Invalid subject object.');
    }
    // Event handler must be a function:
    if (typeof eventHandler !== 'function') {
        throw new TypeError('Unable to assign a eventHandler called once.' +
            ' Callback must be a function.');
    }

    // It is now safe to add event eventHandler to the subject object:
    subject.addEventListener(eventName, eventHandlerCalledOnce);
}

(function (document, runtime, tabs) {

    let domain;

    tabs.getCurrent().then(ownTab => {
        domain = new URL(ownTab.url).hostname;

        document.getElementById('domain1').innerHTML = domain;
        document.getElementById('domain2').innerHTML = domain;
    });


    function report() {
        tabs.getCurrent().then(ownTab => {
            tabs.sendMessage(ownTab.id, { proceedToPage: true, openReport: true });
            console.log("ASdas", ownTab)
            let extensionBaseURL = 'chrome-extension://' + runtime.id;

            tabs.create({ url: extensionBaseURL + "/index.html#options/report?url=" + ownTab.url, active: true });

        });
    }
    function close() {
        tabs.getCurrent().then(ownTab => {
            tabs.sendMessage(ownTab.id, { proceedToPage: true });
        });
    }
    function back() {
        window.history.back();
    }

    document.getElementById("close").addEventListener("click", close);
    document.getElementById("report").addEventListener("click", report);
    document.getElementById("back").addEventListener("click", back);

}(document, browser.runtime, browser.tabs));
