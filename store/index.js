export const state = () => ({
    user_id: "",
    people: { num: 0 },
    laboratories: [],
    graduate: 0,
})

export const getters = {
    userID(state) {
        return state.user_id
    },
    numOfPeople(state) {
        return state.people.num
    },
    labInfos(state) {
        return state.laboratories
    }
}

export const action = {
    getQuestionState({ commit }) {
        const states = {
            user_id: "12345",
            people: {
                num: 11,
            },
            graduaate: 0,
            labs: [
                {
                    name: "応用メディア情報研究室",
                    menbers: [
                        {
                            professor: "大久保",
                            point: 0,
                        },
                        {
                            professor: "土屋",
                            point: 0,
                        },
                        {
                            professor: "井本",
                            point: 0,
                        }
                    ]
                },
                {
                    name: "ネットワーク情報システム研究室",
                    menbers: [
                        {
                            professor: "佐藤",
                            point: 0,
                        },
                        {
                            professor: "小板",
                            point: 0,
                        }
                    ]
                },
                {
                    name: "知識メカトロ情報システム研究室",
                    menbers: [
                        {
                            professor: "高橋",
                            point: 0,
                        },
                    ]
                }
            ]
        }
        commit('setLabInfos', states.labs)
        commit('setGraduate', states.graduaate)
        commit('setNumber', states.people)
        commit('setUserID', states.user_id)
    }
}

export const mutation = {
    setLabInfos(state, labs) {
        state.laboratories = labs
    },
    setGraduate(state, which) {
        state.graduate = which
    },
    setNumber(state, people) {
        state.people = people
    },
    setUserID(state, user_id) {
        state.user_id = user_id
    }
}

