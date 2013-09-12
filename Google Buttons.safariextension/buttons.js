/**
 * Google Buttons
 *
 * Small Safari extention which adds two buttons to your
 * toolbar, which open Gmail and Google Calendar.
 *
 * @copyright   Copyright (c) 2013 Tomas Vitek
 * @author      Tomas Vitek ~ http://tomasvitek.com
 * @link        http://github.com/tomikvitek/safari-google-buttons
 * @version     0.1
 * @licence     MIT
 */

(function () {
	'use strict';

	function openUrl(url) {
		var win = safari.application.activeBrowserWindow;
		var opened = false;

		var tabs = win.tabs;
        for (var i = 0; i < tabs.length; i++) {
			if (tabs[i].url) {
            	if (tabs[i].url.substring(0, url.length) === url) {
            		opened = true;
            		tabs[i].activate();
            		break;
            	}
        	}
        }

        if (!opened) {
			if (win.activeTab.url) {
				win.openTab().url = url;
			} else {
				win.activeTab.url = url;
			}
		}
	}

	safari.application.addEventListener('command', function (e) {
		if (e.command === 'open-gcal') {
			openUrl('https://www.google.com/calendar');
		}
		else if (e.command === 'open-gmail') {
			openUrl('https://mail.google.com');
		}
	});
})();
