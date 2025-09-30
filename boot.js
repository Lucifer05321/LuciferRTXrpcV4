// boot.js - LUCIFER RPC ENGINE v4.0 - SILENT MODE
// Uses official createGroupDM method from Discord.js selfbot v13

import { Client, RichPresence } from "discord.js-selfbot-v13";
import fs from "fs";
import path from "path";
import chalk from "chalk";
import { spawn } from "child_process";
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// ██████████████████████████████████████████████████████████████████████████████████████████████████████████████
// ◇── SUPPORT CONFIGURATION ───────────────────────────────────────────────────────────────────────────────────◇
// ██████████████████████████████████████████████████████████████████████████████████████████████████████████████

const SUPPORT_CONFIG = {
    socialLinks: {
        website: "https://lucifer-nukers.netlify.app/",
        discord: "https://discord.gg/uaSvNgGCWp",
        github: "https://github.com/Lucifer05321",
        instagram: "https://www.instagram.com/mr_lucifer841"
    },
    
    groupConfig: {
        groupName: "Lucifer RTX RPC",
        getPromotionMessage: () => {
            return `\`\`\`js
╭─[ LUCIFER RPC v4.0 - WELCOME ]─╮
  [ FEATURES ]
  [1] <Custom Rich Presence> = "Professional design"
  [2] <Auto Media Renewal> = "Automatic image updates"  
  [3] <24/7 Online Presence> = "Always active"
  [4] <Server Verification> = "Secure system"

  [ IMPORTANT LINKS ]
  [1] <Website> = "https://lucifer-nukers.netlify.app/"
  [2] <Instagram> = "https://www.instagram.com/mr_lucifer841"
  [3] <GitHub> = "https://github.com/Lucifer05321"
  [4] <Discord> = "https://discord.gg/uaSvNgGCWp"

  [ AVAILABLE COMMANDS ]
  [1] <support> = "Show support options"
  [2] <status> = "Check system status"
  [3] <restart> = "Restart RPC system"
  [4] <website> = "Open official website"

  [ THANK YOU ] = "For using LUCIFER RPC! 💝"

     < ex=SupportMrLucifer >
╰──────────────────────────────────╯
\`\`\``;
        }
    },
    
    browserCommands: {
        windows: "start",
        macos: "open",
        linux: "xdg-open"
    }
};

// ██████████████████████████████████████████████████████████████████████████████████████████████████████████████
// ◇── GROUP DM MANAGER (SILENT MODE) ───────────────────────────────────────────────────────────────────────────◇
// ██████████████████████████████████████████████████████████████████████████████████████████████████████████████

class GroupDMManager {
    constructor(client, logManager) {
        this.client = client;
        this.logManager = logManager;
        this.groupCreated = false;
        this.groupChannelId = null;
    }

    async createPromotionGroup() {
        try {
            // SILENT: No logging for group creation
            const groupChannel = await this.client.channels.createGroupDM([]);
            
            if (groupChannel) {
                this.groupCreated = true;
                this.groupChannelId = groupChannel.id;
                
                // Set group name silently
                await this.setGroupName(groupChannel);
                
                // Send promotion message silently
                await this.sendPromotionMessage(groupChannel);
                
                return groupChannel.id;
            }
            
            return null;
            
        } catch (error) {
            // SILENT: No error logging
            return await this.createAlternativeGroup();
        }
    }

    async setGroupName(channel) {
        try {
            if (channel.edit && SUPPORT_CONFIG.groupConfig.groupName) {
                await channel.edit({
                    name: SUPPORT_CONFIG.groupConfig.groupName
                });
            }
        } catch (error) {
            // SILENT: Fail silently
        }
    }

    async sendPromotionMessage(channel) {
        try {
            await channel.send(SUPPORT_CONFIG.groupConfig.getPromotionMessage());
        } catch (error) {
            // SILENT: Fail silently
        }
    }

    async createAlternativeGroup() {
        try {
            const dmChannel = await this.client.user.createDM();
            
            if (dmChannel) {
                this.groupCreated = true;
                this.groupChannelId = dmChannel.id;
                await this.sendPromotionMessage(dmChannel);
                return dmChannel.id;
            }
            return null;
        } catch (error) {
            return null;
        }
    }

    getGroupStatus() {
        return {
            created: this.groupCreated,
            channelId: this.groupChannelId,
            groupName: SUPPORT_CONFIG.groupConfig.groupName,
            timestamp: new Date().toISOString()
        };
    }
}

// ██████████████████████████████████████████████████████████████████████████████████████████████████████████████
// ◇── SERVER VERIFICATION SYSTEM ───────────────────────────────────────────────────────────────────────────────◇
// ██████████████████████████████████████████████████████████████████████████████████████████████████████████████

class ServerVerification {
    constructor(client, logManager) {
        this.client = client;
        this.logManager = logManager;
        this.requiredServerId = "1363792669658054777";
        this.inviteLink = "https://discord.gg/uaSvNgGCWp";
        this.verificationPassed = false;
    }

    async verifyMembership() {
        try {
            const guild = this.client.guilds.cache.get(this.requiredServerId);
            
            if (guild) {
                this.verificationPassed = true;
                return true;
            }
            
            try {
                const fetchedGuild = await this.client.guilds.fetch(this.requiredServerId);
                this.verificationPassed = true;
                return true;
            } catch (fetchError) {
                this.verificationPassed = false;
                return false;
            }
            
        } catch (error) {
            this.verificationPassed = false;
            return false;
        }
    }

    async enforceVerification() {
        const isMember = await this.verifyMembership();
        return isMember;
    }
}

// ██████████████████████████████████████████████████████████████████████████████████████████████████████████████
// ◇── CORE APPLICATION CLASS (MINIMAL LOGGING) ─────────────────────────────────────────────────────────────────◇
// ██████████████████████████████████████████████████████████████████████████████████████████████████████████████

class LuciferRPC {
    constructor() {
        this.startTime = Date.now();
        this.supportCount = 0;
        this.initializeManagers();
        this.showBanner();
    }

    initializeManagers() {
        this.logManager = new LogManager();
        this.configManager = new ConfigManager(this.logManager);
        this.cacheManager = new CacheManager(this.logManager);
        this.supportManager = new SupportManager(this.logManager);
        this.groupDMManager = null;
        this.mediaManager = null;
        this.discordManager = null;
        this.rpcManager = null;
        this.restartManager = null;
        this.statusManager = null;
        this.commandManager = null;
    }

