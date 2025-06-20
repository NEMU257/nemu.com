<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8" />
  <title>自己紹介</title>
  <style>
    html, body {
      margin: 0;
      padding: 0;
      height: 100%;
      overflow: hidden;
      font-family: sans-serif;
    }

    #background-canvas {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
    }

    .content {
      position: relative;
      z-index: 1;
      max-width: 600px;
      margin: 50px auto;
      background-color: rgba(255, 255, 255, 0.8);
      padding: 20px;
      border-radius: 10px;
    }

    h1 {
      color: #2c3e50;
    }
    p {
      line-height: 1.6;
    }
    ul {
      padding-left: 1.2em;
    }
  </style>
</head>
<body>
  <canvas id="background-canvas"></canvas>

  <div class="content">
    <h1>自己紹介</h1>
    <p>こんにちは、私は<strong>山田太郎</strong>です。</p>
    <p>現在は大学で情報工学を学んでおり、Web開発やAIに興味があります。</p>

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

  <script>
    const canvas = document.getElementById('background-canvas');
    const ctx = canvas.getContext('2d');
    let particles = [];

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    function createParticle() {
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 3 + 1,
        speedY: Math.random() * 1 + 0.5,
        alpha: Math.random() * 0.5 + 0.5
      };
    }

    for (let i = 0; i < 100; i++) {
      particles.push(createParticle());
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(p => {
        p.y += p.speedY;
        if (p.y > canvas.height) {
          p.y = 0;
          p.x = Math.random() * canvas.width;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${p.alpha})`;
        ctx.fill();
      });

      requestAnimationFrame(animate);
    }

    animate();
  </script>
</body>
</html>
