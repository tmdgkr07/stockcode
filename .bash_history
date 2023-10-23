ls
cd..
cd ..
ls
cd ..
ls
cd ..
c d..
cd ..
cd ~
ls
docker ps -a
user -i
sudo -i
sudo apt autoremove && sudo apt clean
sudo apt install update-manager-core
sudu vi /etc/update-manager/release-upgrades
sudo vi /etc/update-manager/release-upgrades
sudo do-release-upgrade
sudo do-release-upgrade -d
sudo update-alternatives --install /usr/bin/python3 python3 /usr/bin/python3.8 2
python -V
sudo update-alternatives --install /usr/bin/python3 python3 /usr/bin/python3.6 1
python -V
sudo update-alternatives --install /usr/bin/python3 python3 /usr/bin/python3.6 1
sudo update-alternatives --install /usr/bin/python3 python3 /usr/bin/python3.8 2
python -V
update-alternatives --install /usr/bin/python python /usr/b
sudo update-alternatives --config python3
sudo do-release-upgrade
sudo rm /usr/bin/python
sudo ln -s /usr/bin/python2.7 /usr/bin/python
ls /usr/lib | grep python
update-alternatives --display python3
sudo update-alternatives --remove-all python
sudo ln -sf /usr/bin/python2.7 /usr/bin/python
sudo do-release-upgrade
python3 -V
python -V
sudo ln -fs /usr/bin/python3.6 /usr/bin/python3
sudo do-release-upgrade
version
docker
apt install linux-modules-extra-`uname -r`
sudo -i
sudo apt install update-manager-core
sudo do-release-upgrade
sudo apt update && sudo apt upgrade
sudo apt dist-upgrade
sudo apt autoremove
sudo apt install update-manager-core
sudo reboot
sudo do-upgrade-release
sudo do-release-upgrade
docker
docker ps
sudo -i
admin -i
sudo -i
adb start-server
adb devices
ssh -CN -L5038:localhost:5037 -R27183:localhost:27183 106.250.24.83
adb connect 0.0.0.0:5555
adb devcies
adb devices
scrcpy -s 0.0.0.0:5555
adb connect 0.0.0.0:5555
scrcpy -s 0.0.0.0:5555
adb connect 0.0.0.0:5555
adb kill-server
adb connect 0.0.0.0:5555
scrcpy -s 0.0.0.0:5555
adb connect 0.0.0.0:5555
scrcpy -s 0.0.0.0:5555
scrcpy --record file.mp4
scrcpy --recordd 0.0.0.0:5555 file.mp4
scrcpy --record 0.0.0.0:5555 file.mp4
scrcpy -s 0.0.0.0:5555
adb connect localhost:5555
adb devices
scrcpy -s localhost:5555
docker restart redroid12
sudo docker restart redroid12
adb connect localhost:5555
adb devices
adb kill-server
adb connect localhost:5555
adb devices
scrcpy -s localhost:5555
adb connect localhost:5555
scrcpy -s localhost:5555
adb devices
scrcpy -s localhost:5555
sudo docker restart redroid11
adb devices
adb connect localhost:5555
adb devices
scrcpy -s localhost:5555
adb kill-server
adb connect localhost:5555
adb connect 0.0.0.0:5555
adb decies
adb devices
scrcpy -s emulator-5554
adb devices
scrcpy -s localhost:5555
adb devices
adb connect localhost:5555
adb devices
scrcpy -s localhost:5555
docker ps
sudo -i
export ADB_SERVER_SOCKET=tcp:106.250.24.83
scrcpy --tunnel-host=106.250.24.83
export ADB_SERVER_SOCKET=tcp:106.250.24.83:5037
scrcpy --tunnel-host=106.250.24.83
docker ps
sudo -i
docker ps
sudo docker ps
adb connect localhost:5555
adb root
adb shell
adb
adb shell
adb devices
docker stop redroid11
sudo docker stop redroid11
sudo docker run -itd --privileged --pull always -v ~/data15/data -p 5555:5555 --name="redroid11" tanpengsccd/redroid11-arm64-gapps redroid.gpu.mode=guest ro.product.model=SM-T820
v
docker ps
sudo docker ps
adb connect localhost:5555
sudo adb connect localhost:5555
sudo adb devices
sudo docker redroid11
sudo docker ps
sudo docker redroid11
sudo docker stop redroid11
sudo docker ps
sudo docker ps -a
docker start redroid11
sudo docker start redroid11
sudo iptables list
sudo iptables --list
sudo iptables -I INPUT 1 -p tcp --dport 5555 -j ACCEPT
sudo iptables --list
curl ifconfig.me
sudo iptables -t nat -A PREROUTING -p tcp --dport 5555 -j ACCEPT --to-port 5555
iptables -t nat -L --line-numbers
sudo iptables -t nat -L --line-numbers
iptables -t nat -A PREROUTING -p tcp --dport 5555 -j ACCEPT
IPTABLES -H
iptables -h
hostname -i
iptables -t nat -A PREROUTING -p tcp --dport 5555 -j REDIRECT --to-port 5555
sudo iptables -I INPUT 5 -i ens3 -p tcp --dport 5555 -m state --state NEW,ESTABLISHED -j ACCEPT
sudo iptables --list
sudo iptables -D INPUT -p tcp --dport 5555 -j ACCEPT
sudo iptables --list
sudo iptables -D INPUT -p tcp --dport 5555 -j state NEW,ESTABLISHED
sudo iptables -D INPUT -p tcp --dport 5555 --state NEW<ESTABLISHED -j ACCEPT
sudo iptables -D INPUT -p tcp --dport 5555 --state NEW,ESTABLISHED -j ACCEPT
sudo iptables -D INPUT -p tcp --dport 5555 -m state --state NEW,ESTABLISHED -j ACCEPT
sudo iptables --list
sudo iptables -D INPUT -p tcp --dport 5555 -m state --state NEW,ESTABLISHED -j ACCEPT
sudo iptables -D INPUT -p tcp --dport 5555 -m state -j ACCEPT
sudo iptables -D INPUT -p tcp --dport 5555 -j ACCEPT
sudo iptables -F
sudo iptables --list
netstat -ano
reboot
sudo reboot
adb devices
scrpcy -s localhost:5555
scrcpy -s localhost:5555
adb devices
adb connect localhost:5555
adb devices
scrcpy -s localhost:5555
adb devices
sudo docker -ps
sudo docker ps
sudo docker ps -a
netstate -abo
netstae -abo
netstate -abo
netstat -abo
netstat -ano
iptables --list
sudo iptables --list
iptables -t nat -L --line-numbers
sudo iptables -t nat -L --line-numbers
sudo iptables -I INPUT 1 -p tcp --dport 5555 -j ACCEPT
sudo iptables -t nat -L --line-numbers
sudo apt install firewalld
firewall-cmd --permanent --zone=public --add-port=5555/tcp
sudo firewall-cmd --permanent --zone=public --add-port=5555/tcp
firewall-cmd --reload
sudo firewall-cmd --reload
su
sudo -i
sudo docker ps -a
sudo docker start redroid12
dpkg -l | grep iptables-persistent
sudo apt install iptables-persistent netfilter-persistent
sudo iptables -I INPUT 1 -p tcp --dport 5555 -j ACCEPT
sudo netfilter-persistent save
sudo netfilter-persistent reload
sudo iptables -L
sudo docker ps -a
sudo docker start redroid12
sudo docker ps
sudo iptables -L
sudo iptables -D INPUT 1 -p tcp --dport 5555 -j ACCEPT
service iptabels stop
sudo service iptables stop
sudo -o
sudo -i
sudo -i
sudo -i
docker run -itd --privileged --pull always -v ~/datat/data -p 5554:5555 --memory-swappiness=0 --name="redroid13" redroid/redroid13.0.0_64only-latest redroid.gpu.mode=guest ro.produckt.model=SM-T820
docker ps
sudo docker run -itd --privileged --pull always -v ~/datat/data -p 5554:5555 --memory-swappiness=0 --name="redroid13" redroid/redroid13.0.0_64only-latest redroid.gpu.mode=guest ro.produckt.model=SM-T820
sudo docker ps
adb connect 0.0.0.0:5554
adb connect 0.0.0.0:5555
adb devices
adb connect localhost:5555
docker ps
sudo -i
sudo -o
sudo -i
ls
cd /var/lib/docker/containers/db
cd /var/lib/docker/containers/
cd /var
cd lib
cd docker
sudo -i
ls
cd remote
cd ~
cd remote
cd remote-kakao.zip
sudo -i
docker ps
sudo -i
node -v
cd remote
node remote
sudo node remote
sudo -i
ls
apt uninstall node
npm -v
node -v
npm install npm@9.6.3 -g
sudo npm install npm@9.6.3 -g
npm -v
node -v
npm install node@18.15.0 -g
sudo npm install node@18.15.0 -g
nvm list available
sudo curl -sL httpsL//deb.nodesource.com/setup_18.15.0 | sudo -E bash -
sudo apt install nodejs
node -v
sudo curl -sL https://deb.nodesource.com/setup_18.15.0 | sudo -E bash -
sudo curl -sL https://deb.nodesource.com/setup_18.15 | sudo -E bash -
node -v
npm -v
npm cache clean -f
sudo npm cache clean -f
sudo npm cache clean --force
n 18.15.0
sudo n 18.15.0
npm -v
npm install npm@9.3.6
sudo npm install npm@9.6.3
npm -v
sudo npm install npm@9.6.3
npm -v
node -v
ls
cd remote-kakao
node -v
npm -v
ls
node remote.js
npm install package-lock.json
node -v
node remote
tsc tsconfig.json
npm install tsc@5.0.4
sudo npm install tsc@5.0.4
npm install typescript
tsc -v
tsc --version
docker images
sudo docker images
docker stop redroid10
sudo docker stop redroid10
ls
cd remote-kakao
node remote
sudo node remote
locale
apt-get y install language-pack-ko
apt-get -y install language-pack-ko
sudo apt-get -y install language-pack-ko
locale-gen ko_KR.UTF-8
sudo locale-gen ko_KR.UTF-8
sudo dpkg-reconfigure locales
export LANGUAGE=ko_KR.UTF-8
export LANG=ko_KR.UTF-8
locale
sudo -i
sudo docker redroid13 restart
sudo docker restart redroid13
cd ubuntu
ls
cd test
ls
npm start
sudo npm start
ls
cd remote-kakao
node remote
cd ~
ls
cd remote
node remote
sudo node remote
screen -r remote
screen -ls
screen
screen -s remote
node remote
sudo node remote
screen ls
screen -ls
screen -version
screen -s remote
screen -ls
screen -r 13102
screen -ls
screen -r remote
screen -s remote
exit
sudo -i
sudo docer ps
sudo docker ps
sysctl -a |grep mem
sudo sysctl -a |grep mem
sudo sysctl net.core.remem_default
sudo sysctl net.core.rmem_default
tcpdump -n udp port 3000
sudo tcpdump -n udp port 3000
sudo tcpdump -n udp port 44877
screen ls
cd ..
screen -ls
screen -r 13102
cd remote
mv  chatgpt.js chatgpt2.js chatgpt3.js ~/remote/plugins
sudo mv chatgpt.js chatgpt2.js chatgpt3.js ~/remote/plugins
ls
cd plugins/
vi usd_fx.js
sudo vi usd_fx.js
ls
cd ..
sudo -i
screen -ls
screen -r 13102
ls
rm -r INFO
RM -R core
rm -r  core
ls
rm -r LOG
rm chatgpt.js chatgpt2.js chatgpt3.js package-lock.json package.json remote.js remote.ts test.js tsconfig.json
rm Phonesky.apk
ls
rm -r plugins node_modules core
ls
rm -r remote-kakao
rm remote-kakao.zip
ls
cd core
ls
cd ..
rm -r core
ls
cd ~
screen -ls
screen -r 13102
screen -ls
screen -r 13102
screen -ls
screen -r 13102
cd remote
vi remote.js
vi /etc/ssh/sshd_config
sudo vi /etc/ssh/sshd_config
systemctl restart sshd
systemctl status sshd.service
systemctl restart sshd
sudo -i
screen -ls
screen -r 13102
screen -ls
screen -r 13102
screen -ls
screen -r 13102
screen -x
screen -ls
screen -x
screen -s
screen -s remote
screen -r 19102
screen -ls
screen -r 13102
screen -ls
screen -r 13102
screen -ls
screen -r 13102
screen -ls
screen -r
screen -s
screen
sudo docker ps
sudo ducker ps -a
sudo docker ps -al
sudo docker redroid13
sudo docker restart redroid13
sudo docker ps -al
screen -ls
screen -r 2504
sudo docker ps
screen -ls
screen -r 2504
ㅣㄴ
ls
cd test
ls
cd info
cd INFO
ls
vim stock.json
ls
vim stock2.json
screen -ls
screen -r 2504
ls
cd /home/ubuntu
ls
cd test
ls
cd INFO
LS
ls
vim stock.json
cd..
cd ..
cd remote
la
ls
cd INFO
ls
vim stock.json
screen -ls
screen -r 2504
screen -ls
screen -r 2504
screen -ls
screen -r 2504
screen -ls
screen -r 2504
sudo su
