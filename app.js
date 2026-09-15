/* ==========================================================================
   CS2 EXEC BOOK — APP LOGIC
   No build step, no server — everything here runs directly off file://.
   ========================================================================== */

(function () {
  "use strict";

  const state = {
    mapId: null,
    execId: null,
    size: "m" // s | m | l
  };

  const els = {
    mapTabs: document.getElementById("mapTabs"),
    execList: document.getElementById("execList"),
    content: document.getElementById("content"),
    crumb: document.getElementById("crumb"),
    popover: document.getElementById("hoverPopover"),
    popoverImg: document.getElementById("hoverPopoverImg"),
    popoverTag: document.getElementById("hoverPopoverTag")
  };

  /* ---------------- Icons ---------------- */

  function mouseIcon(mouseState) {
    // mouseState: "left" | "right" | "both" | falsy
    const leftOn = mouseState === "left" || mouseState === "both";
    const rightOn = mouseState === "right" || mouseState === "both";
    const on = "var(--accent)";
    const off = "none";
    const onStroke = "var(--accent)";
    const offStroke = "var(--text-faint)";
    return `
      <svg width="13" height="17" viewBox="0 0 13 17" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M6.5 0.75C2.9 0.75 0.75 3.2 0.75 6.4V10.6C0.75 13.8 2.9 16.25 6.5 16.25C10.1 16.25 12.25 13.8 12.25 10.6V6.4C12.25 3.2 10.1 0.75 6.5 0.75Z"
              stroke="${offStroke}" stroke-width="1" fill="none"/>
        <path d="M6.5 0.75C4.53 0.75 2.98 1.66 2.02 3.05L6.5 3.05L6.5 0.75Z"
              fill="${leftOn ? on : off}" stroke="${leftOn ? onStroke : offStroke}" stroke-width="0.75"/>
        <path d="M6.5 0.75C8.47 0.75 10.02 1.66 10.98 3.05L6.5 3.05L6.5 0.75Z"
              fill="${rightOn ? on : off}" stroke="${rightOn ? onStroke : offStroke}" stroke-width="0.75"/>
        <line x1="6.5" y1="0.9" x2="6.5" y2="3.05" stroke="${offStroke}" stroke-width="0.75"/>
      </svg>`;
  }

  function arrowIcon(dir) {
    // dir: "up" | "down"
    const d = dir === "up" ? "M5 1L9 6H1L5 1Z" : "M5 9L1 4H9L5 9Z";
    return `<svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="${d}"/></svg>`;
  }

  /* ---------------- Badge building ---------------- */

  function buildBadges(inputs) {
    if (!inputs) return "";
    const parts = [];

    if (inputs.mouse) {
      const label = inputs.mouse === "both" ? "Both" : inputs.mouse === "left" ? "Left" : "Right";
      parts.push(`<span class="badge mouse-badge" title="${label} click">${mouseIcon(inputs.mouse)}<span>${label}</span></span>`);
    }
    if (inputs.w) {
      parts.push(`<span class="badge key" title="Hold W">W</span>`);
    }
    if (inputs.a) {
      parts.push(`<span class="badge key" title="Hold A">A</span>`);
    }
    if (inputs.d) {
      parts.push(`<span class="badge key" title="Hold D">D</span>`);
    }
    if (inputs.jump) {
      parts.push(`<span class="badge jump" title="Jump">${arrowIcon("up")}<span>Jump</span></span>`);
    }
    if (inputs.shift) {
      parts.push(`<span class="badge shift" title="Walk (shift)">Shift</span>`);
    }
    if (inputs.crouch) {
      parts.push(`<span class="badge crouch" title="Crouch">${arrowIcon("down")}<span>Crouch</span></span>`);
    }
    return parts.join("");
  }

  /* ---------------- Image w/ fallback ---------------- */

  function shotMarkup(src, tag) {
    return `
      <div class="shot" data-src="${escapeAttr(src)}" data-tag="${escapeAttr(tag)}">
        <img src="${escapeAttr(src)}" alt="${tag} view" loading="lazy"
             onerror="window.__cs2Exec.onImgError(this)">
        <span class="shot-tag">${tag}</span>
        <span class="shot-expand">${expandIcon()}</span>
      </div>`;
  }

  function expandIcon() {
    return `<svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M1 4V1H4M7 1H10V4M10 7V10H7M4 10H1V7" stroke="currentColor" stroke-width="1.2"/>
    </svg>`;
  }

  function onImgError(imgEl) {
    const shot = imgEl.closest(".shot");
    if (!shot || shot.classList.contains("placeholder")) return;
    shot.classList.add("placeholder");
    const src = shot.getAttribute("data-src") || "";
    shot.innerHTML = `
      <span class="ph-text">NO IMAGE<br>${escapeHtml(src)}</span>
      <span class="shot-tag">${shot.dataset.tagLabel || ""}</span>`;
  }

  function escapeHtml(str) {
    return String(str).replace(/[&<>"']/g, (c) => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
    }[c]));
  }
  function escapeAttr(str) { return escapeHtml(str); }

  /* ---------------- Data helpers ---------------- */

  function getMap(id) {
    return CS2_DATA.maps.find((m) => m.id === id);
  }
  function getExec(map, id) {
    return map.execs.find((e) => e.id === id);
  }

  /* ---------------- Rendering ---------------- */

  function renderMapTabs() {
    els.mapTabs.innerHTML = CS2_DATA.maps.map((m) => `
      <button class="map-tab ${m.id === state.mapId ? "active" : ""}"
              style="--accent-map:${m.accent}"
              data-map-id="${m.id}">
        <span class="dot"></span>${m.name}
      </button>`).join("");
  }

  const SIDE_META = {
    T:   { label: "T Side",  short: "T",  cls: "t"  },
    CT:  { label: "CT Side", short: "CT", cls: "ct" }
  };

  function renderExecSidebar() {
    const map = getMap(state.mapId);
    if (!map) { els.execList.innerHTML = ""; return; }

    const buckets = { T: [], CT: [], OTHER: [] };
    map.execs.forEach((ex) => {
      const key = ex.side === "T" || ex.side === "CT" ? ex.side : "OTHER";
      buckets[key].push(ex);
    });

    const sections = [`<div class="sidebar-title">${escapeHtml(map.name)}</div>`];
    ["T", "CT", "OTHER"].forEach((key) => {
      const list = buckets[key];
      if (!list.length) return;
      const meta = SIDE_META[key];
      const labelHtml = meta
        ? `<div class="sidebar-label side-label ${meta.cls}"><span class="side-dot ${meta.cls}"></span>${meta.label}</div>`
        : `<div class="sidebar-label">Other</div>`;
      sections.push(labelHtml + list.map((ex) => execItemMarkup(ex, key)).join(""));
    });

    els.execList.innerHTML = sections.join("");
  }

  function execItemMarkup(ex, sideKey) {
    const meta = SIDE_META[sideKey];
    const tag = meta ? `<span class="side-tag ${meta.cls}">${meta.short}</span>` : "";
    return `
      <button class="exec-item ${ex.id === state.execId ? "active" : ""} ${meta ? "side-" + meta.cls : ""}" data-exec-id="${ex.id}">
        <span class="exec-name">${tag}${escapeHtml(ex.name)}</span>
        <span class="exec-meta">${ex.lineups.length} lineup${ex.lineups.length === 1 ? "" : "s"}</span>
      </button>`;
  }

  function renderContent() {
    const map = getMap(state.mapId);
    if (!map) return;
    const exec = getExec(map, state.execId);
    els.crumb.innerHTML = `<b>${map.name}</b>${exec ? " / " + escapeHtml(exec.name) : ""}`;

    if (!exec) {
      els.content.innerHTML = `<div class="empty-state"><div class="big">Select an exec</div>Pick one from the left to see its lineups.</div>`;
      return;
    }

    if (!exec.lineups.length) {
      els.content.innerHTML = execHeading(exec) + `<div class="empty-state"><div class="big">No lineups yet</div>Add entries for this exec in data.js.</div>`;
      return;
    }

    const cards = exec.lineups.map((lu) => `
      <article class="lineup-card" data-lineup-id="${lu.id}">
        <div class="shot-pair">
          ${shotMarkup(lu.stand, "Stand")}
          ${shotMarkup(lu.aim, "Aim")}
        </div>
        <div class="card-body">
          <p class="caption">${escapeHtml(lu.caption)}</p>
          <div class="badge-row">${buildBadges(lu.inputs)}</div>
        </div>
      </article>`).join("");

    els.content.innerHTML =
      execHeading(exec) +
      sizeToolbar() +
      `<div class="lineup-grid size-${state.size}" id="lineupGrid">${cards}</div>`;

    bindSizeToolbar();
    bindCardZoom();
  }

  function execHeading(exec) {
    return `
      <div class="exec-heading">
        <div>
          <h1>${escapeHtml(exec.name)}</h1>
          ${exec.note ? `<p class="note">${escapeHtml(exec.note)}</p>` : ""}
        </div>
        <div class="count">${exec.lineups.length} LINEUP${exec.lineups.length === 1 ? "" : "S"}</div>
      </div>`;
  }

  function sizeToolbar() {
    const sizes = [["s", "Small"], ["m", "Medium"], ["l", "Large"]];
    return `
      <div class="toolbar">
        <span class="toolbar-label">Card size</span>
        ${sizes.map(([key, label]) => `
          <button class="size-btn ${state.size === key ? "active" : ""}" data-size="${key}" title="${label}">${key.toUpperCase()}</button>
        `).join("")}
      </div>`;
  }

  function bindSizeToolbar() {
    els.content.querySelectorAll(".size-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        state.size = btn.dataset.size;
        const grid = document.getElementById("lineupGrid");
        if (grid) grid.className = `lineup-grid size-${state.size}`;
        els.content.querySelectorAll(".size-btn").forEach((b) => b.classList.toggle("active", b === btn));
      });
    });
  }

  function bindCardZoom() {
    els.content.querySelectorAll(".shot").forEach((shotEl) => {
      shotEl.addEventListener("mouseenter", () => {
        if (shotEl.classList.contains("placeholder")) return;
        showHoverPopover(shotEl);
      });
      shotEl.addEventListener("mouseleave", hideHoverPopover);
      // keep it usable on touch devices: tap toggles the popover
      shotEl.addEventListener("click", (e) => {
        if (shotEl.classList.contains("placeholder")) return;
        if (els.popover.classList.contains("visible") && els.popover.dataset.forSrc === shotEl.dataset.src) {
          hideHoverPopover();
        } else {
          showHoverPopover(shotEl);
        }
      });
    });
  }

  /* ---------------- Hover popover (single-image enlarge) ---------------- */

  function showHoverPopover(shotEl) {
    const src = shotEl.dataset.src;
    const tag = shotEl.dataset.tag || "";
    els.popover.dataset.forSrc = src;
    els.popoverImg.src = src;
    els.popoverImg.alt = `${tag} view enlarged`;
    els.popoverTag.textContent = tag;
    els.popover.classList.add("visible");
    positionPopover(shotEl);
    els.popoverImg.onload = () => positionPopover(shotEl);
  }

  function positionPopover(shotEl) {
    const rect = shotEl.getBoundingClientRect();
    const pop = els.popover;
    const margin = 12;
    const popRect = pop.getBoundingClientRect();

    let left = rect.left + rect.width / 2 - popRect.width / 2;
    left = Math.max(margin, Math.min(left, window.innerWidth - popRect.width - margin));

    let top = rect.top - popRect.height - margin;
    if (top < margin) top = rect.bottom + margin;
    top = Math.max(margin, Math.min(top, window.innerHeight - popRect.height - margin));

    pop.style.left = `${left}px`;
    pop.style.top = `${top}px`;
  }

  function hideHoverPopover() {
    els.popover.classList.remove("visible");
    delete els.popover.dataset.forSrc;
  }

  window.addEventListener("scroll", hideHoverPopover, true);
  window.addEventListener("resize", hideHoverPopover);

  /* ---------------- Events ---------------- */

  els.mapTabs.addEventListener("click", (e) => {
    const btn = e.target.closest(".map-tab");
    if (!btn) return;
    selectMap(btn.dataset.mapId);
  });

  els.execList.addEventListener("click", (e) => {
    const btn = e.target.closest(".exec-item");
    if (!btn) return;
    selectExec(btn.dataset.execId);
  });

  function selectMap(mapId, opts) {
    const map = getMap(mapId);
    if (!map) return;
    state.mapId = mapId;
    const wanted = opts && opts.execId;
    const stillExists = wanted && getExec(map, wanted);
    state.execId = stillExists ? wanted : (map.execs.length ? map.execs[0].id : null);
    renderMapTabs();
    renderExecSidebar();
    renderContent();
    syncHash();
  }

  function selectExec(execId) {
    state.execId = execId;
    renderExecSidebar();
    renderContent();
    syncHash();
  }

  /* ---------------- Hash routing (survives refresh) ---------------- */

  function syncHash() {
    const hash = `#${encodeURIComponent(state.mapId || "")}/${encodeURIComponent(state.execId || "")}`;
    if (window.location.hash !== hash) {
      history.replaceState(null, "", hash);
    }
  }

  function parseHash() {
    const raw = window.location.hash.replace(/^#/, "");
    if (!raw) return null;
    const [mapId, execId] = raw.split("/").map((s) => decodeURIComponent(s || ""));
    return { mapId, execId };
  }

  function restoreFromHash() {
    const parsed = parseHash();
    if (parsed && parsed.mapId && getMap(parsed.mapId)) {
      selectMap(parsed.mapId, { execId: parsed.execId });
    } else {
      selectMap(CS2_DATA.maps[0].id);
    }
  }

  window.addEventListener("hashchange", restoreFromHash);

  /* ---------------- Init ---------------- */

  window.__cs2Exec = { onImgError };

  function init() {
    if (!CS2_DATA.maps.length) {
      els.content.innerHTML = `<div class="empty-state"><div class="big">No maps configured</div>Add maps in data.js to get started.</div>`;
      return;
    }
    restoreFromHash();
  }

  init();
})();
