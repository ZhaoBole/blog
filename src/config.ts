import type {
	AntiLeechConfig,
	ExpressiveCodeConfig,
	ImageFallbackConfig,
	LicenseConfig,
	NavBarConfig,
	ProfileConfig,
	SiteConfig,
	UmamiConfig,
} from "./types/config";
import { LinkPreset } from "./types/config";

export const siteConfig: SiteConfig = {
	title: "MW的博客",
	subtitle: "分享网络技术、开发教程、软件资源",
	description:
		"分享网络技术、开发教程、软件资源",
	keywords: [],
	// 关键字
	lang: "zh_CN",
	// 语言：'en', 'zh_CN', 'zh_TW', 'ja', 'ko', 'es', 'th'
	themeColor: {
		hue: 225,
		// 主题颜色的默认色调，从 0 到 360。红色：0，青色：200，青色：250，粉色：345
		fixed: true,
		// 为访客隐藏主题颜色选择器
		forceDarkMode: true,
		// 强制黑暗模式并隐藏主题切换器
	},
	// 轮播图配置
	banner: {
		enable: false,
		src: "/xinghui.avif",
		// 相对于/src目录。如果以“/”开头，则相对于 /public 目录
		position: "center",
		// 相当于object-position，只支持'top', 'center', 'bottom'。默认为“中心”
		credit: {
			enable: true,
			// 显示横幅图像的信用文本
			text: "Pixiv @chokei",
			//要显示的信用文本
			url: "https://img.micostar.cc/random",
			//（可选）原始艺术作品或艺术家页面的 URL 链接
		},
	},
	// 背景图配置
	background: {
		enable: false,
		// 是否启用背景图像
		src: "https://img.micostar.cc/random",
		// 背景图API地址
		position: "center",
		// 背景位置：'顶部'、'中心'、'底部'
		size: "cover",
		// 背景大小：“覆盖”、“包含”、“自动”
		repeat: "no-repeat",
		// 背景重复：'no-repeat'、'repeat'、'repeat-x'、'repeat-y'
		attachment: "fixed",
		// 背景附件: 'fixed', 'scroll', 'local'
		opacity: 0.5,
		// 背景透明度 (0-1)
	},
	// 目录配置
	toc: {
		enable: true,
		// 在帖子右侧显示目录
		depth: 2,
		// 表中显示的最大标题深度，从 1 到 3
	},
	// 网站图标配置
	favicon: [
		// 将此数组留空以使用默认的图标
		{
			src: "http://q.qlogo.cn/headimg_dl?dst_uin=2357885308&spec=640&img_type=jpg",
			// 图标的路径，相对于 /public 目录
			// theme: 'light', // （可选）'light' 或 'dark'，仅当您有不同的浅色和深色模式图标时才设置
			// size: '32x32', // （可选）图标的大小，仅当您有不同大小的图标时才设置
		},
	],
	// 应用配置
	apps: [
		{
			name: "私人AI网站",
			url: "https://ai0728.com.cn/",
			image: "/favicon/openwebui.webp",
			description: "智能对话与创作助手",
			external: true,
		},
		{
			name: "私人云盘",
			url: "https://cloudrunmax.top/",
			image: "/favicon/cloudreve.webp",
			description: "内容管理入口",
			external: true,
		},
		{
			name: "私人图床",
			url: "https://image.cloudrunmax.top/",
			image: "/favicon/imagebed.webp",
			description: "利用CloudflareR2搭建的私人图床",
			external: true,
		},
		{
			name: "私人AI绘图",
			url: "https://aiimage.cloudrunmax.top/",
			image: "/favicon/aiimage.webp",
			description: "利用CloudflareWorker搭建的私人AI绘图",
			external: true,
		},
		{
			name: "私人AI提示词",
			url: "https://aiprompt.ai0728.com.cn/",
			image: "/favicon/aiprompt.webp",
			description: "个人研究的较棒AI提示词集合",
			external: true,
		},
		{
			name: "提示词优化",
			url: "https://prompt.micostar.cc",
			image: "/favicon/prompts.webp",
			description: "AI 提示词一键优化工具",
			external: true,
		},
	],
};
// 导航栏配置
export const navBarConfig: NavBarConfig = {
	links: [
		LinkPreset.Home,
		LinkPreset.Archive,
		LinkPreset.Friends,
		LinkPreset.Apps,
		LinkPreset.Donate,
		LinkPreset.Works,
		{
			name: "数据",
			children: [
				LinkPreset.Stats,
				LinkPreset.Status,
				LinkPreset.Monitor,
			],
		},
	],
};
// 个人信息配置
export const profileConfig: ProfileConfig = {
	avatar: "http://q.qlogo.cn/headimg_dl?dst_uin=2357885308&spec=640&img_type=jpg",
	// 相对于/src目录。如果以“/”开头，则相对于 /public 目录
	name: "MW",
	bio: ["北冥有鱼，其名为鲲"],
	links: [
		{
			name: "邮箱",
			icon: "fa6-solid:envelope",
			url: "链接",
		},
		{
			name: "微信",
			icon: "fa6-brands:weixin",
			url: "链接",
		},
		{
			name: "QQ",
			icon: "fa6-brands:qq",
			url: "链接",
		},
	],
};
// 协议配置
export const licenseConfig: LicenseConfig = {
	enable: true,
	name: "CC BY-NC-SA 4.0",
	url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
};
//图床配置
export const imageFallbackConfig: ImageFallbackConfig = {
	enable: false,
	originalDomain: "img.micostar.cc",
	// 主力图床 (新项目)
	fallbackDomain: "image.cloudrunmax.top",
	// R2 备用图床 (旧项目)
};
// umami统计配置
export const umamiConfig: UmamiConfig = {
	enable: false,
	baseUrl: "https://umami.micostar.cc",
	shareId: "X9ZZZ5l2xErS44Rc",
	timezone: "Asia/Shanghai",
};
// 防盗链/域名保护配置
export const antiLeechConfig: AntiLeechConfig = {
	enable: false,
	officialSites: [{ url: "https://blog.mwzbl.qzz.io", name: "主站" }],
	debug: false,
	warningTitle: "⚠️ 域名安全警告",
	warningMessage:
		"您可能正在访问非官方网站，存在安全风险！建议跳转到官方网站。",
};
// ga统计配置
export const googleAnalyticsConfig = {
	enable: true,
	measurementId: "G-VB9ZR2C3QX",
};
// 代码高亮配置
export const expressiveCodeConfig: ExpressiveCodeConfig = {
	theme: "github-dark",
};
