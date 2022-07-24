const brainly = require('brainly-scraper')

module.exports = BrainlySearch = (Question, jumlah, cb) => {
    brainly(Question.toString(),Number(jumlah)).then((res) => {
        let brainlyResult = []
        res.data.forEach((ask) => {
            let opt = {
                Question: ask.Question,
                fotoPertanyaan: ask.questionMedia
            }
            ask.jawaban.forEach(answer => {
                opt.jawaban = {
                    judulJawaban: answer.text,
                    fotoJawaban: answer.media
                }
            })
            brainlyResult.push(opt)
            })
            return brainlyResult
    }).then(x => {
        cb(x)
    }).catch(err => {
        console.log(err.error)
    })
}