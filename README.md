# 职业小屋 Career House

> 一个像玩游戏一样打造职业名片的小屋平台，每点亮一个技能、完成一个项目，小屋就会变得更完整。

## 功能亮点

- 昵称一键登录 / 手机号登录
- 多账号数据隔离：同一浏览器切换账号，各自小屋内容互不覆盖
- 两种小屋风格：简约浪漫小屋 / 像素方块小屋
- 4 步创建向导：基础信息、技能标签、项目经历、职业故事
- 成就徽章、数据仪表盘、全景展示、分享卡片
- 纯前端 + localStorage，无需后端即可运行

## 本地运行

```bash
cd career-house
python -m http.server 8000
```

浏览器打开 `http://localhost:8000` 即可体验。建议通过本地服务器访问，以保证页面跳转正常。

## 项目结构

```text
career-house/
├── index.html            # 入口页面，自动跳转 pages/index.html
├── colors_and_type.css   # 设计变量与通用工具类
├── house-builder.js      # 小屋渲染与多用户存储工具
└── pages/
    ├── index.html        # 首页
    ├── login.html        # 登录
    ├── theme.html        # 选择小屋风格
    ├── create.html       # 创建向导
    ├── house.html        # 我的小屋
    ├── badges.html       # 成就徽章
    ├── dashboard.html    # 数据仪表盘
    ├── house-showcase.html # 全景展示
    └── share.html        # 分享
```

## ⚠️ 特别声明

本项目采用 **GPL-3.0 许可证**，任何人都不能拿去闭源商用。