import { CSSProperties, FC, ReactChild } from "react";
import { useSpring, animated } from "react-spring";

export interface StylesProps {
  from: CSSProperties; //动画初始阶段
  to: CSSProperties; //动画结束阶段
  loop?: boolean; //动画是否循环
  delay?: number; //动画执行时间
  immediate?: boolean; //true：阻止动画
  reset?: boolean; //重启动画
  reverse?: boolean; //反转动画 from 和 to 置换
  cancel?: boolean; //true：取消动画
  pause?: boolean; // true：暂停动画
  config?: object; //弹簧的配置文件，质量、张力、摩擦力等
}

export interface ISpringProps {
  spring: StylesProps;
  children?: ReactChild;
  style?: CSSProperties;
}

const Spring: FC<ISpringProps> = ({ style, spring, children }) => {
  const styles = useSpring(spring);
  return (
    <animated.div style={{ ...style, ...styles }}>{children}</animated.div>
  );
};

export default Spring;
