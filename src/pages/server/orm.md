---
layout: ../../layouts/TutorialLayout.astro
title: ORM
description: ORM
---

# ORM框架(Object-Relational Mapping)

在传统开发模式中，我们需要把数据存储到`数据库`，所以需要通过SQL语句来进行操作，例如`查询` `新增` `修改` `删除`等操作，但是SQL语句太多了，还比较繁琐，所以就有了ORM框架。

ORM框架简单来说就是让我们通过熟悉的语法来操作数据库，我们可以直接使用面向对象的方式来操作数据库，ORM会把我们的操作映射成SQL语句，然后执行。

面向对象查询:

```ts
const user = await this.prisma.user.findUnique({
    where: {
        id: 1
    },
    select: {
        id: true,
        name: true,
        email: true
    }
})
console.log(user)
```

SQL查询:

```sql
SELECT id, name, email FROM users WHERE id = 1
```

### Prisma

<img src="/src/assets/images/orm/prisma.svg" width="80" height="80" alt="PostgreSQL" />

ORM框架比较多，这里我选择使用`Prisma`，因为`Prisma`是`TypeScript`优先的ORM框架，并且支持多种数据库，包括`MySQL` `PostgreSQL` `SQLite` `MongoDB`等。它以其出色的性能、类型安全性以及与 GraphQL 和 REST API 的集成而闻名

>注：我们当前使用的prisma版本是`7.3.0`为目前最新版(2026-01-29)，他每个大版本是有很大差异的，所以建议大家跟我安装一样的版本。


### Postgresql

<img src="/src/assets/images/orm/pg.png" width="50" height="50" alt="PostgreSQL" />

数据库的种类也是非常多的，这里我选择使用`PostgreSQL`，完全开源免费，我称为世界第一数据库(个人言论)，因为他有非常强大的功能，例如支持高级数据类型，`JSON` `数组` `枚举` `布尔值` `地理空间GIS`,事务与并发能力更强，并且还支持自定义扩展其功能。 


### PostgresSQL安装教程