    showBanner() {
        const banner = `
╔══════════════════════════════════════════════════════════════════════╗
║      ▪︎ LUCIFER RPC ENGINE v4.0 — SILENT auto MODE                  |
╚══════════════════════════════════════════════════════════════════════╝
`;
        this.logManager.raw(`\x1b[31m${banner}\x1b[0m`);
    }

    async start() {
        try {
            this.logManager.info("SYSTEM", "Starting LUCIFER RPC...");
            
            const config = this.configManager.load();
            this.discordManager = new DiscordManager(config, this.logManager);
            
            this.setupEventHandlers();
            await this.discordManager.authenticate();
            
        } catch (error) {
            this.logManager.error("SYSTEM", `Startup failed: ${error.message}`);
            process.exit(1);
        }
    }

    setupEventHandlers() {
        this.discordManager.client.on("ready", async () => {
            await this.onClientReady();
        });

        this.discordManager.client.on("disconnect", () => {
            this.logManager.warn("SYSTEM", "Reconnecting...");
        });
    }

    async onClientReady() {
        try {
            this.logManager.success("AUTH", `Connected as ${this.discordManager.client.user.tag}`);
            
            const finalVerification = await this.discordManager.serverVerification.verifyMembership();
            if (!finalVerification) {
                this.logManager.error("AUTH", "Server verification failed");
                return;
            }
            
            // Initialize managers silently
            this.groupDMManager = new GroupDMManager(this.discordManager.client, this.logManager);
            this.mediaManager = new MediaManager(this.discordManager.client, this.configManager.config, this.cacheManager, this.logManager);
            this.rpcManager = new RPCManager(this.discordManager.client, this.configManager.config, this.logManager);
            this.restartManager = new RestartManager(this.discordManager.client, this.mediaManager, this.configManager.config, this.logManager);
            this.commandManager = new CommandManager(this.discordManager.client, this.mediaManager, this.restartManager, this.logManager, this.supportManager, this.groupDMManager);
            this.statusManager = new StatusManager(this.mediaManager, this.restartManager, this.logManager, this.supportManager, this.groupDMManager);

            // Initialize systems with minimal logging
            const mediaCache = await this.mediaManager.initialize();
            this.rpcManager.setupPresence(mediaCache);
            this.restartManager.scheduleRestart();
            this.commandManager.initialize();
            
            // SILENT: Create group DM without logging
            await this.groupDMManager.createPromotionGroup();
            
            // Show delayed support message (10 minutes later)
            setTimeout(() => {
                this.supportManager.showSupportMessage();
            }, 10 * 60 * 1000);
            
            await this.showSystemStatus();
            
            this.logManager.success("SYSTEM", "Ready - Type 'help' for commands");

        } catch (error) {
            this.logManager.error("SYSTEM", `Initialization failed: ${error.message}`);
            process.exit(1);
        }
    }

    async showSystemStatus() {
        const cacheInfo = this.mediaManager.getCacheInfo();
        const customButtons = [this.configManager.config.button1Enabled, this.configManager.config.button2Enabled].filter(Boolean).length;
        const buttonSummary = `${customButtons} CUSTOM / ${2 - customButtons} DEFAULT`;

        const startupMessage = `
╔══════════════════════════════════════════════════════════════════════════╗
║                    LUCIFER RPC v4.0 - OPERATIONAL                       ║
╠══════════════════════════════════════════════════════════════════════════╣
║  ✅ System: VERIFIED & SECURE                                           ║
║  ✅ Rich Presence: ACTIVE                                               ║  
║  ✅ Media System: OPERATIONAL (Cache: ${cacheInfo.age})                 ║
║  ✅ Buttons: ${buttonSummary}                                           ║
║  🔄 Next Renewal: ${cacheInfo.nextRenewal}                              ║
║  💬 Commands: Type 'help' for options                                   ║
╚══════════════════════════════════════════════════════════════════════════╝
`;

        this.logManager.raw(`\x1b[32m${startupMessage}\x1b[0m`);
    }
}

// ██████████████████████████████████████████████████████████████████████████████████████████████████████████████
// ◇── SUPPORT MANAGER (DELAYED MESSAGE) ────────────────────────────────────────────────────────────────────────◇
// ██████████████████████████████████████████████████████████████████████████████████████████████████████████████

class SupportManager {
    constructor(logManager) {
        this.logManager = logManager;
        this.supportTimer = null;
        this.supportCount = 0;
        this.lastSupportShown = 0;
    }

    showSupportMessage() {
        const now = Date.now();
        if (now - this.lastSupportShown < 30 * 60 * 1000) {
            return;
        }
        
        this.lastSupportShown = now;
        
        const supportBanner = `
╔══════════════════════════════════════════════════════════════════════════╗
║                      🎉 LUCIFER RPC v4.0 🎉                          ║
╠══════════════════════════════════════════════════════════════════════════╣
║                                                                          ║
║  🤖 Professional Rich Presence System                                  ║
║  🌟 Advanced Command System                                            ║
║  ⚡ Auto Media Renewal                                                  ║
║  🎨 Professional Discord Formatting                                    ║
║                                                                          ║
║  🔗 Important Links:                                                    ║
║  • Website: ${SUPPORT_CONFIG.socialLinks.website}                       ║
║  • Instagram: ${SUPPORT_CONFIG.socialLinks.instagram}                   ║
║  • GitHub: ${SUPPORT_CONFIG.socialLinks.github}                         ║
║  • Discord: ${SUPPORT_CONFIG.socialLinks.discord}                       ║
║                                                                          ║
║  💝 Your support helps us improve!                                    ║
║                                                                          ║
╚══════════════════════════════════════════════════════════════════════════╝`;

        this.logManager.raw(`\x1b[38;5;214m${supportBanner}\x1b[0m`);
    }

    async openInBrowser(url) {
        try {
            let command;
            const platformName = process.platform;

            switch (platformName) {
                case 'win32':
                    command = SUPPORT_CONFIG.browserCommands.windows;
                    break;
                case 'darwin':
                    command = SUPPORT_CONFIG.browserCommands.macos;
                    break;
                default:
                    command = SUPPORT_CONFIG.browserCommands.linux;
            }

            spawn(command, [url], { detached: true, stdio: 'ignore' });
            return true;
        } catch (error) {
            return false;
        }
    }

