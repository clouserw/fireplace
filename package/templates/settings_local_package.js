define('settings_local', [], function() {
    return {
        api_url: '{domain}',
        body_classes: 'package',
        iframe_installer_src: '{domain}/iframe-install.html',
        iframe_potatolytics_src: '{domain}/potatolytics.html',
        media_url: '{media_url}',
        tracking_enabled: true,
        potatolytics_enabled: true,
        package_version: '{version}'
    };
});
