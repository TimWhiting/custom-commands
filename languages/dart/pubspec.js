serenade.app("code").command("pubspec add <%dep%>", async (api, matches) => {
  await api.runCommand("open pubspec.yaml");
  await api.runCommand(`replace dependencies:\n dependencies:\n\t${matches.dep}`);
  await api.pressKey("p", ["control", "shift"]);
  await api.typeText("Pubspec Assist: Sort");
  await api.pressKey("enter");
});