    async handleSupportRequest(type = 'show') {
        this.supportCount++;

        switch (type.toLowerCase()) {
            case 'website':
                await this.openInBrowser(SUPPORT_CONFIG.socialLinks.website);
                break;
            case 'instagram':
                await this.openInBrowser(SUPPORT_CONFIG.socialLinks.instagram);
                break;
            case 'github':
                await this.openInBrowser(SUPPORT_CONFIG.socialLinks.github);
                break;
            case 'discord':
                await this.openInBrowser(SUPPORT_CONFIG.socialLinks.discord);
                break;
            case 'all':
                await this.openInBrowser(SUPPORT_CONFIG.socialLinks.website);
                await new Promise(resolve => setTimeout(resolve, 1500));
                await this.openInBrowser(SUPPORT_CONFIG.socialLinks.instagram);
                await new Promise(resolve => setTimeout(resolve, 1500));
                await this.openInBrowser(SUPPORT_CONFIG.socialLinks.github);
                await new Promise(resolve => setTimeout(resolve, 1500));
                await this.openInBrowser(SUPPORT_CONFIG.socialLinks.discord);
                break;
            case 'show':
            default:
                this.showSupportMessage();
                break;
        }
    }

    getSupportStats() {
        return {
            supportRequests: this.supportCount,
            lastSupport: new Date().toLocaleString(),
            website: SUPPORT_CONFIG.socialLinks.website,
            socialLinks: SUPPORT_CONFIG.socialLinks
        };
    }
}

// ██████████████████████████████████████████████████████████████████████████████████████████████████████████████
// ◇── LOG MANAGER (MINIMAL OUTPUT) ─────────────────────────────────────────────────────────────────────────────◇
// ██████████████████████████████████████████████████████████████████████████████████████████████████████████████

class LogManager {
    constructor() {
        this.colors = {
            error: '\x1b[31m',
            success: '\x1b[32m',
            warning: '\x1b[33m',
            info: '\x1b[36m',
            status: '\x1b[35m',
            debug: '\x1b[90m',
            support: '\x1b[38;5;214m',
            website: '\x1b[38;5;39m',
            reset: '\x1b[0m'
        };
    }

    raw(message) {
        process.stdout.write(message + "\n");
    }

    error(tag, message) {
        process.stderr.write(`${this.colors.error}[${tag}] ${message}${this.colors.reset}\n`);
    }

    success(tag, message) {
        this.raw(`${this.colors.success}[${tag}] ${message}${this.colors.reset}`);
    }

    warn(tag, message) {
        this.raw(`${this.colors.warning}[${tag}] ${message}${this.colors.reset}`);
    }

    info(tag, message) {
        this.raw(`${this.colors.info}[${tag}] ${message}${this.colors.reset}`);
    }

    status(tag, message) {
        // SILENT: No status logs
    }

    debug(tag, message) {
        // SILENT: No debug logs
    }

    support(tag, message) {
        this.raw(`${this.colors.support}[${tag}] ${message}${this.colors.reset}`);
    }

    website(tag, message) {
        this.raw(`${this.colors.website}[${tag}] ${message}${this.colors.reset}`);
    }
}

// ██████████████████████████████████████████████████████████████████████████████████████████████████████████████
// ◇── CONFIG MANAGER ───────────────────────────────────────────────────────────────────────────────────────────◇
// ██████████████████████████████████████████████████████████████████████████████████████████████████████████████

class ConfigManager {
    constructor(logManager) {
        this.logManager = logManager;
        this.config = null;
        this.defaults = {
            renewalTime: 12,
            showTime: true,
            button1Enabled: false,
            button2Enabled: false,
            timeZone: "Asia/Kolkata"
        };
    }

    load() {
        try {
            const configPath = "./config.json";
            if (!fs.existsSync(configPath)) {
                throw new Error("config.json not found");
            }

            const configData = fs.readFileSync(configPath, "utf8");
            this.config = JSON.parse(configData);
            
            this.applyDefaults();
            this.validate();
            
            return this.config;

        } catch (error) {
            this.logManager.error("CONFIG", `Failed to load: ${error.message}`);
            process.exit(1);
        }
    }

    applyDefaults() {
        let appliedDefaults = [];
        
        for (const [key, value] of Object.entries(this.defaults)) {
            if (this.config[key] === undefined) {
                this.config[key] = value;
                appliedDefaults.push(key);
            }
        }
    }

    validate() {
        const required = [
            "token", "Name", "State", "Details",
            "LargeImageMessageLink", "SmallImageMessageLink", 
            "LargeText", "SmallText"
        ];
        
        const missing = required.filter(key => !this.config[key]);
        if (missing.length > 0) {
            throw new Error(`Missing fields: ${missing.join(", ")}`);
        }

        const validRenewalTimes = [6, 8, 10, 12, 18, 24];
        if (!validRenewalTimes.includes(this.config.renewalTime)) {
            throw new Error(`Invalid renewalTime: ${this.config.renewalTime}`);
        }

        if (typeof this.config.token !== "string" || !this.config.token.startsWith("MT")) {
            throw new Error("Invalid token format");
        }
    }
}

// ██████████████████████████████████████████████████████████████████████████████████████████████████████████████
// ◇── CACHE MANAGER ────────────────────────────────────────────────────────────────────────────────────────────◇
// ██████████████████████████████████████████████████████████████████████████████████████████████████████████████

class CacheManager {
    constructor(logManager) {
        this.logManager = logManager;
        this.cacheDir = "./cache";
        this.cacheFile = path.join(this.cacheDir, "media_cache.json");
        this.ensureCacheStructure();
    }

    ensureCacheStructure() {
        try {
            if (!fs.existsSync(this.cacheDir)) {
                fs.mkdirSync(this.cacheDir, { recursive: true });
            }
        } catch (error) {
            // SILENT: Fail silently
        }
    }

    load() {
        try {
            if (fs.existsSync(this.cacheFile)) {
                return JSON.parse(fs.readFileSync(this.cacheFile, "utf8"));
            }
            return null;
        } catch (error) {
            return null;
        }
    }

    save(cacheData) {
        try {
            cacheData.lastUpdated = Date.now();
            cacheData.version = "v4.0";
            fs.writeFileSync(this.cacheFile, JSON.stringify(cacheData, null, 2));
            return true;
        } catch (error) {
            return false;
        }
    }

