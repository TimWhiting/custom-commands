serenade.global().command("find <%text%>", async (api, matches) => {
  await api.pressKey("f", ["commandOrControl"]);
  await api.typeText(matches.text);
});

serenade.global().command("zoom in", async (api, matches) => {
  await api.pressKey("+", ["commandOrControl"]);
});

serenade.global().command("zoom out", async (api, matches) => {
  await api.pressKey("-", ["commandOrControl"]);
});

serenade.global().command("minimize window", async (api) => {
  if (os.platform() === "darwin") {
    await api.pressKey("m", ["command"]);
  } else {
    api.pressKey("f11");
  }
});
serenade.global().command("maximize window", async (api) => {
  if (os.platform() === "darwin") {
    await api.pressKey("M", ["command", "option"]);
  } else {
    api.pressKey("f11");
  }
});
