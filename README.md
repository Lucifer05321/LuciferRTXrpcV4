🚀 Lucifer RPC Engine v4.1

<div align="center">
    
<img src="https://raw.githubusercontent.com/Lucifer05321/Media_host_6xml/57e0176e37d08a25575b181db14f4c37200005a1/Cloud/RPC/LuciferRTXRPCv4bg.gif" height="1000" />

<br>

<div align="center">
<img src="https://readme-typing-svg.demolab.com?font=Inconsolata&weight=500&size=50&duration=4000&pause=300&color=F7F7F7&center=true&vCenter=true&multiline=true&repeat=false&random=false&width=1300&height=140&lines=Welcome+to+Lucifer+Domains;Professional+Discord+RPC+Engine+%F0%9F%9A%80" width="90%" />
</div>

<br>

<div align="center">
<img src="https://img.shields.io/badge/Version-4.1_Professional-purple?style=for-the-badge&logo=azurepipelines" />
<img src="https://img.shields.io/badge/Node.js->=18.0-green?style=for-the-badge&logo=nodedotjs" />
<img src="https://img.shields.io/badge/Status-ACTIVE-brightgreen?style=for-the-badge&logo=rocket" />
<img src="https://img.shields.io/badge/Platform-Windows|Mac|Linux|Termux-orange?style=for-the-badge&logo=windows" />
</div>

<br>

<div align="center">
<img src="https://img.shields.io/github/stars/Lucifer05321/LuciferRTXrpcV4?style=for-the-badge&logo=github" />
<img src="https://img.shields.io/github/forks/Lucifer05321/LuciferRTXrpcV4?style=for-the-badge&logo=github" />
<img src="https://img.shields.io/github/issues/Lucifer05321/LuciferRTXrpcV4?style=for-the-badge&logo=github" />
</div>

<br>

<pre>
    💼 Professional Discord Rich Presence Engine
    ⚡ Auto-Renewal & Dual Control System
    🔧 Fully Customizable RPC Settings
    🛡️ Secure & Encrypted Configuration
    🌐 Multi-Platform Support
    📱 24/7 Operation Ready
</pre>

<br>

<div align="center">

### 🔥 Quick Links

<kbd>📥 SETUP GUIDE</kbd> • <kbd>🎮 COMMANDS</kbd> • <kbd>🔐 GET TOKEN</kbd> • <kbd>🌟 FEATURES</kbd> • <kbd>🆘 SUPPORT</kbd>

</div>

<br>

<img src="https://raw.githubusercontent.com/innng/innng/master/assets/kyubey.gif" height="60" />

<br>

