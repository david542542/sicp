function union(a, b) {
    const r = new Set(a)
    for (const v of b) r.add(v)
    return r
}

class App {
    constructor(form) {
        this.form = form
        this.state = new Set
        this.form.addEventListener('submit', event => this.onSubmit(event))
    }
    onSubmit(event) {
        event.preventDefault()
        const arr = this.parseInput(this.form.theInput.value)
        this.state = union(this.state, new Set(arr))
        this.form.theOutput.value = `Set(${this.state.size}) = ${Array.from(this.state)}`
    }
    parseInput(t) {
        return t.split(",").map(x => x.trim()).filter(Boolean)
    }
}

const app = new App(document.forms.theForm)

document.write("module loaded: oop")
