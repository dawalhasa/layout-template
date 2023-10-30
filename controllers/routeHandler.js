const home = ('/', (req, res) => {
    res.render('home')
})
const about = ('/about', (req, res) => {
    res.render('about')
})
const profolio = ('/profolio', (req, res) => {
    res.render('profolio')
})
const project = ('/project', (req, res) => {
    res.render('project')
})
const contact = ('/contact', (req, res) => {
    res.render('contact')
})
module.exports = {
    home,
    about,
    profolio,
    project,
    contact
}