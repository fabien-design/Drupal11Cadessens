up: 
	cd web && php -S 127.0.0.1:8080 .ht.router.php

cr:
	php ./vendor/bin/drush cr

watch: 
	sass --watch web/themes/custom/cthulhu/sass