[![](https://img.shields.io/badge/Website-000000?style=flat-square&logo=google-chrome&logoColor=white)](https://your-website.com)
[![](https://img.shields.io/badge/Discord-5865F2?style=flat-square&logo=discord&logoColor=white)](https://discord.gg/your-server)
[![](https://img.shields.io/badge/Instagram-E4405F?style=flat-square&logo=instagram&logoColor=white)](https://instagram.com/your-profile)
[![](https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/Lucifer05321)

</div>

---

## 🚀 Quick Start

### One-Command Setup

```bash
git clone https://github.com/Lucifer05321/LuciferRTXrpcV4.git && cd LuciferRTXrpcV4 && npm install && npm start
```

Step-by-Step Setup

```bash
git clone https://github.com/Lucifer05321/LuciferRTXrpcV4.git
cd LuciferRTXrpcV4
npm install
npm start
```

---

🔐 Get Discord Token

<details>
<summary><kbd>⚠️ TOKEN GUIDE (Important)</kbd></summary>

Step 1: Open Discord Web

Go to Discord Web in your browser

Step 2: Open Developer Console

· Windows/Linux: Press Ctrl + Shift + I
· macOS: Press Cmd + Option + I
· Then click on Console tab

Step 3: Unlock Console (If Blocked)

If Discord blocks the console, paste this code first:

```javascript
window.webpackChunkdiscord_app.push([[Math.random()], {}, (req) => {
  for (const m of Object.keys(req.c).map((x) => req.c[x].exports).filter((x) => x)) {
    if (m.default && m.default.getToken !== undefined) {
      return console.log(m.default.getToken());
    }
    if (m.getToken !== undefined) {
      return console.log(m.getToken());
    }
  }
}]);
```

Step 4: Get Token

After unlocking, paste this code:

```javascript
function getUserToken() {
    let iframe = document.createElement('iframe');
    document.body.appendChild(iframe);
    let localStorage = iframe.contentWindow.localStorage;

    if (!localStorage) {
        console.error('◇ Token storage not accessible.');
        return null;
    }

    let token = localStorage.getItem('token');

    if (token) {
        console.log('◇ User Token Retrieved:');
        console.log(token);
        return token;
    } else {
        console.error('◇ Token not found in localStorage.');
        return null;
    }
}

getUserToken();
```

Step 5: Copy Token

· Copy the token that appears in console (starts with MT)
· Never share this token - it provides full account access

Alternative Method (Developer Mode)

```javascript
// Alternative method if above doesn't work
(webpackChunkdiscord_app.push([[''],{},e=>{m=[];for(let c in e.c)m.push(e.c[c])}]),m).find(m=>m?.exports?.default?.getToken!==void 0).exports.default.getToken()
```

</details>

---

🖥️ Platform Setup

<details>
<summary><kbd>🪟 Windows Setup</kbd></summary>

Method 1: Official Installer

```cmd
git clone https://github.com/Lucifer05321/LuciferRTXrpcV4.git
cd LuciferRTXrpcV4
npm install
npm start
```

Method 2: Chocolatey (Admin)

```cmd
choco install nodejs git -y
git clone https://github.com/Lucifer05321/LuciferRTXrpcV4.git
cd LuciferRTXrpcV4
npm install
npm start
```

</details>

<details>
<summary><kbd>🍎 macOS Setup</kbd></summary>

Method 1: Homebrew

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
brew install node git
git clone https://github.com/Lucifer05321/LuciferRTXrpcV4.git
cd LuciferRTXrpcV4
npm install
npm start
```

Method 2: Direct Install

```bash
git clone https://github.com/Lucifer05321/LuciferRTXrpcV4.git
cd LuciferRTXrpcV4
npm install
npm start
```

</details>

<details>
<summary><kbd>🐧 Linux/Ubuntu Setup</kbd></summary>

```bash
sudo apt update && sudo apt upgrade -y
sudo apt install curl git -y
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs
git clone https://github.com/Lucifer05321/LuciferRTXrpcV4.git
cd LuciferRTXrpcV4
npm install
npm start
```

</details>

<details>
<summary><kbd>⚡ Kali Linux Setup</kbd></summary>

```bash
sudo apt update && sudo apt full-upgrade -y
sudo apt install curl git build-essential -y
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs
git clone https://github.com/Lucifer05321/LuciferRTXrpcV4.git
cd LuciferRTXrpcV4
npm install
npm start
```

</details>

<details>
<summary><kbd>📱 Termux (Android) Setup</kbd></summary>

```bash
pkg update && pkg upgrade -y
pkg install nodejs git -y
git clone https://github.com/Lucifer05321/LuciferRTXrpcV4.git
cd LuciferRTXrpcV4
npm install
npm start
```

</details>

<details>
<summary><kbd>☁️ Cloud Platforms Setup</kbd></summary>

```bash
sudo apt update && sudo apt upgrade -y
sudo apt install curl git -y
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs
git clone https://github.com/Lucifer05321/LuciferRTXrpcV4.git
cd LuciferRTXrpcV4
npm install
nohup npm start > output.log 2>&1 &
```

</details>

---

🎮 Command Reference

<details>
<summary><kbd>📊 System Monitoring Commands</kbd></summary>

status - Complete System Dashboard

Shows: Real-time performance, network metrics, memory usage

```bash
status
```

ping - Network Latency Check

Shows: Discord connection quality, API response times

```bash
ping
```

uptime - System Runtime Statistics

Shows: Uptime duration, memory usage, command statistics

```bash
uptime
```

</details>

<details>
<summary><kbd>⚙️ Configuration Commands</kbd></summary>

config - Configuration Overview

Shows: Current RPC settings and field status

```bash
config
```

update - Modify RPC Settings

Update Name:

```bash
update Name "My Custom RPC"
```

Update Status:

```bash
update State "Playing Game"
```

Update Button:

```bash
update button1 '{"label":"Visit","url":"https://example.com"}'
```

Change Renewal Time:

```bash
update renewalTime 6
```

</details>

<details>
<summary><kbd>🔐 Access Control Commands</kbd></summary>

access add - Grant User Permissions

```bash
access add @username
```

access remove - Revoke User Permissions

```bash
access remove @username
```

access list - View Authorized Users

```bash
access list
```

</details>

<details>
<summary><kbd>🔄 System Control Commands</kbd></summary>

reload - Refresh RPC System

```bash
reload
```

help - Show All Commands

```bash
help
```

</details>

<details>
<summary><kbd>🌐 Support Commands</kbd></summary>

website - Official Website

```bash
website
```

instagram - Developer Instagram

```bash
instagram
```

github - Source Code

```bash
github
```

discord - Community Server

```bash
discord
```

</details>

---

🌟 Key Features

· ✅ Advanced RPC - Fully customizable Discord presence
· ✅ Auto Media Renewal - Automatic image updates every 12 hours
· ✅ Dual Interface - Control via Discord chat or console
· ✅ Secure Storage - Encrypted configuration management
· ✅ Multi-User Access - Grant command permissions to trusted users
· ✅ Live System Stats - Real-time performance monitoring
· ✅ 24/7 Operation - Always online with PM2 support
· ✅ Professional UI - Clean, professional interface

---

🆘 Support

<details>
<summary><kbd>🔧 Troubleshooting</kbd></summary>

Check Versions

```bash
node --version
npm --version
```

Clean Reinstall

```bash
rm -rf node_modules
npm cache clean --force
npm install
```

Permission Fix (Linux/Mac)

```bash
sudo chmod -R 755 .
sudo chown -R $USER:$USER .
```

</details>

<details>
<summary><kbd>🚀 24/7 Operation</kbd></summary>

Install PM2

```bash
npm install -g pm2
```

Start with PM2

```bash
pm2 start npm --name "lucifer-rpc" -- start
```

Auto-Start on Boot

```bash
pm2 startup
pm2 save
```

PM2 Management

```bash
pm2 status              # Check status
pm2 restart lucifer-rpc # Restart
pm2 stop lucifer-rpc    # Stop
pm2 logs lucifer-rpc    # View logs
```

</details>

---

<div align="center">

⚠️ Important Notes

· 🔒 Never share your Discord token - It provides full account access
· 🚀 First run - Enter token when prompted (starts with "MT")
· ✅ Platform support - Windows, macOS, Linux, Termux, Cloud
· 📱 Mobile support - Works on Android via Termux
· ☁️ Cloud ready - Deploy on AWS, Google Cloud, Azure

<br>

Made with ❤️ by Lucifer

</div>

---

<div align="center">

📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

⚠️ Disclaimer

This tool is for educational purposes only. Use at your own risk.

</div>