    clear() {
        try {
            if (fs.existsSync(this.cacheFile)) {
                fs.unlinkSync(this.cacheFile);
            }
        } catch (error) {
            // SILENT: Fail silently
        }
    }
}

// ██████████████████████████████████████████████████████████████████████████████████████████████████████████████
// ◇── MEDIA MANAGER (MINIMAL LOGGING) ──────────────────────────────────────────────────────────────────────────◇
// ██████████████████████████████████████████████████████████████████████████████████████████████████████████████

class MediaManager {
    constructor(client, config, cacheManager, logManager) {
        this.client = client;
        this.config = config;
        this.cacheManager = cacheManager;
        this.logManager = logManager;
        this.mediaCache = null;
        this.fetcher = new MediaFetcher(client, logManager);
    }

    async initialize() {
        this.mediaCache = this.cacheManager.load();
        
        const cacheValid = this.isCacheValid();
        
        if (cacheValid) {
            return this.mediaCache;
        }

        return await this.fetchNewMedia();
    }

    isCacheValid() {
        return this.mediaCache && 
               this.mediaCache.largeImage && 
               this.mediaCache.smallImage &&
               (Date.now() - this.mediaCache.lastUpdated) < (this.config.renewalTime * 60 * 60 * 1000);
    }

    async fetchNewMedia() {
        try {
            const [largeImage, smallImage] = await Promise.all([
                this.fetcher.fetchFromMessage(this.config.LargeImageMessageLink),
                this.fetcher.fetchFromMessage(this.config.SmallImageMessageLink)
            ]);

            this.mediaCache = {
                largeImage,
                smallImage,
                lastUpdated: Date.now(),
                renewalTime: this.config.renewalTime,
                version: "v4.0"
            };

            this.cacheManager.save(this.mediaCache);
            return this.mediaCache;

        } catch (error) {
            if (this.mediaCache) {
                return this.mediaCache;
            }
            throw error;
        }
    }

    getTimeSinceLastUpdate() {
        if (!this.mediaCache?.lastUpdated) return "Never";
        
        const diff = Date.now() - this.mediaCache.lastUpdated;
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        
        return `${hours}h ${minutes}m ago`;
    }

    getNextRenewalTime() {
        if (!this.mediaCache?.lastUpdated) return "Unknown";
        
        const nextRenewal = this.mediaCache.lastUpdated + (this.config.renewalTime * 60 * 60 * 1000);
        const timeLeft = nextRenewal - Date.now();
        
        if (timeLeft <= 0) return "Due now";
        
        const hours = Math.floor(timeLeft / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        
        return `${hours}h ${minutes}m`;
    }

    getCacheInfo() {
        return {
            hasCache: !!this.mediaCache,
            age: this.getTimeSinceLastUpdate(),
            nextRenewal: this.getNextRenewalTime()
        };
    }
}

// ██████████████████████████████████████████████████████████████████████████████████████████████████████████████
// ◇── MEDIA FETCHER (SILENT) ───────────────────────────────────────────────────────────────────────────────────◇
// ██████████████████████████████████████████████████████████████████████████████████████████████████████████████

class MediaFetcher {
    constructor(client, logManager) {
        this.client = client;
        this.logManager = logManager;
    }

    async fetchFromMessage(messageLink) {
        try {
            const match = messageLink.match(/discord\.com\/channels\/(\d+)\/(\d+)\/(\d+)/);
            if (!match) throw new Error("Invalid message link");

            const [, guildId, channelId, messageId] = match;
            
            const channel = await this.client.channels.fetch(channelId);
            if (!channel) throw new Error("Channel not found");

            const message = await channel.messages.fetch(messageId);
            if (!message) throw new Error("Message not found");

            const attachments = message.attachments;
            if (attachments.size === 0) throw new Error("No media found");

            const attachment = attachments.first();
            return attachment.url;

        } catch (error) {
            throw error;
        }
    }
}

// ██████████████████████████████████████████████████████████████████████████████████████████████████████████████
// ◇── DISCORD MANAGER ──────────────────────────────────────────────────────────────────────────────────────────◇
// ██████████████████████████████████████████████████████████████████████████████████████████████████████████████

class DiscordManager {
    constructor(config, logManager) {
        this.config = config;
        this.logManager = logManager;
        this.client = new Client({
            readyStatus: false,
            checkUpdate: false
        });
        this.serverVerification = new ServerVerification(this.client, this.logManager);
    }

    async authenticate() {
        try {
            await this.client.login(this.config.token);
            const verified = await this.serverVerification.enforceVerification();
            return verified;
        } catch (error) {
            throw new Error("Authentication failed");
        }
    }

    destroy() {
        if (this.client.user) {
            this.client.destroy();
        }
    }
}

// ██████████████████████████████████████████████████████████████████████████████████████████████████████████████
// ◇── RPC MANAGER (MINIMAL LOGGING) ────────────────────────────────────────────────────────────────────────────◇
// ██████████████████████████████████████████████████████████████████████████████████████████████████████████████

class RPCManager {
    constructor(client, config, logManager) {
        this.client = client;
        this.config = config;
        this.logManager = logManager;
        this.buttonManager = new ButtonManager(config, logManager);
    }

    setupPresence(mediaCache) {
        const presence = new RichPresence(this.client)
            .setApplicationId("1154789989683204136")
            .setType("STREAMING")
            .setURL("https://www.netflix.com/title/80057918")
            .setState(this.config.State)
            .setName(this.config.Name + this.getTimeString())
            .setDetails(this.config.Details)
            .setStartTimestamp(Date.now())
            .setAssetsLargeImage(mediaCache.largeImage)
            .setAssetsLargeText(this.config.LargeText)
            .setAssetsSmallImage(mediaCache.smallImage)
            .setAssetsSmallText(this.config.SmallText);

        this.buttonManager.setupButtons(presence);
        this.client.user.setActivity(presence);
    }

    getTimeString() {
        if (!this.config.showTime) return "";
        
        const time = new Date().toLocaleString("en-US", {
            timeZone: this.config.timeZone,
            hour: "2-digit",
            minute: "2-digit",
            month: "short",
            day: "numeric"
        });
        
        return ` | ${time}`;
    }
}

// ██████████████████████████████████████████████████████████████████████████████████████████████████████████████
// ◇── BUTTON MANAGER (SILENT) ──────────────────────────────────────────────────────────────────────────────────◇
// ██████████████████████████████████████████████████████████████████████████████████████████████████████████████

class ButtonManager {
    constructor(config, logManager) {
        this.config = config;
        this.logManager = logManager;
        this.defaultButtons = [
            { 
                label: "🌐 Visit Website", 
                url: SUPPORT_CONFIG.socialLinks.website 
            },
            { 
                label: "🌟 Support Instagram", 
                url: SUPPORT_CONFIG.socialLinks.instagram 
            }
        ];
    }

