let s = new Set()
const f = document.forms.theForm

function union(a, b) {
    const r = new Set(a)
    for (const v of b) r.add(v)
    return r
}

const parse = (t) =>
    t.split(",").map(x => x.trim()).filter(Boolean)

const onSubmit = event => {
    event.preventDefault()
    const arr = parse(f.theInput.value)
    s = union(s, new Set(arr)) // ⚠️
    f.theOutput.value = `Set(${s.size}) = ${Array.from(s)}`
}

f.addEventListener('submit', onSubmit)

document.write("module loaded: functional")
