export const state = () => ({
    user_id: "",
    labs: [],
    graduate: 0,
})

export const actions = {
    async getQuestionState({ commit }) {
        const states = {
            user_id: "12345",
            graduate: 0,
            labs: [
                {
                    name: "応用メディア情報研究室",
                    professors: [
                        {
                            name: "大久保",
                            point: 0,
                        },
                        {
                            name: "土屋",
                            point: 0,
                        },
                        {
                            name: "井本",
                            point: 0,
                        }
                    ]
                },
                {
                    name: "ネットワーク情報システム研究室",
                    professors: [
                        {
                            name: "佐藤",
                            point: 0,
                        },
                        {
                            name: "小板",
                            point: 0,
                        }
                    ]
                },
                {
                    name: "知識メカトロ情報システム研究室",
                    professors: [
                        {
                            name: "高橋",
                            point: 0,
                        },
                    ]
                }
            ]
        }

        await commit('setLabInfos', states.labs)
        await commit('setGraduate', states.graduate)
        await commit('setUserID', states.user_id)
    },
    calcScore() {
        let score = 0
        this.state.labs.forEach(element => {
            element.professors.forEach(el => {
                score += el.point        
            })
        });
        return score
    },
}

export const mutations = {
    setLabInfos(state, labs) {
        state.labs = labs
    },
    setGraduate(state, which) {
        state.graduate = which
    },
    setUserID(state, user_id) {
        state.user_id = user_id
    },
    increment(state, { labName, name }) {
        let profs = state.labs.find(lab => lab.name === labName)
        let prof = profs.professors.find(p => p.name === name)
        prof.point++

    },
    decrement(state, { labName, name }) {
        let profs = state.labs.find(lab => lab.name === labName)
        let prof = profs.professors.find(p => p.name === name)
        prof.point--
    },
    setPoint(state, { labName, name, point }) {
        let profs = state.labs.find(lab => lab.name === labName)
        let prof = profs.professors.find(p => p.name === name)
        prof.point = point
    }
}

export const getters = {
    userID(state) {
        return state.user_id
    },
    labInfos(state) {
        return state.labs
    },
    graduate(state) {
        return state.graduate
    },
    getNumOfLabs(state) {
        return state.labs.length
    }
}
