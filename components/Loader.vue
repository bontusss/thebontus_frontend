<template>
  <div>
    <div class="container">
      <div class="row">
        <h4 class="loading text-center text-secondary">
          Loading
          <div class="dots">
            <span class="dot z"></span><span class="dot f"></span
            ><span class="dot s"></span
            ><span class="dot t"><span class="dot l"></span></span>
          </div>
        </h4>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    // loading animation
    let $ = (e) => document.querySelector(e);
    let dots = $(".dots");
    function animate(element, className) {
      element.classList.add(className);
      setTimeout(() => {
        element.classList.remove(className);
        setTimeout(() => {
          animate(element, className);
        }, 500);
      }, 2500);
    }
    animate(dots, "dots--animate");
  },
};
</script>

<style>
.dots {
  display: inline-flex;
}
h4 {
  font-size: 19px;
  padding: 15px;
}
.dots span {
  font-size: 10px;
}
.dots--animate .dot.z {
  -webkit-animation: scale 0.8s 0.2s forwards;
  animation: scale 0.8s 0.2s forwards;
}
.dots--animate .dot.f,
.dots--animate .dot.s {
  -webkit-animation: right 0.5s forwards;
  animation: right 0.5s forwards;
}
.dots--animate .dot.l {
  -webkit-animation: rightDown 0.4s 0.1s forwards linear,
    drop 2s 0.4s forwards linear;
  animation: rightDown 0.4s 0.1s forwards linear, drop 2s 0.4s forwards linear;
}

.dot {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #212121;
  border-radius: 10px;
  position: relative;
  margin-left: 6px;
}
.dot.z {
  position: absolute;
  transform: scale(0);
}
@-webkit-keyframes scale {
  100% {
    transform: scale(1);
  }
}
@keyframes scale {
  100% {
    transform: scale(1);
  }
}
.dot.f,
.dot.s {
  transform: translateX(0px);
}
@-webkit-keyframes right {
  100% {
    transform: translateX(16px);
  }
}
@keyframes right {
  100% {
    transform: translateX(16px);
  }
}
.dot.t {
  background: transparent;
}
.dot .l {
  margin-left: 0;
  position: absolute;
  top: 0;
  left: 0;
}
@-webkit-keyframes rightDown {
  50% {
    top: 4px;
    left: 16px;
  }
  100% {
    top: 12px;
    left: 24px;
  }
}
@keyframes rightDown {
  50% {
    top: 4px;
    left: 16px;
  }
  100% {
    top: 12px;
    left: 24px;
  }
}
@-webkit-keyframes drop {
  100% {
    transform: translate(70px, calc(35px + (100vh / 2)));
  }
}
@keyframes drop {
  100% {
    transform: translate(70px, calc(35px + (100vh / 2)));
  }
}
</style>
