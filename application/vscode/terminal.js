serenade.global().command("show terminal", async (api) => {
  await api.focus("code");
  await api.pressKey("=", ["control", "alt"]);
});
serenade.global().command("hide terminal", async (api) => {
  await api.focus("code");
  await api.pressKey("`", ["control"]);
});

serenade.global().command("cd <%dir%>", async (api, matches) => {
  await api.runCommand("show terminal");
  await api.typeText(`cd ${matches.dir}`);
  await api.pressKey("enter");
});
serenade.global().command("cd up", async (api) => {
  await api.runCommand("show terminal");
  await api.typeText("cd ..");
  await api.pressKey("enter");
});
serenade.global().command("git push <%msg%>", async (api, matches) => {
  await api.runCommand("show terminal");
  await api.typeText(`git commit -am "${matches.msg}" && git push`);
  await api.pressKey("enter");
});
serenade.global().command("git commit <%msg%>", async (api, matches) => {
  await api.runCommand("show terminal");
  await api.typeText(`git commit -am "${matches.msg}"`);
  await api.pressKey("enter");
});
serenade.global().command("git pull", async (api) => {
  await api.runCommand("show terminal");
  await api.typeText("git pull");
  await api.pressKey("enter");
});

serenade.app("code").command("run <%cmd%>", async (api, matches) => {
  await api.runCommand("show terminal");
  await api.wait(500);
  await api.typeText(`${matches.cmd}`);
  await api.pressKey("enter");
});
serenade.app("code").command("cancel run", async (api) => {
  await api.runCommand("show terminal");
  await api.wait(500);
  await api.pressKey("c", ["control"]);
});

serenade.global().command("repeat last", async (api) => {
  await api.pressKey("up");
  await api.pressKey("enter");
});