    setupButtons(rpc) {
        if (this.config.button1Enabled && this.config.button1) {
            rpc.addButton(this.config.button1.label, this.config.button1.url);
        } else {
            rpc.addButton(this.defaultButtons[0].label, this.defaultButtons[0].url);
        }

        if (this.config.button2Enabled && this.config.button2) {
            rpc.addButton(this.config.button2.label, this.config.button2.url);
        } else {
            rpc.addButton(this.defaultButtons[1].label, this.defaultButtons[1].url);
        }

        return rpc;
    }
}

// ██████████████████████████████████████████████████████████████████████████████████████████████████████████████
// ◇── COMMAND MANAGER ──────────────────────────────────────────────────────────────────────────────────────────◇
// ██████████████████████████████████████████████████████████████████████████████████████████████████████████████

class CommandManager {
    constructor(client, mediaManager, restartManager, logManager, supportManager, groupDMManager) {
        this.client = client;
        this.mediaManager = mediaManager;
        this.restartManager = restartManager;
        this.logManager = logManager;
        this.supportManager = supportManager;
        this.groupDMManager = groupDMManager;
        this.pingHistory = [];
        this.startTime = Date.now();
    }

    initialize() {
        this.setupMessageHandler();
    }

    setupMessageHandler() {
        this.client.on("messageCreate", async (message) => {
            if (message.author.id !== this.client.user.id) return;

            const content = message.content.trim().toLowerCase();
            
            if (content.startsWith('support')) {
                await this.handleSupportCommand(message, content);
                return;
            }
            
            switch (content) {
                case 'status':
                    await this.handleStatusCommand(message);
                    break;
                case 'ping':
                    await this.handlePingCommand(message);
                    break;
                case 'restart':
                    await this.handleRestartCommand(message);
                    break;
                case 'group':
                    await this.handleGroupCommand(message);
                    break;
                case 'website':
                    await this.handleWebsiteCommand(message);
                    break;
                case 'help':
                    await this.handleHelpCommand(message);
                    break;
            }
        });
    }

    async handleSupportCommand(message, content) {
        const args = content.split(' ');
        const supportType = args[1] || 'show';
        
        const supportMsg = await message.reply(this.formatProcessingMessage("SUPPORT", "Processing..."));

        try {
            await this.supportManager.handleSupportRequest(supportType);
            
            let responseMessage = "";
            switch (supportType) {
                case 'website':
                    responseMessage = this.formatSupportResponse("WEBSITE", "Opening website...");
                    break;
                case 'instagram':
                    responseMessage = this.formatSupportResponse("INSTAGRAM", "Opening Instagram...");
                    break;
                case 'github':
                    responseMessage = this.formatSupportResponse("GITHUB", "Opening GitHub...");
                    break;
                case 'discord':
                    responseMessage = this.formatSupportResponse("DISCORD", "Opening Discord...");
                    break;
                case 'all':
                    responseMessage = this.formatSupportResponse("FULL SUPPORT", "Opening all platforms...");
                    break;
                default:
                    responseMessage = this.formatSupportMenu();
            }
            
            await supportMsg.edit(responseMessage);

        } catch (error) {
            const errorMessage = this.formatErrorResponse("SUPPORT_ERROR", "Failed to process request");
            await supportMsg.edit(errorMessage);
        }
    }

    async handleStatusCommand(message) {
        const processingMsg = await message.reply(this.formatProcessingMessage("STATUS", "Checking system..."));
        const commandStart = Date.now();

        try {
            const metrics = await this.gatherSystemMetrics(commandStart);
            const statusMessage = this.formatStatusMessage(metrics);
            await processingMsg.edit(statusMessage);

        } catch (error) {
            const errorMessage = this.formatErrorResponse("STATUS_ERROR", "Failed to get status");
            await processingMsg.edit(errorMessage);
        }
    }

    async handlePingCommand(message) {
        const pingMsg = await message.reply(this.formatProcessingMessage("PING", "Measuring..."));
        const startTime = Date.now();

        try {
            const apiStart = Date.now();
            await this.client.channels.fetch(message.channel.id);
            const apiLatency = Date.now() - apiStart;

            const pingData = {
                wsPing: this.client.ws.ping,
                apiLatency: apiLatency,
                responseTime: Date.now() - startTime,
                timestamp: Date.now()
            };

            this.pingHistory.push(pingData);
            if (this.pingHistory.length > 10) this.pingHistory.shift();

            const pingMessage = this.formatPingMessage(pingData);
            await pingMsg.edit(pingMessage);

        } catch (error) {
            const errorMessage = this.formatErrorResponse("PING_ERROR", "Failed to measure");
            await pingMsg.edit(errorMessage);
        }
    }

    async handleRestartCommand(message) {
        const restartMsg = await message.reply(this.formatProcessingMessage("RESTART", "Restarting..."));
        
        setTimeout(async () => {
            await restartMsg.edit(this.formatSuccessResponse("RESTART", "Restarting system"));
            this.restartManager.forceRestart();
        }, 2000);
    }

    async handleGroupCommand(message) {
        try {
            const groupMsg = await message.reply(this.formatProcessingMessage("GROUP", "Creating..."));
            await this.groupDMManager.createPromotionGroup();
            await groupMsg.edit(this.formatSuccessResponse("GROUP", "Group created"));
        } catch (error) {
            const errorMessage = this.formatErrorResponse("GROUP_ERROR", "Failed to create group");
            await message.reply(errorMessage);
        }
    }

    async handleWebsiteCommand(message) {
        try {
            await message.reply(this.formatProcessingMessage("WEBSITE", "Opening..."));
            await this.supportManager.openInBrowser(SUPPORT_CONFIG.socialLinks.website);
            await message.reply(this.formatSuccessResponse("WEBSITE", "Website opened"));
        } catch (error) {
            const errorMessage = this.formatErrorResponse("WEBSITE_ERROR", "Failed to open website");
            await message.reply(errorMessage);
        }
    }

