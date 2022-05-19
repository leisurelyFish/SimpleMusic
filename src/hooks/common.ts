import { nextTick, ref } from "vue";

/** `延迟执行 函数 */
export function delayedExecute(fn?: Function, time?: number) {
  nextTick(() => {
    setTimeout(() => {
      fn && fn();
    }, time || 40);
  });
}

var total = document.querySelector("#total") as any;
var totalTimer = null as any;
/** total 消息文字提示 */
export function totalTip(text: string) {
  // @ts-ignore
  !total && (total = document.querySelector("#total"));
  clearTimeout(totalTimer);
  // 打开文字提醒
  total.className = " actived ";
  total.innerText = text;
  totalTimer = setTimeout(() => {
    total.className = "";
    setTimeout(() => {
      total.innerText = "";
    }, 200);
  }, 1.6 * 1000);
}

/** 动画名称 */
let transitionName = ref("" as string);

/** 路由跳转 动画名称 */
export function routerSkipTransitionName(route?: any) {
  transitionName.value = "";
  if (route.query.upPage === "/lyric") {
    transitionName.value = "lyricPageLeave";
    return "lyricPageLeave";
  } else if (route.query.nextPage === "/lyric") {
    transitionName.value = "lyricPageEnter";
    return "lyricPageEnter";
  } else {
    transitionName.value = route.meta.transition;
    return route.meta.transition;
  }
}

/** 路由跳转 模式 */
export function routerSkipMode(route?: any) {
  // console.log('common');

  if (route.meta.mode) {
    if (route.meta.mode === " ") return "";
    return route.meta.mode;
  }
  // if (transitionName.value === "page") {
  //   return "out-in";
  // }
  return "";
}
