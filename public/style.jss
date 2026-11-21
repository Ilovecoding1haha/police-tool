:root{
  --accent:#1e90ff;--accent2:#00c2ff;--green:#00d97e;--red:#ff3b5c;
  --bg:#050a14;--card:#0c1524;--line:#16243a;--text:#e8f0fa;--muted:#7d8fa8;
}
*{box-sizing:border-box;-webkit-tap-highlight-color:transparent}
body{margin:0;background:radial-gradient(1000px 500px at 50% -10%,#0d3b6633,transparent 70%),radial-gradient(600px 400px at 90% 110%,#00c2ff1a,transparent 70%),var(--bg);color:var(--text);font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Arial,sans-serif;min-height:100vh}
.wrap{max-width:480px;margin:0 auto;padding:0 18px 60px}
.topbar{display:flex;align-items:center;gap:10px;padding:18px 0 14px}
.logo{width:38px;height:38px;border-radius:11px;background:linear-gradient(135deg,var(--accent),var(--accent2));display:flex;align-items:center;justify-content:center;font-weight:800;font-size:20px;color:#04121f;box-shadow:0 0 24px #1e90ff55}
.brand{font-weight:700;font-size:17px}.brand span{color:var(--accent2)}
.pill{margin-left:auto;font-size:10px;font-weight:700;padding:5px 9px;border-radius:20px;color:var(--green);background:#00d97e15;border:1px solid #00d97e44}
.pill::before{content:"●";margin-right:5px;animation:blink 1.4s infinite}
@keyframes blink{50%{opacity:.25}}
h1{font-size:26px;line-height:1.15;margin:22px 0 8px}
h1 em{font-style:normal;background:linear-gradient(90deg,var(--accent2),var(--accent));-webkit-background-clip:text;background-clip:text;color:transparent}
.sub{color:var(--muted);font-size:14px;line-height:1.55;margin:0 0 20px}
.trust{display:flex;gap:8px;margin:0 0 22px;flex-wrap:wrap}
.tchip{font-size:11px;font-weight:600;color:var(--muted);background:var(--card);border:1px solid var(--line);padding:7px 11px;border-radius:20px;display:flex;align-items:center;gap:6px}
.tchip b{color:var(--text)}.dot{width:6px;height:6px;border-radius:50%;background:var(--green);box-shadow:0 0 8px var(--green)}
.card{background:linear-gradient(180deg,#0e1a2b,#0a1320);border:1px solid var(--line);border-radius:18px;padding:18px;margin-bottom:16px;box-shadow:0 10px 40px #0008}
.statrow{display:flex;gap:10px;margin-bottom:16px}
.stat{flex:1;text-align:center;background:#08111e;border:1px solid var(--line);border-radius:13px;padding:11px 6px}
.stat b{display:block;font-size:19px;color:var(--accent2)}.stat small{font-size:10px;color:var(--muted);text-transform:uppercase}
.btn{display:block;width:100%;border:0;border-radius:14px;padding:17px;font-size:16px;font-weight:700;cursor:pointer;font-family:inherit}
.btn-primary{background:linear-gradient(135deg,var(--accent),var(--accent2));color:#04121f;box-shadow:0 8px 28px #1e90ff55}
.btn-alert{background:linear-gradient(135deg,#ff3b5c,#ff6b35);color:#fff;font-size:18px;padding:20px;box-shadow:0 10px 34px #ff3b5c55;display:none}
.btn:disabled{opacity:.55;cursor:not-allowed}
.status{display:flex;align-items:center;gap:9px;font-size:13px;color:var(--muted);margin-top:12px}
.status .dot{width:8px;height:8px;background:#556;box-shadow:none;flex:none}
.status.ok .dot{background:var(--green);box-shadow:0 0 8px var(--green)}.status.ok{color:var(--green)}
.grid{display:grid;grid-template-columns:1fr 1fr;gap:9px;margin-top:14px}
.cell{background:#08111e;border:1px solid var(--line
