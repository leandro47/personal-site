export default {
    state: {
        items: [
            {
                'id': 4,
                'period': 'Fev/2021 - Present',
                'company': 'SoftExpert',
                'description': 'software engineer'
            },
            {
                'id': 3,
                'period': 'Mai/2018 - Fev/2021',
                'company': 'Mallon Concessionaria',
                'description': 'Full stack developer using CodeIgniter 3/4, Mysql and SQL server'
            },
            {
                'id': 2,
                'period': 'Out/2017 - Out/2018',
                'company': 'Max Internet',
                'description': 'Support and maintenance of network equipment'
            },
            {
                'id': 1,
                'period': 'Jan/2017 - Set/2017',
                'company': 'Cla Ribeiro Agency',
                'description': '(Small business in the fashion segment) image and video editor Edit images with photoshop and also videos, assist photographer'
            }
        ]
    },
    getters: {
        getExperience(state){
            return state.items
        }
    }

}