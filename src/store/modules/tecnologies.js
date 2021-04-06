export default {
    state: {
        tecnologies: [
            {
                'id': 1,
                'skill': 'PHP 7/8',
                'icon': 'fab fa-php'
            },
            {
                'id': 2,
                'skill': 'HTML5',
                'icon': 'fab fa-html5'
            },
            {
                'id': 3,
                'skill': 'CSS',
                'icon': 'fab fa-css3-alt'
            },
            {
                'id': 4,
                'skill': 'Materialize',
                'icon': 'fab fa-css3-alt'
            },
            {
                'id': 5,
                'skill': 'JavaScript',
                'icon': 'fab fa-js'
            },
            {
                'id': 6,
                'skill': 'Bootstrap',
                'icon': 'fab fa-bootstrap'
            },
            {
                'id': 7,
                'skill': 'CodeIgniter 3/4',
                'icon': 'fab fa-free-code-camp'
            },
            {
                'id': 8,
                'skill': 'Vuejs',
                'icon': 'fab fa-vuejs'
            },
            {
                'id': 9,
                'skill': 'Mysql',
                'icon': 'fas fa-database'
            },
            {
                'id': 10,
                'skill': 'SQL Server',
                'icon': 'fas fa-database'
            },
            {
                'id': 11,
                'skill': 'Oracle',
                'icon': 'fas fa-database'
            },
            {
                'id': 12,
                'skill': 'PostgreSQL',
                'icon': 'fas fa-database'
            },
            {
                'id': 13,
                'skill': 'API',
                'icon': 'fas fa-route'
            },
            {
                'id': 14,
                'skill': 'Git',
                'icon': 'fab fa-git'
            },
            {
                'id': 15,
                'skill': 'Jira',
                'icon': 'fab fa-jira'
            },
        ]
    },
    getters: {
        getTecnologies(state) {
            return state.tecnologies
        }
    }
}