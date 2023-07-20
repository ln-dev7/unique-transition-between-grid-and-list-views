import gsap from "gsap";

const main = document.querySelector("main")! as HTMLDivElement;

const deleteBtn = document.querySelector(".delete")! as HTMLButtonElement;
const yesBtn = document.querySelector(".yes")! as HTMLButtonElement;
const noBtn = document.querySelector(".no")! as HTMLButtonElement;

console.log(main, deleteBtn, yesBtn, noBtn);

const primaryDuration = 0.3;

const animationYes = gsap.to(".trash-head", {
  duration: primaryDuration,
  rotate: -100,
  paused: true,
});

yesBtn.addEventListener("mouseover", () => {
  animationYes.play();
});

yesBtn.addEventListener("mouseout", () => {
  animationYes.reverse();
});

yesBtn.addEventListener("click", () => {
  gsap.to(".top", {
    rotate: -40,
    transformOrigin: "right",
  });
  gsap.to(deleteBtn, {
    y: -50,
    onComplete: () => {
      gsap.to(".trash-head", {
        rotate: 0,
        onComplete: () => {
          gsap.to(".container", {
            duration: primaryDuration,
            opacity: 0,
          });
          gsap.to(".bottom span, .yes button, .no button", {
            duration: primaryDuration,
            y: 30,
          });
          gsap.to(".top", {
            duration: primaryDuration,
            opacity: 0,
            rotate: 0,
          });
          gsap.to(".trash", {
            duration: primaryDuration,
            scale: 0.8,
            opacity: 0,
          });
          gsap.to(".delete span", {
            duration: primaryDuration,
            opacity: 1,
          });
          gsap.to(deleteBtn, {
            duration: primaryDuration,
            scale: 1,
            width: "150px",
            height: "50px",
            borderRadius: "8px",
          });
          deleteBtn.disabled = false;
        },
      });
    },
  });
});

deleteBtn.addEventListener("click", () => {
  deleteBtn.disabled = true;
  gsap.to(deleteBtn, {
    duration: primaryDuration,
    scale: 1.2,

    onComplete: () => {
      gsap.to(".delete span", {
        duration: primaryDuration,
        opacity: 0,
      });
      gsap.to(deleteBtn, {
        duration: primaryDuration,
        y: 15,
        scale: 1,
        width: 30,
        height: 30,
        borderRadius: "50%",

        onComplete: () => {
          gsap.to(".container", {
            duration: primaryDuration,
            opacity: 1,
          });
          gsap.to(deleteBtn, {
            duration: primaryDuration,
            y: -170,
          });
          gsap.to(".bottom span, .yes button, .no button", {
            duration: primaryDuration,
            y: 0,
          });
          gsap.to(".top", {
            duration: primaryDuration,
            x: 10,
            opacity: 1,
          });
          gsap.to(".trash", {
            duration: primaryDuration,
            scale: 1,
            opacity: 1,
          });
        },
      });
    },
  });
});
