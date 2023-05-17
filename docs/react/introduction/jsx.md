# JSX

## 语法规则

1. 定义虚拟 DOM 时，不要写引号
2. 标签中混入 JS 表达式要用 {}
3. 内联样式，要用 {{key: value}} 的形式 (外面一层 {} 代表要使用 JS 表达式, 里面一层 {} 表示要使用对象)
4. 只有一个根标签
5. 标签必须要闭合
6. 标签首字母：  
   (1) 若首字母小写开头，则代表是 html 中同名元素  
   (2) 若首字母大写开头, react 则去渲染对应组件

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
  </head>
  <body>
    <div id="root"></div>
    <script type="text/babel">
      const myData = "HelloWorld";
      function MyApp() {
        return <h1>Hello, world!</h1>;
      }

      const VDOM = (
        <div>
          <h2>
            <span>{myData.toLocaleLowerCase()}</span>
          </h2>
          <h2>
            <span style={{ color: "red" }}>{myData.toLocaleUpperCase()}</span>
          </h2>
          <MyApp />
        </div>
      );

      const container = document.getElementById("root");
      const root = ReactDOM.createRoot(container);
      root.render(VDOM);
    </script>
  </body>
</html>
```

## JSX 中表达式和语句的区别

表达式和语句的区别在于，表达式会返回一个值，而语句不会。  
表达式的值可以被用于赋值、传参等操作，而语句只是一些执行操作的指令，没有返回值。  
在 JSX 中，我们通常使用表达式来生成 UI 组件或者设置 UI 组件的属性值，因为这些操作需要返回一个值。

- 表达式

  1. a
  2. a + b
  3. arr.map()
  4. demon(1)
  5. function test(){}

- 语句
  1. if(){}
  2. for(){}
  3. switch(){case:xxx}

## 小练习

动态的从数据中生成页面

```html
<script type="text/babel">
  const fruits = ["apple", "orange", "banana"];

  const VDOM = (
    <div>
      <ul>
        {fruits.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </div>
  );

  const container = document.getElementById("root");
  const root = ReactDOM.createRoot(container);
  root.render(VDOM);
</script>
```
