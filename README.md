# 🛒 E-Shop Backend

Dự án backend cho ứng dụng thương mại điện tử, sử dụng **Node.js**, **Express**, **TypeScript**, và **Prisma ORM**.

## 🚀 Cấu trúc thư mục

src/
├── modules/ # Các module nghiệp vụ (category, product, user, ...)
├── prisma/ # Schema và config của Prisma
├── index.ts # Điểm khởi chạy server
└── ...

## ⚙️ Cách chạy project
```bash
npm install
npm run dev

## Công nghệ sử dụng
Node.js
Express
TypeScript
Prisma ORM
MySQL

@@@ Cách khởi tạo dự án Backend nodejs với expressjs, typescript, prisma và mysql:

Cài đặt các dep:
1. npm init -y || Khởi tạo npm ( package.json)
2. npm install express @prisma/client  || Cài express và prisma production
3. npm install -D typescript @types/express @types/node ts-node nodemon prisma|| Cài express và prisma dev
4. npx tsc --init || Khởi tạo typescript ( tsconfig.json)
5. Apply đống này vào tsconfig.json (Thời điểm 2/11/2025):
# {
#   "compilerOptions": {
#     "target": "es2020", // Cập nhật lên phiên bản ES mới
#     "module": "commonjs", // Module system phổ biến cho Node.js
#     "rootDir": "./src", // Thư mục chứa code TypeScript
#     "outDir": "./dist", // Thư mục chứa code JavaScript sau khi build
#     "esModuleInterop": true, // Cho phép import các module CommonJS
#     "forceConsistentCasingInFileNames": true,
#     "strict": true, // Bật chế độ strict
#     "skipLibCheck": true
#   }
# }
6. npx prisma init || Khởi tạo prisma 
7. npx prisma migrate hoặc npx prisma db pull (tùy dùng db sẵn hay khởi tạo trong code nhé !)
8. npx prisma generate || Apply db vào code
9. Chạy thooiiiii 

##Lưu ý: Có thể sẽ bị lỗi prisma không nhận .env DATABASE_URL
##      Chú ý download dotenv và apply vào prisma
##      Tải nodemon về để auto regenerate server when having any changes
##      Apply: "dev" : "nodemon ./src/index.ts" vào file package.json để có thể: npm run dev


######### NẾU BẠN ĐỌC ĐƯỢC ĐẾN ĐÂY -> CHÚC BẠN THÀNH CÔNG VỚI DỰ ÁN CỦA BẠN NHÉ! #############