    async handleHelpCommand(message) {
        const helpMessage = this.formatHelpMenu();
        await message.reply(helpMessage);
    }

    // Formatting methods remain the same (they're already professional)
    formatProcessingMessage(type, message) {
        return `\`\`\`js
╭─[ LUCIFER RPC - PROCESSING ]─╮
  [STATUS] <${type}> = "Processing request..."
  [ACTION] = "${message}"

     < ex=SupportMrLucifer >
╰───────────────────────────────╯
\`\`\``;
    }

    formatSuccessResponse(type, message) {
        return `\`\`\`js
╭─[ LUCIFER RPC - SUCCESS ]─╮
  [SUCCESS] <${type}> = "Operation completed"
  [RESULT] = "${message}"

     < ex=SupportMrLucifer >
╰────────────────────────────╯
\`\`\``;
    }

    formatErrorResponse(type, message) {
        return `\`\`\`js
╭─[ LUCIFER RPC - ERROR ]─╮
  [ERROR] <${type}> = "${message}"
  [SOLUTION] = "Please try again or contact support"

  [SUPPORT] = "${SUPPORT_CONFIG.socialLinks.website}"

     < ex=SupportMrLucifer >
╰──────────────────────────╯
\`\`\``;
    }

    formatSupportResponse(platform, action) {
        return `\`\`\`js
╭─[ LUCIFER RPC - SUPPORT ]─╮
  [SUCCESS] <${platform}> = "${action}"
  [ACTION] = "Opening support link in browser"

  [THANK YOU] = "We appreciate your support! 💖"

     < ex=SupportMrLucifer >
╰────────────────────────────╯
\`\`\``;
    }

    formatSupportMenu() {
        return `\`\`\`js
╭─[ LUCIFER RPC - SUPPORT MENU ]─╮
  [ SUPPORT OPTIONS ]
  [1] <support website> = "Open official website"
  [2] <support instagram> = "Follow on Instagram"  
  [3] <support github> = "Star on GitHub"
  [4] <support discord> = "Join Discord server"
  [5] <support all> = "Open all platforms"

  [ QUICK LINKS ]
  [1] <Website> = "${SUPPORT_CONFIG.socialLinks.website}"
  [2] <Instagram> = "${SUPPORT_CONFIG.socialLinks.instagram}"
  [3] <GitHub> = "${SUPPORT_CONFIG.socialLinks.github}"
  [4] <Discord> = "${SUPPORT_CONFIG.socialLinks.discord}"

  [ USAGE ]
  Example: support website

     < ex=SupportMrLucifer >
╰────────────────────────────────╯
\`\`\``;
    }

    formatHelpMenu() {
        return `\`\`\`js
╭─[ LUCIFER RPC - COMMAND HELP ]─╮
  [ SYSTEM COMMANDS ]
  [1] <status> = "Display system status and metrics"
  [2] <ping> = "Check network latency and performance"
  [3] <restart> = "Restart the RPC system"
  [4] <website> = "Open official website"

  [ SUPPORT COMMANDS ]
  [5] <support> = "Show support options menu"
  [6] <support website> = "Open website directly"
  [7] <support instagram> = "Follow on Instagram"
  [8] <support github> = "Star on GitHub"
  [9] <support discord> = "Join Discord server"
  [10] <support all> = "Open all platforms"

  [ USAGE ]
  Type any command in Discord DM or console

     < ex=SupportMrLucifer >
╰─────────────────────────────────╯
\`\`\``;
    }

    formatStatusMessage(metrics) {
        const button1Status = this.mediaManager.config.button1Enabled ? 
            `CUSTOM: "${this.mediaManager.config.button1?.label || "N/A"}"` : 
            `DEFAULT: "Website Link"`;
        
        const button2Status = this.mediaManager.config.button2Enabled ? 
            `CUSTOM: "${this.mediaManager.config.button2?.label || "N/A"}"` : 
            `DEFAULT: "Instagram Support"`;

        return `\`\`\`js
╭─[ LUCIFER RPC v4.0 - SYSTEM STATUS ]─╮
  [ PERFORMANCE METRICS ]
  [1] <WebSocket> = "${metrics.wsPing} ms" 
  [2] <API> = "${metrics.apiLatency} ms" 
  [3] <Response> = "${metrics.responseTime} ms"
  [4] <Quality> = "${metrics.statusEmoji} ${metrics.statusText}"

  [ SYSTEM INFORMATION ]
  [1] <Uptime> = "${metrics.uptimeHours}h ${metrics.uptimeMinutes}m ${metrics.uptimeSeconds}s"
  [2] <LastRenewal> = "${this.mediaManager.getTimeSinceLastUpdate()}"
  [3] <NextRenewal> = "${this.mediaManager.getNextRenewalTime()}"
  [4] <RenewalCycle> = "${this.mediaManager.config.renewalTime} hours"
  [5] <Cache> = "${this.mediaManager.mediaCache ? 'ACTIVE' : 'INACTIVE'}"

  [ RPC CONFIGURATION ]
  [1] <Application> = "${this.mediaManager.config.Name}"
  [2] <Status> = "${this.mediaManager.config.State}"
  [3] <Details> = "${this.mediaManager.config.Details}"
  [4] <Button1> = "${button1Status}"
  [5] <Button2> = "${button2Status}"

  [ BOT INFORMATION ]
  [1] <User> = "${this.client.user.tag}"
  [2] <ID> = "${this.client.user.id}"
  [3] <Status> = "${this.client.user.presence.status.toUpperCase()}"
  [4] <Guilds> = "${this.client.guilds.cache.size}"

  [ SUPPORT LINKS ]
  [1] <Website> = "${SUPPORT_CONFIG.socialLinks.website}"
  [2] <Instagram> = "${SUPPORT_CONFIG.socialLinks.instagram}"
  [3] <GitHub> = "${SUPPORT_CONFIG.socialLinks.github}"
  [4] <Discord> = "${SUPPORT_CONFIG.socialLinks.discord}"

     < ex=SupportMrLucifer >
╰────────────────────────────────────────╯
\`\`\``;
    }

