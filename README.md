# photostructure-hide-menu-buttons

Script injection to hide Photostructure buttons for "Pause sync" "Resume sync" "Restart sync" "Rebuild (slow)" "Shut down". This is to avoid public become your gallery's admin.

The script is injected using reverse proxy (NGINX) to hide UI only. NGINX should block path /api/system for POST method to avoid backend usage. 

This tested in NGINX with Photostucture for Servers v1.10 (stable). No modification to Photostructure source code. No downtime.

This is just an alternative how to hide menu as current version stable version. The next update should have this feature to hide these menu buttons.
