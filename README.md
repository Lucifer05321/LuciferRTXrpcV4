🚀 Lucifer RPC Engine v4.3 - SMART EDITION


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
    ⚡ INSTANT UPDATES - 0ms/500ms/2000ms Smart Reload
    🔧 NO VALIDATION - Buttons Accept Any Format
    🛡️ RATE LIMITING - 5 commands/10s Protection
    🌐 Multi-Platform Support
    📱 24/7 Operation Ready
</pre>

<br>

<div align="center">

🔥 Quick Navigation

[![SETUP GUIDE](https://img.shields.io/badge/📥_SETUP_GUIDE-4285F4?style=for-the-badge&logo=book&logoColor=white)](#-quick-start)
[![COMMANDS](https://img.shields.io/badge/🎮_COMMANDS-FF6B6B?style=for-the-badge&logo=terminal&logoColor=white)](#-complete-command-reference-16-commands)
[![GET TOKEN](https://img.shields.io/badge/🔐_GET_TOKEN-34A853?style=for-the-badge&logo=discord&logoColor=white)](#-get-discord-token)
[![FEATURES](https://img.shields.io/badge/🌟_FEATURES-FFA500?style=for-the-badge&logo=star&logoColor=white)](#-key-features)
[![SUPPORT](https://img.shields.io/badge/🆘_SUPPORT-E4405F?style=for-the-badge&logo=help&logoColor=white)](#-support--troubleshooting)

</div>

<br>

<div align="center">

🔗 Connect With Me

[![Website](https://img.shields.io/badge/Website-Lucifer_Domains-000000?style=for-the-badge&logo=google-chrome&logoColor=white)](https://lucifer-nukers.netlify.app)
[![Discord](https://img.shields.io/badge/Discord-Community_Server-5865F2?style=for-the-badge&logo=discord&logoColor=white)](https://discord.gg/NwqwbyQvZZ)
[![Instagram](https://img.shields.io/badge/Instagram-Developer_Profile-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://instagram.com/mr_lucifer841)
[![GitHub](https://img.shields.io/badge/GitHub-Source_Code-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Lucifer05321)

</div>

<br>

<img src="https://raw.githubusercontent.com/innng/innng/master/assets/kyubey.gif" height="60" />

<br>

</div>

---

## 📊 Version Comparison Chart - What's New in v4.3 🆕

![Version Comparison](Version_Comparison_Chart.jpg)

---

## 🚀 Quick Start

<details>
<summary><kbd>Click to Expand - Installation Guide</kbd></summary>

### Step-by-Step Installation

```bash
# Clone the repository
git clone https://github.com/Lucifer05321/LuciferRTXrpcV4.git

# Navigate to project directory
cd LuciferRTXrpcV4

# Install dependencies
npm install

# Start the application
npm start
```

</details>

---

🔐 Get Discord Token

<details>
<summary><kbd>⚠️ TOKEN GUIDE (Important Security Information)</kbd></summary>

🎯 Recommended Method: Chrome Extension

Step 1: Install Token Extractor Extension

· Search for "Discord Token Extractor" in Chrome Web Store
· Install a reputable token extraction extension

Step 2: Get Your Token

· Open Discord Web in your browser
· Click on the extension icon
· Copy your token directly

📱 Termux Users (Android)

Step 1: Install Termux

· Download from F-Droid or GitHub Releases

Step 2: Setup Environment

```bash
pkg update && pkg upgrade -y
pkg install nodejs git -y
```

🔧 Manual Console Method (Advanced Users)

Step 1: Open Discord Web

· Go to Discord Web in your browser

Step 2: Open Developer Console

· Windows/Linux: Press Ctrl + Shift + I
· macOS: Press Cmd + Option + I
· Click on Console tab

Step 3: Execute Token Extraction

Paste this code in console:

```javascript
function getUserToken() {
    let iframe = document.createElement('iframe');
    document.body.appendChild(iframe);
    let localStorage = iframe.contentWindow.localStorage;
    
    if (!localStorage) {
        console.error('Token storage not accessible.');
        return null;
    }
    
    let token = localStorage.getItem('token');
    
    if (token) {
        console.log('User Token Retrieved:');
        console.log(token);
        return token;
    } else {
        console.error('Token not found in localStorage.');
        return null;
    }
}

getUserToken();
```

Step 4: Copy Your Token

· Copy the token that appears in console (starts with MT)
· ⚠️ Never share this token - it provides full account access
· Store it securely in the RPC configuration

🔒 Security Warning

· Your Discord token is like your account password
· Anyone with your token can access your account
· Only use this tool on your personal devices
· Never share screenshots showing your token

</details>

---

🖥️ Platform Setup Guides
<img
src="https://img.shields.io/badge/🪟_Windows_Setup-0078D6?style=for-the-badge&logo=windows&logoColor=white" />
<details>
<summary><kbd>Click to Expand - Windows Setup</kbd></summary>

Method 1: Standard Installation

```cmd
git clone https://github.com/Lucifer05321/LuciferRTXrpcV4.git
```

```cmd
cd LuciferRTXrpcV4
```

```cmd
npm install
```

```cmd
npm start
```

Method 2: Chocolatey Package Manager (Admin)

```cmd
@"%SystemRoot%\System32\WindowsPowerShell\v1.0\powershell.exe" -NoProfile -InputFormat None -ExecutionPolicy Bypass -Command "iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))" && SET "PATH=%PATH%;%ALLUSERSPROFILE%\chocolatey\bin"
```

```cmd
choco install nodejs git -y
```

```cmd
git clone https://github.com/Lucifer05321/LuciferRTXrpcV4.git
```

```cmd
cd LuciferRTXrpcV4
```

```cmd
npm install
```

```cmd
npm start
```

Method 3: Windows Terminal (Recommended)

· Use Windows Terminal for better experience
· Available via Microsoft Store
· Supports multiple tabs and profiles

</details>

https://img.shields.io/badge/🍎_macOS_Setup-000000?style=for-the-badge&logo=apple&logoColor=white

<details>
<summary><kbd>Click to Expand - macOS Setup</kbd></summary>

Method 1: Homebrew Installation

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

```bash
brew install node git
```

```bash
git clone https://github.com/Lucifer05321/LuciferRTXrpcV4.git
```

```bash
cd LuciferRTXrpcV4
```

```bash
npm install
```

```bash
npm start
```

Method 2: Direct Installation

```bash
# Download Node.js from https://nodejs.org/
```

```bash
git clone https://github.com/Lucifer05321/LuciferRTXrpcV4.git
```

```bash
cd LuciferRTXrpcV4
```

```bash
npm install
```

```bash
npm start
```

</details>
<img
src="https://img.shields.io/badge/🐧_Ubuntu_Setup-E95420?style=for-the-badge&logo=ubuntu&logoColor=white" />
<details>
<summary><kbd>Click to Expand - Ubuntu/Debian Setup</kbd></summary>

```bash
sudo apt update && sudo apt upgrade -y
```

```bash
sudo apt install curl git -y
```

```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
```

```bash
sudo apt-get install -y nodejs
```

```bash
git clone https://github.com/Lucifer05321/LuciferRTXrpcV4.git
```

```bash
cd LuciferRTXrpcV4
```

```bash
npm install
```

```bash
npm start
```

</details>
<img
src="https://img.shields.io/badge/🔓_Kali_Linux_Setup-557C94?style=for-the-badge&logo=kalilinux&logoColor=white" />
<details>
<summary><kbd>Click to Expand - Kali Linux Setup</kbd></summary>

```bash
sudo apt update && sudo apt full-upgrade -y
```

```bash
sudo apt install curl git build-essential -y
```

```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
```

```bash
sudo apt-get install -y nodejs
```

```bash
git clone https://github.com/Lucifer05321/LuciferRTXrpcV4.git
```

```bash
cd LuciferRTXrpcV4
```

```bash
npm install
```

```bash
npm start
```

</details>
<img
src="https://img.shields.io/badge/📱_Termux_Setup-00B0FF?style=for-the-badge&logo=android&logoColor=white" />
<details>
<summary><kbd>Click to Expand - Termux Setup</kbd></summary>

Step 1: Install Termux

· Download from F-Droid or GitHub Releases

Step 2: Complete Setup Commands

```bash
pkg update && pkg upgrade -y
```

```bash
pkg install nodejs git -y
```

```bash
git clone https://github.com/Lucifer05321/LuciferRTXrpcV4.git
```

```bash
cd LuciferRTXrpcV4
```

```bash
npm install
```

```bash
npm start
```

Minimum Setup (Storage Issues)

```bash
pkg install nodejs git -y
```

```bash
git clone https://github.com/Lucifer05321/LuciferRTXrpcV4.git
```

```bash
cd LuciferRTXrpcV4
```

```bash
npm install
```

```bash
npm start
```

</details>
<img
src="https://img.shields.io/badge/☁️_Cloud_Platforms_Setup-FF9900?style=for-the-badge&logo=amazonaws&logoColor=white" />
<details>
<summary><kbd>Click to Expand - Cloud Platforms Setup</kbd></summary>

```bash
sudo apt update && sudo apt upgrade -y
```

```bash
sudo apt install curl git -y
```

```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
```

```bash
sudo apt-get install -y nodejs
```

```bash
git clone https://github.com/Lucifer05321/LuciferRTXrpcV4.git
```

```bash
cd LuciferRTXrpcV4
```

```bash
npm install
```

```bash
nohup npm start > output.log 2>&1 &
```

Supported Platforms:

· AWS EC2
· Google Cloud
· Azure VMs
· DigitalOcean
· Heroku
· Railway

</details>

---

🎮 Complete Command Reference (16 Commands)

<details>
<summary><kbd>⚙️ System Commands (9)</kbd></summary>

status / st - System Status & Performance

```bash
status
# or
st
```

Displays complete system status with performance metrics

config / cfg - Configuration Overview

```bash
config
# or
cfg
```

Shows all configuration fields with values and status

update / up - Instant RPC Updates

```bash
update name "My RPC"
# or
up name "My RPC"
```

Modifies any RPC configuration field instantly

access / acc - User Access Control

```bash
access add @user
access remove @user
access list
# or
acc add @user
acc remove @user
acc list
```

Manages user command access control

ping / pg - Network Latency Check

```bash
ping
# or
pg
```

Checks network latency and connection quality

uptime / ut - System Uptime

```bash
uptime
# or
ut
```

Shows system uptime and resource usage

reload / rl - Instant RPC Refresh

```bash
reload
# or
rl
```

Refreshes RPC instantly

rateinfo - Rate Limit Information

```bash
rateinfo
```

Shows rate limit information

reloadstatus - Reload System Status

```bash
reloadstatus
```

Shows reload system status

</details>

<details>
<summary><kbd>🌐 Support Commands (5)</kbd></summary>

help / hlp - Command Documentation

```bash
help
# or
hlp
```

Shows complete command documentation

website - Official Website

```bash
website
```

Gets official website link

instagram - Instagram Profile

```bash
instagram
```

Gets Instagram profile link

github - GitHub Repository

```bash
github
```

Gets GitHub repository link

discord - Discord Server

```bash
discord
```

Gets Discord server link

</details>

<details>
<summary><kbd>💻 Console Only Commands (2)</kbd></summary>

clear - Clear Console

```bash
clear
```

Clears console screen for better readability

exit - Safe Shutdown

```bash
exit
```

Safely shuts down the system

</details>

---

⚡ Update Command Examples

<details>
<summary><kbd>🚀 Instant Updates (0ms)</kbd></summary>

```bash
up name "Lucifer RPC Pro"
```

```bash
up state "Coding amazing projects"
```

```bash
up details "Developing next-gen RPC systems"
```

```bash
up btn1 "Visit Website|https://lucifer-nukers.netlify.app"
```

```bash
up btn1 '{"label":"GitHub","url":"https://github.com/Lucifer05321"}'
```

```bash
up btn1 "Join Discord"
```

```bash
up btn2 "Follow Instagram|https://instagram.com/mr_lucifer841"
```

```bash
up largeTxt "Lucifer Domains"
```

```bash
up smallTxt "RPC Engine v4.3"
```

```bash
up showTime true
```

```bash
up timeZone "Asia/Kolkata"
```

</details>

<details>
<summary><kbd>⚡ Quick Updates (500ms)</kbd></summary>

```bash
up largeImg "https://cdn.discordapp.com/attachments/..."
```

```bash
up smallImg "https://cdn.discordapp.com/attachments/..."
```

```bash
up largeImg "https://lucifer-nukers.netlify.app/images/logo.png"
```

```bash
up smallImg "https://raw.githubusercontent.com/Lucifer05321/.../icon.png"
```

</details>

<details>
<summary><kbd>🔧 System Updates (2000ms)</kbd></summary>

```bash
up renewTime 24
```

```bash
up token "YOUR_NEW_DISCORD_TOKEN"
```

```bash
up clientId "123456789012345678"
```

</details>

---

🌟 Key Features

<div align="center">

https://img.shields.io/badge/⚡_Instant_Updates-0ms/500ms/2000ms-00C851?style=for-the-badge
https://img.shields.io/badge/🔧_No_Button_Validation-Any_Format_Works-FF4444?style=for-the-badge
https://img.shields.io/badge/🛡️_Rate_Limiting-5_commands/10s-9C27B0?style=for-the-badge
https://img.shields.io/badge/⚡_Smart_Reload-Priority_Queue-FF9800?style=for-the-badge
https://img.shields.io/badge/🎨_Advanced_RPC-Fully_Customizable-2196F3?style=for-the-badge
https://img.shields.io/badge/🔄_Auto_Media_Renewal-Automatic_Updates-607D8B?style=for-the-badge
https://img.shields.io/badge/💬_Dual_Interface-Discord_+_Console-795548?style=for-the-badge
https://img.shields.io/badge/🔒_Secure_Storage-Encrypted_Config-4CAF50?style=for-the-badge
https://img.shields.io/badge/👥_Multi_User_Access-Grant_Permissions-E91E63?style=for-the-badge
https://img.shields.io/badge/📊_Live_System_Stats-Real_time_Monitoring-009688?style=for-the-badge
https://img.shields.io/badge/🌙_24/7_Operation-Always_Online-673AB7?style=for-the-badge
https://img.shields.io/badge/🎯_Professional_UI-Clean_Modern-3F51B5?style=for-the-badge
https://img.shields.io/badge/🌐_Multi_Platform-Windows_macOS_Linux_Termux_Cloud-FF5722?style=for-the-badge
https://img.shields.io/badge/🎮_16_Powerful_Commands-Complete_Control-795548?style=for-the-badge
https://img.shields.io/badge/🛠️_Smart_Error_Handling-Auto_Recovery-607D8B?style=for-the-badge
https://img.shields.io/badge/💾_Backup_System-Auto_Config_Backups-9E9E9E?style=for-the-badge

</div>

---

🆘 Support & Troubleshooting

<details>
<summary><kbd>🔧 Common Issues & Solutions</kbd></summary>

Check System Requirements

```bash
node --version
```

```bash
npm --version
```

```bash
git --version
```

Clean Reinstallation

```bash
rm -rf node_modules
```

```bash
npm cache clean --force
```

```bash
npm install
```

Permission Issues (Linux/Mac)

```bash
sudo chmod -R 755 .
```

```bash
sudo chown -R $USER:$USER .
```

Node.js Installation Issues

```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
```

```bash
sudo apt-get install -y nodejs
```

Port Already in Use

```bash
lsof -ti:3000 | xargs kill -9
```

Discord Token Issues

· Ensure token starts with MT or mfa.
· No extra spaces in token
· Use Discord Web for reliable token extraction

</details>

<details>
<summary><kbd>🚀 24/7 Operation with PM2</kbd></summary>

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
```

```bash
pm2 save
```

PM2 Management

```bash
pm2 status
```

```bash
pm2 restart lucifer-rpc
```

```bash
pm2 stop lucifer-rpc
```

```bash
pm2 logs lucifer-rpc
```

```bash
pm2 monit
```

Multiple Instances

```bash
pm2 start npm --name "lucifer-rpc" -- start -i max
```

</details>

<details>
<summary><kbd>📞 Contact & Community Support</kbd></summary>

<div align="center">

https://img.shields.io/badge/🌐_Website-Lucifer_Domains-000000?style=for-the-badge&logo=google-chrome&logoColor=white
https://img.shields.io/badge/💬_Discord_Server-Community_Support-5865F2?style=for-the-badge&logo=discord&logoColor=white
https://img.shields.io/badge/📷_Instagram-Developer_Profile-E4405F?style=for-the-badge&logo=instagram&logoColor=white
https://img.shields.io/badge/🐙_GitHub-Source_Code-181717?style=for-the-badge&logo=github&logoColor=white

https://img.shields.io/badge/🐛_Report_Issues-GitHub_Issues-181717?style=for-the-badge&logo=github&logoColor=white

</div>

Response Times:

· Discord Support: 1-6 hours
· GitHub Issues: 12-24 hours
· Critical Bugs: Priority handling

Before Asking for Help:

1. Check this README thoroughly
2. Look at existing GitHub issues
3. Ensure setup meets requirements
4. Provide error logs and system info

</details>

---

<div align="center">

☕ Support This Project

If you find this project helpful and want to support continued development:

https://img.shields.io/badge/☕_Buy_Me_A_Coffee-Support_Development-FFDD00?style=for-the-badge&logo=buymeacoffee&logoColor=black

Your support helps maintain and improve this project!

</div>

---

<div align="center">

📄 License & Disclaimer

License: MIT License - See LICENSE file for complete details.

Disclaimer: This tool is developed for educational and personal use purposes only. Users are solely responsible for complying with Discord's Terms of Service and Developer Policy. The developers are not responsible for any misuse or damages caused by this software.

<br>

⚠️ Important Security Notes

https://img.shields.io/badge/🔒_Never_Share_Discord_Token-Personal_Use_Only-FF4444?style=for-the-badge
https://img.shields.io/badge/🚀_Use_Responsibly-Respect_Rate_Limits-FF9800?style=for-the-badge
https://img.shields.io/badge/📱_Multi_Platform_Support-Windows_macOS_Linux_Termux_Cloud-2196F3?style=for-the-badge
https://img.shields.io/badge/🔄_Keep_Updated-Latest_Version_Security-4CAF50?style=for-the-badge
https://img.shields.io/badge/📊_Monitor_Usage-Avoid_API_Limits-607D8B?style=for-the-badge

<br>

🎯 Recommended Usage

https://img.shields.io/badge/👤_Personal_Profile_Customization-00C851?style=for-the-badge
https://img.shields.io/badge/💻_Developer_Testing_Environments-2196F3?style=for-the-badge
https://img.shields.io/badge/🎓_Educational_Projects-9C27B0?style=for-the-badge
https://img.shields.io/badge/🚫_Non_Commercial_Applications-FF4444?style=for-the-badge

<br>

Made with ❤️ by Lucifer

https://img.shields.io/badge/🌐_Website-Lucifer_Domains-000000?style=for-the-badge&logo=google-chrome&logoColor=white
https://img.shields.io/badge/💬_Discord-Community_Server-5865F2?style=for-the-badge&logo=discord&logoColor=white
https://img.shields.io/badge/📷_Instagram-Developer_Profile-E4405F?style=for-the-badge&logo=instagram&logoColor=white
https://img.shields.io/badge/🐙_GitHub-Source_Code-181717?style=for-the-badge&logo=github&logoColor=white

</div>

---

<div align="center">

⭐ If you find this project helpful, please give it a star on GitHub!

https://api.star-history.com/svg?repos=Lucifer05321/LuciferRTXrpcV4&type=Date

https://img.shields.io/badge/⭐_Give_Star_on_GitHub-181717?style=for-the-badge&logo=github&logoColor=white

</div>
