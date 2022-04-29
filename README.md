![Github Stars](https://img.shields.io/github/stars/nottmayank/top.gg-vote-tracker?style=for-the-badge&logo=appveyor)
![GitHub issues](https://img.shields.io/github/issues-raw/nottmayank/top.gg-vote-tracker?style=for-the-badge&logo=appveyor)

# 〽 Top.gg Vote Tracker

Best and simple way to track your [Top.gg](https://top.gg/) votes
============================

## 🚀 Getting Started
* Must have VPS server, you can also use replit, heroku etc
* Make sure you have Node v16x installed on your PC. To check node.js version:
```
node -v
```
* If you do not have Node installed in your PC, you can install it from [here](https://nodejs.org/en/download/)
* Make sure Git is installed on your PC or download ZIP file or directly fork to your server
 ============================
 
## 💨 Insallation
* Make sure Git is installed on your PC or download ZIP file or directly fork to your server
```
git clone https://github.com/nottmayank/top.gg-vote-tracker
cd top.gg-vote-tracker
npm install
```
-------------------------------------------

## 🧠 Configuration
* Create an application from Discord's developer portal [here]()
![Create application](https://cdn.discordapp.com/attachments/880008934226800670/969252288667476018/unknown.png)
* Go to Bot and click on Add Bot
![Add Bot](https://cdn.discordapp.com/attachments/880008934226800670/969252722979246150/unknown.png)
* Now open ```config.js``` file in any Text editor
![Config](https://cdn.discordapp.com/attachments/880008934226800670/969253264069652490/unknown.png)
* Add your Bot's token in ```token: "Your bot's token here"``` which you got from Developer portal
* Replace passward/port according to your need
## 📑 Vote logs
* Logs are of two type, type "1" will send message to given channel ID whereas type "2" will send webhook
* How to get Channel ID [click here](https://turbofuture.com/internet/Discord-Channel-ID)
* How to get webhook ID and TOKEN [click here](https://docs.gitlab.com/ee/user/project/integrations/discord_notifications.html)
## 🌟 Top.gg Configuration
* Go to your Bot's dashboard and click Webhooks
![Top.gg](https://cdn.discordapp.com/attachments/880008934226800670/969255947019096074/unknown.png)
* Add your webhook URL; If you're using VPS the URL will be **http://your_vps_ip:port/webhook** for replit and heroku read there docs 🙂
* Authorization will be the passward which you entered in ```config.js```
![Looks](https://cdn.discordapp.com/attachments/880008934226800670/969257060472594493/unknown.png)
* Now click save and run Test
* ============================
* 
## 💫 Features
| Feature           | Has                                                            |
| ----------------- | ------------------------------------------------------------------ |
| Easy to use | ✅  |
| Open Source | ✅  |
| Runs on private webhook server | ✅  |
| Fetches user from Discord's API | ✅  |

## 💁‍♂️ Support
* For any kind of help you can contact me on [Discord](https://discord.com/users/506339635103006721) FrenZy#1320
