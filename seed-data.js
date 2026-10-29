// seed-data.js — 2026-10-29 安全改造（A3）：原种子数据已整体移除。
// 原因：原文件含联系人姓名/微信名/手机号、微信群名单、报备后台账号密码等敏感信息，
// 且曾以明文形式存在于公开仓库历史中（相关后台密码已要求修改，旧令牌已吊销）。
// 职责移交：「新设备首次初始化」由「载入云端」（加密快照 workdash_full）完全承担。
// 本骨架保留原变量名与空结构，project.html / product.html 的引用无需改动，
// 首次访问显示空档案即为期望行为。
const SEED_ARCHIVES=[];
const SEED_PRODUCTS={stock:[],broadband:[]};
