
const templateJson = {}



templateJson.testmonial = `<div class="radial-card-content" style="display: flex; flex-direction: column; justify-content: center; align-items: center; gap: 1rem; background-image: radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px) !important; background-position: 50% 50%; background-size: 1.1rem 1.1rem; padding: 4rem; border-radius: 1.25rem; overflow: hidden; box-sizing: border-box;">
    <img src="https://cdn.glitch.global/40d5f2e1-d6f1-4b4e-b603-44a0049b2e40/ai.png?v=1679434225142" style="padding: 0em; height: 100px; width: 100px; border-radius: 25%">
    <h1 style="margin: 0rem; text-align: center; color: mediumslateblue; text-transform: uppercase; font-size: 0.76rem;">Andrew X</h1>
    <h2 style="margin: 0rem; text-align: center; color: rgb(250,249,246); font-size: 2.6rem;">Data Engineer at Tesla</h2>
    <p style="margin: 0rem; text-align: center; color: rgba(255,255,255,0.75); line-height: 1.5rem;">Dude this code is so coool</p>
  </div>`

templateJson.radialOpening = `<div class="radial-card-content" style="display: flex; flex: 1 1 calc(25% - 1em); flex-direction: column; justify-content: center; align-items: center; gap: 1rem; background-image: radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px) !important; background-position: 50% 50%; background-size: 1.1rem 1.1rem; padding: 4rem; border-radius: 1.25rem; overflow: hidden; box-sizing: border-box;">`

templateJson.magic_card = `<div class="magic-card"><div class="inside-magic">Hey</div></div>`

templateJson.grid = `<div class="testimonial-container draggable-grid" style="flex-direction: row !important; display: flex; flex-wrap: wrap; justify-content: center; gap: 2em;">hey</div>`
templateJson.gridOpening = `<div class="testimonial-container draggable-grid" style="flex-direction: row !important; display: flex; flex-wrap: wrap; justify-content: center; gap: 2em;">`

export var replaceHtmlValuesInTemplate = function(config, options = {}) {
    const {attribute, value, template} = config
    let templateString =  options.customHtml || templateJson[template]
    var regex = new RegExp(`(${attribute}=["'])(.*?)(["'])`, 'i');
    return templateString.replace(regex, `$1${value}$3`);
}

export default templateJson