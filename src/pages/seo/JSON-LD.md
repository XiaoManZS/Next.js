---
layout: ../../layouts/TutorialLayout.astro
title: JSON-LD
description: 在 Next.js App Router 中配置 JSON-LD 结构化数据
---

# JSON-LD

JSON-LD（JSON for Linked Data）是一种用于表达结构化数据的 JSON 格式。  
它能帮助搜索引擎和 AI 更准确理解页面内容（例如商品、文章、组织、人物、活动等实体），从而提升页面在检索系统中的可理解性。

在 Next.js（App Router）里，推荐在 `layout.tsx` 或 `page.tsx` 中，直接输出一个原生 `<script type="application/ld+json">` 标签来注入 JSON-LD。

### JSON-LD 的基础结构

一个最小可用示例如下：

```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://example.com/people/zhangsan",
  "name": "张三",
  "age": 25
}
```

字段说明：

- `@context`：通常使用 `https://schema.org`
- `@type`：实体类型（如 `Product`、`Article`、`Organization`）
- 其他字段：根据具体类型补充（如商品名称、价格、作者、发布时间等）

### 在 Next.js 中添加 JSON-LD

下面是一个页面级示例（以商品页为例）：

```tsx
// app/products/[id]/page.tsx
export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = await getProduct(id);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    image: product.image,
    description: product.description,
  };

  return (
    <section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
        }}
      />
      <h1>{product.name}</h1>
    </section>
  );
}
```

### 为什么要做 `.replace(/</g, '\\u003c')`

`JSON.stringify` 本身不会自动处理所有潜在注入风险。  
当结构化数据里包含不可信字符串时，建议至少将 `<` 替换为 `\u003c`，降低 XSS 注入风险。

```ts
JSON.stringify(jsonLd).replace(/</g, '\\u003c');
```

如果你们团队有统一的安全序列化方案，也可以采用社区库（如 `serialize-javascript`）或公司内部安全工具。

### TypeScript 类型约束（推荐）

为避免字段名拼错、类型不匹配，建议使用 `schema-dts` 做类型提示：

```tsx
import type { Product, WithContext } from 'schema-dts';

const jsonLd: WithContext<Product> = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Next.js Sticker',
  image: 'https://nextjs.org/imgs/sticker.png',
  description: 'Dynamic at the speed of static.',
};
```

### 常见问题

#### 1）用 `next/script` 还是原生 `<script>`？

JSON-LD 不是要执行的脚本代码，而是结构化数据声明。  
在这个场景里，官方建议使用原生 `<script type="application/ld+json">`。

#### 2）放在 `layout.tsx` 还是 `page.tsx`？

- 放在 `layout.tsx`：适合站点级、栏目级的通用结构化数据
- 放在 `page.tsx`：适合文章、商品详情这类强依赖当前页面数据的实体

#### 3）如何验证配置是否有效？

可使用以下工具进行校验：

- Google Rich Results Test：检查可用于 Google 富结果的结构化数据
- Schema Markup Validator：通用 Schema.org 结构校验

### 实践建议

- 使用与页面真实内容一致的字段，避免“标注内容”和“页面内容”不一致
- 动态页面优先在服务端生成 JSON-LD，保证首屏 HTML 可被爬虫读取
- 关键实体（文章、商品、组织）优先完善，再逐步扩展更多 schema 类型