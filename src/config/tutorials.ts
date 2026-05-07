// 教程菜单配置
export interface TutorialItem {
    title: string;
    path: string;
    duration?: string;
    level?: '初级' | '中级' | '高级';
    icon?: string;
}

export interface TutorialSection {
    title: string;
    icon?: string;
    items: TutorialItem[];
}

export const tutorialSections: TutorialSection[] = [
    {
        title: '入门',
        items: [
            {
                title: '开始使用',
                path: '/tutorials/getting-started',
                duration: '5 分钟',
                level: '初级',
                icon: '🚀'
            },
            {
                title: '项目搭建',
                path: '/tutorials/project-structure',
                duration: '10 分钟',
                level: '初级',
                icon: '🏠'
            }
        ]
    },
    {
        title: '路由',
        icon: '🔀',
        items: [
            {
                title: 'App Router',
                path: '/tutorials/static-routes',
                duration: '15 分钟',
                level: '初级',
                icon: '📄'
            },
            {
                title: '路由导航',
                path: '/tutorials/route-navigation',
                duration: '20 分钟',
                level: '初级',
                icon: '🧭'
            },
            {
                title: '动态路由',
                path: '/tutorials/dynamic-routes',
                duration: '25 分钟',
                level: '中级',
                icon: '⚡'
            },
            {
                title: '平行路由',
                path: '/tutorials/nested-routes',
                duration: '20 分钟',
                level: '初级',
                icon: '🗂️'
            },
            {
                title: '路由组',
                path: '/tutorials/route-groups',
                duration: '15 分钟',
                level: '中级',
                icon: '📦'
            },
            {
                title: '路由处理',
                path: '/tutorials/route-handling',
                duration: '15 分钟',
                level: '中级',
                icon: '🔀'
            }
        ]
    },
    {
        title:'AI集成',
        items: [
            {
                title: 'AI集成',
                path: '/tutorials/ai',
                duration: '30 分钟',
                level: '中级',
                icon: '🤖'
            }
        ]
    },
    {
        title: 'Proxy',
        icon: '🌐',
        items: [
            {
                title: 'Proxy代理',
                path: '/tutorials/proxy',
                duration: '25 分钟',
                level: '中级',
                icon: '🌐'
            }
        ]
    },
    {
        title: '样式',
        icon: '🎨',
        items: [
            {
                title: 'CSS方案',
                path: '/tutorials/tailwindcss',
                duration: '30 分钟',
                level: '初级',
                icon: '🎨'
            }
        ]
    },
    {
        title: '渲染方式',
        icon: '⚙️',
        items: [
            {
                title: '渲染方式概览',
                path: '/tutorials/rendering-basics',
                duration: '15 分钟',
                level: '初级',
                icon: '🖥️'
            },
            {
                title: 'RSC',
                path: '/tutorials/rsc',
                duration: '15 分钟',
                level: '初级',
                icon: '🖥️'
            },
            {
                title: 'Server Components',
                path: '/tutorials/server-components',
                duration: '30 分钟',
                level: '中级',
                icon: '🖥️'
            },
            {
                title: 'Client Components',
                path: '/tutorials/client-components',
                duration: '25 分钟',
                level: '中级',
                icon: '💻'
            },
            {
                title: 'Cache Components',
                path: '/tutorials/cache-components',
                duration: '25 分钟',
                level: '中级',
                icon: '💾'
            }
        ]
    },
    {
        title: '缓存',
        icon: '💾',
        items: [
            {
                title: '缓存策略',
                path: '/tutorials/cache',
                duration: '35 分钟',
                level: '中级',
                icon: '💾'
            }
        ]
    },
    {
        title: '内置组件',
        icon: '🖼️',
        items: [
            {
                title: 'Image组件',
                path: '/tutorials/image',
                duration: '35 分钟',
                level: '中级',
                icon: '🖼️'
            },
            {
                title: 'font字体',
                path: '/tutorials/font',
                duration: '20 分钟',
                level: '中级',
                icon: '🔤'
            },
            {
                title: 'Script脚本  ',
                path: '/tutorials/script',
                duration: '10 分钟',
                level: '中级',
                icon: '📄'
            }
        ]
    },
    {
        title:"静态导出SSG",
        icon: '🔄',
        items: [
            {
                title: '静态导出SSG',
                path: '/tutorials/ssg',
                duration: '20 分钟',
                level: '中级',
                icon: '🔄'
            },
            {
                title: 'MDX',
                path: '/tutorials/mdx',
                duration: '20 分钟',
                level: '中级',
                icon: '📝'
            }
        ]
    },
    {
        title: 'Server Action',
        icon: '⚡',
        items: [
            {
                title: '服务器函数',
                path: '/tutorials/server-actions',
                duration: '30 分钟',
                level: '中级',
                icon: '⚙️'
            }
        ]
    },
    {
        title: 'SEO优化',
        icon: '🏷️',
        items: [
            {
                title: 'SEO介绍',
                path: '/seo/introduce',
                duration: '15 分钟',
                level: '初级',
                icon: '📝'
            },
            {
                title: 'Google搜索原理',
                path: '/seo/google-reptile',
                duration: '15 分钟',
                level: '初级',
                icon: '📝'
            },
            {
                title: 'robots.txt',
                path: '/seo/robots',
                duration: '15 分钟',
                level: '初级',
                icon: '📝'
            },
            {
                title: 'sitemap.xml',
                path: '/seo/sitemap',
                duration: '15 分钟',
                level: '初级',
                icon: '📝'
            },
            {
                title: 'TDK',
                path: '/seo/TDK',
                duration: '15 分钟',
                level: '初级',
                icon: '📝'
            },
            {
                title: 'JSON-LD',
                path: '/seo/JSON-LD',
                duration: '15 分钟',
                level: '初级',
                icon: '📝'
            },
            {
                title: 'Open Graph',
                path: '/seo/openGraph',
                duration: '15 分钟',
                level: '初级',
                icon: '📝'
            },
            {
                title: 'Web Vitals',
                path: '/seo/web-vitals',
                duration: '15 分钟',
                level: '初级',
                icon: '📝'
            },
            
        ]
    },
    {
        title: '配置',
        icon: '🔧',
        items: [
            {
                title: '环境变量',
                path: '/env/environment',
                duration: '30 分钟',
                level: '中级',
                icon: '🔑'
            },
            {
                title: '国际化',
                path: '/tutorials/internationalization',
                duration: '30 分钟',
                level: '中级',
                icon: '🌐'
            },
            {
                title: 'next.config',
                path: '/tutorials/config',
                duration: '30 分钟',
                level: '中级',
                icon: '🔧'
            }
        ]
    },
    {
        title: 'Auth 登录权限',
        icon: '🔐',
        items: [
            {
                title: '身份验证',
                path: '/auth/better',
                duration: '40 分钟',
                level: '高级',
                icon: '🔑'
            }
        ]
    },
    {
        title: '服务端操作',
        icon: '🔌',
        items: [
            {
                title: 'Hono.js + Next.js',
                path: '/server/hono',
                duration: '30 分钟',
                level: '中级',
                icon: '🔌'
            },
            {
                title: 'ORM',
                path: '/server/orm',
                duration: '30 分钟',
                level: '中级',
                icon: '🔌'
            },
            {
                title:'其他',
                path: '/server/others',
                duration: '30 分钟',
                level: '中级',
                icon: '🔌'
            }
        ]
    },
    {
        title: '部署',
        icon: '📦',
        items: [
            {
                title: '项目部署',
                path: '/tutorials/deployment',
                duration: '35 分钟',
                level: '中级',
                icon: '📦'
            }
        ]
    }
];

