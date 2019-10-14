import * as React from "react";
import { Card } from "antd";

class HomePage extends React.Component<{}, {}> {
  componentDidMount() {
    // class Numbers {
    //   num_val = 13; // 实例变量
    //   static sval = 10; // 静态变量

    //   storeNum(): void {
    //     var local_num = 14; // 局部变量
    //   }
    // }
    // var ob = new Numbers();
    // function a(): any[] {
    //   return [12, 3];
    // }
    // function disp(x: any, y?: any): void {
    //   console.log(x);
    //   console.log(y);
    // }
    // // disp(1)
    // let arr: object | number[] = [99, { a: 1 }, { b: 2 }, 45];
    // let str: string =
    //   "?headlmgUr=http%3A%2F%2Fthirdwx.qlogo.cn%2Fmmopen%2Fvi_ 32%2FHIgAFAzkYuOYXxS2FzJVRS7IHCTZ8BZoQQuJiaRwOKjOMvew4BxKqMf9dgmIhVnmXqyZogictvyZClvibpde8ohtA%2F132&openid=ofFjH1KWilklq3LuC_ bGI4ZRdw94&nickname=**%E5%8D%8E#/flightF";

    class Car {
      // 字段
      engine: string;
      static b: number;

      // 构造函数
      constructor(engine: string, b: number) {
        this.engine = engine;
        this.b = b;
      }

      // 方法
      disp(): void {
        console.log("发动机为 :   " + this.engine);
      }
    }

    Car.b = 9898989;
    console.log(new Car("12,", 5));
    // console.log(new Car("qw", 12));
    class Root {
      str: string;
      doPrint(): void {
        console.log("fuufufuf类的 doPrint()方法。");
      }
    }

    class Child extends Root {
      doPrint(): void {
        // console.log(22222222, super.doPrint);
        console.log("子类的 doPrint()方法。");
      }
    }

    // var obj = new Child();
    // obj.str = "hello";
    // console.log(obj.doPrint());
    class Encapsulate {
      str1: string = "hello";
      private str2: string = "worldwwwwwwwww";
      doPrint(): void {
        // console.log(22222222, super.doPrint);
        console.log(this.str2);
      }
    }

    var obj = new Encapsulate();
    console.log(obj.str1); // 可访问
    console.log(Encapsulate.str2); // 编译错误， str2 是私有的
    
  }

  handleParams = (str: string): object => {
    let obj: any = {};
    let str2 = str.slice(0, 1).split("&");
    str2.map((v: string): void | object => {
      let x: any[] = v.split("=");
      obj[x[0]] = x[1];
    });
    return obj;
  };

  public render(): JSX.Element {
    let a: undefined;
    let num = 2; // 类型推断为 number
    let b = (c: number = 90909): number => {
      return c;
    };

    return (
      <Card bordered title="Hello React & Antd" style={{ margin: "16px 16px" }}>
        <p>Happy coding!</p>
        <p>{a}</p>
        <p>{num}</p>
        <p>{b()}</p>
      </Card>
    );
  }
}

export default HomePage;
