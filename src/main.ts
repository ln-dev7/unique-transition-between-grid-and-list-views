import gsap from "gsap";

interface Data {
  id: number;
  name: string;
  description: string;
}

const data: Data[] = [
  {
    id: 1,
    name: "Cycling 2019",
    description: "MARCH 16, 2019",
  },
  {
    id: 2,
    name: "Secret Dataset",
    description: "APRIL 15, 2018",
  },
  {
    id: 3,
    name: "Public Dataset",
    description: "JANUARY 15, 2020",
  },
  {
    id: 4,
    name: "Android Sheet",
    description: "MARCH 15, 2021",
  },
  {
    id: 5,
    name: "iOS Sheet",
    description: "APRIL 15, 2021",
  },
  {
    id: 6,
    name: "FrontEnd Sheet",
    description: "NOVEMBER 20, 2020",
  },
  {
    id: 7,
    name: "Private Dataset",
    description: "APRIL 15, 2015",
  },
  {
    id: 8,
    name: "Google Sheet",
    description: "MARCH 15, 2016",
  },
  {
    id: 9,
    name: "iOS Sheet",
    description: "APRIL 15, 2021",
  },
];

const main = document.querySelector("main")! as HTMLDivElement;

data.forEach((item) => {
  main.innerHTML += `
  <div class="card">
      <div class="content">
        <div class="left">
          <h3>${item.name}</h3>
          <span>${item.description}</span>
        </div>
        <div class="right">
          <button>Variable</button>
          <button>Property</button>
        </div>
      </div>
  </div>
`;
});

const cards = document.querySelectorAll(".card");

cards.forEach((card, index) => {
  const row = Math.floor(index / 3) + 1;
  const col = (index % 3) + 1;

  const element = card as HTMLDivElement;

  element.style.left = (col - 1) * 250 + "px";
  element.style.top = (row - 1) * 220 + "px";
});

const groupBtn = document.querySelector(".group")! as HTMLButtonElement;
const listBtn = document.querySelector(".list")! as HTMLButtonElement;

const primaryDuration = 0.3;

listBtn.addEventListener("click", () => {
  if (!listBtn.classList.contains("active")) {
    listBtn.classList.add("active");
    groupBtn.classList.remove("active");
    groupBtn.disabled = true;

    gsap.to(".card:nth-child(2), .card:nth-child(5), .card:nth-child(8)", {
      y: 73,
      duration: `${primaryDuration}`,
    });

    gsap.to(".card:nth-child(3), .card:nth-child(6), .card:nth-child(9)", {
      y: 146,
      duration: `${primaryDuration}`,
    });

    gsap.to(".card .content .right", {
      y: 20,
      opacity: 0,
      display: "none",
      duration: `${primaryDuration}`,
    });

    gsap.to(".card .content .left span", {
      opacity: 0,
      duration: `${primaryDuration}`,
      onComplete: () => {
        document.querySelectorAll(".card .content .left").forEach((item) => {
          const element = item as HTMLDivElement;
          element.style.height = "fit-content";
        });
      },
    });

    gsap.to(".card", {
      height: "68px",
      delay: `${primaryDuration}`,
      duration: `${primaryDuration}`,
    });

    gsap.to(".card", {
      width: "100%",
      left: 0,
      delay: `${primaryDuration * 2.3}`,
      duration: `${primaryDuration * 1.5}`,
      onComplete: () => {
        document.querySelectorAll(".card .content .left").forEach((item) => {
          const element = item as HTMLDivElement;
          element.style.width = "200px";
        });
        document.querySelectorAll(".card .content .right").forEach((item) => {
          const element = item as HTMLDivElement;
          element.style.width = "100%";
          element.style.padding = "0";
        });
        gsap.to(".card .content .left span", {
          opacity: 1,
          duration: `${primaryDuration}`,
        });
        gsap.to(".card .content .right", {
          y: 0,
          opacity: 1,
          duration: `${primaryDuration}`,
          display: "flex",
          onComplete: () => {
            groupBtn.disabled = false;
          },
        });
      },
    });
  }
});

groupBtn.addEventListener("click", () => {
  if (!groupBtn.classList.contains("active")) {
    groupBtn.classList.add("active");
    listBtn.classList.remove("active");
    listBtn.disabled = true;

    gsap.to(".card .content .right", {
      y: 20,
      opacity: 0,
      display: "none",
      duration: `${primaryDuration}`,
    });

    gsap.to(".card .content .left span", {
      opacity: 0,
      duration: `${primaryDuration}`,
      onComplete: () => {
        document.querySelectorAll(".card .content .right").forEach((item) => {
          const element = item as HTMLDivElement;
          element.style.width = "fit-content";
          element.style.padding = "1.5rem 0 0 0";
        });
        document.querySelectorAll(".card .content .left").forEach((item) => {
          const element = item as HTMLDivElement;
          element.style.width = "fit-content";
        });
      },
    });

    gsap.to(".card", {
      width: "240px",
      left: (index) => (index % 3) * 250 + "px",
      delay: `${primaryDuration}`,
      duration: `${primaryDuration * 1.5}`,
    });

    gsap.to(".card", {
      height: "210px",
      delay: `${primaryDuration * 2.3}`,
      duration: `${primaryDuration}`,
      onComplete: () => {
        gsap.to(".card .content .left span", {
          opacity: 1,
          duration: `${primaryDuration}`,
        });
        gsap.to(".card .content .right", {
          y: 0,
          opacity: 1,
          display: "flex",
          duration: `${primaryDuration}`,
        });
      },
    });

    gsap.to(".card:nth-child(2), .card:nth-child(5), .card:nth-child(8)", {
      y: 0,
      duration: `${primaryDuration}`,
      delay: `${primaryDuration * 3.3}`,
    });

    gsap.to(".card:nth-child(3), .card:nth-child(6), .card:nth-child(9)", {
      y: 0,
      duration: `${primaryDuration}`,
      delay: `${primaryDuration * 3.3}`,
      onComplete: () => {
        listBtn.disabled = false;
      },
    });
  }
});