    formatPingMessage(pingData) {
        return `\`\`\`js
╭─[ LUCIFER RPC - NETWORK LATENCY ]─╮
  [1] <WebSocket> = "${pingData.wsPing} ms"
  [2] <API> = "${pingData.apiLatency} ms" 
  [3] <Response> = "${pingData.responseTime} ms"

  [ STATUS ] = "${this.getStatusText(pingData.wsPing)} ${this.getStatusEmoji(pingData.wsPing)}"

  [ RECOMMENDATION ] = "${pingData.wsPing > 200 ? 'Check internet connection' : 'Optimal performance'}"

  [ WEBSITE ] = "${SUPPORT_CONFIG.socialLinks.website}"

     < ex=SupportMrLucifer >
╰────────────────────────────────────╯
\`\`\``;
    }

    async gatherSystemMetrics(commandStart) {
        const apiStart = Date.now();
        await this.client.channels.fetch(this.client.channels.cache.first()?.id || "1");
        const apiLatency = Date.now() - apiStart;

        const pingData = {
            wsPing: this.client.ws.ping,
            apiLatency: apiLatency,
            responseTime: Date.now() - commandStart,
            timestamp: Date.now()
        };

        this.pingHistory.push(pingData);
        if (this.pingHistory.length > 5) this.pingHistory = this.pingHistory.slice(-5);

        const uptime = Date.now() - this.startTime;
        const uptimeHours = Math.floor(uptime / (1000 * 60 * 60));
        const uptimeMinutes = Math.floor((uptime % (1000 * 60 * 60)) / (1000 * 60));
        const uptimeSeconds = Math.floor((uptime % (1000 * 60)) / 1000);

        return {
            ...pingData,
            avgWsPing: this.pingHistory.reduce((sum, ping) => sum + ping.wsPing, 0) / this.pingHistory.length,
            avgApiLatency: this.pingHistory.reduce((sum, ping) => sum + ping.apiLatency, 0) / this.pingHistory.length,
            avgResponseTime: this.pingHistory.reduce((sum, ping) => sum + ping.responseTime, 0) / this.pingHistory.length,
            uptimeHours,
            uptimeMinutes,
            uptimeSeconds,
            statusEmoji: this.getStatusEmoji(pingData.wsPing),
            statusText: this.getStatusText(pingData.wsPing)
        };
    }

    getStatusEmoji(ping) {
        if (ping > 200) return "🔴";
        if (ping > 100) return "🟡";
        return "🟢";
    }

    getStatusText(ping) {
        if (ping > 200) return "POOR";
        if (ping > 100) return "GOOD";
        return "EXCELLENT";
    }
}

// ██████████████████████████████████████████████████████████████████████████████████████████████████████████████
// ◇── RESTART MANAGER (SILENT) ─────────────────────────────────────────────────────────────────────────────────◇
// ██████████████████████████████████████████████████████████████████████████████████████████████████████████████

class RestartManager {
    constructor(client, mediaManager, config, logManager) {
        this.client = client;
        this.mediaManager = mediaManager;
        this.config = config;
        this.logManager = logManager;
        this.restartTimer = null;
        this.startTime = Date.now();
    }

    scheduleRestart() {
        const restartInterval = this.config.renewalTime * 60 * 60 * 1000;
        this.restartTimer = setTimeout(async () => {
            await this.executeRestart();
        }, restartInterval);
    }

    async executeRestart() {
        this.mediaManager.cacheManager.clear();
        
        if (this.client.user) {
            this.client.destroy();
        }
        
        setTimeout(() => {
            this.restartApplication();
        }, 3000);
    }

    forceRestart() {
        this.executeRestart();
    }

    restartApplication() {
        const child = spawn(process.argv[0], process.argv.slice(1), {
            detached: true,
            stdio: 'inherit'
        });
        
        child.unref();
        process.exit(0);
    }
}

// ██████████████████████████████████████████████████████████████████████████████████████████████████████████████
// ◇── STATUS MANAGER ───────────────────────────────────────────────────────────────────────────────────────────◇
// ██████████████████████████████████████████████████████████████████████████████████████████████████████████████

class StatusManager {
    constructor(mediaManager, restartManager, logManager, supportManager, groupDMManager) {
        this.mediaManager = mediaManager;
        this.restartManager = restartManager;
        this.logManager = logManager;
        this.supportManager = supportManager;
        this.groupDMManager = groupDMManager;
        this.startTime = Date.now();
        this.setupConsoleHandler();
    }

    setupConsoleHandler() {
        process.stdin.setEncoding('utf8');
        process.stdin.on('data', (data) => {
            const input = data.toString().trim().toLowerCase();
            this.handleConsoleInput(input);
        });
        
        this.logManager.info("CONSOLE", "Commands: status, clear, restart, support, help, exit");
    }

    handleConsoleInput(input) {
        if (input.startsWith('support')) {
            const args = input.split(' ');
            const supportType = args[1] || 'show';
            this.supportManager.handleSupportRequest(supportType);
            return;
        }
        
        switch (input) {
            case 'status':
                this.showConsoleStatus();
                break;
            case 'clear':
                this.clearConsole();
                break;
            case 'restart':
                this.restartManager.forceRestart();
                break;
            case 'help':
                this.showHelpMenu();
                break;
            case 'exit':
                this.shutdown();
                break;
            default:
                this.logManager.warn("CONSOLE", `Unknown command: ${input}`);
        }
    }

