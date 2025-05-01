import { defineStore } from 'pinia'

export const useTeamStore = defineStore('team', {
  state: () => ({
    members: [
      {
        id: 1,
        name: 'John Doe',
        photo: '/images/team/john-doe.jpg',
        designation: 'Lead Developer',
        company: 'Microsoft',
        description: 'Passionate about democratizing .NET development for new developers.',
        socials: {
          github: 'https://github.com/johndoe',
          linkedin: 'https://linkedin.com/in/johndoe',
          twitter: 'https://twitter.com/johndoe'
        }
      },
      {
        id: 2,
        name: 'Jane Smith',
        photo: '/images/team/jane-smith.jpg',
        designation: 'UI/UX Specialist',
        company: 'Google',
        description: 'Combining beautiful design with .NET functionality to create incredible experiences.',
        socials: {
          github: 'https://github.com/janesmith',
          linkedin: 'https://linkedin.com/in/janesmith',
          twitter: 'https://twitter.com/janesmith'
        }
      },
      {
        id: 3,
        name: 'Alex Johnson',
        photo: '/images/team/alex-johnson.jpg',
        designation: '.NET Architect',
        company: 'Amazon',
        description: 'Building scalable .NET solutions and mentoring the next generation of developers.',
        socials: {
          github: 'https://github.com/alexjohnson',
          linkedin: 'https://linkedin.com/in/alexjohnson',
          twitter: 'https://twitter.com/alexjohnson'
        }
      },
      {
        id: 4,
        name: 'Sam Williams',
        photo: '/images/team/sam-williams.jpg',
        designation: 'Community Leader',
        company: 'Stack Overflow',
        description: 'Passionate about building an inclusive and supportive .NET developer community.',
        socials: {
          github: 'https://github.com/samwilliams',
          linkedin: 'https://linkedin.com/in/samwilliams',
          twitter: 'https://twitter.com/samwilliams'
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