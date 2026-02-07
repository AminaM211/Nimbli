const STORAGE_KEY = "nimbli_register_v1"

export function loadData(){
  try{
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}")
  }catch{
    return {}
  }
}

export function saveData(patch){
  const current = loadData()
  const next = { ...current, ...patch }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
  return next
}

export function clearData(){
  localStorage.removeItem(STORAGE_KEY)
}

export function setProgress(step){
  const pills = document.querySelectorAll("[data-pill]")
  pills.forEach((pill, idx) => {
    const s = idx + 1
    pill.classList.remove("is-done","is-active","is-todo")
    if (s < step) pill.classList.add("is-done")
    else if (s === step) pill.classList.add("is-active")
    else pill.classList.add("is-todo")
  })
}

export function showError(msg){
  const el = document.querySelector("[data-error]")
  if (!el) return
  el.textContent = msg
  el.style.display = "block"
}

export function hideError(){
  const el = document.querySelector("[data-error]")
  if (!el) return
  el.style.display = "none"
}

export function required(value){
  return String(value || "").trim().length > 0
}

export function emailOk(value){
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(value||"").trim())
}

export function byName(name){
  return document.querySelector(`[name="${name}"]`)
}

export function fillFromStorage(names){
  const d = loadData()
  names.forEach((n) => {
    const el = byName(n)
    if (!el) return
    if (el.type === "checkbox") el.checked = Boolean(d[n])
    else el.value = d[n] ?? ""
  })
}