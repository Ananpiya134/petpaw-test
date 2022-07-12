import branch from '../assets/icons/branch.png'
import comment from '../assets/icons/comments.png'
import key from '../assets/icons/key.png'
import puzzle from '../assets/icons/plugin.png'
import bill from '../assets/icons/salary.png'
import users from '../assets/icons/team.png'

const content = [
    {
        title:'Branches',
        description:'Abstact Branches lets you manage, version, and your design in one place.',
        icon: branch
    },
    {
        title:'Manage your account',
        description:'Configure your account setting, such as yout email, profile details, and password.',
        icon:users
    },
    {
        title:'Manage organizations, teams, and projects',
        description:'Use Abstracts organizations, teams, and projects to organize your people and your work.',
        icon:puzzle
    },
    {
        title:'Manage billing',
        description:'Change subscription and payment details.',
        icon:bill
    },
    {
        title:'Authenticate to Abstract',
        description:'Set up abd configure SSO, SCIM, and Just-in-Time provisioning.',
        icon:key
    },
    {
        title:'Abstract support',
        description:'Get in touch with a human',
        icon:comment 
    }
]

export default content