# vueSrc

## 说明

vueSource 是更改后的源文件目录，生成的文件，开发环境下，在vueSource启动dev.esm 即可，可以直接拷贝vue官方项目，然后删掉eslint即可，然后一波操作最后，就生成文件在该项目的dist文件下。
此时，在自己的前端项目中，也就是vue-cli 3.0构建的那个项目，直接引用  `import Vue from vue` ——>`import Vue from '../vueSource'`即可。


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```
