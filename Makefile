#Variables de entorno SEGURAS
-include .env
export

dependency d:
	sudo apt update -y
	sudo apt upgrade -y
	sudo apt install nodejs npm -y
	sudo npm install -g n
	sudo n 16.14.2
	sudo npm install -g @angular/cli@15.2.0

# Listado de comandos RUN disponibles:
run r rf:
	ng serve --host 0.0.0.0 --disable-host-check --poll 1 --open --port 4300
