import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function App() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <div style={{ position: "relative", height: "100vh", overflow: "hidden" }}>
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: true, zIndex: -1 },
          background: {
            color: {
              value: "#0e0e0e", // 背景色
            },
          },
          particles: {
            number: {
              value: 80,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            color: {
              value: "#ffffff", // 粒子の色
            },
            opacity: {
              value: 0.5,
              random: true,
            },
            size: {
              value: 3,
              random: true,
            },
            move: {
              enable: true,
              speed: 1,
              direction: "none",
              outModes: {
                default: "out",
              },
            },
          },
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "repulse", // マウスに反応して弾く
              },
              onClick: {
                enable: true,
                mode: "push", // クリック時に粒子追加
              },
            },
          },
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "600px",
          margin: "50px auto",
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        <h1>自己紹介</h1>
        <p>
          こんにちは、私は<strong>山田太郎</strong>です。
        </p>
        <p>
          現在は大学で情報工学を学んでおり、Web開発やAIに興味があります。
        </p>

        <h2>趣味</h2>
        <ul>
          <li>プログラミング</li>
          <li>読書（特に技術書）</li>
          <li>旅行</li>
        </ul>

        <h2>スキル</h2>
        <ul>
          <li>HTML / CSS / JavaScript</li>
          <li>Python, Java</li>
          <li>Git / GitHub</li>
        </ul>

        <p>どうぞよろしくお願いします！</p>
      </div>
    </div>
  );
}