1. 简单粗暴，访问官网[https://www.postgresql.org/download/](https://www.postgresql.org/download/)，选择适合你操作系统的版本，然后下载安装即可。
![PostgresSQL安装教程](../../assets/images/orm/1.png)
![PostgresSQL安装教程](../../assets/images/orm/2.png)
![PostgresSQL安装教程](../../assets/images/orm/3.png)

2. 使用`docker`安装

```bash
docker pull postgres:18
docker run -d --name postgresServer -p 6666:5432 -e POSTGRES_PASSWORD=123456 postgres:18
```

账号默认为`postgres`，密码为`123456`，端口号为`6666`。

安装数据库可视化工具：打开`vsCode` / `Cursor` / `WebStorm`等代码编辑器，安装`Database Client`插件，然后连接数据库即可。

![数据库可视化工具](../../assets/images/orm/data-base.png)
![数据库可视化工具](../../assets/images/orm/data-base2.png)

### 开始使用Prisma

安装prisma:

```bash
npm i prisma -D
```
安装prisma客户端:
```bash
npm install @prisma/client @prisma/adapter-pg pg dotenv
```
>注: prisma7版本需要独立安装适配器

例如`postgresql`需要安装`@prisma/adapter-pg`，`mysql`需要安装`@prisma/adapter-mariadb`。

其他数据库请参考[https://www.prisma.io/docs/getting-started/prisma-orm/quickstart/prisma-postgres](https://www.prisma.io/docs/getting-started/prisma-orm/quickstart/prisma-postgres)

在Next.js项目根目录执行以下命令，初始化`prisma`:

```bash
npx prisma init
```
执行完成之后他会自动生成`prisma`文件夹，并且生成`schema.prisma`文件，以及创建一个`env`文件和`prisma.config.ts`文件。

![prisma init](../../assets/images/orm/4.png)

打开prisma/schema.prisma文件，添加以下内容：

```prisma
generator client {
  provider = "prisma-client" //使用什么客户端
  output   = "../src/generated/prisma" //生成客户端代码的目录
}

datasource db {
  provider = "postgresql" //连接什么数据库
}

model User {
  id        String   @id @default(cuid()) //主键 
  name      String //用户名
  email     String   @unique //邮箱
  password  String //密码
  createdAt DateTime @default(now()) //创建时间
  updatedAt DateTime @updatedAt //更新时间
  posts     Post[] //关联文章
}

model Post {
  id        String   @id @default(cuid()) //主键
  title     String //标题
  content   String //内容
  createdAt DateTime @default(now()) //创建时间
  updatedAt DateTime @updatedAt //更新时间
  authorId  String //作者ID
  author    User     @relation(fields: [authorId], references: [id],onDelete: Cascade,onUpdate: Cascade) //一对多关联
}
```

- @id:主键对应sql语句的`PRIMARY KEY`
- @default(cuid()):默认生成一个唯一ID 类似于sql语句的`AUTO_INCREMENT`
- @unique:唯一约束对应sql语句的`UNIQUE`
- @relation:一对多关联对应sql语句的`FOREIGN KEY`
- @relation(fields: [authorId], references: [id],onDelete: Cascade,onUpdate: Cascade):一对多关联对应sql语句的`FOREIGN KEY`
- @default(now()):默认生成当前时间 类似于sql语句的`CURRENT_TIMESTAMP`
- @updatedAt:更新时间 类似于sql语句的`UPDATE CURRENT_TIMESTAMP`
- onDelete: Cascade:级联删除(表示删除主表的时候，从表也删除，非常的方便啊)
- onUpdate: Cascade:级联更新(表示更新主表的时候，从表也更新，非常的方便啊)


打开`.env`文件，修改数据库连接信息：

连接规则:DATABASE_URL="postgresql://username:password@localhost:5432/mydb?schema=public"

- `postgresql`:数据库类型
- `username`:用户名
- `password`:密码
- `localhost`:主机名
- `5432`:端口号
- `mydb`:数据库名
- `schema=public`:模式

```env
DATABASE_URL="postgresql://postgres:123456@localhost:6666/test_db"
```

执行数据库迁移命令:

```bash
npx prisma migrate dev --name init
```

执行完成之后他会在`prisma/migrations`文件夹中生成一个`migration`文件，并且生成一个sql文件，然后自动执行sql文件，创建表结构。


![prisma init](../../assets/images/orm/db.png)

接着执行生成客户端代码命令：

```bash
npx prisma generate
#生成路径是 schema.prisma 文件中client output的目录
```
![prisma init](../../assets/images/orm/client.png)

### 编写增删改查

src/lib/prisma.ts

```ts
import { PrismaClient } from '../generated/prisma/client' //引入生成客户端代码
import { PrismaPg } from '@prisma/adapter-pg' //引入适配器
const pool = new PrismaPg({ connectionString: process.env.DATABASE_URL }) //创建连接池
const prisma = new PrismaClient({ adapter: pool }) //创建客户端
export default prisma //导出客户端
```

src/app/api/route.ts

```ts
import prisma from "@/lib/prisma"; //@lib是我在tsconfig.json中配置的别名，表示src目录下的lib文件夹
import { NextRequest, NextResponse } from "next/server"; //引入NextRequest, NextResponse

export async function GET(request: NextRequest) {
    const users = await prisma.user.findMany() //查询所有用户
    return NextResponse.json(users) //返回用户列表
}

export async function POST(request: NextRequest) {
    const { name, email, password } = await request.json() //获取请求体
    const user = await prisma.user.create({
        data: { name, email, password } //创建用户
    })
    return NextResponse.json(user) //返回创建的用户
}

export async function PATCH(request: NextRequest) {
    const { id, name, email, password } = await request.json() //获取请求体
    const user = await prisma.user.update({
        where: { id },
        data: { name, email, password } //更新用户
    })
    return NextResponse.json(user) //返回更新后的用户
}

export async function DELETE(request: NextRequest) {
    const { id } = await request.json() //获取请求体
    const user = await prisma.user.delete({
        where: { id } //删除用户
    })
    return NextResponse.json(user) //返回删除后的用户
}
```

index.http

执行http文件需要在插件市场安装`REST Client`，然后打开http文件，点击`Send Request`按钮即可。

![REST Client](../../assets/images/orm/rest-client.png)

```http
### 创建用户
POST http://localhost:8888/api
Content-Type: application/json

{
    "name": "test",
    "email": "1test@test.com",
    "password": "123456"
}

### 查询所有用户
GET http://localhost:8888/api


### 更新用户
PATCH http://localhost:8888/api
Content-Type: application/json

{
    "id": "cmkyoxflr00004ck82ywc6joi",
    "name": "xiaoman",
    "email": "xiaomansdasdas",
    "password": "dasdasda"
}

### 删除用户
DELETE http://localhost:8888/api
Content-Type: application/json

{
    "id": "cmkyoxflr00004ck82ywc6joi"
}
```