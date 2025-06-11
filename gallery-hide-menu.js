document.addEventListener("DOMContentLoaded", () => {
  const TARGET_TEXTS = [
    "pause sync", "resume sync", "restart sync",
    "rebuild", "rebuild (slow)", "shut down"
  ];

  function removeDangerItems() {
    document.querySelectorAll("li > a span").forEach(span => {
      const txt = span.textContent.trim().toLowerCase();
      if (TARGET_TEXTS.includes(txt)) {
        const li = span.closest("li");
        if (li) li.remove();
      }
    });
  }

  removeDangerItems();

  const observer = new MutationObserver(() => {
    removeDangerItems();
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true
  });

  let retries = 10;
  function retryLoop() {
    if (retries-- > 0) {
      removeDangerItems();
      setTimeout(retryLoop, 500);
    }
  }
  retryLoop();
});
