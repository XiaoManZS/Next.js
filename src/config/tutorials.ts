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
        title: '设置元数据',
        icon: '🏷️',
        items: [
            {
                title: '静态元数据对象',
                path: '/tutorials/static-metadata',
                duration: '15 分钟',
                level: '初级',
                icon: '📝'
            },
            {
                title: '动态 generateMetadata',
                path: '/tutorials/dynamic-metadata',
                duration: '20 分钟',
                level: '中级',
                icon: '🔄'
            }
        ]
    },
    {
        title: '配置',
        icon: '🔧',
        items: [
            {
                title: 'next.config',
                path: '/tutorials/next.config',
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
                path: '/tutorials/authentication',
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
                title: '服务端 API',
                path: '/tutorials/api-routes',
                duration: '30 分钟',
                level: '中级',
                icon: '🔌'
            },
            {
                title: 'ORM',
                path: '/tutorials/orm',
                duration: '30 分钟',
                level: '中级',
                icon: '🔌'
            },
            {
                title:'AI集成',
                path: '/tutorials/ai',
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