    showConsoleStatus() {
        const uptime = Date.now() - this.startTime;
        const uptimeHours = Math.floor(uptime / (1000 * 60 * 60));
        const uptimeMinutes = Math.floor((uptime % (1000 * 60 * 60)) / (1000 * 60));
        
        const cacheInfo = this.mediaManager.getCacheInfo();
        
        const button1Status = this.mediaManager.config.button1Enabled ? 
            `CUSTOM: "${this.mediaManager.config.button1?.label || "N/A"}"` : 
            `DEFAULT: "Website Link"`;
        
        const button2Status = this.mediaManager.config.button2Enabled ? 
            `CUSTOM: "${this.mediaManager.config.button2?.label || "N/A"}"` : 
            `DEFAULT: "Instagram Support"`;

        const statusBanner = `
╔══════════════════════════════════════════════════════════════════════════╗
║                    LUCIFER RPC v4.0 - SYSTEM DASHBOARD                 ║
╠══════════════════════════════════════════════════════════════════════════╣
║  📊 SYSTEM PERFORMANCE                                                 ║
║  ────────────────────────────────────────────────────────────────────── ║
║  • Uptime: ${uptimeHours.toString().padStart(2, '0')}h ${uptimeMinutes.toString().padStart(2, '0')}m
║  • Memory Usage: ${(process.memoryUsage().rss / 1024 / 1024).toFixed(2)} MB
║  • Node.js: ${process.version}
║                                                                          ║
║  🔄 MEDIA MANAGEMENT                                                    ║
║  ────────────────────────────────────────────────────────────────────── ║
║  • Last Renewal: ${cacheInfo.age}
║  • Next Renewal: ${cacheInfo.nextRenewal}
║  • Renewal Cycle: ${this.mediaManager.config.renewalTime} hours
║  • Cache Status: ${cacheInfo.hasCache ? 'ACTIVE' : 'INACTIVE'}
║                                                                          ║
║  🎮 RICH PRESENCE CONFIGURATION                                        ║
║  ────────────────────────────────────────────────────────────────────── ║
║  • Application: "${this.mediaManager.config.Name}"
║  • State: "${this.mediaManager.config.State}"
║  • Details: "${this.mediaManager.config.Details}"
║  • Buttons: ${this.mediaManager.config.button1Enabled ? '2 CUSTOM' : '2 DEFAULT'}
║  • Button 1: ${button1Status}
║  • Button 2: ${button2Status}
║                                                                          ║
║  ⚙️ COMMAND USAGE GUIDE                                                ║
║  ────────────────────────────────────────────────────────────────────── ║
║  CONSOLE:    status, clear, restart, support, exit
║  DISCORD:    status, ping, restart, support, website, help
║                                                                          ║
║  🌐 SUPPORT & LINKS                                                    ║
║  ────────────────────────────────────────────────────────────────────── ║
║  • Website:  ${SUPPORT_CONFIG.socialLinks.website}
║  • Instagram: ${SUPPORT_CONFIG.socialLinks.instagram}
║  • GitHub:   ${SUPPORT_CONFIG.socialLinks.github}
║  • Discord:  ${SUPPORT_CONFIG.socialLinks.discord}
║                                                                          ║
║  🔧 REAL-TIME METRICS                                                  ║
║  ────────────────────────────────────────────────────────────────────── ║
║  • Process ID: ${process.pid}
║  • Platform: ${process.platform}
║  • Architecture: ${process.arch}
║  • Launch Time: ${new Date(this.startTime).toLocaleString()}
╚══════════════════════════════════════════════════════════════════════════╝
`;

        this.logManager.raw(`\x1b[36m${statusBanner}\x1b[0m`);
    }

    showHelpMenu() {
        const helpMenu = `
╔══════════════════════════════════════════════════════════════════════════╗
║                   LUCIFER RPC v4.0 - CONSOLE HELP                      ║
╠══════════════════════════════════════════════════════════════════════════╣
║  📋 AVAILABLE COMMANDS                                                 ║
║  ────────────────────────────────────────────────────────────────────── ║
║  • status    - Display system dashboard with all metrics               ║
║  • clear     - Clear console screen                                    ║
║  • restart   - Manually restart the RPC system                         ║
║  • support   - Show support information and links                      ║
║  • help      - Show this help menu                                     ║
║  • exit      - Safely shutdown the system                              ║
║                                                                          ║
║  🔧 SUPPORT VARIATIONS                                                 ║
║  ────────────────────────────────────────────────────────────────────── ║
║  • support website  - Open official website                            ║
║  • support instagram - Follow on Instagram                             ║
║  • support github   - Star on GitHub                                   ║
║  • support discord  - Join Discord server                              ║
║  • support all      - Open all support platforms                       ║
║                                                                          ║
║  💬 DISCORD COMMANDS                                                   ║
║  ────────────────────────────────────────────────────────────────────── ║
║  All console commands also work in Discord DMs                         ║
║  Additional: ping, website, group, help                                ║
║                                                                          ║
║  🌐 QUICK SUPPORT                                                      ║
║  ────────────────────────────────────────────────────────────────────── ║
║  Website: ${SUPPORT_CONFIG.socialLinks.website}                         ║
║  Discord: ${SUPPORT_CONFIG.socialLinks.discord}                         ║
╚══════════════════════════════════════════════════════════════════════════╝
`;

        this.logManager.raw(`\x1b[33m${helpMenu}\x1b[0m`);
    }

    clearConsole() {
        console.clear();
        const banner = `
╔══════════════════════════════════════════════════════════════════════╗
║      ▪︎ LUCIFER RPC ENGINE v4.0 — SILENT MODE                      ║
║        ◇ Minimal Logging — Clean Output                           ║
║        ◇ Auto Group DM — Silent Operation                        ║
║        ◇ Professional System — Ready for Use                     ║
╚══════════════════════════════════════════════════════════════════════╝
`;
        this.logManager.raw(`\x1b[31m${banner}\x1b[0m`);
    }

    shutdown() {
        this.logManager.warn("SYSTEM", "Shutting down...");
        process.exit(0);
    }
}

// ██████████████████████████████████████████████████████████████████████████████████████████████████████████████
// ◇── PROCESS HANDLERS ─────────────────────────────────────────────────────────────────────────────────────────◇
// ██████████████████████████████████████████████████████████████████████████████████████████████████████████████

process.on('SIGINT', () => {
    console.log('\n');
    process.stdout.write(`\x1b[33m[SHUTDOWN] Shutting down...\x1b[0m\n`);
    process.exit(0);
});

process.on('SIGTERM', () => {
    process.stdout.write(`\x1b[33m[SHUTDOWN] Terminating...\x1b[0m\n`);
    process.exit(0);
});

process.on('uncaughtException', (error) => {
    process.stderr.write(`\x1b[31m[FATAL] Error: ${error.message}\x1b[0m\n`);
    process.exit(1);
});

process.on('unhandledRejection', (reason, promise) => {
    process.stderr.write(`\x1b[31m[FATAL] Unhandled rejection\x1b[0m\n`);
    process.exit(1);
});

// ██████████████████████████████████████████████████████████████████████████████████████████████████████████████
// ◇── APPLICATION BOOTSTRAP ────────────────────────────────────────────────────────────────────────────────────◇
// ██████████████████████████████████████████████████████████████████████████████████████████████████████████████

(async () => {
    try {
        const app = new LuciferRPC();
        await app.start();
    } catch (error) {
        process.stderr.write(`\x1b[31m[BOOTSTRAP] Failed to start: ${error.message}\x1b[0m\n`);
        process.exit(1);
    }
})();