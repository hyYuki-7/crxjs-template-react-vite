chrome.runtime.onInstalled.addListener(() => {
  // 拡張アイコンクリックでサイドパネルを開くように設定
  chrome.sidePanel.setPanelBehavior({ openPanelOnActionClick: true });
});
