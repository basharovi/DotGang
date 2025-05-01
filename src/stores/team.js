import { defineStore } from 'pinia'

export const useTeamStore = defineStore('team', {
  state: () => ({
    members: [
      {
        id: 1,
        name: 'Mahmudul Hasan',
        photo: '/images/team/mahmudul.jpg',
        designation: 'Senior Staff Software Engineer',
        company: 'SELISE Bangladesh',
        description: 'Passionate about democratizing .NET development for new developers.',
        socials: {
          github: 'https://github.com/mahmudx',
          linkedin: 'https://linkedin.com/in/mahmudxyz'
        }
      },
      {
        id: 2,
        name: 'Bashar Ovi',
        photo: '/images/team/basharovi.jpg',
        designation: 'Senior Software Engineer',
        company: 'Cantaloupe Inc.',
        description: 'Combining beautiful design with .NET functionality to create incredible experiences.',
        socials: {
          github: 'https://github.com/basharovi',
          linkedin: 'https://linkedin.com/in/basharovi'
        }
      },
      {
        id: 3,
        name: 'Kawsarul Alam',
        photo: '/images/team/kawsar.jpg',
        designation: 'Software Engineer L-2',
        company: 'Vivasoft Ltd.',
        description: 'Building scalable .NET solutions and mentoring the next generation of developers.',
        socials: {
          github: 'https://github.com/huvo806',
          linkedin: 'https://linkedin.com/in/shuvo806'
        }
      },
      {
        id: 4,
        name: 'Jahedul Hasan',
        photo: '/images/team/jahed.jpg',
        designation: 'Senior Software Engineer',
        company: 'Kaz Software Ltd.',
        description: 'Passionate about building an inclusive and supportive .NET developer community.',
        socials: {
          github: 'https://github.com/jahedulhasan',
          linkedin: 'https://linkedin.com/in/jahedulhasan'
        }
      },
      {
        id: 5,
        name: 'Mehedi Hasan',
        photo: '/images/team/mehedi.jpg',
        designation: 'Software Engineer L-2',
        company: 'Vivasoft Ltd.',
        description: 'Passionate about building an inclusive and supportive .NET developer community.',
        socials: {
          github: 'https://github.com/mehedihasansust',
          linkedin: 'https://linkedin.com/in/mehedihasansust'
        }
      },
      {
        id: 6,
        name: 'Hasibur Rahman',
        photo: '/images/team/evan.jpg',
        designation: 'Software Engineer L-2',
        company: 'Vivasoft Ltd.',
        description: 'Passionate about building an inclusive and supportive .NET developer community.',
        socials: {
          github: 'https://github.com/evan-shareef',
          linkedin: 'https://linkedin.com/in/evan-shareef'
        }
      },
      {
        id: 7,
        name: 'Arfizur Rahman',
        photo: '/images/team/arfiz.jpg',
        designation: 'Senior Software Engineer',
        company: 'Stealth Startup',
        description: 'Passionate about building an inclusive and supportive .NET developer community.',
        socials: {
          github: 'https://github.com/arfizur-rahman',
          linkedin: 'https://linkedin.com/in/arfizur-rahman'
        }
      },
      {
        id: 8,
        name: 'Khairul Alam',
        photo: '/images/team/khairul.jpg',
        designation: 'Staff Software Engineer',
        company: 'Vivasoft Ltd.',
        description: 'Passionate about building an inclusive and supportive .NET developer community.',
        socials: {
          github: 'https://github.com/khairultaher',
          linkedin: 'https://linkedin.com/in/khairultaher'
        }
      }
    ]
  }),
  
  getters: {
    getAllMembers() {
      return this.members
    },
    
    getMemberById: (state) => (id) => {
      return state.members.find(member => member.id === id)
    }
  }
})